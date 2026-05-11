import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { ResultSetHeader } from "mysql2"

export async function PUT(req: NextRequest, props: { params: Promise<{ id: string }> }) {
    try {
        const params = await props.params;
        const id = parseInt(params.id, 10)
        const body = await req.json()
        const { name, slug, description, parent } = body

        if (!name || !slug) {
            return NextResponse.json({ success: false, error: "Name and slug are required." }, { status: 400 })
        }

        // Check for duplicate slug in the same taxonomy (excluding current term)
        const [existing]: any = await pool.query(
            "SELECT term_id FROM terms WHERE slug = ? AND taxonomy = (SELECT taxonomy FROM terms WHERE term_id = ?) AND term_id != ?",
            [slug, id, id]
        )
        if (existing.length > 0) {
            return NextResponse.json({ success: false, error: "Slug already exists in this taxonomy." }, { status: 400 })
        }

        const query = "UPDATE terms SET name = ?, slug = ?, description = ?, parent = ? WHERE term_id = ?"
        await pool.query<ResultSetHeader>(query, [name, slug, description || "", parent || 0, id])

        return NextResponse.json({ success: true })
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}

export async function DELETE(_req: NextRequest, props: { params: Promise<{ id: string }> }) {
    try {
        const params = await props.params;
        const id = parseInt(params.id, 10)

        const query = "DELETE FROM terms WHERE term_id = ?"
        await pool.query<ResultSetHeader>(query, [id])

        const updateChildren = "UPDATE terms SET parent = 0 WHERE parent = ?"
        await pool.query(updateChildren, [id])

        return NextResponse.json({ success: true })
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}
