import fs from "fs";
import path from "path";

export interface StoredImage {
  name: string;
  url: string;
  mtime: number;
}

export const UPLOAD_SEGMENT = "test";

export function getUploadDir() {
  return path.join(process.cwd(), "uploads", UPLOAD_SEGMENT);
}

export function sanitizeFileName(fileName: string) {
  const parsed = path.parse(fileName);
  const baseName = parsed.name
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  const ext = parsed.ext.toLowerCase().replace(/[^.\w]/g, "");

  return `${baseName || "upload"}${ext}`;
}

export function getUniqueFileName(uploadDir: string, fileName: string) {
  const safeName = sanitizeFileName(fileName);
  const parsed = path.parse(safeName);
  let candidate = safeName;
  let counter = 1;

  while (fs.existsSync(path.join(uploadDir, candidate))) {
    candidate = `${parsed.name}-${counter}${parsed.ext}`;
    counter += 1;
  }

  return candidate;
}

export function isImageFile(fileName: string) {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(fileName);
}

export function getUploadUrl(fileName: string) {
  return `/uploads/${UPLOAD_SEGMENT}/${encodeURIComponent(fileName)}`;
}

export function listStoredImages(): StoredImage[] {
  const uploadDir = getUploadDir();
  if (!fs.existsSync(uploadDir)) return [];

  return fs
    .readdirSync(uploadDir)
    .filter((file) => {
      const filePath = path.join(uploadDir, file);
      const stats = fs.statSync(filePath);

      return isImageFile(file) && stats.isFile();
    })
    .map((file) => {
      const filePath = path.join(uploadDir, file);
      const stats = fs.statSync(filePath);

      return {
        name: file,
        url: getUploadUrl(file),
        mtime: stats.mtimeMs,
      };
    })
    .sort((a, b) => b.mtime - a.mtime);
}

export function resolveStoredUploadPath(segments: string[]) {
  if (segments.length !== 3) {
    return null;
  }

  const [year, month, rawFileName] = segments;

  if (!/^\d{4}$/.test(year) || !/^\d{2}$/.test(month)) {
    return null;
  }

  const fileName = sanitizeFileName(rawFileName);
  if (fileName !== rawFileName || !isImageFile(fileName)) {
    return null;
  }

  const filePath = path.join(process.cwd(), "uploads", year, month, fileName);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath;
  }

  return null;
}
