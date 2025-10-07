import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import { allInOnePolicyData, cardsData, managementCardData } from "./data"
import faqData, { SecondfaqData } from "./faq-data"

//components
import DynamicHeading from "@/src/components/dynamic-heading"
import FaqSection from "@/src/components/faq-section"
import SecondFaqHtml from "@/src/components/second-faq/secondFaqHtml"

//helpers
import {
  paymentSummary,
  mealCardImage,
  activationIcon,
  realTimeIcon,
  faqBg,
} from "./img"

import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

export const metadata: Metadata = generateMetaData({
  title: "Payment Button: Add Instant Checkout to Your Website",
  description:
    "Easily embed EnKash Payment Buttons on your website or app. Enable fast, secure payments via UPI, cards & net banking—no complex integration needed.",
  alternates: {
    canonical: `${process.env.URL}/payment-button/`,
  },
})
const salesUrl = getSalesUrl("/payment-button")

const PaymentButton = (): React.JSX.Element => {
  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Collect Payments",
            url: "/products/collect-payments",
          },
          {
            name: "Payment Button",
            url: "/payment-button",
          },
        ]}
        subtitle={{
          text: "Payment Button",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Collect smarter, not harder with EnKash Payment Button",
            color: "color-black",
          },
        ]}
        description={{
          text: "Embed a secure, customizable payment button on your website and collect payments in minutes.",
        }}
        button={{
          title: "Get Started",
          url: salesUrl,
          theme: "blue",
          apiUrl: "https://docs.enkash.com/",
        }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <div className={`row ${styles.introduction_section} `}>
        <div className="d-flex justify-content-center  flex-column gap-32  align-items-center max-w-auto">
          <div className="mb-4 mb-md-0 text-center">
            <DynamicHeading
              content={[
                {
                  title: "The Best Payment Button for Businesses",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={` d-flex ${styles.section}`}>
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "100%",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
                />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Fast",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <Image src={activationIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Customizable",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <Image src={realTimeIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Secure",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <StepsSection
        heading={[
          {
            text: "How to Make a  ",
            colorClass: "color-black",
          },
          {
            text: "Payment Button",
            colorClass: "color-equity-blue",
          },
        ]}
        steps={cardsData}
        button={{
          title: "Get started",
          theme: "outline-blue",
        }}
        image={{
          src: mealCardImage,
          alt: "card background",
        }}
      />

      <UseCaseSection
        heading={[
          { title: "A Click is ", color: "color-black" },
          { title: "All it Takes", color: "color-equity-blue" },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

      <div className={`${styles.integration_section} `}>
        <div className={`${styles.faqSection} text-start  max-w-auto`}>
          <div className={`${styles.title} text-start pb-md-3 pb-3 col-md-8`}>
            <DynamicHeading
              content={[
                {
                  title: "A ",
                  color: "color-black",
                },
                {
                  title: "Button for Every Payment ",
                  color: "color-equity-blue",
                },
                {
                  title: "Need",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <SecondFaqHtml SecondfaqData={SecondfaqData} />
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.faq_bg}>
                <Image
                  src={faqBg}
                  alt="background image"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title={"Ready to design your payment button?"}
        buttonText={"Get Started Today "}
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other payment products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCardData}
      />
    </div>
  )
}

export default PaymentButton
