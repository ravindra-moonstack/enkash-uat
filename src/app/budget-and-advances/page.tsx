import { Metadata } from "next"
import styles from "./page.module.scss"

// components
import DynamicHeading from "@/components/dynamic-heading"
import FaqSection from "@/components/faq-section"
import CardStacking from "@/components/card-stacking"
import EasyStepCard from "@/components/easy-step-card"
import AllInOnePolicy from "@/components/all-in-one-policy"
import HeroSection from "@/src/components/sections/hero-section"
import IntroductionSection from "@/src/components/sections/introduction-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"


//data
import {
  cardData,
  expenseManagementData,
  stackcardData,
  stepCards,
} from "./data"
import faqData from "./faq-data"


//helpers
import { paymentSummary } from "./img"
import { getSalesUrl } from "@/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"


export const metadata: Metadata = generateMetaData({
  title: "Budgets & Advances: Control & Track Business Spending",
  description:
    "Allocate budgets, issue advances, and monitor usage in real-time with EnKash. Gain complete control over employee spends and ensure policy-compliant expenses.",
  alternates: {
    canonical: `${process.env.URL}/budget-and-advances/`,
  },
})
const salesUrl = getSalesUrl("/budget-and-advances")
const cards = stackcardData.map((item, index) => ({
  content: (
    <AllInOnePolicy
      key={index}
      icon={item.icon}
      title={item.title}
      description={item.description}
      image={item.image}
      buttonUrl={salesUrl}
      maxImageHeight="300px"
    />
  ),
}))

const BudgetAndAdvances = (): React.JSX.Element => {
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
            name: "Budget And Advances",
            url: "/budget-and-advances",
          },
        ]}
        subtitle={{
          text: "Budget And Advances",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Keep your spends in check by allocating",
            color: "color-black",
          },
          { text: " budgets in advance", color: "color-equity-blue" },
        ]}
        description={{
          text: "Define smart budgets and release advances based on projections and past insights.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/expenceBg.webp"
      />

      <div className={styles.introduction_section}>
        <IntroductionSection
          heading={[
            {
              text: "Better Budgeting For Your Business",
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
                  title: "How To Get Started with",
                  color: "color-black",
                },
                {
                  title: " EnKash Budget and Advances",
                  color: "color-equity-blue",
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
          <>
            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "Unlock  ",
                  color: "color-black",
                },
                {
                  title: "Savings ",
                  color: "color-equity-blue",
                },
                {
                  title: "on Every Mile",
                  color: "color-black",
                },
              ]}
            />
          </>
        </div>
      </div>

      <CtaSection
        title={"Redefine Budgeting For Your Business"}
        buttonText={"Get Started Today"}
      />
      
      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "Ace business expenses with", color: "color-black" },
          { title: " innovative solutions", color: "color-equity-blue" },
        ]}
        useOptionalProps={true}
        cards={expenseManagementData}
      />
    </div>
  )
}

export default BudgetAndAdvances
