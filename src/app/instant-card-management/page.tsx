import Image from "next/image"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import styles from "./page.module.scss"

//data
import {
  allProductSections,
  cardData,
  cardType,
  intantActionData,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

//components
import CustomBreadcrumb from "@/components/breadcrumb"
import DynamicHeading from "@/components/dynamic-heading"
import AllInOnePolicy from "@/components/all-in-one-policy"
import Heading from "@/components/heading"
import AllProducts from "@/components/all-products"
import CommonButton from "@/src/components/buttons"
import StepsSection from "@/src/components/steps-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"
import FaqSection from "@/components/faq-section"
const LogoSlider = dynamic(() => import("@/components/logo-slider"))
const CardStacking = dynamic(() => import("@/components/card-stacking"))

//helpers
import { mealCardImage, heroCardImg } from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Instant Card Management Platform for Businesses",
  description:
    "Manage corporate cards in real-time with EnKash. Instantly issue, block, or set limits on cards to gain full control over business spends and enhance security",
  alternates: {
    canonical: `${process.env.URL}/instant-card-management`,
  },
})

const salesUrl = getSalesUrl("/instant-card-management")
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

const InstantCardManagement = (): React.JSX.Element => {
  //

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
                  name: "Instant Card Management",
                  url: "/corporate-cards/instant-card-management",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 text-center `}>
            <DynamicHeading
              content={[
                {
                  title: "Instant Card Management",
                  color: "color-equity-blue underline",
                },
              ]}
              headingTag="p"
              className="mb-2"
            />

            <DynamicHeading
              content={[
                {
                  title: "Take Charge of Your Cards",
                  color: "color-black italic f-3 d-block",
                },
                {
                  title: "In Real Time",
                  color: "color-black",
                },
              ]}
              headingTag="h1"
              className="mb-2 f-7"
            />

            <DynamicHeading
              content={[
                {
                  title:
                    "One click to block lost cards, manage permissions, and stay secure with EnKash’s advanced card management system",
                  color: "color-black subHeading",
                },
              ]}
              headingTag="p"
              className="d-inline"
            />

            <div className={` justify-content-center d-flex`}>
              <CommonButton title="Get Started" theme="blue" url={salesUrl} />
            </div>
          </div>
        </div>

        <div className={styles.lottie_container}>
          <Image src={heroCardImg} alt="card background" className=" " priority fetchPriority="high" />
        </div>
      </div>

      <LogoSlider />

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
          {
            text: "How To Get Started with ",
            colorClass: "color-black",
          },
          {
            text: "Card Management",
            colorClass: "color-equity-blue",
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
          <CardStacking
            cards={cards}
            heading={[
              {
                title: "Control your cards end-to-end from ",
                color: "color-black",
              },
              {
                title: "a single dashboard",
                color: "color-equity-blue",
              },
            ]}
          />
        </div>
      </div>

      <div className={`${styles.cta_section} relative`}>
        <DynamicHeading
          content={[
            {
              title: "Key Features of ",
              color: "color-black",
            },
            {
              title: "Instant Card Management ",
              color: "color-equity-blue",
            },
          ]}
          headingTag="h2"
          className="f-6 pb-3 text-center max-w-auto"
        />

        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div>

      <CtaSection
        title={"Explore our customizable instant management cards!"}
        buttonText={"Get Started Today "}
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

export default InstantCardManagement
