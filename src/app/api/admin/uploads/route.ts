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

interface CacheEntry {
  timestamp: number
  files: any[]
}

const scanCache: Record<string, CacheEntry> = {}
const CACHE_TTL = 30000 // 30 seconds

function clearScanCache() {
  for (const key in scanCache) {
    delete scanCache[key]
  }
  console.log("[Uploads API] Cleared file scan cache due to write operation.")
}

async function scanDirectory(dir: string, baseDir: string): Promise<any[]> {
  if (!fsSync.existsSync(dir)) return []

  const list = await fs.readdir(dir, { withFileTypes: true })

  const tasks = list.map(async (file) => {
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
      } catch (e) {
        return null
      }
    }
  })

  const rawResults = await Promise.all(tasks)

  let results: any[] = []
  for (const r of rawResults) {
    if (!r) continue
    if (Array.isArray(r)) {
      results = results.concat(r)
    } else {
      results.push(r)
    }
  }

  return results
}

async function getAllFilesRecursively(dir: string): Promise<string[]> {
  if (!fsSync.existsSync(dir)) return []
  const list = await fs.readdir(dir, { withFileTypes: true })

  const tasks = list.map(async (file) => {
    const filePath = path.resolve(dir, file.name)
    if (file.isDirectory()) {
      return await getAllFilesRecursively(filePath)
    } else {
      return filePath
    }
  })

  const rawResults = await Promise.all(tasks)
  let results: string[] = []
  for (const r of rawResults) {
    if (Array.isArray(r)) {
      results = results.concat(r)
    } else {
      results.push(r)
    }
  }
  return results
}

async function getCodeFilesRecursively(dir: string): Promise<string[]> {
  if (!fsSync.existsSync(dir)) return []
  const list = await fs.readdir(dir, { withFileTypes: true })

  const tasks = list.map(async (file) => {
    const filePath = path.resolve(dir, file.name)
    if (file.isDirectory()) {
      if (
        file.name === "node_modules" ||
        file.name === ".next" ||
        file.name === ".git"
      )
        return null
      return await getCodeFilesRecursively(filePath)
    } else {
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
  })

  const rawResults = await Promise.all(tasks)
  let results: string[] = []
  for (const r of rawResults) {
    if (!r) continue
    if (Array.isArray(r)) {
      results = results.concat(r)
    } else {
      results.push(r)
    }
  }
  return results
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

export async function GET(request: Request) {
  try {
    const user = await verifyToken()
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const action = searchParams.get("action")

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

      // Get DB attachments and references
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
        const id = p.featured_image
        if (!usageMap.has(id)) usageMap.set(id, [])
        usageMap
          .get(id)!
          .push({ type: "Blog", id: p.id, title: p.title || "Untitled Blog" })
      }
      for (const v of videos) {
        const id = v.thumbnail_id
        if (!usageMap.has(id)) usageMap.set(id, [])
        usageMap
          .get(id)!
          .push({ type: "Video", id: v.id, title: v.title || "Untitled Video" })
      }
      for (const mc of mediaCoverage) {
        const id = mc.media_coverage_image
        if (!usageMap.has(id)) usageMap.set(id, [])
        usageMap
          .get(id)!
          .push({
            type: "Media Coverage",
            id: mc.id,
            title: mc.title || "Untitled Media Coverage",
          })
      }

      const srcDir = path.resolve(process.cwd(), "src")
      const codeFiles = await getCodeFilesRecursively(srcDir)
      const codeFileContents = await Promise.all(
        codeFiles.map(async (file: string) => {
          try {
            return await fs.readFile(file, "utf-8")
          } catch {
            return ""
          }
        })
      )

      // Join all codebase contents in memory once for O(1) checks
      const unifiedCodeContent = codeFileContents.join("\n---FILE-BREAK---\n")

      const rows: any[] = []

      // Scan physical uploads
      const uploadsFiles = await getAllFilesRecursively(UPLOADS_DIR)
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

        // Check unified codebase content first
        const inUseInCode =
          unifiedCodeContent.includes(relPath) ||
          unifiedCodeContent.includes("/uploads/" + relPath)
        if (inUseInCode) {
          inUse = true
          for (let i = 0; i < codeFiles.length; i++) {
            const content = codeFileContents[i]
            const filePath = codeFiles[i]
            if (
              content.includes(relPath) ||
              content.includes("/uploads/" + relPath)
            ) {
              const fileRel = path
                .relative(process.cwd(), filePath)
                .replace(/\\/g, "/")
              references.push(`Code: ${fileRel}`)
            }
          }
        }

        rows.push({
          type: "Uploads Folder File",
          relativePath: relPath,
          physicalLocation: path
            .relative(process.cwd(), uFile)
            .replace(/\\/g, "/"),
          webPath: `/uploads/${relPath}`,
          status: inUse ? "In Use" : "Unused",
          references: references.join(" | ") || "No active references found",
        })
      }

      // Scan root images (excluding public/uploads)
      const publicDir = path.resolve(process.cwd(), "public")
      const publicFiles = await getAllFilesRecursively(publicDir)

      for (const pFile of publicFiles) {
        const isUploads =
          pFile.includes("public/uploads") || pFile.includes("public\\uploads")
        if (isUploads) continue

        const ext = path.extname(pFile).toLowerCase()
        if (!IMAGE_EXTS.includes(ext)) continue

        const relPath = path.relative(publicDir, pFile).replace(/\\/g, "/")
        const webPath = "/" + relPath
        const baseName = path.basename(pFile)

        const references: string[] = []
        let inUse = false

        // Check unified codebase content first
        const inUseInCode =
          unifiedCodeContent.includes(relPath) ||
          unifiedCodeContent.includes(webPath) ||
          unifiedCodeContent.includes(baseName)

        if (inUseInCode) {
          inUse = true
          for (let i = 0; i < codeFiles.length; i++) {
            const content = codeFileContents[i]
            const filePath = codeFiles[i]
            if (
              content.includes(relPath) ||
              content.includes(webPath) ||
              content.includes(baseName)
            ) {
              const fileRel = path
                .relative(process.cwd(), filePath)
                .replace(/\\/g, "/")
              references.push(`Code: ${fileRel}`)
            }
          }
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
            webPath: webPath,
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
        const csvRow = [
          row.type,
          row.relativePath,
          row.physicalLocation,
          row.webPath,
          row.status,
          row.references,
        ]
        csvContent += csvRow.map(escapeCSVField).join(",") + "\n"
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
    const source = searchParams.get("source") || "uploads" // uploads or backup
    const usageFilter = searchParams.get("usageFilter") || "all" // all, used, unused
    const sortField = searchParams.get("sortField") || "mtime"
    const sortOrder = searchParams.get("sortOrder") === "asc" ? "asc" : "desc"
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "40")

    const uploadsRootDir = UPLOADS_DIR
    const backupRootDir = BACKUP_DIR
    const scanDir = source === "backup" ? backupRootDir : uploadsRootDir

    // Memory cache lookup for folder scan to resolve 504 Gateway Timeout
    const cacheKey = `${source}:${scanDir}`
    let allFiles: any[] = []
    const now = Date.now()
    if (
      scanCache[cacheKey] &&
      now - scanCache[cacheKey].timestamp < CACHE_TTL
    ) {
      allFiles = scanCache[cacheKey].files
      console.log(
        `[Uploads API] Serving files list from cache for key: ${cacheKey}`
      )
    } else {
      allFiles = await scanDirectory(scanDir, scanDir)
      scanCache[cacheKey] = {
        timestamp: now,
        files: allFiles,
      }
      console.log(
        `[Uploads API] Cache miss. Scanned ${allFiles.length} files from disk for key: ${cacheKey}`
      )
    }

    // DB Sync & Usage Check
    const [attachments]: any = await pool.execute("SELECT * FROM attachments")
    console.log(
      `[Uploads API] scanDir: ${scanDir}, physical files found: ${allFiles.length}, DB attachments count: ${attachments?.length || 0}`
    )
    const [posts]: any = await pool.execute(
      "SELECT id, title, featured_image FROM posts WHERE featured_image IS NOT NULL AND status != 'trash'"
    )
    const [videos]: any = await pool.execute(
      "SELECT id, title, thumbnail_id FROM videos WHERE thumbnail_id IS NOT NULL AND status != 'trash'"
    )
    const [mediaCoverage]: any = await pool.execute(
      "SELECT id, title, media_coverage_image FROM media_coverage WHERE media_coverage_image IS NOT NULL AND status != 'trash'"
    )

    // Map database attachments by normalized path
    const attachmentMap = new Map<string, any>()
    for (const att of attachments) {
      if (att.image_url) {
        attachmentMap.set(att.image_url, att)
      }
    }

    // Map attachment usage
    const usageMap = new Map<
      number,
      { type: string; id: number; title: string }[]
    >()

    for (const p of posts) {
      const imgId = p.featured_image
      if (!usageMap.has(imgId)) usageMap.set(imgId, [])
      usageMap
        .get(imgId)!
        .push({ type: "Blog", id: p.id, title: p.title || "Untitled Blog" })
    }

    for (const v of videos) {
      const imgId = v.thumbnail_id
      if (!usageMap.has(imgId)) usageMap.set(imgId, [])
      usageMap
        .get(imgId)!
        .push({ type: "Video", id: v.id, title: v.title || "Untitled Video" })
    }

    for (const mc of mediaCoverage) {
      const imgId = mc.media_coverage_image
      if (!usageMap.has(imgId)) usageMap.set(imgId, [])
      usageMap.get(imgId)!.push({
        type: "Media Coverage",
        id: mc.id,
        title: mc.title || "Untitled Media Coverage",
      })
    }

    // Build enriched file list
    const enrichedFiles = []
    const seenPaths = new Set<string>()

    for (const file of allFiles) {
      const normPath = file.path.toLowerCase()
      seenPaths.add(normPath)
      let usages: any[] = []
      let dbInfo: any = null

      if (source === "backup") {
        // Read metadata from .meta.json if exists
        const metaFullPath = path.join(backupRootDir, file.path + ".meta.json")
        if (fsSync.existsSync(metaFullPath)) {
          try {
            const metaContent = await fs.readFile(metaFullPath, "utf-8")
            const meta = JSON.parse(metaContent)
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

    // Include database attachments not physically present on disk
    if (source === "uploads") {
      for (const [normPath, dbEntry] of attachmentMap.entries()) {
        if (!seenPaths.has(normPath)) {
          const usages = usageMap.get(dbEntry.id) || []
          const fileName = dbEntry.image_url.split("/").pop() || "unknown-file"

          let size = 0
          try {
            const sizeStr = dbEntry.file_size || ""
            if (sizeStr.includes("KB")) size = parseFloat(sizeStr) * 1024
            else if (sizeStr.includes("MB"))
              size = parseFloat(sizeStr) * 1024 * 1024
            else size = parseInt(sizeStr) || 0
          } catch (e) {}

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

    // Search Filter
    let filteredFiles = enrichedFiles
    if (search) {
      const searchLower = search.toLowerCase()
      filteredFiles = filteredFiles.filter((f: any) =>
        f.name.toLowerCase().includes(searchLower)
      )
    }

    // Type Filter
    if (type !== "all") {
      filteredFiles = filteredFiles.filter((f: any) => {
        const ext = path.extname(f.name).toLowerCase()
        if (type === "images") {
          return [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"].includes(
            ext
          )
        }
        if (type === "audio") {
          return [".mp3", ".wav", ".ogg"].includes(ext)
        }
        if (type === "video") {
          return [".mp4", ".webm", ".mov"].includes(ext)
        }
        if (type === "documents") {
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
        }
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

    // Usage Filter (only applicable to Active Uploads)
    if (source !== "backup" && usageFilter !== "all") {
      filteredFiles = filteredFiles.filter((f: any) => {
        const hasUsage = f.usages && f.usages.length > 0
        return usageFilter === "used" ? hasUsage : !hasUsage
      })
    }

    // Sort
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

    // Pagination
    const totalItems = filteredFiles.length
    const offset = (page - 1) * limit
    const paginatedFiles = filteredFiles.slice(offset, offset + limit)

    // Calculate Stats
    let totalFiles = 0
    let totalSize = 0
    let filesInUse = 0
    let untrackedFiles = 0

    if (source === "backup") {
      totalFiles = enrichedFiles.length
      totalSize = enrichedFiles.reduce((acc, f) => acc + f.size, 0)
    } else {
      totalFiles = enrichedFiles.length
      totalSize = enrichedFiles.reduce((acc, f) => acc + f.size, 0)
      filesInUse = enrichedFiles.filter(
        (f) => f.dbInfo && f.usages.length > 0
      ).length
      untrackedFiles = enrichedFiles.filter((f) => !f.dbInfo).length
    }

    // GET serving raw file if filePath is provided (specifically for backup thumbnails)
    const filePathParam = searchParams.get("filePath")
    if (filePathParam && source === "backup") {
      const fullBackupPath = path.join(backupRootDir, filePathParam)
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
        const headers = new Headers({
          "Content-Type": contentTypes[ext] || "application/octet-stream",
          "Content-Length": String(fileContent.length),
        })
        return new Response(fileContent, { headers, status: 200 })
      }
    }

    return NextResponse.json({
      success: true,
      files: paginatedFiles,
      totalItems,
      stats: {
        totalFiles,
        totalSize,
        filesInUse,
        untrackedFiles,
      },
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

    // Sanitize targetFolder to prevent directory traversal
    targetFolder = targetFolder.replace(/\\/g, "/")
    const segments = targetFolder
      .split("/")
      .filter((s) => s && s !== "." && s !== "..")
    const subPath = segments.join("/")

    const rootDir = UPLOADS_DIR
    const targetDir = subPath ? path.join(rootDir, subPath) : rootDir

    if (!fsSync.existsSync(targetDir)) {
      await fs.mkdir(targetDir, { recursive: true })
    }

    const uploadedFiles = []

    for (const file of files) {
      let fileName = sanitizeFileName(file.name)

      // Ensure unique filename inside that custom folder
      let candidate = fileName
      const parsed = path.parse(candidate)
      let counter = 1
      while (fsSync.existsSync(path.join(targetDir, candidate))) {
        candidate = `${parsed.name}-${counter}${parsed.ext}`
        counter += 1
      }
      fileName = candidate

      const filePath = path.join(targetDir, fileName)
      const buffer = Buffer.from(await file.arrayBuffer())
      await fs.writeFile(filePath, buffer)

      const relativePath = subPath ? subPath + "/" + fileName : fileName

      // File Size String
      let fileSizeStr = "0 KB"
      if (buffer.length < 1024 * 1024) {
        fileSizeStr = (buffer.length / 1024).toFixed(2) + " KB"
      } else {
        fileSizeStr = (buffer.length / (1024 * 1024)).toFixed(2) + " MB"
      }

      const title = fileName.replace(/\.[^/.]+$/, "")

      // Generate slug
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

      // Insert DB record
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

    const uploadsRootDir = UPLOADS_DIR
    const backupRootDir = BACKUP_DIR

    // 1. Move file to backup
    if (action === "backup") {
      const data = await request.json()
      const { filePath } = data

      if (!filePath) {
        return NextResponse.json(
          { success: false, error: "Missing filePath" },
          { status: 400 }
        )
      }

      const oldFullPath = path.join(uploadsRootDir, filePath)
      if (!fsSync.existsSync(oldFullPath)) {
        return NextResponse.json(
          { success: false, error: "File not found in active uploads" },
          { status: 404 }
        )
      }

      const backupFileFullPath = path.join(backupRootDir, filePath)
      const backupDirName = path.dirname(backupFileFullPath)

      if (!fsSync.existsSync(backupDirName)) {
        await fs.mkdir(backupDirName, { recursive: true })
      }

      // Check if attachment row exists in database
      const normPath = filePath.toLowerCase()
      const [attachments]: any = await pool.execute("SELECT * FROM attachments")
      const matchingAttachment = attachments.find(
        (att: any) => getNormalizePath(att.image_url) === normPath
      )

      if (matchingAttachment) {
        // Save database metadata into .meta.json file next to the backup file
        const metaPath = backupFileFullPath + ".meta.json"
        await fs.writeFile(
          metaPath,
          JSON.stringify(matchingAttachment),
          "utf-8"
        )

        // Delete from database
        await pool.execute("DELETE FROM attachments WHERE id = ?", [
          matchingAttachment.id,
        ])
      }

      // Move file physically to backup directory
      await fs.rename(oldFullPath, backupFileFullPath)

      // Clean empty parent directories in uploads
      let parentDir = path.dirname(oldFullPath)
      while (
        parentDir !== uploadsRootDir &&
        parentDir.startsWith(uploadsRootDir)
      ) {
        const files = await fs.readdir(parentDir)
        if (files.length === 0) {
          await fs.rmdir(parentDir)
          parentDir = path.dirname(parentDir)
        } else {
          break
        }
      }

      return NextResponse.json({
        success: true,
        message: "File backed up successfully",
      })
    }

    // 2. Restore file from backup
    if (action === "restore") {
      const data = await request.json()
      const { filePath } = data

      if (!filePath) {
        return NextResponse.json(
          { success: false, error: "Missing filePath" },
          { status: 400 }
        )
      }

      const backupFullPath = path.join(backupRootDir, filePath)
      if (!fsSync.existsSync(backupFullPath)) {
        return NextResponse.json(
          { success: false, error: "File not found in backup folder" },
          { status: 404 }
        )
      }

      const uploadFileFullPath = path.join(uploadsRootDir, filePath)
      const uploadDirName = path.dirname(uploadFileFullPath)

      if (!fsSync.existsSync(uploadDirName)) {
        await fs.mkdir(uploadDirName, { recursive: true })
      }

      // Move file physically back to active uploads
      await fs.rename(backupFullPath, uploadFileFullPath)

      // Check for .meta.json file to restore DB row
      const metaPath = backupFullPath + ".meta.json"
      if (fsSync.existsSync(metaPath)) {
        try {
          const metaContent = await fs.readFile(metaPath, "utf-8")
          const meta = JSON.parse(metaContent)

          // Re-insert matching row using its original database ID to restore references
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

          // Remove meta file
          await fs.unlink(metaPath)
        } catch (err: any) {
          console.error("Error restoring metadata:", err)
        }
      }

      // Clean empty parent directories in backup
      let parentDir = path.dirname(backupFullPath)
      while (
        parentDir !== backupRootDir &&
        parentDir.startsWith(backupRootDir)
      ) {
        // Look for any remaining files (excluding folder contents)
        const files = await fs.readdir(parentDir)
        if (files.length === 0) {
          await fs.rmdir(parentDir)
          parentDir = path.dirname(parentDir)
        } else {
          break
        }
      }

      return NextResponse.json({
        success: true,
        message: "File restored successfully",
      })
    }

    // Default metadata updating details
    const data = await request.json()
    const { filePath, newFileName, title, attachment_image_alt, content } = data

    if (!filePath) {
      return NextResponse.json(
        { success: false, error: "Missing filePath" },
        { status: 400 }
      )
    }

    const oldFullPath = path.join(uploadsRootDir, filePath)
    if (!fsSync.existsSync(oldFullPath)) {
      return NextResponse.json(
        { success: false, error: "File not found on disk" },
        { status: 404 }
      )
    }

    let resolvedPath = filePath

    // Handle Renaming
    if (newFileName && newFileName !== path.basename(filePath)) {
      const cleanNewName = sanitizeFileName(newFileName)
      const dirName = path.dirname(filePath)
      const newRelativePath = path
        .join(dirName, cleanNewName)
        .replace(/\\/g, "/")
      const newFullPath = path.join(uploadsRootDir, newRelativePath)

      if (fsSync.existsSync(newFullPath)) {
        return NextResponse.json(
          { success: false, error: "A file with the new name already exists" },
          { status: 409 }
        )
      }

      await fs.rename(oldFullPath, newFullPath)
      resolvedPath = newRelativePath
    }

    // Synchronize database record if one exists
    const normOldPath = filePath.toLowerCase()
    const [attachments]: any = await pool.execute("SELECT * FROM attachments")
    const matchingAttachment = attachments.find(
      (att: any) => getNormalizePath(att.image_url) === normOldPath
    )

    if (matchingAttachment) {
      const updateFields: string[] = []
      const updateParams: any[] = []

      if (newFileName) {
        updateFields.push("image_url = ?")
        updateParams.push(resolvedPath)

        // Automatically update title if it was default filename base
        const oldBaseName = path.basename(filePath, path.extname(filePath))
        if (!title && matchingAttachment.title === oldBaseName) {
          const newBaseName = path.basename(
            resolvedPath,
            path.extname(resolvedPath)
          )
          updateFields.push("title = ?")
          updateParams.push(newBaseName)
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

    if (!filePath) {
      return NextResponse.json(
        { success: false, error: "Missing filePath" },
        { status: 400 }
      )
    }

    const uploadsRootDir = UPLOADS_DIR
    const backupRootDir = BACKUP_DIR
    const rootDir = source === "backup" ? backupRootDir : uploadsRootDir
    const fullPath = path.join(rootDir, filePath)

    if (source === "backup") {
      // Just delete backup file and its .meta.json file physically
      if (fsSync.existsSync(fullPath)) {
        await fs.unlink(fullPath)
      }
      const metaPath = fullPath + ".meta.json"
      if (fsSync.existsSync(metaPath)) {
        await fs.unlink(metaPath)
      }

      // Recursively delete empty parent folders in backup
      let parentDir = path.dirname(fullPath)
      while (parentDir !== rootDir && parentDir.startsWith(rootDir)) {
        const files = await fs.readdir(parentDir)
        if (files.length === 0) {
          await fs.rmdir(parentDir)
          parentDir = path.dirname(parentDir)
        } else {
          break
        }
      }

      return NextResponse.json({
        success: true,
        message: "File deleted from backup",
      })
    }

    // Active uploads deletion
    const normPath = filePath.toLowerCase()
    const [attachments]: any = await pool.execute("SELECT * FROM attachments")
    const matchingAttachment = attachments.find(
      (att: any) => getNormalizePath(att.image_url) === normPath
    )

    if (matchingAttachment) {
      const attId = matchingAttachment.id

      // Check usage in posts, videos, media coverage
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

      // Delete DB record
      await pool.execute("DELETE FROM attachments WHERE id = ?", [attId])
    }

    // Physically delete file from disk
    if (fsSync.existsSync(fullPath)) {
      await fs.unlink(fullPath)

      // Recursively delete empty parent folders up to root uploads directory
      let parentDir = path.dirname(fullPath)
      while (parentDir !== rootDir && parentDir.startsWith(rootDir)) {
        const files = await fs.readdir(parentDir)
        if (files.length === 0) {
          await fs.rmdir(parentDir)
          parentDir = path.dirname(parentDir)
        } else {
          break
        }
      }
    }

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
