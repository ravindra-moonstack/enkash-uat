"use client"
import React from "react"
import styles from "./page.module.scss"
import { payment } from "."
import { DynamicHeading, TabPoliciesWrapper } from "@/src/components"

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
const MerchantOnboarding = () => {
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

export default MerchantOnboarding
