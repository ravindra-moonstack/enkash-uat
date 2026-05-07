import React from "react"
import { Metadata } from "next"
import BillPaymentsClient from "./BillPaymentsClient"
import generateMetaData from "@/utils/metaData"

export const metadata: Metadata = {
  ...generateMetaData({
    title: "Enterprise Bill Payments | EnKash",
    description: "Move your utility bill operations to EnKash without downtime. Migration support and built for scale.",
    alternates: { canonical: `${process.env.URL}/enterprise-bill-payments/` },
  }),
  robots: {
    index: false,
    follow: true,
  },
}

const EnterpriseBillPaymentsPage = () => {
  return <BillPaymentsClient />
}

export default EnterpriseBillPaymentsPage
