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
import { ThirdfaqData } from "./faq-data"

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
  title: "Partner with Us: Bank Partnerships",
  description:
    "Collaborate with EnKash to offer innovative payment, card, and spend management solutions. Partner with us to enhance customer experience and drive digital banking growth.",
  alternates: {
    canonical: `${process.env.URL}/bank-partnerships`,
  },
})

const PartnershipsPage = (): React.JSX.Element => {
  //
  console.log("heloooo")
  return (
    
    <div className={`color-white  `}>
      <BpHeroSection
        backgroundImage={containerScreen.src}
        breadcrumbs={{
          items: [
            { name: "Home", url: "/" },
            { name: "Partnerships", url: "/partnerships" },
            { name: "Banks", url: "/bank-partnerships" },
          ],
        }}
        mainHeading={[
          { title: "Partnership Program - for Banks", color: "underline" },
        ]}
        subHeading={[
          { title: "", color: "color-black f-3 d-block" },
          {
            title: "Empower your customers with seamless banking solutions",
            color: "color-black",
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
        heading={[{ title: "Why Partner with Us?", color: "color-blue" }]}
        description="Partner with an all-in-one payments platform to deliver modern banking experiences across expense management, corporate cards, and vendor payments."
        buttons={[
          {
            title: "Explore Bank Partnerships",
            theme: "blue",
            url: "#partnership-form",
          },
        ]}
        slideData={slideData}
      />

      <div className={`${styles.features_section}`}>
        <BecomePartnerSteps
          heading={headingData}
          steps={stepsData}
          button={{
            connectText: "Become a Partner",
            connectUrl: "#partnership-form",
          }}
        />
      </div>

      <div className={`${styles.features_section}`}>
        <BottomCtaSection
          headingPart1="Unlock New Revenue Opportunities"
          headingPart2="by Partnering With EnKash"
          buttonHref="#partnership-form"
        />
      </div>
      <FaqSection faqData={ThirdfaqData} />
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

export default PartnershipsPage
