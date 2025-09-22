import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import { allInOnePolicyData, cardsData } from "./data"
import faqData from "./faq-data"

//components

import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import FaqSection from "@/src/components/faq-section"
import CommonButton from "@/src/components/buttons"
import ScrollableCardsSection from "@/src/components/scrollable-cards-section"

//helpers
import { groupIcon, paymentSummary, mealCardImage } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Payroll Management: Automate Salaries, Payouts & Compliance ",
  description:
    "Automate salary disbursals, contractor payouts, and compliance with EnKash Payroll. Ensure timely, error-free payments with full visibility and control.",
  alternates: {
    canonical: `${process.env.URL}/payroll/`,
  },
})
const salesUrl = getSalesUrl("/payroll")

const Payroll = (): React.JSX.Element => {
  return (
    //
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
                      name: "Make Payments",
                      url: "/products/make-payments",
                    },
                    {
                      name: "Payroll Processing",
                      url: "/payroll",
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
                      title: "Payroll Software",
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
                        title: "Payroll Processing Software by EnKash",
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
                          "Your ultimate solution for accurate, compliant, and stress-free salary disbursement. Empower your business with EnKash’s advanced payroll management software in India, designed to meet your workforce’s diverse needs and ensure seamless payroll disbursement.",
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
                      <CommonButton
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

      <div className={styles.features_section}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "How to Get Started with ",
                  color: "color-black",
                },
                {
                  title: "EnKash Payroll Processing",
                  color: "color-equity-blue",
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
                showScroll={true}
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

      <div className={`${styles.use_case_section}  `}>
        <div className="max-w-auto">
          <div className={`${styles.section}`}>
            <div className={`row `}>
              <div className={`${styles.title} `}>
                <div className={`text-center pb-4 pb-md-5`}>
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Simplify payroll payouts with our advanced solutions",
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
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className=" text-center">
            <DynamicHeading
              content={[
                {
                  title: "Ready to Elevate Your Payroll Process?",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-3 pb-md-0"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <CommonButton
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

export default Payroll
