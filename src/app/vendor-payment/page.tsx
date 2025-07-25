"use client"
import Image from "next/image"
import styles from "./page.module.scss"
import { allProductSections, cardsData } from "./data"
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
  taskIconSix,
  secureImage,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import AllProducts from "@/components/all-products/all-products"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"

const showScroll = cardsData.length > 3
const mergedCards = allProductSections.flatMap((section) => section.items)

const VendorPayment = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header />

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
                      name: "Vendor Payment",
                      url: "/vendor-payment",
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
                      title: "Vendor Payment",
                      color: "color-equity-blue underline",
                    },
                  ]}
                  headingTag="h4"
                  className="f-4"
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-inline   pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "Faster, Smarter Vendor Payments with EnKash",
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
                          "Transform your vendor payments with a single click and get complete control with real-time updates.",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h5"
                    className="f-4"
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
                        url="/sales/"
                      />
                    </div>
                    <div>
                      <RectangleButton
                        title="API Doc"
                        theme="outline-blue"
                        url="/sales/"
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

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-3`}>
            <DynamicHeading
              content={[
                {
                  title: "Pay, Approve, Reconcile - ",
                  color: "color-equity-blue",
                },
                {
                  title: "Vendor Payments in 3 Steps",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <div
                className={` mt-md-5 ${
                  showScroll ? "overflow-auto scrollbar-thin" : ""
                }`}
                style={{
                  maxHeight: "400px",
                  direction: showScroll ? "rtl" : "ltr",
                }}
              >
                {cardsData.map(({ icon, title, description }, i) => (
                  <div
                    key={i}
                    style={{
                      direction: "ltr",
                    }}
                    className={styles.scrollCard}
                  >
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get Started"
                  theme="outline-blue"
                  url="/sales/?source=receivables"
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div>
                <Image
                  src={mealCardImage}
                  alt="card background"
                  className="w-100 h-100"
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
                      title: "Your End-to-End Solution for Vendor Payments",
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
                title="Pay Vendors in Seconds"
                description="Simplify vendor payments with multiple payment options such as UPI, NEFT, RTGS, or cards. With EnKash, you can settle invoices instantly while ensuring secure transactions. No more delays or manual follow-ups—just fast, reliable payments that strengthen your vendor relationships. Efficient management of vendor payables ensures faster invoice settlements and stronger vendor relationships."
                image={paymentLinkImage}
                buttonUrl="/sales"
                maxImageHeight="250px"
              />

              <AllInOnePolicy
                icon={taskIconTwo}
                title="Eliminate Manual Hassles"
                description="Say goodbye to cumbersome spreadsheets and manual errors. EnKash automates the entire process—from uploading invoices to setting payment reminders. With built-in TDS compliance and auto-validation, you can ensure every payment is accurate, on time, and fully compliant with regulations, leaving your team to focus on growth."
                image={shareImage}
                buttonUrl="/sales"
                maxImageHeight="305px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconThree}
                title="Seamless Integration"
                description="Integrate EnKash seamlessly with leading ERPs like Tally, QuickBooks, and Zoho. This ensures your accounts payable system is always synchronized, saving time on manual data entry. Automatically pull invoices, update payment statuses, and maintain an organized workflow that fits effortlessly into your existing setup."
                image={paymentOptionImage}
                buttonUrl="/sales"
                maxImageHeight="202px"
              />

              <AllInOnePolicy
                icon={taskIconFour}
                title="Speed Up Approvals"
                description="Empower your team to approve payments faster with EnKash’s customizable workflows. Define approval hierarchies, assign roles, and get instant notifications for pending tasks. Whether you're in the office or on the go, you can approve vendor payments securely from any device, keeping your business agile."
                image={notificationImage}
                buttonUrl="/sales"
                maxImageHeight="259px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconFive}
                title="Comprehensive Reconciliation"
                description="Ensure your books are always audit-ready with EnKash’s automatic reconciliation features. Match invoices to payments, generate detailed reports, and eliminate discrepancies effortlessly. This streamlined process not only improves accuracy but also saves valuable time for your finance team."
                image={optimizedIcon}
                buttonUrl="/sales"
                maxImageHeight="259px"
              />

              <AllInOnePolicy
                icon={taskIconSix}
                title="End-to-End Security"
                description="Protect every transaction with enterprise-grade security measures. EnKash uses multi-layered encryption, advanced fraud monitoring, and secure bank account validation to safeguard your data and payments. With compliance built into the platform, you can trust that your vendor payments are in safe hands."
                image={secureImage}
                buttonUrl="/sales"
                maxImageHeight="252px"
                reverse
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center pb-5 max-w-auto`}>
          <div className={` pb-3  d-inline`}>
            <DynamicHeading
              content={[
                {
                  title: "Smart Features for ",
                  color: "color-black",
                },
                {
                  title: "Stress-Free ",
                  color: "color-equity-blue",
                },
                {
                  title: "Vendor Payments",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-5"
            />
          </div>
        </div>
        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Take Control of Your Vendor Payments Today",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-4 bannerHeading"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started  "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url="/sales/?source=expense_management"
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
                      color: "color-dark-grey",
                    },
                  ]}
                  headingTag="h3"
                  className="f-5"
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

export default VendorPayment
