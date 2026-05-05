import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const [users]: any = await pool.query(
      `SELECT ID, display_name FROM users ORDER BY display_name ASC`
    )

    const [categories]: any = await pool.query(
      `SELECT MIN(term_id) as term_id, MAX(name) as name, slug FROM terms WHERE taxonomy = 'category' GROUP BY slug ORDER BY MAX(name) ASC`
    )

    const [dates]: any = await pool.query(
      `SELECT DISTINCT DATE_FORMAT(updated_at, '%Y-%m') as date_value, DATE_FORMAT(updated_at, '%M %Y') as date_label FROM posts WHERE post_type = 'post' AND updated_at IS NOT NULL ORDER BY date_value DESC`
    )

    const [tags]: any = await pool.query(
      `SELECT term_id, name, slug FROM terms WHERE taxonomy = 'post_tag' ORDER BY name ASC`
    )

    return NextResponse.json({
      users,
      categories,
      dates,
      tags
    })
  } catch (error: any) {
    console.error("Error fetching blog meta:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
