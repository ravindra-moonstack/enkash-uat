// import { NextRequest, NextResponse } from "next/server"
// import pool from "@/src/lib/dbConnect"

// export async function GET(req: NextRequest) {
//   try {
//     console.log("---- API HIT ----")

//     const { searchParams } = new URL(req.url)

//     const page = Number(searchParams.get("page") || 1)
//     const limit = Number(searchParams.get("limit") || 9)
//     const search = searchParams.get("search")

//     const offset = (page - 1) * limit

//     let whereClause = ""
//     let baseParams: any[] = []

//     if (search && search.trim().length > 0) {
//       whereClause = `WHERE (title LIKE ? OR content LIKE ? OR excerpt LIKE ?)`
//       baseParams.push(`%${search}%`, `%${search}%`, `%${search}%`)
//     }

//     const countQuery = `SELECT COUNT(*) as total FROM posts ${whereClause}`

//     const [countResult]: any = await pool.execute(countQuery, baseParams)

//     const total = countResult[0]?.total || 0

//     const dataQuery = `
//       SELECT * FROM posts
//       ${whereClause}
//       ORDER BY created_at DESC
//       LIMIT ${limit} OFFSET ${offset}
//     `

//     const dataParams = [...baseParams]

//     const [rows]: any = await pool.execute(dataQuery, dataParams)

//     const response = {
//       data: rows,
//       pagination: {
//         total,
//         page,
//         limit,
//         totalPages: Math.ceil(total / limit),
//       },
//     }

//     return NextResponse.json(response)
//   } catch (error: any) {
//     console.error("Error Message:", error.message)
//     console.error("Full Error Object:", error)

//     return NextResponse.json(
//       { error: error.message || "Something went wrong" },
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

    console.log("Params:", { page, limit, search, offset })

    const conditions: string[] = []
    const params: any[] = []

    if (search) {
      conditions.push(`(title LIKE ? OR content LIKE ? OR excerpt LIKE ?)`)
      const searchPattern = `%${search}%`
      params.push(searchPattern, searchPattern, searchPattern)
    }

    const whereClause = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : ""

    console.log("WHERE clause:", whereClause)
    console.log("Query params:", params)

    const countQuery = `
      SELECT COUNT(*) AS total
      FROM posts
      ${whereClause}
    `

    const [countResult]: any = await pool.execute(countQuery, params)
    const total = countResult?.[0]?.total ?? 0

    console.log("Total records:", total)

    const dataQuery = `
      SELECT *
      FROM posts
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `

    console.log("Data Query:", dataQuery)

    const [rows]: any = await pool.execute(dataQuery, params)

    console.log("Rows fetched:", rows.length)

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

    console.log("---- SUCCESS ----")

    return NextResponse.json(response)
  } catch (error: any) {
    console.error("---- ERROR ----")
    console.error("Message:", error.message)
    console.error("Stack:", error.stack)

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    )
  }
}
