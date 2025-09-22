import Image from "next/image"
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

import CommonButton from "@/components/buttons"
import CustomBreadcrumb from "@/components/breadcrumb"
import CardStacking from "@/components/card-stacking"
import FaqSection from "@/components/faq-section"
import AllInOnePolicy from "@/components/all-in-one-policy"
import DynamicHeading from "@/components/dynamic-heading"
import LogoSlider from "@/components/logo-slider"
import ManagementCard from "@/components/management-card"
import EasyStepCard from "@/components/easy-step-card"

//helpers
import { groupIcon, paymentSummary } from "./img"

//utils
import { getSalesUrl } from "@/utils/getSalesUrl"
import generateMetaData from "@/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Hierarchy & Controls: Streamline Spend Permissions",
  description:
    "Define roles, set spending limits, and establish approval workflows with EnKash. Ensure policy compliance and full control over business expenses across teams.",
  alternates: {
    canonical: `${process.env.URL}/hierarchy-and-controls/`,
  },
})
const salesUrl = getSalesUrl("/hierarchy-and-controls")

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

const HierarchyAndControl = (): React.JSX.Element => {
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
                      name: "Hierarchy & Control",
                      url: "/hierarchy-and-controls",
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
                      title: "Hierarchy & Control",
                      color: "color-equity-blue underline",
                    },
                  ]}
                  headingTag="p"
                  className="mb-md-0 "
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-inline   pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "Master Your Expenses ",
                        color: "color-equity-blue ",
                      },
                      {
                        title: "with Hierarchical Control.",
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
                          "Easily establish control across departments, sub-departments, and roles",
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

      <div className={styles.introduction_section}>
        <div className="max-m-auto">
          <div className=" text-center pb-md-5 pb-3">
            <DynamicHeading
              content={[
                {
                  title: "Ensure structured authority and decision-making",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-3 pb-md-0"
            />
          </div>
          <div className={`d-flex  flex-wrap  ${styles.section}`}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
              >
                <Image
                  src={item.icon}
                  alt="card visual"
                  className={styles.card_image}
                />
                <DynamicHeading
                  content={[
                    {
                      title: item.title,
                      color: "color-main-grey",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0 text-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.features_section}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Step-by-Step Guide to Hierarchy & Control",
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
          <>
            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "Achieve quicker resolutions with enhanced ",
                  color: "color-black",
                },
                {
                  title: "transparency and control",
                  color: "color-equity-blue",
                },
              ]}
            />
          </>
        </div>
      </div>

      <div className={`${styles.cta_section} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Take charge with seamless hierarchy and control",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-3 pb-md-0"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <CommonButton
              title="Get Started Today "
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
          <div className={`${styles.title} text-center  pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
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
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4 ">
            {expenseManagementData.map((card, index) => (
              <div className="col-12 col-md-4" key={index}>
                <ManagementCard
                  whiteTitle={card.whiteTitle}
                  description={card.description}
                  cardImage={card.cardImage}
                  theme="dark"
                  linkUrl={card.linkUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HierarchyAndControl
