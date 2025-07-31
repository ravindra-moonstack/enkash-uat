import { notFound } from "next/navigation"
import { VOUCHER_DATA } from "./data"

import { Header, FAQHtml } from "@/components"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import SliderComponent from "@/components/sliderComponent/sliderComponent"
import VoucherCard from "@/components/voucher-card/voucher-card"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"

import styles from "./page.module.scss"
import { blueArrow, whiteArrow } from "../affordability-suite"
import { VoucherFaqData } from "./voucher-faq-data"
import VoucherFaqComponent from "@/components/voucher-page/voucher-faq"

const page = async ({ params }: { params: { mainCategory: string } }) => {
  const { mainCategory } = params
  const validCategory = [
    "e-commerce-vouchers",
    "movie-and-music-vouchers",
    "food-and-beverages-vouchers",
    "apparels-vouchers",
    "health-and-wellness-vouchers",
  ]
  const voucherName = mainCategory
  // ✅ Check if valid
  const pageData = VOUCHER_DATA[mainCategory]
  if (!pageData) {
    notFound()
  }

  return (
    <div>
      <Header utmSource="expense_management" />
      <TalkToSales />

      <div className={`${styles.first_row}`}>
        <SliderComponent
          breadcrumbItems={pageData.breadcrumbItems}
          slides={pageData.slides}
          title={pageData.title}
        />

        {/* Example: your card grid can be dynamic too */}
        <div className={styles.voucher_card}>
          <div className="max-w-auto">
            <div className="row">
              <div className="row">
                {pageData.voucherCards.map((card, index) => (
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
      </div>

      <div className={`${styles.sixth_row}`}>
        <div className="d-flex justify-content-center flex-column gap-32 align-items-center max-w-auto">
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

          <RectangleButton
            title="Get Started"
            theme="outline-blue"
            url="/sales/?source=expense_management"
          />
        </div>
      </div>

      <div className={`${styles.faq_new_row} relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto`}>
          <div className={`${styles.title} text-start pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Frequently Asked Questions (",
                  color: "color-black",
                },
                { title: "FAQs", color: "color-equity-blue" },
                { title: ")", color: "color-black" },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>

          <div className={`${styles.faqData}`}>
            <VoucherFaqComponent voucherName={voucherName} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
