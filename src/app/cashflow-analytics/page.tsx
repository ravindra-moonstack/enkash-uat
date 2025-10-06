import { Metadata } from "next"

//data
import { cards, cardsData, managementCards, policies } from "./data"
import faqData from "./faq-data"

//components
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Get Real-time Cashflow Analysis for Collected Payment",
  description:
    "Unlock better financial decisions with EnKash's Cashflow Analytics. Get real-time visibility, track inflows & outflows, and optimize working capital with smart insights.",
  alternates: {
    canonical: `${process.env.URL}/cashflow-analytics/`,
  },
})
const salesUrl = getSalesUrl("/cashflow-analytics")

const CashflowAnalytics = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white `}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Collect Payments",
            url: "products/collect-payments",
          },
          {
            name: "Cashflow Analytics",
            url: "/cashflow-analytics",
          },
        ]}
        subtitle={{
          text: "Cashflow Analytics",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Unlock deep insights into your finances with Cashflow Analytics",
            color: "color-black",
          },
        ]}
        description={{
          text: "Get a clear, real-time view of your incoming and outgoing cash to make smarter, faster financial decisions.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Forecast, Plan, & Grow with Confidence"
        cards={cards}
      />

      <StepsSection
        heading={[
          {
            text: "How to Set Up ",
            colorClass: "color-black",
          },
          {
            text: "Cashflow Analytics ",
            colorClass: "color-equity-blue",
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
            title: "Data Backed Decisions ",
            color: "color-equity-blue",
          },
          {
            title: "For Your Business ",
            color: "color-black",
          },
        ]}
        items={policies}
        buttonUrl="salesUrl"
      />

      <CtaSection
        title={"Leverage Cashflow Insights to Grow, Scale, & Stay Ahead"}
        buttonText={"Get Started Today"}
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other collection products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCards}
      />
    </div>
  )
}

export default CashflowAnalytics
