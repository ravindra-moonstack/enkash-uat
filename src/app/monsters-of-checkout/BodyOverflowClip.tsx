"use client"

import { useEffect } from "react"

const BodyOverflowClip = () => {
  useEffect(() => {
    // Store original style to revert on unmount
    const originalStyle = document.body.style.overflowX

    // Apply the clip specifically to body
    document.body.style.overflowX = "clip"

    return () => {
      // Clean up when leaving this page
      document.body.style.overflowX = originalStyle
    }
  }, [])

  return null
}

export default BodyOverflowClip
