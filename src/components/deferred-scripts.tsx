"use client"

import { useEffect } from "react"

export default function DeferredScripts() {
  useEffect(() => {
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
