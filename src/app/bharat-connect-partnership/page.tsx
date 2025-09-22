import React from "react"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  BankSolutionHeading,
  bankSolutions,
  headingData,
  slideData,
  stepsData,
} from "./data"
import faqData from "./faq-data"

//components
import BpHeroSection from "@/src/components/bp-hero-section"
import BankSolutions from "@/src/components/partnerships/BankSolutions"
import PartnershipSection from "@/src/components/partner-ship-slider/PartnershipSection"
import BecomePartnerSteps from "@/src/components/becomepartner"
import BottomCtaSection from "@/src/components/bottom-cta-section"
import FaqSection from "@/src/components/faq-section"
import PartnerShipForm from "@/src/components/forms/partnership-form"
import BankAffiliatePartnershipForm from "@/src/components/forms/bank-affiliate-partnership"

//helpers
import { containerScreen, participantBg } from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: " Join EnKash Bharat Connect Partnership Program",
  description:
    "Join EnKash's Bharat Connect Partnership to digitize financial operations for businesses in Tier 2 & 3 cities. Drive fintech adoption and enable smart payment solutions.",
  alternates: {
    canonical: `${process.env.URL}/bharat-connect-partnership/`,
  },
})

const partnershipsPage = (): React.JSX.Element => {
  //

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
          }}
        />
      </div>

      <PartnershipSection
        backgroundImage={participantBg.src}
        heading={[{ title: "Why Partner with Us?", color: "color-white" }]}
        description="If you're in product & tech, business & partnerships, or finance, Bharat Connect will make your work smarter, faster, and hassle-free."
        slideData={slideData}
      />

      <div className={`${styles.third_row} ${styles.steps_container}`}>
        <BecomePartnerSteps
          heading={headingData}
          steps={stepsData}
          button={{
            connectText: "Become a Partner",
            connectUrl: "#partnership-form",
          }}
        />
      </div>
      <div className={`${styles.cta_section}`}>
        <BottomCtaSection
          headingPart1="Streamline Business Processes by"
          headingPart2="Partnering with Bharat Connect"
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
