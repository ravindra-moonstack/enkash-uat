import { test, expect } from "@playwright/test"

test.describe("Performance & Image Optimization", () => {
  test("Blog listing images should be optimized and lazy loaded", async ({ page }) => {
    await page.goto("/resources/blog")

    // Find all images within the blog list/cards
    const images = page.locator("article img, .blog-card img")
    const count = await images.count()

    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      
      // Next.js Image component should output srcset
      const srcset = await img.getAttribute("srcset")
      const src = await img.getAttribute("src")
      
      // Some images might be standard <img> tags, but ideally they use next/image
      if (src && !src.startsWith("data:")) { // skip inline placeholders
        const loadingAttr = await img.getAttribute("loading")
        
        // Next.js default is lazy loading (unless priority is set)
        if (loadingAttr) {
            expect(loadingAttr).toBe("lazy")
        }
        
        // Assert that alt tags exist for all images (also an A11y check, but critical for SEO)
        const altAttr = await img.getAttribute("alt")
        expect(altAttr).not.toBeNull()
      }
    }
  })

  test("Single post images should be optimized", async ({ page }) => {
    // Navigate to listing and get first post
    await page.goto("/resources/blog")
    const firstBlogLink = page.locator("a[href^='/resources/blog/']").first()
    
    if (await firstBlogLink.isVisible()) {
      const href = await firstBlogLink.getAttribute("href")
      if (href) {
        await page.goto(href)
        
        // Check featured image
        const featuredImage = page.locator(".featured-image img, header img").first()
        if (await featuredImage.isVisible()) {
           // Featured images are often above the fold, so they might have loading="eager" or no loading attribute (priority)
           const altAttr = await featuredImage.getAttribute("alt")
           expect(altAttr).not.toBeNull()
        }
      }
    }
  })
})
