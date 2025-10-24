import { Metadata } from "next"
import Image from "next/image"
import styles from "./page.module.scss"

//data
import { benifitsData, cardsData, cardType, stackcardData } from "./data"
import faqData, { SecondfaqData } from "./faq-data"

//components
import { getSalesUrl } from "@/utils/getSalesUrl"
import generateMetaData from "@/utils/metaData"
import DynamicHeading from "@/components/dynamic-heading"
import AllInOnePolicy from "@/components/all-in-one-policy"
import CardStacking from "@/components/card-stacking"
import SecondFaqHtml from "@/components/second-faq/secondFaqHtml"
import FaqSection from "@/components/faq-section"
import RewardsCarousel from "@/components/rewards-carousel"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import { StepsSection } from "@/src/components"
import CtaSection from "@/src/components/sections/cta-section"

//helpers
import { paymentSummary, mealCardImage, faqBg } from "./img"

//utils

export const metadata: Metadata = generateMetaData({
  title: "Employee Rewards: Recognise Employee Achievements",
  description:
    "Reward employees with instant, customizable digital cards using EnKash. Simplify recognition, boost morale, and manage all rewards from one smart platform.",
  alternates: {
    canonical: `${process.env.URL}/employee-rewards`,
  },
})
const salesUrl = getSalesUrl("/employee-rewards")
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

const EmployeeRewards = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white `}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Rewards",
            url: "/products/rewards",
          },
          {
            name: "Employee Rewards",
            url: "/employee-rewards",
          },
        ]}
        subtitle={{
          text: "Employee Rewards",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Motivate Your Valuable Workflow with Employee Rewards",
            color: "color-black",
          },
        ]}
        description={{
          text: "Recognize achievements, celebrate milestones, and boost morale with EnKash’s all-in-one employee rewards and recognition platform.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/rewardsBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Recognize & Retain Employees"
        cards={benifitsData}
      />

      <StepsSection
        heading={[
          {
            text: "How to Distribute ",
            colorClass: "color-black",
          },
          {
            text: "Employee Rewards ",
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
                title: "Promote  ",
                color: "color-black",
              },
              {
                title: "Productivity & Engagement ",
                color: "color-equity-blue",
              },
              {
                title: "with Recognition Programs for Employees",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center  max-w-auto`}>
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
            className="f-5 px-3 mb-4 mb-md-5"
          />
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

      <div className={`${styles.integration_section}`}>
        <div className={` w-100 max-w-auto`}>
          <DynamicHeading
            content={[
              {
                title: "Rewards That Work For ",
                color: "color-black",
              },
              {
                title: "Employers and Employees! ",
                color: "color-equity-blue",
              },
            ]}
            headingTag="h2"
            className="f-6 text-start pb-md-5 pb-4"
          />

          <div className="row align-items-end ">
            <div className={`${styles.secondFaq} col-md-6 col-12`}>
              <SecondFaqHtml SecondfaqData={SecondfaqData} />
            </div>

            <div
              className={`${styles.faq_bg} col-md-6 col-12 d-md-block d-none`}
            >
              <Image src={faqBg} alt="background image" />
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title={"Ready To Turn Hard Work Into Heartfelt Rewards?"}
        buttonText={"Get Started  "}
      />
      <FaqSection faqData={faqData} />
    </div>
  )
}

export default EmployeeRewards
