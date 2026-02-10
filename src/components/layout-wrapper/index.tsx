"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import TalkToSales from "../mobile-talks-to-sales"
import Header from "../header/header"
import Footer from "../footer"

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const hideLayout = ["/contact-us", "/support", "/sales"]
  const shouldHide = hideLayout.includes(pathname) || pathname.startsWith("/admin")

  // ⭐ Remove tracking parameters on client-side load
  useEffect(() => {
    const url = new URL(window.location.href)
    const paramsToRemove = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "_gl",
      "_ga",
      "_gcl_au",
    ]

    let changed = false

    paramsToRemove.forEach((param) => {
      if (url.searchParams.has(param)) {
        url.searchParams.delete(param)
        changed = true
      }
    })

    if (changed) {
      // Replace the URL WITHOUT reloading the page
      window.history.replaceState({}, document.title, url.pathname)
    }
  }, [])

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
