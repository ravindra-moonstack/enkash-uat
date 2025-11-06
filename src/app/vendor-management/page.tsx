import { Metadata } from "next"

// data
import { cardsData, policies } from "./data"
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

export const metadata: Metadata = generateMetaData({
  title: "Vendor Management: Simplify Vendor Onboarding & Payments",
  description:
    "Streamline vendor onboarding, document collection, and payment workflows with EnKash. Centralize data, reduce errors, and boost vendor relationship efficiency.",
  alternates: {
    canonical: `${process.env.URL}/vendor-management`,
  },
})
const salesUrl = getSalesUrl("/vendor-management")

const VendorManagement = (): React.JSX.Element => {
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
            name: "Vendor Management",
            url: "/vendot-management",
          },
        ]}
        subtitle={{
          text: "Vendor Management",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Manage Vendors with Confidence Using EnKash",
            color: "color-black",
          },
        ]}
        description={{
          text: "Gain complete control of vendor relationships with a powerful vendor management solution. From onboarding to payments and compliance, our platform empowers businesses to work faster, reduce risks, and maintain healthy supplier partnerships.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="506px"
      />

      <StepsSection
        heading={[
          {
            text: "Step-by-Step Guide for",
            colorClass: "color-black",
          },
          {
            text: " Vendor Onboarding and Management",
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
            title: "Best Vendor Management Software",
            color: "color-black",
          },
        ]}
        items={policies}
        buttonUrl={salesUrl}
      />

      <CtaSection
        title={"Focus on What Truly Matters - Your Business Growth"}
        buttonText={"Get Started "}
      />

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default VendorManagement
