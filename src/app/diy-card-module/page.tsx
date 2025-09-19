import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  intantActionData,
  spendAnalyticsData,
  cardType,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

//components
import CommanButton from "@/src/components/buttons"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import StepsSection from "@/src/components/steps-section"
import CardProduct from "@/src/components/card-product"

import { mealCardImage, heroCardImg, instantActionImg } from "./img"

import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "DIY Card Module: Create & Manage Cards Instantly",
  description:
    "Design, issue, and manage physical or virtual cards on demand with EnKash’s DIY Card Module. Customize controls, set limits, and enable smart expense tracking.",
  alternates: {
    canonical: `${process.env.URL}/diy-card-module/`,
  },
})
const salesUrl = getSalesUrl("/diy-card-module")

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

const DiyCardModule = (): React.JSX.Element => {
  //
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
                  name: "Diy Card",
                  url: "/corporate-cards/diy-card-module",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Diy Card",
                  color: "color-equity-blue underline",
                },
              ]}
              headingTag="p"
              className="mb-2"
            />

            <div className="d-flex  flex-column text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Take Control of Your Business Expenses with",
                    color: "color-black f-3 italic d-block",
                  },
                  {
                    title: " DIY Corporate Card Module",
                    color: "color-black ",
                  },
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
                      "Design cards for specific needs, enforce spending policies, and oversee all transactions with ease.",
                    color: "color-black subHeading",
                  },
                ]}
                headingTag="p"
                className=""
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
            text: "How to Use the DIY Card Module",
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
          <CardStacking
            cards={cards}
            heading={[
              {
                title: "The Smarter Approach to ",
                color: "color-black",
              },
              {
                title: "Corporate Card Management ",
                color: "color-equity-blue",
              },
            ]}
          />
        </div>
      </div>

      <StepsSection
        heading={[
          {
            text: "The EnKash Advantage - Benefits of Using EnKash’s ",
            colorClass: "color-black",
          },
          {
            text: "DIY Card Module",
            colorClass: "color-equity-blue",
          },
        ]}
        steps={spendAnalyticsData}
        button={{
          title: "Get Started",
          theme: "border-gray",
        }}
        image={{
          src: instantActionImg,
          alt: "card background",
        }}
        backgroundClass="bg-color-black-30"
      />

      <div className={`${styles.sixth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Take Charge of Your Expenses Today!",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className=""
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <CommanButton
              title="Get Started Today"
              theme="outline-blue"
              arrow
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
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
              headingTag="h2"
              className=""
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

export default DiyCardModule
