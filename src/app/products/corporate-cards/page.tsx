import Image from "next/image"
import styles from "./page.module.scss"
import { Metadata } from "next"

// data
import {
  allProductSections,
  cardData,
  cardType,
  corporateCardData,
  intantActionData,
  rbiData,
  spendAnalyticsData,
} from "./data"
import faqData from "./faq-data"

// components
import CommanButton from "@/src/components/buttons"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import FaqSection from "@/src/components/faq-section"
import PolicyCard from "@/src/components/policy-card"
import FeatureCard from "@/src/components/feature-card"
import CardProduct from "@/src/components/card-product"
import AllProducts from "@/src/components/all-products"
import BlogSection from "@/src/components/sections/blog-section"
import CorporateHeroSection from "@/src/components/sections/corporate-card-hero-section"

// helpers
import {
  spendAnalylicsImg,
  rbiLogo,
  corporateCard,
  corporateCardIcon,
  onePlatform,
  heroImg,
} from "./img"

// utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"

import Script from "next/script"

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
        titleLines={[
          {
            text: "The Only Corporate Cards",
            color: "color-white d-block text-center italic f-2",
          },
          {
            text: "You’ll Ever Need.",
            color: "color-white d-block text-center",
          },
        ]}
        subtitle={{
          text: "More control, more flexibility & more security.",
          color: "color-black",
        }}
        heroImage={heroImg}
        videoUrl="https://youtu.be/EgWI_tkBpk0?si=IPPm7ujd9qxht0s0"
        buttonUrl=""
        title={"Talk to sales"}
        url={salesUrl}
      />
      <LogoSlider />

      <div className={styles.introduction_section}>
        <div className="max-m-auto">
          <div
            className={`${styles.second_row_title} text-center pb-3 pb-md-5`}
          >
            <DynamicHeading
              content={[
                {
                  title: " Build for CFOs, Loved by Teams ",
                  color: "color-white",
                },
              ]}
              headingTag="h2"
              className="f-6 text-center"
            />
            <DynamicHeading
              content={[
                {
                  title:
                    "Instant issuance, smart controls, and cards for every use case. Preloaded team cards or enterprise-level controls.",
                  color: "color-white subHeading",
                },
              ]}
              headingTag="p"
              className=" text-center mb-0"
            />
          </div>
          <div className={`d-flex  flex-wrap  ${styles.section}`}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center text-center ${styles.card}`}
              >
                <Image
                  src={item.icon}
                  alt="card visual"
                  className={styles.card_image}
                />
                <DynamicHeading
                  content={[
                    {
                      title: item.title,
                      color: "color-main-grey",
                    },
                  ]}
                  headingTag="p"
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.sixth_row} bg-white `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-2 pb-md-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-2 `}
            >
              <DynamicHeading
                content={[
                  {
                    title: "One Platform. Total Visibility. ",
                    color: "color-black",
                  },
                  {
                    title: " Instant Actions",
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
                      "Experience real-time visibility, smart spend tracking, and actionable insights—capabilities you won’t get with most traditional bank-issued cards or standard prepaid card programs",
                    color: "color-alternate-grey text-center subHeading",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />
            </div>
          </div>
          <div className={`row bg-white align-items-center ${styles.section}`}>
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.action_row} bg-black-200 row-padding`}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-start pb-5`}>
            <div className="flex-column  pb-3">
              <DynamicHeading
                content={[
                  {
                    title: "Unrivaled ",
                    color: "color-white",
                  },
                  {
                    title: "Spend Analytics  ",
                    color: "color-equity-blue",
                  },
                  {
                    title: "at Your Fingertips ",
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
                      "Move beyond basic data. Leverage real-time analytics to track spend patterns across prepaid cards, corporate programs, and purchase cards, helping finance teams detect anomalies/ inconsistencies or policy violations instantly.",
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.features_section}>
        <div className={` ${styles.rbi_section} max-w-auto`}>
          <div>
            <Image
              src={rbiLogo}
              alt="card background"
              height={156}
              width={156}
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
      </div>

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Choose ",
                  color: "color-black",
                },
                {
                  title: "the Right Card  ",
                  color: "color-equity-blue",
                },
                {
                  title: "for Every Use Case ",
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

      <div className={`${styles.cta_section} relative`}>
        <div className={`${styles.title} text-center `}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <DynamicHeading
              content={[
                {
                  title: "One Platform. ",
                  color: "color-black",
                },
                {
                  title: "End-to-End Control. ",
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
                    "Connect your corporate cards and purchase cards programs with a unified expense management suite.",
                  color: "color-alternate-grey subHeading",
                },
              ]}
              headingTag="p"
              className="f-4 mb-0"
            />
          </div>
          <div className="pt-4  justify-content-center d-flex">
            <CommanButton
              title={"Explore Our Expense Management Suite"}
              theme="blue"
              width="auto"
              url="/products/expense-management"
            />
          </div>
        </div>
        <div className={`${styles.onePlatformSectionCard}`}>
          <AllProducts
            title="All Features"
            subtitle="Combine all use cases"
            data={mergedCards}
          />
        </div>
      </div>

      <div className={`${styles.eight_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Apply Now for Smarter Business Spending ",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <CommanButton
              title="Talk to Us"
              theme="outline-blue"
              arrow
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />
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
        cards={[3198, 11501, 2976]}
      />
    </>
  )
}

export default CorporateCards
