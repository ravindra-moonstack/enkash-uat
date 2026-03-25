import React from "react"
import Image from "next/image"
import styles from "./page.module.scss"
import { Metadata } from "next"
import dynamic from "next/dynamic"

// data
import {
  allProductSections,
  analyticData,
  cardType,
  counterHeadingData,
  headingData,
  intantActionData,
  productsData,
  spendAnalyticsData,
  statsData,
  stepsData,
  videoSubHeadingData,
  blocksSectionData,
} from "./data"
import faqData from "./faq-data"

// components
import CommanButton from "@/src/components/buttons"
import DynamicHeading from "@/src/components/dynamic-heading"
import CorporateHeroSection from "@/src/components/sections/corporate-card-hero-section"
import SuspenseLoading from "@/src/components/loading"

// Dynamic imports for performance
const LogoSlider = dynamic(() => import("@/src/components/logo-slider"))
const FaqSection = dynamic(() => import("@/src/components/faq-section"))
const PolicyCard = dynamic(() => import("@/src/components/policy-card"))
const FeatureCard = dynamic(() => import("@/src/components/feature-card"))
const CardProduct = dynamic(() => import("@/src/components/card-product"))
const BlogSection = dynamic(() => import("@/src/components/sections/blog-section"))
const CounterSection = dynamic(() => import("@/src/components").then(mod => mod.CounterSection))
const BlocksSection = dynamic(() => import("@/src/components").then(mod => mod.BlocksSection))
const CtaBanner = dynamic(() => import("@/src/components").then(mod => mod.CtaBanner))

// helpers
import {
  spendAnalylicsImg,
  onePlatform,
  heroImg,
  statsBg,
  analytics,
  blockAbsolute,
  GridBgImage,
  ctaSideImg,
} from "./img"

// utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"

import Script from "next/script"
import { BecomePartnerSteps, ProductsSection, VideoPlayer } from "@/src/components"

const videoId = "EgWI_tkBpk0"
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

const webSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.enkash.com/products/corporate-cards#webpage",
      "url": "https://www.enkash.com/products/corporate-cards",
      "name": "India’s First Unified Corporate Card Ecosystem | EnKash Corporate Cards",
      "description": "EnKash Corporate Cards help businesses issue prepaid and credit corporate cards instantly, control spend in real time, eliminate employee reimbursements, and automate reconciliation on one RBI-licensed platform.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.enkash.com/#website",
        "url": "https://www.enkash.com/",
        "name": "EnKash"
      },
      "about": {
        "@id": "https://www.enkash.com/products/corporate-cards#product"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.enkash.com/path-to-corporate-cards-banner-image.jpg"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.enkash.com/#organization",
      "name": "EnKash",
      "url": "https://www.enkash.com/",
      "logo": "https://www.enkash.com/path-to-logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/enkash/"
      ]
    },
    {
      "@type": "Product",
      "@id": "https://www.enkash.com/products/corporate-cards#product",
      "name": "EnKash Corporate Cards",
      "description": "A unified corporate card platform for Indian businesses to issue prepaid and credit cards instantly, set spend controls, get real-time visibility, automate reconciliation, and eliminate reimbursements.",
      "brand": {
        "@type": "Brand",
        "name": "EnKash"
      },
      "category": "Corporate Card Platform",
      "url": "https://www.enkash.com/products/corporate-cards",
      "image": [
        "https://www.enkash.com/path-to-corporate-cards-banner-image.jpg"
      ],
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Startups, SMBs, Enterprises, Finance Teams, Operations Teams"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Card issuance time",
          "value": "Under 60 seconds"
        },
        {
          "@type": "PropertyValue",
          "name": "Spend visibility",
          "value": "100% real-time visibility"
        },
        {
          "@type": "PropertyValue",
          "name": "Reimbursements",
          "value": "Zero employee reimbursements"
        },
        {
          "@type": "PropertyValue",
          "name": "Merchant acceptance",
          "value": "10 Million+ merchant acceptance points"
        },
        {
          "@type": "PropertyValue",
          "name": "License",
          "value": "RBI-authorised PPI license"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Corporate Card Types and Use Cases",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Card Types",
            "itemListElement": [
              {
                "@type": "Product",
                "name": "Prepaid Corporate Cards",
                "description": "Reloadable corporate cards with MCC locks, spend caps, channel controls, and policy compliance."
              },
              {
                "@type": "Product",
                "name": "Corporate Credit Cards",
                "description": "Business credit cards with flexible limits, billing cycles, merchant controls, fraud protection, and rewards."
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Use Case Cards",
            "itemListElement": [
              {
                "@type": "Product",
                "name": "Meal Card",
                "description": "Digital meal cards for employee meal benefits with nationwide acceptance."
              },
              {
                "@type": "Product",
                "name": "Fuel Card",
                "description": "Corporate cards to control and track fuel expenses for travel and fleet spending."
              },
              {
                "@type": "Product",
                "name": "T&E Card",
                "description": "Travel and entertainment cards with smart controls and real-time tracking."
              },
              {
                "@type": "Product",
                "name": "Virtual Card",
                "description": "Secure virtual cards for one-time or recurring online payments."
              },
              {
                "@type": "Product",
                "name": "Purchase Card",
                "description": "Pre-approved cards for procurement, vendor payments, and operational purchases."
              },
              {
                "@type": "Product",
                "name": "Digital Marketing Card",
                "description": "Cards for managing online ad spends with limits and real-time spend visibility."
              },
              {
                "@type": "Product",
                "name": "SaaS Card",
                "description": "Cards designed to manage software subscriptions and recurring SaaS renewals."
              }
            ]
          }
        ]
      },
      "provider": {
        "@id": "https://www.enkash.com/#organization"
      }
    }
  ]
}

export const metadata: Metadata = {
  title: "EnKash Corporate Cards: Smart Cards for Business Expenses",
  description:
    "Empower your teams with EnKash corporate cards. Set spend limits, track transactions in real time, and manage all business expenses on one powerful platform.",
  openGraph: {
    title: "EnKash Corporate Cards: Smart Cards for Business Expenses",
    description:
      "Empower your teams with EnKash corporate cards. Set spend limits, track transactions in real time, and manage all business expenses on one powerful platform.",
    url: `${process.env.URL}/products/corporate-card`,
    type: "website",
    videos: [
      {
        url: "https://youtu.be/EgWI_tkBpk0?si=IPPm7ujd9qxht0s0",
      },
    ],
  },
  alternates: {
    canonical: `${process.env.URL}/products/corporate-cards`,
  },
}

const salesUrl = getSalesUrl("/corporate-cards")

const mergedCards = allProductSections.flatMap((section) => section.items)

const CorporateCards = (): React.JSX.Element => {
  return (
    <>
      <Script
        id="video-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Script
        id="web-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }}
      />
      <CorporateHeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: "Corporate Card", url: "/products/corporate-card" },
        ]}
        preHeading="India’s First Unified Corporate Card Ecosystem"

        titleLines={[
          {
            text: "Corporate cards that move at ",
            color: "color-white d-block text-center italic f-2",
          },
          {
            text: "the speed of your business.",
            color: "color-white d-block text-center",
          },
        ]}

        subtitle={{
          text: "Issue instantly. Spend smartly. Close effortlessly. All on one RBI-licensed platform.",
          color: "color-black",
        }}
        heroImage={heroImg}
        // videoUrl="https://youtu.be/EgWI_tkBpk0?si=IPPm7ujd9qxht0s0"
        buttonUrl={salesUrl}
        title={"Talk to sales"}
      />
      <SuspenseLoading>
        <LogoSlider />
      </SuspenseLoading>

      <CounterSection
        //@ts-ignore
        titleContent={counterHeadingData}
        preTitle={{
          content: [
            {
              title: "WHY ENKASH?",
              color: "color-alternate-grey",
            },
          ],
          headingTag: "p",
          className: "f-5 mb-3 text-center",
        }}
        stats={statsData}
        backgroundImage={statsBg}
      />
      <ProductsSection preTitle={{
        content: [
          {
            title: "CARD TYPES",
            color: "color-alternate-grey",
          },
        ],
        headingTag: "p",
        className: "f-5 mb-3 text-center",
      }} sectionTitle="Choose the Right Corporate Card for Your Business" products={productsData} />

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "A Card Built for ",
                  color: "color-black",
                },
                {
                  title: "Every Way ",
                  color: "color-equity-blue",
                },
                {
                  title: "Your Business Spends",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4">
            {cardType.map(
              ({ titleHtml, description, cardImage, linkUrl }, index) => (
                <div key={index} className="col-12 col-md-4">
                  <CardProduct
                    titleHtml={titleHtml}
                    description={description}
                    cardImage={cardImage}
                    linkUrl={linkUrl}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className={`${styles.slider_row} relative bg-white`}>
        <div className={`${styles.title} text-center max-w-auto`}>
          <DynamicHeading
            content={[
              {
                title: "Issue, Track, and Manage Every Card from One Place",
                color: "color-black ",
              },
            ]}
            headingTag={'h2'}
            className={'f-6'}
          />
        </div>

        <div className="max-w-auto">
          <div className={`row ${styles.integration_row}`}>
            <div className="d-flex align-items-stretch gap-3 gap-md-0 flex-wrap flex-md-nowrap pb-4 pt-4 pt-md-5 justify-content-center">
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

      <div className={`${styles.video_section}`}>
        <VideoPlayer
          videoSrc="https://youtu.be/pjeEde3ruiU?si=ZxvNS0h4z1Mxcsga"
          heading={[{ title: "Experience Corporate Cards that truly deliver ", color: "color-black" },]}
          ctaLabel={"Get Started"}
          subHeadings={videoSubHeadingData}
          ctaHref={salesUrl}
        />
      </div>
      <div className={`${styles.sixth_row} bg-color-black-2 `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-2 pb-md-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-2 `}
            >
              <DynamicHeading
                content={[
                  {
                    title: "Total Control from ",
                    color: "color-black",
                  },
                  {
                    title: " One Dashboard",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
          </div>
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12  px-md-5">
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
                <CommanButton
                  title="Try Now"
                  theme="border-gray"
                  arrow
                  url={salesUrl}
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div className={`col-md-6`}>
              <div>
                <Image
                  src={onePlatform}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlocksSection
        heading={[
          { title: "Configure Controls Across Every Card ", color: "color-white text-center" },
        ]}
        slideData={blocksSectionData}
        absoluteImage={blockAbsolute}
        buttons={[{ title: "Get Started", theme: "white", url: { salesUrl } }]}
        backgroundImage={GridBgImage.src}
      />

      <div className={`${styles.action_row} bg-black-200 row-padding`}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-start pb-5`}>
            <div className="flex-column  pb-3">
              <DynamicHeading
                content={[
                  {
                    title: "Spend Analytics That ",
                    color: "color-white",
                  },
                  {
                    title: "Go Beyond Dashboards",
                    color: "color-white d-block",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>

            <div className="d-flex flex-column col-md-6">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Move beyond raw data. Leverage our  advanced analytics to turn into actionable business insights.",
                    color: "color-grey-100 subHeading",
                  },
                ]}
                headingTag="p"
                className=" mb-0"
              />
            </div>
          </div>

          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 ">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                }}
              >
                {spendAnalyticsData.map(({ icon, title }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                        style={{ width: "48px", height: "48px" }}
                      >
                        <Image src={icon} alt="icon" />
                      </div>
                      <div className="d-flex flex-column gap-3">
                        <DynamicHeading
                          content={[
                            {
                              title: title,
                              color: "color-white",
                            },
                          ]}
                          headingTag="h5"
                          className=" mb-0 f-5"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 col-12 ">
              <div className={styles.analytic_bg}>
                <Image
                  src={spendAnalylicsImg}
                  alt="background image"
                  className="w-100  object-fit-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.use_case_section}`}>
        <div className="max-w-auto">
          <div className="row align-items-end">
            <div className="col-md-6 col-12 order-2 order-md-1">
              <div>
                <Image
                  src={analytics}
                  alt="card background"
                  className="position-relative w-100 h-auto"
                />
              </div>
            </div>

            <div className="col-md-6 col-12 order-1 order-md-2">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <div className="mb-2">
                  <DynamicHeading
                    content={[
                      {
                        title: "Connected to Your Expense Workflow ",
                        color: "color-grey-200",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Connect Corporate Cards with Expense Management for a Unified Experience",
                      color: "color-main-grey subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
                className="pb-3 pb-md-5"
              >
                {analyticData.map(({ icon, title }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      className="align-items-center"
                    />
                  </div>
                ))}
                <div className="justify-content-end d-flex">

                  <CommanButton
                    title="Explore Our Expense Management Suite "
                    theme="border-gray"
                    url="/products/expense-management"
                    arrow
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.steps_container}  `}>
        <BecomePartnerSteps
          heading={headingData}
          steps={stepsData}
        />
      </div>
      <CtaBanner leftImage={ctaSideImg} rightImage={ctaSideImg} buttonText="Schedule a Demo" buttonUrl={salesUrl} />

      <SuspenseLoading>
        <FaqSection faqData={faqData} />
      </SuspenseLoading>

      <BlogSection
        heading={[
          {
            title: "Related  ",
            color: "color-black f-4",
          },
          {
            title: " Resources",
            color: "color-black f-4",
          },
        ]}
        cards={[3198, 11501, 2976]}
      />
    </>
  )
}

export default CorporateCards
