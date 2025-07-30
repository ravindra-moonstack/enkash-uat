import { Header } from "@/components"
import styles from "./page.module.scss"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import VoucherCard from "@/components/voucher-card/voucher-card"
import { notFound } from "next/navigation"
import React from "react"
import SliderComponent from "@/components/sliderComponent/sliderComponent"
import { paymentSummary } from "../affordability-suite"
import { imageOne, sliderOneBg } from "."
// import amazone from "@/public/images/amazon.webp"
const validCategory = [
  "e-commerce-vouchers",
  "movie-and-music-vouchers",
  "food-and-beverages-vouchers",
  "apparels-vouchers",
  "health-and-wellness-vouchers",
]

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Vouchers", url: "/products/vouchers" },
  { name: "Payment Links", url: "/payment-links" },
]

const slides = [
  {
    backgroundImage: sliderOneBg,
    heading: "Accept Payments Instantly with EnKash Payment Links",
    subHeading:
      "Create payment links effortlessly—no website needed. Share via SMS, WhatsApp, email or social, accept payments via 100+ methods.",
    rightImage: imageOne,
    buttonText: "Buy Now",
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    backgroundColor: "#ccffcc",
    heading: "Another Slide",
    subHeading: "This is the subheading for another slide.",
    buttonText: "Learn More",
    buttonUrl: "/learn-more",
  },
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

        <div  className={`${styles.voucher_card} `}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-12 col-md-3 mb-4">
                <VoucherCard
                  titleHtml="Amazon Prime"
                  description="Shopping E-Gift Card"
                  discount="13%"
                  buttonUrl="./amazone.in"
                />
              </div>
              <div className="col-12 col-md-3 mb-4">
                <VoucherCard
                  titleHtml="Flipkart"
                  description="Shopping E-Gift Card"
                  discount="10%"
                  buttonUrl="./flipkart.in"
                />
              </div>
              <div className="col-12 col-md-3 mb-4">
                <VoucherCard
                  titleHtml="Myntra"
                  description="Fashion E-Gift Card"
                  discount="12%"
                  buttonUrl="./myntra.in"
                />
              </div>
              <div className="col-12 col-md-3 mb-4">
                <VoucherCard
                  titleHtml="Ajio"
                  description="Fashion E-Gift Card"
                  discount="15%"
                  buttonUrl="./ajio.in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
