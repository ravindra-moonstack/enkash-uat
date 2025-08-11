import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"
import { allProductSections } from "./data"
import faqData from "./faq-data"
import { Header, FAQHtml, Footer } from "@/components"
import {
  blueArrow,
  paymentLinkImage,
  shareImage,
  paymentOptionImage,
  notificationImage,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"

import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import AllProducts from "@/components/all-products/all-products"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client"

const mergedCards = allProductSections.flatMap((section) => section.items)

const Rewards = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
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

            <div className="mt-md-5 mt-3">
              <RectangleButton
                title="Talk to Sales"
                theme="blue"
                url="/sales"
              />
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
              <AllInOnePolicy
                icon={taskIconOne}
                title="Employee Rewards"
                description="Motivate and retain your workforce with meaningful recognition. EnKash helps businesses set up customized rewards programs that enhance employee morale and performance. Offer digital gift cards, brand vouchers, and exclusive perks."
                image={paymentLinkImage}
                buttonUrl="/employee-rewards/"
                maxImageHeight="243px"
              />

              <AllInOnePolicy
                icon={taskIconTwo}
                title="Channel Incentives"
                description="Drive channel partner engagement and boost sales with structured channel incentives. EnKash enables businesses to automate reward distribution, ensuring timely payouts and transparent tracking for channel partners."
                image={shareImage}
                buttonUrl="/channel-incentives/"
                maxImageHeight="305px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconThree}
                title="Gift Cards"
                description="Simplify gifting with EnKash’s versatile gift card solutions. Give your employees and partners the freedom to choose from a wide range of brands and categories, ensuring a truly personal reward experience."
                image={paymentOptionImage}
                buttonUrl="/gift-cards/"
                maxImageHeight="243px"
              />

              <AllInOnePolicy
                icon={taskIconFour}
                title="Exclusive Offers"
                description="Unlock special discounts and partner offers from leading brands. Help your employees and stakeholders save on essential services while enhancing their benefits package."
                image={notificationImage}
                buttonUrl="/offers/"
                maxImageHeight="259px"
                reverse
              />
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

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-md-5 pb-2`}>
            <DynamicHeading
              content={[
                {
                  title: "Frequently Asked Questions (",
                  color: "color-black ",
                },
                {
                  title: "FAQs",
                  color: "color-equity-blue ",
                },
                {
                  title: ")",
                  color: "color-black ",
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
                  className="m-0"
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

      <Footer />
    </div>
  )
}

export default Rewards
