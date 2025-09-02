"use client"

import { useReportWebVitals } from "next/web-vitals"

const logWebVitals = () => {
  //
}

export function WebVitals() {
  useReportWebVitals(logWebVitals)

  return null
}
