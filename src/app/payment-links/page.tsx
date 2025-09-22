import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import { cardsData, managementCards, policies } from "./data"
import faqData, { SecondfaqData } from "./faq-data"

// components
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import PolicyCard from "@/src/components/policy-card"
import CommonButton from "@/src/components/buttons"
import ManagementCard from "@/src/components/management-card"
import SecondFaqHtml from "@/src/components/second-faq/secondFaqHtml"
import PaymentLinkTab from "@/src/components/payment-link-tabs/payment-link-tab"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import { FaqSection } from "@/src/components"

//helpers
import {
  groupIcon,
  paymentSummary,
  mealCardImage,
  activationIcon,
  realTimeIcon,
  travelBookingIcon,
  registrationFeesIcon,
  onlinSellsIcon,
  feeCancelIcon,
  invoiceIcon,
  faqBg,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
} from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Simple Payment Links to Accept Online Payments",
  description:
    "Create and share secure payment links in seconds—no coding needed. Accept UPI, cards, and net banking with EnKash’s powerful payment link solution.",
  alternates: {
    canonical: `${process.env.URL}/payment-links/`,
  },
})
const salesUrl = getSalesUrl("/payment-links")

const showScroll = cardsData.length > 3

const PaymentLinks = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.hero_section} `}>
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
                    <CommonButton
                      title="Get Started  "
                      theme="blue"
                      url={salesUrl}
                    />

                    <CommonButton
                      title="API Doc"
                      theme="outline-blue"
                      url="https://docs.enkash.com"
                    />
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

      <div className={`row ${styles.introduction_section} `}>
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
                <DynamicHeading
                  content={[
                    {
                      title: "100+ Payment Options",
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
                <DynamicHeading
                  content={[
                    {
                      title: "Instant Activation",
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
                <DynamicHeading
                  content={[
                    {
                      title: "Real-time Monitoring",
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

      <div className={styles.features_section}>
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
                <CommonButton
                  title="Get Started"
                  theme="outline-blue"
                  url={salesUrl}
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

      <div className={`${styles.use_case_section}  `}>
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
              <div className={styles.allInOnePolicyCard}>
                {policies.map((policy, index) => (
                  <AllInOnePolicy
                    key={index}
                    icon={policy.icon}
                    title={policy.title}
                    description={policy.description}
                    image={policy.image}
                    buttonUrl={salesUrl}
                    maxImageHeight={policy.maxImageHeight}
                    reverse={policy.reverse}
                  />
                ))}
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
          sectionHeading="Payment Link for All Merchants:"
          secondHeading="Accept Payments Anywhere, Anytime"
          progressData={[
            {
              itemArray: ["Invoicing and Billing"],
              title: "Invoicing and Billing",
              subtitleOne: "Invoice Payments",
              descriptionOne:
                "Merchants can embed payment links directly into invoices, making it easy for clients to pay outstanding balances with a single click.",
              subtitleTwo: "Recurring Payments ",
              descriptionTwo:
                "Payment links are used to set up recurring payments for subscriptions, memberships, or other recurring services.",
              icon: invoiceIcon,
              bgImage: bg1,
            },
            {
              itemArray: ["Fee Collection"],
              title: "Fee Collection",
              subtitleOne: "Schools and Educational Institutions",
              descriptionOne:
                "Streamline tuition and other fee payments by sending unique payment links to students or parents.",
              subtitleTwo: "Professional Services",
              descriptionTwo:
                " Lawyers, accountants, and consultants can use payment links to collect retainers, invoices, or other professional fees.",
              icon: feeCancelIcon,
              bgImage: bg2,
            },
            {
              itemArray: ["Online Sales"],
              title: "Online Sales",
              subtitleOne: "Direct Sales",
              descriptionOne:
                " Merchants can easily create and share payment links for individual products or services, enabling customers to purchase directly through a simple link.",
              subtitleTwo: "Social Media Sales",
              descriptionTwo:
                "Payment links are ideal for merchants selling through platforms like Instagram or Facebook, where customers can easily click and pay without leaving the platform.",
              icon: onlinSellsIcon,
              bgImage: bg3,
            },
            {
              itemArray: ["Registration Fees"],
              title: "Registration Fees",
              subtitleOne: "Event Tickets",
              descriptionOne:
                " Event organizers can use payment links to sell tickets online, providing a convenient and secure payment option.",
              subtitleTwo: "Workshop or Class Registration ",
              descriptionTwo:
                " Payment links can be used to collect registration fees for workshops, classes, or other events.",
              icon: registrationFeesIcon,
              bgImage: bg4,
            },
            {
              itemArray: ["Travel Bookings"],
              title: "Travel Bookings",
              subtitleOne: "Travel Agents and Operators",
              descriptionOne:
                " Use payment links to collect deposits or full payments for travel packages, flights, accommodations, and other travel-related services. This streamlines the booking process and reduces administrative overhead.",
              subtitleTwo: "Accommodation Providers",
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
                  title: "Ready To Simplify Your Collections?",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 mb-3 mb-md-0"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <CommonButton
              title="Get Started  Today "
              theme="outline-blue"
              arrow
              url={salesUrl}
            />
          </div>
        </div>
      </div>
      <FaqSection faqData={faqData} />

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center  pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Check out other ",
                  color: "color-black",
                },
                {
                  title: "collection products",
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
          <div className="row g-3 pb-4">
            {managementCards.map((card, index) => (
              <div className="col-12 col-md-4" key={index}>
                <ManagementCard
                  titleHtml={card.titleHtml}
                  description={card.description}
                  cardImage={card.cardImage}
                  linkUrl={card.linkUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentLinks
