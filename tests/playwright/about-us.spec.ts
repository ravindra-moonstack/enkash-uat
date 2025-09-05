import { test, expect } from "@playwright/test"

test("Website loads properly", async ({ page }) => {
  await page.goto("/about-us") // ✅ relative path

  await expect(page).toHaveTitle(/EnKash/i)
})

test("has main heading", async ({ page }) => {
  await page.goto("/about-us")

  const heading = page.getByRole("heading", {
    name: /Shaping the Future of Fintech/i,
  })
  await expect(heading).toBeVisible()
})

test("View Open Roles button navigates to Careers page", async ({ page }) => {
  await page.goto("/about-us")

  const openRolesButton = page.getByRole("button", { name: /View Open Roles/i })
  await expect(openRolesButton).toBeVisible()

  await openRolesButton.click()

  await expect(page).toHaveURL(/\/careers/)
})
