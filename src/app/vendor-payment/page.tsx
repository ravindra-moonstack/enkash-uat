import { Metadata } from "next"

//data
import { allInOnePolicyData, allProductSections, cardsData } from "./data"
import faqData from "./faq-data"

//helpers
import { paymentSummary, mealCardImage } from "./img"

//components
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import SliderSection from "@/src/components/sections/slider-section"
import CtaSection from "@/src/components/sections/cta-section"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Automate and Track your Vendor Payments ",
  description:
    "Streamline vendor payouts with EnKash. Automate payments, track due dates, and simplify reconciliation—save time and reduce errors in your accounts payable.",
  alternates: {
    canonical: `${process.env.URL}/vendor-payment`,
  },
})

const salesUrl = getSalesUrl("/vendor-payment")
const mergedCards = allProductSections.flatMap((section) => section.items)

const VendorPayment = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white `}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Make Payments",
            url: "/products/make-payments",
          },
          {
            name: "Vendor Payment",
            url: "/vendor-payment",
          },
        ]}
        subtitle={{
          text: "Vendor Payment",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Faster, Smarter Vendor Payments with EnKash",
            color: "color-black",
          },
        ]}
        description={{
          text: "Transform your vendor payments with a single click and get complete control with real-time updates.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="506px"
      />

      <StepsSection
        heading={[
          {
            text: "Approve, Pay, reconcile -",
            colorClass: "color-equity-blue",
          },
          {
            text: " Vendor Payments in 3 Steps",
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
            title: "Your End-to-End Solution for Vendor Payments",
            color: "color-black",
          },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

      <SliderSection
        headingContent={[
          {
            title: "Smart Features for ",
            color: "color-black",
          },
          {
            title: "Stress-Free ",
            color: "color-equity-blue",
          },
          {
            title: "Vendor Payments",
            color: "color-black",
          },
        ]}
        productsData={mergedCards}
        productsTitle="All Features"
        productsSubtitle="Combine all use cases"
      />

      <CtaSection
        title={"Take Control of Your Vendor Payments Today"}
        buttonText={"Get Started "}
      />

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default VendorPayment
