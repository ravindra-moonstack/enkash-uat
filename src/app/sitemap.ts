import type { MetadataRoute } from "next"

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.enkash.com"

export const dynamic = "force-dynamic"
export const revalidate = 86400

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/pages/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/resources/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/glossary/sitemap.xml`,
      lastModified: new Date(),
    },
  ]
}
