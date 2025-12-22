import { Metadata } from "next"

// data
import {
  allProductSections,
  approvalData,
  benifitsData,
  cardsData,
  centerData,
  dashboardData,
  integrationData,
  paymentMethodData,
  rankData,
} from "./data"
import faqData from "./faq-data"

// components
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import SliderSection from "@/src/components/sections/slider-section"
import CtaSection from "@/src/components/sections/cta-section"
import BlogSection from "@/src/components/sections/blog-section"
import UtilityBeefitSection from "@/src/components/sections/utilityBenefitSection"
import ContentShowcase from "@/src/components/content-showcase"
import EnterpriseSection from "@/src/components/enterprise-section"
import UtilityWorkflow from "@/src/components/sections/utilityWorkflow"

// helpers
import {
  paymentSummary,
  mealCardImage,
  dashbordImg,
  paymentImg,
  locationImg,
  approvalImg,
  centerlizeImg,
  realTimeImg,
  electricity,
  gas,
  water,
  dth,
  prepaid,
  broadband,
} from "./img"

// utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
// import AskAiSection from "@/src/components/sections/askAISection"

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
            text: "One Platform to Control, Pay, and Audit Every Business Utility Bill",
            color: "color-black",
          },
        ]}
        description={{
          text: "Manage electricity, water, gas, broadband, telecom, and other recurring business utility bills across all locations from one unified dashboard powered by Bharat Connect.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="520px"
      />

      <UtilityBeefitSection
        sectionTitle="Best Online Payment Solution"
        cards={benifitsData}
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
      <UtilityWorkflow
        heading={[
          {
            text: "All utilities. ",
            colorClass: "color-black d-block f-3",
          },
          {
            text: "All locations. ",
            colorClass: "color-black d-block f-3",
          },
          {
            text: "One workflow.",
            colorClass: "color-black d-block f-7",
          },
        ]}
        description={[
          {
            text: "A platform to manage end-to-end utility payment operations.",
            colorClass: "color-secondry-black f-4",
          },
        ]}
        items={[
          { label: "Electricity", icon: electricity },
          { label: "Gas", icon: gas },
          { label: "Water", icon: water },
          { label: "DTH", icon: dth },
          { label: "Electricity Prepaid", icon: prepaid },
          { label: "Broadband", icon: broadband },
        ]}
      />

      <div className="bg_white_index">
        <ContentShowcase
          mainHeading={[
            {
              title: "Turn Bill Payments into   ",
              color: "color-black",
            },
            { title: " Business Cost Savings", color: "color-equity-blue" },
          ]}
          heading="One Dashboard for All Bills"
          subheading="When your utility bills come from multiple providers and locations, tracking quickly turns manual and error-prone. EnKash brings every business utility bill into one dashboard, so you always know what’s due, what’s paid, and what needs action."
          data={integrationData}
          imageSrc={dashbordImg}
          imageAlt="card background"
          buttonUrl={salesUrl}
          bgColor="bg-color-grey-100"
          reverse
        />
        <ContentShowcase
          heading="One-click Payments"
          subheading="Multiple portals slow payments and increase errors. Pay one or many utility bills in a single click, while keeping every payment linked and traceable."
          data={paymentMethodData}
          imageSrc={paymentImg}
          imageAlt="card background"
          buttonUrl={salesUrl}
        />
        <ContentShowcase
          heading="Manage Utility Bills Across Multiple Business Locations"
          subheading="Managing utility bills location by location leads to fragmented data and weak oversight. Get central control over all payments, without losing branch-level visibility."
          data={dashboardData}
          imageSrc={locationImg}
          imageAlt="card background"
          bgColor="bg-color-grey-100"
          buttonUrl={salesUrl}
          reverse
        />
        <ContentShowcase
          heading="Real-Time Reconciliation"
          subheading="When bills, payments, and documents sit in different places, reconciliation slows you down. EnKash brings everything into one view, so you match payments with verified bill copies and close faster with confidence."
          data={rankData}
          imageSrc={realTimeImg}
          imageAlt="card background"
          buttonUrl={salesUrl}
        />
        <ContentShowcase
          heading="Streamlined Approvals, Built for Governance"
          subheading="As utility spending grows, unstructured approvals create delays and risk. Keep approvals controlled, transparent, and consistent across every location."
          data={approvalData}
          imageSrc={approvalImg}
          imageAlt="card background"
          bgColor="bg-color-grey-100"
          buttonUrl={salesUrl}
          reverse
        />
        <ContentShowcase
          heading="Centralized Bill Copies, Instantly Available"
          subheading="Missing or delayed bill copies create audit risk. Access verified utility bill copies, including electricity bill copies, automatically fetched and mapped to each payment and billing cycle."
          data={centerData}
          imageSrc={centerlizeImg}
          imageAlt="card background"
          buttonUrl={salesUrl}
        />
      </div>

      <EnterpriseSection />

      {/* <AskAiSection /> */}
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
        cards={[4062, 10658, 11322]}
      />
    </div>
  )
}

export default UtilityBillPayment
