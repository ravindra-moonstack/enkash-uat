import type { Metadata } from "next"

import "../styles/_base.scss"
import "../styles/_variables.scss"
import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { Inter } from "next/font/google"
import Script from "next/script"
import LayoutClientWrapper from "@/src/components/layout-wrapper"
import { WebVitals } from "@/src/components/web-vitals"
import { ToastProvider } from "@/src/context/ToastContext"
import DeferredScripts from "@/src/components/deferred-scripts"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
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
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="RWOqrBamBY0cC_WQwIz55vCzZRBv97CtZYwlpUCIjY4"
        />
      </head>
      <body className={inter.variable}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TR7NDT8C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TR7NDT8C');`,
          }}
        />
        <DeferredScripts />
        <WebVitals />
        <ToastProvider>
          <LayoutClientWrapper>{children}</LayoutClientWrapper>
        </ToastProvider>
      </body>
    </html>
  )
}
