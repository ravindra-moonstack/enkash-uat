"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { cardsData, paymentMethodData } from "./data"
import faqData from "./faq-data"
import { Header, Heading, FAQHtml, Footer } from "@/components"
import {
  blueArrow,
  groupIcon,
  paymentSummary,
  whiteArrow,
  mealCardImage,
  paymentLinkImage,
  shareImage,
  paymentOptionImage,
  notificationImage,
  MaintainCompleteControl,
  reduceFrauds,
  secureImage,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
  taskIconFive,
  taskIconSix,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import FeatureCard from "@/components/featureCard/feature-card"

const showScroll = cardsData.length > 3

const ConnectedBanking = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <Header utmSource="expense_management" />

      <TalkToSales />

      <div className={`${styles.first_row} `}>
        <div className="max-w-auto">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 d-flex flex-column">
              <div className="d-flex">
                <CustomBreadcrumb
                  items={[
                    { name: "Home", url: "/" },
                    {
                      name: "Collect Payments",
                      url: "products/collect-payments",
                    },
                    {
                      name: "Connected Bankingt",
                      url: "/connected-banking",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex text-center flex-column flex-md-row  `}
              >
                <Heading
                  title={`Connected Banking${space}`}
                  color="equity-blue"
                  size="h4"
                  weight="4"
                  underline
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-flex flex-column   pt-3 pt-md-0">
                  <Heading
                    title={`Power Up Payouts with Connected Banking${space}`}
                    color="black"
                    size="h2"
                    weight="7"
                  />

                  <Heading title="" color="black" size="h2" weight="7" />
                </div>

                <div className="d-flex mt-3 mb-3  text-center text-md-start ">
                  <Heading
                    title="Link your existing bank accounts directly, automate reconciliation, and initiate payouts in real time without changing your banking partner or loading a wallet."
                    color="black"
                    size="h5"
                    weight="4"
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
                        url="/sales/?source=expense_management"
                      />
                    </div>
                    <div>
                      <RectangleButton
                        title="API Doc"
                        theme="outline-blue"
                        url="/sales/?source=expense_management"
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

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-2`}>
            <Heading
              title={`How Connected Banking Works`}
              color="black"
              size="h1"
              weight="6"
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
              <div className="m-md-5 m-2">
                <RectangleButton
                  title="Get Started"
                  theme="outline-blue"
                  url="/sales/?source=receivables"
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div>
                <Image
                  src={mealCardImage}
                  alt="card background"
                  className="w-100 h-100"
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
              <div
                className={`flex-column justify-content-center align-items-center pb-md-3`}
              >
                <Heading
                  title={`Here’s What You Unlock with  ${space}`}
                  color="black"
                  size="h1"
                  weight="5"
                />
                <Heading
                  title={`Connected Banking ${space}`}
                  color="equity-blue"
                  size="h1"
                  weight="5"
                />
              </div>
            </div>

            <AllInOnePolicy
              icon={taskIconOne}
              title="Initiate payouts directly from your bank accounts"
              description="Forget wallet loading and fund transfers. With EnKash, your payouts happen directly from your connected bank accounts, giving you complete control over cash flow without any operational delays or intermediaries."
              image={paymentLinkImage}
              buttonUrl="/sales/"
              maxImageHeight="243px"
            />
            <AllInOnePolicy
              icon={taskIconTwo}
              title="Link multiple bank accounts"
              description="Connect all your current accounts from different banks on a single dashboard. Distribute payout load, minimize dependency on a single bank, reduce downtime risks, and improve liquidity management across your business operations."
              image={notificationImage}
              buttonUrl="/sales/?source=expense_management"
              maxImageHeight="259px"
              reverse
            />
            <AllInOnePolicy
              icon={taskIconThree}
              title=" Access 24x7 payment rails"
              description="Make payouts anytime—day or night, weekends or holidays. EnKash supports UPI, IMPS, NEFT, and RTGS round-the-clock, ensuring your vendors, customers, or employees get paid without delay."
              image={shareImage}
              buttonUrl="/sales/"
              maxImageHeight="305px"
            />
            <AllInOnePolicy
              icon={taskIconFour}
              title="Get real-time balance visibility"
              description="See up-to-date balances across all your linked accounts instantly. Make smarter financial decisions with accurate visibility into available funds before initiating payouts or planning high-value transactions."
              image={paymentOptionImage}
              buttonUrl="/sales/"
              maxImageHeight="305px"
              reverse
            />
            <AllInOnePolicy
              icon={taskIconFive}
              title="Automate reconciliation"
              description="Say goodbye to manual downloads and spreadsheet matching. EnKash fetches direct bank files and automates reconciliation, making your accounting faster, more accurate, and audit-ready without any manual effort."
              image={secureImage}
              buttonUrl="/sales/"
              maxImageHeight="305px"
            />
            <AllInOnePolicy
              icon={taskIconSix}
              title="Enable smart routing"
              description="Intelligently route each payout from the most optimal account based on pre-set rules or available balance. Maximize fund utilization and avoid failed transactions due to insufficient funds in a single account."
              image={reduceFrauds}
              buttonUrl="/sales/"
              maxImageHeight="305px"
              reverse
            />
            <AllInOnePolicy
              icon={taskIconFive}
              title="Maintain complete control"
              description="With EnKash, your money stays in your bank. No wallet dependencies or fund transfers- just a secure, compliant layer that enables real-time visibility, control, and automation over all your payouts."
              image={MaintainCompleteControl}
              buttonUrl="/sales/"
              maxImageHeight="305px"
            />
          </div>
        </div>
      </div>

      <div className={styles.sixth_row}>
        <div className={` max-w-auto`}>
          <div className={`${styles.title} text-center  pb-5`}>
            <Heading
              title={`Built for Control, Powered by Intelligence ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
          </div>

          <div className={styles.card_grid}>
            {paymentMethodData.map(({ icon, title, description }, i) => (
              <div key={i}>
                <FeatureCard
                  titleHtml={title}
                  description={description}
                  cardImage={icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <Heading
              title="Ready to Connect Your Banks the Smarter Way?"
              size="bannerHeading"
              color="white"
              weight="4"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started Today"
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url="/sales/"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-md-5  pb-2`}>
            <Heading
              title={`Frequently Asked Questions  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading title={`(`} color="black" size="h1" weight="5" />
            <Heading title={`FAQ`} color="equity-blue" size="h1" weight="5" />
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

export default ConnectedBanking
