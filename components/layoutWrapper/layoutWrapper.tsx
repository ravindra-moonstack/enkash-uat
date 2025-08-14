"use client"

import { usePathname } from "next/navigation"
import { Header, Footer, TalkToSales } from "@/components"

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const hideLayout = ["/contact-us", "/support", "/sales"]
  const shouldHide = hideLayout.includes(pathname)

  return (
    <>
      {!shouldHide && <Header />}
      {!shouldHide && <TalkToSales />}
      {children}
      {!shouldHide && <Footer />}
    </>
  )
}
