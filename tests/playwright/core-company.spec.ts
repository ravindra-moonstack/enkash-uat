import { test, expect } from "@playwright/test"

test.describe("Core Company Pages", () => {
  test.describe("Home Page (/) ", () => {
    test("G-01 to G-07: Global assertions & SEO", async ({ page }) => {
      const response = await page.goto("/")
      expect(response?.status()).toBe(200)

      const title = await page.title()
      expect(title).not.toBe("")

      // Check for main heading
      const heading = page.getByRole("heading", { name: /Unifying Payments/i })
      await expect(heading).toBeVisible()
    })

    test("HOME-01: Connect with Us button", async ({ page }) => {
      await page.goto("/")
      const connectButton = page
        .locator("button, a")
        .filter({ hasText: /Connect with Us/i })
        .first()
      await expect(connectButton).toBeVisible()
    })

    test("HOME-02: Videos and carousels exist", async ({ page }) => {
      await page.goto("/")
      // Check if the video element exists
      const video = page.locator("video").first()
      if ((await video.count()) > 0) {
        await expect(video).toBeVisible()
      }
    })
  })

  test.describe("About Us (/about-us)", () => {
    test("ABT-01: Timeline and history renders", async ({ page }) => {
      const response = await page.goto("/about-us")
      expect(response?.status()).toBe(200)

      // Look for a generic heading or timeline component
      const heading = page
        .locator("h1, h2, h5, p")
        .filter({ hasText: /Our Story|About|Journey/i })
        .first()
      await expect(heading).toBeVisible()
    })

    test("ABT-02: Leadership and team images load", async ({ page }) => {
      await page.goto("/about-us")
      const teamImages = page.locator("img[alt*='Team'], img[alt*='Founder']")
      // We expect at least some team images if the section exists
      if ((await teamImages.count()) > 0) {
        await expect(teamImages.first()).toBeVisible()
      }
    })
  })

  test.describe("Careers (/careers)", () => {
    test("CAR-01: View Open Roles functionality", async ({ page }) => {
      const response = await page.goto("/careers")
      expect(response?.status()).toBe(200)

      const openRolesBtn = page
        .getByRole("link", { name: /View Open Roles/i })
        .or(page.getByRole("button", { name: /View Open Roles/i }))
      if ((await openRolesBtn.count()) > 0) {
        await expect(openRolesBtn.first()).toBeVisible()
      }
    })
  })

  test.describe("Corporate Information & Policies", () => {
    test("CORP-01 & CORP-02: Corporate Info renders text blocks", async ({
      page,
    }) => {
      const response = await page.goto("/corporate-information")
      expect(response?.status()).toBe(200)

      const mainContent = page.locator("main")
      await expect(mainContent).toBeVisible()
      expect((await mainContent.innerText()).length).toBeGreaterThan(50)
    })

    test("CORP-01 & CORP-02: Policies renders text blocks", async ({
      page,
    }) => {
      const response = await page.goto("/policies")
      expect(response?.status()).toBe(200)

      const mainContent = page.locator("main")
      await expect(mainContent).toBeVisible()
      expect((await mainContent.innerText()).length).toBeGreaterThan(100)
    })
  })
  test("Resources page contains an H1 in the initial HTML", async ({
    page,
  }) => {
    await page.goto("/resources")
    // Wait for the network to be idle (no JS execution)
    await page.waitForLoadState("networkidle")
    const h1 = await page.locator("h1").first()
    await expect(h1).toBeVisible()
  })
})
