import { DynamicHeading, RectangleButton } from "@/src/components"
import React from "react"
import styles from "./page.module.scss"
import generateMetaData from "@/src/common/utils/metaData"
import { Metadata } from "next"
import { ctaButtonData } from "./data"
export const metadata: Metadata = generateMetaData({
  title: "EnKash Policies: Privacy, Security, Refunds & Compliance",
  description:
    "Explore EnKash’s official policies, like privacy, terms of service, refunds, and compliance. Built on transparency and trust to ensure secure and seamless experiences.",
  alternates: {
    canonical: `${process.env.URL}/policies/`,
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
