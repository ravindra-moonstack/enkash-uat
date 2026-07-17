import path from "path"
import fsSync from "fs"

// Absolute paths to uploads and backup folders
export const UPLOADS_DIR = path.resolve(process.cwd(), "../uploads")
export const BACKUP_DIR = path.resolve(process.cwd(), "../backup")
