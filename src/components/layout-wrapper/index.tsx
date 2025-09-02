"use client"
import { usePathname } from "next/navigation"
import { Header, Footer, TalkToSales } from "@/src/components"

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  //

  const pathname = usePathname()
  const hideLayout = ["/contact-us", "/support", "/sales"]
  const shouldHide = hideLayout.includes(pathname)

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
