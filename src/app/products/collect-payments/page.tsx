import React from "react"
import Image from "next/image"
import styles from "./page.module.scss"
import { Metadata } from "next"

// data
import { allInOnePolicyData, cardData, dataSets } from "./data"
import faqData from "./faq-data"

import dynamic from "next/dynamic"

const AllInOnePolicy = dynamic(() => import("@/src/components/all-in-one-policy"))
import DynamicHeading from "@/src/components/dynamic-heading"
const FaqSection = dynamic(() => import("@/src/components/faq-section"))
const HowDoesItWork = dynamic(() => import("@/src/components/how-does-it-work"))
const PolicyCard = dynamic(() => import("@/src/components/policy-card"))
import CommanButton from "@/src/components/buttons"

// helpers
import {
  instantSettelmentIcon,
  instantSettelmentImg,
  affordabilityImg,
  affordabilityIcon,
} from "./img"

// utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import ProductHeroSection from "@/src/components/sections/product-hero-section"

export const metadata: Metadata = generateMetaData({
  title: "Collect Payments Online with EnKash",
  description:
    "From payment gateway, payment button, payment link, UPI payments, and more. Everything the merchants need fot payment collection.",
  alternates: {
    canonical: `${process.env.URL}/products/collect-payments`,
  },
})
const salesUrl = getSalesUrl("/collect-payments")

const CollectPayment = (): React.JSX.Element => {
  return (
    <div className={`color-white`}>
      <ProductHeroSection
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: "Collect Payments", url: "/products/collect-payments" },
        ]}
        title="Accept Payments the Smarter Way with EnKash"
        subtitle="No more chasing, no more delays – Payment Collection Solutions for Merchants Who Want to Make Money"
        animationName="CollectPaymentAnimation"
        buttonTitle="Talk to Us"
        buttonUrl={process.env.SALES_URL}
        buttonTheme="blue"
        linkColor="white"
      />

      <div className={styles.introduction_section}>
        <div className="max-m-auto">
          <DynamicHeading
            content={[
              {
                title: "Payments Rolling In Automatically, Every Time.",
                color: "color-white",
              },
            ]}
            headingTag="h3"
            className="f-5 text-center pb-4 pb-md-5"
          />

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

      <div className={`${styles.features_section}  `}>
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
                    priority={i === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.use_case_section} row d-flex row-padding-x-only position-relative`}
      >
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

      <div className={styles.cta_section}>
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
                <CommanButton
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
                <CommanButton
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
            <CommanButton
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
