import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { recordAuditLog } from "@/src/utils/auditLogger"

// POST: Create a new category
export async function POST(request: Request) {
  try {
    const { heading, sort_order } = await request.json()

    if (!heading) {
      return NextResponse.json(
        { error: "Heading is required" },
        { status: 400 }
      )
    }

    const [result]: any = await pool.execute(
      "INSERT INTO glossary_categories (heading, sort_order) VALUES (?, ?)",
      [heading, sort_order || 0]
    )

    const newId = result.insertId

    // Record audit log
    await recordAuditLog("glossary_categories", newId, "CREATE", null, {
      heading,
      sort_order,
    })

    return NextResponse.json({ success: true, id: newId })
  } catch (error) {
    console.error("Error creating category:", error)
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    )
  }
}
