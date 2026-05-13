import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"
import { getUniqueSlug } from "@/src/utils/slugUtils"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id
    const [videos]: any = await pool.query(`
      SELECT v.*, a.image_url as thumbnail_url, a.attachment_image_alt as thumbnail_alt
      FROM videos v
      LEFT JOIN attachments a ON v.thumbnail_id = a.id
      WHERE v.id = ?`, [
      id,
    ])
    if (videos.length === 0) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 })
    }

    return NextResponse.json({
      video: videos[0]
    })
  } catch (error: any) {
    console.error("Error fetching video:", error)
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
    const uniqueSlug = await getUniqueSlug("videos", baseSlug, id)

    const query = `
      UPDATE videos SET
          title = ?, slug = ?, status = ?, author = ?, post_parent = ?,
          external_embed_frame = ?, self_hosted_id = ?, thumbnail_id = ?,
          featured = ?, trending = ?, category = ?
      WHERE id = ?
    `
    await pool.query(query, [
      data.title || "",
      uniqueSlug,
      data.status || "draft",
      data.author || 1,
      data.post_parent || 0,
      data.external_embed_frame || "",
      data.self_hosted_id || null,
      data.thumbnail_id || null,
      data.featured || "no",
      data.trending || "no",
      data.category || "",
      id
    ])

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error updating video:", error)
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
        await pool.query(`UPDATE videos SET status = ? WHERE id = ?`, [
          data.status,
          id,
        ])
      }
  
      return NextResponse.json({ success: true })
    } catch (error: any) {
      console.error("Error updating video status:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }
  
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id
    await pool.query(`DELETE FROM videos WHERE id = ?`, [id])
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error deleting video:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
