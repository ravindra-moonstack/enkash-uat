import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  allInOnePolicies,
  benifitsData,
  cardsData,
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
  title: "Instant Payment Settlement for Merchants",
  description:
    "Access your funds instantly with EnKash’s Instant Settlement solution. Improve cash flow, reduce wait times, and gain 24/7 control over your business payments.",
  alternates: {
    canonical: `${process.env.URL}/instant-settlement/`,
  },
})
const salesUrl = getSalesUrl("/instant-settlement")

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
const InstantSettlement = (): React.JSX.Element => {
  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Collect Payments",
            url: "products/collect-payments",
          },
          {
            name: "Instant Settlement",
            url: "/instant-settlement",
          },
        ]}
        subtitle={{
          text: "Instant Settlement",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Accelerate Business Cash Flow with Instant Settlements",
            color: "color-black",
          },
        ]}
        description={{
          text: "Access funds immediately and have better control over your business cash flow.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Instant Payment Settlement for Better Cash Flow"
        cards={benifitsData}
      />

      <StepsSection
        heading={[
          {
            text: "How to Set Up ",
            colorClass: "color-black",
          },
          {
            text: "EnKash Instant Settlement ",
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
            title: "Receive ",
            color: "color-black",
          },
          {
            title: "Payments in Real-Time ",
            color: "color-equity-blue",
          },
          {
            title: "With Instant Settlement",
            color: "color-black",
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
                title: "Access Cash Flow Faster Than Your Competitors",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <CtaSection
        title={"Get paid faster today!"}
        buttonText={"Get Started Today"}
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other payment products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCards}
      />
    </div>
  )
}

export default InstantSettlement
