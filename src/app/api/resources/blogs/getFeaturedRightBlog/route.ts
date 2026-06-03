import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET() {
  try {
    const query = `
    SELECT 
      p.*
    FROM posts AS p
    WHERE p.post_type = 'post'
      AND p.status = 'publish'
      AND p.featured_right = 'yes'
    ORDER BY p.updated_at DESC LIMIT 3
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
