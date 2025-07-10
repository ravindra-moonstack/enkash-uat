"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { cardType, dataSets, intantActionData } from "./data"

import { Header, Heading, Footer, FAQHtml } from "@/components"

import {
  motherCardImg,
  circles,
  blueArrow,
  whiteArrow,
  mealCardImage,
  cardRotatingImage,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"

import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work."
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import PolicyCard from "@/components/policyCard/policyCard"
import faqData from "./faq-data"
import LogoSlider from "@/components/logo-slider/logo-slider"

import CardProduct from "@/components/card-product/card-product"

// const showScroll = cardsData.length > 3
// const mergedCards = allProductSections.flatMap((section) => section.items)
const MealCards = (): React.JSX.Element => {
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

                {
                  name: "Digital Marketing  Card",
                  url: "/digital-marketing-card",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <Heading
              title="DIGITAL MARKETING CARD"
              color="equity-blue"
              size="h5"
              weight="4"
              underline
            />
            <div className="d-flex  flex-column justify-content-center align-items-center">
              <Heading
                title="Take Control of Your Marketing Budget with a "
                color="black"
                size="h2"
                weight="2"
                italic
              />
              <Heading
                title="Digital Marketing Card"
                color="black"
                size="h2"
                weight="7"
              />
            </div>

            <div className="d-inline text-center">
              <Heading
                title="Effortlessly allocate, track, and optimize your marketing budgets. Designed specifically for marketing professionals, this solution ensures precision, control, and real-time visibility over your campaigns’ spend."
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
        <div className=" col-12 d-flex">
          <div className={styles.lottie_container}>
            <Image
              src={motherCardImg}
              alt="card background"
              className="position-relative w-100 h-100"
            />
          </div>
        </div>
      </div>

      <div>
        <LogoSlider />
      </div>

      <div className={`${styles.action_row} bg-white row-padding `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <Heading
                title={`How Digital Marketing Card Works ${space}`}
                color="black"
                size="h1"
                weight="5"
              />
           

         
            </div>
          
          </div>
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                }}
              >
                {intantActionData.map(({ icon, title, description }, i) => (
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
                  title="Try Now"
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

      <div className={`${styles.fourth_row}  row d-flex  row-padding-x-only`}>
        <div className="max-m-auto relative ">
          <div className={styles.circles_bg}>
            <Image src={circles} alt="background image" />
          </div>
          <div className={styles.cardRotatingImage}>
            <Image src={cardRotatingImage} alt="background image" />
          </div>
          <div className="d-flex flex-column text-center mb-5">
            <Heading
              title="Meal Card Features That Make"
              color="white"
              size="h1"
              weight="2"
              italic
            />
            <div>
              <Heading
                title="EnKash the Perfect Choice"
                color="equity-blue"
                size="h1"
                weight="6"
              />
            </div>
          </div>

          <div className={styles.how_it_workssection}>
            <HowDoesItWork dataSets={dataSets} />
          </div>
        </div>
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
          <div className={`${styles.title} text-start  pb-5`}>
            <Heading
              title={`Frequently Asked Questions  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading title={`(`} color="black" size="h1" weight="5" />
            <Heading title={`FAQ`} color="equity-blue" size="h1" weight="5" />
            <Heading title={`) ${space}`} color="black" size="h1" weight="5" />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div>
                <Heading
                  title="Have more questions? "
                  color="main-grey"
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
              title={`Choose   ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading
              title={`the Right Card  ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />

            <Heading
              title="for Every Use Case"
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

export default MealCards
