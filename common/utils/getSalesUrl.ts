// common/utils/getSalesUrl.ts

/**
 * Extract last slug from pathname
 * Example: "/products/expense-management" => "expense-management"
 */
function getLastSlug(pathname?: string): string {
  return pathname?.split("/").filter(Boolean).pop() || "home"
}

/**
 * Generate Sales URL
 */
export function getSalesUrl(pathname?: string): string {
  const slug = getLastSlug(pathname)
  return `/sales?source=${slug}`
}

/**
 * Generate Login URL
 */
export function getLoginUrl(pathname?: string): string {
  const slug = getLastSlug(pathname)
  return `${process.env.NEXT_PUBLIC_HOME_URL}?source=${slug}`
}

/**
 * Generate Support URL
 */
export function getSupportUrl(pathname?: string): string {
  const slug = getLastSlug(pathname)
  return `/support?source=${slug}`
}
