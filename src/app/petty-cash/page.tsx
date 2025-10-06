import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  analyticData,
  dashboardData,
  managementCards,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

//components

import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import PolicyCard from "@/src/components/policy-card"
import HeroSection from "@/src/components/sections/hero-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

//helpers
import { analytics, paymentSummary, zeroLeakage } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Digitize Your Petty Cash: Automate Petty Cash Management",
  description:
    "Go cashless with EnKash Petty Cash solution. Assign, track, and reconcile small business expenses in real time.",
  alternates: {
    canonical: `${process.env.URL}/petty-cash/`,
  },
})
const salesUrl = getSalesUrl("/petty-cash")

const cards = stackcardData.map((item, index) => ({
  content: (
    <AllInOnePolicy
      key={index}
      buttonText={"Get Started"}
      icon={item.icon}
      title={item.title}
      description={item.description}
      image={item.image}
      buttonUrl={salesUrl}
      maxImageHeight="300px"
    />
  ),
}))
const PettyCash = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Expense Management",
            url: "/products/expense-management",
          },
          {
            name: "Petty Cash",
            url: "/petty-cash",
          },
        ]}
        subtitle={{
          text: "Petty Cash ",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Best Petty Cash",
            color: "color-equity-blue",
          },
          {
            text: " Management Suite",
            color: "color-black",
          },
        ]}
        description={{
          text: "Go digital with petty cash. Simplify small payments, track expenses in real-time, and stay audit-ready with ease.",
        }}
        button={{
          title: "Get Started",
          url: salesUrl,
          theme: "blue",
        }}
        rightImage={paymentSummary}
        backgroundImage="/images/expenceBg.webp"
      />

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <>
            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "Manage ",
                  color: "color-black",
                },
                {
                  title: "Petty Cash ",
                  color: "color-equity-blue",
                },
                {
                  title: "Like Never Before",
                  color: "color-black",
                },
              ]}
            />
          </>
        </div>
      </div>

      <div className={` ${styles.features_section}`}>
        <div className="max-w-auto">
          <div className={`d-flex flex-column ${styles.subtitle}`}>
            <div className="mb-2">
              <DynamicHeading
                content={[
                  {
                    title: "Full Control. ",
                    color: "color-black",
                  },
                  {
                    title: "Zero Leakage.",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
            <DynamicHeading
              content={[
                {
                  title:
                    "Put your petty cash policy into action automatically.",
                  color: "color-main-grey subHeading",
                },
              ]}
              headingTag="p"
              className="mb-0"
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-12 ">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {dashboardData.map(({ icon, title }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      className="align-items-center"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={`col-md-6 col-12 `}>
              <div className="mt-4 mt-md-0">
                <Image
                  src={zeroLeakage}
                  alt="card background"
                  className="position-relative w-100 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.use_case_section}`}>
        <div className="max-w-auto">
          <div className="row align-items-end">
            <div className="col-md-6 col-12 order-2 order-md-1">
              <div>
                <Image
                  src={analytics}
                  alt="card background"
                  className="position-relative w-100 h-auto"
                />
              </div>
            </div>

            <div className="col-md-6 col-12 order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <div className="mb-2">
                  <DynamicHeading
                    content={[
                      {
                        title: "Powerful ",
                        color: "color-black",
                      },
                      {
                        title: "Analytics & Reports",
                        color: "color-equity-blue",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Get a 360° view of your petty cash spends - branch-wise, team-wise, and category-wise.",
                      color: "color-main-grey subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
                className="pb-3 pb-md-5"
              >
                {analyticData.map(({ icon, title }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      className="align-items-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title={"No More Manual Petty Cash Management"}
        buttonText={"Try Yourself "}
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          {
            title: "Check out ",
            color: "color-black",
          },
          {
            title: "other collection products",
            color: "color-equity-blue",
          },
          {
            title: " at EnKash",
            color: "color-black",
          },
        ]}
        cards={managementCards}
      />
    </div>
  )
}

export default PettyCash
