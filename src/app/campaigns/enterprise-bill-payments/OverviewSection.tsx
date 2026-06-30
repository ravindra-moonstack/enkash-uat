"use client"
import React from "react"
import Image from "next/image"
import DynamicHeading from "@/components/dynamic-heading"
import dynamic from "next/dynamic"
import styles from "./page.module.scss"
import { GraphiteImage } from "./img"

const CommanButton = dynamic(
  () => import("@/src/components/buttons/index").then((mod) => mod.default),
  { ssr: true }
)

const OverviewSection = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <section className={`${styles.section} ${styles.sectBlue}`}>
      <div className={"max-w-auto"}>
        <div className={styles.overviewCard}>
          <div className={styles.overviewCopy}>
            <DynamicHeading
              content={[
                { title: "One dashboard for every biller, every location." },
              ]}
              headingTag="h2"
              className={`${styles.h2} h2-40 f-4`}
            />
            <DynamicHeading
              content={[
                {
                  title:
                    "EnKash connects to 20,000+ billers across India through Bharat Connect. Every utility type, every location, one place.",
                },
              ]}
              headingTag="p"
              className={styles.lead}
            />
            <CommanButton
              title="Make the switch"
              arrow
              theme="outline-blue"
              url={isMobile ? "#form-section-mobile" : "#form-section"}
            />
          </div>
          <div className={styles.overviewVisual}>
            <Image
              src={GraphiteImage}
              alt="Dashboard Overview"
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OverviewSection
