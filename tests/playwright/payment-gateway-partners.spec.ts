import { test, expect } from "@playwright/test"

test("fills and submits Payment Gateway Partnership form", async ({ page }) => {
  test.setTimeout(50000)

  await page.goto("/payment-gateway-partners")

  await page.locator('input[name="SingleLine"]').fill("John Doe")
  await page.locator('input[name="Email"]').fill("john.doe@example.com")
  await page.locator('input[name="SingleLine1"]').fill("Doe Enterprises")
  await page.locator('input[name="PhoneNumber_countrycode"]').fill("9876543210")

  const singleSelect = page.getByRole("button", { name: "Monthly Merchant Volume" })
  await singleSelect.click()

  await page.getByRole("menuitem", { name: "0 to 5" }).click()
  await singleSelect.click()
  await page.getByRole("menuitem", { name: "5 to 10" }).click()

  await expect(page.locator('input[name="Dropdown5"]')).toHaveValue("5 to 10")

  const singleSelectSecond = page.getByRole("button", { name: "Line of Business" })
  await singleSelectSecond.click()

  await page.getByRole("menuitem", { name: "Developers" }).click()
  await singleSelectSecond.click()
  await page.getByRole("menuitem", { name: "Orchestration" }).click()

  await expect(page.locator('input[name="Dropdown6"]')).toHaveValue(
    "Orchestration"
  )

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

 
  await page.locator('button[type="submit"]').click()


  await expect(page).toHaveURL(/payment-gateway-partners/i)

})
