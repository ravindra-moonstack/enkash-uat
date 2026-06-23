import { Metadata } from "next"
import dynamic from "next/dynamic"
import styles from "./page.module.scss"

//data
import { cardType, intantActionData, stackcardData } from "./data"
import faqData from "./faq-data"

//helpers
import { mealCardImage, heroCardImg } from "./img"

// components
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CardHeroSection from "@/src/components/sections/card-hero-section"
import OtherProducts from "@/src/components/sections/other-products"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import BlogSection from "@/src/components/sections/blog-section"

const CardStacking = dynamic(() => import("@/src/components/card-stacking"))
const LogoSlider = dynamic(() => import("@/src/components/logo-slider"))

export const metadata: Metadata = generateMetaData({
  title: "Fuel Card for Fleet & Employee Travel Management",
  description:
    "Simplify fuel expense management with EnKash Fuel Cards. Set usage limits, monitor spending in real time, and reduce fuel fraud for your business fleet.",
  alternates: {
    canonical: `${process.env.URL}/fuel-card`,
  },
})
const salesUrl = getSalesUrl("/fuel-card")

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

const FuelCards = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <CardHeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Corporate Cards ", url: "/corporate-cards" },
          {
            name: "Fuel Card",
            url: "/corporate-cards/fuel-card",
          },
        ]}
        linkColor="allWhite"
        subtitle={{
          text: "Fuel Cards",
          color: "color-white",
          underline: true,
        }}
        title={[
          {
            text: "Transform Fuel Expense with Most Flexible",
            color: "color-white f-3 italic d-block",
          },
          { text: " Fuel Card Solution in India", color: "color-white" },
        ]}
        description={{
          text: "Eliminate hassle, gain control, and cut costs with best fuel card solution for businesses of all sizes",
          color: "color-white subHeading",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        heroImage={heroCardImg}
        backgroundImage="/images/fuelCardBg.webp"
        paddingTop="138px"
        paddingBottom="60px"
      />

      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <StepsSection
        heading={[
          { text: "Steps to Manage Employee ", colorClass: "color-black" },
          { text: "Fuel Costs", colorClass: "color-equity-blue" },
        ]}
        subHeading={[
          {
            text: "Eliminate hassle, gain control, and cut costs with best fuel card solution for businesses of all sizes. ",
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
          />
        </div>
      </div>

      <FaqSection faqData={faqData} />

      <BlogSection
        heading={[
          {
            title: "Related  ",
            color: "color-black ",
          },

          {
            title: " Resources",
            color: "color-black f-4",
          },
        ]}
        cards={[13826, 1628, 13953]}
      />
      <OtherProducts
        heading={[
          {
            title: "Your Business, Your Cards – ",
            color: "color-black",
          },
          {
            title: "Tailored by EnKash",
            color: "color-equity-blue",
          },
        ]}
        useOptionalProps={true}
        cards={cardType}
      />
    </div>
  )
}

export default FuelCards
