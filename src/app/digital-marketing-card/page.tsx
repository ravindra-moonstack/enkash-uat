import { Metadata } from "next"
import Image from "next/image"
import styles from "./page.module.scss"

//data
import {
  cardType,
  intantActionData,
  spendAnalyticsData,
  stackcardData,
} from "./data"

//components
import CommanButton from "@/src/components/buttons"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import PolicyCard from "@/src/components/policy-card"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"

import { mealCardImage, heroCardImg, instantActionImg } from "./img"

import faqData from "./faq-data"
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import CardHeroSection from "@/src/components/sections/card-hero-section"
import OtherProducts from "@/src/components/sections/other-products"

export const metadata: Metadata = generateMetaData({
  title: "Digital Marketing Card: Control Ad Spends Across Platforms",
  description:
    "Manage digital marketing budgets with EnKash Marketing Cards. Set spending limits, track campaign expenses in real time, and eliminate overspending on ads.",
  alternates: {
    canonical: `${process.env.URL}/digital-marketing-card`,
  },
})
const salesUrl = getSalesUrl("/digital-marketing-card")

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

const DigitalMarketingCard = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white `}>
      <CardHeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Corporate Cards ", url: "/corporate-cards" },
          {
            name: "Digital Marketing Card",
            url: "/corporate-cards/digtal-marketing-card",
          },
        ]}
        subtitle={{
          text: "Digital Marketing Card",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Take Control of Your Marketing Budget with a ",
            color: "color-black f-3 italic d-block",
          },
          { text: "Digital Marketing Card", color: "color-black" },
        ]}
        description={{
          text: "Effortlessly allocate, track, and optimize your marketing budgets. Designed specifically for marketing professionals, it ensures precision, control and real-time visibility.",
          color: "color-black subHeading",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        heroImage={heroCardImg}
        backgroundImage="/images/digitalBg.webp"
        paddingTop="138px"
        paddingBottom="60px"
      />
      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <StepsSection
        heading={[
          {
            text: "How Digital Marketing Card Works",
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
          <>
            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "The Smarter Way to Manage Your ",
                  color: "color-black",
                },
                {
                  title: " Digital Marketing Expenses",
                  color: "color-equity-blue",
                },
              ]}
            />
          </>
        </div>
      </div>

      <div className={`${styles.introduction_section} `}>
        <div className="max-w-auto">
          <DynamicHeading
            content={[
              {
                title:
                  "Features of the Best Corporate Card for Digital Marketing Expenses",
                color: "color-black",
              },
            ]}
            headingTag="h2"
            className="f-6 pb-3 text-center "
          />

          <div className={`row`}>
            <div className="col-md-6 col-12  pe-md-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                }}
              >
                {spendAnalyticsData.map(({ icon, title, description }, i) => (
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
                <CommanButton
                  title="Try for Yourself "
                  theme="border-gray"
                  arrow
                  url={salesUrl}
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div className={`col-md-6 col-12 d-flex `}>
              <Image
                src={instantActionImg}
                alt="card background"
                className="w-100 mh-550 object-fit-contain"
              />
            </div>
          </div>
        </div>
      </div>

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

export default DigitalMarketingCard
