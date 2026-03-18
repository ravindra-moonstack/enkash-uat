import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { recordAuditLog } from "@/src/utils/auditLogger"

// PUT: Update category
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { heading, sort_order } = body

    // Fetch old data for audit log
    const [oldRows]: any = await pool.execute(
      "SELECT * FROM glossary_categories WHERE id = ? LIMIT 1",
      [id]
    )
    const oldItem = oldRows[0]

    await pool.execute(
      "UPDATE glossary_categories SET heading = ?, sort_order = ? WHERE id = ?",
      [heading, sort_order, id]
    )

    // Fetch new data after update for audit log
    const [newRows]: any = await pool.execute(
      "SELECT * FROM glossary_categories WHERE id = ? LIMIT 1",
      [id]
    )
    const newItem = newRows[0]

    // Record audit log
    await recordAuditLog("glossary_categories", id, "UPDATE", oldItem, newItem)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating category:", error)
    return NextResponse.json(
      { error: "Failed to update category" },
      { status: 500 }
    )
  }
}

// DELETE: Delete category
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Check if category exists and fetch data for audit log
    const [existingRows]: any = await pool.execute(
      "SELECT * FROM glossary_categories WHERE id = ?",
      [id]
    )
    const existing = existingRows[0]

    if (!existing) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }

    await pool.execute("DELETE FROM glossary_categories WHERE id = ?", [id])

    // Record audit log
    await recordAuditLog("glossary_categories", id, "DELETE", existing, null)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting category:", error)
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 }
    )
  }
}
