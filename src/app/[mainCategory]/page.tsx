import { FAQHtml, Header } from "@/components"
import styles from "./page.module.scss"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import VoucherCard from "@/components/voucher-card/voucher-card"
import { notFound } from "next/navigation"
import React from "react"
import SliderComponent from "@/components/sliderComponent/sliderComponent"
import { blueArrow, whiteArrow } from "../affordability-suite"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import faqData from "../affordability-suite/faq-data"
import { slides, voucherCards } from "./data"

const validCategory = [
  "e-commerce-vouchers",
  "movie-and-music-vouchers",
  "food-and-beverages-vouchers",
  "apparels-vouchers",
  "health-and-wellness-vouchers",
]

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Vouchers", url: "/vouchers" },
  { name: "E-commerce vouchers", url: "/e-commerce-vouchers" },
]

const page = async ({
  params,
}: {
  params: Promise<{ mainCategory: string }>
}) => {
  //

  const { mainCategory } = await params
  if (!validCategory.includes(mainCategory)) {
    notFound()
  }

  return (
    <div>
      <Header utmSource="expense_management" />

      <TalkToSales />
      {mainCategory == "pvr"}

      <div className={`${styles.first_row} `}>
        <div className="slider-container">
          <SliderComponent breadcrumbItems={breadcrumbItems} slides={slides} />
        </div>

        <div className={`${styles.voucher_card}`}>
          <div className="max-w-auto">
            <div className="row">
              {voucherCards.map((card, index) => (
                <div key={index} className="col-12 col-md-3 mb-4">
                  <VoucherCard
                    titleHtml={card.titleHtml}
                    description={card.description}
                    discount={card.discount}
                    cardImage={card.cardImage}
                    buttonUrl={card.buttonUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.sixth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex  gap-4 text-center">
            <DynamicHeading
              content={[
                {
                  title:
                    "Discover the EnKash difference - Secure, Scalable and Seamless.",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started "
              theme="outline-blue"
              // actionImage={blueArrow}
              // hoverImage={whiteArrow}
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Frequently Asked Questions (",
                  color: "color-black",
                },
                {
                  title: "FAQs",
                  color: "color-equity-blue",
                },
                {
                  title: ")",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div>
                <DynamicHeading
                  content={[
                    {
                      title: "Have more questions?",
                      color: "color-dark-grey subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
              <div className="mt-3 d-none d-md-block">
                <RectangleButton
                  title="Get started today"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  iconSize={15}
                  url="/sales/?source=receivables"
                />
              </div>
            </div>
            <div className={`${styles.faqData}`}>
              <FAQHtml faqData={faqData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
