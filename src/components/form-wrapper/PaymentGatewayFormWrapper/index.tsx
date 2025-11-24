"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"



const PaymentGatewayPartnershipForm = dynamic(
  () => import("@/src/components/forms/payment-gateway"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-600">
        Loading partnership form...
      </div>
    ),
  }
)

export default function PaymentGatewayFormClient() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-gray-600">
          Loading partnership form...
        </div>
      }
    >
      <PaymentGatewayPartnershipForm />
    </Suspense>
  )
}
