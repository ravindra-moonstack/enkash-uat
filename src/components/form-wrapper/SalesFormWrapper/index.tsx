"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const SalesFormWrapper = dynamic(
  () => import("@/src/components/forms/sales-form"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-600">
        Loading Sales form...
      </div>
    ),
  }
)

export default function ContactFormClient() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-gray-600">
          Loading sales form...
        </div>
      }
    >
      <SalesFormWrapper />
    </Suspense>
  )
}


