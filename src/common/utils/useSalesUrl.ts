// common/utils/useSalesUrl.ts
"use client";

import { usePathname } from "next/navigation";
import { getSalesUrl } from "./getSalesUrl";

export function useSalesUrl(): string {
  const pathname = usePathname();
  return getSalesUrl(pathname || undefined);
}
