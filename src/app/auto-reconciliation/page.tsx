import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  allInOnePolicies,
  cardsData,
  corebenifitData,
  managementCards,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

//components

import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Automatic Reconciliation: Simplify Payment Matching & Reporting",
  description:
    "Automate payment reconciliation with EnKash. Match collections across sources, eliminate manual errors, and speed up financial reporting with real-time accuracy.",
  alternates: {
    canonical: `${process.env.URL}/auto-reconciliationr`,
  },
})

const salesUrl = getSalesUrl("/auto-reconciliation")

const cards = stackcardData.map((item, index) => ({
  content: (
    <AllInOnePolicy
      key={index}
      buttonText="Get Started"
      icon={item.icon}
      title={item.title}
      description={item.description}
      image={item.image}
      buttonUrl={salesUrl}
      maxImageHeight="300px"
    />
  ),
}))

const AutoReconciliation = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white ${styles.home_container}`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Collect Payments",
            url: "products/collect-payments",
          },
          {
            name: "Auto Reconciliation",
            url: "/auto-reconciliation",
          },
        ]}
        subtitle={{
          text: "Auto Reconciliation",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Simplify Cash Flow with Automated Reconciliation",
          },
        ]}
        description={{
          text: "Allow your finance team to focus on strategic tasks and automate the reconciliation process.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Precise Finance Processes With Automated Reconciliation"
        cards={corebenifitData}
      />

      <StepsSection
        heading={[
          {
            text: "How to Set Up ",
            colorClass: "color-black",
          },
          {
            text: "EnKash Automated Reconciliation",
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
            title: "Manage Finances Better With ",
            color: "color-black",
          },
          {
            title: "Automated  Reconciliation  ",
            color: "color-equity-blue",
          },
        ]}
        items={allInOnePolicies}
        buttonUrl={salesUrl}
      />

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <CardStacking
            cards={cards}
            heading={[
              {
                title: "Zero Manual Work With Automated Reconciliation",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <CtaSection
        title={"Reconcile Effortlessly with EnKash"}
        buttonText={"Get Started Today"}
      />
      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other collection products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCards}
      />
    </div>
  )
}

export default AutoReconciliation
