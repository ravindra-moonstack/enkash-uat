import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"

import { cards, tabs } from "./data"

// components
import DynamicHeading from "@/src/components/dynamic-heading"
import TabPoliciesWrapper from "@/src/components/tab-policies-wrapper"

import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Grievance and Redressal Policy: EnKash",
  description:
    "Learn how EnKash addresses complaints with a fair, timely, and transparent resolution process.",
  alternates: {
    canonical: `${process.env.URL}/policies/grievance-policy`,
  },
})

const GrievancePolicy = (): React.JSX.Element => {
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
                    "Select from the below to read the Grievance and Redressal policy",
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

export default GrievancePolicy
