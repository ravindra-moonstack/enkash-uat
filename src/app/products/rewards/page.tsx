import styles from "./page.module.scss"
import { allProductSections, policiesData } from "./data"
import faqData from "./faq-data"
import {
  DynamicHeading,
  LogoSlider,
  CustomBreadcrumb,
  RectangleButton,
  AllInOnePolicy,
  LottieDynamicLoadComponent,
  AllProducts,
  FaqSection,
} from "@/src/components"

import { getSalesUrl } from "@/src/common/utils/getSalesUrl"
import generateMetaData from "@/src/common/utils/metaData"
import { Metadata } from "next"

export const metadata: Metadata = generateMetaData({
  title: "Reward Program to Drive Employee & Customer Loyalty",
  description:
    "Boost employee engagement with EnKash Rewards. Design custom reward programs, send instant digital vouchers, and simplify recognition across teams and departments.",
  alternates: {
    canonical: `${process.env.URL}/rewards/`,
  },
})
const salesUrl = getSalesUrl("/rewards")
const mergedCards = allProductSections.flatMap((section) => section.items)

const Rewards = (): React.JSX.Element => {
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
                  name: "Rewards",
                  url: "/products/rewards",
                },
              ]}
            />
          </div>
          <div className="col-12 d-flex flex-column text-center">
            <div className="  mt-4 mb-3 text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Drive Loyalty. Reward Engagement. Elevate Experiences.",
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
                      "Create personalized, automated, and scalable solutions for rewarding employees and driving engagement.",
                    color: "color-dark-grey subHeading",
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
                animationName={"RewardAnimationLottie"}
                loop={true}
              />
            </div>
          </div>
        </div>
        <div>
          <LogoSlider />
        </div>
      </div>

      <div className={`${styles.fourth_row}  `}>
        <div className="max-w-auto">
          <div className={`row  align-items-center ${styles.section}`}>
            <div className={`${styles.title} text-center `}>
              <div className={` text-center pb-4 pb-md-5`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Rewards That Motivate and Deliver Results",
                      color: "color-black ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
                />
              </div>
            </div>
            <div className={styles.allInOnePolicy}>
              {policiesData.map((policy, index) => (
                <AllInOnePolicy
                  key={index}
                  icon={policy.icon}
                  title={policy.title}
                  description={policy.description}
                  image={policy.image}
                  buttonUrl={policy.buttonUrl}
                  buttonText="Explore More"
                  maxImageHeight={policy.maxImageHeight}
                  reverse={policy.reverse}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center  max-w-auto`}>
          <div className={`px-3 `}>
            <DynamicHeading
              content={[
                {
                  title: "The EnKash Advantage:  ",
                  color: "color-equity-blue ",
                },
                {
                  title: "Smarter Rewards, Greater Impact ",
                  color: "color-black ",
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
      <FaqSection faqData={faqData} />
    </div>
  )
}

export default Rewards
