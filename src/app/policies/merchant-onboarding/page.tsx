"use client"
import React from "react"

import styles from "./page.module.scss"
import { payment } from "./img"

// components
import DynamicHeading from "@/src/components/dynamic-heading"
import TabPoliciesWrapper from "@/src/components/tab-policies-wrapper"

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
