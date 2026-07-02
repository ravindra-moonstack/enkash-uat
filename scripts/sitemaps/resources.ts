import { MetadataRoute } from 'next'
import { STATIC_ROUTES } from '../../src/app/static-routes'
import { fetchBlogSlugs, fetchBlogCategorySlugs, fetchBlogAuthorSlugs } from '@/utils/sitemapData'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const BASE_URL = 'https://www.enkash.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await fetchBlogSlugs()
  const categorySlugs = await fetchBlogCategorySlugs()
  const authorSlugs = await fetchBlogAuthorSlugs()

  // 1. Static pages that belong to resources (anything containing /resources)
  const resourceStaticEntries = STATIC_ROUTES.filter(route => {
    return route.url.includes('/resources')
  }).map(route => ({
    url: route.url,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route.priority || 0.8,
  }))

  // 2. Resource landing pages (ensure they are present)
  const resourceLandings = [
    '/resources',
    '/resources/blogs',
    '/resources/videos',
    '/resources/media-coverage'
  ].map(route => `${BASE_URL}${route}`)

  // Create a Set to avoid duplicates
  const seenUrls = new Set(resourceStaticEntries.map(e => e.url))
  const resourceRoutes: MetadataRoute.Sitemap = []

  resourceLandings.forEach(url => {
    if (!seenUrls.has(url)) {
      seenUrls.add(url)
      resourceRoutes.push({
        url,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    }
  })

  // 3. Dynamic Blog Posts
  const blogRoutes = blogSlugs.map(slug => ({
    url: `${BASE_URL}/resources/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // 4. Dynamic Blog Categories
  const categoryRoutes = categorySlugs.map(slug => ({
    url: `${BASE_URL}/resources/blog/category/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // 5. Dynamic Blog Authors
  const authorRoutes = authorSlugs.map(slug => ({
    url: `${BASE_URL}/resources/blog/author/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [
    ...resourceStaticEntries,
    ...resourceRoutes,
    ...blogRoutes,
    ...categoryRoutes,
    ...authorRoutes
  ]
}
