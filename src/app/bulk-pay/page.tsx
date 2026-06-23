import { Metadata } from "next"

//data
import { allInOnePolicyData, allProductSections, cardsData } from "./data"
import faqData from "./faq-data"

//component
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
import FaqSection from "@/src/components/faq-section"

//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import BlogSection from "@/src/components/sections/blog-section"
import dynamic from "next/dynamic"

const SliderSection = dynamic(() => import("@/src/components/sections/slider-section"))

export const metadata: Metadata = generateMetaData({
  title: "Bulk Payment: Smart, Fast & Secure Payouts ",
  description:
    "Send instant payouts without collecting bank details. With EnKash Express Pay, use mobile numbers or UPI IDs to pay vendors, partners, or gig workers seamlessly.",
  alternates: {
    canonical: `${process.env.URL}/bulk-pay`,
  },
})
const salesUrl = getSalesUrl("/bulk-pay")

const mergedCards = allProductSections.flatMap((section) => section.items)

const BulkPay = (): React.JSX.Element => {
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
            name: "Bulk Pay",
            url: "/bulk-pay",
          },
        ]}
        subtitle={{
          text: "Bulk Payout",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Simplify Bulk Payments with EnKash Bulk Pay",
            color: "color-black",
          },
        ]}
        description={{
          text: "Streamline your business disbursements with EnKash’s Express Pay. Automate payments, save time, and gain control over your cash flow.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="500px"
      />

      <StepsSection
        heading={[
          {
            text: "How To Get Started with ",
            colorClass: "color-black",
          },
          {
            text: "EnKash Express Pay ",
            colorClass: "color-equity-blue",
          },
          {
            text: "for Bulk Payments ",
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
            title: "Innovative Bulk Payments Solutions for Enterprises ",
            color: "color-black",
          },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

      <SliderSection
        headingContent={[
          {
            title: "Overcome Your Bulk Processing Challenges",
            color: "color-equity-blue",
          },
          {
            title: " with EnKash Solutions",
            color: "color-black",
          },
        ]}
        headingTag="h2"
        productsData={mergedCards}
        productsTitle="All Features"
        productsSubtitle="Combine all use cases"
      />

      <CtaSection title={""} buttonText={"Try for Yourself"} />

      <FaqSection faqData={faqData} />
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
        cards={[7131, 3038, 11501]}
      />
    </div>
  )
}

export default BulkPay
