"use client"

import { useReportWebVitals } from "next/web-vitals"

const logWebVitals = (metric: { name: string; value: number; rating: string }) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[WebVitals] ${metric.name}: ${Math.round(metric.value)} (${metric.rating})`)
  }
}

export function WebVitals() {
  useReportWebVitals(logWebVitals)

  return null
}
