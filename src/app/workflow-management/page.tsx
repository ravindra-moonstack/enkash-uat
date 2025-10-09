import { Metadata } from "next"

// data
import { cards, cardsData, workflowPolicies } from "./data"
import faqData from "./faq-data"

//components
import FaqSection from "@/src/components/faq-section"

// helpers
import { paymentSummary, mealCardImage } from "./img"

// utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"

export const metadata: Metadata = generateMetaData({
  title: "Workflow Management Solution to Customize Your Payment Collections",
  description:
    "Automate and streamline approval workflows with EnKash. Manage finance operations with ease, ensure compliance, and boost team efficiency with customizable workflows.",
  alternates: {
    canonical: `${process.env.URL}/workflow-management/`,
  },
})
const salesUrl = getSalesUrl("/workflow-management")
const WorkflowManagement = (): React.JSX.Element => {
  return (
    <div className={`color-white `}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Collect Payments",
            url: "products/collect-payments",
          },
          {
            name: "Workflow Management",
            url: "/workflow-management",
          },
        ]}
        subtitle={{
          text: "Workflow Management",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Achieve operational excellence with streamlined workflows ",
            color: "color-black",
          },
        ]}
        description={{
          text: "Reimagine workflows by simplifying tasks, automating processes, and boosting efficiency.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Transform Workflow Management & Optimize Your Business"
        cards={cards}
      />

      <StepsSection
        heading={[
          {
            text: "How to Set  ",
            colorClass: "color-black",
          },
          {
            text: "Up Workflow Management",
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
            title: "Upgrade Your Workflows and",
            color: "color-black",
          },
          {
            title: " Boost Efficiency",
            color: "color-equity-blue",
          },
        ]}
        items={workflowPolicies}
        buttonUrl={salesUrl}
      />

      <CtaSection
        title={"Harness Data to Grow, Scale, and Outperform Competition"}
        buttonText={"Get Started Today"}
      />

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default WorkflowManagement
