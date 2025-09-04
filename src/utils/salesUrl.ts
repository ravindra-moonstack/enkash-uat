"use client";
import { usePathname } from "next/navigation";

export function useSalesUrl() {
  const pathname = usePathname();

  // Get last part of current path as slug
  const slug = pathname.split("/").filter(Boolean).pop() || "home";

  return `/sales/?source=${slug}`;
}
