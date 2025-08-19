"use client"
import React, { useState } from "react"
import styles from "./page.module.scss"
import { payment, platform, prepaid } from "."
import PoliciesCard from "@/components/policies-card/policies-card"
import { DynamicHeading } from "@/components"

const tabs = [{ key: "payments" }, { key: "prepaid" }, { key: "platform" }]

const Page = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  return (
    <div className={styles.policy}>
      <div className="max-w-auto">
        <div className={styles.policyBox}>
          <div className={styles.policyBoxTitle}>
            <DynamicHeading
              content={[
                {
                  title: "Select from the below to read the grievance policy",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h5"
              className="f-5 text-center"
            />
          </div>
          <div className="row">
            {tabs.map((tab) => (
              <div key={tab.key} className="col-md-4 col-12">
                <div
                  className={`${styles.tab} ${
                    activeTab === tab.key ? styles.activeTab : ""
                  }`}
                />
              </div>
            ))}
          </div>

          {/* CARDS */}
          <div className={`${styles.cardList} row`}>
            <div className="col-md-4 col-12">
              <div
                onMouseEnter={() => setActiveTab("payments")}
                onMouseLeave={() => setActiveTab(null)}
              >
                <PoliciesCard
                  description="Quickly resolve payment issues with our clear, compliant grievance process."
                  titleHtml="Payments"
                  cardImage={payment}
                  buttonUrl="/policies/payments/grievance-policy"
                />
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div
                onMouseEnter={() => setActiveTab("prepaid")}
                onMouseLeave={() => setActiveTab(null)}
              >
                <PoliciesCard
                  description="Resolve prepaid card disputes promptly with our transparent escalation process."
                  titleHtml="Prepaid Program"
                  cardImage={prepaid}
                  buttonUrl="/policies/prepaid-program/grievance-policy"
                />
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div
                onMouseEnter={() => setActiveTab("platform")}
                onMouseLeave={() => setActiveTab(null)}
              >
                <PoliciesCard
                  description="Address platform concerns swiftly through our structured grievance resolution system."
                  titleHtml="Platform"
                  cardImage={platform}
                  buttonUrl="/policies/platform/grievance-policy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
