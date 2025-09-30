import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  allProductSections,
  cardData,
  cardType,
  intantActionData,
  spendAnalyticsData,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

//components
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"
import AllProducts from "@/src/components/all-products"
import Heading from "@/src/components/heading"
import CardHeroSection from "@/src/components/sections/card-hero-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"


//helpers
import { mealCardImage, instantActionImg, heroCardImg } from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"


export const metadata: Metadata = generateMetaData({
  title: "Gift Cards for Business: Reward Employees & Partners",
  description:
    "Create and distribute digital gift cards with EnKash. Personalize rewards for employees, clients, or partners—perfect for festive gifting and engagement programs.",
  alternates: {
    canonical: `${process.env.URL}/gift-cards/`,
  },
})
const salesUrl = getSalesUrl("/gift-cards")
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
const GiftCards = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white  ${styles.home_container}`}>
      <CardHeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Corporate Cards ", url: "/corporate-cards" },
          {
            name: "Gift Cards",
            url: "/corporate-cards/gift-cards",
          },
        ]}
        linkColor="allWhite"
        subtitle={{
          text: "Gift Cards",
          color: "color-white",
          underline: true,
        }}
        title={[
          {
            text: "Build a Culture of Recognition with ",
            color: "color-white f-3 italic d-block",
          },
          { text: "Customized Gift Cards", color: "color-white" },
        ]}
        description={{
          text: "Make gifting seamless for businesses with these easy-to-access and control gift cards.",
          color: "color-white subHeading",
        }}
        button={{ title: "Get Started", url: "/get-started", theme: "blue" }}
        heroImage={heroCardImg}
        backgroundImage="/images/giftCardBg.webp"
        paddingTop="120px"
        paddingBottom="60px"
      />
      
      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <div className={styles.introduction_section}>
        <div className="max-m-auto">
          <DynamicHeading
            content={[
              {
                title: "Best Gift Cards Online",
                color: "color-white",
              },
            ]}
            headingTag="h3"
            className="f-5 text-center pb-3 pb-md-5"
          />

          <div className={`d-flex  flex-wrap  ${styles.section}`}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
              >
                {item.icon && (
                  <Image src={item.icon} alt="icon" width={28} height={28} />
                )}

                <Heading
                  title={item.title}
                  color="main-grey"
                  size="h7"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <StepsSection
        heading={[
          { text: "How to Buy Gift Cards?", colorClass: "color-black" },
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
                title: "One Gift Card; ",
                color: "color-black",
              },
              {
                title: "Endless Choices",
                color: "color-equity-blue",
              },
            ]}
          />
        </div>
      </div>

      <StepsSection
        heading={[
          { text: "Other Products to Build ", colorClass: "color-black" },
          {
            text: "High-Performing Teams",
            colorClass: "color-equity-blue",
          },
        ]}
        steps={spendAnalyticsData}
        button={{
          title: "Get Started",
          theme: "border-gray",
        }}
        image={{
          src: instantActionImg,
          alt: "card background",
        }}
        backgroundClass="bg-color-black-30"
      />

      <div className={`${styles.cta_section} relative`}>
        <DynamicHeading
          content={[
            {
              title: "Give Your Employees ",
              color: "color-black",
            },
            {
              title: "The Freedom To Choose. ",
              color: "color-equity-blue",
            },
          ]}
          headingTag="h2"
          className="f-6 pb-3 max-w-auto"
        />

        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div>

      <CtaSection
        title={"Explore Our Customizable Gift Cards"}
        buttonText={"Get Started Today"}
        background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          {
            title: "Choose",
            color: "color-black",
          },
          {
            title: " the Right Card",
            color: "color-equity-blue",
          },
          {
            title: " for Every Use Case",
            color: "color-black",
          },
        ]}
        useOptionalProps={true}
        cards={cardType}
      />
    </div>
  )
}

export default GiftCards
