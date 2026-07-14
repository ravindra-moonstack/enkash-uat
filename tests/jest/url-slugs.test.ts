import { STATIC_ROUTES } from "../../src/app/static-routes"
import resourcesSitemap from "../../src/app/resources/sitemap"
import pagesSitemap from "../../src/app/pages/sitemap"
import glossarySitemap from "../../src/app/glossary/sitemap"
import pool from "../../src/lib/dbConnect"

describe("URL Slug Validation", () => {
  afterAll(async () => {
    await pool.end()
  })
  it("should validate that all static page slugs are in lowercase", () => {
    const uppercaseStaticRoutes = STATIC_ROUTES.filter((route) => {
      const url = new URL(route.url)
      // Check if pathname contains uppercase letters
      return url.pathname !== url.pathname.toLowerCase()
    })

    if (uppercaseStaticRoutes.length > 0) {
      const urls = uppercaseStaticRoutes.map((r) => r.url).join("\n")
      throw new Error(
        `Found static routes with uppercase characters. Please fix the following URLs:\n${urls}`
      )
    }

    expect(uppercaseStaticRoutes).toHaveLength(0)
  })

  it("should validate that all dynamic resources page slugs are in lowercase", async () => {
    const sitemap = await resourcesSitemap()
    const uppercaseRoutes = sitemap.filter((route) => {
      const url = new URL(route.url)
      return url.pathname !== url.pathname.toLowerCase()
    })

    if (uppercaseRoutes.length > 0) {
      const urls = uppercaseRoutes.map((r) => r.url).join("\n")
      throw new Error(
        `Found dynamic resources routes with uppercase characters. Please fix the following URLs:\n${urls}`
      )
    }

    expect(uppercaseRoutes).toHaveLength(0)
  })

  it("should validate that all dynamic pages slugs are in lowercase", () => {
    const sitemap = pagesSitemap()
    const uppercaseRoutes = sitemap.filter((route) => {
      const url = new URL(route.url)
      return url.pathname !== url.pathname.toLowerCase()
    })

    if (uppercaseRoutes.length > 0) {
      const urls = uppercaseRoutes.map((r) => r.url).join("\n")
      throw new Error(
        `Found dynamic pages routes with uppercase characters. Please fix the following URLs:\n${urls}`
      )
    }

    expect(uppercaseRoutes).toHaveLength(0)
  })

  it("should validate that all dynamic glossary page slugs are in lowercase", async () => {
    const sitemap = await glossarySitemap()
    const uppercaseRoutes = sitemap.filter((route) => {
      const url = new URL(route.url)
      return url.pathname !== url.pathname.toLowerCase()
    })

    if (uppercaseRoutes.length > 0) {
      const urls = uppercaseRoutes.map((r) => r.url).join("\n")
      throw new Error(
        `Found dynamic glossary routes with uppercase characters. Please fix the following URLs:\n${urls}`
      )
    }

    expect(uppercaseRoutes).toHaveLength(0)
  })
})
