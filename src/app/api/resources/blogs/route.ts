// import { NextRequest, NextResponse } from "next/server"
// import pool from "@/src/lib/dbConnect"

// export async function GET(req: NextRequest) {
//   try {
//     const { searchParams } = new URL(req.url)

//     const page = Math.max(Number(searchParams.get("page")) || 1, 1)
//     const limit = Math.min(
//       Math.max(Number(searchParams.get("limit")) || 9, 1),
//       100
//     )
//     const search = searchParams.get("search")?.trim() || ""

//     const offset = (page - 1) * limit

//     const conditions: string[] = []
//     const params: any[] = []

//     if (search) {
//       conditions.push(`(title LIKE ? OR content LIKE ? OR excerpt LIKE ?)`)
//       const searchPattern = `%${search}%`
//       params.push(searchPattern, searchPattern, searchPattern)
//     }

//     const whereClause = conditions.length
//       ? `WHERE ${conditions.join(" AND ")}`
//       : ""

//     const countQuery = `
//       SELECT COUNT(*) AS total
//       FROM posts
//       ${whereClause}
//     `

//     const [countResult]: any = await pool.execute(countQuery, params)
//     const total = countResult?.[0]?.total ?? 0

//     const dataQuery = `
//       SELECT posts.*, attachments.image_url AS featured_image_url, attachments.attachment_image_alt AS featured_image_alt
//       FROM posts
//       ${whereClause}
//       LEFT JOIN attachments AS attachments
//         ON posts.featured_image = attachments.id
//       ORDER BY created_at DESC
//       LIMIT ${limit} OFFSET ${offset}
//     `

//     const [rows]: any = await pool.execute(dataQuery, params)

//     const response = {
//       data: rows,
//       pagination: {
//         total,
//         page,
//         limit,
//         totalPages: Math.ceil(total / limit),
//         hasNextPage: page * limit < total,
//         hasPrevPage: page > 1,
//       },
//     }

//     return NextResponse.json(response)
//   } catch (error: any) {
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Internal Server Error",
//       },
//       { status: 500 }
//     )
//   }
// }
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

    const conditions: string[] = ["posts.status = 'publish'"]
    const params: any[] = []

    if (search) {
      conditions.push(
        `(posts.title LIKE ? OR posts.content LIKE ? OR posts.excerpt LIKE ?)`
      )
      const searchPattern = `%${search}%`
      params.push(searchPattern, searchPattern, searchPattern)
    }

    const whereClause = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : ""
    const countQuery = `
      SELECT COUNT(*) AS total
      FROM posts
      ${whereClause}
    `

    const [countResult]: any = await pool.execute(countQuery, params)
    const total = countResult?.[0]?.total ?? 0

    const dataQuery = `
      SELECT 
        posts.*, 
        attachments.image_url AS featured_image_url, 
        attachments.attachment_image_alt AS featured_image_alt
      FROM posts
      LEFT JOIN attachments AS attachments
        ON posts.featured_image = attachments.id 
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `

    const [rows]: any = await pool.execute(dataQuery, params)

    const response = {
      data: rows,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
      },
    }

    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    )
  }
}
