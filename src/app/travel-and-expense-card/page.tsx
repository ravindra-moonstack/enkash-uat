"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import {
  allProductSections,
  cardType,
  costSavingData,
  enhanceEmployeeData,
  intantActionData,
  spendAnalyticsData,
  unmatchControlData,
} from "./data"

import { Header, Heading, Footer, FAQHtml } from "@/components"

import {
  blueArrow,
  whiteArrow,
  mealCardImage,
  instantActionImg,
  heroCardImg,
  podiumImage,
  enhanceEmployeeImg,
  costSavingdImg,
  unmatchedControlImg,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import faqData from "./faq-data"
import LogoSlider from "@/components/logo-slider/logo-slider"
import CardProduct from "@/components/card-product/card-product"
import AllProducts from "@/components/all-products/all-products"
import StepCard from "@/components/stepCard/stepCard"

// const showScroll = cardsData.length > 3
const mergedCards = allProductSections.flatMap((section) => section.items)

const TravelExpenseCard = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <Header utmSource="expense_management" />
      <TalkToSales />
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto px-4">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Travel Expense Card",
                  url: "/corporate-cards/travel-and-expense-card",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <Heading
              title="TRAVEL EXPENSE CARD"
              color="equity-blue"
              size="h5"
              weight="4"
              underline
            />
            <div className="d-flex  flex-column text-center">
              <Heading
                title="Travel and Expense Card: "
                color="black"
                size="h2"
                weight="2"
                italic
              />
              <Heading
                title="Optimize Your Business Travel Management"
                color="black"
                size="h2"
                weight="7"
              />
            </div>

            <div className="d-inline text-center">
              <Heading
                title="Ensure seamless travel experiences while empowering your team, saving costs, and enhancing compliance—all with one smart solution."
                color="black"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
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

      <div className={`${styles.action_row} bg-white row-padding `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-md-5 pb-5`}>
            <div>
              <Heading
                title={`How To Get Started with Travel Expense Cards ${space}`}
                color="black"
                size="h1"
                weight="5"
              />
            </div>
           
          </div>
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-md-5">
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
                  title="Get started "
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales/?source=expense_management"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 
`}
            >
              <div>
                <Image
                  src={mealCardImage}
                  alt="card background"
                  className="
                   w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.third_row} `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-2 pb-md-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <Heading
                title={`Travel and Expense Cards for  ${space}`}
                color="black"
                size="h1"
                weight="5"
              />
              <Heading
                title={`Delightful Travel Experiences`}
                color="equity-blue"
                size="h1"
                weight="5"
              />
            </div>
          </div>
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12  px-md-5">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Comprehensive Travel Management ${space}`}
                  color="black"
                  size="h4"
                  weight="5"
                />
                <Heading
                  title={`Efficiently handle all aspects of business travel with tools that provide oversight, simplify processes, and support global usability. ${space}`}
                  color="main-grey"
                  size="h7"
                  weight="4"
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
                <RectangleButton
                  title="Get started "
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
                  className="
                   w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.action_row} bg-white row-padding `}>
        <div className="max-w-auto">
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div
              className={`col-md-6 col-12 
`}
            >
              <div>
                <Image
                  src={costSavingdImg}
                  alt="card background"
                  className="
                   w-100 h-100"
                />
              </div>
            </div>
            <div className="col-md-6 col-12 px-md-5">
              <div className={`d-flex  flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Cost Savings Made Simple ${space}`}
                  color="black"
                  size="h4"
                  weight="5"
                />
                <Heading
                  title={`Optimize your spending and reduce unnecessary costs through advanced tools and automation.${space}`}
                  color="main-grey"
                  size="h7"
                  weight="4"
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
                <RectangleButton
                  title="Get started "
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales/?source=expense_management"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.third_row} `}>
        <div className="max-w-auto">
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12  px-md-5">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Enhanced Employee Experience  ${space}`}
                  color="black"
                  size="h4"
                  weight="5"
                />
                <Heading
                  title={`Create a smoother, more rewarding travel experience for your team while ensuring policy adherence.${space}`}
                  color="main-grey"
                  size="h7"
                  weight="4"
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
                <RectangleButton
                  title="Get started "
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
                  src={enhanceEmployeeImg}
                  alt="card background"
                  className="
                   w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.action_row} bg-white row-padding `}>
        <div className="max-w-auto">
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div
              className={`col-md-6 col-12 
`}
            >
              <div>
                <Image
                  src={unmatchedControlImg}
                  alt="card background"
                  className="
                   w-100 h-100"
                />
              </div>
            </div>
            <div className="col-md-6 col-12 px-md-5">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <Heading
                  title={`Unmatched Control and Compliance ${space}`}
                  color="black"
                  size="h4"
                  weight="5"
                />
                <Heading
                  title={`Gain complete control over spending and ensure compliance through customizable settings and robust monitoring.${space}`}
                  color="main-grey"
                  size="h7"
                  weight="4"
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
                <RectangleButton
                  title="Get started "
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales/?source=expense_management"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fifth_row} relative`}>
        <div className={`${styles.title} text-center pb-5 max-w-auto`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <Heading
              title={`Key Features ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />
            <Heading
              title={`of Travel   ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <div>
              {" "}
              <Heading
                title={` and Expense Card  ${space}`}
                color="black"
                size="h1"
                weight="5"
              />
            </div>
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
            <Heading
              title="Discover the EnKash difference - Secure, Scalable and Seamless. "
              size="bannerHeading"
              color="white"
              weight="4"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Try for Yourself"
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
          <div className={`${styles.title} text-start  pb-5`}>
            <Heading
              title={`Frequently Asked Questions  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading title={`(`} color="black" size="h1" weight="5" />
            <Heading title={`FAQs`} color="equity-blue" size="h1" weight="5" />
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
              <div className="mt-2 d-none d-md-block">
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
            <Heading
              title={`Your Business,  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading
              title={`Your Cards –   ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />

            <Heading
              title="Tailored by EnKash "
              color="black"
              size="h1"
              weight="5"
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

export default TravelExpenseCard
