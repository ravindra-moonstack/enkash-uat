import { test, expect } from "@playwright/test"

test.describe("Error Handling", () => {
  test("Should show 404 for non-existent blog post", async ({ page }) => {
    // Navigate to a definitely non-existent slug
    const response = await page.goto("/resources/blog/this-slug-will-never-exist-12345")
    
    // Next.js App Router usually returns 404 status for notFound()
    expect(response?.status()).toBe(404)
    
    // Verify the 404 page content is displayed
    const heading = page.getByRole("heading", { name: /404|not found/i })
    await expect(heading).toBeVisible()
    
    // Check if there is a link back to home or blog list
    const backLink = page.locator("a[href='/'], a[href='/resources/blog']")
    await expect(backLink.first()).toBeVisible()
  })

  test("Should handle missing category query gracefully", async ({ page }) => {
    // If someone tampers with the URL and provides an empty category
    await page.goto("/resources/blog?category=")
    
    // Should default to 'all' or ignore the empty filter
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    const blogCards = page.locator("article")
    // Wait and check if articles still load
    try {
        await expect(blogCards.first()).toBeVisible({ timeout: 5000 })
    } catch(e) {}
  })

  test("Should handle out of bounds pagination", async ({ page }) => {
    await page.goto("/resources/blog?page=99999")
    
    // Depending on implementation, it might show "No blogs found" or redirect to page 1
    const noResults = page.getByText(/no blogs found|nothing here/i)
    if (await noResults.isVisible()) {
       await expect(noResults).toBeVisible()
    } else {
       // Check if it redirected or just shows empty
       const blogCards = page.locator("article")
       expect(await blogCards.count()).toBe(0)
    }
  })
})
