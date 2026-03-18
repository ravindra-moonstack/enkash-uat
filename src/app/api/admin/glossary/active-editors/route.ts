import { NextResponse } from "next/server"
import pool from "@/src/lib/dbConnect"

// Ensure the table exists
const ensureTableExists = async () => {
  try {
    await pool.execute(`
            CREATE TABLE IF NOT EXISTS glossary_active_editors (
                id INT AUTO_INCREMENT PRIMARY KEY,
                glossary_id INT NOT NULL,
                editor_id VARCHAR(255) NOT NULL,
                last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE KEY unique_editor (glossary_id, editor_id)
            )
        `)
  } catch (error) {
    console.error("Error ensuring glossary_active_editors table exists:", error)
  }
}

// Clean up inactive editors (older than 30 seconds)
const cleanupInactiveEditors = async () => {
  try {
    await pool.execute(`
            DELETE FROM glossary_active_editors 
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
    const { glossaryId, editorId } = body

    if (!glossaryId || !editorId) {
      return NextResponse.json(
        { success: false, message: "Glossary ID and Editor ID are required" },
        { status: 400 }
      )
    }

    // Register current editor
    await pool.execute(
      `
            INSERT INTO glossary_active_editors (glossary_id, editor_id) 
            VALUES (?, ?) 
            ON DUPLICATE KEY UPDATE last_active = NOW()
        `,
      [glossaryId, editorId]
    )

    // Get other active editors
    const [rows]: any = await pool.execute(
      `
            SELECT editor_id 
            FROM glossary_active_editors 
            WHERE glossary_id = ? AND editor_id != ?
        `,
      [glossaryId, editorId]
    )

    return NextResponse.json({
      success: true,
      activeEditors: rows.map((r: any) => r.editor_id),
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
    const glossaryId = searchParams.get("glossaryId")
    const editorId = searchParams.get("editorId")

    if (!glossaryId || !editorId) {
      return NextResponse.json(
        { success: false, message: "Glossary ID and Editor ID are required" },
        { status: 400 }
      )
    }

    await pool.execute(
      `
            DELETE FROM glossary_active_editors 
            WHERE glossary_id = ? AND editor_id = ?
        `,
      [glossaryId, editorId]
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
