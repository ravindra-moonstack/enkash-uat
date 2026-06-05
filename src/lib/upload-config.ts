import path from "path"
import fsSync from "fs"

// Absolute paths to uploads and backup folders
export const UPLOADS_DIR = path.resolve(process.cwd(), "../uploads")
export const BACKUP_DIR = path.resolve(process.cwd(), "../backup")

// Ensure directories exist
if (!fsSync.existsSync(UPLOADS_DIR)) {
  fsSync.mkdirSync(UPLOADS_DIR, { recursive: true })
}

if (!fsSync.existsSync(BACKUP_DIR)) {
  fsSync.mkdirSync(BACKUP_DIR, { recursive: true })
}
