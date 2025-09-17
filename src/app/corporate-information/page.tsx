import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"
import { infoIcon } from "./img"

// components
import DynamicHeading from "@/components/dynamic-heading"
import CorporateCard from "@/components/corporate-card"

import generateMetaData from "@/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Customer Onboarding Policy: EnKash",
  description:
    "Get an overview of our quick, compliant customer onboarding procedure for all services.",
  alternates: {
    canonical: `${process.env.URL}/policies/customer-onboarding`,
  },
})

const CustomerOnboarding = (): React.JSX.Element => {
  //

  return (
    <div className={styles.policy}>
      <div className="max-w-auto">
        <div className={styles.policyBox}>
          <div className={styles.policyBoxTitle}>
            <DynamicHeading
              content={[
                {
                  title: "Corporate ",
                  color: "color-equity-blue",
                },
                {
                  title: "Information",
                  color: "color-black",
                },
              ]}
              headingTag="h4"
              className="f-5 text-center"
            />
          </div>
          {/* Cards */}
          <div className={`${styles.cardList} row`}>
            <div className="col-md-4 col-12">
              <div>
                <CorporateCard
                  description="Annual Report- FY23"
                  cardImage={infoIcon}
                />
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div>
                <CorporateCard
                  description="Annual Report- FY24"
                  cardImage={infoIcon}
                />
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div>
                <CorporateCard
                  description="Annual Report- FY25"
                  cardImage={infoIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerOnboarding
