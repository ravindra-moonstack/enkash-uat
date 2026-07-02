import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());
import fs from 'fs';
import path from 'path';

// Import sitemap generators dynamically later

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.enkash.com";

function toUrlSet(entries: any[]) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const entry of entries) {
    xml += `  <url>\n`;
    xml += `    <loc>${entry.url}</loc>\n`;
    if (entry.lastModified) {
      const dateStr = entry.lastModified instanceof Date ? entry.lastModified.toISOString() : entry.lastModified;
      xml += `    <lastmod>${dateStr}</lastmod>\n`;
    }
    if (entry.changeFrequency) xml += `    <changefreq>${entry.changeFrequency}</changefreq>\n`;
    if (entry.priority) xml += `    <priority>${entry.priority}</priority>\n`;
    xml += `  </url>\n`;
  }
  xml += `</urlset>`;
  return xml;
}

async function generate() {
  const publicDir = path.join(process.cwd(), 'public');
  
  // Ensure directories exist
  fs.mkdirSync(path.join(publicDir, 'pages'), { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'resources'), { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'glossary'), { recursive: true });

  // Generate individual sitemaps
  console.log('Generating pages sitemap...');
  const { default: pagesSitemap } = await import('./sitemaps/pages');
  const pagesEntries = await pagesSitemap();
  fs.writeFileSync(path.join(publicDir, 'pages', 'sitemap.xml'), toUrlSet(pagesEntries));

  console.log('Generating resources sitemap...');
  const { default: resourcesSitemap } = await import('./sitemaps/resources');
  const resourcesEntries = await resourcesSitemap();
  fs.writeFileSync(path.join(publicDir, 'resources', 'sitemap.xml'), toUrlSet(resourcesEntries));

  console.log('Generating glossary sitemap...');
  const { default: glossarySitemap } = await import('./sitemaps/glossary');
  const glossaryEntries = await glossarySitemap();
  fs.writeFileSync(path.join(publicDir, 'glossary', 'sitemap.xml'), toUrlSet(glossaryEntries));

  console.log('Generating sitemap index...');
  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/pages/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/resources/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/glossary/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), indexXml);
  console.log('Sitemaps generated successfully in public/');
}

generate().then(() => {
  process.exit(0);
}).catch(e => {
  console.error('Failed to generate sitemaps:', e);
  process.exit(1);
});
