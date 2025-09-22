import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import { cardsData, paymentMethodData, payoutPolicies } from "./data"
import faqData from "./faq-data"

//components
import CommanButton from "@/src/components/buttons"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import PolicyCard from "@/src/components/policy-card"
import FaqSection from "@/src/components/faq-section"
import BankLogoSlider from "@/src/components/banking-slider"
import FeatureCard from "@/src/components/feature-card"

//helpers
import { groupIcon, paymentSummary, mealCardImage } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Connected Banking: For Faster Payouts",
  description:
    "Simplify business banking with EnKash’s Seamless Banking solution. Enable faster transactions, smooth integrations, and unified banking on one smart platform.",
  alternates: {
    canonical: `${process.env.URL}/connected-banking/`,
  },
})
const salesUrl = getSalesUrl("/connected-banking")

const showScroll = cardsData.length > 3

const ConnectedBanking = (): React.JSX.Element => {
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
                      url: "products/collect-payments",
                    },
                    {
                      name: "Connected Banking",
                      url: "/connected-banking",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex text-center flex-column flex-md-row  `}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Connected Banking",
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
                <div className="d-flex flex-column   pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "Power Up Payouts with Connected Banking",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h1"
                    className="f-7"
                  />
                </div>

                <div className="d-flex mt-3 mb-3  text-center text-md-start ">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Link your existing bank accounts directly, automate reconciliation, and initiate payouts in real time without changing your banking partner or loading a wallet.",
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
                  title: "How Connected Banking Works ",
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

      <div className={`${styles.fourth_row}  `}>
        <div className="max-w-auto">
          <div className={`${styles.section}`}>
            <div className={`row  align-items-center gap-3`}>
              <div className={`${styles.title} text-center `}>
                <div
                  className={`flex-column justify-content-center align-items-center pb-md-4 mb-1 pb-1`}
                >
                  <DynamicHeading
                    content={[
                      {
                        title: "Here’s What You Unlock with ",
                        color: "color-black",
                      },
                      {
                        title: "Connected Banking ",
                        color: "color-equity-blue",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
              </div>

              {payoutPolicies.map((policy, index) => (
                <AllInOnePolicy
                  key={index}
                  icon={policy.icon}
                  title={policy.title}
                  description={policy.description}
                  image={policy.image}
                  buttonUrl={salesUrl}
                  maxImageHeight={policy.maxImageHeight}
                  reverse={policy.reverse}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <BankLogoSlider />

      <div className={styles.sixth_row}>
        <div className={` max-w-auto`}>
          <div className={`${styles.title} text-center  pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Built for Control, Powered by Intelligence ",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
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
            <DynamicHeading
              content={[
                {
                  title: "Ready to Connect Your Banks the Smarter Way?",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-md-0 pb-3 "
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <CommanButton
              title="Get Started Today"
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

export default ConnectedBanking
