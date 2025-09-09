import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("/virtual-card")

  await expect(page).toHaveTitle(
    /Virtual Corporate Card for Secure and Instant Payments/i
  )
})

test("has main heading", async ({ page }) => {
  await page.goto("/virtual-card")

  const heading = page.getByRole("heading", {
    name: /Secure and Efficient Payments with Virtual Prepaid Card/i,
  })
  await expect(heading).toBeVisible()
})

test("Get Started button navigates to Sales page with source param", async ({
  page,
}) => {
  await page.goto("https://www.enkash.com/virtual-card")
  const getStartedButton = page.locator("text=Get Started").first()

  await expect(getStartedButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/sales\?source=virtual-card/),
    getStartedButton.click(),
  ])

  await expect(page).toHaveURL(/\/sales\?source=virtual-card/)
})
