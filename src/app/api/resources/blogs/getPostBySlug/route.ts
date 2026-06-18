import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get("slug")
    const cookieStore = await cookies()
    const hasAdminToken = cookieStore.has("token")
    const statusCondition = hasAdminToken
      ? "p.status IN ('publish', 'draft')"
      : "p.status = 'publish' AND (p.scheduled_publish_date IS NULL OR p.scheduled_publish_date <= NOW())"

    const postQuery = `
    SELECT 
      p.*,
      att.image_url AS featured_image_url,
      att.attachment_image_alt AS image_alt,
      pm.show_featured_image,
      pm.remove_author_details,
      pm.post_schema_markup,
      pm.focus_keyword,
      pm.meta_title,
      pm.meta_description,
      u.first_name,
      u.last_name,
      u.user_login,
      u.profile_image_url,
      u.description AS user_description,
      GROUP_CONCAT(DISTINCT te.name) AS category_names,
      GROUP_CONCAT(DISTINCT te.slug) AS category_slugs
    FROM posts AS p
    LEFT JOIN post_meta AS pm
      ON p.id = pm.post_id
    LEFT JOIN users AS u
      ON p.author = u.id
    LEFT JOIN attachments AS att
      ON p.featured_image = att.id
    LEFT JOIN terms AS te
      ON FIND_IN_SET(te.term_id, p.category)
    WHERE p.post_type = 'post'
      AND ${statusCondition}
      AND p.slug = ?
    GROUP BY p.id
    ORDER BY p.updated_at DESC
    LIMIT 1
  `

    const [data]: any = await pool.query(postQuery, [slug])

    if (!data || data.length === 0) {
      // Check slug_history
      try {
        const [history]: any = await pool.query(
          `SELECT p.slug FROM slug_history sh 
           JOIN posts p ON sh.post_id = p.id 
           WHERE sh.old_slug = ? AND ${statusCondition} LIMIT 1`,
          [slug]
        )
        if (history && history.length > 0) {
          return NextResponse.json({ redirect: history[0].slug })
        }
      } catch (e) {
        console.error("Error checking slug_history:", e)
      }
      return NextResponse.json({ posts: [], relatedBlogs: [] }, { status: 404 })
    }

    const category = data[0].category?.split(",")[0]
    const tags = data[0].tags?.split(",").filter((t: string) => t) || []

    let relatedBlogs: any[] = []

    if (tags.length > 0) {
      const tagConditions = tags
        .map(() => `FIND_IN_SET(?, p.tags)`)
        .join(" OR ")
      const relatedQueryByTags = `
        SELECT 
          p.id,
          p.title,
          p.slug,
          p.created_at,
          att.image_url AS featured_image_url,
          att.attachment_image_alt AS image_alt,
          GROUP_CONCAT(DISTINCT te.name) AS category_names,
          GROUP_CONCAT(DISTINCT te.slug) AS category_slugs
        FROM posts AS p
        LEFT JOIN attachments AS att ON p.featured_image = att.id
        LEFT JOIN terms AS te ON FIND_IN_SET(te.term_id, p.category)
        WHERE p.post_type = 'post'
          AND ${statusCondition}
          AND p.id != ?
          AND (${tagConditions})
        GROUP BY p.id
        ORDER BY p.created_at DESC
        LIMIT 4
      `
      const [tagRelated]: any = await pool.query(relatedQueryByTags, [
        data[0].id,
        ...tags,
      ])
      relatedBlogs = tagRelated
    }

    if (relatedBlogs.length < 4 && category) {
      const remaining = 4 - relatedBlogs.length
      const excludeIds = [data[0].id, ...relatedBlogs.map((r: any) => r.id)]
      const placeholders = excludeIds.map(() => "?").join(",")

      const relatedQueryByCategories = `
        SELECT 
          p.id,
          p.title,
          p.slug,
          p.created_at,
          att.image_url AS featured_image_url,
          att.attachment_image_alt AS image_alt,
          GROUP_CONCAT(DISTINCT te.name) AS category_names,
          GROUP_CONCAT(DISTINCT te.slug) AS category_slugs
        FROM posts AS p
        LEFT JOIN attachments AS att ON p.featured_image = att.id
        LEFT JOIN terms AS te ON FIND_IN_SET(te.term_id, p.category)
        WHERE p.post_type = 'post'
          AND ${statusCondition}
          AND p.id NOT IN (${placeholders})
          AND FIND_IN_SET(?, p.category)
        GROUP BY p.id
        ORDER BY p.created_at DESC
        LIMIT ${remaining}
      `
      const [categoryRelated]: any = await pool.query(
        relatedQueryByCategories,
        [...excludeIds, category]
      )
      relatedBlogs = [...relatedBlogs, ...categoryRelated]
    }

    return NextResponse.json(
      { posts: data, relatedBlogs: relatedBlogs },
      {
        headers: {
          "Cache-Control": "s-maxage=60, stale-while-revalidate=120",
        },
      }
    )
  } catch (error) {
    console.error("API Error:", error)

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    )
  }
}
