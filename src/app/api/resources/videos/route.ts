import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "9")
    const search = searchParams.get("search") || ""
    const offset = (page - 1) * limit

    let whereClause = "WHERE 1=1"
    if (search) {
      whereClause += ` AND (title LIKE ?)`
    }

    const queryParams = search ? [`%${search}%`] : []

    const countQuery = `SELECT COUNT(*) as total FROM videos ${whereClause}`
    const [countResult]: any = await pool.execute(countQuery, queryParams)
    const total = countResult[0].total

    const dataQuery = `SELECT * FROM posts ${whereClause} ORDER BY created_at DESC LIMIT ? OFFSET ?`
    const [rows] = await pool.execute(dataQuery, [
      ...queryParams,
      limit.toString(),
      offset.toString(),
    ])

    return NextResponse.json({
      data: rows,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
