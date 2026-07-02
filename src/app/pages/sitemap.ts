import type { MetadataRoute } from "next"
import { STATIC_ROUTES } from "@/src/app/static-routes"

export const dynamic = "force-dynamic"
export const revalidate = 86400

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES.filter(
    (r) =>
      !r.url.toLowerCase().includes("/glossary") &&
      !r.url.toLowerCase().includes("/resources")
  ).map((r) => ({
    url: r.url,
    lastModified: r.lastModified ? new Date(r.lastModified) : new Date(),
    changeFrequency: "monthly" as const,
    priority: r.priority ?? 1.0,
  }))
}
