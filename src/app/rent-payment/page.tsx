import { Metadata } from "next"
import dynamic from "next/dynamic"

// data
import { allInOnePolicyData, allProductSections, cardsData } from "./data"
import faqData from "./faq-data"

// components
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"

// helpers
import { paymentSummary, mealCardImage } from "./img"

// utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import BlogSection from "@/src/components/sections/blog-section"

const SliderSection = dynamic(() => import("@/src/components/sections/slider-section"))

export const metadata: Metadata = generateMetaData({
  title: "Rent Payments: Pay Office & Property Rent Digitally",
  description:
    "Pay office, warehouse, or commercial rent digitally via EnKash. Use credit cards or bank transfers, track due dates, and automate monthly rent payments easily.",
  alternates: {
    canonical: `${process.env.URL}/rent-payment`,
  },
})
const salesUrl = getSalesUrl("/rent-payment")

const mergedCards = allProductSections.flatMap((section) => section.items)

const RentPayment = (): React.JSX.Element => {
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
            name: "Rent Payments",
            url: "/rent-payment",
          },
        ]}
        subtitle={{
          text: "Rent Payments",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Hassle-Free Rent Payments with EnKash ",
            color: "color-black",
          },
        ]}
        description={{
          text: "Say goodbye to delays and manual effort. EnKash accelerates rent payments, ensuring they are fast, secure, and convenient.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="506px"
      />

      <StepsSection
        heading={[
          {
            text: "How To Setup",
            colorClass: "color-black",
          },
          {
            text: " Rent Payments ",
            colorClass: "color-equity-blue",
          },
          {
            text: "Automation",
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
            title: "Put an End to Rental Payment Woes with EnKash",
            color: "color-black",
          },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

      <SliderSection
        headingContent={[
          {
            title: "One Platform ",
            color: "color-equity-blue",
          },
          {
            title: "for All Your Rental Payment Needs",
            color: "color-black",
          },
        ]}
        headingTag="h2"
        productsData={mergedCards}
        productsTitle="All Features"
        productsSubtitle="Combine all use cases"
      />

      <CtaSection
        title={"Ready to Redefine your Rent Payments?"}
        buttonText={"Get Started "}
      />
      <BlogSection
        heading={[
          {
            title: "Related  ",
            color: "color-black ",
          },

          {
            title: " Resources",
            color: "color-black f-4",
          },
        ]}
        cards={[7225, 12940, 13297]}
      />
      <FaqSection faqData={faqData} />
    </div>
  )
}

export default RentPayment
