import type { Metadata } from "next"
import "../../styles/_base.scss"
import "./globals.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Inter } from "next/font/google"
import ScrollToTop from "@/components/scroll-to-top/ScrollToTop"
import SmoothWrapper from "@/components/smoothWrapper/page"

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
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SmoothWrapper>{children}</SmoothWrapper>

        {/* <ScrollToTop /> */}
      </body>
    </html>
  )
}
