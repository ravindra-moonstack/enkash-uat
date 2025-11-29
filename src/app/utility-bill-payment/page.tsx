import { Metadata } from "next"

// data
import { allInOnePolicyData, allProductSections, cardsData } from "./data"
import faqData from "./faq-data"

// components
import FaqSection from "@/src/components/faq-section"

// helpers
import { paymentSummary, mealCardImage } from "./img"

// utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import SliderSection from "@/src/components/sections/slider-section"
import CtaSection from "@/src/components/sections/cta-section"

export const metadata: Metadata = generateMetaData({
  title: "Utility Bill Payment: Pay All Business Utility Bills Seamlessly",
  description:
    "Manage and pay utility, vendor, credit card, and GST bills in one place with EnKash. Schedule, track, and automate business bill payments for better control.",
  alternates: {
    canonical: `${process.env.URL}/utility-bill-payment`,
  },
})
const salesUrl = getSalesUrl("/utility-bill-payment")
const mergedCards = allProductSections.flatMap((section) => section?.items)

const UtilityBillPayment = (): React.JSX.Element => {
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
            name: "Business Bill Payment",
            url: "/utility-bill-payment",
          },
        ]}
        subtitle={{
          text: "Business Bill Payment",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Simplify Business Utility Bill Payments with EnKash",
            color: "color-black",
          },
        ]}
        description={{
          text: "Manage all your business utility bills – electricity, water, post-paid, internet, and more – from a single dashboard. Automate payments and get real-time updates built for growing enterprises.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <StepsSection
        heading={[
          {
            text: "Steps for ",
            colorClass: "color-black",
          },
          {
            text: "Effortless Utility Bill Payments",
            colorClass: "color-equity-blue",
          },
          {
            text: " for Your Business",
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
            title: "Say Goodbye to Bill Management Chaos",
            color: "color-black ",
          },
        ]}
        subHeading={[
          {
            title:
              "Manage all your essential utility bill payments: electricity, power, water, gas, and more - in one seamless platform. EnKash automatically discovers upcoming bills, sends smart reminders, and helps you pay them on time every time. No more manual tracking, missed due dates, or scattered systems. Simplify your organization’s utility bill management with a single, automated dashboard. ",
            color: "color-black ",
          },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

      <SliderSection
        headingContent={[
          {
            title: "From Chaos to Control: ",
            color: "color-black ",
          },
          {
            title: "EnKash Enterprise Bill Payments Features ",
            color: "color-equity-blue ",
          },
          {
            title: "at a Glance ",
            color: "color-black ",
          },
        ]}
        productsData={mergedCards}
        productsTitle="All Features"
        productsSubtitle="Combine all use cases"
      />

      <CtaSection
        title={"Take Control of Your Business Utility Payments Today!"}
        buttonText={"Get Started "}
      />

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default UtilityBillPayment
