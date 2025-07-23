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
  paymentPage,
  invoices,
  paymentButton,
  autoCollect,
  instant,
  whiteArrow,
  mealCardImage,
  paymentLinkImage,
  shareImage,
  paymentOptionImage,
  notificationImage,
  secureImage,
  playIntegrationImage,
  activationIcon,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
  taskIconFive,
  taskIconSix,
  hundredPercentIcon,
} from "."

import ManagementCard from "@/components/management-card/management-card"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import { upiPayments } from "@/components/header"

const showScroll = cardsData.length > 3

const eNACH = (): React.JSX.Element => {
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
                      name: "e-NACH",
                      url: "/e-nach",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex d-none flex-column flex-md-row `}
              >
                <Heading
                  title={`e-NACH${space}`}
                  color="equity-blue"
                  size="h4"
                  weight="4"
                  underline
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-flex flex-column   pt-4 pt-md-0">
                  <Heading
                    title={`Automate Recurring Payments with EnKash eNACH`}
                    color="black"
                    size="h2"
                    weight="7"
                  />

                  <Heading title="" color="black" size="h2" weight="7" />
                </div>

                <div className="d-flex mt-3 mb-3  text-center text-md-start ">
                  <Heading
                    title="Effortlessly automate recurring collections with EnKash eNACH mandate. Set up fast, secure digital mandates and seamlessly collect large recurring payments"
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
              title="Powering Recurring Payment Collection"
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
                <Heading title="100%" color="white" size="h2" weight="6" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <Heading
                  title="Quick Mandate Creation"
                  color="white"
                  size="h5"
                  weight="4"
                  // useH1TagInHtml={true}
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
                <Heading
                  title="Easy Subscription Management"
                  color="white"
                  size="h5"
                  weight="4"
                  // useH1TagInHtml={true}
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
                  title="Instant Payment Settlement"
                  color="white"
                  size="h5"
                  weight="4"
                  // useH1TagInHtml={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-2`}>
            <Heading
              title={`How to${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`Set Up eNACH ${space}`}
              color="equity-blue"
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
                className={`flex-column justify-content-center align-items-center pb-md-3`}
              >
                <Heading
                  title={`Digital Payment System${space}`}
                  color="equity-blue"
                  size="h1"
                  weight="5"
                />
                <Heading
                  title={`for Recurring Payments`}
                  color="black"
                  size="h1"
                  weight="5"
                />
              </div>
            </div>

            <AllInOnePolicy
              icon={taskIconOne}
              title="Instant Digital Mandate Creation"
              description="Eliminate paperwork and delays—register mandates digitally for faster processing and hassle-free automation."
              image={paymentLinkImage}
              buttonUrl="/sales/"
              maxImageHeight="243"
            />
            <AllInOnePolicy
              icon={taskIconTwo}
              title="Smart Payment Retries for Higher Success Rates"
              description="Reduce revenue loss with automatic retries on failed payments, ensuring uninterrupted cash flow and improved collection efficiency."
              image={notificationImage}
              buttonUrl="/sales/?source=expense_management"
              maxImageHeight="259"
              reverse
            />
            <AllInOnePolicy
              icon={taskIconThree}
              title="Bulk Subscription Management Made Easy"
              description="Set up, track, and manage multiple mandates at scale directly to handle larger payments from a single dashboard—saving time and effort."
              image={shareImage}
              buttonUrl="/sales/"
              maxImageHeight="305"
            />
            <AllInOnePolicy
              icon={taskIconFour}
              title="One-Time Authentication, Lifetime Convenience"
              description="Secure recurring payments with a simple one-time authentication, offering a frictionless experience for both businesses and customers."
              image={paymentOptionImage}
              buttonUrl="/sales/"
              maxImageHeight="305"
              reverse
            />
            <AllInOnePolicy
              icon={taskIconFive}
              title="Customizable Checkout for a Branded Experience"
              description="Choose between a quick plug-and-play checkout or fully customize it with your brand’s identity, colors, and elements for better engagement."
              image={secureImage}
              buttonUrl="/sales/"
              maxImageHeight="305"
            />
            <AllInOnePolicy
              icon={taskIconSix}
              title="Plug & Play Integration"
              description="It provides customers a hassle-free and smooth authentication as compared to physical NACH and can be easily integrated via plug and play method."
              image={playIntegrationImage}
              buttonUrl="/sales/"
              maxImageHeight="305"
              reverse
            />
          </div>
        </div>
      </div>
      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <Heading
              title="Ready to simplify your collections? "
              size="bannerHeading"
              color="white"
              weight="4"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started Today!"
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
          <div className={`${styles.title} text-start text-md-center pb-5`}>
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
                description="No-code solution to seamlessly collect payments across multiple channels, ensuring you never miss a transaction"
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
                cardImage={upiPayments}
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
                titleHtml="Instant Settlement"
                description="Access your funds immediately, bypass traditional settlement cycles, and take greater control of your cash flow."
                cardImage={instant}
                linkUrl="/instant-settlement"
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default eNACH
