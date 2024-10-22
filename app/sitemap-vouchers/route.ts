// app/sitemap-vouchers/route.ts
// Generates the sitemap dynamically when you visit /sitemap-vouchers
import { nameToUrl } from "@/common/utils/stringUtils";
import VoucherData from "../bolt/data/voucher-data";
import { MetadataRoute } from "next";

export async function GET() {
  // Convert voucher object to array of URLs
  const voucherUrls = Object.values(VoucherData).map((voucher) => ({
    url: encodeURI(`https://enkash.com/voucher/${nameToUrl(voucher.name)}`), // Use voucherId instead of name
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  // Return XML with proper formatting
  return new Response(generateSitemapXml(voucherUrls), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function generateSitemapXml(
  urls: Array<{
    url: string;
    lastModified: string;
    changeFrequency: string;
    priority: number;
  }>
) {
  // Ensure proper XML formatting with indentation
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}
