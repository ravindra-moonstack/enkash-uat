import { MetadataRoute } from 'next'
import { fetchAllLetters, generateTermParams } from '@/utils/glossaryData'
import { STATIC_ROUTES } from './static-routes'
import { fetchBlogSlugs, fetchBlogCategorySlugs } from '@/utils/sitemapData'

export const dynamic = 'force-dynamic'
export const revalidate = 0


const BASE_URL = 'https://www.enkash.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const letters = await fetchAllLetters()
  const terms = await generateTermParams()
  const blogSlugs = await fetchBlogSlugs()
  const categorySlugs = await fetchBlogCategorySlugs()

  // Resource landing pages
  const resourceRoutes = [
    '/resources',
    '/resources/blogs',
    '/resources/videos',
    '/resources/media-coverage'
  ].map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Dynamic Blog Posts
  const blogRoutes = blogSlugs.map(slug => ({
    url: `${BASE_URL}/resources/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic Blog Categories
  const categoryRoutes = categorySlugs.map(slug => ({
    url: `${BASE_URL}/resources/blog/category/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  const letterRoutes = letters.map(letter => ({
    url: `${BASE_URL}/glossary/${letter.toLowerCase()}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }))

  const termRoutes = terms.map(term => ({ 
    url: `${BASE_URL}/glossary/${term.slug}`, 
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 1.0, 
  }))

  const staticEntries = STATIC_ROUTES.map(route => ({
    url: route.url,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route.priority || 1.0,
  }))

  return [
    ...staticEntries, 
    ...resourceRoutes, 
    ...blogRoutes, 
    ...categoryRoutes, 
    ...letterRoutes, 
    ...termRoutes
  ]
}
