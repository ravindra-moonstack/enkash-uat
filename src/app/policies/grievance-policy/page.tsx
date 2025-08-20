import { payment, prepaid, platform } from "."
import { DynamicHeading, TabPoliciesWrapper } from "@/components"
import React from "react"
import styles from "./page.module.scss"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"
export const metadata: Metadata = generateMetaData({
  title: "Grievance and Redressal Policy: EnKash",
  description:
    "Learn how EnKash addresses complaints with a fair, timely, and transparent resolution process.",
  alternates: {
    canonical: "https://www.enkash.com/policies/grievance-policy",
  },
})
const tabs = [{ key: "payments" }, { key: "prepaid" }, { key: "platform" }]

const cards = [
  {
    key: "payments",
    description:
      "Quickly resolve payment issues with our clear, compliant grievance process.",
    titleHtml: "Payments",
    cardImage: payment,
    buttonUrl: "/policies/payments/grievance-policy",
  },
  {
    key: "prepaid",
    description:
      "Resolve prepaid card disputes promptly with our transparent escalation process.",
    titleHtml: "Prepaid Program",
    cardImage: prepaid,
    buttonUrl: "/policies/prepaid-program/grievance-policy",
  },
  {
    key: "platform",
    description:
      "Address platform concerns swiftly through our structured grievance resolution system.",
    titleHtml: "Platform",
    cardImage: platform,
    buttonUrl: "/policies/platform/grievance-policy",
  },
]

const GrievancePolicy = () => {
  return (
    <div className={styles.policy}>
      <div className="max-w-auto">
        <div className={styles.policyBox}>
          <div className={styles.policyBoxTitle}>
            <DynamicHeading
              content={[
                {
                  title: "Select from the below to read the grievance policy",
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

export default GrievancePolicy
