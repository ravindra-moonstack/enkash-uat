"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const MonstersForm = dynamic(
  () => import("@/src/components/forms/monsters-form"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-600">Loading form...</div>
    ),
  }
)

export default function MonstersFormClient() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-gray-600 ">Loading form...</div>
      }
    >
      <MonstersForm />
    </Suspense>
  )
}
