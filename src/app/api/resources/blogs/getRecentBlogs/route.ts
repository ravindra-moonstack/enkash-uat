import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get("limit") || "4")
    const offset = parseInt(searchParams.get("offset") || "0")

    const query = `
    SELECT 
      p.*, 
      att.image_url AS featured_image_url, 
      att.attachment_image_alt AS image_alt,
      GROUP_CONCAT(te.name) AS category_names
    FROM posts AS p
    LEFT JOIN attachments AS att 
      ON p.featured_image = att.id
    LEFT JOIN terms AS te 
      ON FIND_IN_SET(te.term_id, p.category)
    WHERE p.post_type = 'post'
      AND p.status = 'publish'
      AND (p.scheduled_publish_date IS NULL OR p.scheduled_publish_date <= NOW())
    GROUP BY p.id
    ORDER BY p.created_at DESC 
    LIMIT ? OFFSET ?
  `

    const [rows] = await pool.query(query, [limit, offset])

    return NextResponse.json(
      { posts: rows },
      {
        headers: {
          "Cache-Control": "s-maxage=60, stale-while-revalidate=120",
        },
      }
    )
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    )
  }
}
