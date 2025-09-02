import Image from "next/image"
import styles from "./page.module.scss"
import { cardType, dataSets, intantActionData, stackcardData } from "./data"
import {
  RectangleButton,
  CustomBreadcrumb,
  LogoSlider,
  CardProduct,
  DynamicHeading,
  CardStacking,
  AllInOnePolicy,
  FaqSection,
  StepsSection,
  HowDoesItWork,
} from "@/src/components"

import {
  circles,
  blueArrow,
  whiteArrow,
  mealCardImage,
  cardRotatingImage,
  heroCardImg,
} from "."

import faqData from "./faq-data"
import { Metadata } from "next"
import { getSalesUrl } from "@/src/common/utils/getSalesUrl"
import generateMetaData from "@/src/common/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Meal Card: Tax-Saving Digital Benefit for Employees",
  description:
    "Offer tax-free meal allowances with EnKash Meal Cards. Easy to manage, accepted at food outlets and online—boost employee satisfaction and streamline HR processes.",
  alternates: {
    canonical: `${process.env.URL}/meal-card/`,
  },
})
const salesUrl = getSalesUrl("/meal-card")
const cards = stackcardData.map((item, index) => ({
  color: item.color,
  content: (
    <AllInOnePolicy
      key={index}
      buttonText="Get Started"
      icon={item.icon}
      title={item.title}
      description={item.description}
      image={item.image}
      buttonUrl={salesUrl}
      maxImageHeight="300px"
    />
  ),
}))
const MealCards = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Meal Card",
                  url: "/corporate-cards/meal-card",
                },
              ]}
              linkColor="allWhite"
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Meal Card",
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
                    title: "Empower Your Employees with",
                    color: "color-white f-3 d-block italic",
                  },
                  {
                    title: "Tax-Free Meal Cards",
                    color: "color-white",
                  },
                ]}
                headingTag="h1"
                className="mb-2 f-7"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      " Simplify meal benefits with tax-free, paperless cards; easy to manage and widely accepted across merchants.",
                    color: "color-white subHeading",
                  },
                ]}
                headingTag="p"
                className=""
              />
            </div>
            <div className={`${styles.button_wrapper} justify-content-center d-flex`}>
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
            text: "How To Get Started with Meal Cards",
            colorClass: "color-black",
          },
        ]}
        steps={intantActionData}
        button={{
          title: "Get Started",
          theme: "border-gray",
          actionImage: blueArrow,
          hoverImage: whiteArrow,
        }}
        image={{
          src: mealCardImage,
          alt: "card background",
        }}
      />

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <CardStacking
            cards={cards}
            heading={[
              {
                title: "Meal Cards that your Employees Deserve",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <div className={`${styles.fourth_row}  row d-flex`}>
        <div className="max-m-auto relative ">
          <div className={styles.circles_bg}>
            <Image src={circles} alt="background image" />
          </div>
          <div className={styles.cardRotatingImage}>
            <Image src={cardRotatingImage} alt="background image" />
          </div>
          <div className="d-flex flex-column text-center mb-5">
            <DynamicHeading
              content={[
                {
                  title: "Meal Card Features That Make ",
                  color: "color-white italic d-block f-3",
                },
                {
                  title: "EnKash the Perfect Choice",
                  color: "color-block",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>

          <div className={styles.how_it_workssection}>
            <HowDoesItWork dataSets={dataSets} />
          </div>
        </div>
      </div>

      <div className={`${styles.sixth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Hassle-Free Meals, Happier Employees",
                  color: "color-block",
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
                  title: "Choose ",
                  color: "color-black",
                },
                {
                  title: "the Right Card ",
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

export default MealCards
