import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  cardData,
  expenseManagementData,
  stackcardData,
  stepCards,
} from "./data"
import faqData from "./faq-data"

//components

import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import EasyStepCard from "@/src/components/easy-step-card"
import HeroSection from "@/src/components/sections/hero-section"
import IntroductionSection from "@/src/components/sections/introduction-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

//helpers
import { paymentSummary } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Expense Tracking Made Easy with Advanced Expense Analytics",
  description:
    "Get powerful insights into your business spends with EnKash Expense Analytics. Track patterns, control budgets, and make data-driven financial decisions.",
  alternates: {
    canonical: `${process.env.URL}/expense-analytics-and-insights/`,
  },
})

const salesUrl = getSalesUrl("/expense-analytics-and-insights")

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

const ExpenseAnalytics = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white ${styles.home_container}`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Expense Management",
            url: "/products/expense-management",
          },
          {
            name: "Insights",
            url: "/expense-analytics-and-insights",
          },
        ]}
        subtitle={{
          text: "Insights",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Dig deep into insights ",
            color: "color-equity-blue",
          },
          { text: " and make informed decisions", color: "color-black" },
        ]}
        description={{
          text: "Gain clarity and control with detailed insights into employee expense data for better business decision-making.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/expenceBg.webp"
      />

      <div className={styles.introduction_section}>
        <IntroductionSection
          heading={[
            {
              text: "Get a comprehensive view of employee business expenses",
              color: "color-white",
            },
          ]}
          cards={cardData}
          backgroundImage="img/secongBg.png"
        />
      </div>

      <div className={styles.features_section}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Step-by-Step Guide for Insights",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>

          <div className="row g-3 pb-4">
            {stepCards.map((card, index) => (
              <div className="col-12 col-md-4" key={index}>
                <EasyStepCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <CardStacking
            cards={cards}
            heading={[
              {
                title: "Achieve growth with a ",
                color: "color-black",
              },
              {
                title: "data-driven ",
                color: "color-equity-blue",
              },
              {
                title: "business",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <CtaSection
        title={"Make data-driven decisions for your business"}
        buttonText={"Get Started Today"}
      />
      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "Simplify ", color: "color-black" },
          { title: " expense management ", color: "color-equity-blue" },
          { title: "with EnKash’s innovative solutions", color: "color-black" },
        ]}
        useOptionalProps={true}
        cards={expenseManagementData}
      />
    </div>
  )
}

export default ExpenseAnalytics
