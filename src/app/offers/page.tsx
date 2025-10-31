import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import { benifitsData, cardsData, cardType, stackcardData } from "./data"
import faqData from "./faq-data"

// components
import FaqSection from "@/src/components/faq-section"
import RewardsCarousel from "@/src/components/rewards-carousel"
import CardStacking from "@/src/components/card-stacking"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"

import { paymentSummary, mealCardImage } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import { StepsSection } from "@/src/components"
import CtaSection from "@/src/components/sections/cta-section"

export const metadata: Metadata = generateMetaData({
  title: "Offers: Exclusive Deals on Business Payments & Cards",
  description:
    "Unlock exclusive EnKash offers on business payments, cards, rewards, and partner deals. Save more while you manage expenses smarter across all business needs.",
  alternates: {
    canonical: `${process.env.URL}/offers`,
  },
})

const salesUrl = getSalesUrl("/offers")
const mergedCards = cardType.flatMap((section) => section.items)
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

const Offers = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Rewards",
            url: "/products/rewards",
          },
          {
            name: "Offers",
            url: "/offers",
          },
        ]}
        subtitle={{
          text: "Offers",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Access exclusive offers on business products ",
            color: "color-black",
          },
        ]}
        description={{
          text: "Discover exclusive corporate offers from trusted partners and enjoy special discounts on a variety of business products and services.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/rewardsBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Irresistible Offers for Your Business"
        cards={benifitsData}
      />

      <StepsSection
        heading={[
          {
            text: "How to Access ",
            colorClass: "color-black",
          },
          {
            text: " Offers ",
            colorClass: "color-equity-blue",
          },
        ]}
        steps={cardsData}
        button={{
          title: "Get started",
          theme: "outline-blue",
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
                title: "Exclusive ",
                color: "color-black",
              },
              {
                title: "discounts and benefits ",
                color: "color-equity-blue",
              },
              {
                title: "on partnered services",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <div className={`${styles.slider_row} relative`}>
        <DynamicHeading
          content={[
            {
              title: "Other Products ",
              color: "color-black",
            },
            {
              title: "to Build High-Performing Teams",
              color: "color-equity-blue",
            },
          ]}
          headingTag="h2"
          className="f-6 pb-4 pb-md-5 text-center max-w-auto"
        />

        <RewardsCarousel
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards.map((card) => ({
            title: card.titleHtml,
            description: card.description,
            image: card.cardImage,
            link: card.url,
          }))}
        />
      </div>

      <CtaSection
        title={"Unlock Exclusive Deals On A Wide Range Of Business Products"}
        buttonText={"Get Started "}
      />

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default Offers
