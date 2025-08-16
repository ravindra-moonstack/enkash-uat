// common/utils/getSalesUrl.ts
export function getSalesUrl(pathname?: string): string {
  // Agar pathname diya hai to uska last slug lo
  const slug = pathname?.split("/").filter(Boolean).pop() || "home";
  return `/sales/?source=${slug}`;
}
