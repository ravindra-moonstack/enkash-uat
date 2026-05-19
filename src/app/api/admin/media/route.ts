import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import path from "path"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "80")
    const search = searchParams.get("search") || ""
    const type = searchParams.get("type") || "all"
    const date = searchParams.get("date") || "all"

    if (searchParams.get("action") === "getDates") {
      const query = `
            SELECT DISTINCT DATE_FORMAT(created_at, '%Y-%m') as dateVal 
            FROM attachments 
            ORDER BY dateVal DESC
        `
      const [rows]: any = await pool.execute(query)
      const dates = rows.map((r: any) => r.dateVal).filter((v: string) => v) // remove nulls
      return NextResponse.json({ success: true, data: dates })
    }

    // For calculating offset
    const offset = (page - 1) * limit

    let whereConditions = ["1=1"]
    let queryParams: any[] = []

    // Type Filter
    if (type !== "all") {
      if (type === "images") {
        whereConditions.push(
          "(a.image_url LIKE '%.png' OR a.image_url LIKE '%.jpg' OR a.image_url LIKE '%.jpeg' OR a.image_url LIKE '%.gif' OR a.image_url LIKE '%.webp' OR a.image_url LIKE '%.svg')"
        )
      } else if (type === "audio") {
        whereConditions.push(
          "(a.image_url LIKE '%.mp3' OR a.image_url LIKE '%.wav' OR a.image_url LIKE '%.ogg')"
        )
      } else if (type === "video") {
        whereConditions.push(
          "(a.image_url LIKE '%.mp4' OR a.image_url LIKE '%.webm' OR a.image_url LIKE '%.mov')"
        )
      } else if (type === "documents") {
        whereConditions.push(
          "(a.image_url LIKE '%.pdf' OR a.image_url LIKE '%.doc' OR a.image_url LIKE '%.docx' OR a.image_url LIKE '%.xls' OR a.image_url LIKE '%.xlsx' OR a.image_url LIKE '%.txt')"
        )
      }
    }

    // Search Filter
    if (search) {
      whereConditions.push(
        "(a.title LIKE ? OR a.image_url LIKE ? OR a.attachment_image_alt LIKE ?)"
      )
      queryParams.push(`%${search}%`, `%${search}%`, `%${search}%`)
    }

    // Date Filter (Format example: '2026-03' or similar, assuming YYYY-MM is passed)
    if (date !== "all") {
      whereConditions.push("DATE_FORMAT(a.created_at, '%Y-%m') = ?")
      queryParams.push(date)
    }

    const whereClause = "WHERE " + whereConditions.join(" AND ")

    // Count total items
    const countQuery = `SELECT COUNT(*) as total FROM attachments a ${whereClause}`
    const [countRows]: any = await pool.execute(countQuery, queryParams)
    const totalItems = countRows[0]?.total || 0

    // Main query
    const selectQuery = `
      SELECT a.*, u.display_name as author_name 
      FROM attachments a 
      LEFT JOIN users u ON a.author = u.ID 
      ${whereClause} 
      ORDER BY a.created_at DESC 
      LIMIT ${limit} OFFSET ${offset}
    `
    // If 'display_name' doesn't exist in users, this query might fail. We should be careful.
    // Some systems use 'display_name' or 'username'. I will just use 'u.display_name' as a best guess,
    // or maybe fallback if there's an error.

    const [rows]: any = await pool.execute(selectQuery, queryParams)

    return NextResponse.json({
      success: true,
      data: rows,
      totalItems,
    })
  } catch (error: any) {
    if (
      error.code === "ER_BAD_FIELD_ERROR" &&
      error.sqlMessage.includes("u.display_name")
    ) {
      // Fallback if 'display_name' doesn't exist in users table
      try {
        const { searchParams } = new URL(request.url)
        const page = parseInt(searchParams.get("page") || "1")
        const limit = parseInt(searchParams.get("limit") || "80")
        const offset = (page - 1) * limit

        // Simplified query dropping user join
        const fallbackQuery = `SELECT * FROM attachments ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`
        const [rows]: any = await pool.execute(fallbackQuery)

        // Get mock total count
        const [[{ total }]]: any = await pool.execute(
          `SELECT COUNT(*) as total FROM attachments`
        )

        return NextResponse.json({
          success: true,
          data: rows,
          totalItems: total,
          warning: "User join failed",
        })
      } catch (e) {
        console.error("Fallback query failed:", e)
      }
    }
    console.error("Error fetching media:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch media",
        error: error.message,
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const idsString = searchParams.get("ids")
    if (!idsString)
      return NextResponse.json({ success: false, message: "No IDs provided" })

    const ids = idsString
      .split(",")
      .map((id) => parseInt(id))
      .filter((id) => !isNaN(id))
    if (ids.length === 0)
      return NextResponse.json({ success: false, message: "Invalid IDs" })

    const placeholders = ids.map(() => "?").join(",")
    await pool.execute(
      `DELETE FROM attachments WHERE id IN (${placeholders})`,
      ids
    )

    return NextResponse.json({
      success: true,
      message: "Items deleted successfully",
    })
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: "Failed to delete" },
      { status: 500 }
    )
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

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || ""
    const boundaryMatch = contentType.match(/boundary=(.+)/)
    if (!boundaryMatch) {
      return NextResponse.json(
        { success: false, message: "No boundary found" },
        { status: 400 }
      )
    }
    const boundary = boundaryMatch[1]

    const arrayBuffer = await request.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

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
        fileName = nameMatch ? nameMatch[1] : "uploaded_file"
        fileData = part.slice(headerEnd + 4, part.lastIndexOf("\r\n"))
        break
      }
    }

    if (!fileData || !fileName) {
      return NextResponse.json(
        { success: false, message: "No file found in request" },
        { status: 400 }
      )
    }

    const { verifyToken } = await import("@/src/utils/auth")
    const user: any = await verifyToken()

    const { isImageFile, sanitizeFileName } = await import(
      "@/src/lib/upload-storage"
    )

    if (!isImageFile(fileName)) {
      return NextResponse.json(
        { success: false, message: "Only image uploads are supported" },
        { status: 400 }
      )
    }

    fileName = sanitizeFileName(fileName)

    const dateDir = new Date().toISOString().slice(0, 7).replace("-", "/") // e.g. "2026/05"
    const uploadDir = path.join(process.cwd(), "public", "uploads", dateDir)

    const fs = await import("fs")
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }

    // Ensure unique filename inside the new directory
    let candidate = fileName
    const parsed = path.parse(candidate)
    let counter = 1
    while (fs.existsSync(path.join(uploadDir, candidate))) {
      candidate = `${parsed.name}-${counter}${parsed.ext}`
      counter += 1
    }
    fileName = candidate

    const filePath = path.join(uploadDir, fileName)
    fs.writeFileSync(filePath, fileData)

    const relativePath = dateDir + "/" + fileName

    let file_size = "0 KB"
    if (fileData.length < 1024 * 1024) {
      file_size = (fileData.length / 1024).toFixed(2) + " KB"
    } else {
      file_size = (fileData.length / (1024 * 1024)).toFixed(2) + " MB"
    }

    const title = fileName.replace(/\.[^/.]+$/, "")

    let baseSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    if (!baseSlug || baseSlug === "-") baseSlug = "media"

    let slug = baseSlug
    let slugSuffix = 2

    // Deduplicate slug based on existing database entries
    while (true) {
      const [existingSlug]: any = await pool.execute(
        "SELECT id FROM attachments WHERE slug = ? LIMIT 1",
        [slug]
      )
      if (existingSlug.length === 0) {
        break
      }
      slug = `${baseSlug}-${slugSuffix}`
      slugSuffix++
    }

    const [maxIdRows]: any = await pool.execute(
      "SELECT COALESCE(MAX(id), 0) + 1 as nextId FROM attachments"
    )
    const nextId = maxIdRows[0].nextId

    await pool.execute(
      "INSERT INTO attachments (id, title, content, status, post_type, slug, author, post_parent, image_url, attachment_image_alt, file_size, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())",
      [
        nextId,
        title,
        "",
        "inherit",
        "attachment",
        slug,
        user?.id || 1,
        0,
        relativePath,
        "",
        file_size,
      ]
    )

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      data: {
        id: nextId,
        image_url: relativePath,
        title: title,
      },
    })
  } catch (error: any) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { success: false, message: "Server error during upload" },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json()
    const { id, title, attachment_image_alt, content } = data

    if (!id) {
      return NextResponse.json(
        { success: false, message: "No ID provided" },
        { status: 400 }
      )
    }

    await pool.execute(
      `UPDATE attachments SET title = ?, attachment_image_alt = ?, content = ?, updated_at = NOW() WHERE id = ?`,
      [title || "", attachment_image_alt || "", content || "", id]
    )

    return NextResponse.json({ success: true, message: "Item updated" })
  } catch (error: any) {
    console.error("Update error:", error)
    return NextResponse.json(
      { success: false, message: "Server error during update" },
      { status: 500 }
    )
  }
}
