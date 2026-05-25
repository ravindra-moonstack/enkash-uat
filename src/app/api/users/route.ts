import { NextRequest, NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
import bcrypt from "bcrypt"

// GET users - Fetch all users or a single user by ID
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")
    const page = Math.max(Number(searchParams.get("page")) || 1, 1)
    const limit = Math.min(
      Math.max(Number(searchParams.get("limit")) || 10, 1),
      100
    )
    const offset = (page - 1) * limit
    const search = searchParams.get("search")?.trim() || ""

    if (id) {
      const [rows]: any = await pool.execute(
        "SELECT * FROM users WHERE ID = ?",
        [id]
      )
      if (rows.length === 0) {
        return NextResponse.json(
          { success: false, error: "User not found" },
          { status: 404 }
        )
      }
      // Remove password from response for security
      const { user_pass, ...userWithoutPass } = rows[0]
      return NextResponse.json({ success: true, data: userWithoutPass })
    }

    const conditions: string[] = []
    const params: any[] = []

    if (search) {
      conditions.push(
        `(user_login LIKE ? OR user_email LIKE ? OR first_name LIKE ? OR last_name LIKE ?)`
      )
      const searchPattern = `%${search}%`
      params.push(searchPattern, searchPattern, searchPattern, searchPattern)
    }

    const whereClause = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : ""

    const countQuery = `SELECT COUNT(*) AS total FROM users ${whereClause}`
    const [countResult]: any = await pool.execute(countQuery, params)
    const total = countResult?.[0]?.total ?? 0

    const dataQuery = `
      SELECT ID, user_login, user_email, first_name, last_name, nickname, description, profile_image_url, created_at, updated_at
      FROM users
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `
    const [rows]: any = await pool.execute(dataQuery, params)

    return NextResponse.json({
      success: true,
      data: rows,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    )
  }
}

// POST user - Create a new user
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      user_login,
      user_pass,
      user_email,
      first_name,
      last_name,
      nickname,
      description,
      profile_image_url,
    } = body

    if (!user_login || !user_pass || !user_email) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(user_pass, 10)

    const [result]: any = await pool.execute(
      `INSERT INTO users (user_login, user_pass, user_email, first_name, last_name, nickname, description, profile_image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user_login,
        hashedPassword,
        user_email,
        first_name || "",
        last_name || "",
        nickname || "",
        description || "",
        profile_image_url || "",
      ]
    )

    return NextResponse.json({
      success: true,
      data: { id: result.insertId, user_login, user_email },
      message: "User created successfully",
    })
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { success: false, error: "Username or Email already exists" },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    )
  }
}

// PUT user - Update an existing user
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")
    if (!id) {
      return NextResponse.json(
        { success: false, error: "User ID is required" },
        { status: 400 }
      )
    }

    const body = await req.json()
    const {
      user_login,
      user_pass,
      user_email,
      first_name,
      last_name,
      nickname,
      description,
      profile_image_url,
    } = body

    const updates: string[] = []
    const params: any[] = []

    if (user_login) {
      updates.push("user_login = ?")
      params.push(user_login)
    }
    if (user_email) {
      updates.push("user_email = ?")
      params.push(user_email)
    }
    if (first_name !== undefined) {
      updates.push("first_name = ?")
      params.push(first_name)
    }
    if (last_name !== undefined) {
      updates.push("last_name = ?")
      params.push(last_name)
    }
    if (nickname !== undefined) {
      updates.push("nickname = ?")
      params.push(nickname)
    }
    if (description !== undefined) {
      updates.push("description = ?")
      params.push(description)
    }
    if (profile_image_url !== undefined) {
      updates.push("profile_image_url = ?")
      params.push(profile_image_url)
    }

    if (user_pass) {
      const hashedPassword = await bcrypt.hash(user_pass, 10)
      updates.push("user_pass = ?")
      params.push(hashedPassword)
    }

    if (updates.length === 0) {
      return NextResponse.json(
        { success: false, error: "No fields to update" },
        { status: 400 }
      )
    }

    params.push(id)
    const [result]: any = await pool.execute(
      `UPDATE users SET ${updates.join(", ")}, updated_at = CURRENT_TIMESTAMP WHERE ID = ?`,
      params
    )

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "User updated successfully",
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    )
  }
}

// DELETE user - Remove a user
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json(
        { success: false, error: "User ID is required" },
        { status: 400 }
      )
    }

    const [result]: any = await pool.execute("DELETE FROM users WHERE ID = ?", [
      id,
    ])

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    )
  }
}
