import { test, expect } from "@playwright/test"

test("Website loads properly and redirects", async ({ page }) => {
  await page.goto("/virtual-card")
  
  // It should redirect to corporate-cards
  await expect(page).toHaveURL(/\/products\/corporate-cards/i)

  await expect(page).toHaveTitle(/EnKash/i)
})

test("has main heading from corporate cards", async ({ page }) => {
  await page.goto("/virtual-card")

  const heading = page.getByRole("heading", {
    name: /Corporate cards that move at the speed of your business./i,
  })
  await expect(heading).toBeVisible()
})

test("Talk to Us button navigates to Sales page with source param", async ({
  page,
}) => {
  await page.goto("/virtual-card") // relative url
  const getStartedButton = page.locator("text=Talk to Us").first()

  await expect(getStartedButton).toBeVisible({ timeout: 10000 })

  await Promise.all([
    page.waitForURL(/\/sales\?source=corporate-cards/),
    getStartedButton.click(),
  ])

  await expect(page).toHaveURL(/\/sales\?source=corporate-cards/)
})
