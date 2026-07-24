"use client"

import { usePathname } from "next/navigation"
import React from "react"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("../header/header"), { ssr: true })
const Footer = dynamic(() => import("../footer"), { ssr: true })
const TalkToSales = dynamic(() => import("../mobile-talks-to-sales"), { ssr: true })

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const hideLayout = ["/contact-us", "/support", "/sales"]
  const shouldHide =
    hideLayout.includes(pathname) ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/campaigns")

  return (
    <div className="d-flex flex-column min-vh-100">
      {!shouldHide && <Header />}
      {!shouldHide && <TalkToSales />}
      <main id="main" className="flex-grow-1">
        {children}
      </main>
      {!shouldHide && <Footer />}
    </div>
  )
}
