import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"

import { tabs, cards } from "./data"

import DynamicHeading from "@/src/components/dynamic-heading"
import TabPoliciesWrapper from "@/src/components/tab-policies-wrapper"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Terms and Conditions: EnKash",
  description:
    "Review our policies governing the use of EnKash products and services.",
  alternates: {
    canonical: `${process.env.URL}/policies/tnc`,
  },
})

const TermsAndConditions = (): React.JSX.Element => {
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
