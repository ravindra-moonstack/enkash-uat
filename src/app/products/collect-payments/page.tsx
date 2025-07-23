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
            <Heading
              title="Accept Payments the Smarter Way with EnKash"
              color="white"
              size="h2"
              weight="7"
            />

            <div className="d-inline">
              <Heading
                title="No more chasing, no more delays - Payment Collection Solutions for Businesses Who Want to Make Money"
                color="white"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
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
                  src={motherCardImg}
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
            <Heading
              title={`Built for CFOs, Loved by Teams ${space}`}
              color="white"
              size="bannerHeading"
              weight="5"
            />

            <Heading
              title="From instant issuance to granular controls - corporate cards that do more."
              color="white"
              size="h5"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className={`d-flex  flex-wrap  ${styles.section}`}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
              >
                <Heading
                  title={item.value}
                  color="black"
                  size="h2"
                  weight="7"
                  useH1TagInHtml={true}
                />

                <Heading
                  title={item.title}
                  color="main-grey"
                  size="h6"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.third_row} row-padding `}>
        <div className="max-w-auto">
          <div className={` gap-5 ${styles.section}`}>
            <div className={`${styles.title} text-center pm-5`}>
              <div
                className={` flex-column justify-content-center align-items-center pb-3 `}
              >
                <Heading
                  title={`Faster, Smoother, Smarter ${space}`}
                  color="equity-blue"
                  size="h1"
                  weight="5"
                />
                <Heading
                  title={`Payments Collection ${space}`}
                  color="black"
                  size="h1"
                  weight="5"
                />
              </div>
            </div>
            <div className={` ${styles.all_in_section_inner} `}>
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

      <div
        className={`${styles.fourth_row} row d-flex row-padding-x-only position-relative`}
      >
        {/* Spline background */}
        <div
          className="position-absolute top-0 start-0 w-100"
          style={{ height: "600px" }}
        >
          <Spline scene="https://prod.spline.design/JffS0FYkygwKIO-g/scene.splinecode" />
        </div>

        {/* Foreground content */}
        <div
          className={`${styles.text_container} max-m-auto position-relative`}
        >
          <div className="d-flex flex-column text-center mb-5">
            <Heading
              title="Frictionless Payment "
              color="white"
              size="h1"
              weight="6"
            />
            <div>
              <Heading
                title="Automation for Your Business"
                color="equity-blue"
                size="h1"
                weight="6"
              />
            </div>
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
                  <Heading
                    title={`Why Wait? Unlock${space}`}
                    color="black"
                    size="h1"
                    weight="6"
                  />
                </div>
                <Heading
                  title={`Your Funds in Real-time ${space}`}
                  color="equity-blue"
                  size="h1"
                  weight="6"
                />
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
              <Image src={instantSettelmentImg} alt="background image" />
            </div>
          </div>

          <div className="row align-items-center pt-4 ">
            {/* On mobile: order-2, on md+: order-1 */}
            <div className="col-12 col-md-6 order-2 order-md-1">
              <Image src={affordabilityImg} alt="background image" />
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
            <Heading
              title="You Focus on Your Business. Let Us Focus on Payment Collection "
              size="bannerHeading"
              color="white"
              weight="4"
            />
            <Heading
              title="We ensure accepting payment is effortless, no matter where your customers are or how they choose to pay.Explore Our Solutions"
              size="h4"
              color="white"
              weight="4"
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
          <div className={`${styles.title} text-start  pb-5`}>
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

      {/* <div className={`${styles.fifth_row} relative`}>
        <div className={`${styles.title} text-center pb-5`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <Heading
              title={`One Platform.  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading
              title={`End-to-End Control.  ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />
          </div>
          <div>
            <Heading
              title="Connect Corporate Cards with Expense Management for a Unified Experience"
              color="alternate-grey"
              size="h5"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="pt-4">
            <RectangleButton
              title={"Explore Our Expense Management Suite"}
              theme="blue"
            />
          </div>
        </div>
        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div> */}

      {/* <div className={`${styles.eight_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <Heading
              title="Apply Now for Smarter Business Spending"
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
      </div> */}
      {/* 
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
      </div> */}

      <Footer />
    </div>
  )
}

export default CollectPayment
