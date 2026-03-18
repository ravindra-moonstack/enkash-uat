import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

// This endpoint was previously used to regenerate glossary-data.json on S3.
// Glossary data is now served entirely from SQL — no JSON file is used.
// This route now acts as a DB connectivity check for the glossary table.
export async function GET() {
  try {
    const [rows]: any = await pool.execute(
      "SELECT COUNT(*) as total FROM glossary"
    )
    const total = rows[0]?.total ?? 0

    return NextResponse.json({
      success: true,
      message: `Glossary DB is healthy. Total terms: ${total}`,
      total,
    })
  } catch (error) {
    console.error("Error checking glossary DB:", error)
    return NextResponse.json(
      { success: false, message: "Failed to connect to glossary DB" },
      { status: 500 }
    )
  }
}
