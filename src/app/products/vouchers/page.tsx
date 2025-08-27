import Image from "next/image"
import styles from "./page.module.scss"
import faqData from "./faq-data"
import {
  DynamicHeading,
  LogoSlider,
  CustomBreadcrumb,
  RectangleButton,
  AllInOnePolicy,
  EnkashWay,
  FaqSection,
} from "@/components"
import { paymentSummary } from "."
import { getSalesUrl } from "@/common/utils/getSalesUrl"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"
import { allInOnePolicyData, categoriesData } from "./data"

export const metadata: Metadata = generateMetaData({
  title: "Grab 400+ Brand Gift Vouchers for Best Discounts",
  description:
    "Send digital gift vouchers instantly. Reward employees, engage customers, and manage incentives with ease using a wide range of branded voucher options.",
  alternates: {
    canonical: `${process.env.URL}/products/vouchers`,
  },
})
const salesUrl = getSalesUrl("/vouchers")

const Vouchers = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                {
                  name: "Vouchers",
                  url: "/products/vouchers",
                },
              ]}
            />
          </div>
          <div className="col-12 d-flex flex-column text-center">
            <div className="  mt-3 mb-3 mb-md-2 text-center">
              <DynamicHeading
                content={[
                  {
                    title: "400+ Brand Vouchers. One Powerful Platform.",
                    color: "color-black ",
                  },
                ]}
                headingTag="h1"
                className="f-7"
              />
            </div>
            <div>
              <DynamicHeading
                content={[
                  {
                    title:
                      "Save More. Reward Smarter. Delight Better with Gift Voucher Deals.",
                    color: "color-dark-grey ",
                  },
                ]}
                headingTag="h5"
                className="f-4"
              />
            </div>

            <div className="mt-md-4 mt-3">
              <RectangleButton title="Talk to Us" theme="blue" url={salesUrl} />
            </div>
          </div>
          <div className=" col-12">
            <div className={styles.lottie_container}>
              <div>
                <Image
                  src={paymentSummary}
                  alt="card visual"
                  style={{
                    objectFit: "contain",
                    maxHeight: "648px",
                  }}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <LogoSlider />
        </div>
      </div>

      <div className={`row ${styles.second_row} `}>
        <div className="d-flex text-center flex-column gap-32  max-w-auto">
          <div className="d-inline  text-center">
            <DynamicHeading
              content={[
                {
                  title: "Numbers That Make the Difference",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-3"
            />
            <div className={`${styles.second_row_line} `}></div>
          </div>

          <div className={` d-flex ${styles.section}`}>
            {" "}
            <div className={` d-flex flex-column text-center ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Up to 40%",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h5"
                  className="f-7"
                />
              </div>
              <div
                className={`py-2 d-flex flex-column text-center ${styles.innerCard}`}
              >
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Instant Savings",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="f-4 mb-0"
                />
              </div>
            </div>
            <div className={` d-flex flex-column text-center ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Under 60 secs",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h5"
                  className="f-7"
                />
              </div>
              <div
                className={`py-2 d-flex flex-column text-center ${styles.innerCard}`}
              >
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Instant Delivery",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="f-4 mb-0"
                />
              </div>
            </div>
            <div className={` d-flex flex-column text-center ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "100%",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h5"
                  className="f-7 "
                />
              </div>
              <div
                className={`py-2 d-flex flex-column text-center ${styles.innerCard}`}
              >
                {" "}
                <DynamicHeading
                  content={[
                    {
                      title: "Redemption Tracking",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="f-4 mb-0"
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
              <div className={`d-inline text-center pb-3`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Business-Grade Gift Vouchers, ",
                      color: "color-black ",
                    },
                    {
                      title: "Consumer-Loved Experience",
                      color: "color-equity-blue ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-5"
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

      <div className={`${styles.sixth_row} row d-flex bg-white`}>
        <EnkashWay
          sectionHeading="The Categories You Love, The Discounts You Deserve."
          progressData={categoriesData}
        />
      </div>

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default Vouchers
