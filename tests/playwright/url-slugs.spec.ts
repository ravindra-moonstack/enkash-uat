import { test, expect } from "@playwright/test"

test.describe("URL Slug Validation (E2E)", () => {
  const sitemaps = [
    "/pages/sitemap.xml",
    "/resources/sitemap.xml",
    "/glossary/sitemap.xml",
  ]

  for (const sitemapUrl of sitemaps) {
    test(`should validate all URLs in ${sitemapUrl} are lowercase`, async ({
      request,
    }) => {
      const response = await request.get(sitemapUrl)

      // Ensure the sitemap endpoint is actually reachable
      expect(response.ok()).toBeTruthy()

      const xml = await response.text()

      // Extract all <loc> tags from the XML sitemap
      const urlMatches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
      const urls = urlMatches.map((match) => match[1])

      const uppercaseRoutes = urls.filter((urlString) => {
        try {
          const url = new URL(urlString)
          return url.pathname !== url.pathname.toLowerCase()
        } catch (e) {
          return false // Ignore invalid URLs if any
        }
      })

      if (uppercaseRoutes.length > 0) {
        throw new Error(
          `Found uppercase routes in ${sitemapUrl}:\n${uppercaseRoutes.join(
            "\n"
          )}`
        )
      }

      expect(uppercaseRoutes).toHaveLength(0)
    })
  }
})
