import Image from "next/image"
import { Metadata } from "next"

import styles from "./page.module.scss"
import { allInOnePolicyData, allProductSections, cardsData } from "./data"
import faqData from "./faq-data"
import {  groupIcon, paymentSummary, mealCardImage } from "./img"

import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import PolicyCard from "@/src/components/policy-card"
import FaqSection from "@/src/components/faq-section"
import RectangleButton from "@/src/components/buttons/rectangle-button"
import AllProducts from "@/src/components/all-products"
import AllInOnePolicy from "@/src/components/all-in-one-policy"

import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import { CommanButton } from "@/src/components"

export const metadata: Metadata = generateMetaData({
  title: "Automate and Track your Vendor Payments ",
  description:
    "Streamline vendor payouts with EnKash. Automate payments, track due dates, and simplify reconciliation—save time and reduce errors in your accounts payable.",
  alternates: {
    canonical: `${process.env.URL}/vendor-payment/`,
  },
})

const salesUrl = getSalesUrl("/vendor-payment")

const showScroll = cardsData.length > 3
const mergedCards = allProductSections.flatMap((section) => section.items)

const VendorPayment = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.first_row} `}>
        <div className="max-w-auto">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 d-flex flex-column">
              <div className="d-flex">
                <CustomBreadcrumb
                  items={[
                    { name: "Home", url: "/" },
                    {
                      name: "Make Payments",
                      url: "/products/make-payments",
                    },
                    {
                      name: "Vendor Payment",
                      url: "/vendor-payment",
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
                      title: "Vendor Payment",
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
                <div className=" pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "Faster, Smarter Vendor Payments with EnKash",
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
                          "Transform your vendor payments with a single click and get complete control with real-time updates.",
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
                        url={salesUrl}
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
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <LogoSlider />
      </div>

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "Approve, Pay, reconcile - ",
                  color: "color-equity-blue",
                },
                {
                  title: "Vendor Payments in 3 Steps",
                  color: "color-black",
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
                    style={{ direction: "ltr" }}
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
              <div className={`${styles.list_button}`}>
                <RectangleButton
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

      <div className={`${styles.fourth_row}  `}>
        <div className="max-w-auto">
          <div className={`${styles.section}`}>
            <div className={`row  align-items-center gap-3`}>
              <div className={`${styles.title} text-center `}>
                <div className={` text-center pb-md-4 pb-1 mb-2`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Your End-to-End Solution for Vendor Payments",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
              </div>

              <div className={styles.allInOnePolicy}>
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
      </div>
      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center  max-w-auto`}>
          <div className={``}>
            <DynamicHeading
              content={[
                {
                  title: "Smart Features for ",
                  color: "color-black",
                },
                {
                  title: "Stress-Free ",
                  color: "color-equity-blue",
                },
                {
                  title: "Vendor Payments",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
        </div>
        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Take Control of Your Vendor Payments Today",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-3 pb-md-0"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <CommanButton
              title="Get Started  "
              theme="outline-blue"
              arrow
              url={salesUrl}
            />
          </div>
        </div>
      </div>
      <FaqSection faqData={faqData} />
    </div>
  )
}

export default VendorPayment
