"use client"
import Image from "next/image"
import styles from "./page.module.scss"
import { cardsData } from "./data"
import faqData from "./faq-data"
import { Header, FAQHtml, Footer } from "@/components"
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
  optimizedIcon,
  taskIconOne,
  taskIconTwo,
  taskIconThree,
  taskIconFour,
  taskIconFive,
  taskIconSix,
  secureImage,
  advancedImage,
  taskIconSeven,
  taskIconEight,
  taskIconNine,
  designedIcon,
  payrollImg,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import ScrollableCardsSection from "@/components/scrollable-cards-section/scrollableCardsSection"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"

const Payroll = (): React.JSX.Element => {
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
              <div className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className=" pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "Payroll Processing Software by EnKash",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h2"
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
                buttonUrl="/sales/?source=receivables"
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

              <div className={styles.allInOnePolicy}>
                <AllInOnePolicy
                  icon={taskIconOne}
                  title="Comprehensive Employee Data Management"
                  description="Effortlessly handle employee information with EnKash’s HR payroll software, allowing easy uploads, seamless validation, and bulk salary disbursements—all while ensuring compliance. EnKash ensures compliance with regulatory standards, reducing errors and streamlining onboarding processes—all within a user-friendly interface."
                  image={paymentLinkImage}
                  buttonUrl="/sales"
                  maxImageHeight="243px"
                />

                <AllInOnePolicy
                  icon={taskIconTwo}
                  title="Secure Salary Account Validation"
                  description="Validate salary account details using the penny-drop method, minimizing payment errors and bolstering financial security. Ensure every transaction is accurate and hassle-free."
                  image={shareImage}
                  buttonUrl="/sales"
                  maxImageHeight="305px"
                  reverse
                />

                <AllInOnePolicy
                  icon={taskIconThree}
                  title="Multi-Branch Salary Disbursement"
                  description="Manage payroll across multiple branches effortlessly from a single dashboard. With just a click, initiate accurate salary disbursements for all employees, regardless of location."
                  image={paymentOptionImage}
                  buttonUrl="/sales"
                  maxImageHeight="243px"
                />

                <AllInOnePolicy
                  icon={taskIconFour}
                  title="Seamless ERP Integration"
                  description="Integrate EnKash’s payroll software seamlessly with your existing ERP systems and banking partners. This integration enables a unified and efficient workflow tailored to your business needs."
                  image={notificationImage}
                  buttonUrl="/sales"
                  maxImageHeight="259px"
                  reverse
                />

                <AllInOnePolicy
                  icon={taskIconFive}
                  title="Flexible Payment Solutions"
                  description="Handle payments for full-time employees, contractors, and interns, covering both regular and off-cycle payroll. Additionally, reimburse employee expenses alongside payroll for added convenience."
                  image={optimizedIcon}
                  buttonUrl="/sales"
                  maxImageHeight="259px"
                />
                <AllInOnePolicy
                  icon={taskIconSix}
                  title="Configurable Approval Workflows"
                  description="Define approval hierarchies with customizable rules. Automate payroll information routing to designated approvers, ensuring prompt approvals and reduced delays."
                  image={secureImage}
                  buttonUrl="/sales"
                  maxImageHeight="259px"
                  reverse
                />

                <AllInOnePolicy
                  icon={taskIconSeven}
                  title="Advanced Reporting and Analytics"
                  description="Access real-time insights into payroll trends and employee expenses. Generate comprehensive, customizable reports to support data-driven decisions and strategic planning."
                  image={advancedImage}
                  buttonUrl="/sales"
                  maxImageHeight="259px"
                />

                <AllInOnePolicy
                  icon={taskIconEight}
                  title="Designed for Startups and SMEs"
                  description="Simple and reliable payroll software for small businesses. Easily onboard employees, run accurate payroll, and stay compliant—without the spreadsheet hassle."
                  image={designedIcon}
                  buttonUrl="/sales"
                  maxImageHeight="259px"
                  reverse
                />

                <AllInOnePolicy
                  icon={taskIconNine}
                  title="Streamline HR Payroll Operations"
                  description="A powerful HR payroll solution to automate compliance, simplify salary disbursement, and reduce manual work, ensuring smooth, secure payroll operations."
                  image={payrollImg}
                  buttonUrl="/sales"
                  maxImageHeight="259px"
                />
              </div>
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
            <RectangleButton
              title="Get Started  "
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
          <div className={`${styles.title} text-start  pb-md-5 pb-2`}>
            <DynamicHeading
              content={[
                {
                  title: "Frequently Asked Questions (",
                  color: "color-black",
                },
                {
                  title: "FAQs",
                  color: "color-equity-blue",
                },
                {
                  title: ")",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6 "
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
                  className="mb-0"
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

export default Payroll
