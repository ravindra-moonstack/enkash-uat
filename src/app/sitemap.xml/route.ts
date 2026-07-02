const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.enkash.com"

export const dynamic = "force-dynamic"
export const revalidate = 86400

export async function GET() {
  const lastmod = new Date().toISOString()

  const xml = /* XML */ `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${BASE_URL}/pages/sitemap.xml</loc>
        <lastmod>${lastmod}</lastmod>
      </sitemap>
      <sitemap>
        <loc>${BASE_URL}/resources/sitemap.xml</loc>
        <lastmod>${lastmod}</lastmod>
      </sitemap>
      <sitemap>
        <loc>${BASE_URL}/glossary/sitemap.xml</loc>
        <lastmod>${lastmod}</lastmod>
      </sitemap>
    </sitemapindex>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": `public, max-age=86400, stale-while-revalidate=3600`,
    },
  })
}
