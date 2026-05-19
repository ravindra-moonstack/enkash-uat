import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"
import { recordAuditLog } from "@/src/utils/auditLogger"
import { getUniqueSlug } from "@/src/utils/slugUtils"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id
    const data = await request.json()

    if (data.status) {
      // Get old status for audit log
      const [oldRows]: any = await pool.query(
        `SELECT status FROM posts WHERE id = ?`,
        [id]
      )
      const oldStatus = oldRows[0]?.status

      await pool.query(`UPDATE posts SET status = ? WHERE id = ?`, [
        data.status,
        id,
      ])

      // Update category counts
      await pool.query(`
        UPDATE terms t 
        SET count = (
          SELECT COUNT(*) 
          FROM posts p 
          WHERE FIND_IN_SET(t.term_id, p.category) > 0 
          AND p.status = 'publish' 
          AND p.post_type = 'post'
        )
        WHERE t.taxonomy = 'category'
      `)

      // Audit Log
      await recordAuditLog(
        "posts",
        id,
        "UPDATE",
        { status: oldStatus },
        { status: data.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error updating blog status:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id
    const data = await request.json()

    // Get old data for audit log
    const [oldRows]: any = await pool.query(
      `SELECT * FROM posts WHERE id = ?`,
      [id]
    )
    const oldData = oldRows[0]

    // Ensure unique slug
    const baseSlug =
      data.slug ||
      data.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") ||
      oldData.slug
    const uniqueSlug = await getUniqueSlug("posts", baseSlug, id)

    // Ensure slug_history exists and insert old slug if changed
    if (oldData.slug && oldData.slug !== uniqueSlug) {
      try {
        await pool.execute(`
          CREATE TABLE IF NOT EXISTS slug_history (
              id INT AUTO_INCREMENT PRIMARY KEY,
              post_id INT NOT NULL,
              old_slug VARCHAR(255) NOT NULL,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              UNIQUE KEY unique_slug (post_id, old_slug)
          )
        `)
        await pool.execute(
          `INSERT IGNORE INTO slug_history (post_id, old_slug) VALUES (?, ?)`,
          [id, oldData.slug]
        )
      } catch (e) {
        console.error("Error inserting slug history", e)
      }
    }

    const query = `
      UPDATE posts SET
          title = ?, slug = ?, content = ?, excerpt = ?, status = ?, author = ?, 
          featured_image = ?, featured_left_side = ?, featured_right = ?, category_featured_blog = ?, 
          category = ?, tags = ?, updated_at = COALESCE(?, NOW())
      WHERE id = ?
    `
    await pool.query(query, [
      data.title || "",
      uniqueSlug,
      data.content || "",
      data.excerpt || "",
      data.status || "draft",
      data.author || 1,
      data.featured_image || null,
      data.featured_left_side || "no",
      data.featured_right || "no",
      data.category_featured_blog || "no",
      data.categories || "",
      data.tags || "",
      data.updated_at || null,
      id,
    ])

    // Ensure seo_robots exists
    try {
      const [metaCols]: any = await pool.query("SHOW COLUMNS FROM post_meta")
      if (!metaCols.find((c: any) => c.Field === "seo_robots")) {
        await pool.query("ALTER TABLE post_meta ADD COLUMN seo_robots VARCHAR(50) DEFAULT 'follow'")
      }
    } catch (e) {
      console.error("Error checking post_meta table", e)
    }

    const metaQuery = `
      UPDATE post_meta SET
          show_featured_image = ?, post_schema_markup = ?, 
          remove_author_details = ?, meta_title = ?, meta_description = ?, focus_keyword = ?, seo_robots = ?
      WHERE post_id = ?
    `
    await pool.query(metaQuery, [
      data.show_featured_image || "hide",
      data.post_schema_markup || "",
      data.remove_author_details ? 1 : 0,
      data.meta_title || "",
      data.meta_description || "",
      data.focus_keyword || "",
      data.seo_robots || "follow",
      id,
    ])

    // Update category counts
    await pool.query(`
      UPDATE terms t 
      SET count = (
        SELECT COUNT(*) 
        FROM posts p 
        WHERE FIND_IN_SET(t.term_id, p.category) > 0 
        AND p.status = 'publish' 
        AND p.post_type = 'post'
      )
      WHERE t.taxonomy = 'category'
    `)

    // Audit Log
    await recordAuditLog("posts", id, "UPDATE", oldData, data)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error updating blog:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id
    const [posts]: any = await pool.query(
      `
      SELECT p.*, a.image_url as featured_image_url, a.attachment_image_alt as featured_image_alt
      FROM posts p
      LEFT JOIN attachments a ON p.featured_image = a.id
      WHERE p.id = ?`,
      [id]
    )
    if (posts.length === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    const [meta]: any = await pool.query(
      `SELECT * FROM post_meta WHERE post_id = ?`,
      [id]
    )

    const [audit]: any = await pool.query(
      `SELECT u.display_name as last_edited_by, a.updated_at as audit_updated_at
       FROM audit_logs a 
       LEFT JOIN users u ON a.updated_by = u.ID 
       WHERE a.table_name = 'posts' AND a.row_id = ? 
       ORDER BY a.id DESC LIMIT 1`,
      [id]
    )

    return NextResponse.json({
      post: {
        ...posts[0],
        last_edited_by: audit.length > 0 ? audit[0].last_edited_by : "System",
      },
      meta: meta[0] || {},
    })
  } catch (error: any) {
    console.error("Error fetching blog:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
