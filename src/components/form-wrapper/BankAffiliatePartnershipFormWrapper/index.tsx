"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// यहाँ dynamic + ssr: false allowed है क्योंकि यह Client Component है
const BankAffiliatePartnershipForm = dynamic(
  () => import("@/src/components/forms/bank-affiliate-partnership"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-600">
        Loading partnership form...
      </div>
    ),
  }
)

export default function AffiliateFormClient() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-gray-600">
          Loading partnership form...
        </div>
      }
    >
      <BankAffiliatePartnershipForm />
    </Suspense>
  )
}


//////contact us

