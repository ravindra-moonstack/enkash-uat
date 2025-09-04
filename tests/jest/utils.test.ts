import {
  getSalesUrl,
  getLoginUrl,
  getSupportUrl,
} from "../../src/utils/getSalesUrl"

describe("getSalesUrl", () => {
  it("should return sales URL with last slug", () => {
    expect(getSalesUrl("/products/expense-management")).toBe(
      "/sales?source=expense-management"
    )
    expect(getSalesUrl("/")).toBe("/sales?source=home")
    expect(getSalesUrl("")).toBe("/sales?source=home")
    expect(getSalesUrl()).toBe("/sales?source=home")
  })
})

describe("getLoginUrl", () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_HOME_URL: "https://example.com",
    }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it("should return login URL with last slug", () => {
    expect(getLoginUrl("/products/invoicing")).toBe(
      "https://example.com?source=invoicing"
    )
    expect(getLoginUrl("/")).toBe("https://example.com?source=home")
    expect(getLoginUrl("")).toBe("https://example.com?source=home")
    expect(getLoginUrl()).toBe("https://example.com?source=home")
  })
})

describe("getSupportUrl", () => {
  it("should return support URL with last slug", () => {
    expect(getSupportUrl("/help/contact")).toBe("/support?source=contact")
    expect(getSupportUrl("/")).toBe("/support?source=home")
    expect(getSupportUrl("")).toBe("/support?source=home")
    expect(getSupportUrl()).toBe("/support?source=home")
  })
})
