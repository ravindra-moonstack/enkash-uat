import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//components
import CommanButton from "@/src/components/buttons"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import CtaSection from "@/src/components/sections/cta-section"
import EnkashWay from "@/src/components/enkash-way/enkash-way"
import { heroCardImg } from "./img"
import BlogSection from "@/src/components/sections/blog-section"

//data
import { otherProductsHeading, progressData, stackcardData } from "./data"
import { faqData } from "./faq-data"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Corporate Prepaid Cards for Business Payments",
  description:
    "Empower your teams with EnKash’s corporate prepaid cards. Control spending, track expenses in real-time, and manage business payments effortlessly and securely.",
  alternates: {
    canonical: `${process.env.URL}/prepaid-card`,
  },
})

const salesUrl = getSalesUrl("/prepaid-card")

// Static card stacking data
const stackCards = stackcardData.map((item, index) => ({
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

// -----------------------------------------
//  PAGE COMPONENT
// -----------------------------------------
const PrepaidCard = async (): Promise<React.JSX.Element> => {
  return (
    <div className={`color-white`}>
      {/* ---------------- HERO SECTION ---------------- */}
      <div className={`${styles.hero_section}`}>
        <div className="max-w-auto ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/products/corporate-cards" },
                { name: "Prepaid Cards", url: "/corporate-cards/prepaid-card" },
              ]}
              linkColor="allWhite"
            />
          </div>

          <div className={`${styles.title} col-12`}>
            <DynamicHeading
              content={[
                { title: "Prepaid Cards", color: "color-white underline" },
              ]}
              headingTag="p"
            />

            <div className="d-flex flex-column text-center">
              <DynamicHeading
                content={[
                  {
                    title: "The Best Prepaid Corporate Card",
                    color: "color-white f-3 d-block italic",
                  },
                  { title: "for Business Spending", color: "color-white" },
                ]}
                headingTag="h1"
                className="f-7 mb-2"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      " No paperwork. No delays. Experience the prepaid corporate card solution for businesses: built to deliver full control, instant issuance, and 100% compliance.",
                    color: "color-white subHeading",
                  },
                ]}
                headingTag="p"
              />
            </div>

            <div
              className={`${styles.button_wrapper} justify-content-center d-flex`}
            >
              <CommanButton title="Get Started" theme="blue" url={salesUrl} />
            </div>
          </div>
        </div>
        <div className={`${styles.lottie_containerOuter} col-12 `}>
          <div className={styles.lottie_container}>
            <Image src={heroCardImg} alt="card background" />
          </div>
        </div>
      </div>

      {/* ---------------- LOGO SLIDER ---------------- */}
      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      {/* ---------------- ENKASH WAY ---------------- */}
      <EnkashWay
        sectionHeading="Ditch out-of-pocket claims. "
        secondHeading="Take control of every rupee."
        secondHeadingColor="black"
        subTitle="Empower your teams with prepaid business cards that simplify purchases, automate tracking, and eliminate out-of-pocket claims—whether it’s meals, fuel, travel, SaaS, or purchase-specific spends."
        progressData={progressData}
      />

      {/* ---------------- STACKED CARDS ---------------- */}
      <div className={styles.card_stacking_row}>
        <div className={`max-w-auto ${styles.section}`}>
          <CardStacking
            cards={stackCards}
            heading={[
              { title: "Why Businesses Choose EnKash Prepaid Cards ", color: "color-black" },
            ]}
          />
        </div>
      </div>

      {/* ---------------- CTA ---------------- */}
      <CtaSection
        title="Step into the World of Smarter, Safer & Seamless Spending"
        buttonText="Get Started"
        background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
      />

      {/* ---------------- FAQ ---------------- */}
      <FaqSection faqData={faqData} />

      {/* ---------------- BLOG SECTION (now dynamic!) ---------------- */}
      <BlogSection
        heading={otherProductsHeading}
        headingTag="h2"
        cards={[13651, 13953, 10503]}
      />
    </div>
  )
}

export default PrepaidCard
