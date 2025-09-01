import type { Metadata } from "next"

import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { Inter } from "next/font/google"
import LayoutClientWrapper from "@/components/layoutWrapper/layoutWrapper"
import { WebVitals } from "@/components/web-vitals"

export const dynamic = "force-dynamic"

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
    images: "/og-image.png",
  },
  icons: "/favicon.svg",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <WebVitals />
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  )
}
