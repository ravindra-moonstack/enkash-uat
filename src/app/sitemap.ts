import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.enkash.com"

  return [
    {
      url: `${baseUrl}/pages/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resources/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/glossary/sitemap.xml`,
      lastModified: new Date(),
    },
  ]
}
