import { NextResponse } from "next/server"
import sequelize from "@/src/lib/dbConnect"
import { QueryTypes } from "sequelize"
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
    const oldItem = await sequelize.query(
      "SELECT * FROM glossary_category_cards WHERE id = ? LIMIT 1",
      {
        replacements: [id],
        type: QueryTypes.SELECT,
        plain: true,
      }
    )

    await sequelize.query(
      "UPDATE glossary_category_cards SET heading = ?, description = ?, link = ?, sort_order = ? WHERE id = ?",
      {
        replacements: [heading, description, link, sort_order, id],
        type: QueryTypes.UPDATE,
      }
    )

    // Record audit log
    await recordAuditLog("glossary_category_cards", id, "UPDATE", oldItem, body)

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
    const existing = await sequelize.query(
      "SELECT * FROM glossary_category_cards WHERE id = ? LIMIT 1",
      {
        replacements: [id],
        type: QueryTypes.SELECT,
        plain: true,
      }
    )

    if (existing) {
      await sequelize.query(
        "DELETE FROM glossary_category_cards WHERE id = ?",
        {
          replacements: [id],
          type: QueryTypes.DELETE,
        }
      )

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
