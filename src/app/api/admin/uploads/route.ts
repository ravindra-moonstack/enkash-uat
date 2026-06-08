import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import path from "path"
import { promises as fs } from "fs"
import fsSync from "fs"
import { verifyToken } from "@/src/utils/auth"
import { sanitizeFileName } from "@/src/lib/upload-storage"
import { UPLOADS_DIR, BACKUP_DIR } from "@/src/lib/upload-config"

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

// FIX 1: Batched async executor — prevents file descriptor exhaustion
async function batchAll<T>(
  thunks: (() => Promise<T>)[],
  batchSize = 50
): Promise<T[]> {
  const results: T[] = []
  for (let i = 0; i < thunks.length; i += batchSize) {
    const batch = await Promise.all(
      thunks.slice(i, i + batchSize).map((fn) => fn())
    )
    results.push(...batch)
  }
  return results
}

interface CacheEntry {
  timestamp: number
  enrichedFiles: any[] // FIX 4: cache enriched files, not just raw disk scan
  stats: {
    totalFiles: number
    totalSize: number
    filesInUse: number
    untrackedFiles: number
  }
}

const scanCache: Record<string, CacheEntry> = {}
const CACHE_TTL = 30000

function clearScanCache() {
  for (const key in scanCache) {
    delete scanCache[key]
  }
  console.log("[Uploads API] Cleared file scan cache due to write operation.")
}

// Background scanning state
const activeScans: Record<string, Promise<any> | undefined> = {}

let cachedReferenceIndex: Map<string, string[]> | null = null
let indexBuildPromise: Promise<Map<string, string[]>> | null = null

function triggerCodeReferenceIndexBuild() {
  if (cachedReferenceIndex || indexBuildPromise) return

  indexBuildPromise = (async () => {
    console.log(
      "[Uploads API] Starting background code reference index build..."
    )
    const startTime = Date.now()
    try {
      const srcDir = path.resolve(process.cwd(), "src")
      const codeFiles = await getCodeFilesRecursively(srcDir)
      const index = await buildCodeReferenceIndex(codeFiles)
      cachedReferenceIndex = index
      console.log(
        `[Uploads API] Code reference index built successfully in ${Date.now() - startTime}ms. Indexed ${codeFiles.length} files.`
      )
      return index
    } catch (err) {
      console.error("[Uploads API] Failed to build code reference index:", err)
      return new Map<string, string[]>()
    } finally {
      indexBuildPromise = null
    }
  })()
}

async function triggerBackgroundScan(
  source: string,
  scanDir: string,
  cacheKey: string
) {
  if (activeScans[cacheKey] !== undefined) {
    console.log(
      `[Uploads API] Background scan already running for key: ${cacheKey}`
    )
    return activeScans[cacheKey]
  }

  const promise = (async () => {
    console.log(`[Uploads API] Starting background scan for key: ${cacheKey}`)
    try {
      const allFiles = await scanDirectory(scanDir, scanDir)
      console.log(
        `[Uploads API] Background disk scan completed for key: ${cacheKey}. Found ${allFiles.length} files.`
      )

      const [attachments]: any = await pool.execute("SELECT * FROM attachments")
      const [posts]: any = await pool.execute(
        "SELECT id, title, featured_image FROM posts WHERE featured_image IS NOT NULL AND status != 'trash'"
      )
      const [videos]: any = await pool.execute(
        "SELECT id, title, thumbnail_id FROM videos WHERE thumbnail_id IS NOT NULL AND status != 'trash'"
      )
      const [mediaCoverage]: any = await pool.execute(
        "SELECT id, title, media_coverage_image FROM media_coverage WHERE media_coverage_image IS NOT NULL AND status != 'trash'"
      )

      const attachmentMap = new Map<string, any>()
      for (const att of attachments) {
        if (att.image_url) attachmentMap.set(att.image_url.toLowerCase(), att)
      }

      const usageMap = new Map<
        number,
        { type: string; id: number; title: string }[]
      >()
      for (const p of posts) {
        if (!usageMap.has(p.featured_image)) usageMap.set(p.featured_image, [])
        usageMap
          .get(p.featured_image)!
          .push({ type: "Blog", id: p.id, title: p.title || "Untitled Blog" })
      }
      for (const v of videos) {
        if (!usageMap.has(v.thumbnail_id)) usageMap.set(v.thumbnail_id, [])
        usageMap
          .get(v.thumbnail_id)!
          .push({ type: "Video", id: v.id, title: v.title || "Untitled Video" })
      }
      for (const mc of mediaCoverage) {
        if (!usageMap.has(mc.media_coverage_image))
          usageMap.set(mc.media_coverage_image, [])
        usageMap.get(mc.media_coverage_image)!.push({
          type: "Media Coverage",
          id: mc.id,
          title: mc.title || "Untitled Media Coverage",
        })
      }

      const enrichedFiles: any[] = []
      const seenPaths = new Set<string>()

      for (const file of allFiles) {
        const normPath = file.path.toLowerCase()
        seenPaths.add(normPath)
        let usages: any[] = []
        let dbInfo: any = null

        if (source === "backup") {
          const metaFullPath = path.join(BACKUP_DIR, file.path + ".meta.json")
          if (fsSync.existsSync(metaFullPath)) {
            try {
              const meta = JSON.parse(await fs.readFile(metaFullPath, "utf-8"))
              dbInfo = {
                id: meta.id,
                title: meta.title,
                content: meta.content,
                attachment_image_alt: meta.attachment_image_alt,
                file_size: meta.file_size,
                created_at: meta.created_at,
                updated_at: meta.updated_at,
              }
            } catch (err) {
              console.error("Error reading meta file:", err)
            }
          }
        } else {
          const dbEntry = attachmentMap.get(normPath)
          if (dbEntry) {
            dbInfo = {
              id: dbEntry.id,
              title: dbEntry.title,
              content: dbEntry.content,
              attachment_image_alt: dbEntry.attachment_image_alt,
              file_size: dbEntry.file_size,
              created_at: dbEntry.created_at,
              updated_at: dbEntry.updated_at,
            }
            usages = usageMap.get(dbEntry.id) || []
          }
        }

        enrichedFiles.push({
          ...file,
          url:
            source === "backup"
              ? `/api/admin/uploads?filePath=${encodeURIComponent(file.path)}&source=backup`
              : `/uploads/${file.path}`,
          dbInfo,
          usages,
          missingOnDisk: false,
        })
      }

      // DB-only attachments (missing on disk)
      if (source === "uploads") {
        for (const [normPath, dbEntry] of attachmentMap.entries()) {
          if (!seenPaths.has(normPath)) {
            const usages = usageMap.get(dbEntry.id) || []
            const fileName =
              dbEntry.image_url.split("/").pop() || "unknown-file"
            let size = 0
            try {
              const sizeStr = dbEntry.file_size || ""
              if (sizeStr.includes("KB")) size = parseFloat(sizeStr) * 1024
              else if (sizeStr.includes("MB"))
                size = parseFloat(sizeStr) * 1024 * 1024
              else size = parseInt(sizeStr) || 0
            } catch {}

            enrichedFiles.push({
              name: fileName,
              path: dbEntry.image_url,
              url: dbEntry.image_url.startsWith("http")
                ? dbEntry.image_url
                : `/uploads/${dbEntry.image_url}`,
              size,
              mtime: dbEntry.updated_at
                ? new Date(dbEntry.updated_at).getTime()
                : 0,
              birthtime: dbEntry.created_at
                ? new Date(dbEntry.created_at).getTime()
                : 0,
              dbInfo: {
                id: dbEntry.id,
                title: dbEntry.title,
                content: dbEntry.content,
                attachment_image_alt: dbEntry.attachment_image_alt,
                file_size: dbEntry.file_size,
                created_at: dbEntry.created_at,
                updated_at: dbEntry.updated_at,
              },
              usages,
              missingOnDisk: true,
            })
          }
        }
      }

      const stats = {
        totalFiles: enrichedFiles.length,
        totalSize: enrichedFiles.reduce((acc, f) => acc + f.size, 0),
        filesInUse:
          source === "backup"
            ? 0
            : enrichedFiles.filter((f) => f.dbInfo && f.usages.length > 0)
                .length,
        untrackedFiles:
          source === "backup"
            ? 0
            : enrichedFiles.filter((f) => !f.dbInfo).length,
      }

      scanCache[cacheKey] = { timestamp: Date.now(), enrichedFiles, stats }
      console.log(
        `[Uploads API] Background scan cache updated for key: ${cacheKey}`
      )
    } catch (error) {
      console.error(
        `[Uploads API] Background scan failed for key: ${cacheKey}`,
        error
      )
    } finally {
      delete activeScans[cacheKey]
    }
  })()

  activeScans[cacheKey] = promise
  return promise
}

async function queryDbFallback(
  search: string,
  type: string,
  usageFilter: string,
  sortField: string,
  sortOrder: string,
  page: number,
  limit: number
) {
  const whereClauses: string[] = []
  const params: any[] = []

  if (search) {
    whereClauses.push("(title LIKE ? OR image_url LIKE ?)")
    params.push(`%${search}%`, `%${search}%`)
  }

  if (type !== "all") {
    if (type === "images") {
      whereClauses.push(
        "(image_url LIKE '%.png' OR image_url LIKE '%.jpg' OR image_url LIKE '%.jpeg' OR image_url LIKE '%.gif' OR image_url LIKE '%.webp' OR image_url LIKE '%.svg' OR image_url LIKE '%.ico')"
      )
    } else if (type === "audio") {
      whereClauses.push(
        "(image_url LIKE '%.mp3' OR image_url LIKE '%.wav' OR image_url LIKE '%.ogg')"
      )
    } else if (type === "video") {
      whereClauses.push(
        "(image_url LIKE '%.mp4' OR image_url LIKE '%.webm' OR image_url LIKE '%.mov')"
      )
    } else if (type === "documents") {
      whereClauses.push(
        "(image_url LIKE '%.pdf' OR image_url LIKE '%.doc' OR image_url LIKE '%.docx' OR image_url LIKE '%.xls' OR image_url LIKE '%.xlsx' OR image_url LIKE '%.txt' OR image_url LIKE '%.csv' OR image_url LIKE '%.ppt' OR image_url LIKE '%.pptx')"
      )
    } else if (type === "other") {
      whereClauses.push(
        "NOT (image_url LIKE '%.png' OR image_url LIKE '%.jpg' OR image_url LIKE '%.jpeg' OR image_url LIKE '%.gif' OR image_url LIKE '%.webp' OR image_url LIKE '%.svg' OR image_url LIKE '%.ico' OR image_url LIKE '%.mp3' OR image_url LIKE '%.wav' OR image_url LIKE '%.ogg' OR image_url LIKE '%.mp4' OR image_url LIKE '%.webm' OR image_url LIKE '%.mov' OR image_url LIKE '%.pdf' OR image_url LIKE '%.doc' OR image_url LIKE '%.docx' OR image_url LIKE '%.xls' OR image_url LIKE '%.xlsx' OR image_url LIKE '%.txt' OR image_url LIKE '%.csv' OR image_url LIKE '%.ppt' OR image_url LIKE '%.pptx')"
      )
    }
  }

  if (usageFilter !== "all") {
    const usageSubquery = `
      id IN (SELECT featured_image FROM posts WHERE featured_image IS NOT NULL AND status != 'trash')
      OR id IN (SELECT thumbnail_id FROM videos WHERE thumbnail_id IS NOT NULL AND status != 'trash')
      OR id IN (SELECT media_coverage_image FROM media_coverage WHERE media_coverage_image IS NOT NULL AND status != 'trash')
    `
    if (usageFilter === "used") {
      whereClauses.push(`(${usageSubquery})`)
    } else if (usageFilter === "unused") {
      whereClauses.push(`NOT (${usageSubquery})`)
    }
  }

  const whereStr =
    whereClauses.length > 0 ? "WHERE " + whereClauses.join(" AND ") : ""

  let orderCol = "updated_at"
  if (sortField === "name") {
    orderCol = "image_url"
  } else if (sortField === "dbTitle") {
    orderCol = "title"
  } else if (sortField === "size") {
    orderCol = "file_size"
  }

  const countSql = `SELECT COUNT(*) as count FROM attachments ${whereStr}`
  const [countResult]: any = await pool.execute(countSql, params)
  const totalItems = countResult[0]?.count || 0

  const parsedLimit = Number.isInteger(limit) && limit > 0 ? limit : 40
  const offset = (page - 1) * limit
  const parsedOffset = Number.isInteger(offset) && offset >= 0 ? offset : 0

  const selectSql = `SELECT * FROM attachments ${whereStr} ORDER BY ${orderCol} ${sortOrder === "asc" ? "ASC" : "DESC"} LIMIT ${parsedLimit} OFFSET ${parsedOffset}`
  const [attachments]: any = await pool.execute(selectSql, params)

  return { attachments, totalItems }
}

async function queryBackupFallback(
  search: string,
  type: string,
  sortField: string,
  sortOrder: string,
  page: number,
  limit: number
) {
  if (!fsSync.existsSync(BACKUP_DIR)) {
    return { files: [], totalItems: 0 }
  }
  const allFiles = await scanDirectory(BACKUP_DIR, BACKUP_DIR)
  let filtered = allFiles

  if (search) {
    const searchLower = search.toLowerCase()
    filtered = filtered.filter((f: any) =>
      f.name.toLowerCase().includes(searchLower)
    )
  }

  if (type !== "all") {
    filtered = filtered.filter((f: any) => {
      const ext = path.extname(f.name).toLowerCase()
      if (type === "images")
        return [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"].includes(ext)
      if (type === "audio") return [".mp3", ".wav", ".ogg"].includes(ext)
      if (type === "video") return [".mp4", ".webm", ".mov"].includes(ext)
      if (type === "documents")
        return [
          ".pdf",
          ".doc",
          ".docx",
          ".xls",
          ".xlsx",
          ".txt",
          ".csv",
          ".ppt",
          ".pptx",
        ].includes(ext)
      if (type === "other")
        return ![
          ".png",
          ".jpg",
          ".jpeg",
          ".gif",
          ".webp",
          ".svg",
          ".mp3",
          ".wav",
          ".ogg",
          ".mp4",
          ".webm",
          ".mov",
          ".pdf",
          ".doc",
          ".docx",
          ".xls",
          ".xlsx",
          ".txt",
          ".csv",
          ".ppt",
          ".pptx",
        ].includes(ext)
      return true
    })
  }

  filtered.sort((a: any, b: any) => {
    let valA: any = a[sortField as keyof typeof a]
    let valB: any = b[sortField as keyof typeof b]
    if (sortField === "name") {
      valA = a.name.toLowerCase()
      valB = b.name.toLowerCase()
    }
    if (valA < valB) return sortOrder === "asc" ? -1 : 1
    if (valA > valB) return sortOrder === "asc" ? 1 : -1
    return 0
  })

  const totalItems = filtered.length
  const offset = (page - 1) * limit
  const paginated = filtered.slice(offset, offset + limit)

  const enriched = []
  for (const file of paginated) {
    let dbInfo = null
    const metaFullPath = path.join(BACKUP_DIR, file.path + ".meta.json")
    if (fsSync.existsSync(metaFullPath)) {
      try {
        const meta = JSON.parse(await fs.readFile(metaFullPath, "utf-8"))
        dbInfo = {
          id: meta.id,
          title: meta.title,
          content: meta.content,
          attachment_image_alt: meta.attachment_image_alt,
          file_size: meta.file_size,
          created_at: meta.created_at,
          updated_at: meta.updated_at,
        }
      } catch {}
    }
    enriched.push({
      ...file,
      url: `/api/admin/uploads?filePath=${encodeURIComponent(file.path)}&source=backup`,
      dbInfo,
      usages: [],
      missingOnDisk: false,
    })
  }

  return { files: enriched, totalItems }
}

async function scanDirectory(dir: string, baseDir: string): Promise<any[]> {
  if (!fsSync.existsSync(dir)) return []
  const list = await fs.readdir(dir, { withFileTypes: true })

  // FIX 1: use batched execution
  const thunks = list.map((file) => async () => {
    const filePath = path.resolve(dir, file.name)
    const relativePath = path.relative(baseDir, filePath).replace(/\\/g, "/")

    if (file.isDirectory()) {
      return await scanDirectory(filePath, baseDir)
    } else {
      if (file.name.endsWith(".meta.json")) return null
      try {
        const stat = await fs.stat(filePath)
        return {
          name: file.name,
          path: relativePath,
          size: stat.size,
          mtime: stat.mtimeMs,
          birthtime: stat.birthtimeMs,
        }
      } catch {
        return null
      }
    }
  })

  const rawResults = await batchAll(thunks)
  let results: any[] = []
  for (const r of rawResults) {
    if (!r) continue
    if (Array.isArray(r)) results = results.concat(r)
    else results.push(r)
  }
  return results
}

async function getAllFilesRecursively(dir: string): Promise<string[]> {
  if (!fsSync.existsSync(dir)) return []
  const list = await fs.readdir(dir, { withFileTypes: true })

  // FIX 1: use batched execution
  const thunks = list.map((file) => async () => {
    const filePath = path.resolve(dir, file.name)
    if (file.isDirectory()) return await getAllFilesRecursively(filePath)
    return filePath
  })

  const rawResults = await batchAll(thunks)
  let results: string[] = []
  for (const r of rawResults) {
    if (Array.isArray(r)) results = results.concat(r)
    else results.push(r as string)
  }
  return results
}

async function getCodeFilesRecursively(dir: string): Promise<string[]> {
  if (!fsSync.existsSync(dir)) return []
  const list = await fs.readdir(dir, { withFileTypes: true })

  // FIX 1: use batched execution
  const thunks = list.map(
    (file) => async (): Promise<string | string[] | null> => {
      const filePath = path.resolve(dir, file.name)
      if (file.isDirectory()) {
        if (["node_modules", ".next", ".git"].includes(file.name)) return null
        return await getCodeFilesRecursively(filePath)
      }
      const ext = path.extname(file.name).toLowerCase()
      if (
        [
          ".ts",
          ".tsx",
          ".js",
          ".jsx",
          ".html",
          ".css",
          ".scss",
          ".json",
        ].includes(ext)
      ) {
        return filePath
      }
      return null
    }
  )

  const rawResults = await batchAll(thunks)
  let results: string[] = []
  for (const r of rawResults) {
    if (!r) continue
    if (Array.isArray(r)) results = results.concat(r)
    else results.push(r as string)
  }
  return results
}

// FIX 2: Build an inverted index (path fragment → code files referencing it)
// O(total_code_chars) once, then O(1) per upload file lookup
async function buildCodeReferenceIndex(
  codeFiles: string[]
): Promise<Map<string, string[]>> {
  const index = new Map<string, string[]>()

  // FIX 1: batch file reads too
  const thunks = codeFiles.map((file) => async () => {
    try {
      return { file, content: await fs.readFile(file, "utf-8") }
    } catch {
      return { file, content: "" }
    }
  })
  const fileContents = await batchAll(thunks, 30)

  for (const { file, content } of fileContents) {
    if (!content) continue
    const fileRel = path.relative(process.cwd(), file).replace(/\\/g, "/")
    const matches =
      content.match(/(?:\/uploads\/|uploads\/)([^\s"'`)<>]+)/g) || []
    for (const m of matches) {
      const normalized = m.replace(/^\/uploads\//, "").replace(/^uploads\//, "")
      if (!index.has(normalized)) index.set(normalized, [])
      const refs = index.get(normalized)!
      if (!refs.includes(`Code: ${fileRel}`)) refs.push(`Code: ${fileRel}`)
    }
    // Also index bare filenames for public asset lookup
    const bareMatches =
      content.match(/["'`(]\/([^"'`()<>\s]+\.[a-z]{2,5})["'`)?]/gi) || []
    for (const m of bareMatches) {
      const stripped = m.replace(/^["'`(\/]+/, "").replace(/["'`)?]+$/, "")
      if (!index.has(stripped)) index.set(stripped, [])
      const refs = index.get(stripped)!
      if (!refs.includes(`Code: ${fileRel}`)) refs.push(`Code: ${fileRel}`)
    }
  }

  return index
}

function escapeCSVField(val: string): string {
  if (val === null || val === undefined) return ""
  const str = String(val)
  if (
    str.includes(",") ||
    str.includes('"') ||
    str.includes("\n") ||
    str.includes("\r")
  ) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

// FIX 5: Safe empty-directory cleanup — handles race conditions
async function cleanEmptyParents(fullPath: string, rootDir: string) {
  let parentDir = path.dirname(fullPath)
  while (parentDir !== rootDir && parentDir.startsWith(rootDir)) {
    try {
      const files = await fs.readdir(parentDir)
      if (files.length === 0) {
        await fs.rmdir(parentDir)
        parentDir = path.dirname(parentDir)
      } else {
        break
      }
    } catch {
      break
    }
  }
}

export async function GET(request: Request) {
  try {
    const user = await verifyToken()
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    triggerCodeReferenceIndexBuild()

    const { searchParams } = new URL(request.url)
    const action = searchParams.get("action")

    // GET raw backup file
    const filePathParam = searchParams.get("filePath")
    const source = searchParams.get("source") || "uploads"
    if (filePathParam && source === "backup") {
      const fullBackupPath = path.join(BACKUP_DIR, filePathParam)
      if (fsSync.existsSync(fullBackupPath)) {
        const fileContent = await fs.readFile(fullBackupPath)
        const ext = path.extname(fullBackupPath).toLowerCase()
        const contentTypes: Record<string, string> = {
          ".gif": "image/gif",
          ".jpeg": "image/jpeg",
          ".jpg": "image/jpeg",
          ".png": "image/png",
          ".svg": "image/svg+xml",
          ".webp": "image/webp",
        }
        return new Response(fileContent, {
          headers: {
            "Content-Type": contentTypes[ext] || "application/octet-stream",
            "Content-Length": String(fileContent.length),
          },
          status: 200,
        })
      }
    }

    if (action === "exportSheet") {
      const IMAGE_EXTS = [
        ".png",
        ".jpg",
        ".jpeg",
        ".gif",
        ".webp",
        ".svg",
        ".ico",
      ]

      // FIX 3: targeted DB queries instead of SELECT * + JS filter
      const [attachments]: any = await pool.execute("SELECT * FROM attachments")
      const [posts]: any = await pool.execute(
        "SELECT id, title, featured_image FROM posts WHERE featured_image IS NOT NULL AND status != 'trash'"
      )
      const [videos]: any = await pool.execute(
        "SELECT id, title, thumbnail_id FROM videos WHERE thumbnail_id IS NOT NULL AND status != 'trash'"
      )
      const [mediaCoverage]: any = await pool.execute(
        "SELECT id, title, media_coverage_image FROM media_coverage WHERE media_coverage_image IS NOT NULL AND status != 'trash'"
      )

      const usageMap = new Map<
        number,
        { type: string; id: number; title: string }[]
      >()
      for (const p of posts) {
        if (!usageMap.has(p.featured_image)) usageMap.set(p.featured_image, [])
        usageMap
          .get(p.featured_image)!
          .push({ type: "Blog", id: p.id, title: p.title || "Untitled Blog" })
      }
      for (const v of videos) {
        if (!usageMap.has(v.thumbnail_id)) usageMap.set(v.thumbnail_id, [])
        usageMap
          .get(v.thumbnail_id)!
          .push({ type: "Video", id: v.id, title: v.title || "Untitled Video" })
      }
      for (const mc of mediaCoverage) {
        if (!usageMap.has(mc.media_coverage_image))
          usageMap.set(mc.media_coverage_image, [])
        usageMap.get(mc.media_coverage_image)!.push({
          type: "Media Coverage",
          id: mc.id,
          title: mc.title || "Untitled Media Coverage",
        })
      }

      // Trigger background build if not ready
      triggerCodeReferenceIndexBuild()
      const referenceIndex = cachedReferenceIndex

      const rows: any[] = []

      let uploadsFiles: string[] = []
      const uploadsCacheKey = `uploads:${UPLOADS_DIR}`
      if (scanCache[uploadsCacheKey]) {
        uploadsFiles = scanCache[uploadsCacheKey].enrichedFiles.map((f) =>
          path.resolve(UPLOADS_DIR, f.path)
        )
      } else {
        uploadsFiles = await getAllFilesRecursively(UPLOADS_DIR)
        // Trigger background scan to populate it for next time
        triggerBackgroundScan("uploads", UPLOADS_DIR, uploadsCacheKey)
      }

      for (const uFile of uploadsFiles) {
        if (uFile.endsWith(".meta.json")) continue

        const relPath = path.relative(UPLOADS_DIR, uFile).replace(/\\/g, "/")
        const normPath = relPath.toLowerCase()

        const matchingAtt = attachments.find(
          (att: any) => getNormalizePath(att.image_url) === normPath
        )

        const references: string[] = []
        let inUse = false

        if (matchingAtt) {
          const dbUsages = usageMap.get(matchingAtt.id) || []
          if (dbUsages.length > 0) {
            inUse = true
            dbUsages.forEach((u: any) =>
              references.push(`DB ${u.type} (ID: ${u.id}, "${u.title}")`)
            )
          }
          references.push(`DB Attachment ID: ${matchingAtt.id}`)
        }

        // FIX 2: O(1) index lookup (safely handles when index build is in progress)
        const codeRefs = referenceIndex
          ? referenceIndex.get(relPath) || referenceIndex.get(normPath) || []
          : []
        if (codeRefs.length > 0) {
          inUse = true
          references.push(...codeRefs)
        }

        rows.push({
          type: "Uploads Folder File",
          relativePath: relPath,
          physicalLocation: path
            .relative(process.cwd(), uFile)
            .replace(/\\/g, "/"),
          webPath: `/uploads/${relPath}`,
          status: inUse ? "In Use" : "Unused",
          references:
            references.join(" | ") ||
            (referenceIndex
              ? "No active references found"
              : "No active references found (Indexing in progress...)"),
        })
      }

      const publicDir = path.resolve(process.cwd(), "public")
      const publicFiles = await getAllFilesRecursively(publicDir)

      for (const pFile of publicFiles) {
        if (
          pFile.includes("public/uploads") ||
          pFile.includes("public\\uploads")
        )
          continue
        const ext = path.extname(pFile).toLowerCase()
        if (!IMAGE_EXTS.includes(ext)) continue

        const relPath = path.relative(publicDir, pFile).replace(/\\/g, "/")
        const webPath = "/" + relPath
        const baseName = path.basename(pFile)

        const references: string[] = []
        let inUse = false

        // FIX 2: O(1) index lookup (safely handles when index build is in progress)
        const codeRefs = referenceIndex
          ? referenceIndex.get(relPath) ||
            referenceIndex.get(webPath.replace(/^\//, "")) ||
            referenceIndex.get(baseName) ||
            []
          : []
        if (codeRefs.length > 0) {
          inUse = true
          references.push(...codeRefs)
        }

        for (const att of attachments) {
          if (
            att.image_url &&
            (att.image_url.includes(relPath) ||
              att.image_url.includes(baseName))
          ) {
            inUse = true
            references.push(`DB Attachment ID: ${att.id}`)
          }
        }

        if (inUse) {
          rows.push({
            type: "Project Root Asset (public)",
            relativePath: relPath,
            physicalLocation: path
              .relative(process.cwd(), pFile)
              .replace(/\\/g, "/"),
            webPath,
            status: "In Use",
            references: references.join(" | "),
          })
        }
      }

      const csvHeaders = [
        "Type",
        "Relative Path",
        "Physical Location",
        "URL / Web Path",
        "Usage Status",
        "Codebase/DB References",
      ]
      let csvContent = csvHeaders.map(escapeCSVField).join(",") + "\n"
      for (const row of rows) {
        csvContent +=
          [
            row.type,
            row.relativePath,
            row.physicalLocation,
            row.webPath,
            row.status,
            row.references,
          ]
            .map(escapeCSVField)
            .join(",") + "\n"
      }

      const csvFilePath = path.resolve(process.cwd(), "uploads_sheet.csv")
      await fs.writeFile(csvFilePath, csvContent, "utf-8")

      return new Response(csvContent, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": "attachment; filename=uploads_sheet.csv",
        },
        status: 200,
      })
    }

    const search = searchParams.get("search") || ""
    const type = searchParams.get("type") || "all"
    const usageFilter = searchParams.get("usageFilter") || "all"
    const sortField = searchParams.get("sortField") || "mtime"
    const sortOrder = searchParams.get("sortOrder") === "asc" ? "asc" : "desc"
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "40")

    const scanDir = source === "backup" ? BACKUP_DIR : UPLOADS_DIR

    // FIX 4: cache the fully enriched file list including DB data
    const cacheKey = `${source}:${scanDir}`
    const now = Date.now()

    let enrichedFiles: any[] = []
    let stats: CacheEntry["stats"] | null = null
    let totalItems = 0

    if (
      scanCache[cacheKey] &&
      now - scanCache[cacheKey].timestamp < CACHE_TTL
    ) {
      const allCached = scanCache[cacheKey].enrichedFiles
      stats = scanCache[cacheKey].stats
      console.log(`[Uploads API] Cache hit for key: ${cacheKey}`)

      // Filters
      let filteredFiles = allCached

      if (search) {
        const searchLower = search.toLowerCase()
        filteredFiles = filteredFiles.filter((f: any) =>
          f.name.toLowerCase().includes(searchLower)
        )
      }

      if (type !== "all") {
        filteredFiles = filteredFiles.filter((f: any) => {
          const ext = path.extname(f.name).toLowerCase()
          if (type === "images")
            return [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"].includes(
              ext
            )
          if (type === "audio") return [".mp3", ".wav", ".ogg"].includes(ext)
          if (type === "video") return [".mp4", ".webm", ".mov"].includes(ext)
          if (type === "documents")
            return [
              ".pdf",
              ".doc",
              ".docx",
              ".xls",
              ".xlsx",
              ".txt",
              ".csv",
              ".ppt",
              ".pptx",
            ].includes(ext)
          if (type === "other") {
            const allExts = [
              ".png",
              ".jpg",
              ".jpeg",
              ".gif",
              ".webp",
              ".svg",
              ".mp3",
              ".wav",
              ".ogg",
              ".mp4",
              ".webm",
              ".mov",
              ".pdf",
              ".doc",
              ".docx",
              ".xls",
              ".xlsx",
              ".txt",
              ".csv",
              ".ppt",
              ".pptx",
            ]
            return !allExts.includes(ext)
          }
          return true
        })
      }

      if (source !== "backup" && usageFilter !== "all") {
        filteredFiles = filteredFiles.filter((f: any) => {
          const hasUsage = f.usages && f.usages.length > 0
          return usageFilter === "used" ? hasUsage : !hasUsage
        })
      }

      filteredFiles.sort((a: any, b: any) => {
        let valA: any = a[sortField as keyof typeof a]
        let valB: any = b[sortField as keyof typeof b]
        if (sortField === "name") {
          valA = a.name.toLowerCase()
          valB = b.name.toLowerCase()
        } else if (sortField === "dbTitle") {
          valA = (a.dbInfo?.title || a.name).toLowerCase()
          valB = (b.dbInfo?.title || b.name).toLowerCase()
        }
        if (valA < valB) return sortOrder === "asc" ? -1 : 1
        if (valA > valB) return sortOrder === "asc" ? 1 : -1
        return 0
      })

      totalItems = filteredFiles.length
      const offset = (page - 1) * limit
      enrichedFiles = filteredFiles.slice(offset, offset + limit)
    } else {
      // Cache expired or missing! Trigger background scan asynchronously
      triggerBackgroundScan(source, scanDir, cacheKey)

      if (scanCache[cacheKey]) {
        console.log(`[Uploads API] Serving stale cache for key: ${cacheKey}`)
        const allCached = scanCache[cacheKey].enrichedFiles
        stats = scanCache[cacheKey].stats

        // Filters
        let filteredFiles = allCached

        if (search) {
          const searchLower = search.toLowerCase()
          filteredFiles = filteredFiles.filter((f: any) =>
            f.name.toLowerCase().includes(searchLower)
          )
        }

        if (type !== "all") {
          filteredFiles = filteredFiles.filter((f: any) => {
            const ext = path.extname(f.name).toLowerCase()
            if (type === "images")
              return [
                ".png",
                ".jpg",
                ".jpeg",
                ".gif",
                ".webp",
                ".svg",
              ].includes(ext)
            if (type === "audio") return [".mp3", ".wav", ".ogg"].includes(ext)
            if (type === "video") return [".mp4", ".webm", ".mov"].includes(ext)
            if (type === "documents")
              return [
                ".pdf",
                ".doc",
                ".docx",
                ".xls",
                ".xlsx",
                ".txt",
                ".csv",
                ".ppt",
                ".pptx",
              ].includes(ext)
            if (type === "other") {
              const allExts = [
                ".png",
                ".jpg",
                ".jpeg",
                ".gif",
                ".webp",
                ".svg",
                ".mp3",
                ".wav",
                ".ogg",
                ".mp4",
                ".webm",
                ".mov",
                ".pdf",
                ".doc",
                ".docx",
                ".xls",
                ".xlsx",
                ".txt",
                ".csv",
                ".ppt",
                ".pptx",
              ]
              return !allExts.includes(ext)
            }
            return true
          })
        }

        if (source !== "backup" && usageFilter !== "all") {
          filteredFiles = filteredFiles.filter((f: any) => {
            const hasUsage = f.usages && f.usages.length > 0
            return usageFilter === "used" ? hasUsage : !hasUsage
          })
        }

        filteredFiles.sort((a: any, b: any) => {
          let valA: any = a[sortField as keyof typeof a]
          let valB: any = b[sortField as keyof typeof b]
          if (sortField === "name") {
            valA = a.name.toLowerCase()
            valB = b.name.toLowerCase()
          } else if (sortField === "dbTitle") {
            valA = (a.dbInfo?.title || a.name).toLowerCase()
            valB = (b.dbInfo?.title || b.name).toLowerCase()
          }
          if (valA < valB) return sortOrder === "asc" ? -1 : 1
          if (valA > valB) return sortOrder === "asc" ? 1 : -1
          return 0
        })

        totalItems = filteredFiles.length
        const offset = (page - 1) * limit
        enrichedFiles = filteredFiles.slice(offset, offset + limit)
      } else {
        // Cache is completely empty. Serve from fast SQL DB/Backup fallback!
        console.log(
          `[Uploads API] Cache completely empty. Using fast fallback for key: ${cacheKey}`
        )
        if (source === "backup") {
          const res = await queryBackupFallback(
            search,
            type,
            sortField,
            sortOrder,
            page,
            limit
          )
          enrichedFiles = res.files
          totalItems = res.totalItems
          stats = {
            totalFiles: totalItems,
            totalSize: res.files.reduce(
              (acc: number, f: any) => acc + f.size,
              0
            ),
            filesInUse: 0,
            untrackedFiles: 0,
          }
        } else {
          const { attachments, totalItems: count } = await queryDbFallback(
            search,
            type,
            usageFilter,
            sortField,
            sortOrder,
            page,
            limit
          )
          totalItems = count

          // Quick total count estimate for stats
          const [totalCountRes]: any = await pool.execute(
            "SELECT COUNT(*) as count FROM attachments"
          )
          const totalFilesCount = totalCountRes[0]?.count || 0

          stats = {
            totalFiles: totalFilesCount,
            totalSize: 0,
            filesInUse: 0,
            untrackedFiles: 0,
          }

          const attachmentIds = attachments.map((a: any) => a.id)
          const usageMap = new Map<number, any[]>()
          if (attachmentIds.length > 0) {
            const [posts]: any = await pool.execute(
              `SELECT id, title, featured_image FROM posts WHERE featured_image IN (${attachmentIds.join(",")}) AND status != 'trash'`
            )
            const [videos]: any = await pool.execute(
              `SELECT id, title, thumbnail_id FROM videos WHERE thumbnail_id IN (${attachmentIds.join(",")}) AND status != 'trash'`
            )
            const [mediaCoverage]: any = await pool.execute(
              `SELECT id, title, media_coverage_image FROM media_coverage WHERE media_coverage_image IN (${attachmentIds.join(",")}) AND status != 'trash'`
            )

            for (const p of posts) {
              if (!usageMap.has(p.featured_image))
                usageMap.set(p.featured_image, [])
              usageMap.get(p.featured_image)!.push({
                type: "Blog",
                id: p.id,
                title: p.title || "Untitled Blog",
              })
            }
            for (const v of videos) {
              if (!usageMap.has(v.thumbnail_id))
                usageMap.set(v.thumbnail_id, [])
              usageMap.get(v.thumbnail_id)!.push({
                type: "Video",
                id: v.id,
                title: v.title || "Untitled Video",
              })
            }
            for (const mc of mediaCoverage) {
              if (!usageMap.has(mc.media_coverage_image))
                usageMap.set(mc.media_coverage_image, [])
              usageMap.get(mc.media_coverage_image)!.push({
                type: "Media Coverage",
                id: mc.id,
                title: mc.title || "Untitled Media Coverage",
              })
            }
          }

          enrichedFiles = []
          for (const att of attachments) {
            const fileName = att.image_url.split("/").pop() || "unknown-file"
            const relativePath = att.image_url
            const fullPath = path.join(UPLOADS_DIR, relativePath)

            let size = 0
            let mtime = att.updated_at ? new Date(att.updated_at).getTime() : 0
            let birthtime = att.created_at
              ? new Date(att.created_at).getTime()
              : 0
            let missingOnDisk = true

            if (fsSync.existsSync(fullPath)) {
              missingOnDisk = false
              try {
                const stat = await fs.stat(fullPath)
                size = stat.size
                mtime = stat.mtimeMs
                birthtime = stat.birthtimeMs
              } catch {}
            } else {
              try {
                const sizeStr = att.file_size || ""
                if (sizeStr.includes("KB")) size = parseFloat(sizeStr) * 1024
                else if (sizeStr.includes("MB"))
                  size = parseFloat(sizeStr) * 1024 * 1024
                else size = parseInt(sizeStr) || 0
              } catch {}
            }

            enrichedFiles.push({
              name: fileName,
              path: relativePath,
              url: att.image_url.startsWith("http")
                ? att.image_url
                : `/uploads/${relativePath}`,
              size,
              mtime,
              birthtime,
              dbInfo: {
                id: att.id,
                title: att.title,
                content: att.content,
                attachment_image_alt: att.attachment_image_alt,
                file_size: att.file_size,
                created_at: att.created_at,
                updated_at: att.updated_at,
              },
              usages: usageMap.get(att.id) || [],
              missingOnDisk,
            })
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      files: enrichedFiles,
      totalItems,
      stats,
    })
  } catch (error: any) {
    console.error("Error reading uploads folder:", error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const user = await verifyToken()
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    clearScanCache()

    const formData = await request.formData()
    const files = formData.getAll("files") as File[]
    let targetFolder = (formData.get("targetFolder") as string) || ""

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, error: "No files uploaded" },
        { status: 400 }
      )
    }

    targetFolder = targetFolder.replace(/\\/g, "/")
    const segments = targetFolder
      .split("/")
      .filter((s) => s && s !== "." && s !== "..")
    const subPath = segments.join("/")

    const targetDir = subPath ? path.join(UPLOADS_DIR, subPath) : UPLOADS_DIR
    if (!fsSync.existsSync(targetDir)) {
      await fs.mkdir(targetDir, { recursive: true })
    }

    const uploadedFiles = []

    for (const file of files) {
      let fileName = sanitizeFileName(file.name)
      let candidate = fileName
      const parsed = path.parse(candidate)
      let counter = 1
      while (fsSync.existsSync(path.join(targetDir, candidate))) {
        candidate = `${parsed.name}-${counter}${parsed.ext}`
        counter++
      }
      fileName = candidate

      const filePath = path.join(targetDir, fileName)
      const buffer = Buffer.from(await file.arrayBuffer())
      await fs.writeFile(filePath, buffer)

      const relativePath = subPath ? subPath + "/" + fileName : fileName
      const fileSizeStr =
        buffer.length < 1024 * 1024
          ? (buffer.length / 1024).toFixed(2) + " KB"
          : (buffer.length / (1024 * 1024)).toFixed(2) + " MB"

      const title = fileName.replace(/\.[^/.]+$/, "")
      let baseSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      if (!baseSlug || baseSlug === "-") baseSlug = "media"

      let slug = baseSlug
      let slugSuffix = 2
      while (true) {
        const [existing]: any = await pool.execute(
          "SELECT id FROM attachments WHERE slug = ? LIMIT 1",
          [slug]
        )
        if (existing.length === 0) break
        slug = `${baseSlug}-${slugSuffix}`
        slugSuffix++
      }

      const [result]: any = await pool.execute(
        "INSERT INTO attachments (title, content, status, post_type, slug, author, post_parent, image_url, attachment_image_alt, file_size, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())",
        [
          title,
          "",
          "inherit",
          "attachment",
          slug,
          (user as any).id || 1,
          0,
          relativePath,
          "",
          fileSizeStr,
        ]
      )

      uploadedFiles.push({
        name: fileName,
        path: relativePath,
        url: `/uploads/${relativePath}`,
        size: buffer.length,
        dbInfo: {
          id: result.insertId,
          title,
          content: "",
          attachment_image_alt: "",
          file_size: fileSizeStr,
        },
      })
    }

    triggerBackgroundScan("uploads", UPLOADS_DIR, `uploads:${UPLOADS_DIR}`)

    return NextResponse.json({ success: true, files: uploadedFiles })
  } catch (error: any) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const user = await verifyToken()
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    clearScanCache()

    const { searchParams } = new URL(request.url)
    const action = searchParams.get("action")

    if (action === "batchBackup") {
      const { filePaths } = await request.json()
      if (!filePaths || !Array.isArray(filePaths) || filePaths.length === 0) {
        return NextResponse.json(
          { success: false, error: "Missing or invalid filePaths" },
          { status: 400 }
        )
      }

      // Step 1: Bulk SELECT from database (FAST query using index on image_url)
      const normPaths = filePaths.map((p: string) => getNormalizePath(p))
      const queryPaths = Array.from(new Set([...filePaths, ...normPaths, ...filePaths.map((p: string) => p.toLowerCase())]))
      
      let matchingAttachments: any[] = []
      if (queryPaths.length > 0) {
        const placeholders = queryPaths.map(() => "?").join(",")
        const [rows]: any = await pool.execute(
          `SELECT * FROM attachments WHERE image_url IN (${placeholders})`,
          queryPaths
        )
        matchingAttachments = rows
      }

      // Map attachments for quick lookup
      const attachmentMap = new Map<string, any>()
      for (const att of matchingAttachments) {
        if (att.image_url) {
          attachmentMap.set(att.image_url.toLowerCase(), att)
          attachmentMap.set(getNormalizePath(att.image_url), att)
        }
      }

      const results = []
      const idsToDelete: number[] = []

      // Step 2: Loop to perform filesystem operations
      for (const filePath of filePaths) {
        try {
          const oldFullPath = path.join(UPLOADS_DIR, filePath)
          if (!fsSync.existsSync(oldFullPath)) {
            results.push({ filePath, status: "not_found" })
            continue
          }

          const backupFileFullPath = path.join(BACKUP_DIR, filePath)
          const backupDirName = path.dirname(backupFileFullPath)
          if (!fsSync.existsSync(backupDirName)) {
            await fs.mkdir(backupDirName, { recursive: true })
          }

          const normPath = getNormalizePath(filePath)
          const matchingAttachment = attachmentMap.get(normPath) || attachmentMap.get(filePath.toLowerCase()) || null

          if (matchingAttachment) {
            await fs.writeFile(
              backupFileFullPath + ".meta.json",
              JSON.stringify(matchingAttachment),
              "utf-8"
            )
            idsToDelete.push(matchingAttachment.id)
          }

          await fs.rename(oldFullPath, backupFileFullPath)
          await cleanEmptyParents(oldFullPath, UPLOADS_DIR)
          results.push({ filePath, status: "success" })
        } catch (err: any) {
          console.error(`Error backing up file ${filePath}:`, err)
          results.push({ filePath, status: "error", error: err.message })
        }
      }

      // Step 3: Bulk DELETE from database (FAST query)
      if (idsToDelete.length > 0) {
        const placeholders = idsToDelete.map(() => "?").join(",")
        await pool.execute(
          `DELETE FROM attachments WHERE id IN (${placeholders})`,
          idsToDelete
        )
      }

      triggerBackgroundScan("uploads", UPLOADS_DIR, `uploads:${UPLOADS_DIR}`)
      triggerBackgroundScan("backup", BACKUP_DIR, `backup:${BACKUP_DIR}`)

      return NextResponse.json({
        success: true,
        message: "Batch backup processed",
        results,
      })
    }

    if (action === "batchRestore") {
      const { filePaths } = await request.json()
      if (!filePaths || !Array.isArray(filePaths) || filePaths.length === 0) {
        return NextResponse.json(
          { success: false, error: "Missing or invalid filePaths" },
          { status: 400 }
        )
      }

      const results = []
      const attachmentsToInsert: any[] = []
      const metaPathsToUnlink: string[] = []

      for (const filePath of filePaths) {
        try {
          const backupFullPath = path.join(BACKUP_DIR, filePath)
          if (!fsSync.existsSync(backupFullPath)) {
            results.push({ filePath, status: "not_found" })
            continue
          }

          const uploadFileFullPath = path.join(UPLOADS_DIR, filePath)
          const uploadDirName = path.dirname(uploadFileFullPath)
          if (!fsSync.existsSync(uploadDirName)) {
            await fs.mkdir(uploadDirName, { recursive: true })
          }

          await fs.rename(backupFullPath, uploadFileFullPath)

          const metaPath = backupFullPath + ".meta.json"
          if (fsSync.existsSync(metaPath)) {
            try {
              const meta = JSON.parse(await fs.readFile(metaPath, "utf-8"))
              attachmentsToInsert.push([
                meta.id,
                meta.title || "",
                meta.content || "",
                meta.status || "inherit",
                meta.post_type || "attachment",
                meta.slug || "",
                meta.author || 1,
                meta.post_parent || 0,
                meta.image_url || filePath,
                meta.attachment_image_alt || "",
                meta.file_size || "0 KB",
                meta.created_at ? new Date(meta.created_at) : new Date(),
              ])
              metaPathsToUnlink.push(metaPath)
            } catch (err: any) {
              console.error(`Error reading metadata for ${filePath}:`, err)
            }
          }

          await cleanEmptyParents(backupFullPath, BACKUP_DIR)
          results.push({ filePath, status: "success" })
        } catch (err: any) {
          console.error(`Error restoring file ${filePath}:`, err)
          results.push({ filePath, status: "error", error: err.message })
        }
      }

      // Step 3: Bulk INSERT restored metadata
      if (attachmentsToInsert.length > 0) {
        const placeholders = attachmentsToInsert.map(() => "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())").join(",")
        const flatValues = attachmentsToInsert.flat()
        await pool.execute(
          `INSERT INTO attachments (id, title, content, status, post_type, slug, author, post_parent, image_url, attachment_image_alt, file_size, created_at, updated_at) VALUES ${placeholders}`,
          flatValues
        )

        // Delete metadata files after successful insert
        for (const metaPath of metaPathsToUnlink) {
          try {
            if (fsSync.existsSync(metaPath)) {
              await fs.unlink(metaPath)
            }
          } catch (err) {
            console.error(`Error unlinking metadata file ${metaPath}:`, err)
          }
        }
      }

      triggerBackgroundScan("uploads", UPLOADS_DIR, `uploads:${UPLOADS_DIR}`)
      triggerBackgroundScan("backup", BACKUP_DIR, `backup:${BACKUP_DIR}`)

      return NextResponse.json({
        success: true,
        message: "Batch restore processed",
        results,
      })
    }

    if (action === "backup") {
      const { filePath } = await request.json()
      if (!filePath)
        return NextResponse.json(
          { success: false, error: "Missing filePath" },
          { status: 400 }
        )

      const oldFullPath = path.join(UPLOADS_DIR, filePath)
      if (!fsSync.existsSync(oldFullPath)) {
        return NextResponse.json(
          { success: false, error: "File not found in active uploads" },
          { status: 404 }
        )
      }

      const backupFileFullPath = path.join(BACKUP_DIR, filePath)
      const backupDirName = path.dirname(backupFileFullPath)
      if (!fsSync.existsSync(backupDirName)) {
        await fs.mkdir(backupDirName, { recursive: true })
      }

      // FIX 3: targeted query instead of SELECT * + JS find
      const normPath = getNormalizePath(filePath)
      const [rows]: any = await pool.execute(
        "SELECT * FROM attachments WHERE image_url = ? OR image_url = ? LIMIT 1",
        [filePath, normPath]
      )
      const matchingAttachment = rows[0] ?? null

      if (matchingAttachment) {
        await fs.writeFile(
          backupFileFullPath + ".meta.json",
          JSON.stringify(matchingAttachment),
          "utf-8"
        )
        await pool.execute("DELETE FROM attachments WHERE id = ?", [
          matchingAttachment.id,
        ])
      }

      await fs.rename(oldFullPath, backupFileFullPath)
      // FIX 5: safe cleanup
      await cleanEmptyParents(oldFullPath, UPLOADS_DIR)

      triggerBackgroundScan("uploads", UPLOADS_DIR, `uploads:${UPLOADS_DIR}`)
      triggerBackgroundScan("backup", BACKUP_DIR, `backup:${BACKUP_DIR}`)

      return NextResponse.json({
        success: true,
        message: "File backed up successfully",
      })
    }

    if (action === "restore") {
      const { filePath } = await request.json()
      if (!filePath)
        return NextResponse.json(
          { success: false, error: "Missing filePath" },
          { status: 400 }
        )

      const backupFullPath = path.join(BACKUP_DIR, filePath)
      if (!fsSync.existsSync(backupFullPath)) {
        return NextResponse.json(
          { success: false, error: "File not found in backup folder" },
          { status: 404 }
        )
      }

      const uploadFileFullPath = path.join(UPLOADS_DIR, filePath)
      const uploadDirName = path.dirname(uploadFileFullPath)
      if (!fsSync.existsSync(uploadDirName)) {
        await fs.mkdir(uploadDirName, { recursive: true })
      }

      await fs.rename(backupFullPath, uploadFileFullPath)

      const metaPath = backupFullPath + ".meta.json"
      if (fsSync.existsSync(metaPath)) {
        try {
          const meta = JSON.parse(await fs.readFile(metaPath, "utf-8"))
          await pool.execute(
            "INSERT INTO attachments (id, title, content, status, post_type, slug, author, post_parent, image_url, attachment_image_alt, file_size, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())",
            [
              meta.id,
              meta.title || "",
              meta.content || "",
              meta.status || "inherit",
              meta.post_type || "attachment",
              meta.slug || "",
              meta.author || 1,
              meta.post_parent || 0,
              meta.image_url || filePath,
              meta.attachment_image_alt || "",
              meta.file_size || "0 KB",
              meta.created_at ? new Date(meta.created_at) : new Date(),
            ]
          )
          await fs.unlink(metaPath)
        } catch (err: any) {
          console.error("Error restoring metadata:", err)
        }
      }

      // FIX 5: safe cleanup
      await cleanEmptyParents(backupFullPath, BACKUP_DIR)

      triggerBackgroundScan("uploads", UPLOADS_DIR, `uploads:${UPLOADS_DIR}`)
      triggerBackgroundScan("backup", BACKUP_DIR, `backup:${BACKUP_DIR}`)

      return NextResponse.json({
        success: true,
        message: "File restored successfully",
      })
    }

    // Default: update metadata
    const { filePath, newFileName, title, attachment_image_alt, content } =
      await request.json()
    if (!filePath)
      return NextResponse.json(
        { success: false, error: "Missing filePath" },
        { status: 400 }
      )

    const oldFullPath = path.join(UPLOADS_DIR, filePath)
    if (!fsSync.existsSync(oldFullPath)) {
      return NextResponse.json(
        { success: false, error: "File not found on disk" },
        { status: 404 }
      )
    }

    let resolvedPath = filePath

    if (newFileName && newFileName !== path.basename(filePath)) {
      const cleanNewName = sanitizeFileName(newFileName)
      const dirName = path.dirname(filePath)
      const newRelativePath = path
        .join(dirName, cleanNewName)
        .replace(/\\/g, "/")
      const newFullPath = path.join(UPLOADS_DIR, newRelativePath)

      if (fsSync.existsSync(newFullPath)) {
        return NextResponse.json(
          { success: false, error: "A file with the new name already exists" },
          { status: 409 }
        )
      }

      await fs.rename(oldFullPath, newFullPath)
      resolvedPath = newRelativePath
    }

    // FIX 3: targeted query instead of SELECT * + JS find
    const normOldPath = getNormalizePath(filePath)
    const [rows]: any = await pool.execute(
      "SELECT * FROM attachments WHERE image_url = ? OR image_url = ? LIMIT 1",
      [filePath, normOldPath]
    )
    const matchingAttachment = rows[0] ?? null

    if (matchingAttachment) {
      const updateFields: string[] = []
      const updateParams: any[] = []

      if (newFileName) {
        updateFields.push("image_url = ?")
        updateParams.push(resolvedPath)
        const oldBaseName = path.basename(filePath, path.extname(filePath))
        if (!title && matchingAttachment.title === oldBaseName) {
          updateFields.push("title = ?")
          updateParams.push(
            path.basename(resolvedPath, path.extname(resolvedPath))
          )
        }
      }
      if (title !== undefined) {
        updateFields.push("title = ?")
        updateParams.push(title)
      }
      if (attachment_image_alt !== undefined) {
        updateFields.push("attachment_image_alt = ?")
        updateParams.push(attachment_image_alt)
      }
      if (content !== undefined) {
        updateFields.push("content = ?")
        updateParams.push(content)
      }

      if (updateFields.length > 0) {
        updateFields.push("updated_at = NOW()")
        updateParams.push(matchingAttachment.id)
        await pool.execute(
          `UPDATE attachments SET ${updateFields.join(", ")} WHERE id = ?`,
          updateParams
        )
      }
    }

    triggerBackgroundScan("uploads", UPLOADS_DIR, `uploads:${UPLOADS_DIR}`)

    return NextResponse.json({
      success: true,
      message: "File details updated successfully",
      newPath: resolvedPath,
    })
  } catch (error: any) {
    console.error("Update error:", error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const user = await verifyToken()
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    clearScanCache()

    const { searchParams } = new URL(request.url)
    const filePath = searchParams.get("filePath")
    const force = searchParams.get("force") === "true"
    const source = searchParams.get("source") || "uploads"

    if (!filePath)
      return NextResponse.json(
        { success: false, error: "Missing filePath" },
        { status: 400 }
      )

    const rootDir = source === "backup" ? BACKUP_DIR : UPLOADS_DIR
    const fullPath = path.join(rootDir, filePath)

    if (source === "backup") {
      if (fsSync.existsSync(fullPath)) await fs.unlink(fullPath)
      const metaPath = fullPath + ".meta.json"
      if (fsSync.existsSync(metaPath)) await fs.unlink(metaPath)
      // FIX 5: safe cleanup
      await cleanEmptyParents(fullPath, rootDir)
      triggerBackgroundScan("backup", BACKUP_DIR, `backup:${BACKUP_DIR}`)

      return NextResponse.json({
        success: true,
        message: "File deleted from backup",
      })
    }

    // FIX 3: targeted query instead of SELECT * + JS find
    const normPath = getNormalizePath(filePath)
    const [rows]: any = await pool.execute(
      "SELECT * FROM attachments WHERE image_url = ? OR image_url = ? LIMIT 1",
      [filePath, normPath]
    )
    const matchingAttachment = rows[0] ?? null

    if (matchingAttachment) {
      const attId = matchingAttachment.id

      const [posts]: any = await pool.execute(
        "SELECT id, title FROM posts WHERE featured_image = ? AND status != 'trash'",
        [attId]
      )
      const [videos]: any = await pool.execute(
        "SELECT id, title FROM videos WHERE thumbnail_id = ? AND status != 'trash'",
        [attId]
      )
      const [mediaCoverage]: any = await pool.execute(
        "SELECT id, title FROM media_coverage WHERE media_coverage_image = ? AND status != 'trash'",
        [attId]
      )

      const usages = [
        ...posts.map((p: any) => ({ type: "Blog", id: p.id, title: p.title })),
        ...videos.map((v: any) => ({
          type: "Video",
          id: v.id,
          title: v.title,
        })),
        ...mediaCoverage.map((mc: any) => ({
          type: "Media Coverage",
          id: mc.id,
          title: mc.title,
        })),
      ]

      if (usages.length > 0 && !force) {
        return NextResponse.json(
          {
            success: false,
            warning: "in-use",
            message: "This file is currently in use",
            usages,
          },
          { status: 409 }
        )
      }

      await pool.execute("DELETE FROM attachments WHERE id = ?", [attId])
    }

    if (fsSync.existsSync(fullPath)) {
      await fs.unlink(fullPath)
      // FIX 5: safe cleanup
      await cleanEmptyParents(fullPath, rootDir)
    }

    triggerBackgroundScan("uploads", UPLOADS_DIR, `uploads:${UPLOADS_DIR}`)

    return NextResponse.json({
      success: true,
      message: "File deleted successfully",
    })
  } catch (error: any) {
    console.error("Delete error:", error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

triggerCodeReferenceIndexBuild()
