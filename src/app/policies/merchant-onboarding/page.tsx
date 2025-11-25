import React from "react"
import styles from "./page.module.scss"
import { payment } from "./img"

// components
import DynamicHeading from "@/src/components/dynamic-heading"
import TabPoliciesWrapper from "@/src/components/tab-policies-wrapper"
import generateMetaData from "@/src/utils/metaData"
import { Metadata } from "next"

export const metadata: Metadata = generateMetaData({
  title: "Merchant Onboarding Policy: EnKash",
  description:
    "Understand the secure, compliant steps we follow to onboard merchants with ease.",
  alternates: {
    canonical: `${process.env.URL}/policies/merchant-onboarding`,
  },
})
const tabs = [{ key: "payments" }]

const cards = [
  {
    key: "payments",
    description:
      "Seamlessly onboard as a merchant with our secure, compliant, and transparent process.",
    titleHtml: "Payments",
    cardImage: payment,
    buttonUrl: "/policies/payments/merchant-onboarding",
  },
]

const MerchantOnboarding = (): React.JSX.Element => {
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
                    "Select from the below to read the merchant onboarding policy",
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

export default MerchantOnboarding
