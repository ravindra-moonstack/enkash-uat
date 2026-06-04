import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"
let tableInitialized = false
const ensureTableExists = async () => {
  if (tableInitialized) return
  try {
    await pool.execute(`
            CREATE TABLE IF NOT EXISTS admin_locks (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                session_id VARCHAR(255) NOT NULL,
                module VARCHAR(50) NOT NULL,
                item_id INT DEFAULT NULL,
                user_name VARCHAR(255) NOT NULL,
                last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                UNIQUE KEY unique_lock (user_id, module, item_id, session_id)
            )
        `)
    tableInitialized = true
  } catch (error) {
    console.error("Error ensuring admin_locks table exists:", error)
  }
}

const cleanupInactiveLocks = async () => {
  try {
    await pool.execute(`
            DELETE FROM admin_locks 
            WHERE last_active < NOW() - INTERVAL 30 SECOND
        `)
  } catch (error) {
    console.error("Error cleaning up inactive locks:", error)
  }
}

export async function POST(request: Request) {
  try {
    await ensureTableExists()
    await cleanupInactiveLocks()

    const body = await request.json()
    const { userId, sessionId, module, itemId, userName } = body

    if (!userId || !sessionId || !module) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    // 1. Check for concurrency (Same user, different session)
    // If we are checking 'global', we check if user has ANY other session
    // If we are checking an item, we check if ANYONE else is editing it

    let isLocked = false
    let lockedBy: any = null

    if (module === "global") {
      // Global lock: Check if this user has any other active session
      const [rows]: any = await pool.execute(
        `SELECT session_id, user_name FROM admin_locks WHERE user_id = ? AND session_id != ? AND module = 'global'`,
        [userId, sessionId]
      )
      if (rows.length > 0) {
        isLocked = true
        lockedBy = rows[0].user_name
      }
    } else {
      // Item lock: Check if anyone else is editing this item
      const [rows]: any = await pool.execute(
        `SELECT session_id, user_name FROM admin_locks WHERE module = ? AND item_id = ? AND session_id != ?`,
        [module, itemId, sessionId]
      )
      if (rows.length > 0) {
        isLocked = true
        lockedBy = rows[0].user_name
      }
    }

    if (isLocked) {
      return NextResponse.json({
        success: true,
        isLocked: true,
        lockedBy: lockedBy,
      })
    }

    // 2. Register/Update current lock
    await pool.execute(
      `
            INSERT INTO admin_locks (user_id, session_id, module, item_id, user_name) 
            VALUES (?, ?, ?, ?, ?) 
            ON DUPLICATE KEY UPDATE last_active = NOW(), user_name = ?
        `,
      [
        userId,
        sessionId,
        module,
        itemId || null,
        userName || "Unknown",
        userName || "Unknown",
      ]
    )

    return NextResponse.json({
      success: true,
      isLocked: false,
    })
  } catch (error: any) {
    console.error("Error managing locks:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("sessionId")
    const module = searchParams.get("module")
    const itemId = searchParams.get("itemId")

    if (!sessionId || !module) {
      return NextResponse.json({ success: false }, { status: 400 })
    }

    let query = `DELETE FROM admin_locks WHERE session_id = ? AND module = ?`
    const params = [sessionId, module]

    if (itemId && itemId !== "null") {
      query += ` AND item_id = ?`
      params.push(itemId)
    }

    await pool.execute(query, params)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error removing lock:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
