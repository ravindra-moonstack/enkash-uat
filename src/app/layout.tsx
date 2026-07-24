import type { Metadata } from "next"

import "../styles/_base.scss"
import "../styles/_variables.scss"
import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { Inter } from "next/font/google"
import LazyAnalytics from "@/src/components/LazyAnalytics"
import LayoutClientWrapper from "@/src/components/layout-wrapper"
import { WebVitals } from "@/src/components/web-vitals"
import { ToastProvider } from "@/src/context/ToastContext"
import DeferredScripts from "@/src/components/deferred-scripts"
import Header from "@/src/components/header/header"
import Footer from "@/src/components/footer"
import TalkToSales from "@/src/components/mobile-talks-to-sales"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL || "https://www.enkash.com"
  ),
  title: "Enkash",
  description:
    "Unlock growth with the best payments and spend management platform with products across corporate cards, vouchers, loyalty and more",
  openGraph: {
    title: "Enkash",
    description:
      "Unlock growth with the best payments and spend management platform with products across corporate cards, vouchers, loyalty and more",
    url: process.env.NEXT_PUBLIC_URL,
    type: "website",
    images: [`${process.env.NEXT_PUBLIC_URL}/og-image.png`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta
          name="robots"
          content={
            process.env.NEXT_PUBLIC_URL?.includes("uat")
              ? "noindex, nofollow"
              : "index, follow"
          }
        />
        <meta
          name="google-site-verification"
          content="RWOqrBamBY0cC_WQwIz55vCzZRBv97CtZYwlpUCIjY4"
        />
      </head>
      <body className={inter.variable}>
        <LazyAnalytics gtmId="GTM-TR7NDT8C" />
        <DeferredScripts />
        <WebVitals />
        <ToastProvider>
          <LayoutClientWrapper
            header={<Header />}
            footer={<Footer />}
            talkToSales={<TalkToSales />}
          >
            {children}
          </LayoutClientWrapper>
        </ToastProvider>
      </body>
    </html>
  )
}
