import React from "react"
import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  acceleratedGrowthData,
  allProductSections,
  categories,
  customFeatures,
  dashboardData,
  integrationData,
  managementCardData,
  paymentMethodData,
  rankData,
  slideData,
  slides,
} from "./data"
import faqData from "./faq-data"

//components
// import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import FaqSection from "@/src/components/faq-section"
import DynamicHeading from "@/src/components/dynamic-heading"
import SuspenseLoading from "@/src/components/loading"

//helpers
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
} from "./img"
import HeroSection from "@/src/components/sections/hero-section"
import OtherProducts from "@/src/components/sections/other-products"
import BlogSection from "@/src/components/sections/blog-section"
//utils
import Script from "next/script"
import { BankGradeSecurity, CommanButton, ContentShowcase, FeatureCard, PaymentGatewaySection, StatsSection } from "@/src/components"
import IndustrySlider from "@/src/components/Industry-slider"

const videoId = "oApuECjnRIU"
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Payment Gateway in India - Enkash",
  description:
    "Smooth checkouts, advanced fraud protection, and more with Enkash.",
  thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  uploadDate: "2025-11-30T08:00:00+00:00",
  duration: "PT2M30S",
  contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
  embedUrl: `https://www.youtube.com/embed/${videoId}`,
}

export const metadata: Metadata = {
  title: "Best Payment Gateway in India to Accept  Payments Online.",
  description:
    "Power your merchants with a Payment Gateway offering smooth checkouts, advanced fraud protection, and access to more customers.",
  openGraph: {
    title: "Best Payment Gateway in India to Accept  Payments Online.",
    description:
      "Unlock growth with the best payments and spend management platform with products across corporate cards, vouchers, loyalty and more",
    url: `${process.env.URL}/payment-gateway`,
    type: "website",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=oApuECjnRIU",
      },
    ],
  },
  alternates: {
    canonical: `${process.env.URL}/payment-gateway`,
  },
}

const salesUrl = getSalesUrl("/payment-gateway")
const mergedCards = allProductSections.flatMap((section) => section?.items)

const PaymentGateway = (): React.JSX.Element => {
  return (
    <div className={`color-white`}>
      <Script
        id="video-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Collect Payments",
            url: "/products/collect-payments",
          },
          {
            name: "Payment Gateway",
            url: "/payment-gateway",
          },
        ]}
        subtitle={{
          text: "Payment Gateway",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "India's Best Payment Gateway Truly Built for SMBs",
            color: "color-black",
          },
        ]}
        description={{
          text: " Accept online payments instantly with a RBI-authorised, merchant payment gateway designed for MSMEs, D2C brands, SaaS platforms, marketplaces, and enterprises.",
        }}
        button={{
          title: "Get Started",
          url: salesUrl,
          theme: "blue",
          apiUrl: "https://docs.enkash.com/payment-gateway",
          vedioLink: "https://www.youtube.com/watch?v=oApuECjnRIU",
        }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <StatsSection
        title="Payment Gateway That Delivers"
        description="Built for businesses that demand more than just payment processing. EnKash combines enterprise-grade infrastructure with SMB-focused solutions."
        backgroundImage={stateBg}
        className="darkTheme"
      />

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
          buttonUrl={salesUrl}
          buttonTitle="Get Started Today"
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
          buttonTitle="Get Started Today"
          buttonUrl={salesUrl}
          buttonArrow
        />
        <ContentShowcase
          heading="Support That Drives Your Success"
          subheading="EnKash provides dedicated technical and merchant support teams that understand your business and respond when you need them."
          data={dashboardData}
          imageSrc={dashboard}
          imageAlt="card background"
          bgColor="bg-color-black-30"
          buttonUrl={salesUrl}
          buttonTitle="Get Started Today"
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
          buttonUrl={salesUrl}
          buttonTitle="Get Started Today"
          buttonArrow
        />
      </div>
      <IndustrySlider
        heading={"Designed for How Businesses Collect Payments"}
        subheading={"Whether you're scaling an e-commerce store or launching a subscription service, EnKash adapts to your unique needs."}
        categories={categories}
        slides={slides}
        autoplaySpeed={4000}
      />
      <PaymentGatewaySection
        backgroundImage={capabilityImage.src}
        heading={[{ title: "Advanced Capabilities for Complex Requirements", color: "color-white" }]}
        description="Beyond standard payment processing, EnKash handles sophisticated business scenarios."
        slideData={slideData}
        className={styles.partnerSectionOverlap}
      />
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
            className={`${styles.description} mb-0`}
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
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.integration_section}  `}>
        <div className="max-w-auto w-100">
          <div className={`${styles.section} row`}>
            <div
              className={`${styles.title} text-start  d-flex flex-column pb-4 pb-md-5  col-md-8`}
            >
              <DynamicHeading
                content={[
                  {
                    title: "Start Processing Payments Today",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
              <DynamicHeading
                content={[
                  {
                    title: "Join thousands of businesses that trust EnKash for reliable, secure, and transparent payment processing.",
                    color: "color-grey-200",
                  },
                ]}
                headingTag="p"
                className="f-4 mb-0 fs-20"
              />
            </div>

            <div className="col-md-6 ">
              {acceleratedGrowthData.map(({ icon, title }, i) => (
                <div key={i} style={{ direction: "ltr" }}>
                  <div className="d-flex align-items-start gap-3 pt-2 w-4 h-4">
                    <div
                      className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <Image
                        src={icon}
                        alt="icon"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <DynamicHeading
                        content={[
                          {
                            title: title,
                            color: "color-black subHeading",
                          },
                        ]}
                        headingTag="p"
                        className="f-5"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <CommanButton
                title="Get Started Today"
                theme="white"
                arrow
                url={salesUrl}
                className="mt-4"
              />
            </div>
            <div className="col-md-6">
              <div className={styles.faq_bg}>
                <Image
                  src={acceleratedGrowthImg}
                  alt="background image"
                  className="w-100 mh-550 object-fit-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SuspenseLoading>
        <FaqSection faqData={faqData} />
      </SuspenseLoading>

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
        cards={[12642, 13675, 12195]}
      />
      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other collection products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCardData}
      />
    </div>
  )
}

export default PaymentGateway
