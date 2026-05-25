import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

const ensureTableExists = async () => {
  try {
    await pool.execute(`
            CREATE TABLE IF NOT EXISTS admin_active_sessions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                session_id VARCHAR(255) NOT NULL,
                last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                UNIQUE KEY unique_session (user_id, session_id)
            )
        `)
  } catch (error) {
    console.error("Error ensuring admin_active_sessions table exists:", error)
  }
}

const cleanupInactiveSessions = async () => {
  try {
    await pool.execute(`
            DELETE FROM admin_active_sessions 
            WHERE last_active < NOW() - INTERVAL 1 MINUTE
        `)
  } catch (error) {
    console.error("Error cleaning up inactive sessions:", error)
  }
}

export async function POST(request: Request) {
  try {
    await ensureTableExists()
    await cleanupInactiveSessions()

    const body = await request.json()
    const { userId, sessionId } = body

    if (!userId || !sessionId) {
      return NextResponse.json(
        { success: false, message: "User ID and Session ID are required" },
        { status: 400 }
      )
    }

    // Register/Update current session
    await pool.execute(
      `
            INSERT INTO admin_active_sessions (user_id, session_id) 
            VALUES (?, ?) 
            ON DUPLICATE KEY UPDATE last_active = NOW()
        `,
      [userId, sessionId]
    )

    // Check if there are other sessions for this user
    const [rows]: any = await pool.execute(
      `
            SELECT session_id
            FROM admin_active_sessions 
            WHERE user_id = ? AND session_id != ?
        `,
      [userId, sessionId]
    )

    return NextResponse.json({
      success: true,
      hasOtherSessions: rows.length > 0,
    })
  } catch (error: any) {
    console.error("Error managing active sessions:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const sessionId = searchParams.get("sessionId")

    if (!userId || !sessionId) {
      return NextResponse.json(
        { success: false, message: "User ID and Session ID are required" },
        { status: 400 }
      )
    }

    await pool.execute(
      `
            DELETE FROM admin_active_sessions 
            WHERE user_id = ? AND session_id = ?
        `,
      [userId, sessionId]
    )

    return NextResponse.json({
      success: true,
      message: "Session removed",
    })
  } catch (error: any) {
    console.error("Error removing active session:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
