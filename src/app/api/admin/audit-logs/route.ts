import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    // Get total count for pagination
    const countQuery = `SELECT COUNT(*) as total FROM audit_logs`
    const [countRows]: any = await pool.query(countQuery)
    const totalItems = countRows[0]?.total || 0
    const totalPages = Math.ceil(totalItems / limit)

    const selectQuery = `
      SELECT * FROM audit_logs 
      ORDER BY updated_at DESC 
      LIMIT ? OFFSET ?
    `
    const [rows]: any = await pool.execute(selectQuery, [limit, offset])

    return NextResponse.json({
      success: true,
      data: rows,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        limit,
      },
    })
  } catch (error: any) {
    console.error("Error fetching audit logs:", error)
    return NextResponse.json(
      { success: false, message: "Failed to fetch audit logs" },
      { status: 500 }
    )
  }
}
