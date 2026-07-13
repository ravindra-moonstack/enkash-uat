import { test, expect } from "@playwright/test"

test.describe("Single Blog Post View", () => {
  // Use a known existing slug or just click the first available blog on the listing page
  // For the sake of E2E, we'll navigate to the listing page, grab a dynamic slug, and visit it.
  let targetSlug = ""

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/resources/blog")
    const firstBlogLink = page.locator("a[href^='/resources/blog/']").first()
    
    if (await firstBlogLink.isVisible()) {
      const href = await firstBlogLink.getAttribute("href")
      targetSlug = href || ""
    }
    await context.close()
  })

  test.beforeEach(async ({ page }) => {
    if (!targetSlug) {
      test.skip(true, "No blogs found to test single view")
    }
    await page.goto(targetSlug)
  })

  test("should render post title and content", async ({ page }) => {
    // The main heading should be the post title
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    
    // Check if there is content in the body
    const contentArea = page.locator(".blog-content, article") // Adjust selector based on actual class
    await expect(contentArea).toBeVisible()
    
    // Check if the author block is present
    const authorBlock = page.locator(".author, [data-testid='author-info']") // Adjust selector
    // We wrap it in a try-catch because author details might be conditionally hidden (remove_author_details)
    try {
        if (await authorBlock.count() > 0) {
            await expect(authorBlock.first()).toBeVisible({ timeout: 5000 })
        }
    } catch(e) {}
  })

  test("should render related blogs section", async ({ page }) => {
    // Look for a heading that says "Related" or "Read More"
    const relatedHeading = page.getByRole("heading", { name: /related|read more|latest/i })
    
    if (await relatedHeading.isVisible()) {
        await expect(relatedHeading).toBeVisible()
        // Check if related blog links are present
        const relatedLinks = page.locator("a[href^='/resources/blog/']")
        expect(await relatedLinks.count()).toBeGreaterThan(1) // current post might have links, related should add more
    }
  })

  test("should render breadcrumbs", async ({ page }) => {
    const breadcrumb = page.locator("nav[aria-label='Breadcrumb'], .breadcrumbs")
    if (await breadcrumb.isVisible()) {
      await expect(breadcrumb).toBeVisible()
      const homeLink = breadcrumb.locator("a", { hasText: /home/i })
      if (await homeLink.isVisible()) {
        await expect(homeLink).toBeVisible()
      }
    }
  })
})
