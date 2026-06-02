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
import SupportedElectricityBillers from "@/src/components/sections/supported-electricity-billers"

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
  elecBg,
} from "./img"

// utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import AskAiSection from "@/src/components/sections/askAISection"

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
          text: "Business Utility Bill Payment",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "All-in-One Utility Bill Payment Platform for Businesses to Control, Pay, and Audit Every Bill",
            color: "color-black",
          },
        ]}
        description={{
          text: "Manage, approve, and bulk pay electricity, water, gas, broadband, telecom, and other recurring business utility bills across all locations from one unified dashboard powered by Bharat Connect.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="555px"
      />

      <UtilityBeefitSection
        sectionTitle="Turning Business Bill Payments into Measurable Cost Savings"
        cards={benifitsData}
      />

      <StepsSection
        heading={[
          {
            text: "Steps to Manage ",
            colorClass: "color-black",
          },
          {
            text: "Multi-Location Utility Bill Payments",
            colorClass: "color-equity-blue",
          },
          {
            text: " for Your Business",
            colorClass: "color-black",
          },
        ]}
        subHeading={[
          {
            text: "Manage bulk utility bills, automate bill payments, and simplify all recurring bill payments for your business without switching between multiple portals.",
            colorClass: "color-grey-200 f-5",
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
            text: "A single platform to manage end-to-end utility payment operations across your business.",
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

      <SupportedElectricityBillers backgroundImage={elecBg} />

      <div className="bg_white_index">
        <ContentShowcase
          mainHeading={[
            {
              title: "Turn Bill Payments into   ",
              color: "color-black",
            },
            { title: " Business Cost Savings", color: "color-equity-blue" },
          ]}
          mainDescription={[
            {
              title:
                "Ensure timely payments for all business electricity bills and avoid late fee penalties with due reminders and single-click bill payments.",
              color: "color-grey-200 f-5",
            },
          ]}
          heading="One Dashboard for All Utility Bills"
          subheading={[
            "When utility bills arrive from multiple billers, visibility breaks down quickly. Finance teams struggle to track dues, confirm payments, and locate bill copies on time.",
            "EnKash centralizes all business utility bills into one dashboard, giving finance teams a clear, real-time view of every bill across the organization.",
          ]}
          data={integrationData}
          imageSrc={dashbordImg}
          imageAlt="business-utility-bill-payment-dashboard"
          buttonUrl={salesUrl}
          bgColor="bg-color-grey-100"
          reverse
        />
        <ContentShowcase
          heading="One-Click Payments"
          subheading={[
            "Managing payments across multiple portals increases the risk of missed deadlines, partial visibility, and reconciliation delays.",
            "EnKash simplifies execution by bringing all utility payments into one controlled flow.",
          ]}
          data={paymentMethodData}
          imageSrc={paymentImg}
          imageAlt="pay-business-bill-in-single-click"
          buttonUrl={salesUrl}
        />
        <ContentShowcase
          heading="Manage Utility Bills Across Multiple Business Locations"
          subheading={[
            "As businesses scale, branch-level bill handling often leads to inconsistent processes and delayed visibility at the central level.",
            "EnKash gives finance teams centralized oversight while maintaining location-level accountability.",
          ]}
          data={dashboardData}
          imageSrc={locationImg}
          imageAlt="multi-location-utility-bill-management"
          bgColor="bg-color-grey-100"
          buttonUrl={salesUrl}
          reverse
        />
        <ContentShowcase
          heading="Centralized Bill Copies, Instantly Available"
          subheading={[
            "Missing or delayed bill copies create audit risk and slow down reviews.",
            "EnKash fetches and stores verified bill copies automatically, keeping documentation accessible and audit-ready.",
          ]}
          data={centerData}
          imageSrc={centerlizeImg}
          imageAlt="get-bill-copies-instantly"
          buttonUrl={salesUrl}
        />
        <ContentShowcase
          heading="Streamlined Approvals, Built for Governance"
          subheading={[
            "As utility spends increase, informal approvals introduce risk and reduce accountability.",
            "EnKash enforces structured approval workflows designed for governance and control.",
          ]}
          data={approvalData}
          imageSrc={approvalImg}
          imageAlt="bill-payments-approvals"
          bgColor="bg-color-grey-100"
          buttonUrl={salesUrl}
          reverse
        />
        <ContentShowcase
          heading="Real-Time Reconciliation"
          subheading={[
            "When bills, payments, and documents live in different systems, reconciliation becomes slow and error-prone.",
            "EnKash brings everything into one view, helping teams responsible for reconciliation and reporting close periods faster and with confidence.",
          ]}
          data={rankData}
          imageSrc={realTimeImg}
          imageAlt="real-time-reconciliation-of-utility-bill-payments"
          buttonUrl={salesUrl}
        />
      </div>

      <EnterpriseSection />

      <AskAiSection />
      <SliderSection
        headingContent={[
          {
            title: "Everything You Need to ",
            color: "color-black ",
          },
          {
            title: "Manage Business Utility Bills ",
            color: "color-equity-blue ",
          },
        ]}
        descriptionContent={[
          {
            title:
              "Manage, approve, and pay all business utility bills, including electricity, power, water, broadband, and telecom from one secure, compliant, and audit-ready bill payment platform.",
            color: "color-grey-200 f-5",
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
