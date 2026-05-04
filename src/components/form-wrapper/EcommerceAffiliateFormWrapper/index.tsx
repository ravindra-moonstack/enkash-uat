"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const EcommerceAffiliateForm = dynamic(
    () => import("@/src/components/forms/ecommerce-affiliate"),
    {
        ssr: false,
        loading: () => (
            <div className="py-20 text-center text-gray-600">
                Loading form...
            </div>
        ),
    }
)

export default function AffiliateFormClient() {
    return (
        <Suspense
            fallback={
                <div className="py-20 text-center text-gray-600">
                    Loading form...
                </div>
            }
        >
            <EcommerceAffiliateForm />
        </Suspense>
    )
}
