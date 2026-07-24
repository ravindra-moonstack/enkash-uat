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
  dashboardFaqData,
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
import dynamic from "next/dynamic"
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
  vaultSecurity,
} from "./img"
import HeroSection from "@/src/components/sections/hero-section"

const FaqSection = dynamic(() => import("@/src/components/faq-section"), {
  ssr: true,
})
const SecondFaqHtml = dynamic(
  () => import("@/src/components/second-faq/secondFaqHtml")
)
const OtherProducts = dynamic(
  () => import("@/src/components/sections/other-products"),
  { ssr: true }
)
const BlogSection = dynamic(
  () => import("@/src/components/sections/blog-section"),
  { ssr: true }
)
//utils
import Script from "next/script"
import BulletPointSection from "@/src/components/sections/bullet-point-section"
const IndustrySlider = dynamic(
  () => import("@/src/components/Industry-slider"),
  { ssr: true }
)

const BankGradeSecurity = dynamic(
  () => import("@/src/components/BankGradeSecurity/BankGradeSecurity"),
  { ssr: true }
)
const ContentShowcase = dynamic(
  () => import("@/src/components/content-showcase"),
  { ssr: true }
)
const FeatureCard = dynamic(() => import("@/src/components/feature-card"), {
  ssr: true,
})
const PaymentGatewaySection = dynamic(
  () => import("@/src/components/payment-gateway-slider/PaymentGatewaySection"),
  { ssr: true }
)
const StatsSection = dynamic(() => import("@/src/components/stats-section"), {
  ssr: true,
})

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
            text: "Best Payment Gateway in India for Merchants That Can't Afford to Lose a Sale",
            color: "color-black",
          },
        ]}
        description={{
          text: " Accept online payments through UPI, cards, net banking, wallets, and more, backed by reliable payment infrastructure, developer-grade integrations, and real human support when it matters.",
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
        title="Online Payment Gateway Built for Moments That Cannot Fail"
        description="A Gateway built for businesses that demand more than just payment processing. EnKash combines enterprise-grade infrastructure with SMB-focused solutions."
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
            {
              title: "Backbone of Modern Business",
              color: "color-equity-blue",
            },
            {
              title: " Payments",
              color: "color-black",
            },
          ]}
          mainDescription={[
            {
              title:
                "A scalable online payment gateway setup for modern businesses that supports growth, complexity, and volume.",
              color: "color-black",
            },
          ]}
          heading="100+ Payment Method That Matters"
          subheading="Offer your customers complete payment flexibility with 100+ integrated payment options that work seamlessly across all channels."
          data={integrationData}
          imageSrc={integration}
          imageAlt="multiple-payment-methods"
          buttonUrl={salesUrl}
          buttonTitle="Get Started Today"
          bgColor="bg-color-black-30"
          buttonArrow
          reverse
          imgHeightStyle={"mh-760"}
          contentContainerStyle={"pb-0"}
        />
        <ContentShowcase
          heading="Built for Developers Who Demand Excellence"
          subheading="Integrate faster with enterprise-grade payment gateway APIs, SDKs, and e-commerce plugins, with clear technical documentation. Give your development team the tools required to build, test, and launch payment experiences with confidence."
          data={paymentMethodData}
          imageSrc={paymenyMethod}
          imageAlt="enkash-payment-gateway-integrations"
          buttonTitle="Get Started Today"
          buttonUrl={salesUrl}
          buttonArrow
        />
        <div className={`${styles.integration_section} `}>
          <div className={`${styles.faqSection} text-start  max-w-auto`}>
            <div className={`${styles.title} text-start pb-md-5 pb-4`}>
              <DynamicHeading
                content={[
                  {
                    title:
                      "When Payments Need Attention, Reach Someone Who Understands Them",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
              <DynamicHeading
                content={[
                  {
                    title:
                      "Payment issues rarely arrive with complete context. EnKash gives merchants access to support teams that understand payment flows, integrations, settlements, and business operations.",
                    color: "color-main-grey",
                  },
                ]}
                headingTag="p"
                className={styles.integration_subheading}
              />
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <div>
                  <SecondFaqHtml SecondfaqData={dashboardFaqData} />
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.faq_bg}>
                  <Image
                    src={dashboard}
                    alt="our-support"
                    className="w-100 mh-550 object-fit-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContentShowcase
          heading="Complete Visibility Into Your Payments"
          subheading="Access comprehensive analytics and reporting tools that provide deep insights into transaction performance, settlement status, and business metrics."
          data={rankData}
          imageSrc={rank}
          imageAlt="payment-analytics"
          buttonUrl={salesUrl}
          buttonTitle="Get Started Today"
          buttonArrow
        />
      </div>
      <IndustrySlider
        heading={"Designed for How Businesses Collect Payments"}
        subheading={
          "Whether you're scaling an e-commerce store or launching a subscription service, EnKash payment gateway adapts to your unique needs."
        }
        categories={categories}
        slides={slides}
        autoplaySpeed={4000}
      />
      <PaymentGatewaySection
        backgroundImage={capabilityImage.src}
        heading={[
          {
            title: "Advanced Capabilities for Complex Requirements",
            color: "color-white",
          },
        ]}
        description="Beyond standard payment processing, EnKash payment gateway handles complex business scenarios."
        slideData={slideData}
        className={styles.partnerSectionOverlap}
      />
      <BankGradeSecurity
        preTitle="Bank-Grade "
        highlightedTitle="Security "
        titleAfterHighlightedTitle="Standards"
        subtitle="Protect online payments with enterprise-grade security controls. Our payment gateway is designed to safeguard sensitive payment data, reduce exposure to fraud, and support secure transaction processing from checkout to settlement."
        features={customFeatures}
        imageSrc={vaultSecurity.src}
        imageAlt="secure-payment-gateway"
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
            headingTag={"h2"}
            className={"f-6"}
          />
          <DynamicHeading
            content={[
              {
                title:
                  "Fast, frictionless checkout experience designed to maximize conversion rates and minimize cart abandonment.",
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
                    headingTag="h3"
                    headingClassName={"heading-h5"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BulletPointSection
        heading={[
          {
            title: "Start Processing Payments Today",
            color: "color-black",
          },
        ]}
        description="Join thousands of businesses that trust EnKash for reliable, secure, and transparent payment processing."
        bulletPoints={acceleratedGrowthData}
        buttonTitle="Get Started Today"
        buttonUrl={salesUrl}
        image={acceleratedGrowthImg}
        imageAlt="pg-guy"
      />

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
        cardHeadingTag="h3"
        cardHeadingClassName="heading-h4"
      />
    </div>
  )
}

export default PaymentGateway
