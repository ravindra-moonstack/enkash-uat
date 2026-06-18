import pool from "@/src/lib/dbConnect"

export async function fetchBlogSlugs(): Promise<string[]> {
  try {
    const [rows]: any = await pool.execute(
      "SELECT slug FROM posts WHERE status = 'publish' AND post_type = 'post' AND (scheduled_publish_date IS NULL OR scheduled_publish_date <= NOW()) ORDER BY created_at DESC"
    )
    return rows.map((row: any) => row.slug as string)
  } catch (error) {
    console.error("Error fetching blog slugs for sitemap:", error)
    return []
  }
}

export async function fetchBlogCategorySlugs(): Promise<string[]> {
  try {
    // Fetch categories that are actually used in blogs or explicitly listed
    const [rows]: any = await pool.execute(
      "SELECT DISTINCT slug FROM terms WHERE taxonomy = 'category' ORDER BY name ASC"
    )
    return rows.map((row: any) => row.slug as string)
  } catch (error) {
    console.error("Error fetching blog category slugs for sitemap:", error)
    return []
  }
}

export async function fetchBlogAuthorSlugs(): Promise<string[]> {
  try {
    const [rows]: any = await pool.execute(
      "SELECT DISTINCT REPLACE(LOWER(u.user_login), ' ', '-') AS slug FROM users u INNER JOIN posts p ON p.author = u.id WHERE p.status = 'publish' AND p.post_type = 'post' AND (p.scheduled_publish_date IS NULL OR p.scheduled_publish_date <= NOW())"
    )
    return rows.map((row: any) => row.slug as string)
  } catch (error) {
    console.error("Error fetching blog author slugs for sitemap:", error)
    return []
  }
}
