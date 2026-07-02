import type { MetadataRoute } from "next"
import pool from "@/src/lib/dbConnect"

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.enkash.com"

export const dynamic = "force-dynamic"
export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/glossary`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ]

  "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((letter) => {
    entries.push({
      url:
        letter === "#"
          ? `${BASE_URL}/glossary/letter-with-numbers`
          : `${BASE_URL}/glossary/${letter.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    })
  })

  try {
    const [rows]: any = await pool.execute("SELECT slug, updated_at, created_at FROM glossary")
    rows.forEach((row: any) => {
      entries.push({
        url: `${BASE_URL}/glossary/${row.slug}`,
        lastModified: row.updated_at ?? row.created_at ?? new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      })
    })
  } catch (error) {
    console.error("Error generating glossary sitemap:", error)
  }

  return entries
}
