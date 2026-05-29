import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET() {
  try {
    const query = `
    SELECT 
      p.*, 
      att.image_url AS featured_image_url, 
      att.attachment_image_alt AS image_alt,
      GROUP_CONCAT(te.name) AS category_names,
      GROUP_CONCAT(te.slug) AS category_slugs
    FROM posts AS p
    LEFT JOIN attachments AS att 
      ON p.featured_image = att.id
    LEFT JOIN terms AS te 
      ON FIND_IN_SET(te.term_id, p.category)
    WHERE p.post_type = 'post'
      AND p.status = 'publish'
      AND p.featured_left_side = 'yes'
    GROUP BY p.id
    ORDER BY p.updated_at DESC LIMIT 1
  `

    const [rows] = await pool.query(query)

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
