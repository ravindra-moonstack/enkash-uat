import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { ResultSetHeader, RowDataPacket } from "mysql2"
import { getUniqueSlug } from "@/src/utils/slugUtils"

export async function PUT(req: NextRequest, props: { params: Promise<{ id: string }> }) {
    try {
        const params = await props.params;
        const id = parseInt(params.id, 10)
        const body = await req.json()
        const { name, slug, description, parent } = body

        if (!name) {
            return NextResponse.json({ success: false, error: "Name is required." }, { status: 400 })
        }

        // Get taxonomy of the current term
        const [termRows]: any = await pool.query<RowDataPacket[]>("SELECT taxonomy FROM terms WHERE term_id = ?", [id])
        const taxonomy = termRows[0]?.taxonomy

        const baseSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') || "untitled"
        const uniqueSlug = await getUniqueSlug("terms", baseSlug, id, "term_id", { taxonomy })

        const query = "UPDATE terms SET name = ?, slug = ?, description = ?, parent = ? WHERE term_id = ?"
        await pool.query<ResultSetHeader>(query, [name, uniqueSlug, description || "", parent || 0, id])

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
