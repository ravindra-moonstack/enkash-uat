"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

import styles from "./page.module.scss"

// Data
import {
  acceleratedGrowthData,
  allProductSections,
  categories,
  customFeatures,
  dashboardData,
  integrationData,
  paymentMethodData,
  rankData,
  slideData,
  slides,
} from "../../payment-gateway/data"
import faqData from "../../payment-gateway/faq-data"

// Helpers/Assets
import {
  paymentSummary,
  integration,
  paymenyMethod,
  dashboard,
  rank,
  acceleratedGrowthImg,
  stateBg,
  capabilityImage,
  vaultSecurity
} from "../../payment-gateway/img"

// Components
import { 
  BankGradeSecurity, 
  BulletPointSection, 
  ContentShowcase, 
  FeatureCard, 
  PaymentGatewaySection, 
  StatsSection 
} from "@/src/components"

import IndustrySlider from "@/src/components/Industry-slider"
import DynamicHeading from "@/src/components/dynamic-heading"
import FaqSection from "@/src/components/faq-section"
import SuspenseLoading from "@/src/components/loading"

// Forms & LogoSlider loaded dynamically
const PaymentGatewayPartnershipForm = dynamic(() => import("@/src/components/forms/payment-gateway"), {
  ssr: false,
  loading: () => <div style={{ minHeight: '541px' }} />
})

const LogoSlider = dynamic(() => import("@/src/components/logo-slider"), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100px' }} />
})

const mergedCards = allProductSections.flatMap((section) => section?.items)

const PaymentGatewayCampaignClient = () => {
  return (
    <div className={styles.paymentGatewayCampaign}>
      {/* Custom Campaign Header + Hero */}
      <section className={`${styles.hero}`}>
        <Image
          src="/images/collectPaymentBg.webp"
          alt="Hero Background"
          fill
          priority={true}
          fetchPriority="high"
          className={styles.heroBg}
          sizes="100vw"
          decoding="async"
          quality={80}
        />
        <header className={styles.customHeader}>
          <div className={"max-w-auto"}>
            <Link href="/" className={styles.logoLink}>
              <Image src={"/images/logo.svg"} alt="Enkash Logo" width={120} height={40} priority />
            </Link>
          </div>
        </header>

        <div className={"max-w-auto"}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <DynamicHeading
                content={[
                  {
                    text: "India's Best Payment Gateway Truly Built for SMBs",
                    color: "color-black",
                  }
                ]}
                headingTag="h1"
                className={"mb-0"}
              />
              <DynamicHeading
                content={[
                  {
                    text: "Accept online payments instantly with a RBI-authorised, merchant payment gateway designed for MSMEs, D2C brands, SaaS platforms, marketplaces, and enterprises.",
                    color: "color-black subHeading",
                  }
                ]}
                headingTag="p"
                className={"mb-3 mt-3"}
              />
              <div className={styles.heroCtas}>
                <Image
                  src="/images/LicenseGroupIcon.png"
                  alt="logo"
                  width={180}
                  height={30}
                  className={styles.groupIcon}
                  priority={true}
                  sizes="180px"
                />
              </div>
            </div>

            {/* Campaign Form replacing right-side hero image */}
            <div id="form-section" className={styles.formSection}>
              <PaymentGatewayPartnershipForm />
            </div>
          </div>
        </div>

        {/* Logo Slider */}
        <div className={styles.logoSliderWrap}>
          <div className={styles.sliderOverlay}></div>
          <div className={styles.logoSlider}>
            <LogoSlider />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection
        title="Payment Gateway That Delivers"
        description="Built for businesses that demand more than just payment processing. EnKash combines enterprise-grade infrastructure with SMB-focused solutions."
        backgroundImage={stateBg}
        className="darkTheme"
      />

      {/* Content Showcases with overridden campaign CTA buttons */}
      <div className="bg_white_index">
        <ContentShowcase
          mainHeading={[
            {
              title: "The ",
              color: "color-black",
            },
            { title: "Backbone of Modern Business", color: "color-equity-blue" },
            {
              title: " Payments",
              color: "color-black",
            },
          ]}
          mainDescription={[
            {
              title: "A complete payments setup that supports growth, complexity, and volume.",
              color: "color-black",
            },
          ]}
          heading="Accept Every Payment Method That Matters"
          subheading="Offer your customers complete payment flexibility with 100+ integrated payment options that work seamlessly across all channels."
          data={integrationData}
          imageSrc={integration}
          imageAlt="card background"
          buttonUrl="#form-section"
          buttonTitle="Make The Switch ->"
          bgColor="bg-color-black-30"
          buttonArrow
          reverse
          imgHeightStyle={'mh-760'}
          contentContainerStyle={'pb-0'}
        />

        <ContentShowcase
          heading="Built for Developers Who Demand Excellence"
          subheading="Enterprise-grade APIs and SDKs designed for rapid integration. Comprehensive documentation that eliminates guesswork."
          data={paymentMethodData}
          imageSrc={paymenyMethod}
          imageAlt="card background"
          buttonTitle="Make The Switch ->"
          buttonUrl="#form-section"
          buttonArrow
        />

        <ContentShowcase
          heading="Support That Drives Your Success"
          subheading="EnKash provides dedicated technical and merchant support teams that understand your business and respond when you need them."
          data={dashboardData}
          imageSrc={dashboard}
          imageAlt="card background"
          bgColor="bg-color-black-30"
          buttonUrl="#form-section"
          buttonTitle="Make The Switch ->"
          buttonArrow
          reverse
          imgHeightStyle={'mh-650'}
        />

        <ContentShowcase
          heading="Complete Visibility Into Your Payments"
          subheading="Access comprehensive analytics and reporting tools that provide deep insights into transaction performance, settlement status, and business metrics."
          data={rankData}
          imageSrc={rank}
          imageAlt="card background"
          buttonUrl="#form-section"
          buttonTitle="Make The Switch ->"
          buttonArrow
        />
      </div>

      {/* Industry Slider */}
      <IndustrySlider
        heading={"Designed for How Businesses Collect Payments"}
        subheading={"Whether you're scaling an e-commerce store or launching a subscription service, EnKash adapts to your unique needs."}
        categories={categories}
        slides={slides}
        autoplaySpeed={4000}
      />

      {/* Payment Gateway Section */}
      <PaymentGatewaySection
        backgroundImage={capabilityImage.src}
        heading={[{ title: "Advanced Capabilities for Complex Requirements", color: "color-white" }]}
        description="Beyond standard payment processing, EnKash handles sophisticated business scenarios."
        slideData={slideData}
        className={styles.partnerSectionOverlap}
      />

      {/* Security Section */}
      <BankGradeSecurity
        preTitle="Bank-Grade "
        highlightedTitle="Security "
        titleAfterHighlightedTitle="Standards"
        subtitle="Every transaction is protected by the same security standards used by major financial institutions."
        features={customFeatures}
        imageSrc={vaultSecurity.src}
        imageAlt="Bank vault with security lock"
        className={styles.securitySectionOverlap}
      />

      {/* Grid of integrations */}
      <div className={`${styles.slider_row} relative bg-white`}>
        <div className={`${styles.title} text-center max-w-auto`}>
          <DynamicHeading
            content={[
              {
                title: "Turn More ",
                color: "color-black ",
              },
              {
                title: "Browsers Into Buyers",
                color: "color-equity-blue ",
              },
            ]}
            headingTag={'h2'}
            className={'f-6'}
          />
          <DynamicHeading
            content={[
              {
                title: "Fast, frictionless checkout experience designed to maximize conversion rates and minimize cart abandonment.",
                color: "color-grey-200 f-4 ",
              },
            ]}
            headingTag="p"
            className={`text-center mb-0`}
          />
        </div>

        <div className="max-w-auto">
          <div className={`row ${styles.integration_row}`}>
            <div className="d-flex align-items-stretch gap-3 gap-md-0 flex-wrap flex-md-nowrap pb-4 pt-4 pt-md-5">
              {mergedCards?.map((card, index) => (
                <div key={index.toString()} className="d-flex">
                  <FeatureCard
                    titleHtml={card.title}
                    description={card?.description}
                    cardImage={card.image}
                    hoverClass={styles.hoverClass}
                    iconWidth={48}
                    headingTag="h3"
                    headingClassName={"heading-h5"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bullet Point Section with overridden Campaign CTA */}
      <BulletPointSection
        heading={[
          {
            title: "Start Processing Payments Today",
            color: "color-black",
          },
        ]}
        description="Join thousands of businesses that trust EnKash for reliable, secure, and transparent payment processing."
        bulletPoints={acceleratedGrowthData}
        buttonTitle="Make The Switch ->"
        buttonUrl="#form-section"
        image={acceleratedGrowthImg}
      />

      {/* FAQ Section */}
      <SuspenseLoading>
        <FaqSection faqData={faqData} />
      </SuspenseLoading>

      {/* Custom Campaign Footer */}
      <footer className={styles.customFooter}>
        <div className={"max-w-auto"}>
          <div className={styles.copyrightBar}>
            <p>Copyright © 2026 | Nehat Tech Solutions Pvt. Ltd. All rights reserved.</p>
            <p>Copyright © 2026 | Nehat Business Services Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PaymentGatewayCampaignClient
