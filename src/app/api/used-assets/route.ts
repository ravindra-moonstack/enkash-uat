import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import fs from "fs"
import path from "path"

const USED_LIST_PATH = path.resolve(process.cwd(), "used_files.txt")
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

// In-memory cache variables
let cacheData: any = null
let cacheTimestamp = 0
const CACHE_TTL = 60000 // 1 minute cache

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

// Helper to clean path while preserving casing
function getCleanPath(p: string): string {
  if (!p) return ""
  let cleaned = p.trim().replace(/\\/g, "/")
  if (cleaned.startsWith("uploads/")) {
    cleaned = cleaned.substring("uploads/".length)
  } else if (cleaned.startsWith("/uploads/")) {
    cleaned = cleaned.substring("/uploads/".length)
  }
  if (cleaned.startsWith("/")) {
    cleaned = cleaned.substring(1)
  }
  return cleaned
}

// Recursive function to scan directories for codebase files (excluding uploads/node_modules/.next/.git)
async function getFilesRecursive(dir: string): Promise<string[]> {
  let results: string[] = []
  try {
    const list = await fs.promises.readdir(dir, { withFileTypes: true })
    for (const file of list) {
      const filePath = path.resolve(dir, file.name)
      if (file.isDirectory()) {
        if (
          file.name === "uploads" ||
          file.name === "node_modules" ||
          file.name === ".next" ||
          file.name === ".git"
        ) {
          continue
        }
        results = results.concat(await getFilesRecursive(filePath))
      } else {
        results.push(filePath)
      }
    }
  } catch (e) {
    // Ignore error
  }
  return results
}

function getFileType(filename: string): string {
  const ext = path.extname(filename).toLowerCase()
  if ([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico"].includes(ext)) {
    return "image"
  }
  if ([".mp4", ".webm", ".mov"].includes(ext)) {
    return "video"
  }
  if ([".mp3", ".wav", ".ogg"].includes(ext)) {
    return "audio"
  }
  if ([".pdf", ".doc", ".docx", ".xls", ".xlsx", ".txt", ".csv", ".ppt", ".pptx"].includes(ext)) {
    return "document"
  }
  return "other"
}

// Extract all upload paths from text
function extractContentUploadPaths(text: string): string[] {
  const unescaped = text.replace(/\\\//g, "/") // unescape JSON-encoded slashes
  const results = new Set<string>()
  const re = /(?:\/uploads\/|uploads\/)([\w%+.\-\/]+\.[a-zA-Z0-9]{2,6})/gi
  let m: RegExpExecArray | null
  while ((m = re.exec(unescaped)) !== null) {
    let captured = m[1].replace(/[.;]+$/, "") // strip trailing punctuation
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

export async function GET() {
  const now = Date.now()
  if (cacheData && now - cacheTimestamp < CACHE_TTL) {
    return NextResponse.json({ success: true, files: cacheData })
  }

  try {
    let dbUrls: string[] = []
    let dbPostsContent: string[] = []

    // 1. Fetch DB records
    try {
      const [attachments]: [any[], any] = await pool.execute(
        "SELECT image_url FROM attachments WHERE image_url IS NOT NULL"
      )
      for (const row of attachments) {
        if (row.image_url) {
          dbUrls.push(row.image_url)
        }
      }

      const [posts]: [any[], any] = await pool.execute(
        "SELECT content FROM posts WHERE content IS NOT NULL AND status != 'trash'"
      )
      for (const row of posts) {
        if (row.content) {
          dbPostsContent.push(row.content)
        }
      }
    } catch (dbError) {
      console.error("DB Query failed:", dbError)
    }

    // 2. Scan codebase content
    const codeFiles: { path: string; content: string; isAdmin: boolean }[] = []
    for (const dirName of CODE_DIRS) {
      const dirPath = path.resolve(process.cwd(), dirName)
      if (!fs.existsSync(dirPath)) continue
      const allFiles = await getFilesRecursive(dirPath)
      for (const f of allFiles) {
        const ext = path.extname(f).toLowerCase()
        if (ALLOWED_EXTENSIONS.has(ext)) {
          try {
            const content = await fs.promises.readFile(f, "utf8")
            const normalizedPath = f.replace(/\\/g, "/")
            const isAdmin = normalizedPath.includes("/src/app/admin/")
            codeFiles.push({ path: f, content, isAdmin })
          } catch (err) {
            // Ignore
          }
        }
      }
    }

    // Union maps of all used files
    const usedFilesMap = new Map<
      string,
      {
        path: string
        name: string
        url: string
        type: string
        sources: Set<string>
      }
    >()

    function getOrInit(relPath: string) {
      const norm = getNormalizePath(relPath)
      if (!norm || !norm.includes(".")) return null
      
      const fullPathLower = `uploads/${norm}`
      if (!usedFilesMap.has(fullPathLower)) {
        const cleaned = getCleanPath(relPath)
        const fullPath = `uploads/${cleaned}`
        usedFilesMap.set(fullPathLower, {
          path: fullPath,
          name: path.basename(cleaned),
          url: `/uploads/${cleaned}`,
          type: getFileType(cleaned),
          sources: new Set<string>(),
        })
      }
      return usedFilesMap.get(fullPathLower)!
    }

    // 1. Process attachments.image_url
    for (const url of dbUrls) {
      const entry = getOrInit(url)
      if (entry) {
        entry.sources.add("attachments_table")
      }
    }

    // 2. Process posts.content
    for (const text of dbPostsContent) {
      for (const fp of extractContentUploadPaths(text)) {
        const entry = getOrInit(fp)
        if (entry) {
          entry.sources.add("posts_content")
        }
      }
    }

    // 3. Process codebase literal references
    for (const file of codeFiles) {
      const extracted = extractContentUploadPaths(file.content)
      const sourceTag = file.isAdmin ? "admin_code" : "frontend_code"
      for (const fp of extracted) {
        const entry = getOrInit(fp)
        if (entry) {
          entry.sources.add(sourceTag)
        }
      }
    }

    // 4. Check codebase substring references for all initialized entries
    for (const [fullPath, entry] of usedFilesMap.entries()) {
      const relPath = entry.path.substring("uploads/".length)
      const filename = entry.name
      const checkPathCode = "uploads/" + relPath

      for (const file of codeFiles) {
        const sourceTag = file.isAdmin ? "admin_code" : "frontend_code"
        if (entry.sources.has(sourceTag)) continue // already found

        if (
          file.content.includes(filename) ||
          file.content.includes(checkPathCode) ||
          file.content.includes(relPath)
        ) {
          entry.sources.add(sourceTag)
        }
      }
    }

    // Convert map to sorted arrays
    const sortedKeys = Array.from(usedFilesMap.keys()).sort()
    const detailedList: any[] = []

    for (const key of sortedKeys) {
      const entry = usedFilesMap.get(key)!
      detailedList.push({
        path: entry.path,
        name: entry.name,
        url: entry.url,
        type: entry.type,
        sources: Array.from(entry.sources),
      })
    }

    // Write to used_files.txt asynchronously to keep workspace file in sync
    try {
      const filePathsToWrite = detailedList.map(entry => entry.path)
      await fs.promises.writeFile(
        USED_LIST_PATH,
        filePathsToWrite.join("\n") + (filePathsToWrite.length ? "\n" : ""),
        "utf8"
      )
    } catch (writeErr) {
      console.error("Failed to write to used_files.txt:", writeErr)
    }

    cacheData = detailedList
    cacheTimestamp = now

    return NextResponse.json({ success: true, files: detailedList })
  } catch (error: any) {
    console.error("API Error in used-assets:", error)
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    )
  }
}
