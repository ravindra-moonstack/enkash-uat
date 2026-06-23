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
import dynamic from "next/dynamic"
const CardStacking = dynamic(() => import("@/src/components/card-stacking"))
import { FaqSection } from "@/src/components"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"
import UseCaseSection from "@/src/components/sections/use-case-section"

//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import BlogSection from "@/src/components/sections/blog-section"

export const metadata: Metadata = generateMetaData({
  title: "Collection Analytics: Track & Optimize Your Payment Data",
  description:
    "Gain real-time insights into your receivables with EnKash Collection Analytics. Monitor payment trends, identify delays, and improve cash flow decisions.",
  alternates: {
    canonical: `${process.env.URL}/collection-analytics`,
  },
})
const salesUrl = getSalesUrl("/collection-analytics")
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
const CollectionAnalytics = (): React.JSX.Element => {
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
            name: "Collection Analytics",
            url: "/collection-analytics",
          },
        ]}
        subtitle={{
          text: "Collection Analytics",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Leverage data to boost decision-making with Collection Analytics",
            color: "color-black",
          },
        ]}
        description={{
          text: "Gain valuable insights with our smart analytics and streamline operations for optimal efficiency.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Enhance the Collection Process Using Data"
        cards={benifitsData}
      />

      <StepsSection
        heading={[
          {
            text: "How to Set Up ",
            colorClass: "color-black",
          },
          {
            text: "EnKash Collection Analytics",
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
            title: "Optimize Recovery and  ",
            color: "color-black",
          },
          {
            title: "Boost Cash Flow",
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
                title: "Optimize your recovery",
                color: "color-black",
              },
              {
                title: "  process with Analytics",
                color: "color-equity-blue",
              },
            ]}
          />
        </div>
      </div>

      <CtaSection
        title={"Optimize Collections with Insights Today! "}
        buttonText={"Get Started Today"}
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
        cards={[8835, 9045, 9158]}
      />
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

export default CollectionAnalytics
