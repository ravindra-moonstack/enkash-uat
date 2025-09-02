import { DynamicHeading, RectangleButton } from "@/src/components"
import React from "react"
import styles from "./page.module.scss"
import generateMetaData from "@/src/common/utils/metaData"
import { Metadata } from "next"
import { ctaButtonData } from "./data"
export const metadata: Metadata = generateMetaData({
  title: "Grievance and Redressal Policy: EnKash",
  description:
    "Learn how EnKash addresses complaints with a fair, timely, and transparent resolution process.",
  alternates: {
    canonical: `${process.env.URL}/policies/grievance-policy`,
  },
})

const GrievancePolicy = () => {
  return (
    <div className={styles.policy}>
      <div className="max-w-auto">
        <div className={styles.policyBox}>
          <div className={styles.policyBoxTitle}>
            <DynamicHeading
              content={[
                {
                  title: "List of EnKash Policies",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h4"
              className="f-5 text-center"
            />
          </div>
        </div>
        <div className={styles.policyBox}>
          <div className={`${styles.ctaButtonSection}`}>
            {ctaButtonData.map((item, index) => (
              <div className={`${styles.ctaButtonBox}`} key={index}>
                <RectangleButton {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrievancePolicy
