import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { RowDataPacket, ResultSetHeader } from "mysql2"
import { getUniqueSlug } from "@/src/utils/slugUtils"
let termsMetaInitialized = false
const ensureMetaColumnsExist = async () => {
  if (termsMetaInitialized) return
  try {
    const [cols]: any = await pool.query("SHOW COLUMNS FROM terms")
    const columnNames = cols.map((c: any) => c.Field.toLowerCase())

    if (!columnNames.includes("meta_title")) {
      await pool.execute(
        "ALTER TABLE terms ADD COLUMN meta_title VARCHAR(255) DEFAULT NULL"
      )
    }
    if (!columnNames.includes("meta_description")) {
      await pool.execute(
        "ALTER TABLE terms ADD COLUMN meta_description TEXT DEFAULT NULL"
      )
    }
    termsMetaInitialized = true
  } catch (error) {
    console.error("Error ensuring metadata columns in terms table:", error)
  }
}

export async function GET(req: NextRequest) {
  try {
    await ensureMetaColumnsExist()
    const { searchParams } = new URL(req.url)
    const taxonomy = searchParams.get("taxonomy") || "category"
    const page = parseInt(searchParams.get("page") || "1", 10)
    const limit = parseInt(searchParams.get("limit") || "20", 10)
    const search = searchParams.get("search") || ""
    const sortBy = searchParams.get("sortBy") || "name"
    const sortOrder = searchParams.get("sortOrder") === "desc" ? "DESC" : "ASC"

    const offset = (page - 1) * limit
    let query = "SELECT * FROM terms WHERE taxonomy = ?"
    const queryParams: any[] = [taxonomy]

    if (search) {
      query += " AND (name LIKE ? OR description LIKE ?)"
      queryParams.push(`%${search}%`, `%${search}%`)
    }

    const validSortColumns = ["name", "description", "slug", "count"]
    const actualSortBy = validSortColumns.includes(sortBy) ? sortBy : "name"
    query += ` ORDER BY ${actualSortBy} ${sortOrder} LIMIT ? OFFSET ?`
    queryParams.push(limit, offset)

    const [rows] = await pool.query<RowDataPacket[]>(query, queryParams)

    let countQuery = "SELECT COUNT(*) as total FROM terms WHERE taxonomy = ?"
    const countParams: any[] = [taxonomy]
    if (search) {
      countQuery += " AND (name LIKE ? OR description LIKE ?)"
      countParams.push(`%${search}%`, `%${search}%`)
    }
    const [countResult] = await pool.query<RowDataPacket[]>(
      countQuery,
      countParams
    )
    const totalItems = countResult[0].total

    // Also fetch all terms of this taxonomy without pagination for parent selection (only needed for category, but safe for all)
    const [allTerms] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM terms WHERE taxonomy = ? ORDER BY name ASC",
      [taxonomy]
    )

    return NextResponse.json({
      success: true,
      data: rows,
      allTerms,
      totalItems,
      page,
      limit,
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureMetaColumnsExist()
    const body = await req.json()
    const {
      name,
      slug,
      description,
      parent,
      taxonomy,
      meta_title,
      meta_description,
    } = body

    if (!name || !taxonomy) {
      return NextResponse.json(
        { success: false, error: "Name and taxonomy are required." },
        { status: 400 }
      )
    }

    const baseSlug =
      slug ||
      name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") ||
      "untitled"
    const uniqueSlug = await getUniqueSlug(
      "terms",
      baseSlug,
      undefined,
      "term_id",
      { taxonomy }
    )

    const query =
      "INSERT INTO terms (name, slug, description, parent, taxonomy, count, meta_title, meta_description) VALUES (?, ?, ?, ?, ?, 0, ?, ?)"
    const [result] = await pool.query<ResultSetHeader>(query, [
      name,
      uniqueSlug,
      description || "",
      parent || 0,
      taxonomy,
      meta_title || null,
      meta_description || null,
    ])

    return NextResponse.json({ success: true, id: result.insertId })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
