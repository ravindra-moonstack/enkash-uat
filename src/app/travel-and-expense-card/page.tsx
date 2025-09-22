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
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"
import StepCard from "@/src/components/step-card"
import AllProducts from "@/src/components/all-products"
import CardProduct from "@/src/components/card-product"

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
    canonical: `${process.env.URL}/travel-and-expense-card/`,
  },
})
const salesUrl = getSalesUrl("/travel-and-expense-card")
const mergedCards = allProductSections.flatMap((section) => section.items)

const TravelExpenseCard = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <div className={`${styles.hero_section}`}>
        <div className="max-w-auto ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Travel & Expense Card",
                  url: "/corporate-cards/travel-and-expense-card",
                },
              ]}
              linkColor="allWhite"
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Travel & Expense Card",
                  color: "color-white underline",
                },
              ]}
              headingTag="p"
              className="mb-2"
            />

            <div className="d-flex  flex-column text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Travel and Expense Card ",
                    color: "color-white italic f-3 d-block",
                  },
                  {
                    title: "Optimize Your Business Travel Management ",
                    color: "color-white ",
                  },
                ]}
                headingTag="h1"
                className="f-7 mb-2"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Ensure seamless business travel experiences while empowering your team, saving costs, and enhancing compliance—all with one smart solution. Our T&E card solution gives you the control and convenience your business needs. ",
                    color: "color-white subHeading",
                  },
                ]}
                headingTag="p"
                className=""
              />
            </div>
            <div
              className={`${styles.button_wrapper} justify-content-center d-flex`}
            >
              <CommanButton title="Get Started" theme="blue" url={salesUrl} />
            </div>
          </div>
        </div>
        <div className=" col-12 pt-5 ">
          <div className={styles.lottie_container}>
            <Image src={heroCardImg} alt="card background" className=" " />
          </div>
        </div>
      </div>

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

      <div className={`${styles.cta_section} relative`}>
        <div className={`${styles.title} text-center max-w-auto`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <DynamicHeading
              content={[
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

      <div className={`${styles.sixth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Issue Travel Cards Instantly for Seamless Management",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <CommanButton
              title="Try for Yourself"
              theme="outline-blue"
              arrow
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
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
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 ">
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

export default TravelExpenseCard
