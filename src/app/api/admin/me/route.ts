import { NextResponse } from "next/server"
import { jwtVerify } from "jose"
import pool from "@/src/lib/dbConnect"

export async function GET(request: Request) {
  try {
    const token = request.headers.get("cookie")?.split("; ").find(row => row.startsWith("token="))?.split("=")[1]

    if (!token) {
      return NextResponse.json({ success: false, message: "No token" }, { status: 401 })
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    const userId = payload.id

    const [rows]: any = await pool.query(
      "SELECT ID, user_email, display_name FROM users WHERE ID = ? LIMIT 1",
      [userId]
    )

    if (!rows || rows.length === 0) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      user: {
        id: rows[0].ID,
        email: rows[0].user_email,
        name: rows[0].display_name
      }
    })
  } catch (error: any) {
    console.error("Error fetching current user:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
