import { Metadata } from "next"
import dynamic from "next/dynamic"
import styles from "./page.module.scss"

//data
import { benifitsData, cardsData, cardType, stackcardData } from "./data"
import faqData from "./faq-data"

//components
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"
const RewardsCarousel = dynamic(() => import("@/src/components/rewards-carousel"))
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
const CardStacking = dynamic(() => import("@/src/components/card-stacking"))
import CtaSection from "@/src/components/sections/cta-section"

//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import BlogSection from "@/src/components/sections/blog-section"

export const metadata: Metadata = generateMetaData({
  title: "Channel Incentives Platform to Drive and Motivate Your Partners",
  description:
    "Boost partner performance with EnKash Channel Incentives. Automate payouts, track performance, and motivate resellers, agents, or dealers with ease.",
  alternates: {
    canonical: `${process.env.URL}/channel-incentives`,
  },
})

const salesUrl = getSalesUrl("/channel-incentives")
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

const ChannelIncentives = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white ${styles.home_container}`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Rewards",
            url: "/products/rewards",
          },
          {
            name: "Channel Incentives",
            url: "/channel-incentives",
          },
        ]}
        subtitle={{
          text: "Channel Incentives",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Boost Channel Partner Engagement with a Leading Channel Incentive Platform",
            color: "color-black",
          },
        ]}
        description={{
          text: "Automate channel rewards with powerful channel partner incentive platform built to scale channel incentive programs and drive long-term channel partner engagement",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/rewardsBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Best Channel Incentive Platform for Channel Partners"
        cards={benifitsData}
      />

      <StepsSection
        heading={[
          {
            text: "How to Set Up ",
            colorClass: "color-black",
          },
          {
            text: "Channel Incentives ",
            colorClass: "color-equity-blue",
          },
        ]}
        subHeading={[
          {
            text: "Setting up channel incentives is simple with EnKash’s centralized channel incentive platform, enabling faster onboarding and seamless reward distribution for every channel partner. ",
            colorClass: "color-black",
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
                title: "Motivate Partners & Improve Productivity",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center max-w-auto`}>
          <div className={`pb-md-5 pb-4`}>
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
              className="f-6"
            />
          </div>
        </div>
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
        title={"Empower Your Channel Partners Today!"}
        buttonText={"Get Started "}
      />
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
        cards={[10509, 8818, 11400]}
      />
      <FaqSection faqData={faqData} />
    </div>
  )
}

export default ChannelIncentives
