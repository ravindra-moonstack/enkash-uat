import pool from "@/src/lib/dbConnect"

export async function fetchBlogSlugs(): Promise<string[]> {
  try {
    const [rows]: any = await pool.execute(
      "SELECT slug FROM posts WHERE status = 'publish' AND post_type = 'post' ORDER BY created_at DESC"
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
