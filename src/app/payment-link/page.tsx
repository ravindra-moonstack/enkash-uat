import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"
import { cardsData } from "./data"
import faqData, { SecondfaqData } from "./faq-data"
import {
  Header,
  FAQHtml,
  Footer,
  DynamicHeading,
  TalkToSales,
  LogoSlider,
  CustomBreadcrumb,
  PolicyCard,
  RectangleButton,
  ManagementCard,
  SecondFaqHtml,
  PaymentLinkTab,
  AllInOnePolicy

} from "@/components"
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
  websiteIcon,
  quickIcon,
  paymentOptionIcon,
  notificationIcon,
  secureIcon,
  travelBookingIcon,
  registrationFeesIcon,
  onlinSellsIcon,
  feeCancelIcon,
  invoiceIcon,
} from "."

import { faqBg } from "../digital-marketing-card"
import bg1 from "./img/bg5.jpg"
import bg2 from "./img/bg4.jpg"
import bg3 from "./img/bg3.jpg"
import bg4 from "./img/bg2.jpg"
import bg5 from "./img/bg1.jpg"


const showScroll = cardsData.length > 3

const PaymentLink = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="expense_management" />

      <TalkToSales />

      <div className={`${styles.first_row} `}>
        <div className="max-w-auto">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <CustomBreadcrumb
                  items={[
                    { name: "Home", url: "/" },
                    {
                      name: "Collect Payments",
                      url: "/products/collect-payments",
                    },
                    {
                      name: "Payment Links",
                      url: "/payment-links",
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
                      title: "Payment Links",
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
                        title:
                          "Accept Payments Instantly with EnKash Payment Links",
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
                          "Create payment link effortlessly—no website or app needed. Share via SMS, WhatsApp, email, or social media, and accept payments through 100+ methods - no coding required.",
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
              <div className={`${styles.right_img} position-relative  d-flex`}>
                <Image
                  src={paymentSummary}
                  alt="card visual"
                  style={{ objectFit: "contain", maxHeight: "672px" }}
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <LogoSlider />
      </div>

      <div className={`row ${styles.second_row} `}>
        <div className="gap-32  align-items-center max-w-auto">
          <div className="d-inline justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Simplify Payments, Amplify Business",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 mb-4 "
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
                      title: "Payment Options",
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
                  title: "How to Create  ",
                  color: "color-black",
                },
                {
                  title: "Payment Links",
                  color: "color-equity-blue",
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
                  url="/sales/"
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
                  className={`flex-column justify-content-center   mb-md-5 mb-4`}
                >
                  <DynamicHeading
                    content={[
                      {
                        title: "Get Paid with a ",
                        color: "color-black",
                      },
                      {
                        title: "Single Link ",
                        color: "color-equity-blue",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
              </div>

              <div className={`${styles.allInOnePolicyCard}  `}>
                <AllInOnePolicy
                  icon={quickIcon}
                  title="Quick and Easy Setup"
                  description="Generate payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing businesses of all sizes to start quickly. Focus on running your business while we simplify your payment collection process."
                  image={paymentLinkImage}
                  buttonUrl="/sales/?source=expense_management"
                  maxImageHeight="248px"
                />

                <AllInOnePolicy
                  icon={websiteIcon}
                  title="No Website Required"
                  description="EnKash Payment Links are perfect for businesses without an online presence. Collect payments via SMS, WhatsApp, email, or social media, eliminating the need for a website or app. This solution bridges the gap between offline and online payment experiences seamlessly."
                  image={shareImage}
                  buttonUrl="/sales/?source=expense_management"
                  maxImageHeight="305px"
                  reverse
                />

                <AllInOnePolicy
                  icon={paymentOptionIcon}
                  title="100+ Payment Options"
                  description="Offer your customers the flexibility to pay using their preferred method, including UPI, net banking, credit/debit cards, wallets, and more. EnKash Payment Links ensure a smooth checkout experience for everyone, boosting customer satisfaction and increasing conversions"
                  image={paymentOptionImage}
                  buttonUrl="/sales/?source=expense_management"
                  maxImageHeight="243px"
                />

                <AllInOnePolicy
                  icon={notificationIcon}
                  title="Real-Time Notifications"
                  description="Stay in the loop with instant alerts for every successful payment. Gain better control and visibility into your transactions, enabling faster decision-making and improved financial management. Receive updates across all devices to keep your operations running smoothly."
                  image={notificationImage}
                  buttonUrl="/sales/?source=expense_management"
                  maxImageHeight="259px"
                  reverse
                />

                <AllInOnePolicy
                  icon={secureIcon}
                  title="Secure Transactions"
                  description="Built on a foundation of PCI DSS compliance and advanced encryption protocols, EnKash Payment Links ensure every transaction is safe and secure. Protect sensitive customer data while providing a trustworthy payment experience, strengthening customer confidence in your business."
                  image={secureImage}
                  buttonUrl="/sales/?source=expense_management"
                  maxImageHeight="259px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.eigth_row} `}>
        <div className={`${styles.faqSection} text-start  max-w-auto`}>
          <div className={`${styles.title} text-start pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "Integrate with Ease. Connect Without Gaps.",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div>
                <SecondFaqHtml SecondfaqData={SecondfaqData} />
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.faq_bg}>
                <Image
                  src={faqBg}
                  alt="background image"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.tab_row}  bg-white `}>
        <PaymentLinkTab
          sectionHeading="Payment Link for All Organisation"
          secondHeading="Accept Payments Anywhere, Anytime"
          progressData={[
            {
              itemArray: ["Invoicing and Billing"],
              title: "Invoicing and Billing",
              subtitleOne: "Invoice Payments:",
              descriptionOne:
                " Businesses can embed payment links directly into invoices, making it easy for clients to pay outstanding balances with a single click.",
              subtitleTwo: "Recurring Payments: ",
              descriptionTwo:
                "Payment links are used to set up recurring payments for subscriptions, memberships, or other recurring services.",

              icon: invoiceIcon,
              bgImage: bg1,
            },
            {
              itemArray: ["Fee Collection"],
              title: "Fee Collection",
              subtitleOne: "Schools and Educational Institutions:",
              descriptionOne:
                "Streamline tuition and other fee payments by sending unique payment links to students or parents",
              subtitleTwo: "Professional Services:",
              descriptionTwo:
                " Lawyers, accountants, and consultants can use payment links to collect retainers, invoices, or other professional fees.",
              icon: feeCancelIcon,
              bgImage: bg2,
            },
            {
              itemArray: ["Online Sales"],
              title: "Online Sales",
              subtitleOne: "Direct Sales:",
              descriptionOne:
                " Businesses can easily create and share payment links for individual products or services, enabling customers to purchase directly through a simple link.",
              subtitleTwo: "Social Media Sales:",
              descriptionTwo:
                "Payment links are ideal for businesses selling through platforms like Instagram or Facebook, where customers can easily click and pay without leaving the platform.",
              icon: onlinSellsIcon,
              bgImage: bg3,
            },
            {
              itemArray: ["Registration Fees"],
              title: "Registration Fees",
              subtitleOne: "Event Tickets:",
              descriptionOne:
                " Event organizers can use payment links to sell tickets online, providing a convenient and secure payment option.",
              subtitleTwo: "Workshop or Class Registration: ",
              descriptionTwo:
                " Payment links can be used to collect registration fees for workshops, classes, or other events.",
              icon: registrationFeesIcon,
              bgImage: bg4,
            },
            {
              itemArray: ["Travel Bookings"],
              title: "Travel Bookings",
              subtitleOne: "Travel Agents and Operators:",
              descriptionOne:
                " Use payment links to collect deposits or full payments for travel packages, flights, accommodations, and other travel-related services. This streamlines the booking process and reduces administrative overhead.",
              subtitleTwo: "Accommodation Providers:",
              descriptionTwo:
                "Hotels, hostels, and other accommodation providers can use payment links to collect booking deposits or full payments directly from guests. This can be integrated into booking confirmation emails or used for last-minute bookings.",
              icon: travelBookingIcon,
              bgImage: bg5,
            },
          ]}
        />
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Ready to simplify your payments?",
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

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center  pb-4 pb-md-5`}>
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
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Page"
                description="Set up custom-branded payment pages in just minutes, requiring no technical expertise to start accepting payments online."
                cardImage={paymentPage}
              />
            </div>

            <div className="col-12 col-md-4">
              <ManagementCard
                titleHtml="Payment Button"
                description="Add a pre-designed payment button to your website with a simple plug-and-play integration."
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
                description="Remove manual reminders and easily automate your business collections for a more seamless cash flow."
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

export default PaymentLink
