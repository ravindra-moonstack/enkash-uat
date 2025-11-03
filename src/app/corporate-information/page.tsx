import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"
import { infoIcon } from "./img"

// components
import DynamicHeading from "@/components/dynamic-heading"
import CorporateCard from "@/components/corporate-card"

import generateMetaData from "@/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Corporate Information",
  description:
    "EnKash is India’s leading spend management platform for payments, cards, expenses & rewards—trusted by 5K+ businesses & backed by $23M.",
  alternates: {
    canonical: `${process.env.URL}/corporate-information`,
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
              headingTag="h1"
              className="f-5 text-center fs-4 fs-md-5"
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
