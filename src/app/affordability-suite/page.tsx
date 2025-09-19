import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

// data
import { allInOnePolicyData, cardsData, managementCardsData } from "./data"
import faqData from "./faq-data"

// component
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import CommanButton from "@/src/components/buttons"
import LogoSlider from "@/src/components/logo-slider"
import ScrollableCardsSection from "@/src/components/scrollable-cards-section"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import FaqSection from "@/src/components/faq-section"
import ManagementCard from "@/src/components/management-card"

// helpers
import { groupIcon, paymentSummary, mealCardImage } from "./img"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"


export const metadata: Metadata = generateMetaData({
  title:
    "EnKash Affordability Suite | Boost Conversions with EMI, Pay Later & More",
  description:
    "Increase sales with Affordability Suite. Offer EMIs, Pay Later, and flexible payment options to enhance customer experience and drive higher conversions.",
  alternates: {
    canonical: `${process.env.URL}/affordability-suite/`,
  },
})

const salesUrl = getSalesUrl("/affordability-suite")

const AffordabilitySuite = (): React.JSX.Element => {
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
                      name: "Collect Payments",
                      url: "/products/collect-payments",
                    },
                    {
                      name: "Affordability Suite",
                      url: "/affordability-suite",
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
                      title: "Affordability Suite ",
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
                <div className="pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Convert browsers into buyers with the Affordability Suite ",
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
                          "Boost customer conversion with EMI, PayLater, & other offers on your product pages.",
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
                        title="Get Started"
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
      </div>

      <LogoSlider />

      <div className={styles.third_row}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "How Affordability Suite Works",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <ScrollableCardsSection
                cardsData={cardsData}
                showScroll={false}
                maxHeight="400px"
                buttonTitle="Get Started"
                buttonTheme="outline-blue"
                buttonUrl={salesUrl}
              />
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
            <div className={`${styles.title} text-center `}>
              <div className={`text-center pb-4 pb-md-5`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Effortless Conversions Start Here",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
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

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Turn Interest Into Action",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-3 pb-md-0"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <CommanButton
              title="Get Started Today"
              theme="outline-blue"
              url={salesUrl}
              arrow
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center  pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Check out ",
                  color: "color-black",
                },
                {
                  title: "other payment products",
                  color: "color-equity-blue",
                },
                {
                  title: " at EnKash",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4">
            {managementCardsData.map((card, index) => (
              <div className="col-12 col-md-4" key={index}>
                <ManagementCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AffordabilitySuite
