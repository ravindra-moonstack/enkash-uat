import { Metadata } from "next"
import styles from "./page.module.scss"

// data
import {
  allProductSections,
  cardType,
  intantActionData,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

// components

import AllInOnePolicy from "@/src/components/all-in-one-policy"
import LogoSlider from "@/src/components/logo-slider"
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"
import CardStacking from "@/src/components/card-stacking"
import CardHeroSection from "@/src/components/sections/card-hero-section"
import SliderSection from "@/src/components/sections/slider-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

// helpers
import { mealCardImage, heroCardImg } from "./img"

// utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Purchase Card: Streamline Business Procurement & Spending",
  description:
    "Simplify procurement with EnKash Purchase Cards. Set spending controls, track purchases in real time, and manage vendor payments with ease and transparency.",
  alternates: {
    canonical: `${process.env.URL}/purchase-card`,
  },
})
const salesUrl = getSalesUrl("/purchase-card")
const mergedCards = allProductSections.flatMap((section) => section.items)

const cards = stackcardData.map(({ icon, title, description, image }) => ({
  content: (
    <AllInOnePolicy
      icon={icon}
      title={title}
      description={description}
      image={image}
      buttonUrl={salesUrl}
      maxImageHeight="300px"
    />
  ),
}))

const PurchesCards = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white `}>
      <CardHeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Corporate Cards ", url: "/corporate-cards" },
          {
            name: "Purchase Cards",
            url: "/corporate-cards/purchase-card",
          },
        ]}
        linkColor="allWhite"
        subtitle={{
          text: "Purchase Card",
          color: "color-white",
          underline: true,
        }}
        title={[
          {
            text: "Optimize Your Business Procurement with ",
            color: "color-white f-3 italic d-block",
          },
          { text: "Purchase Cards (P-Cards)", color: "color-white" },
        ]}
        description={{
          text: "Skip the paperwork; set limits, approve fast, and track team spending in real time.",
          color: "color-white subHeading",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        heroImage={heroCardImg}
        backgroundImage="/images/PurchaseCardBg.webp"
        paddingTop="120px"
        paddingBottom="60px"
      />
      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <StepsSection
        heading={[
          {
            text: "How Does a Purchase Card Work  ",
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
                title: "Get a Handle on Your Business Expenses with the ",
                color: "color-black",
              },
              {
                title: "Best Purchase Card in India",
                color: "color-equity-blue",
              },
            ]}
          />
        </div>
      </div>

      <SliderSection
        headingContent={[
          {
            title: "Key ",
            color: "color-black",
          },
          {
            title: "Features & Benefits ",
            color: "color-equity-blue",
          },
          {
            title: "of Purchase Cards",
            color: "color-black",
          },
        ]}
        productsData={mergedCards}
        productsTitle="All Features"
        productsSubtitle="Combine all use cases"
      />

      <CtaSection
        title={
          "Ready to bring Efficiency, Control & Savings to your Procurement Process?"
        }
        buttonText={"Get Started Today"}
        background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          {
            title: "Our Business, ",
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
        useOptionalProps={true}
        cards={cardType}
      />
    </div>
  )
}

export default PurchesCards
