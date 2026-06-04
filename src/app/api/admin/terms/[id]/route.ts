import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import { ResultSetHeader, RowDataPacket } from "mysql2"
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

export async function PUT(
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  try {
    await ensureMetaColumnsExist()
    const params = await props.params
    const id = parseInt(params.id, 10)
    const body = await req.json()
    const { name, slug, description, parent, meta_title, meta_description } =
      body

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      )
    }

    // Get taxonomy of the current term
    const [termRows]: any = await pool.query<RowDataPacket[]>(
      "SELECT taxonomy FROM terms WHERE term_id = ?",
      [id]
    )
    const taxonomy = termRows[0]?.taxonomy

    const baseSlug =
      slug ||
      name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") ||
      "untitled"
    const uniqueSlug = await getUniqueSlug("terms", baseSlug, id, "term_id", {
      taxonomy,
    })

    const query =
      "UPDATE terms SET name = ?, slug = ?, description = ?, parent = ?, meta_title = ?, meta_description = ? WHERE term_id = ?"
    await pool.query<ResultSetHeader>(query, [
      name,
      uniqueSlug,
      description || "",
      parent || 0,
      meta_title || null,
      meta_description || null,
      id,
    ])

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _req: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const params = await props.params
    const id = parseInt(params.id, 10)

    const query = "DELETE FROM terms WHERE term_id = ?"
    await pool.query<ResultSetHeader>(query, [id])

    const updateChildren = "UPDATE terms SET parent = 0 WHERE parent = ?"
    await pool.query(updateChildren, [id])

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
