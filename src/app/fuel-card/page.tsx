"use client"
import Image from "next/image"
import styles from "./page.module.scss"
import { cardType, intantActionData } from "./data"
import { Header, Footer, FAQHtml } from "@/components"
import {
  blueArrow,
  whiteArrow,
  mealCardImage,
  podiumImage,
  heroCardImg,
  realTimeExpenseIcon,
  realTimeExpense,
  fraudProtectionIcon,
  fraudProtection,
  streamlinedReimbursementIcon,
  streamlinedReimbursement,
  costControlSavingsIcon,
  costControlSavings,
  wideAcceptanceNetworkIcon,
  wideAcceptanceNetwork,
} from "."
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import faqData from "./faq-data"
import LogoSlider from "@/components/logo-slider/logo-slider"
import CardProduct from "@/components/card-product/card-product"
import StepCard from "@/components/stepCard/stepCard"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import CardStacking from "@/components/cardStacking/cardStacking"
import { useGSAP } from "@gsap/react"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"

// const showScroll = cardsData.length > 3
// const mergedCards = allProductSections.flatMap((section) => section.items)

const cards = [
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={realTimeExpenseIcon}
          title="Real-Time Expense Tracking"
          description="With the Prepaid fuel Cards*, you can monitor fuel expenses as they occur, providing complete visibility and control. All transactions are logged in real time, allowing you to track fuel usage efficiently. This means you can quickly identify spending patterns, prevent budget overruns, and make data-driven decisions to optimize your fuel budget."
          image={realTimeExpense}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={fraudProtectionIcon}
          title="Fraud Protection"
          description="Fuel Cards are equipped with robust security features, including PIN protection and real-time alerts for any suspicious activity. These security measures ensure that only authorized transactions are processed, significantly reducing the risk of misuse or fraudulent charges. You can block or freeze cards instantly to prevent unauthorized access, keeping your business safe."
          image={fraudProtection}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={streamlinedReimbursementIcon}
          title="Streamlined Reimbursement"
          description="Say goodbye to the traditional, cumbersome reimbursement process. Fuel Cards* eliminate the need for employees to submit fuel receipts or wait for reimbursement approvals. All fuel-related expenses are automatically managed and settled through the cards, making the entire process faster, more efficient, and less prone to errors, allowing your finance team to focus on more strategic tasks."
          image={streamlinedReimbursement}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={costControlSavingsIcon}
          title="Cost Control & Savings"
          description="Fuel Cards* allow you to set customizable daily or monthly spending limits for each employee, ensuring that fuel expenses stay within your budget. You can easily monitor fuel consumption against approved limits, providing greater control over spending. By optimizing usage patterns and identifying cost-saving opportunities, your business can significantly reduce unnecessary fuel expenses."
          image={costControlSavings}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={wideAcceptanceNetworkIcon}
          title="Wide Acceptance Network"
          description="Fuel Cards* are accepted at a vast network of authorized fuel stations, giving your employees the freedom to refuel at a variety of locations, both locally and nationwide. This broad acceptance ensures convenience, reduces the risk of out-of-network charges, and guarantees that your business is always covered wherever your team travels, whether near or far."
          image={wideAcceptanceNetwork}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
 
]
const FuelCards = (): React.JSX.Element => {

  return (
    <div className={`color-white  ${styles.home_container}`}>
      <Header utmSource="expense_management" />
      <TalkToSales />
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Fuel Card",
                  url: "/corporate-cards/fuel-card",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Fuel Card",
                  color: "color-equity-blue underline",
                },
              ]}
              headingTag="p"
              className=""
            />
            <div className=" text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Transforming Fuel Expense Management with ",
                    color: "color-black italic f-3 d-block",
                  },
                  {
                    title: " Fuel Cards*",
                    color: "color-black",
                  },
                ]}
                headingTag="h1"
                className="f-7 mb-2"
              />
            </div>

            <div className="text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Eliminate hassle, gain control, and cut costs with a comprehensive fuel card solution for businesses of all sizes.",
                    color: "color-black subHeading",
                  },
                ]}
                headingTag="p"
                className=""
              />
            </div>
            <div className={styles.button_wrapper}>
              <RectangleButton
                title="Get Started"
                theme="blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
        </div>
        <div className=" col-12 pt-5 ">
          <div className={styles.lottie_container}>
            {" "}
            <Image src={heroCardImg} alt="card background" className=" " />
          </div>
          <div className={styles.lottie_container_bottom}>
            {" "}
            <Image
              src={podiumImage}
              alt="card background"
              className="position-absolute "
            />
          </div>
        </div>
      </div>

      <div>
        <LogoSlider />
      </div>

      <div className={`${styles.action_row} bg-white  `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-md-5 pb-3`}>
            <DynamicHeading
              content={[
                {
                  title: "Steps to Manage Employee ",
                  color: "color-black",
                },
                {
                  title: "Fuel Costs",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 pe-md-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {intantActionData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <StepCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Try Now"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales/?source=expense_management"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div className={`col-md-6 col-12 `}>
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

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <>
            <div className={`${styles.title} text-center `}>
              <DynamicHeading
                content={[
                  {
                    title: "Unlock  ",
                    color: "color-black",
                  },
                  {
                    title: "Savings ",
                    color: "color-equity-blue",
                  },
                  {
                    title: "on Every Mile",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>

            <CardStacking cards={cards} />
          </>
        </div>
      </div>
      <div className={`${styles.sixth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title:
                    "Discover the EnKash difference - Secure, Scalable and Seamless.",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started "
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
          <div className={`${styles.title} text-start  pb-3 pb-md-5`}>
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
              className="f-6"
            />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
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

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Choose ",
                  color: "color-black",
                },
                {
                  title: "the Right Card  ",
                  color: "color-equity-blue",
                },
                {
                  title: "for Every Use Case",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4">
            {cardType.map(({ titleHtml, description, cardImage }, index) => (
              <div key={index} className="col-12 col-md-4">
                <CardProduct
                  titleHtml={titleHtml}
                  description={description}
                  cardImage={cardImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FuelCards
