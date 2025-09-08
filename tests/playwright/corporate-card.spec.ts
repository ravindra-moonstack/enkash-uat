import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("/products/corporate-cards")

  await expect(page).toHaveTitle(/EnKash/i)
})

test("has main heading", async ({ page }) => {
  await page.goto("/products/corporate-cards")

  const heading = page.getByRole("heading", {
    name: /The Only Corporate Cards You’ll Ever Need./i,
  })
  await expect(heading).toBeVisible()
})

test("Talk to Us button navigates to Sales page", async ({ page }) => {
  await page.goto("/products/corporate-cards")

  const openRolesButton = page
    .getByRole("button", { name: /Talk to Us/i })
    .first()
  await expect(openRolesButton).toBeVisible()

  await openRolesButton.click()

  await expect(page).toHaveURL(/\/sales\?source=corporate-cards/)
})
