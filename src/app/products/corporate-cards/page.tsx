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
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import FaqSection from "@/src/components/faq-section"
import PolicyCard from "@/src/components/policy-card"
import FeatureCard from "@/src/components/feature-card"
import CardProduct from "@/src/components/card-product"
import AllProducts from "@/src/components/all-products"

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
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Corporate Cards: Smart Cards for Business Expenses",
  description:
    "Empower your teams with EnKash corporate cards. Set spend limits, track transactions in real time, and manage all business expenses on one powerful platform.",
  alternates: {
    canonical: `${process.env.URL}/corporate-cards/`,
  },
})
const salesUrl = getSalesUrl("/corporate-cards")

const mergedCards = allProductSections.flatMap((section) => section.items)

const CorporateCards = (): React.JSX.Element => {
  return (
    <>
      <div className={`${styles.hero_section}`}>
        <div className="max-w-auto position-relative no-pointer ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
                {
                  name: "Corporate Card",
                  url: "/products/corporate-card",
                },
              ]}
              linkColor="white"
            />
          </div>
          <div className="col-12 d-flex flex-column text-center">
            <div className="text-center mb-3 mt-3 ">
              <DynamicHeading
                content={[
                  {
                    title: "The Only Corporate Cards",
                    color: "color-white d-block text-center italic f-2",
                  },
                  {
                    title: "You’ll Ever Need.",
                    color: "color-white d-block text-center",
                  },
                ]}
                headingTag="h1"
                className="f-7"
              />
            </div>
            <div className="d-inline align-items-center">
              <DynamicHeading
                content={[
                  {
                    title: "More control, more flexibility & more security.",
                    color: "color-white d-block text-center subHeading",
                  },
                ]}
                headingTag="p"
                className=""
              />
            </div>

            <div className={`justify-content-center d-flex mt-3 pointer-auto`}>
              <CommanButton title="Talk to Us" theme="blue" url={salesUrl} />
            </div>
          </div>
          <div
            className={`col-12 d-flex justify-content-center align-items-center no-pointer`}
          >
            <div className={styles.bannerImages}>
              <Image src={heroImg} alt={"corporateHeroImg"} />
            </div>
          </div>
        </div>
      </div>

      <LogoSlider />

      <div className={styles.introduction_section}>
        <div className="max-m-auto">
          <div
            className={`${styles.second_row_title} text-center pb-3 pb-md-5`}
          >
            <DynamicHeading
              content={[
                {
                  title: "Built for CFOs, Loved by Teams ",
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
                    "From instant issuance to granular controls - corporate cards that do more.",
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
                    title: "One Platform. Total Visibility.",
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
                      "Real-time visibility, control, and insights that traditional bank-issued card portals simply can’t match.",
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
                      "Move beyond raw data. Leverage our advanced analytics to turn into actionable business insights.",
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
                  title: "RBI-Approved. Business-Ready. Powered by",
                  color: "color-black",
                },
                {
                  title: " Our PPI License.",
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
                      "From instant issuance to granular controls - corporate cards that do more.",
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
                    "Connect Corporate Cards with Expense Management for a Unified Experience. ",
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
    </>
  )
}

export default CorporateCards
