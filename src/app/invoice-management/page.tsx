import { Metadata } from "next"
import dynamic from "next/dynamic"

//data
import { allInOnePolicyData, allProductSections, cardsData } from "./data"
import faqData from "./faq-data"

//components
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
const SliderSection = dynamic(() => import("@/src/components/sections/slider-section"))

//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Invoice Management System: Automate, Track & Reconcile Invoices ",
  description:
    "Digitize your invoice workflow with EnKash. Create, share, approve, and reconcile invoices faster—streamline accounts payable and improve cash flow visibility.",
  alternates: {
    canonical: `${process.env.URL}/invoice-management`,
  },
})
const salesUrl = getSalesUrl("/invoice-management")

const mergedCards = allProductSections.flatMap((section) => section.items)

const InvoiceManagement = (): React.JSX.Element => {
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
            name: "Invoice Management",
            url: "/invoice-management",
          },
        ]}
        subtitle={{
          text: "Invoice Management",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Transform your Invoice Management Process with EnKash",
            color: "color-black",
          },
        ]}
        description={{
          text: "Make invoice management efficient, get greater visibility, and maintain better control over your financial operations.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="506px"
      />

      <StepsSection
        heading={[
          {
            text: "How EnKash",
            colorClass: "color-black",
          },
          {
            text: " Invoice Management ",
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
            title: "Take Control of Your Invoice Process with EnKash",
            color: "color-black",
          },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

      <SliderSection
        headingContent={[
          { title: "Features to Solve ", color: "color-black" },
          {
            title: "Invoice Management Challenges ",
            color: "color-equity-blue",
          },
          { title: "with Confidence ", color: "color-black" },
        ]}
        headingTag="h2"
        productsData={mergedCards}
        productsTitle="All Features"
        productsSubtitle="Combine all use cases"
      />

      <CtaSection
        title={"Start Managing Invoices the Smarter Way"}
        buttonText={"Get Started  "}
      />

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default InvoiceManagement
