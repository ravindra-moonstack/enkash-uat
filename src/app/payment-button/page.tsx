import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import { allInOnePolicyData, cardsData, managementCardData } from "./data"
import faqData, { SecondfaqData } from "./faq-data"

//components
import CommanButton from "@/src/components/buttons"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import FaqSection from "@/src/components/faq-section"
import PolicyCard from "@/src/components/policy-card"
import ManagementCard from "@/src/components/management-card"
import SecondFaqHtml from "@/src/components/second-faq/secondFaqHtml"

//helpers
import {
  groupIcon,
  paymentSummary,
  mealCardImage,
  activationIcon,
  realTimeIcon,
  faqBg,
} from "./img"

import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Payment Button: Add Instant Checkout to Your Website",
  description:
    "Easily embed EnKash Payment Buttons on your website or app. Enable fast, secure payments via UPI, cards & net banking—no complex integration needed.",
  alternates: {
    canonical: `${process.env.URL}/payment-button/`,
  },
})
const salesUrl = getSalesUrl("/payment-button")

const showScroll = cardsData.length > 3

const PaymentButton = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.hero_section} `}>
        <div className="max-w-auto">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 d-flex flex-column">
              <div className="d-flex">
                <CustomBreadcrumb
                  items={[
                    { name: "Home", url: "/" },
                    {
                      name: "Collect Payments",
                      url: "/products/collect-payments",
                    },
                    {
                      name: "Payment Button",
                      url: "/payment-button",
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
                      title: "Payment Button",
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
                <div className="flex-column   pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Collect smarter, not harder with EnKash Payment Button",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h1"
                    className="f-7"
                  />
                </div>

                <div className="mt-3 mb-3 text-md-start ">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Embed a secure, customizable payment button on your website and collect payments in minutes.",
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
                      <CommanButton
                        title="Get Started  "
                        theme="blue"
                        url={salesUrl}
                      />
                    </div>
                    <div>
                      <CommanButton
                        title="API Doc"
                        theme="outline-blue"
                        url="https://docs.enkash.com/"
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

      <div className={`row ${styles.introduction_section} `}>
        <div className="d-flex justify-content-center  flex-column gap-32  align-items-center max-w-auto">
          <div className="mb-4 mb-md-0 text-center">
            <DynamicHeading
              content={[
                {
                  title: "The Best Payment Button for Businesses",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
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
                <DynamicHeading
                  content={[
                    {
                      title: "Customizable",
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

      <div className={styles.features_section}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "How to Make a ",
                  color: "color-black",
                },
                {
                  title: "Payment Button ",
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
                <CommanButton
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
            <div className="row align-items-center">
              <div className={`${styles.title} text-center`}>
                <div className="flex-column text-center pb-4 pb-md-5">
                  <DynamicHeading
                    content={[
                      { title: "A Click is ", color: "color-black" },
                      { title: "All it Takes", color: "color-equity-blue" },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
              </div>

              {allInOnePolicyData.map((item, index) => (
                <AllInOnePolicy
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  buttonUrl={salesUrl}
                  maxImageHeight={item.maxImageHeight}
                  reverse={item.reverse}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.eigth_row} `}>
        <div className={`${styles.faqSection} text-start  max-w-auto`}>
          <div className={`${styles.title} text-start pb-md-3 pb-3 col-md-8`}>
            <DynamicHeading
              content={[
                {
                  title: "A ",
                  color: "color-black",
                },
                {
                  title: "Button for Every Payment ",
                  color: "color-equity-blue",
                },
                {
                  title: "Need",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
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

      <div className={`${styles.cta_section} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="text-center mb-3 mb-md-0">
            <DynamicHeading
              content={[
                {
                  title: "Ready to design your payment button?",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <CommanButton
              title="Get Started Today "
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
                  title: "Check out ",
                  color: "color-black",
                },
                {
                  title: "other collection products",
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
            {managementCardData.map((card, index) => (
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

export default PaymentButton
