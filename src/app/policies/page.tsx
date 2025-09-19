import React from "react"
import { Metadata } from "next"

import styles from "./page.module.scss"
import generateMetaData from "@/src/utils/metaData"
import { ctaButtonData } from "./data"

import DynamicHeading from "@/src/components/dynamic-heading"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Policies: Privacy, Security, Refunds & Compliance",
  description:
    "Explore EnKash’s official policies, like privacy, terms of service, refunds, and compliance. Built on transparency and trust to ensure secure and seamless experiences.",
  alternates: {
    canonical: `${process.env.URL}/policies/`,
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
                  title: "List of EnKash Policies",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h1"
              className="f-5 text-center fs-4 fs-md-5"
            />
          </div>
        </div>
        <div className={styles.policyBox}>
          <ul>
            {ctaButtonData.map((item, index) => (
              <li key={index}>
                <DynamicHeading
                  content={[
                    {
                      title: item.title,
                      color: "color-black",
                      link: item.url,
                    },
                  ]}
                  headingTag="p"
                  className="f-5"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GrievancePolicy
