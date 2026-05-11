import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET() {
  try {
    const [rows]: any = await pool.query(
      `SELECT term_id as id, name as label, slug 
       FROM terms 
       WHERE taxonomy = 'video_category' 
       AND count > 0 
       ORDER BY term_id ASC`
    )

    return NextResponse.json({
      categories: rows,
    })
  } catch (error: any) {
    console.error("Video Category API Error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
