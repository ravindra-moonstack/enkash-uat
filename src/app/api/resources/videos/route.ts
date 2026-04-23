import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const page = Math.max(Number(searchParams.get("page")) || 1, 1)
    const limit = Math.min(
      Math.max(Number(searchParams.get("limit")) || 9, 1),
      100
    )
    const search = searchParams.get("search")?.trim() || ""

    const offset = (page - 1) * limit

    const conditions: string[] = ["videos.status = 'publish'"]
    const params: any[] = []

    if (search) {
      conditions.push(`(videos.title LIKE ?)`)
      params.push(`%${search}%`)
    }

    const whereClause = `WHERE ${conditions.join(" AND ")}`

    // COUNT
    const countQuery = `
      SELECT COUNT(*) as total 
      FROM videos 
      ${whereClause}
    `
    const [countResult]: any = await pool.execute(countQuery, params)
    const total = countResult?.[0]?.total ?? 0

    // DATA
    const dataQuery = `
      SELECT 
        videos.*,
        attachments.image_url AS featured_image_url,
        attachments.attachment_image_alt AS featured_image_alt
      FROM videos
      LEFT JOIN attachments 
        ON videos.thumbnail_id = attachments.id
      ${whereClause}
      ORDER BY videos.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `

    const [rows]: any = await pool.execute(dataQuery, params)

    return NextResponse.json({
      data: rows,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
      },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
