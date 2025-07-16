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


const showScroll = cardsData.length > 3

const PaymentPage = (): React.JSX.Element => {
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
                      name: "Payment Page",
                      url: "/collect-payments/payment-page",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex d-none flex-column flex-md-row `}
              >
                <Heading
                  title={`Payment Page ${space}`}
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
                    title={`Instant Online Payments   ${space}`}
                    color="black"
                    size="h2"
                    weight="7"
                  />

                  <Heading
                    title=" with Custom  Payment Page"
                    color="black"
                    size="h2"
                    weight="7"
                  />
                </div>

                <div className="d-flex mt-3 mb-3 pe-5 text-center text-md-start ">
                  <Heading
                    title="Create professional, branded payment pages that enable secure and hassle-free online payment collection."
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
              title="Best Online Payment Solution"
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
                  title="Fast"
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
                  title="Customizable"
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
                  title="Secure"
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
          <div className={`${styles.title} text-center pb-5`}>
            <Heading
              title={`How to Setup EnKash ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={` Payment Pages${space}`}
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
              <div className="m-5">
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
                  title={`Effortless Transactions, Secure Payments -  ${space}`}
                  color="black"
                  size="h1"
                  weight="5"
                />
                <Heading
                  title={` The EnKash Way ${space}`}
                  color="equity-blue"
                  size="h1"
                  weight="5"
                />
              </div>
            </div>

            <AllInOnePolicy
              icon={taskIconOne}
              title="Customization at Your Fingertips"
              description="Design payment pages that truly showcase your brand identity. Add your logo, select colors that resonate with your business, and customize fields to gather precise and relevant customer details. With memorable and professional URLs, sharing your payment page becomes a breeze, enhancing both brand recognition and user convenience."
              image={paymentLinkImage}
              buttonUrl="/sales/?source=expense_management"
              maxImageHeight="243"
            />

            <AllInOnePolicy
              icon={taskIconTwo}
              title="Multiple Payment Modes"
              description="Give your customers unmatched flexibility with over 180 domestic and international payment options. Whether they prefer UPI, net banking, credit or debit cards, wallets, or international currencies, EnKash ensures secure and seamless transactions, catering to a global audience and diverse payment preferences."
              image={shareImage}
              buttonUrl="/sales/?source=expense_management"
              maxImageHeight="305"
              reverse
            />

            <AllInOnePolicy
              icon={taskIconThree}
              title="Zero Coding Required"
              description="Spend more time growing your business and less time worrying about technical complexities. EnKash’s intuitive platform lets you create and launch fully functional payment pages within minutes, all without any coding knowledge or the need for additional technical resources."
              image={paymentOptionImage}
              buttonUrl="/sales/?source=expense_management"
              maxImageHeight="243"
            />

            <AllInOnePolicy
              icon={taskIconFour}
              title="Optimized for Mobile and Web"
              description="Ensure a flawless checkout experience on any device. EnKash Payment Pages are meticulously designed to adapt to smartphones, tablets, and desktops, offering customers an engaging and consistent interface that works seamlessly regardless of the device they use."
              image={notificationImage}
              buttonUrl="/sales/?source=expense_management"
              maxImageHeight="259"
              reverse
            />

            <AllInOnePolicy
              icon={taskIconFive}
              title="Get Real-time Insights"
              description="Leverage actionable insights with our powerful dashboard. Access real-time transaction data, monitor payment trends, and analyze customer behavior to make strategic business decisions that can drive growth and enhance operational efficiency."
              image={optimizedIcon}
              buttonUrl="/sales/?source=expense_management"
              maxImageHeight="259"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <Heading
              title="Turn clicks into transactions!"
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
              hoverImage={whiteArrow}
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

export default PaymentPage
