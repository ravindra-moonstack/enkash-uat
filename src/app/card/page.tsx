"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import {
  cardData,
  corporateCardData,
  intantActionData,
  rbiData,
  spendAnalyticsData,
} from "./data"

import { Header, Heading, FAQHtml, Footer } from "@/components"

import {
  blueArrow,
  instantActionImg,
  spendAnalylicsImg,
  motherCardImg,
  rbiLogo,
  corporateCard,
  corporateCardIcon,
  mealCardImg,
  fuelCardImg,
  termsAndConCardImg,
  virtualCardImg,
  purchesCardImg,
  sassCardImg,
  whiteArrow,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import PolicyCard from "@/components/policyCard/policyCard"
import LogoSlider from "@/components/logo-slider/logo-slider"
import faqData from "./faq-data"
import CardAnimation from "@/components/cardAnimation/page"
import FeatureCard from "@/components/featureCard/feature-card"
import CardProduct from "@/components/card-product/card-product"
import AllProducts from "@/components/all-products/all-products"

// const showScroll = cardsData.length > 3
const Card = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <Header utmSource="expense_management" />

      <div className={`${styles.first_row}`}>
        <div className="max-m-auto">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column mb-3 justify-content-center align-items-center">
              <Heading
                title="The Only Corporate Cards"
                color="white"
                size="h2"
                weight="2"
                italic
              />
              <Heading
                title="You’ll Ever Need"
                color="white"
                size="h2"
                weight="7"
              />
            </div>
            <div className="d-inline">
              <Heading
                title="More control, more flexibility, and more security, like no one else."
                color="white"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>

            <div className="mt-5">
              <RectangleButton
                title="Talk to us"
                theme="blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
          <div className=" col-12 d-flex justify-content-center align-items-center">
            <div className={styles.lottie_container}>
              <div>
                <Image
                  src={motherCardImg}
                  alt="card background"
                  className="position-relative w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <LogoSlider type="customers" />
      </div>

      <div className={styles.second_row}>
        <div className="max-m-auto">
          <div className={`${styles.second_row_title} text-center pb-5`}>
            <Heading
              title={`Built for CFOs, Loved by Teams ${space}`}
              color="white"
              size="bannerHeading"
              weight="5"
            />

            <Heading
              title="From instant issuance to granular controls - corporate cards that do more."
              color="white"
              size="h5"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className={`d-flex  flex-wrap  ${styles.section}`}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
              >
                <Image
                  src={item.icon}
                  alt="card visual"
                  className={styles.card_image}
                />

                <Heading
                  title={item.title}
                  color="main-grey"
                  size="h6"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.action_row} bg-white row-padding `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <Heading
                title={`One Platform. ${space}`}
                color="black"
                size="h1"
                weight="5"
              />
              <Heading
                title={`Total Visibility. ${space}`}
                color="black"
                size="h1"
                weight="5"
              />

              <Heading
                title="Instant Actions"
                color="equity-blue"
                size="h1"
                weight="5"
              />
            </div>
            <div>
              <Heading
                title="Real-time visibility, control, and insights that traditional bank-issued card portals simply can’t match."
                color="alternate-grey"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                }}
              >
                {intantActionData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Try Now"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales/?source=expense_management"
                  width="237px"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 d-flex
             justify-content-end ${styles.third_container}`}
            >
              <div>
                <Image
                  src={instantActionImg}
                  alt="card background"
                  className="position-relative w-100 h-100"
                  style={{ maxHeight: "749px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.action_row} bg-black-200 row-padding `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-start pb-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <Heading
                title={`Unrivaled  ${space}`}
                color="white"
                size="h1"
                weight="5"
              />
              <Heading
                title={`Spend Analytics  ${space}`}
                color="equity-blue"
                size="h1"
                weight="5"
              />

              <Heading title="at " color="white" size="h1" weight="5" />
              <div>
                <Heading
                  title="Your Fingertips"
                  color="white"
                  size="h1"
                  weight="5"
                />
              </div>
            </div>
            <div className="d-flex flex-column ">
              <Heading
                title="Move beyond raw data. Leverage our  advanced analytics to turn into "
                color="grey-100"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
              />
              <Heading
                title=" actionable business insights"
                color="grey-100"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 pr-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                }}
              >
                {spendAnalyticsData.map(({ icon, title }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <div className="d-flex align-items-start gap-3 py-3 w-4 h-4">
                      <div
                        className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                        style={{ width: "48px", height: "48px" }}
                      >
                        <Image src={icon} alt="icon" />
                      </div>
                      <div className="d-flex flex-column gap-3">
                        <Heading
                          title={title}
                          color="white"
                          size="h4"
                          weight="5"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.analytic_bg}>
              <Image
                src={spendAnalylicsImg}
                alt="background image"
                height={569}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.third_row}>
        <div className={` ${styles.rbi_section} max-w-auto`}>
          <div>
            <Image
              src={rbiLogo}
              alt="card background"
              height={156}
              width={156}
            />
          </div>

          <div className={`${styles.title} text-center d-inline pb-5`}>
            <Heading
              title={`RBI-Approved. Business-Ready. Powered by ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={` Our PPI License  ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />
          </div>

          <div className={styles.card_grid}>
            {rbiData.map(({ icon, title, description }, i) => (
              <div key={i}>
                <FeatureCard
                  titleHtml={title}
                  description={description}
                  cardImage={icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.fifth_row} bg-white row-padding `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
            >
              <Heading
                title={`Corporate Card Solutions: Purpose- ${space}`}
                color="black"
                size="h1"
                weight="5"
              />
              <Heading
                title={`Built for Growing Businesses.  ${space}`}
                color="equity-blue"
                size="h1"
                weight="5"
              />
            </div>
            <div>
              <Heading
                title="From instant issuance to granular controls - corporate cards that do more."
                color="alternate-grey"
                size="h5"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 pr-5">
              <Image src={corporateCard} alt="background image" />
            </div>
            <div className="col-md-6 col-12 pr-5">
              <div className="d-flex  align-items-center mb-4 ">
                <Image
                  src={corporateCardIcon}
                  alt="icon"
                  height={55}
                  width={55}
                />
                <Heading
                  title={`Prepaid Corporate Cards ${space}`}
                  color="black"
                  size="h4"
                  weight="6"
                />
              </div>
              <ul>
                {corporateCardData.map(({ title }, i) => (
                  <li key={i}>
                    <Heading
                      title={title}
                      color="alternate-grey"
                      size="h5"
                      weight="5"
                    />
                  </li>
                ))}
              </ul>

              <div className="ml-4">
                <RectangleButton
                  title="Explore More"
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales/?source=expense_management"
                  width="237px"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <Heading
              title={`Check out our ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading
              title={`other payment products ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />

            <Heading title="at EnKash" color="black" size="h1" weight="5" />
          </div>
          <div className="row g-3 pb-4 ">
            <div className="col-12 col-md-4">
              <CardProduct
                titleHtml="Payment Link"
                description="Collect payments across WhatsApp, SMS, Facebook, Twitter, and other platforms with no-code payment links."
                cardImage={mealCardImg}
              />
            </div>

            <div className="col-12 col-md-4">
              <CardProduct
                titleHtml="Payment Page"
                description="Create custom-branded Payment Pages in minutes to accept payments online—no tech effort needed."
                cardImage={fuelCardImg}
              />
            </div>

            <div className="col-12 col-md-4">
              <CardProduct
                titleHtml="QR Codes"
                description="Secure, contactless payment with QR codes to enable businesses to accept instant transactions."
                cardImage={termsAndConCardImg}
              />
            </div>

            <div className="col-12 col-md-4">
              <CardProduct
                titleHtml="Invoices"
                description="Automate invoicing for recurring transactions, track sales and payments, and create bulk invoices with payment links."
                cardImage={termsAndConCardImg}
              />
            </div>

            <div className="col-12 col-md-4">
              <CardProduct
                titleHtml="Payment Button"
                description="Integrate a pre-designed payment button to your website with a simple plug-and-play solution."
                cardImage={virtualCardImg}
              />
            </div>

            <div className="col-12 col-md-4">
              <CardProduct
                titleHtml="Auto Collect"
                description="Accept NEFT, RTGS, and IMPS transfers using on-demand customer identifiers with automated reconciliation at scale."
                cardImage={purchesCardImg}
              />
            </div>

            <div className="col-12 col-md-4">
              <CardProduct
                titleHtml="Instant Settlement"
                description="Access your funds instantly, skip standard settlement cycles, and gain better control over your cash flow."
                cardImage={sassCardImg}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.fourth_row}
        style={{
          maxHeight: "100vh",
          overflowY: "scroll",
          scrollbarWidth: "none", // for Firefox
          msOverflowStyle: "none",
        }}
      >
        <div className={`row relative  ${styles.section}`}>
          <div className={`${styles.title} text-center pb-5`}>
            <Heading
              title={`Get  ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`Built-in Controls  ${space}`}
              color="equity-blue"
              size="h1"
              weight="6"
            />
            <Heading
              title={`, Zero Surprises ${space}`}
              color="black"
              size="h1"
              weight="6"
            />
          </div>
          <CardAnimation />
        </div>
      </div>

      <div className={`${styles.eigth_row} relative`}>
        <div className={`${styles.title} text-center pb-5 pt-5`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <Heading
              title={`One Platform.  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading
              title={`End-to-End Control.  ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />
          </div>
          <div>
            <Heading
              title="Connect Corporate Cards with Expense Management for a Unified Experience"
              color="alternate-grey"
              size="h5"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <div className="pt-4">
            <RectangleButton
              title={"Explore Our Expense Management Suite"}
              theme="blue"
            />
          </div>
        </div>

        <div>
          <AllProducts />
        </div>
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <Heading
              title="Apply Now for Smarter Business Spending"
              size="bannerHeading"
              color="white"
              weight="4"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started  Today "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-5`}>
            <Heading
              title={`Frequently Asked Questions  ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading title={`(`} color="black" size="h1" weight="5" />
            <Heading title={`FAQ`} color="equity-blue" size="h1" weight="5" />
            <Heading title={`) ${space}`} color="black" size="h1" weight="5" />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div>
                <Heading
                  title="Have more questions? "
                  color="main-grey"
                  size="h3"
                  weight="5"
                  useH1TagInHtml={true}
                />
              </div>
              <div className="mt-2 d-none d-md-block">
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

      <Footer />
    </div>
  )
}

export default Card
