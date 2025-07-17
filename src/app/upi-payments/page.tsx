"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { cardsData, paymentMethodData } from "./data"
import faqData from "./faq-data"
import { Header, Heading, FAQHtml, Footer } from "@/components"
import {
  blueArrow,
  groupIcon,
  paymentSummary,
  paymentLink,
  paymentPage,
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
  activationIcon,
  realTimeIcon,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
} from "."

import ManagementCard from "@/components/management-card/management-card"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import FeatureCard from "@/components/featureCard/feature-card"

const showScroll = cardsData.length > 3

const UpiPayments = (): React.JSX.Element => {
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
                      url: "/produts/collect-payments",
                    },
                    {
                      name: "UPI Payments ",
                      url: "/upi-payments",
                    },
                  ]}
                />
              </div>

              <div
                className={`${styles.first_row_title} d-md-flex text-center flex-column flex-md-row `}
              >
                <Heading
                  title={`UPI Payments ${space}`}
                  color="equity-blue"
                  size="h4"
                  weight="4"
                  underline
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-inline    pt-3 pt-md-0">
                  <Heading
                    title={`Simplify Transactions, Accelerate   ${space}`}
                    color="black"
                    size="h2"
                    weight="7"
                  />

                  <Heading
                    title="Growth with EnKash UPI Payments"
                    color="black"
                    size="h2"
                    weight="7"
                  />
                </div>

                <div className="d-flex mt-3 mb-3 text-center text-md-start ">
                  <Heading
                    title="Effortless UPI payment. Whether it's BHIM, PhonePe, WhatsApp, or any UPI-supported app, experience smooth transactions without the hassle of SMS notifications or remembering VPAs."
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
                  className="w-100"
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
            <Heading
              title="Best UPI Payment Platform for Businesses "
              size="h3"
              color="white"
              weight="3"
            />
          </div>

          <div className={` d-flex ${styles.section}`}>
            {" "}
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <Heading
                  title="100%"
                  color="white"
                  size="h2"
                  weight="7"
                  useH1TagInHtml={true}
                />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <Heading
                  title="Instant Setup"
                  color="white"
                  size="h5"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            </div>
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <Image src={activationIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <Heading
                  title="Real-time Settlement"
                  color="white"
                  size="h5"
                  weight="4"
                  useH1TagInHtml={true}
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
                <Heading
                  title="Secure Transactions"
                  color="white"
                  size="h5"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-3`}>
            <Heading
              title={`How UPI Payment Works ${space}`}
              color="black"
              size="h1"
              weight="6"
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
              <div className="m-md-5 m-2">
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
              <div
                className={`flex-column justify-content-center align-items-center pb-3`}
              >
                <Heading
                  title={`EnKash UPI Payment ${space}`}
                  color="black"
                  size="h1"
                  weight="5"
                />
                <Heading
                  title={`Gateway for Businesses ${space}`}
                  color="equity-blue"
                  size="h1"
                  weight="5"
                />
              </div>
            </div>
            <div className={styles.allInOnePolicy}>
              <AllInOnePolicy
                icon={taskIconOne}
                title="Effortless Integration for Quick Setup"
                description="No need for extra code or technical headaches. EnKash provides easy-to-use SDKs and APIs that integrate seamlessly with your existing website or app. This means you can start accepting UPI payments without any complex setup or lengthy development time, allowing you to focus on what matters: growing your business."
                image={paymentLinkImage}
                buttonUrl="/sales/"
                maxImageHeight="243px"
              />

              <AllInOnePolicy
                icon={taskIconTwo}
                title="Get Paid Instantly with Instant Settlement"
                description="Do not wait days for payment settlements. Our real-time settlement system ensures that once a customer makes a payment, the funds are directly deposited into your bank account. This improves your cash flow, enabling you to reinvest in your business without worrying about delayed payments."
                image={shareImage}
                buttonUrl="/sales/"
                maxImageHeight="305px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconThree}
                title="Prioritize Secure Transactions"
                description="Security is our top priority. Every UPI payment you process is backed by EnKash’s advanced security infrastructure, along with two-factor authentication ensuring all transactions are encrypted and safe. This means your business and customer data are protected, reducing the risk of fraud and giving both you and your customers peace of mind during every transaction."
                image={paymentOptionImage}
                buttonUrl="/sales/?source=expense_management"
                maxImageHeight="268px"
              />

              <AllInOnePolicy
                icon={taskIconFour}
                title="No More Payment Failures "
                description="Say goodbye to payment failures. EnKash uses optimized payment routing and cutting-edge technology to ensure your transactions are successful. Our solution is designed to offer the highest UPI success rates, meaning fewer declined payments and a smoother experience for your customers. This increases customer trust and boosts your revenue by ensuring you don't miss any payments."
                image={notificationImage}
                buttonUrl="/sales/"
                maxImageHeight="259px"
                reverse
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sixth_row}>
        <div className={` max-w-auto`}>
          <div className={`${styles.title} text-center  pb-5`}>
            <Heading
              title={`EnKash for ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`UPI Payments ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />
          </div>

          <div className={styles.card_grid}>
            {paymentMethodData.map(({ icon, title, description }, i) => (
              <div key={i}>
                <FeatureCard
                  titleHtml={title}
                  description={description}
                  cardImage={icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-2 pb-md-5`}>
            <Heading
              title={`Frequently Asked Questions  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading title={`(`} color="black" size="h1" weight="5" />
            <Heading title={`FAQ`} color="equity-blue" size="h1" weight="5" />
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
                  useH1TagInHtml={true}
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

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center  pb-5`}>
            <Heading
              title={`Check out our ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading
              title={`other payment products ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />

            <Heading title="at EnKash" color="black" size="h1" weight="5" />
          </div>
          <div className="row g-3 pb-4 ">
            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Gateway"
                description="Seamlessly collect payments with no-code solutions."
                cardImage={paymentLink}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Page"
                description="Create stunning, branded checkout experiences in minutes."
                cardImage={paymentPage}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Link"
                description="Collect payments across WhatsApp, SMS, and social media with easy-to-share payment links."
                cardImage={paymentButton}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="QR Codes"
                description="Enable secure, contactless payments with QR codes, allowing businesses to process instant transactions."
                cardImage={qrCodes}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Auto Collect"
                description="Accept NEFT, RTGS, and IMPS transfers using on-demand customer identifiers with automated reconciliation at scale."
                cardImage={autoCollect}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Invoices"
                description="Automate invoicing for recurring transactions, monitor sales and payments, and generate bulk invoices with integrated payment links."
                cardImage={invoices}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Instant Settlement"
                description="Access your funds immediately, bypass traditional settlement cycles, and take greater control of your cash flow."
                cardImage={instant}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Reminder Engine"
                description="Automate your collections and say goodbye to manual reminders."
                cardImage={reminder}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default UpiPayments
