"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { cardsData } from "./data"
import faqData from "./faq-data"
import { Header, Heading, FAQHtml, Footer } from "@/components"
import {
  blueArrow,
  groupIcon,
  paymentSummary,
  paymentLink,
  qrCodes,
  invoices,
  paymentButton,
  autoCollect,
  instant,
  reminder,
  whiteArrow,
  mealCardImage,
  paymentLinkImage,
  shareImage,
  paymentOptionImage,
  notificationImage,
  secureImage,
  realTimeIcon,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
  taskIconFive,
  hundredPercentIcon,
  paymentGatewayImg,
} from "."

import ManagementCard from "@/components/management-card/management-card"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"

const showScroll = cardsData.length > 3

const CollectionReminders = (): React.JSX.Element => {
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
                      name: "Collect Payments",
                      url: "products/collect-payments",
                    },
                    {
                      name: "Collection Reminders",
                      url: "/collection-reminder",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex text-center flex-column flex-md-row  `}
              >
               
                <DynamicHeading
                  content={[
                    {
                      title: "Collection Reminders",
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
                <div className="d-flex flex-column   pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "Get paid instantly with automated Collection Reminders",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h1"
                    className="f-7"
                  />
                </div>

                <div className="d-flex mt-3 mb-3  text-center text-md-start ">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Automated reminders using payment links via SMS, email, or WhatsApp can replace manual reminders and collect business payments.",
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

      <div className={`row ${styles.second_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32  align-items-center max-w-auto">
          <div className="d-inline justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Quick Payment Collection via Automated Payment Reminders",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={` d-flex ${styles.section}`}>
            {" "}
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "100%",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
                />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Instant Setup",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <Image src={hundredPercentIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Single Dashboard Tracking",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <Image src={realTimeIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Detailed Insights",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-2`}>
            <DynamicHeading
              content={[
                {
                  title: "How to Setup EnKash Collection Reminders ",
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
              <div  className={`${styles.list_button} `}>
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
              <div
                className={`flex-column justify-content-center align-items-center pb-md-3`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Automated Reminders for Collection ",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
                />
              </div>
            </div>

            <AllInOnePolicy
              icon={taskIconOne}
              title="Automation"
              description="Automate collection reminders and save time for other productive work. Send timely payment reminder emails to ensure faster collections and improved cash flow."
              image={paymentLinkImage}
              buttonUrl="/sales/"
              maxImageHeight="243px"
            />
            <AllInOnePolicy
              icon={taskIconTwo}
              title="Payment Links"
              description="Businesses can embed payment links within the reminder engine channel, and collections can be done instantly."
              image={notificationImage}
              buttonUrl="/sales/?source=expense_management"
              maxImageHeight="259px"
              reverse
            />
            <AllInOnePolicy
              icon={taskIconThree}
              title="DSO Management"
              description="Businesses can automate collection reminders and accelerate their collections, decreasing their DSO and stabilizing their cash flow."
              image={shareImage}
              buttonUrl="/sales/"
              maxImageHeight="305px"
            />
            <AllInOnePolicy
              icon={taskIconFour}
              title="Improved Customer Relationships"
              description="EnKash brings businesses closer to their customers by providing insights into their behaviour and patterns. This enables businesses to make decisions keeping customers at the forefront, therefore, establishing better customer relationships."
              image={paymentOptionImage}
              buttonUrl="/sales/"
              maxImageHeight="305px"
              reverse
            />
            <AllInOnePolicy
              icon={taskIconFive}
              title="Real-time Insights"
              description="Leverage actionable insights with our powerful dashboard. Access real-time transaction data, monitor payment trends, and analyze customer behavior to make strategic business decisions that can drive growth and enhance operational efficiency."
              image={secureImage}
              buttonUrl="/sales/"
              maxImageHeight="305px"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Collect payments faster with reminders! ",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started Today"
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
          <div className={`${styles.title} text-start  pb-md-5  pb-2`}>
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
              className="f-6"
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

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title}  text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Check out our ",
                  color: "color-black",
                },
                {
                  title: "other payment products",
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
          <div className="row g-3 pb-4 ">
            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Gateway"
                description="No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction."
                cardImage={paymentGatewayImg}
                linkUrl="/payment-gateway"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Link"
                description="Effortlessly collect payments on WhatsApp, SMS, Facebook, Twitter, and more using no-code payment links."
                cardImage={paymentLink}
                linkUrl="/payment-link"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Button"
                description="Add a pre-designed payment button to your website with a simple plug-and-play integration."
                cardImage={paymentButton}
                linkUrl="/payment-button"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="QR Codes"
                description="Enable secure, contactless payments using QR codes, empowering businesses to process transactions instantly."
                cardImage={qrCodes}
                linkUrl="/qr-codes"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Auto Collect"
                description="Seamlessly accept NEFT, RTGS, and IMPS transfers using customer-specific identifiers, with automated reconciliation for large-scale transactions."
                cardImage={autoCollect}
                linkUrl="/auto-collect"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Invoices"
                description="Automate invoicing for recurring transactions, monitor sales and payments, and generate bulk invoices with integrated payment links."
                cardImage={invoices}
                linkUrl="/invoices"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Instant Settlement"
                description="Access your funds immediately, bypass traditional settlement cycles, and take greater control of your cash flow."
                cardImage={instant}
                linkUrl="/instant-settlement"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Reminder Engine"
                description="Remove manual reminders and easily automate your business collections for a more seamless cash flow."
                cardImage={reminder}
                linkUrl="/reminder-engine"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CollectionReminders
