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

// helpers
import { paymentSummary } from "./img"

// utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import HeroSection from "@/src/components/sections/hero-section"
import IntroductionSection from "@/src/components/sections/introduction-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

export const metadata: Metadata = generateMetaData({
  title: "Scan and Drop Receipts for Faster Employee Expense Creation",
  description:
    "Generate and manage digital receipts for every business transaction with EnKash. Automate collections, track payment status, and improve cash flow visibility.",
  alternates: {
    canonical: `${process.env.URL}/receipts`,
  },
})
const salesUrl = getSalesUrl("/receipts")

const cards = stackcardData.map(({ icon, title, description, image }) => ({
  content: (
    <AllInOnePolicy
      icon={icon}
      title={title}
      description={description}
      image={image}
      buttonUrl={salesUrl}
      maxImageHeight="300px"
    />
  ),
}))
const Receipts = (): React.JSX.Element => {
  return (
    <div className={`color-white `}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Expense Management",
            url: "/products/expense-management",
          },
          {
            name: "Receipts",
            url: "/receipts",
          },
        ]}
        subtitle={{
          text: "Scan and Drop Receipts",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Scan, submit, and file ",
            color: "color-black",
          },
          {
            text: "business expenses digitally ",
            color: "color-equity-blue",
          },
        ]}
        description={{
          text: "Upload receipts instantly from anywhere for easy access and timely tracking.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/expenceBg.webp"
      />

      <div className={styles.introduction_section}>
        <IntroductionSection
          heading={[
            {
              text: "Scan Receipts On The Go! ",
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
                  title: "Go Paperless & Digitize",
                  color: "color-black",
                },
                {
                  title: " Business Expenses",
                  color: "color-equity-blue",
                },
                {
                  title: " with EnKash",
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
                title: "Scan Receipts & Get ",
                color: "color-black",
              },
              {
                title: "Reimbursed On the Go!",
                color: "color-equity-blue",
              },
            ]}
          />
        </div>
      </div>

      <CtaSection
        title={"Make reimbursements easy for your employees"}
        buttonText={"Get Started Today "}
      />
      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          {
            title: "Simplify ",
            color: "color-black",
          },
          {
            title: "expense management ",
            color: "color-equity-blue",
          },
          {
            title: "with EnKash’s innovative solutions",
            color: "color-black",
          },
        ]}
        useOptionalProps={true}
        cards={expenseManagementData}
      />
    </div>
  )
}

export default Receipts
