"use client"

import { useEffect, useState, useRef } from "react"
import DynamicHeading from "../dynamic-heading"

interface CounterProps {
  end: number | string // Target number or string
  suffix?: string // +, %, etc.
  duration?: number // Animation time in ms
  label: string // Text below counter
  prefix?: string // Optional prefix like "$"
  className?: string
}

const Counter: React.FC<CounterProps> = ({
  end,
  suffix = "",
  duration = 200,
  label,
  prefix = "",
  className = "",
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  // Observe when the counter enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Run once
        }
      },
      { threshold: 0.3 } // 30% visible
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  // Run the count-up animation when visible
  useEffect(() => {
    if (!isVisible || typeof end !== "number") return

    let start = 0
    const increment = end / (duration / 16) // ~60fps
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(Math.floor(start))
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className={className}>
      <div>
        {/* <h2>
          {prefix} {count.toLocaleString()} {suffix}
        </h2> */}

        <DynamicHeading
          content={[
            {
              title: `${prefix}${prefix ? " " : ""}${typeof end === "number" ? count.toLocaleString() : end}${suffix}`,
              color: "color-equity-blue",
            },
          ]}
          headingTag="h2"
          className=" italic f-6"
        />
      </div>

      <div>
        {" "}
        <DynamicHeading
          content={[
            {
              title: label,
              color: "color-black",
            },
          ]}
          headingTag="p"
          className="mb-0"
        />
      </div>
    </div>
  )
}

export default Counter
