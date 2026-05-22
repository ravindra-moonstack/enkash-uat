import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"
import { getUniqueSlug } from "@/src/utils/slugUtils"
import { recordAuditLog } from "@/src/utils/auditLogger"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id
    const [items]: any = await pool.query(`
      SELECT m.*, a.image_url as image_url, a.attachment_image_alt as image_alt
      FROM media_coverage m
      LEFT JOIN attachments a ON m.media_coverage_image = a.old_id
      WHERE m.id = ?`, [
      id,
    ])
    if (items.length === 0) {
      return NextResponse.json({ error: "Media coverage not found" }, { status: 404 })
    }

    const [audit]: any = await pool.query(
      `SELECT u.display_name as last_edited_by, a.updated_at as audit_updated_at
       FROM audit_logs a 
       LEFT JOIN users u ON a.updated_by = u.ID 
       WHERE a.table_name = 'media_coverage' AND a.row_id = ? 
       ORDER BY a.id DESC LIMIT 1`,
      [id]
    )

    return NextResponse.json({
      item: {
        ...items[0],
        last_edited_by: audit.length > 0 ? audit[0].last_edited_by : "System"
      }
    })
  } catch (error: any) {
    console.error("Error fetching media coverage:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id
    const data = await request.json()

    // Ensure unique slug
    const baseSlug = data.slug || data.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') || "untitled"
    const uniqueSlug = await getUniqueSlug("media_coverage", baseSlug, id)

    const [oldItem]: any = await pool.query(`SELECT * FROM media_coverage WHERE id = ?`, [id])

    const query = `
      UPDATE media_coverage SET
          title = ?, slug = ?, status = ?, author = ?, post_parent = ?,
          media_coverage_image = ?, media_coverage_date = ?, media_coverage_heading = ?,
          media_coverage_description = ?, media_coverage_media_link = ?, 
          created_at = COALESCE(?, created_at), updated_at = NOW()
      WHERE id = ?
    `
    await pool.query(query, [
      data.title || "",
      uniqueSlug,
      data.status || "draft",
      data.author || 1,
      data.post_parent || 0,
      data.media_coverage_image || null,
      data.media_coverage_date || null,
      data.media_coverage_heading || "",
      data.media_coverage_description || "",
      data.media_coverage_media_link || "",
      data.created_at || null,
      id
    ])

    await recordAuditLog("media_coverage", id, "UPDATE", oldItem.length > 0 ? oldItem[0] : null, data)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error updating media coverage:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
  ) {
    try {
      const id = (await params).id
      const data = await request.json()
  
      if (data.status) {
        await pool.query(`UPDATE media_coverage SET status = ? WHERE id = ?`, [
          data.status,
          id,
        ])
      }
  
      return NextResponse.json({ success: true })
    } catch (error: any) {
      console.error("Error updating status:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }
  
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id
    await pool.query(`DELETE FROM media_coverage WHERE id = ?`, [id])
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error deleting item:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
