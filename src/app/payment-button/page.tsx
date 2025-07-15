"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { cardsData } from "./data"
import faqData, { SecondfaqData } from "./faq-data"
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
  secureImage,
  activationIcon,
  realTimeIcon,
  greenIcon,
} from "."

import ManagementCard from "@/components/management-card/management-card"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import { faqBg } from "../digital-marketing-card"
import SecondFaqHtml from "@/components/second-faq/secondFaqHtml"


// import bg1 from "./img/bg1.jpg"
// import bg2 from "./img/bg2.jpg"
// import bg3 from "./img/bg3.jpg"
// import bg4 from "./img/bg4.jpg"
// import bg5 from "./img/bg5.jpg"

const showScroll = cardsData.length > 3

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
                    { name: "Collect Payments", url: "/collect-payments" },
                    {
                      name: "Payment Button",
                      url: "/collect-payments/payment-button",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex d-none flex-column flex-md-row `}
              >
                <Heading
                  title={`Payment Button ${space}`}
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
                    title={`Sell smarter, not harder with  ${space}`}
                    color="black"
                    size="h2"
                    weight="7"
                  />
                  <div>
                    <Heading
                      title="EnKash Payment Buttons"
                      color="black"
                      size="h2"
                      weight="7"
                    />
                  </div>
                </div>

                <div className="d-flex mt-3 mb-3 pe-5 text-center text-md-start ">
                  <Heading
                    title="Embed a secure, customizable payment button on your website and collect payments in minutes."
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
                  style={{ objectFit: "contain" }}
                  className="
                   w-100 h-100"
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
              title="The Best Payment Button for Businesses"
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
              title={`How to Make a  ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`Payment Button${space}`}
              color="equity-blue"
              size="h1"
              weight="6"
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <div
                className={` mt-5 ${
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
                      marginLeft: "20px",
                      marginBottom: "60px",
                    }}
                  >
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-5 mx-5">
                <RectangleButton
                  title="Get Started"
                  theme="border-gray"
                  actionImage={blueArrow}
                  iconSize={15}
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
          <div className={`row  align-items-center gap-5 ${styles.section}`}>
            <div className={`${styles.title} text-center `}>
              <div
                className={`flex-column justify-content-center align-items-center pb-3`}
              >
                <Heading
                  title={`A Click is ${space}`}
                  color="black"
                  size="h1"
                  weight="5"
                />
                <Heading
                  title={`All it Takes ${space}`}
                  color="equity-blue"
                  size="h1"
                  weight="5"
                />
              </div>
            </div>

            <AllInOnePolicy
              icon={greenIcon}
              title="Setup in under 5 minutes"
              description="Add the button to your website or blog in under 5 minutes. Skip complex installations and technical hurdles with our straightforward setup process. Create your button, copy the code, and get started instantly without waiting for developer assistance."
              image={paymentLinkImage}
              buttonUrl="/sales/?source=expense_management"
            />

            <AllInOnePolicy
              icon={greenIcon}
              title="Ctrl C + Ctrl V = Payment Ready"
              description="No coding expertise is required. Copy-paste a one-line code. EnKash Payment Buttons seamlessly integrate into any website or blog, ensuring a smooth user experience and uninterrupted functionality with zero technical complications."
              image={shareImage}
              buttonUrl="/sales/?source=expense_management"
              reverse
            />

            <AllInOnePolicy
              icon={greenIcon}
              title="Accept Payments Anytime, Anywhere"
              description="Accept one-time or recurring payments effortlessly. Enable your customers to choose between single transactions or subscriptions, making your payment process adaptable to diverse business models and customer needs."
              image={paymentOptionImage}
              buttonUrl="/sales/?source=expense_management"
            />

            <AllInOnePolicy
              icon={greenIcon}
              title="Match Your Style"
              description="Match your brand’s look and feel with customizable styles, colors, and text. Design buttons that align with your business identity, creating a consistent and professional appearance for your online presence."
              image={notificationImage}
              buttonUrl="/sales/?source=expense_management"
              reverse
            />

            <AllInOnePolicy
              icon={greenIcon}
              title="Optimized for the Mobile"
              description="Designed for optimal performance on all devices. Provide a seamless payment experience for users of smartphones, tablets, or desktops, catering to the growing mobile commerce trends."
              image={secureImage}
              buttonUrl="/sales/?source=expense_management"
            />

            <AllInOnePolicy
              icon={greenIcon}
              title="Don’t Compromise on Security"
              description="Industry-leading security and compliance standards ensure safe payments. Protect your customers’ data with advanced encryption and fraud detection, building trust and credibility for your business."
              image={notificationImage}
              buttonUrl="/sales/?source=expense_management"
              reverse
            />
          </div>
        </div>
      </div>

      <div className={`${styles.eigth_row} relative`}>
        <div className={`${styles.faqSection} text-start pb-5 max-w-auto`}>
          <div className={`${styles.title} text-start pb-5`}>
            <div>
              <Heading
                title={`A ${space}`}
                color="black"
                size="h1"
                weight="6"
              />
              <Heading
                title={`Button for Every   ${space}`}
                color="equity-blue"
                size="h1"
                weight="6"
              />
            </div>

            <div>
              <Heading
                title={`Payment    ${space}`}
                color="equity-blue"
                size="h1"
                weight="6"
              />
              <Heading
                title={`Need ${space}`}
                color="black"
                size="h1"
                weight="6"
              />
            </div>
          </div>

          <div>
            <SecondFaqHtml SecondfaqData={SecondfaqData} />
          </div>
          <div className={styles.faq_bg}>
            <Image src={faqBg} alt="background image" />x
          </div>
        </div>
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <Heading
              title="Ready to design your payment button?"
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

export default PaymentGateway
