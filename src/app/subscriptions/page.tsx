import { Metadata } from "next"

// data
import { allInOnePolicies, cards, cardsData, managementCards } from "./data"
import faqData from "./faq-data"

// components
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

// helpers
import { paymentSummary, mealCardImage } from "./img"

// utils

import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Best Subscription & Recurring Payment Collection Platform",
  description:
    "Manage and automate recurring payments with EnKash Subscriptions. Ideal for SaaS, ed-tech, and memberships—enable auto-debit via UPI, cards & more.",
  alternates: {
    canonical: `${process.env.URL}/subscriptions`,
  },
})
const salesUrl = getSalesUrl("/subscriptions")

const Subscriptions = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Collect Payments",
            url: "products/collect-payments",
          },
          {
            name: "Subscriptions",
            url: "/subscriptions",
          },
        ]}
        subtitle={{
          text: "Subscriptions",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Trusted Subscription Management Software for Growth-oriented Businesses",
            color: "color-black",
          },
        ]}
        description={{
          text: "Keep cash flow for your subscription-based business steady by collecting recurring payments via multiple payment methods like eNACH, autopay, standing instruction on credit & debit cards, etc.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="606px"
      />

      <CoreBenefitsSection
        sectionTitle="Simplify Recurring Payments With Subscriptions"
        cards={cards}
      />

      <StepsSection
        heading={[
          {
            text: "How EnKash",
            colorClass: "color-black",
          },
          {
            text: " Setup Subscriptions ",
            colorClass: "color-equity-blue",
          },
          {
            text: "For Recurring Payments",
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
            title: "EnKash ",
            color: "color-black",
          },
          {
            title: "Subscription Model",
            color: "color-equity-blue",
          },
          {
            title: " Covers It All",
            color: "color-equity-blue",
          },
        ]}
        items={allInOnePolicies}
        buttonUrl={salesUrl}
      />

      <CtaSection
        title={"Recurring Payment Management Made Easy"}
        buttonText={"Get Started Today"}
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          {
            title: "Check out ",
            color: "color-black",
          },
          {
            title: "other collection products",
            color: "color-equity-blue",
          },
          {
            title: " at EnKash",
            color: "color-black",
          },
        ]}
        cards={managementCards}
      />
    </div>
  )
}

export default Subscriptions
