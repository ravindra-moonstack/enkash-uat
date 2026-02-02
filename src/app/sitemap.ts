import { MetadataRoute } from 'next'
import { fetchAllLetters, generateTermParams } from '@/src/utils/glossaryData'
import { STATIC_ROUTES } from './static-routes'

const BASE_URL = 'https://www.enkash.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const letters = await fetchAllLetters()
  const terms = await generateTermParams()

  const letterRoutes: MetadataRoute.Sitemap = letters.map(letter => ({
    url: `${BASE_URL}/glossary/${letter.toLowerCase()}`,
    lastModified: new Date().toISOString(),
    priority: 1.0,
  }))

  const termRoutes: MetadataRoute.Sitemap = terms.map(term => ({ 
    url: `${BASE_URL}/glossary/${term.letter}/${term.slug}`, 
    lastModified: new Date().toISOString(),
    priority: 1.0, 
  }))

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(route => ({
    url: route.url,
    lastModified: new Date().toISOString(), // Update last modified to now, or use route.lastModified if you prefer static dates
    changeFrequency: 'monthly',
    priority: route.priority || 1.0,
  }))

  return [...staticEntries, ...letterRoutes, ...termRoutes]
}
