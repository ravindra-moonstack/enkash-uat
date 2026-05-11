import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id
    const [items]: any = await pool.query(`
      SELECT m.*, a.image_url as image_url, a.attachment_image_alt as image_alt
      FROM media_coverage m
      LEFT JOIN attachments a ON m.media_coverage_image = a.id
      WHERE m.id = ?`, [
      id,
    ])
    if (items.length === 0) {
      return NextResponse.json({ error: "Media coverage not found" }, { status: 404 })
    }

    return NextResponse.json({
      item: items[0]
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

    const query = `
      UPDATE media_coverage SET
          title = ?, slug = ?, status = ?, author = ?, post_parent = ?,
          media_coverage_image = ?, media_coverage_date = ?, media_coverage_heading = ?,
          media_coverage_description = ?, media_coverage_media_link = ?
      WHERE id = ?
    `
    await pool.query(query, [
      data.title || "",
      data.slug || "",
      data.status || "draft",
      data.author || 1,
      data.post_parent || 0,
      data.media_coverage_image || null,
      data.media_coverage_date || null,
      data.media_coverage_heading || "",
      data.media_coverage_description || "",
      data.media_coverage_media_link || "",
      id
    ])

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
