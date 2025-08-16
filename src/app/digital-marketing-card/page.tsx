import Image from "next/image"
import styles from "./page.module.scss"
import {
  cardType,
  intantActionData,
  spendAnalyticsData,
  stackcardData,
} from "./data"
import {
  RectangleButton,
  CustomBreadcrumb,
  LogoSlider,
  CardProduct,
  DynamicHeading,
  CardStacking,
  AllInOnePolicy,
  PolicyCard,
  FaqSection,
  StepsSection,
} from "@/components"

import {
  blueArrow,
  whiteArrow,
  mealCardImage,
  heroCardImg,
  instantActionImg,
} from "."

import faqData from "./faq-data"
import LogoSlider from "@/components/logo-slider/logo-slider"

import CardProduct from "@/components/card-product/card-product"
import StepCard from "@/components/stepCard/stepCard"
import PolicyCard from "@/components/policyCard/policyCard"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import CardStacking from "@/components/cardStacking/cardStacking"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import Link from "next/link"
import { Metadata } from "next"
import generateMetaData from "@/common/utils/metaData"
import { getSalesUrl } from "@/common/utils/getSalesUrl"
const cards = [
  {
    color: "#fff",
    content: (
      <AllInOnePolicy
        icon={icon}
        title={title}
        description={description}
        image={image}
        buttonUrl={buttonUrl}
        maxImageHeight="300px"
      />
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={fraudProtectionIcon}
          title="Real-Time Expense Tracking"
          description="Stay on top of every transaction with EnKash’s real-time expense-tracking feature. Instantly monitor your marketing spend as it happens, gaining valuable insights into your campaign's financial health. This enables you to make adjustments on the fly, ensuring that you don’t overspend and stay within your budget."
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
          title="Prevent Overspending"
          description="Overspending on campaigns can be costly. With the Digital Marketing Card, you can set predefined spending limits for each card. This feature ensures your team stays within budget, preventing unauthorized expenses and helping you maintain financial discipline for more efficient and cost-effective marketing campaigns."
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
          title="Simplified Subscription Management"
          description="Managing recurring subscriptions for marketing tools, software, or ad platforms becomes effortless with EnKash. Automate payments for these subscriptions with clear schedules and centralized tracking. You’ll never miss a payment, and you'll save time that would otherwise be spent on manual invoicing and reconciliation."
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
          title="Customizable Usage Policies"
          description="Tailor your spending policies to fit your unique marketing needs. With the Digital Marketing Card, you can enforce specific restrictions, such as category-based spending limits or vendor-specific constraints. This ensures that every expense aligns with your business’s objectives and helps maximize the effectiveness of your marketing efforts."
          image={wideAcceptanceNetwork}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
]
export const metadata: Metadata = generateMetaData({
  title: "Digital Marketing Card: Control Ad Spends Across Platforms",
  description:
    "Manage digital marketing budgets with EnKash Marketing Cards. Set spending limits, track campaign expenses in real time, and eliminate overspending on ads.",
  alternates: {
    canonical: "https://www.enkash.com/digtal-marketing-card/",
  },
})
const salesUrl = getSalesUrl("/digtal-marketing-card")

const DigitalMarketingCard = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>

      <div className={`${styles.first_row}`}>
        <div className="max-w-auto">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Digital Marketing Card",
                  url: "/corporate-cards/digtal-marketing-card",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Digital Marketing Card",
                  color: "color-equity-blue underline",
                },
              ]}
              headingTag="p"
              className=""
            />

            <div className="d-flex  flex-column text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Take Control of Your Marketing Budget with a ",
                    color: "color-black italic f-3 d-block",
                  },
                  {
                    title: "Digital Marketing Card",
                    color: "color-black",
                  },
                ]}
                headingTag="h1"
                className="f-7 mb-3"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Effortlessly allocate, track, and optimize your marketing budgets. Designed specifically for marketing professionals, this solution ensures precision, control, and real-time visibility over your campaigns’ spend.",
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
                url={salesUrl}
              />
            </div>
          </div>
        </div>
        <div className=" col-12 pt-5 ">
          <div className={styles.lottie_container}>
            {" "}
            <Image src={heroCardImg} alt="card background" className=" " />
          </div>
        </div>
      </div>

      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <div>
        <StepsSection
          heading={[
            {
              text: "How Digital Marketing Card Works",
              colorClass: "color-black",
            },
          ]}
          steps={intantActionData}
          button={{
            title: "Get started",
            theme: "border-gray",
            actionImage: blueArrow,
            hoverImage: whiteArrow,
            url: "/sales",
          }}
          image={{
            src: mealCardImage,
            alt: "card background",
          }}
        />
      <div className={`${styles.action_row} bg-white row-padding `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-md-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <DynamicHeading
                content={[
                  {
                    title: "How Digital Marketing Card Works",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
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
                  title="Get Started"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales/?source=expense_management"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div className={`col-md-6 col-12`}>
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
            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "The Smarter Way to Manage Your ",
                  color: "color-black",
                },
                {
                  title: " Digital Marketing Expenses",
                  color: "color-equity-blue",
                },
              ]}
            />
          </>
        </div>
      </div>

      <div className={`${styles.second_row} `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-2 pb-md-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <DynamicHeading
                content={[
                  {
                    title:
                      "Features of the Best Corporate Card for Digital Marketing Expenses",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
          </div>
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12  pe-md-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                }}
              >
                {spendAnalyticsData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
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
                  title="Try for Yourself "
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales/?source=expense_management"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div className={`col-md-6 col-12 d-flex `}>
              <div>
                <Image
                  src={instantActionImg}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <FaqSection faqData={faqData} />
      </div>

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Your Business, ",
                  color: "color-black",
                },
                {
                  title: "Your Cards – ",
                  color: "color-equity-blue",
                },
                {
                  title: "Tailored by EnKash",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4">
            {cardType.map(
              ({ titleHtml, description, cardImage, linkUrl }, index) => (
                <div key={index} className="col-12 col-md-4">
                  <CardProduct
                    titleHtml={titleHtml}
                    description={description}
                    cardImage={cardImage}
                    linkUrl={linkUrl}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketingCard
