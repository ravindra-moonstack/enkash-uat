import type { MetadataRoute } from "next"
import { STATIC_ROUTES } from "@/src/app/static-routes"
import {
  fetchBlogSlugs,
  fetchBlogCategorySlugs,
  fetchBlogAuthorSlugs,
} from "@/src/utils/sitemapData"

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.enkash.com"

export const dynamic = "force-dynamic"
export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogSlugs, categorySlugs, authorSlugs] = await Promise.all([
    fetchBlogSlugs(),
    fetchBlogCategorySlugs(),
    fetchBlogAuthorSlugs(),
  ])

  const resourceStaticEntries = STATIC_ROUTES.filter((r) =>
    r.url.toLowerCase().includes("/resources")
  ).map((r) => ({
    url: r.url,
    lastModified: r.lastModified ? new Date(r.lastModified) : new Date(),
    changeFrequency: "monthly" as const,
    priority: r.priority ?? 0.8,
  }))

  const seenUrls = new Set(resourceStaticEntries.map((e) => e.url))
  const extraLandings: MetadataRoute.Sitemap = []
  ;[
    "/resources",
    "/resources/blogs",
    "/resources/videos",
    "/resources/media-coverage",
  ].forEach((path) => {
    const url = `${BASE_URL}${path}`
    if (!seenUrls.has(url)) {
      seenUrls.add(url)
      extraLandings.push({
        url,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })
    }
  })

  return [
    ...resourceStaticEntries,
    ...extraLandings,
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/resources/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...categorySlugs.map((slug) => ({
      url: `${BASE_URL}/resources/blog/category/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...authorSlugs.map((slug) => ({
      url: `${BASE_URL}/resources/blog/author/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  ]
}
