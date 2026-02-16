import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

import dynamic from "next/dynamic"

//components
import CommanButton from "@/src/components/buttons"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import { GridBgImage, heroCardImg, statsBg } from "./img"
import { acceleratedGrowthImg } from "../payment-gateway/img"

// Dynamic imports for performance
const LogoSlider = dynamic(() => import("@/src/components/logo-slider"))
const CardStacking = dynamic(() => import("@/src/components/card-stacking"), { ssr: false })
const FaqSection = dynamic(() => import("@/src/components/faq-section"))
const BlogSection = dynamic(() => import("@/src/components/sections/blog-section"))
const BecomePartnerSteps = dynamic(() => import("@/src/components").then(mod => mod.BecomePartnerSteps))
const CardProduct = dynamic(() => import("@/src/components").then(mod => mod.CardProduct))
const CounterSection = dynamic(() => import("@/src/components").then(mod => mod.CounterSection))
const PaymentGatewayGridSection = dynamic(() => import("@/src/components").then(mod => mod.PaymentGatewayGridSection))

//data
import { acceleratedGrowthData, cardType, counterHeadingData, gridData, headingData, otherProductsHeading, stackcardData, statsData, stepsData } from "./data"
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
            />
          </div>

          <div className={`${styles.title} col-12`}>
            <DynamicHeading
              content={[
                { title: "PREPAID CARDS", color: "color-grey-200 underline" },
              ]}
              headingTag="p"
            />

            <div className="d-flex flex-column text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Prepaid Cards Built for ",
                    color: "color-grey-200 f-2 d-block",
                  },
                  { title: "Smarter Business Spending", color: "color-grey-200" },
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
                      "Issue cards instantly. Set limits in seconds. Track every rupee in real time. No reimbursements, no surprises, no cash advances.",
                    color: "color-grey-200 subHeading",
                  },
                ]}
                headingTag="p"
                className="mb-5"
              />
            </div>

            <div
              className={`${styles.button_wrapper} justify-content-center d-flex`}
            >
              <CommanButton title="Get Started" theme="blue" url={salesUrl} />
            </div>
          </div>
        </div>
        <div className={`col-12 `}>
          <div className={styles.lottie_container}>
            <Image
              src={heroCardImg}
              alt="card background"
              priority={true}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* ---------------- LOGO SLIDER ---------------- */}

      <LogoSlider />

      <CounterSection
        titleContent={counterHeadingData}
        stats={statsData}
        backgroundImage={statsBg}
      />


      {/* ---------------- STACKED CARDS ---------------- */}
      <div className={styles.card_stacking_row}>
        <div className={`max-w-auto ${styles.section}`}>
          <CardStacking
            cards={stackCards}
            heading={[
              {
                title: "Everything You Need to Manage Business Spending",
                color: "color-grey-200",
              },
            ]}
          />
        </div>
      </div>

      <PaymentGatewayGridSection
        slideData={gridData}
        heading={[{ title: "Prepaid Cards, Natively Connected to Expense Management", color: "color-white" }]}
        description="With EnKash, prepaid cards feed directly into expense management, eliminating the need to match transactions, receipts, and approvals across different systems."
        backgroundImage={GridBgImage.src}
      />

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "One ",
                  color: "color-black",
                },
                {
                  title: "Platform. ",
                  color: "color-equity-blue",
                },
                {
                  title: "Every Business Spending Need.",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4">
            {cardType.map(
              ({ titleHtml, description, cardImage, linkUrl }, index) => (
                <div key={index} className="col-12 col-md-4">
                  <CardProduct
                    titleHtml={titleHtml}
                    description={description}
                    cardImage={cardImage}
                    linkUrl={linkUrl}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.features_section} ${styles.steps_container}`}>
        <BecomePartnerSteps
          heading={headingData}
          steps={stepsData}
        />
      </div>
      <div className={`${styles.integration_section}  `}>
        <div className="max-w-auto w-100">
          <div className={`${styles.section} row`}>
            <div
              className={`${styles.title} text-start  d-flex flex-column pb-4 pb-md-5  col-md-8`}
            >
              <DynamicHeading
                content={[
                  {
                    title: "Let's Build Your Prepaid Card Program",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>

            <div className="col-md-6 ">
              {acceleratedGrowthData.map(({ icon, title }, i) => (
                <div key={i} style={{ direction: "ltr" }}>
                  <div className="d-flex align-items-start gap-3 py-3 w-4 h-4">
                    <div
                      className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <Image src={icon} alt="icon" />
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <DynamicHeading
                        content={[
                          {
                            title: title,
                            color: "color-black",
                          },
                        ]}
                        headingTag="h5"
                        className="f-5"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <CommanButton
                title="Get Started Today"
                theme="white"
                arrow
                url={salesUrl}
                className="mt-4"
              />
            </div>
            <div className="col-md-6">
              <div className={styles.faq_bg}>
                <Image
                  src={acceleratedGrowthImg}
                  alt="background image"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
