import { test, expect } from "@playwright/test"

test("submits the support form using field name selectors", async ({
  page,
}) => {
  await page.goto("https://enkash.com/support") // adjust to the correct route

  // Fill inputs using their 'name' attributes
  await page.locator('input[name="SingleLine"]').fill("John Doe") // Name
  await page.locator('input[name="Email"]').fill("john.doe@example.com") // Email
  await page.locator('input[name="SingleLine1"]').fill("Doe Enterprises") // Company Name
  await page.locator('input[name="PhoneNumber_countrycode"]').fill("9876543210") // Contact No.

  // Handle multiselect (assuming it uses a div or input with name="MultipleChoice")
  const multiSelect = page.getByRole("combobox") // Adjust if custom component
  await multiSelect.click()
  await page.getByText("Sales", { exact: true }).click() // Replace "Sales" with actual option

  // Fill textarea using name
  await page
    .locator('textarea[name="MultiLine"]')
    .fill("Need help with onboarding and product features.")

  // Submit the form
  await page.getByRole("button", { name: "Submit" }).click()

  // Expect to be redirected to the confirmation page
  await expect(page).toHaveURL(/\/confirmation-support/)
})
