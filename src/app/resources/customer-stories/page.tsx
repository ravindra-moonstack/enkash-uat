import React from "react"
import { Metadata } from "next"
import CustomerStoriesContent from "./CustomerStoriesContent"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Customer Success Stories & Case Studies | EnKash",
  description:
    "Discover how enterprises use EnKash for business payments, expense management, corporate cards, and financial automation through real customer success stories.",
  alternates: {
    canonical: `${process.env.URL || "https://www.enkash.com"}/resources/customer-stories`,
  },
})

const CustomerStoriesPage = () => {
  return <CustomerStoriesContent />
}

export default CustomerStoriesPage
