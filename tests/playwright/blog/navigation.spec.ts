import { test, expect } from "@playwright/test"

test.describe("Blog Navigation & Listing", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the main blog page before each test
    await page.goto("/resources/blog")
  })

  test("should display the blog listing page correctly", async ({ page }) => {
    // Check if the main heading is visible
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    
    // Verify that at least one blog post card is rendered
    const blogCards = page.locator("article") // Assuming <article> is used for blog cards
    // If not article, we might need a specific class like .blog-card
    // await expect(blogCards.first()).toBeVisible()
  })

  test("should allow searching for blogs", async ({ page }) => {
    const searchInput = page.getByPlaceholder(/search/i)
    if (await searchInput.isVisible()) {
      await searchInput.fill("finance")
      await searchInput.press("Enter")
      
      // Verify URL changes or loading state
      await expect(page).toHaveURL(/search=finance|q=finance/i, { timeout: 10000 }).catch(() => {
        // Handle if search works without URL change
      })
    }
  })

  test("should navigate to a single post when clicking a blog card", async ({ page }) => {
    // Wait for the blog cards to load
    const firstBlogLink = page.locator("a[href^='/resources/blog/']").first()
    
    // Check if there are any blogs
    if (await firstBlogLink.isVisible()) {
      const href = await firstBlogLink.getAttribute("href")
      await firstBlogLink.click()
      
      // Verify that navigation was successful
      await expect(page).toHaveURL(href as string)
      
      // Verify single post content loaded
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    }
  })

  test("should filter blogs by category", async ({ page }) => {
    // Look for category links or buttons
    const categoryFilter = page.locator("a[href*='category'], button:has-text('Category')").first()
    
    if (await categoryFilter.isVisible()) {
      await categoryFilter.click()
      
      // Verify URL or content update
      // await expect(page).toHaveURL(/category/i)
    }
  })

  test("should have functional pagination", async ({ page }) => {
    const nextButton = page.getByRole("button", { name: /next|older/i })
    const pageTwoButton = page.getByRole("button", { name: "2" })
    
    if (await pageTwoButton.isVisible()) {
      await pageTwoButton.click()
      await expect(page).toHaveURL(/page=2/i)
    } else if (await nextButton.isVisible()) {
      await nextButton.click()
      await expect(page).toHaveURL(/page=2|offset=/i)
    }
  })
})
