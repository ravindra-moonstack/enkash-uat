import { Metadata } from "next"
import styles from "./page.module.scss"

// data
import {
  cardData,
  expenseManagementData,
  stackcardData,
  stepCards,
} from "./data"
import faqData from "./faq-data"

// component
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"
import EasyStepCard from "@/src/components/easy-step-card"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import IntroductionSection from "@/src/components/sections/introduction-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

// helpers
import { paymentSummary } from "./img"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Expense Approval System: Streamline & Automate Approvals",
  description:
    "Set custom approval workflows for payments, expenses, and requests with EnKash. Improve compliance, speed up decisions, and gain real-time spend visibility..",
  alternates: {
    canonical: `${process.env.URL}/approval-flows/`,
  },
})

const salesUrl = getSalesUrl("/approval-flows")
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

const ApprovalFlows = (): React.JSX.Element => {
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
            name: "Approval Flows",
            url: "/approval-flows",
          },
        ]}
        subtitle={{
          text: "Approval Flows",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          { text: "Customize policy and approval flow", color: "color-black" },
          { text: " according to business needs", color: "color-equity-blue" },
        ]}
        description={{
          text: "Initiate real-time policy enforcement, automate approvals at multiple levels, and track expenses with a comprehensive dashboard.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/expenceBg.webp"
      />

      <div className={styles.introduction_section}>
        <IntroductionSection
          heading={[
            {
              text: "Policies & Approval Flow That Works For Your Business",
              color: "color-white",
            },
          ]}
          cards={cardData}
          backgroundImage="img/secongBg.png"
        />
      </div>
      <div className={styles.features_section}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-3`}>
            <DynamicHeading
              content={[
                {
                  title: "Step-by-Step Guide to ",
                  color: "color-black",
                },
                {
                  title: "Policy & Approval Flows",
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
                  title: "Approval Flow To Bring ",
                  color: "color-black",
                },
                {
                  title: "Efficiency, Control & Transparency",
                  color: "color-equity-blue",
                },
              ]}
            />
          </>
        </div>
      </div>

      <CtaSection
        title={"Define approval flows for efficient expense management"}
        buttonText={"Get Started Today "}
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "EnKash’s innovative solutions for ", color: "color-black" },
          { title: "expense management", color: "color-equity-blue" },
        ]}
        useOptionalProps={true}
        cards={expenseManagementData}
      />
    </div>
  )
}

export default ApprovalFlows
