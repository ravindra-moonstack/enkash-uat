import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { RowDataPacket, ResultSetHeader } from "mysql2"

export async function GET(req: NextRequest) {
    try {
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
        const [countResult] = await pool.query<RowDataPacket[]>(countQuery, countParams)
        const totalItems = countResult[0].total

        // Also fetch all terms of this taxonomy without pagination for parent selection (only needed for category, but safe for all)
        const [allTerms] = await pool.query<RowDataPacket[]>("SELECT * FROM terms WHERE taxonomy = ? ORDER BY name ASC", [taxonomy])

        return NextResponse.json({ success: true, data: rows, allTerms, totalItems, page, limit })
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, slug, description, parent, taxonomy } = body

        if (!name || !slug || !taxonomy) {
            return NextResponse.json({ success: false, error: "Name, slug, and taxonomy are required." }, { status: 400 })
        }

        // Check for duplicate slug in the same taxonomy
        const [existing]: any = await pool.query(
            "SELECT term_id FROM terms WHERE slug = ? AND taxonomy = ?",
            [slug, taxonomy]
        )
        if (existing.length > 0) {
            return NextResponse.json({ success: false, error: "Slug already exists in this taxonomy." }, { status: 400 })
        }

        const query = "INSERT INTO terms (name, slug, description, parent, taxonomy, count) VALUES (?, ?, ?, ?, ?, 0)"
        const [result] = await pool.query<ResultSetHeader>(query, [name, slug, description || "", parent || 0, taxonomy])

        return NextResponse.json({ success: true, id: result.insertId })
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}
