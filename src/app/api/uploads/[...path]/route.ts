import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"
import { resolveStoredUploadPath } from "@/src/lib/upload-storage"

const contentTypes: Record<string, string> = {
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
}

interface UploadRouteContext {
  params: Promise<{
    path?: string[]
  }>
}

export async function GET(_request: Request, context: UploadRouteContext) {
  const { path: segments = [] } = await context.params
  return serveUpload(segments, false)
}

export async function HEAD(_request: Request, context: UploadRouteContext) {
  const { path: segments = [] } = await context.params
  return serveUpload(segments, true)
}

async function serveUpload(segments: string[], headOnly: boolean) {
  const filePath = resolveStoredUploadPath(segments)

  if (!filePath) {
    return NextResponse.json({ error: "File not found" }, { status: 404 })
  }

  const stats = await fs.promises.stat(filePath)
  const ext = path.extname(filePath).toLowerCase()
  const headers = new Headers({
    "Cache-Control": "public, max-age=300, immutable",
    "Content-Length": String(stats.size),
    "Content-Type": contentTypes[ext] || "application/octet-stream",
  })

  if (headOnly) {
    return new Response(null, { headers, status: 200 })
  }

  const file = await fs.promises.readFile(filePath)
  return new Response(file, { headers, status: 200 })
}
