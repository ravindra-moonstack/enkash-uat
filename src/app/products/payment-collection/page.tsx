"use client"
import Image from "next/image"
import { space } from "@/common/constant"
import styles from "./page.module.scss"
import { cardData, dataSets } from "./data"

import { Header, Heading, Footer } from "@/components"

import {
  motherCardImg,
  paymentGatwayImg,
  paymentGatwayIcon,
  paymentLinkIcon,
  paymentLinkImg,
  paymentButtonIcon,
  paymentButtonImg,
  paymentPageIcon,
  upiIcon,
  upiImg,
  paymentPageImg,
  qrCodeIcon,
  qrCodeImg,
  circles,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work."

// const showScroll = cardsData.length > 3
// const mergedCards = allProductSections.flatMap((section) => section.items)
const CorporateCards = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <Header utmSource="expense_management" />

      <div className={`${styles.first_row}`}>
        <div className="max-m-auto">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <Heading
              title="Accept Payments the Smarter Way with EnKash"
              color="white"
              size="h2"
              weight="7"
            />

            <div className="d-inline">
              <Heading
                title="No more chasing, no more delays - Payment Collection Solutions for Businesses Who Want to Make Money"
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
      {/* 
      <div>
        <LogoSlider />
      </div> */}

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
                <Heading
                  title={item.value}
                  color="black"
                  size="h2"
                  weight="7"
                  useH1TagInHtml={true}
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

      <div className={`${styles.third_row} bg-white row-padding `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <Heading
                title={`Faster, Smoother, Smarter ${space}`}
                color="equity-blue"
                size="h1"
                weight="5"
              />
              <Heading
                title={`Payments Collection ${space}`}
                color="black"
                size="h1"
                weight="5"
              />
            </div>
          </div>
          <div
            className={`row bg-white align-items-center gap-5 ${styles.section}`}
          >
            <AllInOnePolicy
              icon={paymentGatwayIcon}
              title="Payment Gateway"
              description="A high-performance gateway that enables businesses to accept payments through multiple methods such as credit cards, debit cards, UPI, net banking, and digital wallets, ensuring seamless transactions with exceptional success rates and security."
              image={paymentGatwayImg}
              buttonUrl="/sales/?source=expense_management"
            />

            <AllInOnePolicy
              icon={paymentLinkIcon}
              title="Payment Links"
              description="Generate and share secure payment links instantly via SMS, email, WhatsApp, or social media, allowing businesses to collect payments from customers without requiring a website, ensuring quick and hassle-free transactions.."
              image={paymentLinkImg}
              buttonUrl="/sales/?source=expense_management"
              reverse
            />
            <AllInOnePolicy
              icon={paymentButtonIcon}
              title="Payment Button"
              description="Create payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing businesses of all sizes to start quickly. Focus on running your business while we simplify your payment collection process."
              image={paymentButtonImg}
              buttonUrl="/sales/?source=expense_management"
            />

            <AllInOnePolicy
              icon={paymentPageIcon}
              title="Payment Page"
              description="Create payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing businesses of all sizes to start quickly. Focus on running your business while we simplify your payment collection process."
              image={paymentPageImg}
              buttonUrl="/sales/?source=expense_management"
              reverse
            />
            <AllInOnePolicy
              icon={upiIcon}
              title="UPI Payments"
              description="Create payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing businesses of all sizes to start quickly. Focus on running your business while we simplify your payment collection process."
              image={upiImg}
              buttonUrl="/sales/?source=expense_management"
            />

            <AllInOnePolicy
              icon={qrCodeIcon}
              title="QR Code Payments"
              description="Create payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing businesses of all sizes to start quickly. Focus on running your business while we simplify your payment collection process."
              image={qrCodeImg}
              buttonUrl="/sales/?source=expense_management"
              reverse
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row}  row d-flex  row-padding-x-only`}>
        <div className="max-m-auto relative ">
          <div className={styles.circles_bg}>
            <Image src={circles} alt="background image" />
          </div>
          <div className="d-flex flex-column text-center mb-5">
            <Heading
              title="Frictionless Payment "
              color="white"
              size="h1"
              weight="6"
            />
            <div>
              <Heading
                title="Automation for Your Business"
                color="equity-blue"
                size="h1"
                weight="6"
              />
            </div>
          </div>

          <div className={styles.how_it_workssection}>
            <HowDoesItWork dataSets={dataSets} />
          </div>
        </div>
      </div>

      {/* <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <Heading
              title={`Choose   ${space}`}
              color="black"
              size="h1"
              weight="5"
            />
            <Heading
              title={`the Right Card  ${space}`}
              color="equity-blue"
              size="h1"
              weight="5"
            />

            <Heading
              title="for Every Use Case"
              color="black"
              size="h1"
              weight="5"
            />
          </div>
          <div className="row g-3 pb-4">
            {cardType.map(({ titleHtml, description, cardImage }, index) => (
              <div key={index} className="col-12 col-md-4">
                <CardProduct
                  titleHtml={titleHtml}
                  description={description}
                  cardImage={cardImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* <div
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
          <div>
            {slideUpData.map((project, i) => (
              <Card key={`p_${i}`} i={i} {...project} />
            ))}
          </div>
        </div>
      </div> */}

      {/* <div className={`${styles.fifth_row} relative`}>
        <div className={`${styles.title} text-center pb-5`}>
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
        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div> */}

      {/* <div className={`${styles.eight_row} `}>
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
      </div> */}
      {/* 
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
      </div> */}

      <Footer />
    </div>
  )
}

export default CorporateCards
