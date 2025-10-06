import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  intantActionData,
  spendAnalyticsData,
  cardType,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

//components
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import LogoSlider from "@/src/components/logo-slider"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"
import CardHeroSection from "@/src/components/sections/card-hero-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

//helpers
import { mealCardImage, heroCardImg, instantActionImg } from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "DIY Card Module: Create & Manage Cards Instantly",
  description:
    "Design, issue, and manage physical or virtual cards on demand with EnKash’s DIY Card Module. Customize controls, set limits, and enable smart expense tracking.",
  alternates: {
    canonical: `${process.env.URL}/diy-card-module/`,
  },
})
const salesUrl = getSalesUrl("/diy-card-module")

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

const DiyCardModule = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white`}>
      <CardHeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Corporate Cards", url: "/corporate-cards" },
          { name: "DIY Card", url: "/corporate-cards/diy-card-module" },
        ]}
        subtitle={{
          text: "DIY Card",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Take Control of Your Business Expenses with",
            color: "color-black f-3 italic d-block",
          },
          { text: "DIY Corporate Card Module", color: "color-black" },
        ]}
        description={{
          text: "Design cards for specific needs, enforce spending policies, and oversee all transactions with ease.",
          color: "color-black subHeading",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        heroImage={heroCardImg}
        backgroundImage="/images/diyCardBg.webp"
        paddingTop="120px"
        paddingBottom="60px"
      />

      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <StepsSection
        heading={[
          {
            text: "How to Use the DIY Card Module",
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
                title: "The Smarter Approach to ",
                color: "color-black",
              },
              {
                title: "Corporate Card Management ",
                color: "color-equity-blue",
              },
            ]}
          />
        </div>
      </div>

      <StepsSection
        heading={[
          {
            text: "The EnKash Advantage - Benefits of Using EnKash’s ",
            colorClass: "color-black",
          },
          {
            text: "DIY Card Module",
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

      <CtaSection
        title={"Take Charge of Your Expenses Today!"}
        buttonText={"Get Started Today"}
        background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          {
            title: "Your Business, ",
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

export default DiyCardModule
