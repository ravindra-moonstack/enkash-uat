import { Metadata } from "next"

//data
import {
  allInOnePolicyData,
  cards,
  cardsData,
  managementCardData,
} from "./data"
import faqData from "./faq-data"

//components
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import OtherProducts from "@/src/components/sections/other-products"

//helpers
import { paymentSummary, mealCardImage } from "./img"


//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"


export const metadata: Metadata = generateMetaData({
  title: "Bulk Payment Collection: Collect from Many, Fast & Easily",
  description:
    "Automate bulk payment collection with EnKash. Share links or QR codes to collect from multiple customers at once—track, reconcile, and manage payments at scale.",
  alternates: {
    canonical: `${process.env.URL}/bulk-collect/`,
  },
})
const salesUrl = getSalesUrl("/bulk-collect")

const BulkCollect = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Collect Payments",
            url: "/products/collect-payments",
          },
          {
            name: "Bulk Collect",
            url: "/bulk-collect",
          },
        ]}
        subtitle={{
          text: "Bulk Collect",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Take Control of Your Business Collection with EnKash Bulk Collect",
            color: "color-black",
          },
        ]}
        description={{
          text: "No more outstanding invoices and manual follow-ups. Embrace automation and efficiency with EnKash’s Bulk Payment Collection solution.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="No More Payment Delays"
        cards={cards}
      />

      <StepsSection
        heading={[
          {
            text: "How EnKash",
            colorClass: "color-black",
          },
          {
            text: " Bulk Collect ",
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
            title: "How EnKash ",
            color: "color-black",
          },
          {
            title: "Bulk Collect ",
            color: "color-equity-blue",
          },
          {
            title: "Work",
            color: "color-black",
          },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other collection products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCardData}
      />
    </div>
  )
}

export default BulkCollect
