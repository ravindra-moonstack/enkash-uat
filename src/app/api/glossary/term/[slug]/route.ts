import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  try {
    const [rows]: any = await pool.execute(
      "SELECT * FROM glossary WHERE slug = ? LIMIT 1",
      [slug]
    )

    const term = rows[0]

    if (!term) {
      return NextResponse.json({ error: "Term not found" }, { status: 404 })
    }

    return NextResponse.json(term)
  } catch (error) {
    console.error("Fetch term error:", error)
    return NextResponse.json({ error: "Failed to fetch term" }, { status: 500 })
  }
}
