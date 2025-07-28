"use client"
import Image from "next/image"
import styles from "./page.module.scss"
import { cardsData } from "./data"
import faqData from "./faq-data"
import { Header, FAQHtml, Footer } from "@/components"
import {
  blueArrow,
  groupIcon,
  paymentSummary,
  whiteArrow,
  mealCardImage,
  paymentLinkImage,
  shareImage,
  paymentOptionImage,
  notificationImage,
  optimizedIcon,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
  taskIconFive,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import ScrollableCardsSection from "@/components/scrollable-cards-section/scrollableCardsSection"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"

const VendorManagement = (): React.JSX.Element => {
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
                      name: "Make Payments",
                      url: "/products/make-payments",
                    },
                    {
                      name: "Vendor Management",
                      url: "/vendot-management",
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
                      title: "Vendor Management",
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
                <div className="d-inline   pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "Manage Vendors with Confidence Using EnKash",
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
                          "Gain complete control of vendor relationships with powerful vendor management solution. From onboarding to payments and compliance our platform empowers businesses to work faster, reduce risks, and maintain healthy supplier partnerships.",
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
                      <RectangleButton
                        title="Get Started  "
                        theme="blue"
                        url="/sales/?source=expense_management"
                      />
                    </div>
                    <div>
                      <RectangleButton
                        title="API Doc"
                        theme="outline-blue"
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
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <LogoSlider />
      </div>

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-3`}>
            <DynamicHeading
              content={[
                {
                  title: "Step-by-Step Guide to",
                  color: "color-black",
                },
                {
                  title: " Vendor Onboarding and Management",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <ScrollableCardsSection
                cardsData={cardsData}
                showScroll={true}
                maxHeight="400px"
                buttonTitle="Get Started"
                buttonTheme="outline-blue"
                buttonUrl="/sales/?source=receivables"
              />
            </div>
            <div className="col-md-6 col-12">
              <div>
                <Image
                  src={mealCardImage}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row}  `}>
        <div className="max-w-auto">
          <div className={`row  align-items-center ${styles.section}`}>
            <div className={`${styles.title} text-center `}>
              <div className={`d-inline text-center pb-3`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Best Vendor Management Software",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h2"
                  className="f-5"
                />
              </div>
            </div>

            <div className={styles.allInOnePolicy}>
              <AllInOnePolicy
                icon={taskIconOne}
                title="Instant Vendor Onboarding"
                description="Quickly onboard new vendors with minimal effort using EnKash’s one-click invite feature. Collect essential details like PAN, GST, and bank account information through intuitive, pre-set templates. Say goodbye to manual data entry and enjoy a faster, error-free onboarding process that sets up your vendor relationships for success."
                image={paymentLinkImage}
                buttonUrl="/sales"
                maxImageHeight="243px"
              />

              <AllInOnePolicy
                icon={taskIconTwo}
                title="Effortless Invoice Management"
                description="Simplify invoice handling with EnKash’s centralized dashboard. Easily upload single or bulk invoices and manage them efficiently from a unified platform. Track invoice statuses in real time, reduce errors, and ensure timely processing. This streamlined approach not only saves time but also fosters better vendor relationships and financial accuracy."
                image={shareImage}
                buttonUrl="/sales"
                maxImageHeight="305px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconThree}
                title="Flexible Payment Options"
                description="Offer your vendors a variety of payment methods, including UPI, virtual cards, and traditional bank transfers. With EnKash, you can track payment statuses in real-time, ensuring transparency and maintaining trust. Timely payments enhance vendor satisfaction, while flexible options make transactions convenient for all parties involved."
                image={paymentOptionImage}
                buttonUrl="/sales"
                maxImageHeight="243px"
              />

              <AllInOnePolicy
                icon={taskIconFour}
                title="Advanced Reporting & Insights"
                description="Unlock actionable insights into your vendor management with EnKash’s comprehensive reporting tools. Monitor vendor performance metrics, analyze payment histories, and identify trends that impact your supply chain. Use this data to make informed decisions and optimize operations for better financial outcomes and efficiency."
                image={notificationImage}
                buttonUrl="/sales"
                maxImageHeight="259px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconFive}
                title="Customizable Approval Workflows"
                description="Design approval workflows that match your organizational requirements. EnKash allows you to set role-based access, define thresholds, and create flexible hierarchies. Streamline decision-making processes while maintaining strict compliance, ensuring every transaction and vendor activity aligns with your internal policies and business goals."
                image={optimizedIcon}
                buttonUrl="/sales"
                maxImageHeight="259px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Focus on what truly matters—your business growth.",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-4"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started  "
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
            <DynamicHeading
              content={[
                {
                  title: "Frequently Asked Questions (",
                  color: "color-black",
                },
                {
                  title: "FAQs",
                  color: "color-equity-blue",
                },
                {
                  title: ")",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-5"
            />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div>
                <DynamicHeading
                  content={[
                    {
                      title: "Have more questions?",
                      color: "color-dark-grey subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
              <div className="mt-3 d-none d-md-block">
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

export default VendorManagement
