import React, { Suspense } from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"
import { platform, prepaid } from "./img"

// components
import DynamicHeading from "@/src/components/dynamic-heading"
import TabPoliciesWrapper from "@/src/components/tab-policies-wrapper"

import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Customer Onboarding Policy: EnKash",
  description:
    "Get an overview of our quick, compliant customer onboarding procedure for all services.",
  alternates: {
    canonical: `${process.env.URL}/policies/customer-onboarding`,
  },
})

const tabs = [{ key: "prepaid" }, { key: "platform" }]

const cards = [
  {
    key: "prepaid",
    description:
      "Get started with prepaid solutions through our secure, streamlined onboarding process.",
    titleHtml: "Prepaid Program",
    cardImage: prepaid,
    buttonUrl: "/policies/prepaid-program/customer-onboarding",
  },
  {
    key: "platform",
    description:
      "Onboard effortlessly to our platform with a clear, compliant verification process.",
    titleHtml: "Platform",
    cardImage: platform,
    buttonUrl: "/policies/prepaid-program/customer-onboarding",
  },
]
const CustomerOnboardingContent = (): React.JSX.Element => {
  //

  return (
    <div className={styles.policy}>
      <div className="max-w-auto">
        <div className={styles.policyBox}>
          <div className={styles.policyBoxTitle}>
            <DynamicHeading
              content={[
                {
                  title:
                    "Select from the below to read the customer onboarding policy",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h1"
              className="f-5 text-center fs-4 fs-md-5"
            />
          </div>
          <TabPoliciesWrapper tabs={tabs} cards={cards} />
        </div>
      </div>
    </div>
  )
}

export default function CustomerOnboarding() {
  return (
    <Suspense fallback={null}>
      <CustomerOnboardingContent />
    </Suspense>
  )
}
