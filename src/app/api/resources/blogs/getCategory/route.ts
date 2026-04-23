import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET() {
  try {
    // Specific categories requested by the user
    const requestedCategories = [
      "receivables",
      "payables",
      "cards",
      "expenses",
      "brand-vouchers",
      "rewards-recognition",
      "ilearn",
    ]

    const [rows]: any = await pool.query(
      "SELECT term_id as id, name as label, slug FROM terms WHERE slug IN (?) AND taxonomy = 'category' ORDER BY FIELD(slug, ?)",
      [requestedCategories, requestedCategories]
    )
    console.log("rows", rows)

    return NextResponse.json({
      breadcrumbs: [
        { label: "Resources", href: "/resources" },
        { label: "Blogs" },
      ],
      categories: rows,
    })
  } catch (error: any) {
    console.error("Category API Error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
