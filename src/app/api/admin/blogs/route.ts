import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"
import { recordAuditLog } from "@/src/utils/auditLogger"
import { getUniqueSlug } from "@/src/utils/slugUtils"
import { verifyToken } from "@/src/utils/auth"
let postMetaInitialized = false
const ensurePostMetaColumns = async () => {
  if (postMetaInitialized) return
  try {
    const [metaCols]: any = await pool.query("SHOW COLUMNS FROM post_meta")
    if (!metaCols.find((c: any) => c.Field === "seo_robots")) {
      await pool.query(
        "ALTER TABLE post_meta ADD COLUMN seo_robots VARCHAR(50) DEFAULT 'follow'"
      )
    }
    postMetaInitialized = true
  } catch (e) {
    console.error("Error checking post_meta table", e)
  }
}

export async function GET(request: Request) {
  try {
    const user: any = await verifyToken()
    const userId = user?.id || 0

    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status") || "all"
    const search = searchParams.get("search") || ""
    const date = searchParams.get("date") || "all"
    const category = searchParams.get("category") || "all"
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "40")
    const sortField = searchParams.get("sortField") || "date"
    const sortOrder = searchParams.get("sortOrder") === "asc" ? "ASC" : "DESC"
    const offset = (page - 1) * limit

    let whereClause = `WHERE p.post_type = 'post'`
    const queryParams: any[] = []

    if (status !== "all") {
      whereClause += ` AND p.status = ?`
      queryParams.push(status)
    } else {
      whereClause += ` AND p.status != 'trash'`
    }

    if (search) {
      whereClause += ` AND (p.title LIKE ? OR p.content LIKE ?)`
      queryParams.push(`%${search}%`, `%${search}%`)
    }

    if (date !== "all") {
      whereClause += ` AND DATE_FORMAT(p.updated_at, '%Y-%m') = ?`
      queryParams.push(date)
    }

    if (category !== "all") {
      const [termRows]: any = await pool.query(
        `SELECT MIN(term_id) as term_id FROM terms WHERE slug = ? AND taxonomy = 'category'`,
        [category]
      )
      if (termRows.length > 0 && termRows[0].term_id) {
        whereClause += ` AND FIND_IN_SET(?, p.category) > 0`
        queryParams.push(termRows[0].term_id.toString())
      } else {
        whereClause += ` AND 1 = 0`
      }
    }

    // Fetch counts
    const [countsData]: any = await pool.query(`
            SELECT 
                COUNT(*) as all_count,
                SUM(CASE WHEN status = 'publish' THEN 1 ELSE 0 END) as published_count,
                SUM(CASE WHEN status = 'draft' THEN 1 ELSE 0 END) as draft_count,
                SUM(CASE WHEN status = 'trash' THEN 1 ELSE 0 END) as trash_count
            FROM posts 
            WHERE post_type = 'post'
        `)

    let orderBy = "p.updated_at"
    if (sortField === "title") {
      orderBy = "p.title"
    }

    // Fetch paginated posts
    const query = `
            SELECT p.*, u.display_name as author_name,
                   GROUP_CONCAT(DISTINCT te.name SEPARATOR ', ') as categories,
                   (SELECT GROUP_CONCAT(user_name SEPARATOR ', ') FROM posts_active_editors pae WHERE pae.module = 'blogs' AND pae.post_id = p.id AND pae.last_active > NOW() - INTERVAL 10 SECOND) as locked_by
            FROM posts p
            LEFT JOIN users u ON p.author = u.ID
            LEFT JOIN terms te ON FIND_IN_SET(te.term_id, p.category) > 0 AND te.taxonomy = 'category'
            ${whereClause}
            GROUP BY p.id
            ORDER BY ${orderBy} ${sortOrder}
            LIMIT ? OFFSET ?
        `

    const [posts]: any = await pool.query(query, [
      ...queryParams,
      limit,
      offset,
    ])

    // Fetch total items for pagination
    const [totalData]: any = await pool.query(
      `SELECT COUNT(DISTINCT p.id) as total FROM posts p ${whereClause}`,
      queryParams
    )

    return NextResponse.json({
      posts,
      totalItems: totalData[0].total,
      counts: {
        all: countsData[0].all_count - countsData[0].trash_count,
        published: countsData[0].published_count || 0,
        draft: countsData[0].draft_count || 0,
        trash: countsData[0].trash_count || 0,
      },
    })
  } catch (error: any) {
    console.error("Error fetching blogs:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Ensure unique slug
    const baseSlug =
      data.slug ||
      data.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") ||
      "untitled"
    const uniqueSlug = await getUniqueSlug("posts", baseSlug)

    // Basic insert for now
    const query = `
      INSERT INTO posts (
          title, slug, content, excerpt, status, author, 
          featured_image, featured_left_side, featured_right, category_featured_blog, 
          category, tags, post_type, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'post', NOW(), ?)
    `
    const [result]: any = await pool.execute(query, [
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
      data.updated_at || null, // pass null to let mysql default to current timestamp if omitted
    ])

    const postId = result.insertId

    await ensurePostMetaColumns()

    // Insert meta
    const metaQuery = `
            INSERT INTO post_meta (
                post_id, show_featured_image, post_schema_markup, 
                remove_author_details, meta_title, meta_description, focus_keyword, seo_robots
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `

    const [metaResult]: any = await pool.execute(metaQuery, [
      postId,
      data.show_featured_image || "hide",
      data.post_schema_markup || "",
      data.remove_author_details ? 1 : 0,
      data.meta_title || "",
      data.meta_description || "",
      data.focus_keyword || "",
      data.seo_robots || "follow",
    ])

    const metaId = metaResult.insertId

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
    await recordAuditLog("posts", postId, "CREATE", null, data)

    return NextResponse.json({ success: true, id: postId })
  } catch (error: any) {
    console.error("Error creating blog:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
