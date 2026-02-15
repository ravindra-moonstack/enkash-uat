import { MetadataRoute } from 'next'
import { fetchAllLetters, generateTermParams } from '@/utils/glossaryData'
import { STATIC_ROUTES } from './static-routes'

const BASE_URL = 'https://www.enkash.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const letters = await fetchAllLetters()
  const terms = await generateTermParams()

  const letterRoutes = letters.map(letter => ({
    url: `${BASE_URL}/glossary/${letter.toLowerCase()}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }))

  const termRoutes = terms.map(term => ({ 
    url: `${BASE_URL}/glossary/${term.letter}/${term.slug}`, 
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

  return [...staticEntries, ...letterRoutes, ...termRoutes]
}
