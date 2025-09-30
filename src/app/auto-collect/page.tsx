// data
import { allInOnePolicies, cards, cardsData, managementCards } from "./data"
import faqData from "./faq-data"

//components
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import OtherProducts from "@/src/components/sections/other-products"

// helpers
import { paymentSummary, mealCardImage } from "./img"
import { Metadata } from "next"

// utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"


export const metadata: Metadata = generateMetaData({
  title: "Auto Collect: Automate Incoming Payments with Virtual Accounts",
  description:
    "Automate receivables with EnKash Auto Collect. Use virtual accounts and UPI IDs to track, reconcile, and manage payments faster with zero manual effort.",
  alternates: {
    canonical: `${process.env.URL}/auto-collect/`,
  },
})
const salesUrl = getSalesUrl("/auto-collect")

const AutoCollect = (): React.JSX.Element => {
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
            name: "Auto Collect",
            url: "/auto-collect",
          },
        ]}
        subtitle={{
          text: "Auto Collect",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Automatic Payment Collection Simplified with EnKash Auto Collect",
            color: "color-black",
          },
        ]}
        description={{
          text: "Automate reconciliation for all incoming NEFT, RTGS, IMPS, and UPI payments using EnKash Customer Identifiers and Virtual UPI IDs. Receive real-time alerts and enjoy seamless multi-bank support.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />
      <CoreBenefitsSection
        sectionTitle="Automating Payment Collection"
        cards={cards}
      />

      <StepsSection
        heading={[
          {
            text: "How EnKash",
            colorClass: "color-black",
          },
          {
            text: " Auto Collect ",
            colorClass: "color-equity-blue",
          },
          {
            text: "Works",
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
            title: "Best ",
            color: "color-black",
          },
          {
            title: "Automatic Payment Collection ",
            color: "color-equity-blue",
          },
          {
            title: "Solution for Businesses",
            color: "color-black",
          },
        ]}
        items={allInOnePolicies}
        buttonUrl="salesUrl"
      />
      
      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other payment products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCards}
      />
    </div>
  )
}

export default AutoCollect
