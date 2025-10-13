import type { Metadata } from "next"

import "../styles/_base.scss"
import "../styles/_variables.scss"
import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { Inter } from "next/font/google"
import LayoutClientWrapper from "@/src/components/layout-wrapper"
import { WebVitals } from "@/src/components/web-vitals"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Enkash",
  description:
    "EnKash is the ultimate platform for businesses that offer services like Account Payable, Accounts Receivable, Expense Management, Corporate Cards, Employee Rewards, Channel Incentive, automation solutions & many more",
  openGraph: {
    title: "Enkash",
    description:
      "EnKash is the ultimate platform for businesses that offer services like Account Payable, Accounts Receivable, Expense Management, Corporate Cards, Employee Rewards, Channel Incentive, automation solutions & many more",
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
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Meta */}
        <meta name="robots" content="index, follow" />

        {/* Preload LCP hero image */}
        <link
          rel="preload"
          as="image"
          href="@/src/app/home/img/banner_bg_image.webp"
          fetchPriority="high"
        />

        {/* Defer Cloudflare email decode script */}
        <script
          src="https://www.cloudflare.com/static/email-decode.min.js"
          data-cfasync="false"
          defer
        />
      </head>
      <body className={inter.variable}>
        <WebVitals />
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  )
}
