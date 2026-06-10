"use client"

import { useEffect } from "react"

export default function DeferredScripts() {
  useEffect(() => {
    let loaded = false

    const loadGTM = () => {
      if (loaded) return
      loaded = true

      // Clean up event listeners immediately
      window.removeEventListener("scroll", loadGTM)
      window.removeEventListener("mousemove", loadGTM)
      window.removeEventListener("touchstart", loadGTM)
      window.removeEventListener("keydown", loadGTM)

      // Inject GTM script
      ;(function (w: any, d: Document, s: string, l: string, i: string) {
        w[l] = w[l] || []
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
        const f = d.getElementsByTagName(s)[0]
        const j = d.createElement(s) as HTMLScriptElement
        const dl = l !== "dataLayer" ? "&l=" + l : ""
        j.async = true
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
        f.parentNode?.insertBefore(j, f)
      })(window, document, "script", "dataLayer", "GTM-TR7NDT8C")
    }

    // Attach listeners with passive: true
    window.addEventListener("scroll", loadGTM, { passive: true })
    window.addEventListener("mousemove", loadGTM, { passive: true })
    window.addEventListener("touchstart", loadGTM, { passive: true })
    window.addEventListener("keydown", loadGTM, { passive: true })

    // Load GTM on requestIdleCallback if supported, fallback to timeout after 1s
    const idleCallback =
      window.requestIdleCallback || ((cb: any) => setTimeout(cb, 1000))
    const idleId = idleCallback(() => {
      loadGTM()
    })

    // Absolute fallback of 4 seconds
    const timeoutId = setTimeout(loadGTM, 4000)

    const originalAddEventListener =
      typeof window !== "undefined" && window.EventTarget
        ? window.EventTarget.prototype.addEventListener
        : null

    if (originalAddEventListener) {
      window.EventTarget.prototype.addEventListener = function (
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
      ) {
        let newOptions = options
        if (["touchstart", "touchmove", "wheel", "mousewheel"].includes(type)) {
          if (typeof options === "boolean") {
            newOptions = { capture: options, passive: true }
          } else if (typeof options === "object") {
            if (options.passive === undefined) {
              newOptions = { ...options, passive: true }
            }
          } else {
            newOptions = { passive: true }
          }
        }
        return originalAddEventListener.call(this, type, listener, newOptions)
      }
    }

    return () => {
      window.removeEventListener("scroll", loadGTM)
      window.removeEventListener("mousemove", loadGTM)
      window.removeEventListener("touchstart", loadGTM)
      window.removeEventListener("keydown", loadGTM)
      clearTimeout(timeoutId)
      if (window.cancelIdleCallback && typeof idleId === "number") {
        window.cancelIdleCallback(idleId)
      }
      // Restore original addEventListener
      if (
        originalAddEventListener &&
        typeof window !== "undefined" &&
        window.EventTarget
      ) {
        window.EventTarget.prototype.addEventListener = originalAddEventListener
      }
    }
  }, [])

  return null
}
