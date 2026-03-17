import { NextResponse } from "next/server"
import sequelize from "@/src/lib/dbConnect"
import { QueryTypes } from "sequelize"
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
    const oldItem = await sequelize.query(
      "SELECT * FROM glossary_categories WHERE id = ? LIMIT 1",
      {
        replacements: [id],
        type: QueryTypes.SELECT,
        plain: true,
      }
    )

    await sequelize.query(
      "UPDATE glossary_categories SET heading = ?, sort_order = ? WHERE id = ?",
      {
        replacements: [heading, sort_order, id],
        type: QueryTypes.UPDATE,
      }
    )
    // Record audit log
    await recordAuditLog("glossary_categories", id, "UPDATE", oldItem, body)

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
    const existing: any = await sequelize.query(
      "SELECT * FROM glossary_categories WHERE id = ?",
      {
        replacements: [id],
        type: QueryTypes.SELECT,
        plain: true,
      }
    )

    if (!existing) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }

    await sequelize.query("DELETE FROM glossary_categories WHERE id = ?", {
      replacements: [id],
      type: QueryTypes.DELETE,
    })

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
