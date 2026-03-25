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
  corporateCardData,
  counterHeadingData,
  headingData,
  intantActionData,
  productsData,
  rbiData,
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
const AllProducts = dynamic(() => import("@/src/components/all-products"))
const BlogSection = dynamic(() => import("@/src/components/sections/blog-section"))
const CounterSection = dynamic(() => import("@/src/components").then(mod => mod.CounterSection))
const BlocksSection = dynamic(() => import("@/src/components").then(mod => mod.BlocksSection))
const CtaBanner = dynamic(() => import("@/src/components").then(mod => mod.CtaBanner))

// helpers
import {
  spendAnalylicsImg,
  rbiLogo,
  corporateCard,
  corporateCardIcon,
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



      {/*
      <div className={styles.features_section}>
        <div className={` ${styles.rbi_section} max-w-auto`}>
          <div>
            <Image
              src={rbiLogo}
              alt="card background"
              height={156}
              width={156}
              sizes="156px"
              quality={75}
              loading="lazy"
            />
          </div>

          <div className={`${styles.title} text-center d-inline pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "RBI-Approved,",
                  color: "color-black",
                },
                {
                  title: "  Business-Ready",
                  color: "color-equity-blue ",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>

          <div className={styles.card_grid}>
            {rbiData.map(({ icon, title, description }, i) => (
              <div key={i}>
                <FeatureCard
                  titleHtml={title}
                  description={description}
                  cardImage={icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.use_case_section} bg-white`}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
            >
              <DynamicHeading
                content={[
                  {
                    title: "Corporate Card Solutions: Purpose-",
                    color: "color-black",
                  },
                  {
                    title: " Built for Growing Businesses.",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
            <div>
              <DynamicHeading
                content={[
                  {
                    title:
                      "From instant issuance to automated controls, prepaid corporate cards built to manage every business spend.",
                    color: "color-alternate-grey subHeading",
                  },
                ]}
                headingTag="p"
                className=" mb-0"
              />
            </div>
          </div>
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 d-none d-md-block pr-md-5">
              <Image
                src={corporateCard}
                alt="background image"
                className="w-100 mh-550 object-fit-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
                loading="lazy"
              />
            </div>
            <div className="col-md-6 col-12 pr-md-5">
              <div className="d-flex  align-items-center mb-4  gap-3">
                <Image
                  src={corporateCardIcon}
                  alt="icon"
                  height={46}
                  width={46}
                />
                <DynamicHeading
                  content={[
                    {
                      title: "Prepaid Corporate Cards ",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h5"
                  className=" f-5"
                />
              </div>
              <ul className={styles.custom_list}>
                {corporateCardData.map(({ title }, i) => (
                  <li key={i}>
                    <DynamicHeading
                      content={[
                        {
                          title: title,
                          color: "color-alternate-grey",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0"
                    />
                  </li>
                ))}
              </ul>

              <div className="ml-4">
                <CommanButton
                  title="Explore More"
                  theme="border-gray"
                  arrow
                  url="/prepaid-card"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}



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
