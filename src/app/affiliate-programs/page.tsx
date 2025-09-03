import React from "react"
import styles from "./page.module.scss"

// data
import {
  BankSolutionHeading,
  bankSolutions,
  headingData,
  productsData,
  slideData,
  stepsData,
} from "./data"
import faqData from "./faq-data"

// component
import {
  BecomePartnerSteps,
  BpHeroSection,
  BankAffiliatePartnershipForm,
  BankSolutions,
  PartnershipSection,
  BottomCtaSection,
  FaqSection,
  PartnerShipForm,
  ProductsSection,
} from "@/src/components"

// helpers
import { containerScreen, participantBg } from "."
import { blueArrow } from "@/src/components/all-in-one-policy"

// utils
import generateMetaData from "@/src/utils/metaData"
import { Metadata } from "next"

export const metadata: Metadata = generateMetaData({
  title: "Join EnKash Affiliate Program | Earn by Referring Businesses",
  description:
    "Partner with EnKash as an affiliate and earn rewards for every successful business referral. Promote smart spend and payment solutions with India’s leading fintech platform..",
  alternates: {
    canonical: `${process.env.URL}/affiliate-programs/`,
  },
})

const partnershipsPage = (): React.JSX.Element => {
  return (
    <div className={`color-black`}>
      <BpHeroSection
        breadcrumbs={{
          items: [
            { name: "Home", url: "/" },
            { name: "Partnerships", url: "#" },
            { name: "Affiliate Program", url: "/affiliate-programs" },
          ],
        }}
        backgroundImage={containerScreen.src}
        mainHeading={[{ title: "Affiliate Program", color: "underline " }]}
        subHeading={[
          {
            title:
              "Grow with India’s Leading Spend & Payments Management Platform",
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
            blueArrow: blueArrow.src,
          }}
        />
      </div>

      <div className={`${styles.second_row}`}>
        <PartnershipSection
          backgroundImage={participantBg.src}
          heading={[{ title: "Why Partner with Us?", color: "color-white" }]}
          description="Whether you're a startup founder, fintech influencer, enterprise leader, or employer, our affiliate program is tailored to help you unlock brand value and create meaningful financial experiences for your audience."
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

      <ProductsSection sectionTitle="Our Products" products={productsData} />

      <div className={`${styles.cta_section}`}>
        <BottomCtaSection
          headingPart1="Unlock High-Earning Potential"
          headingPart2="With EnKash"
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
