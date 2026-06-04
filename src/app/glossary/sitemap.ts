import { MetadataRoute } from "next"
import pool from "@/src/lib/dbConnect"

const BASE_URL = "https://www.enkash.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // 1. Add main glossary page
  sitemapEntries.push({
    url: `${BASE_URL}/glossary`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  })

  // 2. Add letter pages (#, A-Z)
  const letters = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  letters.forEach((letter) => {
    let url = `${BASE_URL}/glossary/${letter.toLowerCase()}`
    if (letter === "#") {
      url = `${BASE_URL}/glossary/letter-with-numbers`
    }

    sitemapEntries.push({
      url: url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    })
  })

  try {
    const [rows]: any = await pool.execute(
      "SELECT slug, updated_at, created_at FROM glossary"
    )

    rows.forEach((row: any) => {
      const lastMod =
        row.updated_at ||
        row.created_at ||
        row.update_at ||
        row.create_at ||
        new Date()

      sitemapEntries.push({
        url: `${BASE_URL}/glossary/${row.slug}`,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.7,
      })
    })
  } catch (error) {
    console.error("Error generating glossary sitemap:", error)
  }

  return sitemapEntries
}
