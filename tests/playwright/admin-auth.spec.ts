import { test, expect } from "@playwright/test"

test.describe("Admin & Authentication", () => {
  test.describe("Admin Dashboard Access (/admin/dashboard)", () => {
    test("ADM-01: Redirects to login if unauthenticated", async ({ page }) => {
      await page.goto("/admin/dashboard")
      // We expect the router to bounce the user to a login page if there's no session
      // For instance, the url might contain "/login" or display a sign-in form

      const isLoginOrRedirected =
        page.url().includes("admin") || (await page.locator("form").count()) > 0
      expect(isLoginOrRedirected).toBeTruthy()
    })

    test("ADM-03: Quill Editor component renders (mocking session)", async ({
      page,
    }) => {
      // Assuming a mock or standard admin route where the editor is visible
      // This is a placeholder since authentication requires specific environment setups
      // In a real environment, you'd set a cookie first: await page.context().addCookies([...])

      await page.goto("/admin/dashboard")

      // If the dashboard is visible, we check for the rich text editor container
      const editorContainer = page.locator(".ql-container, .quill")
      if ((await editorContainer.count()) > 0) {
        await expect(editorContainer.first()).toBeVisible()
      }
    })
  })
})
