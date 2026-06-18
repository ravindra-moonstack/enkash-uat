import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { cookies } from "next/headers"

async function getBlogsByAuthor(
  authorLogin: string,
  limit: number,
  offset: number,
  search?: string,
  hasAdminToken: boolean = false
) {
  let searchClause = ""
  const params: any[] = [authorLogin.toLowerCase(), authorLogin]

  if (search) {
    searchClause = ` AND (p.title LIKE ? OR p.slug LIKE ?) `
    params.push(`%${search}%`, `%${search}%`)
  }

  params.push(limit, offset)

  const statusCondition = hasAdminToken
    ? "p.status IN ('publish', 'draft')"
    : "p.status = 'publish' AND (p.scheduled_publish_date IS NULL OR p.scheduled_publish_date <= NOW())"

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
    LEFT JOIN users u
      ON p.author = u.id
    WHERE p.post_type = 'post'
      AND ${statusCondition}
      AND (REPLACE(LOWER(u.user_login), ' ', '-') = ? OR u.user_login = ?)
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
    const authorLogin = searchParams.get("author")
    const search = searchParams.get("search") || ""
    const limit = parseInt(searchParams.get("limit") || "9")
    const offset = parseInt(searchParams.get("offset") || "0")

    if (!authorLogin) {
      return NextResponse.json(
        { error: "Author login is required" },
        { status: 400 }
      )
    }

    // Fetch the author details
    const [authorRows]: any = await pool.query(
      "SELECT ID, user_login, user_email, first_name, last_name, nickname, description, profile_image_url FROM users WHERE REPLACE(LOWER(user_login), ' ', '-') = ? OR user_login = ?",
      [authorLogin.toLowerCase(), authorLogin]
    )
    const authorInfo = authorRows[0] || null

    if (!authorInfo) {
      return NextResponse.json(
        { error: "Author not found" },
        { status: 404 }
      )
    }

    const posts = await getBlogsByAuthor(
      authorLogin,
      limit,
      offset,
      search,
      hasAdminToken
    )

    return NextResponse.json({
      posts,
      author: authorLogin,
      authorInfo,
    })
  } catch (error: any) {
    console.error("API Error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
