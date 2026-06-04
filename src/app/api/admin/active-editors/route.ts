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
                module VARCHAR(50) DEFAULT 'blogs',
                last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE KEY unique_editor (module, post_id, editor_id)
            )
        `)

    const [cols]: any = await pool.query(
      "SHOW COLUMNS FROM posts_active_editors"
    )
    const columnNames = cols.map((c: any) => c.Field.toLowerCase())

    if (!columnNames.includes("module")) {
      await pool.execute(
        "ALTER TABLE posts_active_editors ADD COLUMN module VARCHAR(50) DEFAULT 'blogs' AFTER post_id"
      )
      try {
        await pool.execute(
          "ALTER TABLE posts_active_editors DROP INDEX unique_editor"
        )
        tableInitialized = true
      } catch (e) {}
      await pool.execute(
        "ALTER TABLE posts_active_editors ADD UNIQUE KEY unique_editor (module, post_id, editor_id)"
      )
    }
  } catch (error) {
    console.error("Error ensuring posts_active_editors table exists:", error)
  }
}

const cleanupInactiveEditors = async () => {
  try {
    await pool.execute(`
            DELETE FROM posts_active_editors 
            WHERE last_active < NOW() - INTERVAL 35 SECOND
        `)
  } catch (error) {
    console.error("Error cleaning up inactive editors:", error)
  }
}

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    await ensureTableExists()
    await cleanupInactiveEditors()

    let body: any = {}
    try {
      body = await request.json()
    } catch (e) {
      // Body might be empty or invalid JSON (e.g. from sendBeacon with Blob)
    }

    const action = body.action || searchParams?.get("action")
    const userId = body.userId
    const editorId =
      body.editorId ||
      body.sessionId ||
      searchParams?.get("editorId") ||
      searchParams?.get("sessionId")
    const module = body.module || searchParams?.get("module") || "blogs"
    const postId =
      body.postId ||
      body.itemId ||
      searchParams?.get("postId") ||
      searchParams?.get("itemId")
    const userName = body.userName

    if (action === "release") {
      if (editorId && postId) {
        await pool.execute(
          `DELETE FROM posts_active_editors WHERE editor_id = ? AND module = ? AND post_id = ?`,
          [editorId, module, postId]
        )
      }
      return NextResponse.json({ success: true })
    }

    if (!userId || !editorId || !postId) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      )
    }

    if (action === "takeover") {
      // Delete all existing locks for this module and post
      await pool.execute(
        `DELETE FROM posts_active_editors WHERE module = ? AND post_id = ?`,
        [module, postId]
      )
    } else {
      // 1. Check if ANY other session has a lock on this item
      const [existing]: any = await pool.execute(
        `SELECT editor_id, user_name FROM posts_active_editors WHERE module = ? AND post_id = ? AND editor_id != ?`,
        [module, postId, editorId]
      )

      if (existing.length > 0) {
        return NextResponse.json({
          success: true,
          isLocked: true,
          lockedBy: existing[0].user_name,
          activeEditors: [{ user_name: existing[0].user_name }],
        })
      }
    }

    // 2. Upsert my lock
    await pool.execute(
      `
            INSERT INTO posts_active_editors (post_id, editor_id, user_id, user_name, module) 
            VALUES (?, ?, ?, ?, ?) 
            ON DUPLICATE KEY UPDATE last_active = NOW(), user_name = ?, module = ?
        `,
      [
        postId,
        editorId,
        userId,
        userName || "Unknown",
        module,
        userName || "Unknown",
        module,
      ]
    )

    return NextResponse.json({
      success: true,
      isLocked: false,
      activeEditors: [],
    })
  } catch (error: any) {
    console.error("Error managing active editors:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const editorId =
      searchParams.get("editorId") || searchParams.get("sessionId")
    const module = searchParams.get("module") || "blogs"
    const postId = searchParams.get("postId") || searchParams.get("itemId")

    if (!editorId || !postId) {
      return NextResponse.json({ success: false }, { status: 400 })
    }

    await pool.execute(
      `DELETE FROM posts_active_editors WHERE editor_id = ? AND module = ? AND post_id = ?`,
      [editorId, module, postId]
    )

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error removing editor:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
