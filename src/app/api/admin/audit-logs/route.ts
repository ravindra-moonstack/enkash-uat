import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    const sortBy = searchParams.get("sortBy") || "updated_at"
    const sortOrder = searchParams.get("sortOrder") || "DESC"

    // Validate sortBy to prevent SQL injection
    const allowedSortColumns = [
      "updated_at",
      "action_type",
      "table_name",
      "row_id",
      "updated_by",
    ]
    const finalSortBy = allowedSortColumns.includes(sortBy)
      ? sortBy
      : "updated_at"
    const finalSortOrder = sortOrder.toUpperCase() === "ASC" ? "ASC" : "DESC"

    // Get total count for pagination
    const countQuery = `SELECT COUNT(*) as total FROM audit_logs`
    const [countRows]: any = await pool.execute(countQuery)
    const totalItems = countRows[0]?.total || 0
    const totalPages = Math.ceil(totalItems / limit)

    const selectQuery = `
      SELECT * FROM audit_logs 
      ORDER BY ${finalSortBy} ${finalSortOrder} 
      LIMIT ${limit} OFFSET ${offset}
    `
    const [rows]: any = await pool.execute(selectQuery)

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
