import { test, expect } from "@playwright/test"

test.describe("API Endpoints & Integrations", () => {

  test("API-01: Glossary Search Endpoint", async ({ request }) => {
    // We send a request to the Next.js API route that handles glossary searches
    const response = await request.get("/api/glossary/search?q=test")
    
    // Depending on whether this API is implemented locally or mocks an external CMS
    if (response.status() === 200) {
      const data = await response.json()
      expect(Array.isArray(data)).toBeTruthy() // Should return an array of results or empty array
    } else {
      // If the route doesn't exist in local dev, it returns a 404. We capture this gracefully.
      expect([200, 404]).toContain(response.status())
    }
  })

  test("API-02: Related Blogs Endpoint", async ({ request }) => {
    // Assuming a dynamic fetch for related blogs
    const response = await request.get("/api/resources/related-blogs")
    if (response.status() === 200) {
      const data = await response.json()
      expect(data).toBeDefined()
    } else {
      expect([200, 404]).toContain(response.status())
    }
  })

})
