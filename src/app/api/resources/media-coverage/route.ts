import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "6")
    const offset = (page - 1) * limit

    const [rows]: any = await pool.query(
      "SELECT * FROM media_coverage WHERE status = 'publish' ORDER BY media_coverage_date DESC LIMIT ? OFFSET ?",
      [limit, offset]
    )

    const [totalRows]: any = await pool.query(
      "SELECT COUNT(*) as count FROM media_coverage WHERE status = 'publish'"
    )

    const totalPages = Math.ceil(totalRows[0].count / limit)

    return NextResponse.json({
      data: rows,
      pagination: {
        page,
        limit,
        totalPages,
        totalItems: totalRows[0].count,
      },
    })
  } catch (error: any) {
    console.error("Media Coverage API Error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
