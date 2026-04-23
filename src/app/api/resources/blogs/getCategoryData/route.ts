import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function getBlogsCategoryName(
  category: string,
  limit: number,
  offset: number
) {
  const query = `
    SELECT 
      p.*,
      att.image_url AS featured_image_url,
      att.attachment_image_alt AS image_alt,
      GROUP_CONCAT(DISTINCT te.name) AS category_names,
      GROUP_CONCAT(DISTINCT te.slug) AS category_slugs
    FROM posts p
    LEFT JOIN attachments att 
      ON p.featured_image = att.id
    LEFT JOIN terms te
      ON FIND_IN_SET(te.term_id, p.category)
    WHERE p.post_type = 'post'
      AND p.status = 'publish'
      AND EXISTS (
        SELECT 1
        FROM terms t
        WHERE FIND_IN_SET(t.term_id, p.category)
          AND t.slug = ?
      )
    GROUP BY p.id
    ORDER BY p.created_at DESC
    LIMIT ? OFFSET ?
  `

  const [rows]: any = await pool.query(query, [category, limit, offset])
  return rows
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const categoryName = searchParams.get("category")
    const limit = parseInt(searchParams.get("limit") || "10")
    const offset = parseInt(searchParams.get("offset") || "0")

    if (!categoryName) {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      )
    }

    const posts = await getBlogsCategoryName(categoryName, limit, offset)

    return NextResponse.json({
      posts,
      category: categoryName,
    })
  } catch (error: any) {
    console.error("API Error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
