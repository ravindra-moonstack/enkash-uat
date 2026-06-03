import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"
import {
  getUniqueFileName,
  getUploadDir,
  getUploadUrl,
  isImageFile,
  sanitizeFileName,
} from "@/src/lib/upload-storage"

export const config = {
  api: {
    bodyParser: false, // Disable built-in body parser to handle multipart
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const chunks: Buffer[] = []
      for await (const chunk of req) {
        chunks.push(chunk)
      }
      const buffer = Buffer.concat(chunks)

      const contentType = req.headers["content-type"] || ""
      const boundaryMatch = contentType.match(/boundary=(.+)/)
      if (!boundaryMatch) {
        return res.status(400).json({ error: "No boundary found" })
      }
      const boundary = boundaryMatch[1]

      // Extremely simplified multipart parser for a single file
      const boundaryBuffer = Buffer.from(`--${boundary}`)
      const parts = splitBuffer(buffer, boundaryBuffer)

      let fileData: Buffer | null = null
      let fileName: string | null = null

      for (const part of parts) {
        if (part.length === 0 || part.toString().trim() === "--") continue

        const headerEnd = part.indexOf("\r\n\r\n")
        if (headerEnd === -1) continue

        const headers = part.slice(0, headerEnd).toString()
        if (headers.includes('filename="')) {
          const nameMatch = headers.match(/filename="(.+?)"/)
          fileName = sanitizeFileName(
            nameMatch ? nameMatch[1] : "uploaded_file"
          )
          fileData = part.slice(headerEnd + 4, part.lastIndexOf("\r\n"))
          break
        }
      }

      if (!fileData || !fileName) {
        return res.status(400).json({ error: "No file found in request" })
      }

      if (!isImageFile(fileName)) {
        return res
          .status(400)
          .json({ error: "Only image uploads are supported" })
      }

      const uploadDir = getUploadDir()

      fileName = getUniqueFileName(uploadDir, fileName)
      const filePath = path.join(uploadDir, fileName)
      fs.writeFileSync(filePath, fileData)

      return res.status(200).json({
        success: true,
        name: fileName,
        path: getUploadUrl(fileName),
      })
    } catch (error: unknown) {
      console.error("Upload error:", error)
      return res.status(500).json({ error: getErrorMessage(error) })
    }
  } else if (req.method === "GET") {
    try {
      return res.status(200).json({ images: [] })
    } catch (error: unknown) {
      console.error("Fetch error:", error)
      return res.status(500).json({ error: getErrorMessage(error) })
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

function splitBuffer(buffer: Buffer, delimiter: Buffer): Buffer[] {
  const parts: Buffer[] = []
  let start = 0
  let index = buffer.indexOf(delimiter, start)

  while (index !== -1) {
    parts.push(buffer.slice(start, index))
    start = index + delimiter.length
    index = buffer.indexOf(delimiter, start)
  }

  parts.push(buffer.slice(start))
  return parts
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unexpected server error"
}
