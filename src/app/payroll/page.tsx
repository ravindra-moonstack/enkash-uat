import { Metadata } from "next"


//data
import { allInOnePolicyData, cardsData } from "./data"
import faqData from "./faq-data"

//components
import FaqSection from "@/src/components/faq-section"


//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"

export const metadata: Metadata = generateMetaData({
  title: "Payroll Management: Automate Salaries, Payouts & Compliance ",
  description:
    "Automate salary disbursals, contractor payouts, and compliance with EnKash Payroll. Ensure timely, error-free payments with full visibility and control.",
  alternates: {
    canonical: `${process.env.URL}/payroll/`,
  },
})
const salesUrl = getSalesUrl("/payroll")

const Payroll = (): React.JSX.Element => {
  return (
    //
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Make Payments",
            url: "/products/make-payments",
          },
          {
            name: "Payroll Processing",
            url: "/payroll",
          },
        ]}
        subtitle={{
          text: "Payroll Software",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Payroll Processing Software by EnKash",
            color: "color-black",
          },
        ]}
        description={{
          text: "Your ultimate solution for accurate, compliant, and stress-free salary disbursement. Empower your business with EnKash’s advanced payroll management software in India, designed to meet your workforce’s diverse needs and ensure seamless payroll disbursement.",
        }}
        button={{
          title: "Get Started",
          url: salesUrl,
          theme: "blue",
        }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <StepsSection
        heading={[
          {
            text: "How to Get Started with ",
            colorClass: "color-black",
          },
          {
            text: "EnKash Payroll Processing",
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
            title: "Simplify payroll payouts with our advanced solutions",
            color: "color-black",
          },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

      <CtaSection
        title={"Ready to Elevate Your Payroll Process?"}
        buttonText={"Get Started  Today "}
      />

  
      <FaqSection faqData={faqData} />
    </div>
  )
}

export default Payroll
