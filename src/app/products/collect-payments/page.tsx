"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { cardData, dataSets } from "./data"

import { Header, Heading, Footer, FAQHtml } from "@/components"

import {
  motherCardImg,
  paymentGatwayImg,
  paymentGatwayIcon,
  paymentLinkIcon,
  paymentLinkImg,
  paymentButtonIcon,
  paymentButtonImg,
  paymentPageIcon,
  upiIcon,
  upiImg,
  paymentPageImg,
  qrCodeIcon,
  qrCodeImg,
  instantSettelmentIcon,
  instantSettelmentImg,
  affordabilityImg,
  affordabilityIcon,
  blueArrow,
  whiteArrow,
  CollectpaymentGif,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
// import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work."
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import PolicyCard from "@/components/policyCard/policyCard"
import faqData from "./faq-data"
import LogoSlider from "@/components/logo-slider/logo-slider"
import Spline from "@splinetool/react-spline"
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work."
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"

const CollectPayment = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <Header utmSource="expense_management" />
      <TalkToSales />
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                {
                  name: "Collect Payment",
                  url: "/products/collect-payments",
                },
              ]}
              linkColor="white"
            />
          </div>
          <div className="col-12 d-flex flex-column text-center">
            <DynamicHeading
              content={[
                {
                  title: "Accept Payments the Smarter Way with EnKash",
                  color: "color-white",
                },
              ]}
              headingTag="h1"
              className="f-7 mt-4 mb-2"
            />

            <div className="d-inline">
              <DynamicHeading
                content={[
                  {
                    title:
                      "No more chasing, no more delays - Payment Collection Solutions for Businesses Who Want to Make Money",
                    color: "color-white subHeading",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />
            </div>

            <div className="mt-md-5 mt-3">
              <RectangleButton
                title="Talk to us"
                theme="blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
          <div className=" col-12 d-flex justify-content-center align-items-center">
            <div className={styles.lottie_container}>
              <div>
                <Image
                  src={CollectpaymentGif}
                  alt="card background"
                  className="position-relative w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <LogoSlider />
      </div>

      <div className={styles.second_row}>
        <div className="max-m-auto">
          <div
            className={`${styles.second_row_title} text-center pb-4 pb-md-5`}
          >
            <DynamicHeading
              content={[
                {
                  title: "Built for CFOs, Loved by Teams",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
            <DynamicHeading
              content={[
                {
                  title:
                    "From instant issuance to granular controls - corporate cards that do more.",
                  color: "color-white ",
                },
              ]}
              headingTag="p"
              className="mt-3"
            />
          </div>
          <div className={`d-flex  flex-wrap  ${styles.section}`}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: item.value,
                      color: "color-black",
                    },
                  ]}
                  headingTag="h2"
                  className="f-7"
                />

                <DynamicHeading
                  content={[
                    {
                      title: item.title,
                      color: "color-main-grey",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.third_row}  `}>
        <div className="max-w-auto">
          <div className={`${styles.section}`}>
            <div className={` row`}>
              <div className={`${styles.title} text-center pb-4 pb-md-5`}>
                <div className={` text-center `}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Faster, Smoother, Smarter",
                        color: "color-equity-blue",
                      },
                      {
                        title: " Payments Collection",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
              </div>
              <div className={` ${styles.all_in_section_inner} d-flex flex-column gap-3`}>
                <AllInOnePolicy
                  icon={paymentGatwayIcon}
                  title="Payment Gateway"
                  description="A high-performance gateway that enables businesses to accept payments through multiple methods such as credit cards, debit cards, UPI, net banking, and digital wallets, ensuring seamless transactions with exceptional success rates and security."
                  image={paymentGatwayImg}
                  buttonUrl="/sales/?source=expense_management"
                />

                <AllInOnePolicy
                  icon={paymentLinkIcon}
                  title="Payment Links"
                  description="Generate and share secure payment links instantly via SMS, email, WhatsApp, or social media, allowing businesses to collect payments from customers without requiring a website, ensuring quick and hassle-free transactions.."
                  image={paymentLinkImg}
                  buttonUrl="/sales/?source=expense_management"
                  reverse
                />
                <AllInOnePolicy
                  icon={paymentButtonIcon}
                  title="Payment Button"
                  description="Create payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing businesses of all sizes to start quickly. Focus on running your business while we simplify your payment collection process."
                  image={paymentButtonImg}
                  buttonUrl="/sales/?source=expense_management"
                />

                <AllInOnePolicy
                  icon={paymentPageIcon}
                  title="Payment Page"
                  description="Create payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing businesses of all sizes to start quickly. Focus on running your business while we simplify your payment collection process."
                  image={paymentPageImg}
                  buttonUrl="/sales/?source=expense_management"
                  reverse
                />
                <AllInOnePolicy
                  icon={upiIcon}
                  title="UPI Payments"
                  description="Create payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing businesses of all sizes to start quickly. Focus on running your business while we simplify your payment collection process."
                  image={upiImg}
                  buttonUrl="/sales/?source=expense_management"
                />

                <AllInOnePolicy
                  icon={qrCodeIcon}
                  title="QR Code Payments"
                  description="Create payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing businesses of all sizes to start quickly. Focus on running your business while we simplify your payment collection process."
                  image={qrCodeImg}
                  buttonUrl="/sales/?source=expense_management"
                  reverse
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.fourth_row} row d-flex row-padding-x-only position-relative`}
      >
        {/* Spline background */}
        <div
          className="position-absolute top-0 start-0 w-100"
          style={{ height: "600px", backgroundColor: "black" }}
        >
          <Spline scene="https://prod.spline.design/2RGFZhRx802a-Rzm/scene.splinecode" />
        </div>

        {/* Foreground content */}
        <div
          className={`${styles.text_container} max-m-auto position-relative`}
        >
          <div className={`d-flex flex-column text-center mb-4 mb-md-5 ${styles.textHeading}`}>
            <DynamicHeading
              content={[
                {
                  title: "Frictionless Payment ",
                  color: "color-white d-block",
                },
                {
                  title: "Automation for Your Business ",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />

            <div></div>
          </div>

          <div className={styles.how_it_workssection}>
            <HowDoesItWork dataSets={dataSets} />
          </div>
        </div>
      </div>

      <div className={styles.fifth_row}>
        <div className={`max-w-auto  ${styles.section}`}>
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div
                className={`${styles.title} text-center text-md-start pb-md-5 pb-3`}
              >
                <div>
                  <DynamicHeading
                    content={[
                      {
                        title: "Why Wait? Unlock ",
                        color: "color-black",
                      },
                      {
                        title: "Your Funds in Real-time",
                        color: "color-equity-blue",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
              </div>
              <PolicyCard
                icon={instantSettelmentIcon}
                title={"Instant Settlement"}
                description={
                  "Get immediate access to your funds after each transaction, minimizing cash flow delays, improving business liquidity, and ensuring better financial planning while enabling seamless operations with real-time settlement capabilities."
                }
              />
              <div className={` ${styles.list_button}`}>
                <RectangleButton
                  title="Try Now"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url={"/sales/?source=expense_management"}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <Image
                src={instantSettelmentImg}
                alt="background image"
                className="w-100 mh-550 object-fit-contain"
              />
            </div>
          </div>

          <div className="row align-items-center pt-4 ">
            {/* On mobile: order-2, on md+: order-1 */}
            <div className="col-12 col-md-6 order-2 order-md-1">
              <Image
                src={affordabilityImg}
                alt="background image"
                className="w-100 mh-550 object-fit-contain"
              />
            </div>

            {/* On mobile: order-1, on md+: order-2 */}
            <div className="col-12 col-md-6 order-1 order-md-2">
              <PolicyCard
                icon={affordabilityIcon}
                title={"Affordability Suite"}
                description={
                  "Empower customers with flexible payment options such as EMI and pay-later solutions, making high-value transactions more accessible while improving purchasing power and boosting sales for businesses."
                }
              />
              <div className={` ${styles.list_button}`}>
                <RectangleButton
                  title="Try Now"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url={"/sales/?source=expense_management"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.sixth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title:
                    "You Focus on Your Business. Let Us Focus on Payment Collection",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
            <DynamicHeading
              content={[
                {
                  title:
                    "We ensure accepting payment is effortless, no matter where your customers are or how they choose to pay.Explore Our Solutions",
                  color: "color-white subHeading",
                },
              ]}
              headingTag="p"
              className="mb-0"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Explore Our Solutions "
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
          <div className={`${styles.title} text-start  pb-2 pb-md-5`}>
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
                      title: "Have more questions",
                      color: "color-dark-grey subHeding",
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

      <Footer />
    </div>
  )
}

export default CollectPayment
