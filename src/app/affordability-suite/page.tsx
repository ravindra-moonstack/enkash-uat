import { Metadata } from "next"

// data
import { allInOnePolicyData, cardsData, managementCardsData } from "./data"
import faqData from "./faq-data"

// component
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/sections/cta-section"
import OtherProducts from "@/components/sections/other-products"
import StepsSection from "@/components/steps-section"
import UseCaseSection from "@/components/sections/use-case-section"
import HeroSection from "@/components/sections/hero-section"

// helpers
import { paymentSummary, mealCardImage } from "./img"
import { getSalesUrl } from "@/utils/getSalesUrl"
import generateMetaData from "@/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title:
    "EnKash Affordability Suite | Boost Conversions with EMI, Pay Later & More",
  description:
    "Increase sales with Affordability Suite. Offer EMIs, Pay Later, and flexible payment options to enhance customer experience and drive higher conversions.",
  alternates: {
    canonical: `${process.env.URL}/affordability-suite`,
  },
})

const salesUrl = getSalesUrl("/affordability-suite")

const AffordabilitySuite = (): React.JSX.Element => {
  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Collect Payments", url: "/products/collect-payments" },
          { name: "Affordability Suite", url: "/affordability-suite" },
        ]}
        subtitle={{
          text: "Affordability Suite",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Convert browsers into buyers with the Affordability Suite",
          },
        ]}
        description={{
          text: "Boost customer conversion with EMI, PayLater, & other offers on your product pages.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="506px"
      />

      <StepsSection
        heading={[
          {
            text: "How Affordability Suite Works",
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
          { title: "Effortless Conversions Start Here", color: "color-black" },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />
      <CtaSection
        title={"Turn Interest Into Action"}
        buttonText={"Get Started Today"}
      />

      <FaqSection faqData={faqData} />
      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other payment products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCardsData}
      />
    </div>
  )
}

export default AffordabilitySuite
