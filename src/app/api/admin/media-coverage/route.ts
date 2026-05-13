import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"
import { getUniqueSlug } from "@/src/utils/slugUtils"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get("action")

    if (action === "getDates") {
      const [dates]: any = await pool.query(
        `SELECT DISTINCT DATE_FORMAT(media_coverage_date, '%Y-%m') as date_value, DATE_FORMAT(media_coverage_date, '%M %Y') as date_label 
         FROM media_coverage WHERE media_coverage_date IS NOT NULL ORDER BY date_value DESC`
      )
      return NextResponse.json({ success: true, dates })
    }

    const status = searchParams.get("status") || "all"
    const search = searchParams.get("search") || ""
    const date = searchParams.get("date") || "all"
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "40")
    const offset = (page - 1) * limit

    let whereClause = `WHERE 1=1`
    const queryParams: any[] = []

    if (status !== "all") {
      whereClause += ` AND m.status = ?`
      queryParams.push(status)
    } else {
      whereClause += ` AND m.status != 'trash'`
    }

    if (search) {
      whereClause += ` AND (m.title LIKE ? OR m.media_coverage_heading LIKE ?)`
      queryParams.push(`%${search}%`, `%${search}%`)
    }

    if (date !== "all") {
      whereClause += ` AND DATE_FORMAT(m.media_coverage_date, '%Y-%m') = ?`
      queryParams.push(date)
    }

    // Fetch counts
    const [countsData]: any = await pool.query(`
            SELECT 
                COUNT(*) as all_count,
                SUM(CASE WHEN status = 'publish' THEN 1 ELSE 0 END) as published_count,
                SUM(CASE WHEN status = 'draft' THEN 1 ELSE 0 END) as draft_count,
                SUM(CASE WHEN status = 'trash' THEN 1 ELSE 0 END) as trash_count
            FROM media_coverage
        `)

    // Fetch items
    const query = `
            SELECT m.*, u.display_name as author_name,
                   a.image_url as image_url,
                   (SELECT GROUP_CONCAT(user_name SEPARATOR ', ') FROM posts_active_editors pae WHERE pae.module = 'media-coverage' AND pae.post_id = m.id AND pae.last_active > NOW() - INTERVAL 30 SECOND) as locked_by
            FROM media_coverage m
            LEFT JOIN users u ON m.author = u.ID
            LEFT JOIN attachments a ON m.media_coverage_image = a.id
            ${whereClause}
            ORDER BY m.media_coverage_date DESC
            LIMIT ? OFFSET ?
        `

    const [items]: any = await pool.query(query, [
      ...queryParams,
      limit,
      offset,
    ])

    // Fetch total items for pagination
    const [totalData]: any = await pool.query(
      `SELECT COUNT(*) as total FROM media_coverage m ${whereClause}`,
      queryParams
    )

    return NextResponse.json({
      items,
      totalItems: totalData[0].total,
      counts: {
        all: countsData[0].all_count - countsData[0].trash_count,
        published: countsData[0].published_count || 0,
        draft: countsData[0].draft_count || 0,
        trash: countsData[0].trash_count || 0,
      },
    })
  } catch (error: any) {
    console.error("Error fetching media coverage:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Ensure unique slug
    const baseSlug = data.slug || data.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') || "untitled"
    const uniqueSlug = await getUniqueSlug("media_coverage", baseSlug)

    const query = `
            INSERT INTO media_coverage (
                title, slug, status, author, post_parent,
                media_coverage_image, media_coverage_date, media_coverage_heading,
                media_coverage_description, media_coverage_media_link
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `

    const [result]: any = await pool.query(query, [
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
    ])

    return NextResponse.json({ success: true, id: result.insertId })
  } catch (error: any) {
    console.error("Error creating media coverage:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
