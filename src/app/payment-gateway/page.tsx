"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import {
  acceleratedGrowthData,
  dashboardData,
  integrationData,
  paymentMethodData,
  rankData,
  savingData,
  supportData,
} from "./data"
import faqData from "./faq-data"
import { Header, Heading, FAQHtml, Footer } from "@/components"
import {
  blueArrow,
  groupIcon,
  paymentSummary,
  integration,
  paymenyMethod,
  dashboard,
  rank,
  support,
  leftHand,
  acceleratedGrowthImg,
  paymentLink,
  paymentPage,
  qrCodes,
  invoices,
  paymentButton,
  autoCollect,
  instant,
  reminder,
} from "."

import ManagementCard from "@/components/management-card/management-card"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"

const PaymentGateway = (): React.JSX.Element => {
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
                    { name: "Products", url: "/products" },
                    {
                      name: "Payment Gateway",
                      url: "/products/payment-gateway",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex d-none flex-column flex-md-row `}
              >
                <Heading
                  title={`Payment Gateway ${space}`}
                  color="equity-blue"
                  size="h4"
                  weight="4"
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-flex flex-column   pt-4 pt-md-0">
                  <Heading
                    title={`India’s First Payment${space}`}
                    color="black"
                    size="h2"
                    weight="7"
                  />
                  <div>
                    <Heading
                      title=" Gateway Built for SMBs"
                      color="black"
                      size="h2"
                      weight="7"
                    />
                  </div>
                </div>

                <div className="d-flex mt-3 mb-3 pe-5 text-center text-md-start ">
                  <Heading
                    title="The best payment gateway for a superior merchant experience."
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
                        title="Get Started  Today "
                        theme="blue"
                        url="/sales/?source=expense_management"
                      />
                    </div>
                    <div>
                      <RectangleButton
                        title="API Documentation"
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
                  style={{ objectFit: "contain" }}
                  height={625}
                />
              </div>
            </div>
          </div>
          <LogoSlider type="customers" />
        </div>
      </div>

      <div className={`row ${styles.second_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32  align-items-center max-w-auto">
          <div className="d-inline justify-content-center  align-items-center text-center">
            <Heading
              title="Say Hello to a"
              size="h3"
              color="white"
              weight="3"
            />
            <Heading
              title={`${space} Smarter, Faster & Secure ${space}`}
              size="h3"
              color="white"
              weight="6"
              italic
            />
            <Heading
              title="way to handle transactions"
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
                  title="Support"
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
                  title="Uptime"
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
                <Heading
                  title="100+"
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
                  title="Faster"
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
        <div className="max-w-auto">
          <div className={`${styles.title} text-center`}>
            <Heading
              title={`Built for SMBs,  ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />
            <Heading
              title={`Trusted by Business/Organisations ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
          </div>

          {/* Section 1 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-1">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Developer First Integration  ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Built for developers, our robust SDKs, APIs, and plugins support major languages and platforms ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div className={` ${styles.payment_section}`}>
                {integrationData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
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
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 d-flex my-md-5 my-3 justify-content-end ${styles.third_container} order-2 order-md-2`}
            >
              <div>
                <Image
                  src={integration}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  height={618}
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div
            className={`row bg-color-soft-mint pb-[50px] pt-[50px] align-items-center ${styles.section}`}
          >
            <div
              className={`col-md-6 col-12 d-flex my-md-5 my-3 ${styles.third_container} order-2 order-md-1`}
            >
              <div>
                <Image
                  src={paymenyMethod}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  style={{ maxHeight: "563px" }}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Accept All Payment Methods ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Provide your customers with the freedom to choose how they pay with several online payment methods. ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {paymentMethodData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
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
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-1">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Powerful Dashboards to Drive Decisions ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Get detailed statistics and reports on payments, settlements, refunds, and much more for informed decision-making. ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {dashboardData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
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
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 d-flex my-md-5 my-3 justify-content-end ${styles.third_container} order-2 order-md-2`}
            >
              <div>
                <Image
                  src={dashboard}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  height={672}
                />
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div
            className={`row bg-color-soft-mint pb-[50px] pt-[50px] align-items-center ${styles.section}`}
          >
            <div
              className={`col-md-6 col-12 d-flex my-md-5 my-3 justify-content-start ${styles.third_container} order-2 order-md-1`}
            >
              <div>
                <Image
                  src={rank}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  height={493}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Bank Grade Security ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Enjoy enterprise-grade security to reassure your customers of secure and reliable payment transactions. ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {rankData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
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
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-1">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`100% Lifetime Support  ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Dedicated Relationship Managers: Get personalized assistance from experts who understand your business and growth goals. ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {supportData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
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
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 d-flex  justify-content-end ${styles.third_container} order-2 order-md-2`}
            >
              <div>
                <Image
                  src={support}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  height={705}
                />
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div
            className={`row bg-color-soft-mint  pb-0 pb-md-5  position-relative ${styles.section}`}
          >
            <div
              className={`col-md-6 col-12 d-flex my-md-5  ${styles.third_container} order-2 order-md-1`}
            >
              <div className={`${styles.custom_bottom_offset}`}>
                <Image
                  src={leftHand}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  style={{ maxHeight: "625px" }}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Advanced Checkout and Card Saving  ${space}`}
                  color="black"
                  size="h3"
                  weight="5"
                />
                <Heading
                  title={`Enhance your checkout experience with features designed for convenience and efficiency: ${space}`}
                  color="main-grey"
                  size="h5"
                  weight="4"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {savingData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
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
                  title="Get Started  Today "
                  theme="outline-blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.eigth_row}  `}>
        <div className="max-w-auto ">
          <div className={`${styles.section}`}>
            <div
              className={`${styles.title} text-start  d-flex flex-column pb-5`}
            >
              <Heading
                title={`Best Payment Gateway in India for ${space}`}
                color="black"
                size="h1"
                weight="6"
              />
              <Heading
                title={`Accelerated Growth ${space}`}
                color="equity-blue"
                size="h1"
                weight="6"
              />
            </div>

            <div className="col-12 ">
              {acceleratedGrowthData.map(({ icon, title }, i) => (
                <div key={i} style={{ direction: "ltr" }}>
                  <div className="d-flex align-items-start gap-3 py-3 w-4 h-4">
                    <div
                      className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <Image src={icon} alt="icon" />
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <Heading
                        title={title}
                        color="black"
                        size="h4"
                        weight="5"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.faq_bg}>
                <Image src={acceleratedGrowthImg} alt="background image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <Heading
              title="Discover the EnKash difference - Secure, Scalable and Seamless. "
              size="bannerHeading"
              color="white"
              weight="4"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started  Today "
              theme="outline-blue"
              actionImage={blueArrow}
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-5`}>
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
                  color="main-grey"
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
                whiteTitle="Payment Link"
                description="Collect payments across WhatsApp, SMS, Facebook, Twitter, and other platforms with no-code payment links."
                cardImage={paymentLink}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                whiteTitle="Payment Page"
                description="Create custom-branded Payment Pages in minutes to accept payments online—no tech effort needed."
                cardImage={paymentPage}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                whiteTitle="Payment Button"
                description="Integrate a pre-designed payment button to your website with a simple plug-and-play solution."
                cardImage={paymentButton}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                whiteTitle="QR Codes"
                description="Secure, contactless payment with QR codes to enable businesses to accept instant transactions."
                cardImage={qrCodes}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                whiteTitle="Auto Collect"
                description="Accept NEFT, RTGS, and IMPS transfers using on-demand customer identifiers with automated reconciliation at scale."
                cardImage={autoCollect}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                whiteTitle="Invoices"
                description="Automate invoicing for recurring transactions, track sales and payments, and create bulk invoices with payment links."
                cardImage={invoices}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                whiteTitle="Instant Settlement"
                description="Access your funds instantly, skip standard settlement cycles, and gain better control over your cash flow."
                cardImage={instant}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                whiteTitle="Reminder Engine"
                description="Eliminate manual reminders and effortlessly automate your business collections for smoother cash flow."
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

export default PaymentGateway
