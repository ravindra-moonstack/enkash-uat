import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import { acceptedEverywhereData, allProductSections, benefitsCardsData, cardType, customCategories, dataSets, intantActionData, mealBenefitUpgradeData, mealCardComparisonData, stackcardData, statsData } from "./data"
import faqData from "./faq-data"

//components
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"
import HowDoesItWork from "@/src/components/how-does-it-work"
import HeroSection from "@/src/components/sections/hero-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

//helpers
import { circles, mealCardImage, cardRotatingImage, heroCardImg, heroImage, statsBg, bulletPointSectionImg } from "./img"
import { ctaSideImg } from "../employee-benefit-multi-wallet/img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import BlogSection from "@/src/components/sections/blog-section"

import { FeatureCard, StatsSection, EmployeeBenefitSteps, CtaBanner } from "@/src/components"
import BulletPointSection from "@/src/components/sections/bullet-point-section"
import AcceptedEverywhere from "@/src/components/meal-components/AcceptedEverywhere"
import MealCardComparison from "@/src/components/meal-components/MealCardComparison"
import BenefitsCards from "@/src/components/meal-components/benefits-cards"

import MealCtaBanner from "@/src/components/meal-components/MealCtaBanner"

export const metadata: Metadata = generateMetaData({
  title: "Meal Card for Employees | Tax-Free Benefits Up to ₹1,05,600/Year",
  description:
    "Offer tax-free meal benefits with EnKash Meal Cards. UPI-enabled, RBI-licensed, accepted at 50,000+ outlets. Save up to ₹1,05,600 per employee annually. Easy to manage, instant to issue.",
  alternates: {
    canonical: `${process.env.URL}/meal-card`,
  },
})
const salesUrl = getSalesUrl("/meal-card")
const mergedCards = allProductSections.flatMap((section) => section.items)
const MealCards = (): React.JSX.Element => {
  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Corporate Cards",
            url: "products/corporate-cards",
          },
          {
            name: "Meal Card",
            url: "/meal-card",
          },
        ]}
        subtitle={{
          text: "MEAL CARD",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Give Every Employee a ",
            color: "color-black d-block",
          },
          {
            text: "Tax-Free Meal Benefit ",
            color: "color-equity-blue f-7",
          },
          {
            text: "Worth ",
            color: "color-black",
          },
          {
            text: "₹1,05,600",
            color: "color-equity-blue f-7",
          },
          {
            text: ", Without Changing Their CTC",
            color: "color-black",
          },
        ]}
        description={{
          text: "Your employees work hard. They deserve to keep more of what they earn. EnKash Meal Cards restructure your existing meal allowance into a tax-free benefit worth up to ₹1,05,600 per employee annually, more in-hand for them, zero extra cost for you.",
        }}
        button={{ title: "Start Saving", url: salesUrl, theme: "blue" }}
        rightImage={heroImage}
      />
      <StatsSection
        title="The Meal Card Built to Deliver More at Every Step."
        backgroundImage={statsBg}
        className="whiteTheme"
        stats={statsData}
      />
      <BulletPointSection
        heading={[
          {
            title: "India's ",
            color: "color-black f-5",
          },
          {
            title: "Biggest Meal Benefit",
            color: "color-equity-blue f-5",
          },
          {
            title: " Upgrade with Zero Change to Your Payroll Cost.",
            color: "color-black f-5",
          },
        ]}
        description="4X increase in tax-free meal allowance limit."
        bulletPoints={mealBenefitUpgradeData}
        buttonTitle="Get Started"
        buttonUrl={salesUrl}
        image={bulletPointSectionImg}
        className="bg-white"
      />
      <BenefitsCards
        heading={benefitsCardsData.heading}
        cards={benefitsCardsData.cards}
      />
      <div className={`${styles.slider_row} relative bg-white`}>
        <div className={`${styles.title} text-center max-w-auto`}>
          <DynamicHeading
            content={[
              {
                title: "Tap, Swipe, or Scan — Employees Choose How They Pay",
                color: "color-black f-5",
              },
            ]}
            headingTag={'h2'}
            className={'f-6'}
          />
        </div>

        <div className="max-w-auto">
          <div className={`row ${styles.integration_row}`}>
            <div className="d-flex align-items-stretch gap-3 gap-md-0 flex-wrap flex-md-nowrap pb-4 pt-4 pt-md-5 justify-content-center">
              {mergedCards?.map((card, index) => (
                <div key={index.toString()} className="d-flex">
                  <FeatureCard
                    titleHtml={card.title}
                    description={card?.description}
                    cardImage={card.image}
                    hoverClass={styles.hoverClass}
                    iconWidth={48}
                    headingTag="h3"
                    headingClassName="heading-h5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.use_case_section}  row d-flex`}>
        <div className="max-m-auto relative ">
          <div className={styles.circles_bg}>
            <Image src={circles} alt="background image" />
          </div>

          <DynamicHeading
            content={[
              {
                title: "Everything Finance and HR Need to",
                color: "color-white italic d-block f-1",
              },
              {
                title: "Run Meal Benefits Without Overhead",
                color: "color-equity-blue f-5",
              },
            ]}
            headingTag="h2"
            className={`${styles.use_case_heading} f-6 text-center mb-5`}
          />

          <div className={styles.how_it_workssection}>
            <HowDoesItWork dataSets={dataSets} />
          </div>
        </div>
      </div>

      <div className={`${styles.features_section} ${styles.steps_container} bg-white`}>
        <EmployeeBenefitSteps
          heading={{
            content: [
              { title: "How To Get Started with EnKash Meal Cards", color: "color-black text-center f-5" },
            ],
          }}
          description={{
            content: [
              {
                title:
                  "No complex integration. No IT dependency. EnKash handles the full lifecycle — from card issuance to compliance reporting.",
                color: "color-black",
              },
            ],
          }}
          steps={intantActionData}
        />
      </div>

      <MealCardComparison
        heading={mealCardComparisonData.heading}
        ourColumnLabel={mealCardComparisonData.ourColumnLabel}
        competitorColumnLabel={mealCardComparisonData.competitorColumnLabel}
        rows={mealCardComparisonData.rows}
        ctaButton={mealCardComparisonData.ctaButton}
      />


      <AcceptedEverywhere
        heading={acceptedEverywhereData.heading}
        autoplayInterval={acceptedEverywhereData.autoplayInterval}
        categories={customCategories}
      />
      <MealCtaBanner
        leftImage={ctaSideImg}
        rightImage={ctaSideImg}
        titleLight="Rely on EnKash for Meal Benefits"
        titleBold="5,000+ Businesses"
        description="From India's largest enterprises to fast-growing startups,  across BFSI, retail, healthcare, logistics, and tech."
        buttonText="Talk to Experts"
        buttonUrl={salesUrl}
      />
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
        cards={[1155, 1037, 1628]}
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

export default MealCards
