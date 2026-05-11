import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get("action")

    if (action === "getDates") {
      const [dates]: any = await pool.query(
        `SELECT DISTINCT DATE_FORMAT(updated_at, '%Y-%m') as date_value, DATE_FORMAT(updated_at, '%M %Y') as date_label 
         FROM videos WHERE updated_at IS NOT NULL ORDER BY date_value DESC`
      )
      return NextResponse.json({ success: true, dates })
    }

    const status = searchParams.get("status") || "all"
    const search = searchParams.get("search") || ""
    const date = searchParams.get("date") || "all"
    const category = searchParams.get("category") || "all"
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "40")
    const offset = (page - 1) * limit

    let whereClause = `WHERE 1=1`
    const queryParams: any[] = []

    if (status !== "all") {
      whereClause += ` AND status = ?`
      queryParams.push(status)
    } else {
      whereClause += ` AND status != 'trash'`
    }

    if (search) {
      whereClause += ` AND (title LIKE ? OR external_embed_frame LIKE ?)`
      queryParams.push(`%${search}%`, `%${search}%`)
    }

    // Date filtering (assuming created_at or updated_at)
    if (date !== "all") {
      whereClause += ` AND DATE_FORMAT(updated_at, '%Y-%m') = ?`
      queryParams.push(date)
    }

    if (category !== "all") {
       whereClause += ` AND FIND_IN_SET(?, category) > 0`
       queryParams.push(category)
    }

    // Fetch counts
    const [countsData]: any = await pool.query(`
            SELECT 
                COUNT(*) as all_count,
                SUM(CASE WHEN status = 'publish' THEN 1 ELSE 0 END) as published_count,
                SUM(CASE WHEN status = 'draft' THEN 1 ELSE 0 END) as draft_count,
                SUM(CASE WHEN status = 'trash' THEN 1 ELSE 0 END) as trash_count
            FROM videos
        `)

    // Fetch paginated videos
    const query = `
            SELECT v.*, u.display_name as author_name,
                   GROUP_CONCAT(DISTINCT te.name SEPARATOR ', ') as categories_names
            FROM videos v
            LEFT JOIN users u ON v.author = u.ID
            LEFT JOIN terms te ON FIND_IN_SET(te.term_id, v.category) > 0 AND te.taxonomy = 'category'
            ${whereClause}
            GROUP BY v.id
            ORDER BY v.updated_at DESC
            LIMIT ? OFFSET ?
        `

    const [videos]: any = await pool.query(query, [
      ...queryParams,
      limit,
      offset,
    ])

    // Fetch total items for pagination
    const [totalData]: any = await pool.query(
      `SELECT COUNT(DISTINCT id) as total FROM videos ${whereClause}`,
      queryParams
    )

    return NextResponse.json({
      videos,
      totalItems: totalData[0].total,
      counts: {
        all: countsData[0].all_count - countsData[0].trash_count,
        published: countsData[0].published_count || 0,
        draft: countsData[0].draft_count || 0,
        trash: countsData[0].trash_count || 0,
      },
    })
  } catch (error: any) {
    console.error("Error fetching videos:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { slug } = data

    if (slug) {
      const [existing]: any = await pool.query(
        "SELECT id FROM videos WHERE slug = ? LIMIT 1",
        [slug]
      )
      if (existing.length > 0) {
        return NextResponse.json(
          { success: false, error: "Slug already exists. Please use a unique slug." },
          { status: 400 }
        )
      }
    }

    const query = `
            INSERT INTO videos (
                title, slug, status, post_type, author, post_parent,
                external_embed_frame, self_hosted_id, thumbnail_id,
                featured, trending, category
            ) VALUES (?, ?, ?, 'video', ?, ?, ?, ?, ?, ?, ?, ?)
        `

    const [result]: any = await pool.query(query, [
      data.title || "",
      data.slug || "",
      data.status || "draft",
      data.author || 1,
      data.post_parent || 0,
      data.external_embed_frame || "",
      data.self_hosted_id || null,
      data.thumbnail_id || null,
      data.featured || "no",
      data.trending || "no",
      data.category || "",
    ])

    return NextResponse.json({ success: true, id: result.insertId })
  } catch (error: any) {
    console.error("Error creating video:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
