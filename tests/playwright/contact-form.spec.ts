import { test, expect } from "@playwright/test"

test("fills and submits Contact Us form", async ({ page }) => {
  test.setTimeout(50000)

  await page.goto("/contact-us")

  // Fill text inputs
  await page.locator('input[name="SingleLine"]').fill("John Doe")
  await page.locator('input[name="Email"]').fill("john.doe@example.com")
  await page.locator('input[name="SingleLine1"]').fill("Doe Enterprises")
  await page.locator('input[name="PhoneNumber_countrycode"]').fill("9876543210")

const multiSelect = page.getByRole("button", { name: "MultipleChoice" })
await multiSelect.click()

await page.getByRole("menuitem", { name: "Looking for Payment Collection Solution" }).click()

await expect(page.locator('input[name="MultipleChoice"]')).toHaveValue(
  "Looking for Payment Collection Solution"
)

  // ✅ Select options from dropdown
  await page.getByRole("menuitem", { name: "Looking for Payment Collection Solution" }).click()
  await multiSelect.click() // open again for next choice
  await page.getByRole("menuitem", { name: "Payment Gateway Partnership" }).click()

  // (Optional) Assert hidden input or form state was updated
  await expect(page.locator('input[name="MultipleChoice"]')).toHaveValue(
    "Payment Gateway Partnership"
  )

  // Fill textarea
  await page
    .locator('textarea[name="MultiLine"]')
    .fill("Need help with onboarding and partnership opportunities.")

  // Select other dropdowns
  // await page.getByRole("combobox", { name: "Dropdown" }).selectOption("Landing Page")
  // await page.getByRole("combobox", { name: "Dropdown1" }).selectOption("Marketing")
  // await page.getByRole("combobox", { name: "Dropdown2" }).selectOption("Website Sales Leads")
  // await page.getByRole("combobox", { name: "Dropdown3" }).selectOption("Second Choice")
  // await page.getByRole("combobox", { name: "Dropdown4" }).selectOption("Third Choice")

  // Mock API call
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

  // Submit form
  await page.getByRole("button", { name: "Submit" }).click()

  // Assert confirmation
  await expect(page).toHaveURL(/contact-us/i)
})
