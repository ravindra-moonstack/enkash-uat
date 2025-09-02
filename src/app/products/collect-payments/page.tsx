import Image from "next/image"
import styles from "./page.module.scss"
import { allInOnePolicyData, cardData, dataSets } from "./data"
import {
  DynamicHeading,
  LogoSlider,
  CustomBreadcrumb,
  RectangleButton,
  AllInOnePolicy,
  HowDoesItWork,
  PolicyCard,
  FaqSection,
  LottieDynamicLoadComponent,
} from "@/src/components"
import {
  instantSettelmentIcon,
  instantSettelmentImg,
  affordabilityImg,
  affordabilityIcon,
} from "."

import CommonButton from "@/src/components/buttons/index"

import faqData from "./faq-data"
import generateMetaData from "@/src/common/utils/metaData"
import { Metadata } from "next"
import { getSalesUrl } from "@/src/common/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Simplify Online Payment Collections with EnKash",
  description:
    "From payment gateway, payment button, payment link, UPI payments, and more. Everything the merchants need fot payment collection.",
  alternates: {
    canonical: `${process.env.URL}/collect-payments/`,
  },
})
const salesUrl = getSalesUrl("/collect-payments")

const CollectPayment = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                {
                  name: "Collect Payments",
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
                      "No more chasing, no more delays - Payment Collection Solutions for Merchants Who Want to Make Money",
                    color: "color-white subHeading",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />
            </div>

            <div className="mt-md-5 mt-3 justify-content-center d-flex">
              <RectangleButton title="Talk to Us" theme="blue" url={salesUrl} />
            </div>
          </div>
          <div className=" col-12 d-flex justify-content-center align-items-center">
            <div className={styles.lottie_container}>
              <LottieDynamicLoadComponent
                animationName={"CollectPaymentAnimation"}
                loop={true}
              />
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
                  title: "Payments Rolling In Automatically, Every Time.",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
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
              <div
                className={`${styles.all_in_section_inner} d-flex flex-column gap-3`}
              >
                {allInOnePolicyData.map((item, i) => (
                  <AllInOnePolicy
                    key={i}
                    {...item}
                    buttonUrl={item.buttonUrl}
                    buttonText="Learn more"
                  />
                ))}
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
          {/* <Spline scene="https://prod.spline.design/ukQwfbMk8aMlhZus/scene.splinecode" /> */}
        </div>

        {/* Foreground content */}
        <div
          className={`${styles.text_container} max-w-auto position-relative`}
        >
          <div
            className={`d-flex flex-column text-center mb-4 mb-md-5 ${styles.textHeading}`}
          >
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
          </div>

          <div className={styles.how_it_workssection}>
            <HowDoesItWork dataSets={dataSets} ctaText="Explore More" />
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
                <CommonButton
                  title="Learn more"
                  theme="border-gray"
                  url={"/instant-settlement"}
                  arrow
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
            <div className="col-12 col-md-6 order-2 order-md-1">
              <Image
                src={affordabilityImg}
                alt="background image"
                className="w-100 mh-550 object-fit-contain"
              />
            </div>

            <div className="col-12 col-md-6 order-1 order-md-2">
              <PolicyCard
                icon={affordabilityIcon}
                title={"Affordability Suite"}
                description={
                  "Empower customers with flexible payment options such as EMI and pay-later solutions, making high-value transactions more accessible while improving purchasing power and boosting sales for businesses."
                }
              />
              <div className={` ${styles.list_button}`}>
                <CommonButton
                  title="Learn more"
                  theme="border-gray"
                  url={"/affordability-suite"}
                  arrow
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
                    "You Focus on Your Business. Let Us Focus on Payment Collection.",
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
                    "Wherever your customers are, however they pay, you get paid.",
                  color: "color-white subHeading",
                },
              ]}
              headingTag="p"
              className="mb-0"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <CommonButton
              title="Explore Our Solutions "
              theme="outline-blue"
              url={salesUrl}
              arrow
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default CollectPayment
