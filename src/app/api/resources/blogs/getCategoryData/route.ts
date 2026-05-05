import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { cookies } from "next/headers"

export async function getBlogsCategoryName(
  category: string,
  limit: number,
  offset: number,
  search?: string,
  hasAdminToken: boolean = false
) {
  let searchClause = ""
  const params: any[] = [category]

  if (search) {
    searchClause = ` AND (p.title LIKE ? OR p.slug LIKE ?) `
    params.push(`%${search}%`, `%${search}%`)
  }

  params.push(limit, offset)

  const statusCondition = hasAdminToken
    ? "p.status IN ('publish', 'draft')"
    : "p.status = 'publish'"

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
      AND ${statusCondition}
      AND EXISTS (
        SELECT 1
        FROM terms t
        WHERE FIND_IN_SET(t.term_id, p.category)
          AND t.slug = ?
      )
      ${searchClause}
    GROUP BY p.id
    ORDER BY p.created_at DESC
    LIMIT ? OFFSET ?
  `

  const [rows]: any = await pool.query(query, params)
  return rows
}

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const hasAdminToken = cookieStore.has("token")

    const { searchParams } = new URL(req.url)
    const categoryName = searchParams.get("category")
    const search = searchParams.get("search") || ""
    const limit = parseInt(searchParams.get("limit") || "10")
    const offset = parseInt(searchParams.get("offset") || "0")

    if (!categoryName) {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      )
    }

    const posts = await getBlogsCategoryName(
      categoryName,
      limit,
      offset,
      search,
      hasAdminToken
    )

    return NextResponse.json({
      posts,
      category: categoryName,
    })
  } catch (error: any) {
    console.error("API Error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
