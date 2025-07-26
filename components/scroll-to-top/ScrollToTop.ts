"use client"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const ScrollToTop = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  if (window) {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
  }

  return null
}

export default ScrollToTop
