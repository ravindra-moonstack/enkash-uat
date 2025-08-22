import React from "react"
import styles from "./page.module.scss"
import BankSolutions from "@/components/partnerships/BankSolutions"
import {
  productsData,
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
  containerScreen,
  participantBg,
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


const partnershipsPage = (): React.JSX.Element => {
  return (
    <div className={`color-white  `}>
      <BpHeroSection
        backgroundImage={containerScreen.src}
        breadcrumbs={{
          items: [
            { name: "Home", url: "/" },
            { name: "Partnerships", url: "/partnerships" },
            { name: "Co-branded Products", url: "/co-branded-card-partners" },
          ],
          linkColor: "white",
        }}
        mainHeading={[
          { title: "Co-branded Products", color: " underline" },
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
          description="If you are a startup owner, an influencer and an enterprise, or an employer, these co-branded products have been designed for you."
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
        />
      </div>
    </div>
  )
}
export default partnershipsPage
