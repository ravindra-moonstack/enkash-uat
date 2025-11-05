import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import { cardType, dataSets, intantActionData, stackcardData } from "./data"
import faqData from "./faq-data"

//components
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"
import HowDoesItWork from "@/src/components/how-does-it-work"
import CardHeroSection from "@/src/components/sections/card-hero-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

//helpers
import { circles, mealCardImage, cardRotatingImage, heroCardImg } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Meal Card: Tax-Saving Digital Benefit for Employees",
  description:
    "Offer tax-free meal allowances with EnKash Meal Cards. Easy to manage, accepted at food outlets and online—boost employee satisfaction and streamline HR processes.",
  alternates: {
    canonical: `${process.env.URL}/meal-card`,
  },
})
const salesUrl = getSalesUrl("/meal-card")
const cards = stackcardData.map((item, index) => ({
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
    <div className={`color-white`}>
      <CardHeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Corporate Cards ", url: "/corporate-cards" },
          {
            name: "Meal Card",
            url: "/corporate-cards/meal-card",
          },
        ]}
        linkColor="allWhite"
        subtitle={{
          text: "Meal Card",
          color: "color-white",
          underline: true,
        }}
        title={[
          {
            text: "Empower Your Employees with ",
            color: "color-white f-3 italic d-block",
          },
          { text: "Tax-Free Meal Cards", color: "color-white" },
        ]}
        description={{
          text: " Simplify meal benefits with tax-free, paperless cards; easy to manage and widely accepted across merchants.",
          color: "color-white subHeading",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        heroImage={heroCardImg}
        backgroundImage="/images/mealCardBg.webp"
        paddingTop="138px"
        paddingBottom="60px"
      />

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

      <div className={`${styles.use_case_section}  row d-flex`}>
        <div className="max-m-auto relative ">
          <div className={styles.circles_bg}>
            <Image src={circles} alt="background image" />
          </div>
          <div className={styles.cardRotatingImage}>
            <Image src={cardRotatingImage} alt="background image" />
          </div>

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
            className="f-6 text-center mb-5"
          />

          <div className={styles.how_it_workssection}>
            <HowDoesItWork dataSets={dataSets} />
          </div>
        </div>
      </div>

      <div className={`${styles.sixth_row}`}>
        <CtaSection
          title={"Hassle-Free Meals, Happier Employees"}
          buttonText={"Get Started "}
          background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
        />
      </div>

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
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
        useOptionalProps={true}
        cards={cardType}
      />
    </div>
  )
}

export default MealCards
