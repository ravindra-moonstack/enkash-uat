const fs = require("fs")
const path = require("path")
const mysql = require("mysql2/promise")
const dotenv = require("dotenv")

const UPLOADS_DIR = path.resolve(process.cwd(), "../uploads")
const BACKUP_DIR = path.resolve(process.cwd(), "../backup")

// Helper to normalize path comparisons
function getNormalizePath(p: any) {
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

// Format bytes helper
function formatBytes(bytes: any, decimals = 2) {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}

// Recursive directory scanner
async function scanDirectory(dir: any, baseDir: any): Promise<any[]> {
  if (!fs.existsSync(dir)) return []
  const list = await fs.promises.readdir(dir, { withFileTypes: true })
  let results: any[] = []

  for (const file of list) {
    const filePath = path.resolve(dir, file.name)
    const relativePath = path.relative(baseDir, filePath).replace(/\\/g, "/")

    if (file.isDirectory()) {
      const subDirFiles: any[] = await scanDirectory(filePath, baseDir)
      results = results.concat(subDirFiles)
    } else {
      if (file.name.endsWith(".meta.json")) continue
      try {
        const stat = await fs.promises.stat(filePath)
        results.push({
          name: file.name,
          path: relativePath,
          size: stat.size,
          mtime: stat.mtimeMs,
          birthtime: stat.birthtimeMs,
        })
      } catch (err) {
        // Skip files that cannot be read
      }
    }
  }
  return results
}

// Safe cleanup of empty parent directories
async function cleanEmptyParents(fullPath: any, rootDir: any) {
  let parentDir = path.dirname(fullPath)
  while (parentDir !== rootDir && parentDir.startsWith(rootDir)) {
    try {
      const files = await fs.promises.readdir(parentDir)
      if (files.length === 0) {
        await fs.promises.rmdir(parentDir)
        parentDir = path.dirname(parentDir)
      } else {
        break
      }
    } catch {
      break
    }
  }
}

// Help instructions
function showHelp() {
  console.log(`
\x1b[35m=== Uploads Folder Manager CLI ===\x1b[0m
Usage:
  node folder-manager/index.js --action=<action> [options]

Actions:
  \x1b[36m--action=list\x1b[0m
      Scans uploads and backups, prints detailed stats.

  \x1b[36m--action=backup\x1b[0m
      Moves unused/untracked files from uploads to backup folder.

  \x1b[36m--action=restore\x1b[0m
      Moves backed up files back to uploads folder and restores DB metadata.

Options:
  \x1b[33m--type=<type>\x1b[0m
      Used with --action=backup. Values:
      - \x1b[32munused\x1b[0m    : Files in DB but not referenced in CMS (default).
      - \x1b[32muntracked\x1b[0m : Files not registered in DB at all.
      - \x1b[32mall\x1b[0m       : Both unused and untracked files.

  \x1b[33m--file=<path>\x1b[0m
      Specifies a single relative file path to backup or restore.
      Example: --file=2026/06/image.png

  \x1b[33m--batch-size=<number>\x1b[0m
      Batch size for processing database/files (default: 50).

  \x1b[33m--dry-run\x1b[0m
      Runs the action in preview mode. No files are moved/deleted, no database changes are made.
  `)
}

// Main execution block
async function main() {
  // Load Environment Variables for CLI
  const envFiles = [".env.local", ".env.production", ".env.development", ".env"]
  let envLoaded = false
  for (const file of envFiles) {
    const envPath = path.resolve(__dirname, "..", file)
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

  const args = process.argv.slice(2)
  const params: Record<string, any> = {}

  args.forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.split("=")
      params[key.substring(2)] = value === undefined ? true : value
    }
  })

  if (!params.action || params.help) {
    showHelp()
    process.exit(0)
  }

  const action = params.action
  const type = params.type || "unused"
  const targetFile = params.file ? getNormalizePath(params.file) : null

  if (params.file) {
    const rootDir = action === "restore" ? BACKUP_DIR : UPLOADS_DIR
    const absoluteTarget = path.resolve(rootDir, params.file)
    const absoluteRoot = path.resolve(rootDir)
    if (!absoluteTarget.startsWith(absoluteRoot)) {
      console.error(
        "\x1b[31m[Error] Security violation: Path traversal detected!\x1b[0m"
      )
      process.exit(1)
    }
  }

  const batchSize = parseInt(params.batchSize) || 50
  const isDryRun = !!params["dry-run"]

  if (!["list", "backup", "restore"].includes(action)) {
    console.error(`\x1b[31m[Error] Invalid action: ${action}\x1b[0m`)
    showHelp()
    process.exit(1)
  }

  if (isDryRun) {
    console.log(
      "\x1b[33m[Dry Run] Running in PREVIEW MODE. No filesystem or DB changes will be made.\x1b[0m"
    )
  }

  let pool
  try {
    if (!process.env.DB_HOST || !process.env.DB_NAME) {
      throw new Error("Database variables DB_HOST/DB_NAME not found in .env.")
    }
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectionLimit: 5,
      waitForConnections: true,
    })
  } catch (err: any) {
    console.error(
      `\x1b[31m[Error] Database connection setup failed: ${err.message}\x1b[0m`
    )
    process.exit(1)
  }

  try {
    // 2. Fetch CMS references to build referenced index
    console.log(
      "\x1b[34m[1/3] Reading database attachments and CMS references...\x1b[0m"
    )
    const [attachments] = await pool.execute("SELECT * FROM attachments")
    const [posts] = await pool.execute(
      "SELECT id, title, featured_image FROM posts WHERE featured_image IS NOT NULL AND status != 'trash'"
    )
    const [videos] = await pool.execute(
      "SELECT id, title, thumbnail_id FROM videos WHERE thumbnail_id IS NOT NULL AND status != 'trash'"
    )
    const [mediaCoverage] = await pool.execute(
      "SELECT id, title, media_coverage_image FROM media_coverage WHERE media_coverage_image IS NOT NULL AND status != 'trash'"
    )

    // Build attachment index
    const attachmentMap = new Map()
    for (const att of attachments) {
      if (att.image_url) {
        attachmentMap.set(att.image_url.toLowerCase(), att)
        attachmentMap.set(getNormalizePath(att.image_url), att)
      }
    }

    // Build references usage map
    const usageMap = new Map()
    const addUsage = (attachmentId: any, item: any) => {
      if (!usageMap.has(attachmentId)) {
        usageMap.set(attachmentId, [])
      }
      usageMap.get(attachmentId).push(item)
    }

    for (const p of posts)
      addUsage(p.featured_image, { type: "Blog", title: p.title })
    for (const v of videos)
      addUsage(v.thumbnail_id, { type: "Video", title: v.title })
    for (const mc of mediaCoverage)
      addUsage(mc.media_coverage_image, {
        type: "Media Coverage",
        title: mc.title,
      })

    // 3. Scan filesystem
    console.log("\x1b[34m[2/3] Scanning filesystem uploads folder...\x1b[0m")
    if (!fs.existsSync(UPLOADS_DIR)) {
      console.log(
        `\x1b[33m[Warning] Uploads folder not found at ${UPLOADS_DIR}. Creating one.\x1b[0m`
      )
      if (!isDryRun) fs.mkdirSync(UPLOADS_DIR, { recursive: true })
    }
    const uploadsFiles = await scanDirectory(UPLOADS_DIR, UPLOADS_DIR)
    console.log(`Found ${uploadsFiles.length} files in active uploads.`)

    console.log("\x1b[34m[3/3] Scanning filesystem backup folder...\x1b[0m")
    if (!fs.existsSync(BACKUP_DIR) && !isDryRun) {
      fs.mkdirSync(BACKUP_DIR, { recursive: true })
    }
    const backupFiles = await scanDirectory(BACKUP_DIR, BACKUP_DIR)
    console.log(`Found ${backupFiles.length} files in backup folder.`)

    // --- Action: LIST ---
    if (action === "list") {
      console.log("\n\x1b[35m=== Uploads Folder Directory Stats ===\x1b[0m")
      let usedCount = 0
      let unusedCount = 0
      let untrackedCount = 0
      let totalSize = 0

      for (const file of uploadsFiles) {
        totalSize += file.size
        const normPath = file.path.toLowerCase()
        const dbEntry =
          attachmentMap.get(normPath) ||
          attachmentMap.get(getNormalizePath(file.path))

        if (dbEntry) {
          const usages = usageMap.get(dbEntry.id) || []
          if (usages.length > 0) {
            usedCount++
          } else {
            unusedCount++
          }
        } else {
          untrackedCount++
        }
      }

      console.log(`Total Uploads Files : ${uploadsFiles.length}`)
      console.log(`Total Disk Space    : ${formatBytes(totalSize)}`)
      console.log(`- CMS Referenced    : \x1b[32m${usedCount} files\x1b[0m`)
      console.log(`- Unused (Registered) : \x1b[33m${unusedCount} files\x1b[0m`)
      console.log(
        `- Untracked (Local) : \x1b[31m${untrackedCount} files\x1b[0m`
      )
      console.log(
        `Total Backed Up     : \x1b[36m${backupFiles.length} files\x1b[0m`
      )
      console.log("=====================================\n")
      process.exit(0)
    }

    // --- Action: BACKUP ---
    if (action === "backup") {
      console.log(
        `\n\x1b[35m=== Starting Backup Process (Filter: ${type}) ===\x1b[0m`
      )

      const filesToBackup = []
      for (const file of uploadsFiles) {
        if (targetFile && getNormalizePath(file.path) !== targetFile) {
          continue // filter by target file
        }

        const normPath = file.path.toLowerCase()
        const dbEntry =
          attachmentMap.get(normPath) ||
          attachmentMap.get(getNormalizePath(file.path))

        let shouldBackup = false
        let fileType = ""

        if (dbEntry) {
          const usages = usageMap.get(dbEntry.id) || []
          if (usages.length === 0) {
            fileType = "unused"
            if (type === "unused" || type === "all") {
              shouldBackup = true
            }
          }
        } else {
          fileType = "untracked"
          if (type === "untracked" || type === "all") {
            shouldBackup = true
          }
        }

        if (shouldBackup) {
          filesToBackup.push({
            file,
            dbEntry,
            fileType,
          })
        }
      }

      if (filesToBackup.length === 0) {
        console.log("\x1b[32mNo matching files found to back up.\x1b[0m")
        process.exit(0)
      }

      console.log(
        `Identified \x1b[33m${filesToBackup.length}\x1b[0m files matching criteria to move to backup.`
      )

      let processed = 0
      const idsToDelete = []

      for (let i = 0; i < filesToBackup.length; i += batchSize) {
        const batch = filesToBackup.slice(i, i + batchSize)
        const batchIdsToDelete = []

        for (const item of batch) {
          const relativePath = item.file.path
          const oldFullPath = path.join(UPLOADS_DIR, relativePath)
          const backupFileFullPath = path.join(BACKUP_DIR, relativePath)

          if (isDryRun) {
            console.log(
              `[Dry Run] Backup: ${relativePath} (${item.fileType}) -> ${path.relative(process.cwd(), backupFileFullPath)}`
            )
            processed++
            continue
          }

          try {
            // Ensure target directory exists in backup
            const backupDirName = path.dirname(backupFileFullPath)
            if (!fs.existsSync(backupDirName)) {
              fs.mkdirSync(backupDirName, { recursive: true })
            }

            // Write metadata .meta.json file if registered in DB
            if (item.dbEntry) {
              fs.writeFileSync(
                backupFileFullPath + ".meta.json",
                JSON.stringify(item.dbEntry, null, 2),
                "utf-8"
              )
              batchIdsToDelete.push(item.dbEntry.id)
              idsToDelete.push(item.dbEntry.id)
            }

            // Move file on disk
            fs.renameSync(oldFullPath, backupFileFullPath)
            cleanEmptyParents(oldFullPath, UPLOADS_DIR)

            processed++
          } catch (err: any) {
            console.error(
              `\x1b[31m[Error] Failed backing up ${relativePath}: ${err.message}\x1b[0m`
            )
          }
        }

        // DB Bulk Delete for this batch (highly optimized)
        if (batchIdsToDelete.length > 0 && !isDryRun) {
          try {
            const placeholders = batchIdsToDelete.map(() => "?").join(",")
            await pool.execute(
              `DELETE FROM attachments WHERE id IN (${placeholders})`,
              batchIdsToDelete
            )
          } catch (err: any) {
            console.error(
              `\x1b[31m[Error] Database batch delete failed: ${err.message}\x1b[0m`
            )
          }
        }

        console.log(
          `[Backup Progress] Processed ${processed}/${filesToBackup.length} files...`
        )
      }

      console.log(
        `\n\x1b[32m[Success] Backup complete! Succeeded: ${processed}/${filesToBackup.length} files.\x1b[0m`
      )
    }

    // --- Action: RESTORE ---
    if (action === "restore") {
      console.log(`\n\x1b[35m=== Starting Restore Process ===\x1b[0m`)

      const filesToRestore = []
      for (const file of backupFiles) {
        if (targetFile && getNormalizePath(file.path) !== targetFile) {
          continue // filter by target file
        }
        filesToRestore.push(file)
      }

      if (filesToRestore.length === 0) {
        console.log("\x1b[32mNo backed up files found to restore.\x1b[0m")
        process.exit(0)
      }

      console.log(
        `Identified \x1b[33m${filesToRestore.length}\x1b[0m files to restore.`
      )

      let processed = 0

      for (let i = 0; i < filesToRestore.length; i += batchSize) {
        const batch = filesToRestore.slice(i, i + batchSize)
        const attachmentsToInsert = []
        const metaFilesToDelete = []

        for (const file of batch) {
          const relativePath = file.path
          const backupFullPath = path.join(BACKUP_DIR, relativePath)
          const uploadFileFullPath = path.join(UPLOADS_DIR, relativePath)
          const metaPath = backupFullPath + ".meta.json"

          if (isDryRun) {
            console.log(
              `[Dry Run] Restore: ${relativePath} -> ${path.relative(process.cwd(), uploadFileFullPath)}`
            )
            processed++
            continue
          }

          try {
            // Ensure target directory exists in uploads
            const uploadDirName = path.dirname(uploadFileFullPath)
            if (!fs.existsSync(uploadDirName)) {
              fs.mkdirSync(uploadDirName, { recursive: true })
            }

            // Move file on disk
            fs.renameSync(backupFullPath, uploadFileFullPath)

            // Read metadata and prepare for bulk insert
            if (fs.existsSync(metaPath)) {
              try {
                const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"))
                attachmentsToInsert.push([
                  meta.id,
                  meta.title || "",
                  meta.content || "",
                  meta.status || "inherit",
                  meta.post_type || "attachment",
                  meta.slug || "",
                  meta.author || 1,
                  meta.post_parent || 0,
                  meta.image_url || relativePath,
                  meta.attachment_image_alt || "",
                  meta.file_size || "0 KB",
                  meta.created_at ? new Date(meta.created_at) : new Date(),
                ])
                metaFilesToDelete.push(metaPath)
              } catch (err: any) {
                console.error(
                  `\x1b[31m[Warning] Error reading metadata for ${relativePath}: ${err.message}\x1b[0m`
                )
              }
            }

            // Cleanup empty parents in backup directory
            cleanEmptyParents(backupFullPath, BACKUP_DIR)
            processed++
          } catch (err: any) {
            console.error(
              `\x1b[31m[Error] Failed restoring ${relativePath}: ${err.message}\x1b[0m`
            )
          }
        }

        // Bulk insert restored metadata for this batch (highly optimized)
        if (attachmentsToInsert.length > 0 && !isDryRun) {
          try {
            const placeholders = attachmentsToInsert
              .map(() => "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())")
              .join(",")
            const flatValues = attachmentsToInsert.flat()
            await pool.execute(
              `INSERT INTO attachments (id, title, content, status, post_type, slug, author, post_parent, image_url, attachment_image_alt, file_size, created_at, updated_at) VALUES ${placeholders}`,
              flatValues
            )

            // Remove meta files after successful DB insert
            for (const mPath of metaFilesToDelete) {
              if (fs.existsSync(mPath)) fs.unlinkSync(mPath)
            }
          } catch (err: any) {
            console.error(
              `\x1b[31m[Error] Database batch insert failed: ${err.message}\x1b[0m`
            )
          }
        }

        console.log(
          `[Restore Progress] Processed ${processed}/${filesToRestore.length} files...`
        )
      }

      console.log(
        `\n\x1b[32m[Success] Restore complete! Succeeded: ${processed}/${filesToRestore.length} files.\x1b[0m`
      )
    }
  } catch (error: any) {
    console.error(`\x1b[31m[Error] Execution aborted: ${error.message}\x1b[0m`)
  } finally {
    if (pool) await pool.end()
    if (
      process.argv.some(
        (arg) => arg.startsWith("--action=") || arg === "--help" || arg === "-h"
      )
    ) {
      process.exit(0)
    }
  }
}

if (
  process.argv.some(
    (arg) => arg.startsWith("--action=") || arg === "--help" || arg === "-h"
  )
) {
  main()
}

export default (req: any, res: any) => {
  res.json({
    message: "Uploads Folder Manager CLI is running.",
    usage:
      "Run this tool via command line: npx tsx folder-manager/index.ts --action=<action> [options]",
  })
}
