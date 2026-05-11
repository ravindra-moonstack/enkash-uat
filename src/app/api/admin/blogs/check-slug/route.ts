import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get("slug")
    const excludeId = searchParams.get("excludeId")

    if (!slug) {
      return NextResponse.json({ exists: false })
    }

    let query = "SELECT id FROM posts WHERE slug = ? AND status != 'trash'"
    const params = [slug]

    if (excludeId) {
      query += " AND id != ?"
      params.push(excludeId)
    }

    const [rows]: any = await pool.query(query, params)

    return NextResponse.json({ exists: rows.length > 0 })
  } catch (error: any) {
    console.error("Error checking slug:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
