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
  realTimeIcon,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
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



const showScroll = cardsData.length > 3

const DigitalInvoicing = (): React.JSX.Element => {
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
                      name: "Digital Invoicing",
                      url: "/digital-invoicing",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex text-center flex-column flex-md-row  `}
              >
                <Heading
                  title={`Digital Invoicing${space}`}
                  color="equity-blue"
                  size="h4"
                  weight="4"
                  underline
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-flex flex-column   pt-3 pt-md-0">
                  <Heading
                    title={`Enhance business operations with Digital Invoicing${space}`}
                    color="black"
                    size="h2"
                    weight="7"
                  />

                  <Heading title="" color="black" size="h2" weight="7" />
                </div>

                <div className="d-flex mt-3 mb-3  text-center text-md-start ">
                  <Heading
                    title="Automate your invoicing process for recurring transactions and gain complete visibility of sales and payments."
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
              title="Instant Payments Settlement for Better Cash Flow"
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
                  weight="6"
             
                />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <Heading
                  title="Automated Invoice Generation"
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
                  title="Real-Time Tracking"
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
                <Image src={realTimeIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                {" "}
                <Heading
                  title="Seamless Integration"
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
              title={`How to Set Up${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={` EnKash Digital Invoicing`}
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
                className={`flex-column justify-content-center align-items-center pb-md-3`}
              >
                <Heading
                  title={`Effortless ${space}`}
                  color="equity-blue"
                  size="h1"
                  weight="5"
                />
                <Heading
                  title={`Invoicing, ${space}`}
                  color="black"
                  size="h1"
                  weight="5"
                />
                <Heading
                  title={`Faster ${space}`}
                  color="equity-blue"
                  size="h1"
                  weight="5"
                />
                <Heading
                  title={`Payments`}
                  color="black"
                  size="h1"
                  weight="5"
                />
               
              </div>
            </div>

            <AllInOnePolicy
              icon={taskIconOne}
              title="OCR Technology for Efficiency"
              description="With EnKash, you can digitally upload your invoices, which are scanned using OCR technology. This helps save time and reduces the risk of human error."
              image={paymentLinkImage}
              buttonUrl="/sales/"
              maxImageHeight="243px"
            />
            <AllInOnePolicy
              icon={taskIconTwo}
              title="Better Cash Flow"
              description="Digital invoices can be processed quickly, meaning your business can get paid faster and have better cash flow."
              image={notificationImage}
              buttonUrl="/sales/?source=expense_management"
              maxImageHeight="259px"
              reverse
            />
            <AllInOnePolicy
              icon={taskIconThree}
              title="Eliminates Manual Errors"
              description="Digital invoices can help reduce manual errors. This can help your business avoid costly disputes and delays in payment."
              image={shareImage}
              buttonUrl="/sales/"
              maxImageHeight="305px"
            />
            <AllInOnePolicy
              icon={taskIconFour}
              title="Tracking via Dashboard "
              description="On EnKash, invoices can be easily tracked and monitored, making it easier to identify outstanding invoices and improve collections."
              image={paymentOptionImage}
              buttonUrl="/sales/"
              maxImageHeight="305px"
              reverse
            />
           
          </div>
        </div>
      </div>

    <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <Heading
              title="Opt For Digital Invoicing and Get Paid Faster! "
              size="bannerHeading"
              color="white"
              weight="4"
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

export default DigitalInvoicing
