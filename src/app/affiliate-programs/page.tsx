import React from "react"
import styles from "./page.module.scss"
import BankSolutions from "@/components/partnerships/BankSolutions"
import {
  BankSolutionHeading,
  bankSolutions,
  headingData,
  slideData,
  stepsData,
} from "./data"
import PartnershipSection from "@/components/partnerShipSlider/PartnershipSection"
import BottomCtaSection from "@/components/bottomCtaSection/bottomCtaSection"
import FaqSection from "@/components/faqSection/faqSection"
import faqData from "./faq-data"
import PartnerShipForm from "@/components/partnerShip-form"
import { BecomePartnerSteps, BpHeroSection } from "@/components"
import { coBrandImage, containerScreen, GalaxyTabImage, participantBg } from "."
import { blueArrow } from "@/components/all-in-one-policy"
import ProductsSection from "@/components/ourProductsSection"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"
export const metadata: Metadata = generateMetaData({
  title: "Join EnKash Affiliate Program | Earn by Referring Businesses",
  description:
    "Partner with EnKash as an affiliate and earn rewards for every successful business referral. Promote smart spend and payment solutions with India’s leading fintech platform..",
  alternates: {
    canonical: "https://www.enkash.com/affiliate-programs/",
  },
})

const BankSolutionSubHeading = {
  content: [
    {
      title:
        "Whether you're a startup founder, fintech influencer, enterprise leader, or employer, our affiliate program is tailored to help you unlock brand value and create meaningful financial experiences for your audience.",
      color: "color-black f-2",
    },
  ],
  headingTag: "h5",
  className: "f-3 mb-4 mb-md-5",
}
const productsData = [
  {
    id: 1,
    title: "Co-branded Products",
    description:
      "EnKash Co-branded Cards and Virtual Wallets empower businesses with smart, scalable, and fully controlled spending solutions. Our cards offer real-time visibility, customizable limits, and seamless integration with your finance workflows. Simplify your financial operations and gain full control without compromising on flexibility or speed.",
    image: coBrandImage.src,
    alt: "Co-branded Products Illustration",
    linkText: "Become a Partner",
    linkUrl: "#",
    button: {
      connectUrl: "/contact",
      connectText: "Become a Partner",
      blueArrow: blueArrow.src,
    },
  },
  {
    id: 2,
    title: "Payment Gateway",
    description:
      "EnKash Payment Gateway is an advanced solution designed specifically for Indian SMBs and startups. It empowers businesses of all sizes to accept payments seamlessly, securely, and at scale, giving them a fair chance to compete in a rapidly growing digital economy.",
    image: GalaxyTabImage.src,
    alt: "Payment Gateway Dashboard",
    linkText: "Connect With Us",
    linkUrl: "#",
    button: {
      connectUrl: "/contact",
      connectText: "Become a Partner",
      blueArrow: blueArrow.src,
    },
  },
]
const partnershipsPage = (): React.JSX.Element => {
  return (
    <div className={`color-white  `}>
      <BpHeroSection
        breadcrumbs={{
          items: [
            { name: "Home", url: "/" },
            { name: "Partnerships", url: "/partnerships" },
            { name: "Affiliate Program", url: "/affiliate-programs" },
          ],
          linkColor: "white",
        }}
        backgroundImage={containerScreen.src}
        mainHeading={[
          { title: "Affiliate Program", color: "color-white underline" },
        ]}
        subHeading={[
          {
            title:
              "Grow with India’s Leading Spend & Payments Management Platform",
            color: "color-white",
          },
        ]}
        button={{
          title: "Become a Partner",
          theme: "blue",
          url: "/sales/?source=expense_management",
        }}
      />
      <div className={`${styles.boxContainer}`}>
        <BankSolutions
          solutions={bankSolutions}
          heading={BankSolutionHeading}
          subheading={BankSolutionSubHeading}
          button={{
            connectText: "Become a Partner",
            connectUrl: "/contact",
            blueArrow: blueArrow.src,
          }}
        />
      </div>

      <div className={`${styles.second_row}`}>
        <PartnershipSection
          backgroundImage={participantBg.src}
          heading={[{ title: "Why Partner with Us?", color: "color-white" }]}
          description="Whether you're a startup founder, fintech influencer, enterprise leader, or employer, our affiliate program is tailored to help you unlock brand value and create meaningful financial experiences for your audience."
          buttons={[
            {
              title: "Explore Cards",
              theme: "blue",
              url: "/affiliate-programs",
            },
            {
              title: "Explore Payment Gateway",
              theme: "blue",
              url: "/affiliate-programs",
            },
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
            connectUrl: "/contact",
            blueArrow: blueArrow.src,
          }}
        />
      </div>
      <ProductsSection sectionTitle="Our Products" products={productsData} />
      <div className={`${styles.cta_section}`}>
        <BottomCtaSection
          headingPart1="Unlock High-Earning Potential"
          headingPart2="With EnKash"
        />
      </div>
      <FaqSection faqData={faqData} />
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
      />
    </div>
  )
}
export default partnershipsPage
