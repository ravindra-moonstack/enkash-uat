import { test, expect } from "@playwright/test"

test.describe("Tools & Calculators", () => {

  test.describe("GST Calculator (/gst-calculator)", () => {
    test("GST-01 & GST-02: Base UI renders", async ({ page }) => {
      const response = await page.goto("/gst-calculator")
      expect(response?.status()).toBe(200)
      
      const calcHeading = page.locator("h1, h2").filter({ hasText: /GST/i }).first()
      await expect(calcHeading).toBeVisible()
      
      const input = page.locator("input[type='number']").first()
      if (await input.count() > 0) {
        await expect(input).toBeVisible()
      }
    })
  })

  test.describe("Income Tax Calculator (/income-tax-calculator)", () => {
    test("TAX-01: Base UI renders", async ({ page }) => {
      const response = await page.goto("/income-tax-calculator")
      expect(response?.status()).toBe(200)
      
      const calcHeading = page.locator("h1, h2").filter({ hasText: /Tax/i }).first()
      await expect(calcHeading).toBeVisible()
    })
  })

  test.describe("IFSC Codes (/ifsc-codes)", () => {
    test("IFS-01 & IFS-02: Base UI renders", async ({ page }) => {
      const response = await page.goto("/ifsc-codes")
      expect(response?.status()).toBe(200)
      
      const calcHeading = page.locator("h1, h2").filter({ hasText: /IFSC/i }).first()
      await expect(calcHeading).toBeVisible()
      
      // Cascading dropdowns (Select fields)
      const selectBoxes = page.locator("select")
      if (await selectBoxes.count() > 0) {
        await expect(selectBoxes.first()).toBeVisible()
      }
    })
  })

})
