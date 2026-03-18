import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

export async function GET() {
  try {
    // Fetch categories
    const [categories]: any = await pool.execute(
      "SELECT * FROM glossary_categories ORDER BY sort_order ASC"
    )

    // Fetch cards
    const [cards]: any = await pool.execute(
      "SELECT * FROM glossary_category_cards ORDER BY sort_order ASC"
    )

    // Nest cards into categories
    const result = categories.map((cat: any) => {
      return {
        ...cat,
        cards: cards.filter((card: any) => card.category_id === cat.id),
      }
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error fetching glossary categories:", error)
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    )
  }
}
