import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

interface AdminMember {
  id: number
  email: string
  password: string
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      )
    }

    const [rows]: any = await pool.execute(
      "SELECT id, email, password FROM admins WHERE email = ? LIMIT 1",
      [email]
    )

    const admin = rows[0]

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      )
    }

    const isMatch = await bcrypt.compare(password, admin.password)

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        role: "admin",
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    )

    return NextResponse.json({
      success: true,
      message: "Login successful",
      token,
      admin: {
        id: admin.id,
        email: admin.email,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    )
  }
}
