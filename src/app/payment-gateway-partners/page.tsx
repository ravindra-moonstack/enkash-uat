import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import styles from "./page.module.scss"

//data
import {
  BankSolutionHeading,
  bankSolutions,
  BuiltforBuildersCardData,
  headingData,
  slideData,
  stepsData,
} from "./data"
import faqData from "./faq-data"

//components
import DynamicHeading from "@/src/components/dynamic-heading"
import BpHeroSection from "@/src/components/bp-hero-section"
import BankSolutions from "@/src/components/partnerships/BankSolutions"
import PartnershipSection from "@/src/components/partner-ship-slider/PartnershipSection"
import BuiltforBuildersSection from "@/src/components/builtfor-builders-card"
import BecomePartnerSteps from "@/src/components/becomepartner"
import BottomCtaSection from "@/src/components/bottom-cta-section"
import PartnerShipForm from "@/src/components/forms/partnership-form"
import FaqSection from "@/src/components/faq-section"

import { containerScreen, participantBg } from "./img"
import generateMetaData from "@/src/utils/metaData"
import PaymentGatewayFormClient from "@/src/components/form-wrapper/PaymentGatewayFormWrapper/PaymentGatewayFormWrapper"

export const metadata: Metadata = generateMetaData({
  title: "Payment Gateway Partnerships",
  description:
    "Partner with EnKash to offer integrated payment gateway solutions. Expand your reach, boost transaction success rates, and deliver frictionless payment experiences to businesses.",
  alternates: {
    canonical: `${process.env.URL}/payment-gateway-partners`,
  },
})

const partnershipsPage = (): React.JSX.Element => {
  return (
    <div className={`color-white  `}>
      <BpHeroSection
        backgroundImage={containerScreen.src}
        mainHeading={[
          {
            title: "Payment Gateway Partner Program ",
            color: "underline",
          },
        ]}
        breadcrumbs={{
          items: [
            { name: "Home", url: "/" },
            { name: "Partnerships", url: "#" },
            { name: "Payment Gateway", url: "/payment-gateway-partners" },
          ],
          linkColor: "white",
        }}
        subHeading={[
          {
            title: "Let’s Build the Future of Digital Payments - Together.",
            color: "color-white",
          },
        ]}
        button={{
          title: "Become a Partner",
          theme: "blue",
          url: "#partnership-form",
        }}
        customCSS={{ backgroundPosition: "top center" }}
      />
      <div className={`${styles.boxContainer}`}>
        <BankSolutions
          solutions={bankSolutions}
          heading={BankSolutionHeading}
          button={{
            connectText: "Become a Partner",
            connectUrl: "#partnership-form",
          }}
        />
      </div>

      <div className={`${styles.introduction_section}`}>
        <PartnershipSection
          backgroundImage={participantBg.src}
          heading={[{ title: "Why Partner with Us?", color: "color-white" }]}
          description="Whether you're a tech innovator, service provider, or business enabler, EnKash’s payment gateway partner program is tailored for you."
          slideData={slideData}
        />
      </div>
      <section className={`${styles.BuiltforBuildersSection}`}>
        <div className="max-w-auto">
          <div className="row">
            <div className="col-md-12">
              <div className={`${styles.topSubHeading}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Built for ",
                      color: "color-equity-blue f-3",
                    },
                    {
                      title: "Builders",
                      color: "color-equity-blue",
                    },
                  ]}
                  headingTag="h5"
                  className="f-5 "
                />
              </div>
              <div className={`${styles.topSubHeading}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Developer-first Integrations",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6 mb-3"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.BuiltforBuilderscard}`}>
            <div className="row">
              {BuiltforBuildersCardData.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className={`${styles.collectPaymentBox}`}>
                    <BuiltforBuildersSection {...item} />
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.customButtons}`}>
                  <Link href={"https://docs.enkash.com/"}>
                    Explore Integration Documents
                    <svg
                      width="8"
                      height="10"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 1.25L5.75 5.25L1.75 9.25"
                        stroke="#1C5AF4"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`${styles.features_section} ${styles.steps_container}`}>
        <BecomePartnerSteps
          heading={headingData}
          steps={stepsData}
          button={{
            connectText: "Become a Partner",
            connectUrl: "#partnership-form",
          }}
        />
      </div>
      <div className={`${styles.features_section}`}>
        <BottomCtaSection
          headingPart1="The Smartest Way to"
          headingPart2="Co-Brand Your Card"
          buttonHref="#partnership-form"
        />
      </div>
      <FaqSection faqData={faqData} />
      <div id="partnership-form">
        <PartnerShipForm
          heading={[
            { title: "Ready to ", color: "color-grey-200" },
            { title: "Earn More and Grow Faster ", color: "color-equity-blue" },
            { title: "with EnKash?", color: "color-grey-200" },
          ]}
          features={[
            { id: 1, text: "Industry-best earnings" },
            { id: 2, text: "Fast activation for your clients" },
            { id: 3, text: "Dedicated support for accelerated growth" },
          ]}
          formComponent={<PaymentGatewayFormClient />}
        />
      </div>
    </div>
  )
}
export default partnershipsPage
