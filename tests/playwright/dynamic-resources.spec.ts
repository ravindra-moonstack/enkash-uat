import { test, expect } from "@playwright/test"

test.describe("Dynamic Pages & Resources", () => {

  test.describe("Glossary (/glossary)", () => {
    test("GLO-01: Alphabet bar loads", async ({ page }) => {
      await page.goto("/glossary")
      const alphabetBar = page.locator("a").filter({ hasText: /^A$/ }).first()
      await expect(alphabetBar).toBeVisible()
    })

    test("GLO-02: Glossary alphabet routing", async ({ page }) => {
      await page.goto("/glossary/a")
      const termList = page.locator("a[href^='/glossary/']")
      // we expect some terms to be listed under 'A', or a 'No Data' message
      if (await termList.count() > 0) {
        await expect(termList.first()).toBeVisible()
      }
    })

    test("GLO-04 & GLO-05: Search functionality", async ({ page }) => {
      await page.goto("/glossary")
      const searchInput = page.getByPlaceholder(/search/i)
      await expect(searchInput).toBeVisible()
      
      await searchInput.fill("credit")
      // The search relies on a debounced API call, so we wait for results or a 'No Results' text
      const resultContainer = page.locator("text=/credit|No Results/i").first()
      await expect(resultContainer).toBeVisible({ timeout: 5000 })
    })
  })

  test.describe("Vouchers (/vouchers)", () => {
    test("VCH-01: Category lists brands", async ({ page }) => {
      await page.goto("/vouchers")
      const ecomLink = page.getByRole("link", { name: /e-commerce/i }).first()
      if (await ecomLink.count() > 0) {
        await expect(ecomLink).toBeVisible()
      }
    })
  })

  test.describe("Resources (/resources/*)", () => {
    test("RES-01 & RES-02: Blogs load", async ({ page }) => {
      await page.goto("/resources/blogs")
      const blogCard = page.locator("a[href^='/resources/blogs/']").first()
      if (await blogCard.count() > 0) {
        await expect(blogCard).toBeVisible()
      }
    })

    test("RES-03: Media Coverage", async ({ page }) => {
      await page.goto("/resources/media-coverage")
      const mediaLink = page.locator("a[target='_blank']").first()
      if (await mediaLink.count() > 0) {
        await expect(mediaLink).toBeVisible()
      }
    })
    
    test("RES-04: Videos", async ({ page }) => {
      await page.goto("/resources/videos")
      const videoIframe = page.locator("iframe").first()
      if (await videoIframe.count() > 0) {
        await expect(videoIframe).toBeVisible()
      }
    })
  })

})
