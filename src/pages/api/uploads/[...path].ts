import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"
import { resolveStoredUploadPath } from "@/src/lib/upload-storage" // Updated path for enkash repo

const contentTypes: Record<string, string> = {
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
}

export const config = {
  api: {
    responseLimit: false,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", ["GET", "HEAD"])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const queryPath = req.query.path
  const segments = Array.isArray(queryPath)
    ? queryPath
    : typeof queryPath === "string"
      ? [queryPath]
      : []
  const filePath = resolveStoredUploadPath(segments)

  if (!filePath) {
    return res.status(404).json({ error: "File not found" })
  }

  const ext = path.extname(filePath).toLowerCase()
  const stats = fs.statSync(filePath)

  res.setHeader("Content-Type", contentTypes[ext] || "application/octet-stream")
  res.setHeader("Content-Length", stats.size)
  res.setHeader("Cache-Control", "public, max-age=0, must-revalidate")

  if (req.method === "HEAD") {
    return res.status(200).end()
  }

  return fs.createReadStream(filePath).pipe(res)
}
