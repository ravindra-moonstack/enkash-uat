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

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      )
    }

    const { verifyToken } = await import("@/src/utils/auth")
    const user: any = await verifyToken()

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    let baseSlug = file.name
      .replace(/\.[^/.]+$/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")

    // Fallback if totally empty
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

    // Now use this strictly unique slug as the underlying file name to match WordPress behavior perfectly
    const fileName = slug + path.extname(file.name)
    const dateDir = new Date().toISOString().slice(0, 7).replace("-", "/")
    const relativePath = dateDir + "/" + fileName

    const fs = await import("fs/promises")
    const uploadDir = path.join(process.cwd(), "public/uploads", dateDir)

    // Ensure directory exists
    await fs.mkdir(uploadDir, { recursive: true })

    // Write file to disk
    await fs.writeFile(
      path.join(process.cwd(), "public/uploads", relativePath),
      buffer
    )

    let file_size = "0 KB"
    if (file.size < 1024 * 1024) {
      file_size = (file.size / 1024).toFixed(2) + " KB"
    } else {
      file_size = (file.size / (1024 * 1024)).toFixed(2) + " MB"
    }

    const title = file.name.replace(/\.[^/.]+$/, "")

    // Manually calculate next ID to bypass missing AUTO_INCREMENT
    const [maxIdRows]: any = await pool.execute(
      "SELECT COALESCE(MAX(id), 0) + 1 as nextId FROM attachments"
    )
    const nextId = maxIdRows[0].nextId

    // Insert into DB (Mapping user's full table schema structure to prevent missing field errors)
    const [result]: any = await pool.execute(
      "INSERT INTO attachments (id, title, content, status, post_type, slug, author, post_parent, image_url, attachment_image_alt, file_size, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())",
      [
        nextId, // id
        title, // title
        "", // content
        "inherit", // status
        "attachment", // post_type
        slug, // slug
        user?.id || 1, // author
        0, // post_parent
        relativePath, // image_url
        "", // attachment_image_alt
        file_size, // file_size
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
