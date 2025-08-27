import React from "react"
import { Metadata } from "next"
import styles from "./page.module.scss"
import {
  BankSolutionHeading,
  bankSolutions,
  headingData,
  slideData,
  stepsData,
} from "./data"
import faqData from "./faq-data"
import {
  BecomePartnerSteps,
  BpHeroSection,
  PartnerShipForm,
  BankSolutions,
  PartnershipSection,
  BottomCtaSection,
  FaqSection,
} from "@/components"
import { containerScreen, participantBg } from "."
import { blueArrow } from "@/components/all-in-one-policy"
import generateMetaData from "@/common/utils/metaData"

import BankAffiliatePartnershipForm from "@/components/bankAffiliatePartnershipForm"

export const metadata: Metadata = generateMetaData({
  title: " Join EnKash Bharat Connect Partnership Program",
  description:
    "Join EnKash’s Bharat Connect Partnership to digitize financial operations for businesses in Tier 2 & 3 cities. Drive fintech adoption and enable smart payment solutions.",
  alternates: {
    canonical: `${process.env.URL}/bharat-connect-partnership/`,
  },
})

const partnershipsPage = (): React.JSX.Element => {
  return (
    <div className={`color-white  `}>
      <BpHeroSection
        breadcrumbs={{
          items: [
            { name: "Home", url: "/" },
            { name: "Partnerships", url: "/partnerships" },
            { name: "Bharat Connect ", url: "/bharat-connect-partnership" },
          ],
          linkColor: "white",
        }}
        backgroundImage={containerScreen.src}
        mainHeading={[
          {
            title: "Partnerships - Bharat Connect ",
            color: "underline",
          },
        ]}
        subHeading={[
          {
            title: "Bharat Connect: ",
            color: "color-white ",
          },
          {
            title: "Powering Faster, Smarter Business Payments",
            color: "color-white f-5",
          },
        ]}
        button={{
          title: "Become a Partner",
          theme: "blue",
          url: "#partnership-form",
        }}
      />
      <div className={`${styles.boxContainer}`}>
        <BankSolutions
          solutions={bankSolutions}
          heading={BankSolutionHeading}
          button={{
            connectText: "Become a Partner",
            connectUrl: "#partnership-form",
            blueArrow: blueArrow.src,
          }}
        />
      </div>

      <div className={`${styles.second_row}`}>
        <PartnershipSection
          backgroundImage={participantBg.src}
          heading={[{ title: "Why Partner with Us?", color: "color-white" }]}
          description="If you're in product & tech, business & partnerships, or finance, Bharat Connect will make your work smarter, faster, and hassle-free."
          buttons={[
            { title: "Explore ", theme: "blue", url: "#partnership-form" },
          ]}
          slideData={slideData}
        />
      </div>
      <div className={`${styles.third_row} ${styles.steps_container}`}>
        <BecomePartnerSteps
          heading={headingData}
          steps={stepsData}
          button={{
            connectText: "Become a Partner",
            connectUrl: "#partnership-form",
            blueArrow: blueArrow.src,
          }}
        />
      </div>
      <div className={`${styles.cta_section}`}>
        <BottomCtaSection
          headingPart1="Streamline Business Processes by"
          headingPart2="Partnering with Bharat Connect  
"
          buttonHref="#partnership-form"
        />
      </div>
      <FaqSection faqData={faqData} />
      <div id="partnership-form">
        <PartnerShipForm
          heading={[
            { title: "Ready to ", color: "color-grey-200" },
            { title: "Earn More and Grow Faster ", color: "color-equity-blue" },
            { title: "with EnKash?", color: "color-grey-200" },
          ]}
          features={[
            { id: 1, text: "Industry-best earnings" },
            { id: 2, text: "Fast activation for your clients" },
            { id: 3, text: "Dedicated support for accelerated growth" },
          ]}
          formComponent={<BankAffiliatePartnershipForm />}
        />
      </div>
    </div>
  )
}
export default partnershipsPage
