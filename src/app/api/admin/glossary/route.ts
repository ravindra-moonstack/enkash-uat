import { NextResponse } from "next/server"
import sequelize from "@/src/lib/dbConnect"
import { QueryTypes } from "sequelize"
import { recordAuditLog } from "@/src/utils/auditLogger"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const search = searchParams.get("search") || ""
    const letter = searchParams.get("letter") || ""
    const offset = (page - 1) * limit

    let whereClause = ""
    const queryParams: any[] = []

    if (search) {
      whereClause = "WHERE word LIKE ?"
      queryParams.push(`%${search}%`)
    } else if (letter) {
      if (letter === "#") {
        whereClause = "WHERE word REGEXP '^[^a-zA-Z]'"
      } else if (letter !== "ALL") {
        whereClause = "WHERE word LIKE ?"
        queryParams.push(`${letter}%`)
      }
    }

    // Get total count for pagination
    const countQuery = `SELECT COUNT(*) as total FROM glossary ${whereClause}`
    const countRows: any = await sequelize.query(countQuery, {
      replacements: queryParams,
      type: QueryTypes.SELECT,
      plain: true,
    })
    const totalItems = countRows?.total || 0
    const totalPages = Math.ceil(totalItems / limit)

    const selectQuery = `SELECT id, word, slug, showRelatedBlogs, blogWord, meta_title, meta_description, feature_image FROM glossary ${whereClause} ORDER BY word ASC LIMIT ? OFFSET ?`
    const rows = await sequelize.query(selectQuery, {
      replacements: [...queryParams, limit, offset],
      type: QueryTypes.SELECT,
    })

    return NextResponse.json({
      success: true,
      data: rows,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        limit,
      },
    })
  } catch (error: any) {
    console.error("Error fetching glossary:", error)
    return NextResponse.json(
      { success: false, message: "Failed to fetch glossary items" },
      { status: 500 }
    )
  }
}

// POST: Create a new glossary item
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      word,
      slug,
      content,
      showRelatedBlogs,
      blogWord,
      meta_title,
      meta_description,
      feature_image,
      feature_image_alt,
    } = body

    if (!word || !slug || !content) {
      return NextResponse.json(
        { success: false, message: "Word, slug, and content are required" },
        { status: 400 }
      )
    }

    // Check slug uniqueness
    const existing = await sequelize.query(
      "SELECT id FROM glossary WHERE slug = ? LIMIT 1",
      { replacements: [slug], type: QueryTypes.SELECT }
    )

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug already exists. Please choose a unique slug.",
        },
        { status: 400 }
      )
    }

    const [result]: any = await sequelize.query(
      "INSERT INTO glossary (word, slug, content, showRelatedBlogs, blogWord, meta_title, meta_description, feature_image, feature_image_alt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      {
        replacements: [
          word,
          slug,
          content,
          showRelatedBlogs ? 1 : 0,
          blogWord || "",
          meta_title || null,
          meta_description || null,
          feature_image || null,
          feature_image_alt || null,
        ],
        type: QueryTypes.INSERT,
      }
    )

    // Record audit log
    await recordAuditLog("glossary", result, "CREATE", null, body)

    return NextResponse.json({
      success: true,
      message: "Glossary item created successfully",
      id: result,
    })
  } catch (error: any) {
    console.error("Error creating glossary item:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
