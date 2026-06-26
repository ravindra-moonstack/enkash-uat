import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET(request: NextRequest) {
  const host = request.headers.get("host") || "www.enkash.com"
  
  // Detect protocol based on host
  const isLocal = host.includes("localhost") || host.includes("127.0.0.1")
  const protocol = isLocal ? "http:" : "https:"

  const sitemaps = [
    `${protocol}//${host}/pages/sitemap.xml`,
    `${protocol}//${host}/resources/sitemap.xml`,
    `${protocol}//${host}/glossary/sitemap.xml`,
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps
    .map(
      (url) => `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`
    )
    .join("\n")}
</sitemapindex>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
