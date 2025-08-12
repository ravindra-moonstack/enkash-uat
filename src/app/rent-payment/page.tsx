import Image from "next/image"
import Link from "next/link"
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
  secureImage,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import AllProducts from "@/components/all-products/all-products"
import ScrollableCardsSection from "@/components/scrollable-cards-section/scrollableCardsSection"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"

const mergedCards = allProductSections.flatMap((section) => section.items)

const RantPayment = (): React.JSX.Element => {
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
                      name: "Rent Payments",
                      url: "/rent-payment",
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
                      title: "Rent Payments",
                      color: "color-equity-blue underline",
                    },
                  ]}
                  headingTag="p"
                  className=""
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-inline   pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "Hassle-Free Rent Payments with EnKash",
                        color: "color-black ",
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
                          "Say goodbye to delays and manual effort. EnKash accelerates rent payments, ensuring they are fast, secure, and convenient",
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
          <div className={`${styles.title} text-center pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "How To Setup ",
                  color: "color-black",
                },
                {
                  title: "Rent Payments",
                  color: "color-equity-blue",
                },
                {
                  title: "Automation",
                  color: "color-black",
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
                showScroll={false}
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
          <div className={`${styles.section}`}>
            <div className={`row  align-items-center `}>
              <div className={`${styles.title} text-center `}>
                <div className={`text-center pb-4 pb-md-5 `}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Put an End to Rental Payment Woes with EnKash",
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
                  title="Eliminate Late Payment Penalties"
                  description="Avoid the stress and cost of missing due dates. EnKash’s automated reminders and recurring payment options ensure your rent is paid on time, every time. Say goodbye to late fees and improve your cash flow with a solution designed to keep you punctual without constant follow-ups."
                  image={paymentLinkImage}
                  buttonUrl="/sales"
                  maxImageHeight="243px"
                />

                <AllInOnePolicy
                  icon={taskIconTwo}
                  title="Multiple Payment Modes"
                  description="Pay your rent your way. Choose from UPI, NEFT, RTGS, credit cards, or digital wallets to make your rental payments. Whether you want instant processing or flexibility in managing funds, EnKash has a payment mode that works for you—and your landlord will thank you for it!"
                  image={shareImage}
                  buttonUrl="/sales"
                  maxImageHeight="305px"
                  reverse
                />

                <AllInOnePolicy
                  icon={taskIconThree}
                  title="Streamlined Payment Tracking"
                  description="Say goodbye to messy spreadsheets and fragmented payment records. EnKash’s centralized dashboard gives you a real-time view of all your rent transactions. Know what’s paid, what’s pending, and what’s overdue—all in one intuitive platform. Gain control and transparency like never before."
                  image={paymentOptionImage}
                  buttonUrl="/sales"
                  maxImageHeight="243px"
                />

                <AllInOnePolicy
                  icon={taskIconFour}
                  title="Instant Reconciliation"
                  description="Save hours of effort with automatic reconciliation. EnKash links your payments to corresponding invoices seamlessly, so you can track rent settlements without lifting a finger. No more manual matching, no more errors—just accurate records and peace of mind."
                  image={notificationImage}
                  buttonUrl="/sales"
                  maxImageHeight="259px"
                  reverse
                />

                <AllInOnePolicy
                  icon={taskIconFive}
                  title="Secure Transactions"
                  description="Your security is our priority. EnKash uses multi-layered encryption, fraud detection, and bank-grade protocols to safeguard every transaction. Whether you pay rent via credit card, UPI, or any other method, you can trust that your data and funds are protected."
                  image={optimizedIcon}
                  buttonUrl="/sales"
                  maxImageHeight="259px"
                />

                <AllInOnePolicy
                  icon={taskIconFour}
                  title="Fast Onboarding"
                  description="Get started with ease. EnKash’s onboarding process is quick, simple, and user-friendly. Complete your KYC, set up your rental payment preferences, and you’re good to go in just a few steps. No steep learning curve—just seamless functionality from day one."
                  image={secureImage}
                  buttonUrl="/sales"
                  maxImageHeight="259px"
                  reverse
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center max-w-auto`}>
          <div className={``}>
            <DynamicHeading
              content={[
                {
                  title: "One Platform ",
                  color: "color-equity-blue",
                },
                {
                  title: "for All Your Rental Payment Needs",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
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
                  title: "Ready to Redefine your Rent Payments?",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-3 pb-md-0"
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
                <div className="connectWithUs">
                  <Link href="/contact-us">
                    <DynamicHeading
                      content={[
                        {
                          title: "Connect with us",
                          color: "color-equity-blue ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 f-5"
                    />
                    <Image
                      src={blueArrow}
                      alt="blue Arrow"
                      width={15}
                      height={15}
                      className="ms-2"
                    />
                  </Link>
                </div>
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

export default RantPayment
