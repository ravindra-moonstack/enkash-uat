import React from "react"
import { Metadata } from "next"
import PaymentGatewayCampaignClient from "./PaymentGatewayCampaignClient"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = {
  ...generateMetaData({
    title: "Best Payment Gateway in India to Accept Payments Online | EnKash Campaigns",
    description: "Power your business checkouts with EnKash Payment Gateway. Instant integration, RBI-authorised, and advanced fraud protection.",
    alternates: { canonical: `${process.env.URL}/campaigns/payment-gateway/` },
  }),
  robots: {
    index: false,
    follow: true,
  },
}

const PaymentGatewayCampaignPage = () => {
  return <PaymentGatewayCampaignClient />
}

export default PaymentGatewayCampaignPage
