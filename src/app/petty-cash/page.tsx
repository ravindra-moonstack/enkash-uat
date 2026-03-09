import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  acceleratedGrowthData,
  analyticData,
  cardData,
  dashboardData,
  policies,
} from "./data"
import faqData from "./faq-data"

//components

import DynamicHeading from "@/src/components/dynamic-heading"
import FaqSection from "@/src/components/faq-section"
import PolicyCard from "@/src/components/policy-card"
import HeroSection from "@/src/components/sections/hero-section"

//helpers
import { acceleratedGrowthImg, analytics, paymentSummary, zeroLeakage } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import BlogSection from "@/src/components/sections/blog-section"
import { CommanButton, FeatureSpotlight, VideoPlayer } from "@/src/components"
import UseCaseSection from "@/src/components/sections/use-case-section"

export const metadata: Metadata = generateMetaData({
  title:
    "Digital Petty Cash Management – Petty Cash Application for Business Spending.",
  description:
    "Manage petty cash with a digital petty cash management system. Track expenses in real time, use petty cash cards, and simplify petty cash expense management.",
  alternates: {
    canonical: `${process.env.URL}/petty-cash`,
  },
})
const salesUrl = getSalesUrl("/petty-cash")


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
            text: "Control Petty Cash ",
            color: "color-equity-blue",
          },
          {
            text: "Across Multiple Branches. In Real Time.",
            color: "color-black",
          },
        ]}
        description={{
          text: "Digital petty cash with QR payments, real-time policy control, and zero reconciliation hassle.",
        }}
        button={{
          title: "Get Started",
          url: salesUrl,
          theme: "blue",
          // vedioLink: "https://youtu.be/pjeEde3ruiU?si=ZxvNS0h4z1Mxcsga",
        }}
        rightImage={paymentSummary}
        backgroundImage="/images/expenceBg.webp"
        rightImageMaxHeight="502px"
      />
      <div className="bg_white_index">
        <FeatureSpotlight
          heading={[
            { title: "Your Complete ", color: "color-black" },
            { title: "Petty Cash ", color: "color-equity-blue" },
            { title: "Management System", color: "color-black" },
          ]}
          description={{
            text: "Manage petty cash across every branch with payment control, budget automation, and instant reconciliation.",
            color: "color-black",
          }}
          cardData={cardData}
        />
      </div>
      <UseCaseSection
        heading={[
          { title: "Manage ", color: "color-black" },
          { title: "Petty Cash ", color: "color-equity-blue" },
          { title: "Like Never Before", color: "color-black" },
        ]}
        items={policies}
        buttonUrl={salesUrl}
      />
      <VideoPlayer
        videoSrc="https://youtu.be/pjeEde3ruiU?si=ZxvNS0h4z1Mxcsga"
        heading={[{ title: "Watch how EnKash brings everything onto one platform — instantly.", color: "color-black" }]}
        ctaLabel={"Get Started"}
        ctaHref={salesUrl}

      />

      <div className={` ${styles.features_section}`}>
        <div className="max-w-auto">
          <div className={`d-flex flex-column ${styles.subtitle}`}>
            <div className="mb-2">
              <DynamicHeading
                content={[
                  {
                    title: "Complete Spending Control",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
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
      <div className={`${styles.integration_section}  `}>
        <div className="max-w-auto w-100">
          <div className={`${styles.section} row`}>
            <div
              className={`${styles.title} text-start  d-flex flex-column pb-4 pb-md-5  col-md-8`}
            >
              <DynamicHeading
                content={[
                  {
                    title: "Control Petty Cash Across All Your Branches",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
              <DynamicHeading
                content={[
                  {
                    title: "Join multi-location enterprises managing expenses with complete visibility and automated control.",
                    color: "color-grey-200",
                  },
                ]}
                headingTag="p"
                className="f-4 mb-0 fs-20"
              />
            </div>

            <div className="col-md-6 ">
              {acceleratedGrowthData.map(({ icon, title }, i) => (
                <div key={i} style={{ direction: "ltr" }}>
                  <div className="d-flex align-items-start gap-3 pt-2 w-4 h-4">
                    <div
                      className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <Image src={icon} alt="icon" />
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <DynamicHeading
                        content={[
                          {
                            title: title,
                            color: "color-black subHeading",
                          },
                        ]}
                        headingTag="p"
                        className="f-5"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <CommanButton
                title="Get Started Today"
                theme="white"
                arrow
                url={salesUrl}
                className="mt-4"
              />
            </div>
            <div className="col-md-6">
              <div className={styles.faq_bg}>
                <Image
                  src={acceleratedGrowthImg}
                  alt="background image"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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
        cards={[10539, 9129, 11225]}
      />
    </div>
  )
}

export default PettyCash
