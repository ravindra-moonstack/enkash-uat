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
  optimizedIcon,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
  taskIconFive,
} from "."

import ManagementCard from "@/components/management-card/management-card"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import FeatureCard from "@/components/featureCard/feature-card"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"

const showScroll = cardsData.length > 3

const QrCode = (): React.JSX.Element => {
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
                    { name: "Collect Payments", url: "/collect-payments" },
                    {
                      name: "QR Code",
                      url: "/collect-payments/qr-code",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex text-center flex-column flex-md-row `}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "QR Codes",
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
                        title: "Contactless Payments with UPI QR Code",
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
                          "Generate unique QR codes to collect payments via any UPI app while tracking each transaction for your business.",
                        color: "color-black subHeading",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0"
                  />
                </div>

                <div className="">
                  <Image
                    src={groupIcon}
                    alt="card visual"
                    className={`${styles.group_logo}  `}
                  />
                  <div
                    className={`${styles.first_row_button} d-flex  align-items-center`}
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
        <div className="">
          <div className="pb-4 pb-md-5 text-center">
            <DynamicHeading
              content={[
                {
                  title: "Best Online Payment Solution",
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
                      title: "Fast",
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
                <Image src={activationIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Economical",
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
                      title: "Secure",
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
          <div className={`${styles.title} text-center pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "Accepting Payments via ",
                  color: "color-black",
                },
                {
                  title: "QR Codes ",
                  color: "color-equity-blue",
                },
                {
                  title: "was Never This Easy",
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
              <div className={`${styles.list_button} `}>
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
          <div className={`${styles.section}`}>
            <div className={`row  align-items-center `}>
              <div className={`${styles.title} text-center `}>
                <div
                  className={`text-center mb-4 mb-md-5`}
                >
                  <DynamicHeading
                    content={[
                      {
                        title: "Why EnKash for Collecting ",
                        color: "color-black",
                      },
                      {
                        title: "QR Code Payments",
                        color: "color-equity-blue",
                      },
                      {
                        title: "?",
                        color: "color-equity-blue",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
              </div>

              <AllInOnePolicy
                icon={taskIconOne}
                title="Generate QR codes for your business in seconds"
                description="With EnKash QR codes, getting started is quick and easy. Generate your unique QR codes instantly through our user-friendly platform. No complicated processes or long wait times—just a few clicks, and you’re ready to accept payments, boosting efficiency for your business operations."
                image={paymentLinkImage}
                buttonUrl="/sales/?source=expense_management"
                maxImageHeight="243px"
              />

              <AllInOnePolicy
                icon={taskIconTwo}
                title="Showcase your Brand on Every QR Code"
                description="Stand out by adding your business logo to every QR code. With custom branding, you promote trust and professionalism and reinforce your brand identity at every payment interaction. It’s a simple yet powerful way to make your business memorable."
                image={shareImage}
                buttonUrl="/sales/?source=expense_management"
                maxImageHeight="305px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconThree}
                title="Generate QR Codes for Fixed or Dynamic Amounts"
                description="Enjoy the flexibility to generate fixed-amount codes for specific transactions or dynamic codes that allow open payments. Whether for recurring billing or flexible purchases, our solution adapts to your business needs, offering convenience for you and your customers."
                image={paymentOptionImage}
                buttonUrl="/sales/?source=expense_management"
                maxImageHeight="268px"
              />

              <AllInOnePolicy
                icon={taskIconFour}
                title="Real-time Reconciliation and Tracking of Financial Transactions"
                description="Stay on top of your business finances with EnKash’s real-time transaction tracking. Our powerful dashboard provides instant updates on payments, detailed reports, and reconciliation tools, ensuring you always have clear insights into your revenue streams for efficient financial management."
                image={notificationImage}
                buttonUrl="/sales/?source=expense_management"
                maxImageHeight="259px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconFive}
                title="Industry Leading Encryption and Compliance Standards"
                description="Protect your business and customer data with EnKash’s secure payment platform. Our QR codes are backed by advanced encryption and compliance with global security standards, giving you peace of mind and ensuring every transaction is safe, reliable, and trustworthy."
                image={optimizedIcon}
                buttonUrl="/sales/?source=expense_management"
                maxImageHeight="221px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sixth_row}>
        <div className={` max-w-auto`}>
          <div className={`${styles.title} text-center  pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "EnKash",
                  color: "color-black",
                },
                {
                  title: " QR Code Features",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
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

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Ready to simplify your collections?",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 mb-3 mb-md-0"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started  Today "
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
            <div className="mb-4">
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
          <div className={`${styles.title} text-center pb-4 pb-md-5`}>
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
                cardImage={paymentLink}
                linkUrl="/payment-gateway"
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Page"
                description="Set up custom-branded payment pages in just minutes, requiring no technical expertise to start accepting payments online."
                cardImage={paymentPage}
                linkUrl="/payment-page"
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
                titleHtml="UPI Payments"
                description="UPI payments with any app - BHIM, PhonePe, WhatsApp for smooth transactions. No SMS, no VPA hassles."
                cardImage={qrCodes}
                linkUrl="/upi-payments"
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

export default QrCode
