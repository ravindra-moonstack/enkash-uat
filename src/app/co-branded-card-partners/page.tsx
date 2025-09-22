import React from "react"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  productsData,
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
import ProductsSection from "@/src/components/our-products-section"
import BottomCtaSection from "@/src/components/bottom-cta-section"
import FaqSection from "@/src/components/faq-section"
import PartnerShipForm from "@/src/components/forms/partnership-form"
import BankAffiliatePartnershipForm from "@/src/components/forms/bank-affiliate-partnership"

//helpers
import { containerScreen, participantBg } from "./img"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Co-Branded Card Partnership: Power Your Brand with Smart Cards",
  description:
    "Collaborate with EnKash to launch co-branded cards tailored for your customers. Unlock new revenue streams, boost brand engagement, and deliver seamless payment experiences.",
  alternates: {
    canonical: `${process.env.URL}/co-branded-card-partners/`,
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
            { name: "Partnerships", url: "#" },
            { name: "Co-branded Products", url: "/co-branded-card-partners" },
          ],
          linkColor: "white",
        }}
        mainHeading={[{ title: "Co-branded Products", color: " underline" }]}
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
        customCSS={{ backgroundPosition: "top center" }}
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
        description="If you are a startup owner, an influencer and an enterprise, or an employer, these co-branded products have been designed for you."
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
      <ProductsSection
        sectionTitle="Types of Co-branded Cards You Can Launch"
        products={productsData}
      />
      <div className={`${styles.cta_section}`}>
        <BottomCtaSection
          headingPart1="The Smartest Way to"
          headingPart2="Co-Brand Your Card"
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
