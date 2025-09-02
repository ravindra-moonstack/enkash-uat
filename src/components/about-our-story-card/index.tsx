import React from "react"
import Image from "next/image"

import styles from "./style.module.scss"
import DynamicHeading from "../dynamic-heading/dynamic-heading"

interface OurStoryCardProps {
  icon: string
}

const OurStoryCard: React.FC<OurStoryCardProps> = ({ icon }) => {
  //

  return (
    <div className={`${styles.AboutOurStoryCard}`}>
      {/* Small title */}
      <Image src={icon} alt={""}></Image>
      <p className={`${styles.subTitle} mb-2 mt-3 f-5`}>Our Story</p>

      <div className={`${styles.title} mb-3`}>
        <DynamicHeading
          content={[
            {
              title: " From Friction to Freedom",
              color: "color-black",
            },
          ]}
          headingTag="h5"
          className="f-5 "
        />
      </div>

      {/* Paragraphs */}
      <div className={`${styles.content}`}>
        <p>
          It started with a simple question: <br />
          <em>
            Why do businesses still run finance like it’s 2005 – with
            spreadsheets, emails, and endless manual work?
          </em>
        </p>

        <p>
          In 2018, fintech veterans Hemant Vishnoi, Naveen Bindal, and Yadvendra
          Tyagi set out to change that. Armed with years of experience across
          banking and digital payments, they launched EnKash with a bold mission
          to democratize enterprise-grade financial infrastructure for every
          business.
        </p>

        <p>
          What began as a smart payable offering via corporate cards quickly
          evolved into a robust, all-in-one CXOs platform covering everything
          from payables and receivables to expense management, corporate cards,
          and now, India’s first SMB-focused payment gateway. The journey just
          became even more exciting with the RBI granting final authorizations
          for both our Payment Aggregator (PA-PG) and Prepaid Payment Instrument
          (PPI) licenses.
        </p>
      </div>
    </div>
  )
}

export default OurStoryCard
