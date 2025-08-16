import Image from "next/image"
import styles from "./page.module.scss"
import {
  allProductSections,
  cardType,
  intantActionData,
  stackcardData,
} from "./data"
import {
  RectangleButton,
  CustomBreadcrumb,
  LogoSlider,
  CardProduct,
  DynamicHeading,
  CardStacking,
  AllInOnePolicy,
  FaqSection,
  StepsSection,
  AllProducts,
} from "@/components"
import { blueArrow, whiteArrow, mealCardImage, heroCardImg } from "."

import faqData from "./faq-data"
import { Metadata } from "next"
import generateMetaData from "@/common/utils/metaData"
import { getSalesUrl } from "@/common/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "SaaS Card: Manage & Track All SaaS Payments",
  description:
    "Manage all your software subscriptions with EnKash SaaS Card. Control costs, ensure compliance, and boost operational efficiency.",
  alternates: {
    canonical: "https://www.enkash.com/saas-card/",
  },
})
const salesUrl = getSalesUrl("/saas-card")
const mergedCards = allProductSections.flatMap((section) => section.items)

const cards = stackcardData.map(
  ({ color, icon, title, description, image,  }) => ({
    color,
    content: (
      <AllInOnePolicy
        icon={icon}
        title={title}
        description={description}
        image={image}
        buttonUrl={salesUrl}
        maxImageHeight="300px"
      />
    ),
  })
)
const SaasCards = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Saas Card",
                  url: "/corporate-cards/saas-card",
                },
              ]}
              linkColor="allWhite"
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Saas Card",
                  color: "color-white underline",
                },
              ]}
              headingTag="p"
              className=""
            />

            <div className="d-flex  flex-column text-center">
              <DynamicHeading
                content={[
                  {
                    title: "SaaS Cards: Designed to manage, monitor, and",
                    color: "color-white italic f-3 d-block",
                  },
                  {
                    title: "master your SaaS spends.",
                    color: "color-white",
                  },
                ]}
                headingTag="h1"
                className="mb-2"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Automate your SaaS business subscriptions for better expense control and auto-renewal.",
                    color: "color-white subHeading",
                  },
                ]}
                headingTag="p"
                className=""
              />
            </div>
            <div className={styles.button_wrapper}>
              <RectangleButton
                title="Get Started"
                theme="blue"
                url={salesUrl}
              />
            </div>
          </div>
        </div>
        <div className=" col-12 pt-5 ">
          <div className={styles.lottie_container}>
            {" "}
            <Image src={heroCardImg} alt="card background" className=" " />
          </div>
        </div>
      </div>
      <div className="cardsSliderMargin">
        <LogoSlider />
      </div>

      <div>
        <StepsSection
          heading={[
            {
              text: "How To Get Started with SaaS Cards  ",
              colorClass: "color-black",
            },
          ]}
          steps={intantActionData}
          button={{
            title: "Get started",
            theme: "border-gray",
            actionImage: blueArrow,
            hoverImage: whiteArrow,
          }}
          image={{
            src: mealCardImage,
            alt: "card background",
          }}
        />
      </div>

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <>
            <CardStacking
              cards={cards}
              heading={[
                {
                  title: "SaaS Cards for ",
                  color: "color-black",
                },
                {
                  title: "Smooth Subscription Services ",
                  color: "color-equity-blue",
                },
              ]}
            />
          </>
        </div>
      </div>

      <div className={`${styles.fifth_row} relative`}>
        <div className={`${styles.title} text-center  max-w-auto`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <DynamicHeading
              content={[
                {
                  title: "Key Features of SaaS Card ",
                  color: "color-black",
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

      <div className={`${styles.sixth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title:
                    "Discover the EnKash difference - Secure, Scalable and Seamless. ",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Try for Yourself"
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <div>
        <FaqSection faqData={faqData} />
      </div>

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Choose ",
                  color: "color-black",
                },
                {
                  title: "the Right Card ",
                  color: "color-equity-blue",
                },
                {
                  title: "for Every Use Case",
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
    </div>
  )
}

export default SaasCards
