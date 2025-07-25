"use client"
import Image from "next/image"
import styles from "./page.module.scss"
import { allProductSections, cardsData } from "./data"
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
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import LogoSlider from "@/components/logo-slider/logo-slider"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import AllProducts from "@/components/all-products/all-products"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"

const showScroll = cardsData.length > 3
const mergedCards = allProductSections.flatMap((section) => section.items)

const BusinessBillPayment = (): React.JSX.Element => {
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
                      name: "Business Bill Payment",
                      url: "/business-bill-payment",
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
                      title: "Business Bill Payment",
                      color: "color-equity-blue underline",
                    },
                  ]}
                  headingTag="h4"
                  className="f-4"
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-inline   pt-3 pt-md-0">
                 
                   <DynamicHeading
                  content={[
                    {
                      title: "Simplify Business Utility Bill Payments with EnKash",
                      color: "color-black ",
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
                      title: "Manage and pay all your business bills from a single, unified dashboard.",
                      color: "color-black ",
                    },
                  ]}
                  headingTag="h5"
                  className="f-4"
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
          <div className={`${styles.title} text-center pb-md-5 pb-3`}>
             <DynamicHeading
                  content={[
                    {
                      title: "Steps for ",
                      color: "color-black ",
                    },
                    {
                      title: "Effortless Utility Bill Payments ",
                      color: "color-black ",
                    },
                    {
                      title: "for Your Business",
                      color: "color-equity-blue ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-8"
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
              <div className={`${styles.list_button}`}>
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
              <div className={`d-inline text-center pb-3`}>
              
                  <DynamicHeading
                  content={[
                    {
                      title: "Say Goodbye to Bill Management Chaos",
                      color: "color-black ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-5"
                />
              </div>
            </div>

            <div className={styles.allInOnePolicy}>
              <AllInOnePolicy
                icon={taskIconOne}
                title="One Dashboard for All Bills"
                description="EnKash brings all your utility bills to one place, whether it’s an electricity bill, water bill, or internet bill. By auto-fetching bill details such as due dates and amounts, the platform reduces manual effort and minimizes errors. With a single dashboard, you gain complete control over your business’s recurring expenses, ensuring seamless management."
                image={paymentLinkImage}
                buttonUrl="/sales"
                maxImageHeight="243px"
              />

              <AllInOnePolicy
                icon={taskIconTwo}
                title="One-Click Payments"
                description="Simplify the complexity of multiple payments with EnKash’s one-click payment feature. Easily pay several bills simultaneously by filtering them based on location, provider, or due date. This efficiency not only saves time but also makes bulk payment handling a breeze, ensuring you never miss a due date."
                image={shareImage}
                buttonUrl="/sales"
                maxImageHeight="305px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconThree}
                title="Multi-Location Management"
                description="Effortlessly manage utility bills across various business locations, including offices, warehouses, and retail outlets. With centralized control, you can consolidate expenses, improve accuracy, and gain better financial visibility. Streamline bill tracking and payments regardless of where your business operates."
                image={paymentOptionImage}
                buttonUrl="/sales"
                maxImageHeight="243px"
              />

              <AllInOnePolicy
                icon={taskIconFour}
                title="Real-Time Reconciliation"
                description="Stay informed with real-time updates on payment statuses through EnKash’s intuitive dashboard. Generate detailed, custom reports for audits, financial planning, or tracking payment histories. This feature ensures accurate records and eliminates the hassle of manual reconciliations, giving you peace of mind."
                image={notificationImage}
                buttonUrl="/sales"
                maxImageHeight="259px"
                reverse
              />

              <AllInOnePolicy
                icon={taskIconFive}
                title="Streamlined Approvals"
                description="Optimize your payment process with customizable approval workflows. Assign specific roles and permissions to team members, ensuring compliance and preventing unauthorized transactions. EnKash’s approval system enables transparency, speeds up decision-making, and enhances your organization’s financial governance."
                image={optimizedIcon}
                buttonUrl="/sales"
                maxImageHeight="259px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center pb-5 max-w-auto`}>
          <div className={` pb-3  d-inline`}>
              <DynamicHeading
                  content={[
                    {
                      title: "From Chaos to Control: ",
                      color: "color-black ",
                    },
                    {
                      title: "EnKash Enterprise Bill Payments Features ",
                      color: "color-equity-blue ",
                    },
                    {
                      title: "at a Glance ",
                      color: "color-black ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-5"
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
                      title: "Take Control of Your Business Utility Payments Today!",
                      color: "color-white ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-4 bannerHeading"
                />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started  "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url="/sales/?source=expense_management"
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
                      title: "Frequently Asked Questions ( ",
                      color: "color-black ",
                    },
                    {
                      title: "FAQs",
                      color: "color-equity-blue ",
                    },
                    {
                      title: " )",
                      color: "color-black ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-5"
                />
           
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div>
                  <DynamicHeading
                  content={[
                    {
                      title: "Have more questions?",
                      color: "color-dark-grey ",
                    },
                  ]}
                  headingTag="h3"
                  className="f-5"
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

export default BusinessBillPayment
