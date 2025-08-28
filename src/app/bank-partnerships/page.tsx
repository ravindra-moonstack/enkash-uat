import React from "react"
import styles from "./page.module.scss"
import {
  BankSolutionHeading,
  bankSolutions,
  headingData,
  slideData,
  stepsData,
} from "./data"
import FaqSection from "@/components/faqSection/faqSection"
import { ThirdfaqData } from "./faq-data"
import {
  BecomePartnerSteps,
  BpHeroSection,
  BottomCtaSection,
  PartnershipSection,
  BankSolutions,
  PartnerShipForm,
} from "@/components"
import { containerScreen, participantBg } from "."
import { blueArrow } from "@/components/all-in-one-policy"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"
import PaymentGatewayPartnershipForm from "@/components/paymentGatewayForm"
export const metadata: Metadata = generateMetaData({
  title: "Partner with Us: Bank Partnerships",
  description:
    "Collaborate with EnKash to offer innovative payment, card, and spend management solutions. Partner with us to enhance customer experience and drive digital banking growth.",
  alternates: {
    canonical: `${process.env.URL}/bank-partnerships/`,
  },
})
const partnershipsPage = (): React.JSX.Element => {
  return (
    <div className={`color-white  `}>
      <BpHeroSection
        backgroundImage={containerScreen.src}
        breadcrumbs={{
          items: [
            { name: "Home", url: "/" },
            { name: "Partnerships", url: "/partnerships" },
            { name: "Banks", url: "/bank-partnerships" },
          ],
        }}
        mainHeading={[
          { title: "Partnership Program - for Banks", color: "underline" },
        ]}
        subHeading={[
          { title: "", color: "color-black f-3 d-block" },
          {
            title: "Empower your customers with seamless banking solutions",
            color: "color-black",
          },
        ]}
        button={{
          title: "Become a Partner",
          theme: "blue",
          url: "#partnership-form",
        }}
      />
      <div className={`${styles.boxContainer}`}>
        <BankSolutions
          solutions={bankSolutions}
          heading={BankSolutionHeading}
          button={{
            connectText: "Become a Partner",
            connectUrl: "#partnership-form",
            blueArrow: blueArrow.src,
          }}
        />
      </div>
      <PartnershipSection
        backgroundImage={participantBg.src}
        heading={[{ title: "Why Partner with Us?", color: "color-blue" }]}
        description="Partner with an all-in-one payments platform to deliver modern banking experiences across expense management, corporate cards, and vendor payments."
        buttons={[
          {
            title: "Explore Bank Partnerships",
            theme: "blue",
            url: "#partnership-form",
          },
        ]}
        slideData={slideData}
      />

      <div className={`${styles.third_row}`}>
        <BecomePartnerSteps
          heading={headingData}
          steps={stepsData}
          button={{
            connectText: "Become a Partner",
            connectUrl: "#partnership-form",
            blueArrow: blueArrow.src,
          }}
        />
      </div>

      <div className={`${styles.third_row}`}>
        <BottomCtaSection
          headingPart1="Unlock New Revenue Opportunities"
          headingPart2="by Partnering With EnKash"
          buttonHref="#partnership-form"
        />
      </div>
      <FaqSection faqData={ThirdfaqData} />
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
          formComponent={<PaymentGatewayPartnershipForm />}
        />
      </div>
    </div>
  )
}
export default partnershipsPage
