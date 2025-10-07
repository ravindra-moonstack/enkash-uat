import { Metadata } from "next"

//data
import { allInOnePolicyData, benifitsData, cardsData } from "./data"
import faqData from "./faq-data"

//components

import FaqSection from "@/components/faq-section"

//helpers
import {
  paymentSummary,
  mealCardImage,
} from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"

export const metadata: Metadata = generateMetaData({
  title: "Account Payable Analytics: Gain Real-Time Insights on Payables",
  description:
    "Track, analyze, and optimize your accounts payable with EnKash Payable Analytics. Improve cash flow planning, spot delays, and make informed financial decisions.",
  alternates: {
    canonical: `${process.env.URL}/payable-analytics/`,
  },
})
const salesUrl = getSalesUrl("/payable-analytics")

const PayableAnalytics = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Make Payments",
            url: "/products/make-payments",
          },
          {
            name: "Payable Analytics",
            url: "/payable-analytics",
          },
        ]}
        subtitle={{
          text: "Payable Analytics ",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Smarter business decisions start with advanced AI-powered Payable Analytics",
            color: "color-black",
          },
        ]}
        description={{
          text: "Get complete visibility into where your money goes. Dig deep into spend patterns and reduce leakage to make data-backed decisions for business growth.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Turn Data Into Insights For Business Growth"
        cards={benifitsData}
      />

      <StepsSection
        heading={[
          {
            text: "How to Set Up Payable Analytics ",
            colorClass: "color-black",
          },
        ]}
        steps={cardsData}
        button={{
          title: "Get started",
          theme: "outline-blue",
        }}
        image={{
          src: mealCardImage,
          alt: "card background",
        }}
      />

      <UseCaseSection
        heading={[
          {
            title: "AI-Backed Data Decisions For Your Business ",
            color: "color-black",
          },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

      <CtaSection
        title={"Harness Data to Grow, Scale, and Outperform Competition"}
        buttonText={"Get Started "}
      />

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default PayableAnalytics
