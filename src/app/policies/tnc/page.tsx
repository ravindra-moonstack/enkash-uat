import React from "react"
import styles from "./page.module.scss"
import { payment, platform, prepaid } from "."
import { DynamicHeading, TabPoliciesWrapper } from "@/components"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"

export const metadata: Metadata = generateMetaData({
  title: "Terms and Conditions: EnKash",
  description:
    "Review our policies governing the use of EnKash products and services.",
  alternates: {
    canonical: "https://www.enkash.com/policies/tnc",
  },
})
const tabs = [{ key: "payments" }, { key: "prepaid" }, { key: "platform" }]

const cards = [
  {
    key: "payments",
    description:
      "Understand our payment terms for secure, compliant, and transparent transactions.",
    titleHtml: "Payments",
    cardImage: payment,
    buttonUrl: "/policies/payments/tnc",
  },
  {
    key: "prepaid",
    description:
      "Review prepaid usage terms to ensure smooth and compliant transactions.",
    titleHtml: "Prepaid Program",
    cardImage: prepaid,
    buttonUrl: "/policies/prepaid-program/tnc",
  },
  {
    key: "platform",
    description: "Know our platform usage terms for fair and secure services.",
    titleHtml: "Platform",
    cardImage: platform,
    buttonUrl: "/policies/platform/tnc",
  },
]

const TermsAndConditions = () => {
  return (
    <div className={styles.policy}>
      <div className="max-w-auto">
        <div className={styles.policyBox}>
          <div className={styles.policyBoxTitle}>
            <DynamicHeading
              content={[
                {
                  title:
                    "Select from the below to read the terms and conditions",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h4"
              className="f-5 text-center"
            />
          </div>
          <TabPoliciesWrapper tabs={tabs} cards={cards} />
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
