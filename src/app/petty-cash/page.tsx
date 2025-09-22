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
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import CommonButton from "@/src/components/buttons"
import PolicyCard from "@/src/components/policy-card"
import ManagementCard from "@/src/components/management-card"

//helpers
import { analytics, groupIcon, paymentSummary, zeroLeakage } from "./img"

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
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.hero_section} `}>
        <div className="max-w-auto">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 d-flex flex-column">
              <div className="d-flex">
                <CustomBreadcrumb
                  items={[
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
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex text-center  flex-column flex-md-row `}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Petty Cash ",
                      color: "color-equity-blue underline",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="  pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "Best Petty Cash",
                        color: "color-equity-blue",
                      },
                      {
                        title: " Management Suite",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h1"
                    className="f-7"
                  />
                </div>

                <div className="d-flex mt-3 mb-3 text-center text-md-start ">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Go digital with petty cash. Simplify small payments, track expenses in real-time, and stay audit-ready with ease.",
                        color: "color-black subHeading",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0"
                  />
                </div>

                <div className="d-flex flex-column align-items-center align-items-md-start">
                  <Image
                    src={groupIcon}
                    alt="card visual"
                    className={styles.group_logo}
                  />
                  <div
                    className={`${styles.first_row_button} d-flex flex-row  align-items-center`}
                  >
                    <div>
                      <CommonButton
                        title="Get Started  "
                        theme="blue"
                        url={salesUrl}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center d-md-flex">
              <div
                className={`${styles.right_img} position-relative w-100 h-100 d-flex`}
              >
                <Image
                  src={paymentSummary}
                  alt="card visual"
                  style={{
                    objectFit: "contain",
                    maxHeight: "672px",
                  }}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <LogoSlider />
      </div>
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
      <div className={` ${styles.third_row}`}>
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

      <div className={`${styles.fourth_row}`}>
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

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className={`${styles.heading} text-center`}>
            <DynamicHeading
              content={[
                {
                  title: "No More Manual Petty Cash Management",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 "
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <CommonButton
              title="Try Yourself "
              theme="outline-blue"
              arrow
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />
      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div
            className={`${styles.title} text-start text-md-center pb-4 pb-md-5`}
          >
            <DynamicHeading
              content={[
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
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4">
            {managementCards.map(
              ({ titleHtml, description, cardImage, linkUrl }, index) => (
                <div key={index} className="col-12 col-md-4">
                  <ManagementCard
                    titleHtml={titleHtml}
                    description={description}
                    cardImage={cardImage}
                    linkUrl={linkUrl}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PettyCash
