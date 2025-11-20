"use client"

import dynamic from "next/dynamic"

const BankAffiliatePartnershipFormWrapper = dynamic(
  () =>
    import(
      "@/src/components/BankAffiliatePartnershipFormWrapper/BankAffiliatePartnershipFormWrapper"
    ),
  {
    ssr: false,
    loading: () => (
      <div style={{ padding: "40px", textAlign: "center" }}>
        Loading partnership form...
      </div>
    ),
  }
)

export default function BankAffiliateWrapperClient() {
  return <BankAffiliatePartnershipFormWrapper />
}
