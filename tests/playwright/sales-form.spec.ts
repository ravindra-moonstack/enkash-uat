import { test, expect } from "@playwright/test"

test("fills and submits Sales form", async ({ page }) => {
  test.setTimeout(50000)

  await page.goto("/sales")

  await page.locator('input[name="SingleLine"]').fill("John Doe")
  await page.locator('input[name="Email"]').fill("john.doe@example.com")
  await page.locator('input[name="SingleLine1"]').fill("Doe Enterprises")
  await page.locator('input[name="PhoneNumber_countrycode"]').fill("9876543210")

  const multiSelect = page.getByText("What are you looking for?*")
  await multiSelect.click()

  const firstOption = page.getByRole("checkbox", {
    name: "Collect Payments",
  })
  await firstOption.check()

  await expect(firstOption).toBeChecked()

  await page.click("body", { position: { x: 10, y: 10 } })

  await page
    .locator('textarea[name="MultiLine"]')
    .fill("Need help with onboarding and partnership opportunities.")

  await page.route("**/submit", async (route) => {
    if (route.request().method() === "POST") {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ status: "success" }),
      })
    } else {
      await route.continue()
    }
  })

  await page.waitForTimeout(1000)

  const submitButton = page.getByRole("button", { name: "submit" })

  await submitButton.click({ timeout: 10000 })

  await expect(page).toHaveURL(/sales/i)
})
