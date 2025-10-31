import styles from "./page.module.scss"
import { Metadata } from "next"

// data
import {
  cardData,
  expenseManagementData,
  stackcardData,
  stepCards,
} from "./data"
import faqData from "./faq-data"

// components
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"
import FaqSection from "@/src/components/faq-section"
import CardStacking from "@/src/components/card-stacking"
import EasyStepCard from "@/src/components/easy-step-card"
import HeroSection from "@/src/components/sections/hero-section"
import IntroductionSection from "@/src/components/sections/introduction-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

// helpers
import { paymentSummary } from "./img"

// utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Automate Reimbursements for Easy Claim Submission & Approval",
  description:
    "Simplify employee reimbursements with EnKash. Submit, approve, and settle expense claims digitally—boost transparency, compliance, and employee satisfaction.",
  alternates: {
    canonical: `${process.env.URL}/reimbursements`,
  },
})
const salesUrl = getSalesUrl("/reimbursements")

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

const Reimbursements = (): React.JSX.Element => {
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
            name: " Reimbursements",
            url: "/reimbursements",
          },
        ]}
        subtitle={{
          text: "Reimbursements",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Reimburse Expenses ",
            color: "color-equity-blue",
          },
          {
            text: "Before Your Business Meeting Ends!",
            color: "color-black",
          },
        ]}
        description={{
          text: "A hassle-free instant reimbursement system to track, process, and sync data in real-time.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/expenceBg.webp"
      />

      <div className={styles.introduction_section}>
        <IntroductionSection
          heading={[
            {
              text: "Advanced Employee Reimbursements",
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
                  title: "How To Get Started with ",
                  color: "color-black",
                },
                {
                  title: "Reimbursements",
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
          <CardStacking
            cards={cards}
            heading={[
              {
                title: "Streamline ",
                color: "color-black",
              },
              {
                title: "your reimbursement process ",
                color: "color-equity-blue",
              },
              {
                title: "with automated solutions",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <CtaSection
        title={"Make reimbursements easy and efficient"}
        buttonText={"Get Started Today"}
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "EnKash’s innovative solutions for ", color: "color-black" },
          { title: " expense management", color: "color-equity-blue" },
        ]}
        useOptionalProps={true}
        cards={expenseManagementData}
      />
    </div>
  )
}

export default Reimbursements
