import React from "react"
import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

import dynamic from "next/dynamic"

//data
import { allInOnePolicyData, cardsData, managementCardData } from "./data"
import faqData, { SecondfaqData } from "./faq-data"

//components
import DynamicHeading from "@/src/components/dynamic-heading"
import HeroSection from "@/src/components/sections/hero-section"

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

// Dynamic imports for performance
const FaqSection = dynamic(() => import("@/src/components/faq-section"))
const SecondFaqHtml = dynamic(() => import("@/src/components/second-faq/secondFaqHtml"))
const StepsSection = dynamic(() => import("@/src/components/steps-section"))
const UseCaseSection = dynamic(() => import("@/src/components/sections/use-case-section"))
const CtaSection = dynamic(() => import("@/src/components/sections/cta-section"))
const OtherProducts = dynamic(() => import("@/src/components/sections/other-products"))
const BlogSection = dynamic(() => import("@/src/components/sections/blog-section"))

export const metadata: Metadata = generateMetaData({
  title: "Payment Button: Add Instant Checkout to Your Website",
  description:
    "Create an online payment button in minutes. Make a payment button for any website or Shopify store—fast, secure, customizable, and code-free.",
  alternates: {
    canonical: `${process.env.URL}/payment-button`,
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
            text: "Collect smarter with an online payment button designed for fast, secure payments",
            color: "color-black",
          },
        ]}
        description={{
          text: "Create a payment button in minutes and embed it on your website or app to accept fast, seamless, and secure online payments—no complex integrations required.With EnKash, you can make a payment button for your website without coding.",
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

      <React.Suspense fallback={<div className="py-5 text-center">Loading...</div>}>
        <FaqSection faqData={faqData} />
      </React.Suspense>

      <React.Suspense fallback={<div className="py-5 text-center">Loading...</div>}>
        <BlogSection
          heading={[
            {
              title: "Related  ",
              color: "color-black ",
            },
            {
              title: " Resources",
              color: "color-black f-4",
            },
          ]}
          cards={[14010, 7146, 12195]}
        />
      </React.Suspense>

      <React.Suspense fallback={<div className="py-5 text-center">Loading...</div>}>
        <OtherProducts
          heading={[
            { title: "Check out ", color: "color-black" },
            { title: "other collection products ", color: "color-equity-blue" },
            { title: " at EnKash", color: "color-black" },
          ]}
          cards={managementCardData}
        />
      </React.Suspense>
    </div>
  )
}

export default PaymentButton
