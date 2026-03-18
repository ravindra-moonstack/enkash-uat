import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { recordAuditLog } from "@/src/utils/auditLogger"

// PUT: Update card
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { heading, description, link, sort_order } = body

    // Fetch old data for audit log
    const [oldRows]: any = await pool.execute(
      "SELECT * FROM glossary_category_cards WHERE id = ? LIMIT 1",
      [id]
    )
    const oldItem = oldRows[0]

    await pool.execute(
      "UPDATE glossary_category_cards SET heading = ?, description = ?, link = ?, sort_order = ? WHERE id = ?",
      [heading, description, link, sort_order, id]
    )

    // Fetch new data after update for audit log
    const [newRows]: any = await pool.execute(
      "SELECT * FROM glossary_category_cards WHERE id = ? LIMIT 1",
      [id]
    )
    const newItem = newRows[0]

    // Record audit log
    await recordAuditLog(
      "glossary_category_cards",
      id,
      "UPDATE",
      oldItem,
      newItem
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating card:", error)
    return NextResponse.json(
      { error: "Failed to update card" },
      { status: 500 }
    )
  }
}

// DELETE: Delete card
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Fetch data for audit log
    const [existingRows]: any = await pool.execute(
      "SELECT * FROM glossary_category_cards WHERE id = ? LIMIT 1",
      [id]
    )
    const existing = existingRows[0]

    if (existing) {
      await pool.execute("DELETE FROM glossary_category_cards WHERE id = ?", [
        id,
      ])

      // Record audit log
      await recordAuditLog(
        "glossary_category_cards",
        id,
        "DELETE",
        existing,
        null
      )
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting card:", error)
    return NextResponse.json(
      { error: "Failed to delete card" },
      { status: 500 }
    )
  }
}
