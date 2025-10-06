import styles from "./page.module.scss"
import { Metadata } from "next"

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
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"

// helpers
import { mealCardImage, heroCardImg } from "./img"

// utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import CardHeroSection from "@/src/components/sections/card-hero-section"
import SliderSection from "@/src/components/sections/slider-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

export const metadata: Metadata = generateMetaData({
  title: "SaaS Card: Manage & Track All SaaS Payments",
  description:
    "Manage all your software subscriptions with EnKash SaaS Card. Control costs, ensure compliance, and boost operational efficiency.",
  alternates: {
    canonical: `${process.env.URL}/saas-card/`,
  },
})
const salesUrl = getSalesUrl("/saas-card")
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

const SaasCards = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white  `}>
      
      <CardHeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Corporate Cards ", url: "/corporate-cards" },
          {
            name: "Saas Card",
            url: "/corporate-cards/saas-card",
          },
        ]}
        linkColor="allWhite"
        subtitle={{
          text: "SaaS Card",
          color: "color-white",
          underline: true,
        }}
        title={[
          {
            text: "SaaS Cards: Designed to manage, monitor, and",
            color: "color-white f-3 italic d-block",
          },
          { text: "master your SaaS spends.", color: "color-white" },
        ]}
        description={{
          text: "Automate your SaaS business subscriptions for better expense control and auto-renewal.",
          color: "color-white subHeading",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        heroImage={heroCardImg}
        backgroundImage="/images/saasBg.webp"
        paddingTop="120px"
        paddingBottom="60px"
      />

      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <StepsSection
        heading={[
          {
            text: "How To Get Started with SaaS Cards  ",
            colorClass: "color-black",
          },
        ]}
        steps={intantActionData}
        button={{
          title: "Get started",
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
                title: "SaaS Cards for ",
                color: "color-black",
              },
              {
                title: "Smooth Subscription Services ",
                color: "color-equity-blue",
              },
            ]}
          />
        </div>
      </div>

      <SliderSection
        headingContent={[
          {
            title: "Key Features of SaaS Card ",
            color: "color-equity-blue",
          },
        ]}
        headingTag="h2"
        productsData={mergedCards}
        productsTitle="All Features"
        productsSubtitle="Combine all use cases"
      />

      <CtaSection
        title={
          "Discover the EnKash difference - Secure, Scalable and Seamless. "
        }
        buttonText={"Try for Yourself "}
        background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
      />

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

export default SaasCards
