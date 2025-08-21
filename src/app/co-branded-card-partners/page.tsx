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
import {
  coBrandImage,
  containerScreen,
  GalaxyTabImage,
  participantBg,
  Purchasecard,
} from "."
import { blueArrow } from "@/components/all-in-one-policy"
import ProductsSection from "@/components/ourProductsSection"
import { Metadata } from "next"
import generateMetaData from "@/common/utils/metaData"
export const metadata: Metadata = generateMetaData({
  title: "Co-Branded Card Partnership: Power Your Brand with Smart Cards",
  description:
    "Collaborate with EnKash to launch co-branded cards tailored for your customers. Unlock new revenue streams, boost brand engagement, and deliver seamless payment experiences.",
  alternates: {
    canonical: "https://www.enkash.com/co-branded-card-partners/",
  },
})

const BankSolutionSubHeading = {
  content: [
    {
      title:
        "If you are a startup owner, an influencer and an enterprise, or an employer, these co-branded products have been designed for you.",
      color: "color-black f-2",
    },
  ],
  headingTag: "h5",
  className: "f-3 mb-4 mb-md-5",
}
const productsData = [
  {
    id: 1,
    title: "Corporate Expense Cards",
    description:
      "Give your teams the freedom to spend with the control you need.",
    image: coBrandImage.src,
    alt: "Corporate Expense Cards",
    linkText: "Become a Partner",
    linkUrl: "#",
    button: {
      connectUrl: "/contact",
      connectText: "Become a Partner",
      blueArrow: blueArrow.src,
    },
    align: "flex-start",
  },
  {
    id: 2,
    title: "Gift/Reward Cards",
    description:
      "Brand your gift cards, load them as per your defined budget, and gift them to employees.",
    image: GalaxyTabImage.src,
    alt: "Gift/Reward Cards",
    linkText: "Connect With Us",
    linkUrl: "#",
    button: {
      connectUrl: "/contact",
      connectText: "Become a Partner",
      blueArrow: blueArrow.src,
    },
    align: "flex-start",
  },
  {
    id: 3,
    title: "Marketplace/Vendor Cards ",
    description: "Keep your users coming back with a card they’ll love to use.",
    image: Purchasecard.src,
    alt: "Marketplace/Vendor Cards",
    linkText: "Connect With Us",
    linkUrl: "#",
    button: {
      connectUrl: "/contact",
      connectText: "Become a Partner",
      blueArrow: blueArrow.src,
    },
    align: "flex-start",
  },
]
const partnershipsPage = (): React.JSX.Element => {
  return (
    <div className={`color-white  `}>
      <BpHeroSection
        backgroundImage={containerScreen.src}
        breadcrumbs={{
          items: [
            { name: "Home", url: "/" },
            { name: "Partnerships", url: "/partnerships" },
            {
              name: "Affiliate Program - Co-branded Cards & Virtual Wallets",
              url: "/co-branded-card-partners",
            },
          ],
          linkColor: "white",
        }}
        mainHeading={[
          {
            title:
              "Affiliate Program - Co-branded Products — co-branded cards and virtual wallets ",
            color: "color-white underline",
          },
        ]}
        subHeading={[
          {
            title: "Grow your business with one smart transaction at a time.",
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
            { title: "Explore ", theme: "blue", url: "/affiliate-programs" },
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
      <ProductsSection
        sectionTitle="Types of Co-branded Cards You Can Launch"
        products={productsData}
      />
      <div className={`${styles.cta_section}`}>
        <BottomCtaSection
          headingPart1="The Smartest Way to"
          headingPart2="Co-Brand Your Card"
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
