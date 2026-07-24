"use client"

import { usePathname } from "next/navigation"
import React from "react"

export default function LayoutClientWrapper({
  children,
  header,
  footer,
  talkToSales,
}: {
  children: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
  talkToSales: React.ReactNode
}) {
  const pathname = usePathname()

  const hideLayout = ["/contact-us", "/support", "/sales"]
  const shouldHide =
    hideLayout.includes(pathname) ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/campaigns")

  return (
    <div className="d-flex flex-column min-vh-100">
      {!shouldHide && header}
      {!shouldHide && talkToSales}
      <main id="main" className="flex-grow-1">
        {children}
      </main>
      {!shouldHide && footer}
    </div>
  )
}
