const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.enkash.com"

export const dynamic = "force-dynamic"

export async function GET() {
  const lastmod = new Date().toISOString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
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
      "Content-Type": "application/xml",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  })
}
