import React from "react"
import { Metadata } from "next"
import ResourcesContent from "./ResourcesContent"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Resources & Insights | EnKash Library",
  description:
    "Explore EnKash's resource library for articles, blogs, calculators, and case success stories on payments automation and expense management in India.",
  alternates: {
    canonical: `${process.env.URL || "https://www.enkash.com"}/resources`,
  },
})

const ResourcesPage = () => {
    return <ResourcesContent />
}

export default ResourcesPage
