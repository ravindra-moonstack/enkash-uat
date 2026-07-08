"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export default function LazyAnalytics({ gtmId }: { gtmId: string }) {
  const [loadScripts, setLoadScripts] = useState(false)

  useEffect(() => {
    const handleInteraction = () => {
      setLoadScripts(true)
      // Remove listeners once triggered
      events.forEach((event) =>
        window.removeEventListener(event, handleInteraction)
      )
    }

    const events = ["scroll", "mousemove", "touchstart", "click", "keydown"]

    events.forEach((event) =>
      window.addEventListener(event, handleInteraction, { once: true, passive: true })
    )

    // Fallback: load after 5 seconds if no interaction
    const timeout = setTimeout(() => {
      setLoadScripts(true)
      events.forEach((event) =>
        window.removeEventListener(event, handleInteraction)
      )
    }, 5000)

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleInteraction)
      )
      clearTimeout(timeout)
    }
  }, [])

  if (!loadScripts) return null

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
    </>
  )
}
