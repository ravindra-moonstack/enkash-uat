"use client"

import React, { useState, useEffect, useRef } from "react"

interface LazyLoadWrapperProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
}

export default function LazyLoadWrapper({
  children,
  threshold = 0.1,
  rootMargin = "200px",
}: LazyLoadWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return (
    <div ref={ref} style={{ minHeight: "100px" }}>
      {isVisible ? children : null}
    </div>
  )
}
