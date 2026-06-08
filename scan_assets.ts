import fs from "fs"
import path from "path"
import mysql from "mysql2/promise"
import dotenv from "dotenv"

const UPLOADS_DIR = path.resolve(process.cwd(), "../uploads")
const USED_LIST = path.resolve(process.cwd(), "used_files.txt")
const CODE_DIRS = ["src", "public"]
const ALLOWED_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".json",
  ".css",
  ".scss",
  ".html",
])

// Helper to normalize path comparisons
function getNormalizePath(p: string): string {
  if (!p) return ""
  let normalized = p.trim().toLowerCase().replace(/\\/g, "/")
  if (normalized.startsWith("uploads/")) {
    normalized = normalized.substring("uploads/".length)
  } else if (normalized.startsWith("/uploads/")) {
    normalized = normalized.substring("/uploads/".length)
  }
  if (normalized.startsWith("/")) {
    normalized = normalized.substring(1)
  }
  return normalized
}

// Recursive function to scan a directory for files
function getFilesRecursive(dir: string, baseDir: string): string[] {
  if (!fs.existsSync(dir)) return []
  let results: string[] = []
  const list = fs.readdirSync(dir, { withFileTypes: true })
  for (const file of list) {
    const filePath = path.resolve(dir, file.name)
    if (file.isDirectory()) {
      results = results.concat(getFilesRecursive(filePath, baseDir))
    } else {
      results.push(filePath)
    }
  }
  return results
}

async function main() {
  console.log(
    "\x1b[35m=== Uploads & Database Reference Asset Scanner ===\x1b[0m"
  )

  // Load Environment Variables
  const envFiles = [".env.local", ".env.test", ".env.development", ".env.production", ".env"]
  let envLoaded = false
  for (const file of envFiles) {
    const envPath = path.resolve(process.cwd(), file)
    if (fs.existsSync(envPath)) {
      dotenv.config({ path: envPath })
      console.log(`\x1b[32m[Info] Loaded environment from ${file}\x1b[0m`)
      envLoaded = true
      break
    }
  }
  if (!envLoaded) {
    dotenv.config()
  }

  // Database Connection setup
  let dbUrls: string[] = []
  let dbPostsContent: string[] = []
  let isDbConnected = false

  if (process.env.DB_HOST && process.env.DB_NAME) {
    console.log(
      `\x1b[34m[1/3] Connecting to database: ${process.env.DB_HOST} (${process.env.DB_NAME})...\x1b[0m`
    )
    let pool: mysql.Pool | null = null
    try {
      pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: 3,
      })

      // Query attachments image_url
      const [attachments]: [any[], any] = await pool.execute(
        "SELECT image_url FROM attachments WHERE image_url IS NOT NULL"
      )
      for (const row of attachments) {
        if (row.image_url) {
          dbUrls.push(row.image_url)
        }
      }
      console.log(`Loaded ${dbUrls.length} image URLs from attachments table.`)

      // Query posts content (exclude trash; content may embed /uploads/ file references)
      const [posts]: [any[], any] = await pool.execute(
        "SELECT content FROM posts WHERE content IS NOT NULL AND status != 'trash'"
      )
      for (const row of posts) {
        if (row.content) {
          dbPostsContent.push(row.content)
        }
      }
      console.log(
        `Loaded ${dbPostsContent.length} post content records from posts table.`
      )
      isDbConnected = true
    } catch (err: any) {
      console.error(
        `\x1b[31m[Warning] Database connection/query failed: ${err.message}\x1b[0m`
      )
      console.log("Proceeding with empty database records.")
    } finally {
      if (pool) {
        await pool.end()
      }
    }
  } else {
    console.log(
      `\x1b[33m[Warning] DB_HOST or DB_NAME not configured in env. Skipping database check.\x1b[0m`
    )
  }

  // Build attachment normalize set for fast lookup
  const dbUrlsNormalized = new Set<string>()
  const dbUrlsFilenames = new Set<string>()
  for (const url of dbUrls) {
    const norm = getNormalizePath(url)
    if (norm) {
      dbUrlsNormalized.add(norm)
      dbUrlsFilenames.add(path.basename(norm).toLowerCase())
    }
  }

  // Extract all upload file paths embedded in rich-text content.
  // Handles: absolute URLs, root-relative /uploads/..., JSON-escaped \/uploads\/...,
  // percent-encoded paths, srcset, href (PDFs), style url(), data-src.
  function extractContentUploadPaths(text: string): string[] {
    const unescaped = text.replace(/\\\//g, "/") // unescape JSON-encoded slashes
    const results = new Set<string>()
    const re = /\/uploads\/([\w%+.\-][^\s"'<>()\[\]?#,\\]*)/gi
    let m: RegExpExecArray | null
    while ((m = re.exec(unescaped)) !== null) {
      let captured = m[1].replace(/[.;]+$/, "") // strip trailing prose punctuation
      if (!captured) continue
      try {
        captured = decodeURIComponent(captured)
      } catch {
        /* keep raw */
      }
      results.add(captured)
    }
    return Array.from(results)
  }

  const contentEmbeddedNorms = new Set<string>()
  for (const text of dbPostsContent) {
    for (const fp of extractContentUploadPaths(text)) {
      const norm = getNormalizePath(fp)
      if (norm) contentEmbeddedNorms.add(norm)
    }
  }
  if (isDbConnected) {
    console.log(`Content-embedded upload paths: ${contentEmbeddedNorms.size}`)
  }

  // 2. Scan codebase content
  console.log(
    `\x1b[34m[2/3] Scanning codebase files inside: ${CODE_DIRS.join(", ")}...\x1b[0m`
  )
  const codeFiles: { path: string; content: string }[] = []

  for (const dirName of CODE_DIRS) {
    const dirPath = path.resolve(process.cwd(), dirName)
    if (!fs.existsSync(dirPath)) continue
    const allFiles = getFilesRecursive(dirPath, dirPath)
    for (const f of allFiles) {
      const ext = path.extname(f).toLowerCase()
      if (ALLOWED_EXTENSIONS.has(ext)) {
        try {
          const content = fs.readFileSync(f, "utf8")
          codeFiles.push({ path: f, content })
        } catch (err) {
          // Ignore unreadable files
        }
      }
    }
  }
  console.log(`Cached ${codeFiles.length} codebase files for content matching.`)

  // 3. Scan physical files in uploads directory
  console.log(
    `\x1b[34m[3/3] Scanning physical files in ${UPLOADS_DIR}...\x1b[0m`
  )
  if (!fs.existsSync(UPLOADS_DIR)) {
    console.log(
      `\x1b[31m[Error] Uploads directory not found at ${UPLOADS_DIR}!\x1b[0m`
    )
    fs.writeFileSync(USED_LIST, "")
    process.exit(1)
  }

  const physicalFiles = getFilesRecursive(UPLOADS_DIR, UPLOADS_DIR)
  console.log(`Found ${physicalFiles.length} files in active uploads.`)

  const usedFiles: string[] = []

  for (const filepath of physicalFiles) {
    const relPath = path.relative(UPLOADS_DIR, filepath).replace(/\\/g, "/")
    const normRelPath = relPath.toLowerCase()
    const filename = path.basename(filepath)
    const lowerFilename = filename.toLowerCase()
    const checkPathCode = "uploads/" + relPath

    let isUsed = false

    // Check 1: DB attachments.image_url
    if (
      dbUrlsNormalized.has(normRelPath) ||
      dbUrlsFilenames.has(lowerFilename)
    ) {
      isUsed = true
    }

    // Check 2: file path embedded in post content (e.g. <img src="/uploads/...">)
    if (!isUsed && isDbConnected) {
      if (contentEmbeddedNorms.has(normRelPath)) {
        isUsed = true
      }
    }

    // Check 3: Codebase files
    if (!isUsed) {
      for (const codeFile of codeFiles) {
        if (
          codeFile.content.includes(filename) ||
          codeFile.content.includes(checkPathCode) ||
          codeFile.content.includes(relPath)
        ) {
          isUsed = true
          break
        }
      }
    }

    if (isUsed) {
      usedFiles.push(`uploads/${relPath}`)
    }
  }

  usedFiles.sort()

  fs.writeFileSync(
    USED_LIST,
    usedFiles.join("\n") + (usedFiles.length ? "\n" : ""),
    "utf8"
  )

  console.log("\n\x1b[35m=== Scan Complete ===\x1b[0m")
  console.log(`Total upload files scanned : ${physicalFiles.length}`)
  console.log(`Used assets (referenced)   : \x1b[32m${usedFiles.length}\x1b[0m`)
  console.log(
    `Not referenced             : \x1b[33m${physicalFiles.length - usedFiles.length}\x1b[0m`
  )
  console.log(
    `Used files listed in       : ${path.relative(process.cwd(), USED_LIST)}`
  )
  console.log("=====================\n")
}

main().catch((err) => {
  console.error("Critical Scanner Error:", err)
  process.exit(1)
})
