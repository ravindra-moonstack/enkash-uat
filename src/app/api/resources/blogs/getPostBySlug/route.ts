import pool from "@/src/lib/dbConnect"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get("slug")

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
      GROUP_CONCAT(DISTINCT te.name) AS category_names,
      GROUP_CONCAT(DISTINCT te.slug) AS category_slugs
    FROM posts AS p
    LEFT JOIN post_meta AS pm
      ON p.id = pm.post_id
    LEFT JOIN attachments AS att
      ON p.featured_image = att.id
    LEFT JOIN terms AS te
      ON FIND_IN_SET(te.term_id, p.category)
    WHERE p.post_type = 'post'
      AND p.status = 'publish'
      AND p.slug = ?
    GROUP BY p.id
    ORDER BY p.updated_at DESC
    LIMIT 1
  `

    const [data]: any = await pool.query(postQuery, [slug])

    if (!data || data.length === 0) {
      return NextResponse.json({ posts: [], relatedBlogs: [] }, { status: 404 })
    }

    const category = data[0].category?.split(",")[0]
    const relatedQuery = `
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
    LEFT JOIN attachments AS att
      ON p.featured_image = att.id
    LEFT JOIN terms AS te
      ON FIND_IN_SET(te.term_id, p.category)
    WHERE p.post_type = 'post'
      AND p.status = 'publish'
      AND ( ? IS NULL OR ? = 0 OR p.id != ? )
      AND FIND_IN_SET(?, p.category)
    GROUP BY p.id
    ORDER BY p.created_at DESC
    LIMIT 4
  `

    const [relatedBlogs] = await pool.query(relatedQuery, [
      data[0].id,
      data[0].id,
      data[0].id,
      category,
    ])

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
