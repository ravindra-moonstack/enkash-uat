import Image from "next/image"
import styles from "./page.module.scss"
import { Metadata } from "next"

// data
import {
  allProductSections,
  cardType,
  intantActionData,
  spendAnalyticsData,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

// components
import CommanButton from "@/src/components/buttons"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"

// helpers
import { mealCardImage, instantActionImg, heroCardImg } from "./img"

// utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import StepsSection from "@/src/components/steps-section"
import PolicyCard from "@/src/components/policy-card"
import AllProducts from "@/src/components/all-products"
import CardProduct from "@/src/components/card-product"

export const metadata: Metadata = generateMetaData({
  title: "Virtual Corporate Card for Secure and Instant Payments",
  description:
    "Create instant virtual cards for online payments, subscriptions, and vendor spends. Control limits, track usage, and reduce fraud with EnKash’s smart card solution.",
  alternates: {
    canonical: `${process.env.URL}/virtual-card/`,
  },
})

const salesUrl = getSalesUrl("/virtual-card")
const mergedCards = allProductSections.flatMap((section) => section.items)
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

const VirtualCards = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <div className={`${styles.hero_section}`}>
        <div className="max-w-auto ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Virtual Card",
                  url: "/corporate-cards/virtual-card",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Virtual Card",
                  color: "color-equity-blue underline",
                },
              ]}
              headingTag="p"
              className=""
            />

            <div className="d-flex  flex-column justify-content-center align-items-center">
              <DynamicHeading
                content={[
                  {
                    title: "Secure and Efficient Payments with",
                    color: "color-black italic f-3 d-block",
                  },
                  {
                    title: "Virtual Prepaid Card",
                    color: "color-black",
                  },
                ]}
                headingTag="h1"
                className="f-7 mb-3"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Empower your organization to control, track, and optimize spending like never before.",
                    color: "color-black subHeading",
                  },
                ]}
                headingTag="p"
                className=" mb-3"
              />
            </div>
            <div
              className={`${styles.button_wrapper} justify-content-center d-flex`}
            >
              <CommanButton title="Get Started" theme="blue" url={salesUrl} />
            </div>
          </div>
        </div>
        <div className=" col-12 pt-5 ">
          <div className={styles.lottie_container}>
            <Image src={heroCardImg} alt="card background" className=" " />
          </div>
        </div>
      </div>

      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <StepsSection
        heading={[
          {
            text: "How to Set Up Virtual Prepaid Cards ",
            colorClass: "color-black",
          },
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
          <>
            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "Best Virtual Prepaid Cards in India -  ",
                  color: "color-black",
                },
                {
                  title: "Modern Solutions ",
                  color: "color-equity-blue",
                },
                {
                  title: "for Managing Business Expenses",
                  color: "color-black",
                },
              ]}
            />
          </>
        </div>
      </div>

      <div className={`${styles.introduction_section} `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-2 pb-md-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <DynamicHeading
                content={[
                  {
                    title: "Use Cases for Virtual ",
                    color: "color-black",
                  },
                  {
                    title: "Prepaid Cards ",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
          </div>
          <div className={`row align-items-center ${styles.section}`}>
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
            </div>
            <div className={`col-md-6 col-12 d-flex mt-4 mt-md-0`}>
              <div>
                <Image
                  src={instantActionImg}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.cta_section} relative`}>
        <div className={`${styles.title} text-center  max-w-auto`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <DynamicHeading
              content={[
                {
                  title: "The EnKash Advantage - Why Businesses Trust   ",
                  color: "color-black",
                },
                {
                  title: "Virtual Prepaid Cards ",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
        </div>
        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div>

      <FaqSection faqData={faqData} />

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Your Business, Your Cards –",
                  color: "color-black",
                },
                {
                  title: "Tailored by EnKash ",
                  color: "color-equity-blue",
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
    </div>
  )
}

export default VirtualCards
