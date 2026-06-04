import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

let tableInitialized = false
const ensureTableExists = async () => {
  if (tableInitialized) return
  try {
    await pool.execute(`
            CREATE TABLE IF NOT EXISTS posts_active_editors (
                id INT AUTO_INCREMENT PRIMARY KEY,
                post_id INT NOT NULL,
                editor_id VARCHAR(255) NOT NULL,
                user_id INT NOT NULL,
                user_name VARCHAR(255) NOT NULL,
                last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE KEY unique_editor (post_id, editor_id)
            )
        `)
    // Check if columns exist
    const [cols]: any = await pool.query(
      "SHOW COLUMNS FROM posts_active_editors"
    )
    const columnNames = cols.map((c: any) => c.Field)

    if (!columnNames.includes("user_id")) {
      await pool.execute(
        "ALTER TABLE posts_active_editors ADD COLUMN user_id INT NOT NULL AFTER editor_id"
      )
    }
    if (!columnNames.includes("user_name")) {
      await pool.execute(
        "ALTER TABLE posts_active_editors ADD COLUMN user_name VARCHAR(255) NOT NULL AFTER user_id"
      )
    }
    tableInitialized = true
  } catch (error) {
    console.error("Error ensuring posts_active_editors table exists:", error)
  }
}

// Clean up inactive editors (older than 30 seconds)
const cleanupInactiveEditors = async () => {
  try {
    await pool.execute(`
            DELETE FROM posts_active_editors 
            WHERE last_active < NOW() - INTERVAL 30 SECOND
        `)
  } catch (error) {
    console.error("Error cleaning up inactive editors:", error)
  }
}

export async function POST(request: Request) {
  try {
    await ensureTableExists()
    await cleanupInactiveEditors()

    const body = await request.json()
    const { postId, editorId, userId, userName } = body

    if (!postId || !editorId || !userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Post ID, Editor ID and User ID are required",
        },
        { status: 400 }
      )
    }

    // Register current editor session
    await pool.execute(
      `
            INSERT INTO posts_active_editors (post_id, editor_id, user_id, user_name) 
            VALUES (?, ?, ?, ?) 
            ON DUPLICATE KEY UPDATE last_active = NOW(), user_name = ?
        `,
      [postId, editorId, userId, userName || "Unknown", userName || "Unknown"]
    )

    // Get other unique active users (excluding current user)
    const [rows]: any = await pool.execute(
      `
            SELECT DISTINCT user_id, user_name
            FROM posts_active_editors 
            WHERE post_id = ? AND user_id != ?
        `,
      [postId, userId]
    )

    return NextResponse.json({
      success: true,
      activeEditors: rows, // Array of {user_id, user_name}
    })
  } catch (error: any) {
    console.error("Error managing active editors:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get("postId")
    const editorId = searchParams.get("editorId")

    if (!postId || !editorId) {
      return NextResponse.json(
        { success: false, message: "Post ID and Editor ID are required" },
        { status: 400 }
      )
    }

    await pool.execute(
      `
            DELETE FROM posts_active_editors 
            WHERE post_id = ? AND editor_id = ?
        `,
      [postId, editorId]
    )

    return NextResponse.json({
      success: true,
      message: "Editor removed",
    })
  } catch (error: any) {
    console.error("Error removing active editor:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
