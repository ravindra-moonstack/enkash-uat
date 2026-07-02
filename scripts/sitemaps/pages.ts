import { MetadataRoute } from 'next'
import { STATIC_ROUTES } from '../../src/app/static-routes'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Filter out any URLs that are part of glossary or resources
  const filteredRoutes = STATIC_ROUTES.filter(route => {
    const url = route.url.toLowerCase()
    return !url.includes('/glossary') && !url.includes('/resources')
  })

  const staticEntries = filteredRoutes.map(route => ({
    url: route.url,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route.priority || 1.0,
  }))

  return staticEntries
}
