import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { recordAuditLog } from "@/src/utils/auditLogger"

// GET: Fetch a single glossary item by ID
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const [rows]: any = await pool.execute(
      "SELECT * FROM glossary WHERE id = ? LIMIT 1",
      [id]
    )

    const item = rows[0]

    if (!item) {
      return NextResponse.json(
        { success: false, message: "Item not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: item })
  } catch (error: any) {
    console.error("Error fetching glossary item:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const {
      word,
      slug,
      content,
      showRelatedBlogs,
      blogWord,
      meta_title,
      meta_description,
      feature_image,
      feature_image_alt,
    } = body

    if (!word || !slug || !content) {
      return NextResponse.json(
        { success: false, message: "Word, slug, and content are required" },
        { status: 400 }
      )
    }

    const [existing]: any = await pool.execute(
      "SELECT id FROM glossary WHERE slug = ? AND id != ? LIMIT 1",
      [slug, id]
    )

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug already exists. Please choose a unique slug.",
        },
        { status: 400 }
      )
    }

    // Fetch old data for audit log
    const [oldRows]: any = await pool.execute(
      "SELECT * FROM glossary WHERE id = ? LIMIT 1",
      [id]
    )
    const oldItem = oldRows[0]

    await pool.execute(
      "UPDATE glossary SET word = ?, slug = ?, content = ?, showRelatedBlogs = ?, blogWord = ?, meta_title = ?, meta_description = ?, feature_image = ?, feature_image_alt = ? WHERE id = ?",
      [
        word,
        slug,
        content,
        showRelatedBlogs ? 1 : 0,
        blogWord || "",
        meta_title || null,
        meta_description || null,
        feature_image || null,
        feature_image_alt || null,
        id,
      ]
    )

    // Fetch new data after update for audit log to ensure types and fields match oldItem
    const [newRows]: any = await pool.execute(
      "SELECT * FROM glossary WHERE id = ? LIMIT 1",
      [id]
    )
    const newItem = newRows[0]

    // Record audit log
    await recordAuditLog("glossary", id, "UPDATE", oldItem, newItem)

    return NextResponse.json({
      success: true,
      message: "Glossary item updated successfully",
    })
  } catch (error: any) {
    console.error("Error updating glossary item:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

// DELETE: Remove a glossary item
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Fetch old data for audit log
    const [oldRows]: any = await pool.execute(
      "SELECT * FROM glossary WHERE id = ? LIMIT 1",
      [id]
    )
    const oldItem = oldRows[0]

    if (oldItem) {
      await pool.execute("DELETE FROM glossary WHERE id = ?", [id])

      // Record audit log
      await recordAuditLog("glossary", id, "DELETE", oldItem, null)
    }

    return NextResponse.json({
      success: true,
      message: "Glossary item deleted successfully",
    })
  } catch (error: any) {
    console.error("Error deleting glossary item:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
