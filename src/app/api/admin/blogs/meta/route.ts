import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const [users]: any = await pool.query(
      `SELECT ID, display_name FROM users ORDER BY display_name ASC`
    )

    const [categories]: any = await pool.query(
      `SELECT term_id, name, slug, parent FROM terms WHERE taxonomy = 'category' ORDER BY name ASC`
    )

    const [dates]: any = await pool.query(
      `SELECT DISTINCT DATE_FORMAT(updated_at, '%Y-%m') as date_value, DATE_FORMAT(updated_at, '%M %Y') as date_label FROM posts WHERE post_type = 'post' AND updated_at IS NOT NULL ORDER BY date_value DESC`
    )

    const [tags]: any = await pool.query(
      `SELECT term_id, name, slug FROM terms WHERE taxonomy = 'post_tag' ORDER BY name ASC`
    )

    const [videoCategories]: any = await pool.query(
      `SELECT term_id, name, slug, parent FROM terms WHERE taxonomy = 'video_category' ORDER BY name ASC`
    )

    return NextResponse.json({
      users,
      categories,
      videoCategories,
      dates,
      tags,
    })
  } catch (error: any) {
    console.error("Error fetching meta:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
