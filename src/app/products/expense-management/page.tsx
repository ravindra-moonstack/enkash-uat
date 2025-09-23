import Image from "next/image"
import styles from "./page.module.scss"
import React from "react"

// data
import {
  allProductSections,
  cardData,
  cardsData,
  stackcardData,
  dashboardData,
  integrationData,
  paymentMethodData,
  rankData,
} from "./data"
import { faqData, SecondfaqData } from "./faq-data"

// components
import CommanButton from "@/src/components/buttons"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import FaqSection from "@/src/components/faq-section"
import LottieDynamicLoadComponent from "@/src/components/lottie-client/lottie-dynamic-load-client"
import ContentShowcase from "@/src/components/content-showcase"
import FeatureSpotlight from "@/src/components/feature-spotlight"
import SmartPolicySection from "@/src/components/smart-policy-section"
import CardStacking from "@/src/components/card-stacking"
import SecondFaqHtml from "@/src/components/second-faq/secondFaqHtml"
import AllProducts from "@/src/components/all-products"
import EnkashWay from "@/src/components/enkash-way/enkash-way"
import { CTASection } from "@/src/components"

// helper
import {
  faqBg,
  blueArrow,
  approved,
  advanceAi,
  receipt,
  upi,
  walletExpense,
  whiteArrow,
  itIcon,
  ecoomerceIcon,
  manufactureIcon,
  logisticIcon,
  consultancyIcon,
  pharmacyIcon,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
} from "./img"

// utils
import generateMetaData from "@/src/utils/metaData"
import { Metadata } from "next"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Expense Management Suite: Automate & Track Business Spending",
  description:
    "Automate and control business expenses with EnKash. Track spending in real-time, set budgets, manage reimbursements, and streamline finance workflows on one platform.",
  alternates: {
    canonical: `${process.env.URL}/expense-management/`,
  },
})
const salesUrl = getSalesUrl("/expense-management")

const mergedCards = allProductSections.flatMap((section) => section.items)
const cards = stackcardData.map((item: any) => ({
  content: (
    <AllInOnePolicy
      icon={item.icon}
      title={item.title}
      description={item.description}
      image={item.image}
      buttonUrl={salesUrl}
      maxImageHeight="300px"
    />
  ),
}))
const ExpenseManagement = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.hero_section}`}>
        <div className="max-w-auto  position-relative no-pointer">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                {
                  name: "Expense Management",
                  url: "/products/expense-management",
                },
              ]}
            />
          </div>

          <div className="col-12">
            <div className="text-center mt-4 mt-mb-5">
              <DynamicHeading
                content={[
                  {
                    title: "Create, Track & Submit Expenses ",
                    color: "color-black d-block text-center",
                  },
                  {
                    title: "Now on WhatsApp.",
                    color: "color-equity-blue d-block text-center",
                  },
                ]}
                headingTag="h1"
                className="f-7 mb-3 mb-md-0"
              />
            </div>
            <div className="text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Let’s Put Smart Expense Management in Your Pocket",
                    color: "color-alternate-grey subHeading",
                  },
                ]}
                headingTag="p"
                className="f-4 text-center"
              />
            </div>
            <div className="mt-3 pointer-auto justify-content-center d-flex">
              <CommanButton title="Talk to us" theme="blue" url={salesUrl} />
            </div>
          </div>

          <div className=" col-12 d-flex justify-content-center align-items-center">
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"ExpenseLottie"}
                loop={true}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <LogoSlider />
        </div>
      </div>

      <div className="bg_white_index">
        <ContentShowcase
          mainHeading={[
            { title: "No Missed Spends.", color: "color-black" },
            { title: " No Manual Effort.", color: "color-equity-blue" },
          ]}
          heading="Expense Creation via Any Channel - Powered by Advanced AI"
          subheading="Capture expenses effortlessly - anytime, anywhere with intelligent automation across WhatsApp, email, app, and more."
          data={integrationData}
          imageSrc={advanceAi}
          imageAlt="card background"
          buttonUrl={salesUrl}
          reverse
        />
        <ContentShowcase
          heading="Travel Requests & Per Diem – Plan Ahead, Stay Within Budget"
          subheading="Let employees plan trips easily with automated per diem and compliance."
          data={paymentMethodData}
          imageSrc={receipt}
          imageAlt="card background"
          bgColor="bg-color-soft-mint"
          buttonUrl="/budget-and-advances"
          buttonTitle="Learn More"
        />
        <ContentShowcase
          heading="UPI- Based Petty Cash"
          subheading="Turn petty cash chaos into controlled digital spending with real-time visibility and approvals."
          data={dashboardData}
          imageSrc={upi}
          imageAlt="card background"
          buttonUrl="/petty-cash"
          buttonTitle="Learn More"
          reverse
        />
        <ContentShowcase
          heading="Employee Reimbursements with Smart Wallets"
          subheading="Automate category-wise allowances, get instant access to funds, and breeze through compliance."
          data={rankData}
          imageSrc={walletExpense}
          imageAlt="card background"
          bgColor="bg-color-soft-mint"
          buttonUrl="/reimbursements"
          buttonTitle="Learn More"
        />
      </div>

      <div className="bg_white_index">
        <FeatureSpotlight
          heading={[
            { title: "EMS Features ", color: "color-equity-blue" },
            { title: "in Spotlight", color: "color-black" },
          ]}
          cardData={cardData}
          showButtons
          primaryButtonTitle="Explore Receipt Management"
          primaryButtonUrl="/receipts/"
          secondaryButtonTitle="Explore Reimbursement Management"
          secondaryButtonUrl="/reimbursements/"
        />
      </div>

      <div className={`${styles.features_section} bg_white_index`}>
        <SmartPolicySection
          heading={[
            { title: "Smart Policy", color: "color-black" },
            { title: " Enforcement & Approvals", color: "color-equity-blue" },
          ]}
          subheading={[
            {
              title:
                "Control spending before it happens. Automate what doesn't need your time.",
              color: "color-main-grey subHeading",
            },
          ]}
          cardsData={cardsData}
          approvedImage={approved}
        />
      </div>

      <div className={`${styles.card_stacking_row} bg_white_index`}>
        <div className={` max-w-auto  ${styles.section}`}>
          <>
            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "Spend Analytics & Insights: ",
                  color: "color-black",
                },
                {
                  title: "Turn Every Rupee Spent ",
                  color: "color-equity-blue",
                },
                {
                  title: "into Actionable Insight",
                  color: "color-black",
                },
              ]}
            />
          </>
        </div>
      </div>

      <div className={`${styles.integration_section} relative`}>
        <div className={`${styles.faqSection} text-start  max-w-auto`}>
          <div className={`${styles.title} text-start pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Integrate with Ease. Connect Without Gaps.",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <SecondFaqHtml SecondfaqData={SecondfaqData} />
              </div>
            </div>
            <div className="col-md-6 sm-d-none">
              <div className={styles.faq_bg}>
                <Image
                  src={faqBg}
                  alt="background image"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.seventh_row} bg_white_index`}>
        <div className={`${styles.title} text-center`}>
          <div
            className={` flex-column justify-content-center align-items-center `}
          >
            <DynamicHeading
              content={[
                {
                  title: "Be Ready for Every ",
                  color: "color-black",
                },
                {
                  title: "Review with Confidence",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
        </div>

        <div>
          <AllProducts
            title="All Features"
            subtitle="Combine all use cases"
            data={mergedCards}
          />
        </div>
      </div>

      <div
        className={`${styles.sixth_row} bg_white_index row d-flex bg-white `}
      >
        <EnkashWay
          sectionHeading="One Platform. Every Use Case. Total Control."
          progressItemPadding="15px 12px"
          progressData={[
            {
              itemArray: ["IT & SaaS"],
              title: "IT & SaaS",
              description:
                "No more scattered subscriptions, remote reimbursements, and cloud tool audits. Centralize expenses, automate approvals, and get real-time visibility. Empowering your finance team to stay agile without slowing down your product or people.",
              icon: itIcon,
              bgImage: bg1,
            },
            {
              itemArray: ["E-commerce & Retail"],
              title: "E-commerce & Retail",
              description:
                "Forget about juggling vendor payouts, branch-level expenses, and seasonal budgets. Track spends across warehouses and storefronts, enforce policies by category, and simplify GST reporting - all while scaling faster with total financial control.",
              icon: ecoomerceIcon,
              bgImage: bg2,
            },
            {
              itemArray: ["Manufacturing"],
              title: "Manufacturing",
              description:
                "Do away with manual approvals, unclear plant-level spends, and poor budget tracking. Get control over every rupee - from raw material procurement to field reimbursements - ensuring compliance and audit-readiness across your supply chain.",
              icon: manufactureIcon,
              bgImage: bg3,
            },
            {
              itemArray: ["Logistics & Supply Chain"],
              title: "Logistics & Supply Chain",
              description:
                "Do not lose visibility into fleet expenses, fuel claims, or vendor payments. EnKash EMS connects your expense data with real-time dashboards, automates reconciliations, and flags policy breaches instantly, allowing your operations to run lean and accountable.",
              icon: logisticIcon,
              bgImage: bg4,
            },
            {
              itemArray: ["Consulting & Services"],
              title: "Consulting & Services",
              description:
                "Eliminate consultants' overspending, misreporting, or delay in claims. Enjoy fast, mobile-first submissions, real-time approvals, and project-wise expense tagging. Keep clients happy, costs transparent, and your margins intact.",
              icon: consultancyIcon,
              bgImage: bg5,
            },
            {
              itemArray: ["Pharma & Healthcare"],
              title: "Pharma & Healthcare",
              description:
                "Do not let MR travel management, hospital branch expenses, and regulatory reporting become a challenge. Automate policy enforcement, capture receipts instantly, and align with compliance standards to focus on patient care, not paperwork.",
              icon: pharmacyIcon,
              bgImage: bg6,
            },
          ]}
        />
      </div>

      <div className="bg_white_index">
        <CTASection
          title="Build a leaner, smarter, & future-ready finance team"
          buttonText="Get Started Today"
          buttonUrl={salesUrl}
          actionImage={blueArrow}
          hoverImage={whiteArrow}
        />
      </div>

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default ExpenseManagement
