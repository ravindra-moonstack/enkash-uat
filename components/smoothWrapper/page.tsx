"use client"

import { useEffect, useRef, ReactNode } from "react"
import Scrollbar from "smooth-scrollbar"

interface Props {
  children: ReactNode
}

export default function SmoothWrapper({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current)

      return () => {
        scrollbar.destroy() // properly destroy the instance
      }
    }
  }, [])

  return (
    <div ref={scrollRef} style={{ height: "100vh", overflow: "hidden" }}>
      <div>{children}</div>
    </div>
  )
}
