import styles from "./page.module.scss"
import React from "react"

// data
import {
  allProductSections,
  dashboardData,
  integrationData,
  paymentMethodData,
  rankData,
  introductionCards,
} from "./data"
import { faqData } from "./faq-data"

// components
import DynamicHeading from "@/src/components/dynamic-heading"
import FaqSection from "@/src/components/faq-section"
import ContentShowcase from "@/src/components/content-showcase"
import AllProducts from "@/src/components/all-products"
import EnkashWay from "@/src/components/enkash-way/enkash-way"

// helper
import {
  advanceAi,
  receipt,
  upi,
  walletExpense,
  itIcon,
  ecoomerceIcon,
  manufactureIcon,
  logisticIcon,
  consultancyIcon,
  bg1,
  bg2,
  bg3,
  heroImg,
  tabImgOne,
  tabImgTwo,
  tabImgThree,
  tabImgFour,
  tabImgFive,
  bg4,
  bg5,
} from "./img"

// utils
import generateMetaData from "@/src/utils/metaData"
import { Metadata } from "next"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import HeroSection from "@/src/components/sections/hero-section"
import BottomCtaSection from "@/src/components/bottom-cta-section"

export const metadata: Metadata = generateMetaData({
  title: " Co-branded Digital Wallet | Wallet-as-a-Service - EnKash",
  description:
    "Launch your own co-branded digital wallet with EnKash - a fully licensed Wallet-as-a-Service (WaaS) platform. Enjoy instant KYC, secure payments, API-based setup, and regulatory compliance under RBI-approved licenses.",
  alternates: {
    canonical: `${process.env.URL}/co-branded-digital-wallet`,
  },
})
const salesUrl = getSalesUrl("/co-branded-digital-wallet")

const mergedCards = allProductSections.flatMap((section) => section.items)

const CoBrandedDigitalWallet = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: " Partnerships", url: "" },
          {
            name: " Co-branded Digital Wallet",
            url: "/co-branded-digital-wallet",
          },
        ]}
        subtitle={{
          text: " Co-branded Digital Wallet",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "The Best Co-branded Digital Wallet Stack for Indian Businesses",
          },
        ]}
        description={{
          text: "Build, Launch & Scale Digital Wallets in India, Confidently",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={heroImg}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="540px"
      />

      <div className={styles.introduction_section}>
        <div className="d-flex justify-content-center flex-column gap-32 align-items-center max-w-auto">
          <DynamicHeading
            content={[
              {
                title: "Powering the Future of Financial Infrastructure",
                color: "color-white",
              },
            ]}
            headingTag="h3"
            className="f-3 mb-3 text-center"
          />

          <div className={`d-flex ${styles.section}`}>
            {introductionCards.map((card, idx) => (
              <div key={idx} className={`${styles.card}`}>
                <div className={`d-flex ${styles.outerCard}`}>
                  <DynamicHeading
                    content={[{ title: card.value, color: "color-white" }]}
                    headingTag="p"
                    className="f-6 title-adaptive "
                  />
                </div>
                <div className={`py-2  ${styles.innerCard}`}>
                  <DynamicHeading
                    content={[{ title: card.label, color: "color-white" }]}
                    headingTag="p"
                    className="mb-0 text-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg_white_index">
        <ContentShowcase
          mainHeading={[
            {
              title: "A Full-stack Wallet-as-a-Service (WaaS):  ",
              color: "color-black",
            },
            { title: " Designed for Scale", color: "color-equity-blue" },
          ]}
          heading="Start with Compliance Built In"
          subheading="A digital wallet solution provider built on a fully licensed and regulated foundation, eliminating the complexity of developing your own compliant prepaid wallet stack."
          data={integrationData}
          imageSrc={advanceAi}
          imageAlt="card background"
          buttonUrl={salesUrl}
          bgColor="bg-color-black-30"
          reverse
        />
        <ContentShowcase
          heading="Never Lose a User to KYC Delays"
          subheading="Accelerate user onboarding and wallet activation with 24×7, always-on verification flows."
          data={paymentMethodData}
          imageSrc={receipt}
          imageAlt="card background"
          bgColor="bg-color-white position-relative"
          imgStyle="position-absolute start-0"
          buttonUrl={salesUrl}
          imgHeightStyle="mh-650"
        />
        <ContentShowcase
          heading="Manage Every Payment Flow in One Place"
          subheading="All functions — Wallets, Payment Gateway, BBPS, and Merchant settlement are live under one platform, not across multiple vendors."
          data={dashboardData}
          imageSrc={upi}
          imageAlt="card background"
          buttonUrl={salesUrl}
          bgColor="bg-color-black-30"
          imgHeightStyle="mh-650"
          reverse
        />
        <ContentShowcase
          heading="Go-live with Developer-First Infrastructure"
          subheading="Built for product and tech teams that want to move fast without sacrificing reliability."
          data={rankData}
          imageSrc={walletExpense}
          imageAlt="card background"
          bgColor="bg-color-white position-relative"
          buttonUrl={salesUrl}
          imgStyle="position-absolute start-0"
        />
      </div>

      <div
        className={`${styles.sixth_row} bg_white_index row d-flex bg-white `}
      >
        <EnkashWay
          sectionHeading="Digital Wallet Infrastructure That Fits Your Vision"
          progressItemPadding="15px 12px"
          progressData={[
            {
              itemArray: ["Gig Economy & Payouts"],
              title: "Gig Economy & Payouts",
              description:
                "Power instant, trackable payouts for gig platforms and creator economies.",
              icon: itIcon,
              bgImage: bg1,
              rightImg: tabImgOne,
            },
            {
              itemArray: ["Marketplace Merchant Settlements"],
              title: "Marketplace Merchant Settlements",
              description:
                " Settle funds faster with embedded merchant onboarding and wallet settlement.",
              icon: ecoomerceIcon,
              bgImage: bg2,
              rightImg: tabImgTwo,
            },
            {
              itemArray: ["Refunds, Loyalty & Cashback"],
              title: "Refunds, Loyalty & Cashback",
              description:
                "Create open, semi-closed, or closed-loop types of digital wallets to retain customers and cut refund costs.",
              icon: manufactureIcon,
              bgImage: bg3,
              rightImg: tabImgThree,
            },
            {
              itemArray: ["Corporate Wallets"],
              title: "Corporate Wallets",
              description:
                " Manage petty cash, employee allowances, and spend controls efficiently.",
              icon: logisticIcon,
              bgImage: bg4,
              rightImg: tabImgFour,
            },
            {
              itemArray: ["Campus, EdTech & Communities"],
              title: "Campus, EdTech & Communities",
              description:
                "Enable easy, cashless transactions for students, rentals, communities, and ecosystem payments.",
              icon: consultancyIcon,
              bgImage: bg5,
              rightImg: tabImgFive,
            },
          ]}
        />
      </div>

      <div className={`${styles.seventh_row} bg_white_index `}>
        <div className={`${styles.title} text-center max-w-auto`}>
          <div
            className={` flex-column justify-content-center align-items-center `}
          >
            <DynamicHeading
              content={[
                {
                  title: "From Wallet Issuance to Payment Processing: ",
                  color: "color-black",
                },
                {
                  title: "  End-to-End Digital Wallet Service Provider ",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
        </div>

        <div>
          <AllProducts
            title="All Features"
            subtitle="Combine all use cases"
            data={mergedCards}
          />
        </div>
      </div>

      <div className={`${styles.features_section}`}>
        <BottomCtaSection
          headingPart1="Start Building"
          headingPart2="Your Wallet Today"
          buttonHref={salesUrl}
        />
      </div>

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default CoBrandedDigitalWallet
