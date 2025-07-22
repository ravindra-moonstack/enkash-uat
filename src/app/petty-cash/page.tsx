"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { analyticData, dashboardData } from "./data"
import faqData from "./faq-data"
import { Header, Heading, FAQHtml, Footer } from "@/components"
import {
  analytics,
  blueArrow,
  groupIcon,
  paymentSummary,
  whiteArrow,
  zeroLeakage,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"

import PolicyCard from "@/components/policyCard/policyCard"

const PettyCash = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="expense_management" />

      <TalkToSales />

      <div className={`${styles.first_row} `}>
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
                <Heading
                  title={`Petty Cash`}
                  color="equity-blue"
                  size="h4"
                  weight="4"
                  underline
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-inline   pt-3 pt-md-0">
                  <Heading
                    title={`Best Petty Cash `}
                    color="equity-blue"
                    size="h2"
                    weight="7"
                  />
                  <Heading
                    title={` Management Suite`}
                    color="black"
                    size="h2"
                    weight="7"
                  />
                </div>

                <div className="d-flex mt-3 mb-3 text-center text-md-start ">
                  <Heading
                    title="From chaos to clarity—automate petty cash and close the books faster"
                    color="black"
                    size="h5"
                    weight="4"
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
                      <RectangleButton
                        title="Get Started  "
                        theme="blue"
                        url="/sales/?source=expense_management"
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

      <div className={` ${styles.third_row}`}>
        <div className="max-w-auto">
          <div className={`d-flex flex-column ${styles.subtitle}`}>
            <div className="d-inline">
              <Heading
                title={`Full Control.${space}`}
                color="black"
                size="h1"
                weight="5"
              />
              <Heading
                title={`Zero Leakage.`}
                color="equity-blue"
                size="h1"
                weight="5"
              />
            </div>
            <Heading
              title={`Put your petty cash policy into action automatically. `}
              color="main-grey"
              size="h5"
              weight="4"
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
              <div>
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
            {/* 👉 IMAGE COLUMN */}
            <div className="col-md-6 col-12 order-2 order-md-1">
              <div>
                <Image
                  src={analytics}
                  alt="card background"
                  className="position-relative w-100 h-auto"
                />
              </div>
            </div>

            {/* 👉 TEXT COLUMN */}
            <div className="col-md-6 col-12 order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <div className="d-inline">
                  <Heading
                    title={`Powerful ${space}`}
                    color="black"
                    size="h1"
                    weight="5"
                  />
                  <Heading
                    title={`Analytics & Reports`}
                    color="equity-blue"
                    size="h1"
                    weight="5"
                  />
                </div>
                <Heading
                  title={`Get a 360° view of your petty cash spends - branch-wise, team-wise, and category-wise.`}
                  color="main-grey"
                  size="h5"
                  weight="4"
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
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Try Yourself "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url="/sales/"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-md-5 pb-2`}>
            <Heading
              title={`Frequently Asked Questions  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading title={`(`} color="black" size="h1" weight="5" />
            <Heading title={`FAQs`} color="equity-blue" size="h1" weight="5" />
            <Heading title={`) ${space}`} color="black" size="h1" weight="5" />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div>
                <Heading
                  title="Have more questions? "
                  color="dark-grey"
                  size="h3"
                  weight="5"
                />
              </div>
              <div className="mt-2 d-none d-md-block">
                <RectangleButton
                  title="Get started today"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  iconSize={15}
                  url="/sales/?source=receivables"
                />
              </div>
            </div>
            <div className={`${styles.faqData}`}>
              <FAQHtml faqData={faqData} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PettyCash
