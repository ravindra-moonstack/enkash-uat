import Image from "next/image"
import styles from "./page.module.scss"
import { Metadata } from "next"

// data
import {
  allProductSections,
  cardType,
  costSavingData,
  enhanceEmployeeData,
  intantActionData,
  spendAnalyticsData,
  unmatchControlData,
} from "./data"
import faqData from "./faq-data"

// components
import CommanButton from "@/src/components/buttons"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"
import StepCard from "@/src/components/step-card"
import CardHeroSection from "@/src/components/sections/card-hero-section"
import SliderSection from "@/src/components/sections/slider-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

// helpers
import {
  mealCardImage,
  instantActionImg,
  heroCardImg,
  enhanceEmployeeImg,
  costSavingdImg,
  unmatchedControlImg,
} from "./img"

// utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Travel & Expense Card: Simplify Business Travel Spending",
  description:
    "Control and track travel expenses with EnKash T&E Cards. Set budgets, manage employee spends, and automate reconciliation for seamless business travel workflows.",
  alternates: {
    canonical: `${process.env.URL}/travel-and-expense-card`,
  },
})
const salesUrl = getSalesUrl("/travel-and-expense-card")
const mergedCards = allProductSections.flatMap((section) => section.items)

const TravelExpenseCard = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white`}>
      <CardHeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Corporate Cards ", url: "/corporate-cards" },
          {
            name: "Travel & Expense Card",
            url: "/corporate-cards/travel-and-expense-card",
          },
        ]}
        linkColor="allWhite"
        subtitle={{
          text: "Travel & Expense Card",
          color: "color-white",
          underline: true,
        }}
        title={[
          {
            text: "Travel and Expense Card ",
            color: "color-white f-3 italic d-block",
          },
          {
            text: "Optimize Your Business Travel Management ",
            color: "color-white",
          },
        ]}
        description={{
          text: "Ensure seamless business travel experiences while empowering your team, saving costs, and enhancing compliance—all with one smart solution. Our T&E card solution gives you the control and convenience your business needs. ",
          color: "color-white subHeading",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        heroImage={heroCardImg}
        backgroundImage="/images/travelExpBg.webp"
        paddingTop="138px"
        paddingBottom="60px"
      />

      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <StepsSection
        heading={[
          {
            text: "How To Get Started with Travel and Expense Cards  ",
            colorClass: "color-black",
          },
        ]}
        steps={intantActionData}
        button={{
          title: "Get Started",
          theme: "border-gray",
        }}
        image={{
          src: mealCardImage,
          alt: "card background",
        }}
      />

      <div className={`${styles.features_section} bg-highlite`}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-2 pb-md-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <DynamicHeading
                content={[
                  {
                    title: "Travel and Expense Cards for",
                    color: "color-black",
                  },
                  {
                    title: " Delightful Travel Experiences",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
          </div>
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12  pe-md-5">
              <div className={`d-flex flex-column  ${styles.subtitle}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Comprehensive Travel Management",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h4"
                  className="f-5 mb-2"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Efficiently handle all aspects of business travel with tools that provide oversight, simplify processes, and support global usability.",
                      color: "color-main-grey",
                    },
                  ]}
                  headingTag="p"
                  className=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {spendAnalyticsData.map(({ icon, title, description }, i) => (
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
                <CommanButton
                  title="Get started "
                  theme="border-gray"
                  arrow
                  url={salesUrl}
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

      <div className={`${styles.action_row} bg-white`}>
        <div className="max-w-auto">
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className={`col-md-6 col-12 `}>
              <div>
                <Image
                  src={costSavingdImg}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
            <div className="col-md-6 col-12 ps-md-5">
              <div className={`d-flex  flex-column ${styles.subtitle}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Cost Savings Made Simple",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h4"
                  className="f-5 mb-2"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Optimize your spending and reduce unnecessary costs through advanced tools and automation.",
                      color: "color-main-grey",
                    },
                  ]}
                  headingTag="p"
                  className=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {costSavingData.map(({ icon, title, description }, i) => (
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
                <CommanButton
                  title="Get started "
                  theme="border-gray"
                  arrow
                  url={salesUrl}
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.features_section} bg-highlite`}>
        <div className="max-w-auto">
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12  pe-md-5">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Enhanced Employee Experience",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h4"
                  className="f-5 mb-2"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Create a smoother, more rewarding travel experience for your team while ensuring policy adherence.",
                      color: "color-main-grey",
                    },
                  ]}
                  headingTag="p"
                  className=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {enhanceEmployeeData.map(({ icon, title, description }, i) => (
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
                <CommanButton
                  title="Get started "
                  theme="border-gray"
                  arrow
                  url={salesUrl}
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div className={`col-md-6 col-12 d-flex `}>
              <div>
                <Image
                  src={enhanceEmployeeImg}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.action_row} bg-white`}>
        <div className="max-w-auto">
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className={`col-md-6 col-12 `}>
              <div>
                <Image
                  src={unmatchedControlImg}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
            <div className="col-md-6 col-12 ps-md-5">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Unmatched Control and Compliance",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h4"
                  className="f-5 mb-2"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Gain complete control over spending and ensure compliance through customizable settings and robust monitoring.",
                      color: "color-main-grey",
                    },
                  ]}
                  headingTag="p"
                  className=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {unmatchControlData.map(({ icon, title, description }, i) => (
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
                <CommanButton
                  title="Get started "
                  theme="border-gray"
                  arrow
                  url={salesUrl}
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SliderSection
        headingContent={[
          {
            title: "Key Features ",
            color: "color-equity-blue",
          },
          {
            title: "of Travel and Expense Card",
            color: "color-black",
          },
        ]}
        headingTag="h2"
        productsData={mergedCards}
        productsTitle="All Features"
        productsSubtitle="Combine all use cases"
      />

      <CtaSection
        title={"Issue Travel Cards Instantly for Seamless Management"}
        buttonText={"Try for Yourself"}
        background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          {
            title: "Your Business, ",
            color: "color-black ",
          },
          {
            title: "Your Cards – ",
            color: "color-equity-blue ",
          },
          {
            title: "Tailored by EnKash",
            color: "color-black",
          },
        ]}
        useOptionalProps={true}
        cards={cardType}
      />
    </div>
  )
}

export default TravelExpenseCard
