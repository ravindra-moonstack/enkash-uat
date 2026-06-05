import fs from "fs"
import path from "path"

export interface StoredImage {
  name: string
  url: string
  mtime: number
}

export const UPLOAD_SEGMENT = "test"

export function getUploadDir() {
  return path.join(process.cwd(), "public", "uploads", UPLOAD_SEGMENT)
}

export function sanitizeFileName(fileName: string) {
  const parsed = path.parse(fileName)
  const baseName = parsed.name
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
  const ext = parsed.ext.toLowerCase().replace(/[^.\w]/g, "")

  return `${baseName || "upload"}${ext}`
}

export function getUniqueFileName(uploadDir: string, fileName: string) {
  const safeName = sanitizeFileName(fileName)
  const parsed = path.parse(safeName)
  let candidate = safeName
  let counter = 1

  while (fs.existsSync(path.join(uploadDir, candidate))) {
    candidate = `${parsed.name}-${counter}${parsed.ext}`
    counter += 1
  }

  return candidate
}

export function isImageFile(fileName: string) {
  return /\.(jpg|jpeg|png|gif|webp|svg|pdf)$/i.test(fileName)
}

export function getUploadUrl(fileName: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""
  const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl
  return `${cleanBaseUrl}/uploads/${UPLOAD_SEGMENT}/${encodeURIComponent(fileName)}`
}

import { UPLOADS_DIR } from "./upload-config"

export function resolveStoredUploadPath(segments: string[]) {
  if (
    segments.length === 0 ||
    segments.some(
      (segment) =>
        !segment ||
        segment === "." ||
        segment === ".." ||
        segment.includes("/") ||
        segment.includes("\\")
    )
  ) {
    return null
  }

  const resolvedRoot = path.resolve(UPLOADS_DIR)
  const filePath = path.resolve(resolvedRoot, ...segments)

  if (
    filePath !== resolvedRoot &&
    !filePath.startsWith(`${resolvedRoot}${path.sep}`)
  ) {
    return null
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath
  }

  return null
}
