import fs from "fs"
import path from "path"
import mysql from "mysql2/promise"
import dotenv from "dotenv"

// ─── Paths ────────────────────────────────────────────────────────────────────
const PROJECT_ROOT = path.resolve(__dirname, "..")
const UPLOADS_DIR = path.resolve(PROJECT_ROOT, "../uploads")
const BACKUP_DIR = path.resolve(PROJECT_ROOT, "../backup")

// ─── Helpers ──────────────────────────────────────────────────────────────────
function normalizePath(p: string): string {
  if (!p) return ""
  let s = p.trim().toLowerCase().replace(/\\/g, "/")
  s = s
    .replace(/^\/uploads\//, "")
    .replace(/^uploads\//, "")
    .replace(/^\//, "")
  return s
}

function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
}

interface FileEntry {
  name: string
  path: string // relative to its root dir
  size: number
}

async function scanDir(dir: string, baseDir: string): Promise<FileEntry[]> {
  if (!fs.existsSync(dir)) return []
  const entries = await fs.promises.readdir(dir, { withFileTypes: true })
  let results: FileEntry[] = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const relPath = path.relative(baseDir, fullPath).replace(/\\/g, "/")
    if (entry.isDirectory()) {
      results = results.concat(await scanDir(fullPath, baseDir))
    } else {
      try {
        const stat = await fs.promises.stat(fullPath)
        results.push({ name: entry.name, path: relPath, size: stat.size })
      } catch {
        /* skip unreadable */
      }
    }
  }
  return results
}

async function cleanEmptyParents(
  fullPath: string,
  rootDir: string
): Promise<void> {
  let parent = path.dirname(fullPath)
  while (parent !== rootDir && parent.startsWith(rootDir)) {
    try {
      const files = await fs.promises.readdir(parent)
      if (files.length === 0) {
        await fs.promises.rmdir(parent)
        parent = path.dirname(parent)
      } else {
        break
      }
    } catch {
      break
    }
  }
}

// ─── Help ─────────────────────────────────────────────────────────────────────
function showHelp(): void {
  console.log(`
\x1b[35m=== Uploads Folder Manager ===\x1b[0m

  Uploads : ${UPLOADS_DIR}
  Backup  : ${BACKUP_DIR}

  DB is read-only — no inserts or deletes are ever made.
  Files are moved on disk only.

Usage:
  npx tsx folder-manager/index.ts --action=<action> [options]

Actions:
  \x1b[36m--action=list\x1b[0m
      Show stats: total files, used / unused / untracked counts and disk size.

  \x1b[36m--action=backup\x1b[0m
      Move files from uploads → backup based on --type filter.

  \x1b[36m--action=restore\x1b[0m
      Move files from backup → uploads.

Options:
  \x1b[33m--type=used|unused|untracked|all\x1b[0m
      Which files to move (default: unused).
        used       = referenced by a post, video, or media-coverage entry
        unused     = in the attachments table but not referenced by anything
        untracked  = not in the attachments table at all
        all        = unused + untracked (everything not actively used)

  \x1b[33m--file=<relative-path>\x1b[0m
      Target a single file by path relative to uploads/.
      Example: --file=2026/06/image.png

  \x1b[33m--batch-size=<n>\x1b[0m
      Number of files to process at once (default: 100).

  \x1b[33m--dry-run\x1b[0m
      Preview what would be moved — no files are touched.
`)
}

// ─── Env + DB ─────────────────────────────────────────────────────────────────
function loadEnv(): void {
  const candidates = [
    ".env.local",
    ".env.production",
    ".env.development",
    ".env",
  ]
  for (const f of candidates) {
    const p = path.resolve(PROJECT_ROOT, f)
    if (fs.existsSync(p)) {
      dotenv.config({ path: p })
      console.log(`\x1b[32m[env] Loaded ${f}\x1b[0m`)
      return
    }
  }
  dotenv.config()
}

async function getPool(): Promise<mysql.Pool> {
  if (!process.env.DB_HOST || !process.env.DB_NAME) {
    throw new Error("DB_HOST / DB_NAME not set in environment")
  }
  return mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 3,
    waitForConnections: true,
  })
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main(): Promise<void> {
  loadEnv()

  const raw = process.argv.slice(2)
  if (raw.length === 0 || raw.includes("--help") || raw.includes("-h")) {
    showHelp()
    process.exit(0)
  }

  const params: Record<string, string | boolean> = {}
  for (const arg of raw) {
    if (!arg.startsWith("--")) continue
    const eq = arg.indexOf("=")
    const k = eq === -1 ? arg.slice(2) : arg.slice(2, eq)
    const v = eq === -1 ? true : arg.slice(eq + 1)
    params[k] = v
  }

  const action = params.action as string
  if (!["list", "backup", "restore"].includes(action)) {
    console.error(`\x1b[31m[Error] Unknown action: "${action}"\x1b[0m`)
    showHelp()
    process.exit(1)
  }

  const type = (params.type as string) || "unused"
  if (!["used", "unused", "untracked", "all"].includes(type)) {
    console.error(`\x1b[31m[Error] Unknown type: "${type}"\x1b[0m`)
    process.exit(1)
  }

  const isDryRun = params["dry-run"] === true
  const batchSize = parseInt((params["batch-size"] as string) || "100", 10)

  // Validate --file to prevent path traversal
  let targetFile: string | null = null
  if (params.file) {
    const rawFile = params.file as string
    const rootDir = action === "restore" ? BACKUP_DIR : UPLOADS_DIR
    const abs = path.resolve(rootDir, rawFile)
    if (!abs.startsWith(rootDir + path.sep)) {
      console.error("\x1b[31m[Error] Path traversal detected in --file\x1b[0m")
      process.exit(1)
    }
    targetFile = normalizePath(rawFile)
  }

  if (isDryRun) {
    console.log(
      "\x1b[33m[Dry Run] Preview mode — no files will be moved.\x1b[0m"
    )
  }

  // ── Read DB (read-only — no writes ever) ─────────────────────────────────────
  console.log("\x1b[34m[1/3] Reading database (read-only)...\x1b[0m")
  const pool = await getPool()
  let attachmentByPath: Map<string, number>
  let usedAttachmentIds: Set<number>
  // Files referenced directly inside rich-text content (not via attachments table)
  const contentEmbeddedPaths = new Set<string>()

  /**
   * Extract all upload file paths from a rich-text blob.
   *
   * Handles:
   *   /uploads/2024/01/file.png          (root-relative)
   *   https://domain.com/uploads/...     (absolute URL)
   *   \/uploads\/2024\/01\/file.png      (JSON-escaped slashes stored in DB)
   *   /uploads/2024/01/my%20file.pdf     (percent-encoded)
   *   srcset="... /uploads/x.png 800w"   (srcset, style url(), href)
   *
   * Returns raw (still-encoded) path strings; caller should normalizePath() them.
   */
  function extractUploadPaths(text: string): string[] {
    // Unescape JSON-encoded slashes first (\/ → /)
    const unescaped = text.replace(/\\\//g, "/")

    const results = new Set<string>()
    // Match /uploads/ preceded by anything (absolute URL domain, quote, whitespace, =)
    // Capture the path until a hard terminator: whitespace, quotes, <>, ), ], ?, #, comma (srcset)
    const re = /\/uploads\/([\w%+.\-][^\s"'<>()\[\]?#,\\]*)/gi
    let m: RegExpExecArray | null
    while ((m = re.exec(unescaped)) !== null) {
      let captured = m[1]
      // Strip trailing punctuation that may bleed in from prose (period, semicolon)
      captured = captured.replace(/[.;]+$/, "")
      if (!captured) continue
      // URL-decode percent-encoding (e.g. %20 → space, %2F → /)
      try {
        captured = decodeURIComponent(captured)
      } catch {
        /* keep raw */
      }
      results.add(captured)
    }
    return Array.from(results)
  }

  try {
    const [attachments] = (await pool.execute(
      "SELECT id, image_url FROM attachments WHERE image_url IS NOT NULL"
    )) as [mysql.RowDataPacket[], mysql.FieldPacket[]]

    const [posts] = (await pool.execute(
      "SELECT featured_image, content FROM posts WHERE status != 'trash'"
    )) as [mysql.RowDataPacket[], mysql.FieldPacket[]]

    const [videos] = (await pool.execute(
      "SELECT thumbnail_id FROM videos WHERE thumbnail_id IS NOT NULL AND status != 'trash'"
    )) as [mysql.RowDataPacket[], mysql.FieldPacket[]]

    const [mediaCoverage] = (await pool.execute(
      "SELECT media_coverage_image FROM media_coverage WHERE media_coverage_image IS NOT NULL AND status != 'trash'"
    )) as [mysql.RowDataPacket[], mysql.FieldPacket[]]

    // Map: normalized file path → attachment id
    attachmentByPath = new Map<string, number>()
    for (const att of attachments) {
      attachmentByPath.set(normalizePath(att.image_url), att.id)
    }

    // Set of attachment ids that are actively referenced via FK columns
    usedAttachmentIds = new Set<number>()
    for (const p of posts)
      if (p.featured_image) usedAttachmentIds.add(p.featured_image)
    for (const v of videos)
      if (v.thumbnail_id) usedAttachmentIds.add(v.thumbnail_id)
    for (const mc of mediaCoverage)
      if (mc.media_coverage_image)
        usedAttachmentIds.add(mc.media_coverage_image)

    // Extract file paths embedded in rich-text content columns
    for (const p of posts) {
      if (p.content) {
        for (const fp of extractUploadPaths(p.content)) {
          contentEmbeddedPaths.add(normalizePath(fp))
        }
      }
    }

    console.log(
      `  attachments: ${attachments.length}  |  active refs: ${usedAttachmentIds.size}` +
        `  (posts: ${posts.length}, videos: ${videos.length}, media-coverage: ${mediaCoverage.length})` +
        `\n  content-embedded paths: ${contentEmbeddedPaths.size}`
    )
  } finally {
    await pool.end()
  }

  // Classify a file relative path into: "used" | "unused" | "untracked"
  function classify(relPath: string): "used" | "unused" | "untracked" {
    const norm = normalizePath(relPath)
    // Used if embedded directly in post content (even without an attachments row)
    if (contentEmbeddedPaths.has(norm)) return "used"
    const id = attachmentByPath.get(norm)
    if (id === undefined) return "untracked"
    return usedAttachmentIds.has(id) ? "used" : "unused"
  }

  // ── Scan filesystem ───────────────────────────────────────────────────────────
  console.log("\x1b[34m[2/3] Scanning uploads folder...\x1b[0m")
  fs.mkdirSync(UPLOADS_DIR, { recursive: true })
  const uploadFiles = await scanDir(UPLOADS_DIR, UPLOADS_DIR)
  console.log(`  ${uploadFiles.length} files in uploads`)

  console.log("\x1b[34m[3/3] Scanning backup folder...\x1b[0m")
  fs.mkdirSync(BACKUP_DIR, { recursive: true })
  const backupFiles = await scanDir(BACKUP_DIR, BACKUP_DIR)
  console.log(`  ${backupFiles.length} files in backup`)

  // ── LIST ──────────────────────────────────────────────────────────────────────
  if (action === "list") {
    let used = 0,
      unused = 0,
      untracked = 0,
      totalSize = 0
    for (const f of uploadFiles) {
      totalSize += f.size
      const c = classify(f.path)
      if (c === "used") used++
      else if (c === "unused") unused++
      else untracked++
    }

    console.log("\n\x1b[35m=== Uploads Stats ===\x1b[0m")
    console.log(`  Uploads dir   : ${UPLOADS_DIR}`)
    console.log(`  Backup dir    : ${BACKUP_DIR}`)
    console.log(
      `  Total files   : ${uploadFiles.length}  (${formatBytes(totalSize)})`
    )
    console.log(`  CMS used      : \x1b[32m${used}\x1b[0m`)
    console.log(`  Unused in DB  : \x1b[33m${unused}\x1b[0m`)
    console.log(`  Untracked     : \x1b[31m${untracked}\x1b[0m`)
    console.log(`  In backup     : \x1b[36m${backupFiles.length}\x1b[0m`)
    console.log("=====================\n")
    return
  }

  // ── Shared move helper ─────────────────────────────────────────────────────────
  async function moveFiles(
    files: FileEntry[],
    srcRoot: string,
    dstRoot: string,
    label: string
  ): Promise<void> {
    if (files.length === 0) {
      console.log(`\x1b[32mNo files to ${label}.\x1b[0m`)
      return
    }

    console.log(`\n\x1b[35m=== ${label}: ${files.length} files ===\x1b[0m`)
    let done = 0,
      skipped = 0

    for (let i = 0; i < files.length; i += batchSize) {
      const batch = files.slice(i, i + batchSize)

      for (const file of batch) {
        const src = path.join(srcRoot, file.path)
        const dst = path.join(dstRoot, file.path)

        if (isDryRun) {
          console.log(`  [dry] ${file.path}  (${classify(file.path)})`)
          done++
          continue
        }

        try {
          fs.mkdirSync(path.dirname(dst), { recursive: true })
          fs.renameSync(src, dst)
          await cleanEmptyParents(src, srcRoot)
          done++
        } catch (err) {
          console.error(
            `  \x1b[31m[Error] ${file.path}: ${err instanceof Error ? err.message : String(err)}\x1b[0m`
          )
          skipped++
        }
      }

      console.log(`  Progress: ${done + skipped}/${files.length}`)
    }

    console.log(`\n\x1b[32m[Done] Moved: ${done}  |  Failed: ${skipped}\x1b[0m`)
  }

  // ── BACKUP ────────────────────────────────────────────────────────────────────
  if (action === "backup") {
    const candidates = uploadFiles.filter((f) => {
      if (targetFile && normalizePath(f.path) !== targetFile) return false
      const c = classify(f.path)
      if (type === "all") return c !== "used" // unused + untracked
      return c === type
    })
    await moveFiles(
      candidates,
      UPLOADS_DIR,
      BACKUP_DIR,
      `Backup (type=${type})`
    )
  }

  // ── RESTORE ───────────────────────────────────────────────────────────────────
  if (action === "restore") {
    const candidates = backupFiles.filter((f) => {
      if (targetFile && normalizePath(f.path) !== targetFile) return false
      return true
    })
    await moveFiles(candidates, BACKUP_DIR, UPLOADS_DIR, "Restore")
  }
}

if (
  process.argv.some(
    (arg) => arg.startsWith("--action=") || arg === "--help" || arg === "-h"
  )
) {
  main().catch((err) => {
    console.error(`\x1b[31m[Fatal] ${err.message}\x1b[0m`)
    process.exit(1)
  })
}

export default (req: any, res: any) => {
  res.json({
    message: "Uploads Folder Manager CLI is running.",
    usage:
      "Run this tool via command line: npx tsx folder-manager/index.ts --action=<action> [options]",
  })
}
