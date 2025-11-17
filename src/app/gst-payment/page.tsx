import { Metadata } from "next"

//data
import { allInOnePolicyData, cardsData } from "./data"
import faqData from "./faq-data"

//components
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"

//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import BlogSection from "@/src/components/sections/blog-section"

export const metadata: Metadata = generateMetaData({
  title: "GST Payments: Automate, Track & Pay Your Taxes ",
  description:
    "Pay GST directly from EnKash with complete visibility. Automate reminders, track due dates, and manage all your tax payments securely from a single dashboard.",
  alternates: {
    canonical: `${process.env.URL}/gst-payment`,
  },
})
const salesUrl = getSalesUrl("/gst-payment")

const GstPayment = (): React.JSX.Element => {
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
            name: "GST Payments",
            url: "/gst-payment",
          },
        ]}
        subtitle={{
          text: "GST Challan Payment",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Pay Your GST On Time with Confidence",
            color: "color-black",
          },
        ]}
        description={{
          text: "Make sure every online GST payment is completed on time through a secure and streamlined process that offers full control and clear visibility at every step.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <StepsSection
        heading={[
          {
            text: "Paying GST Challans ",
            colorClass: "color-equity-blue",
          },
          {
            text: "was Never This Easy",
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
            title:
              "Reduce errors, avoid delays, and keep your records in order with EnKash for GST Payments",
            color: "color-black",
          },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

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
        cards={[8776, 11390, 3266]}
      />
    </div>
  )
}

export default GstPayment
