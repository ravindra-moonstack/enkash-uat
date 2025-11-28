import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  acceleratedGrowthData,
  dashboardData,
  integrationData,
  introductionCards,
  managementCardData,
  paymentMethodData,
  rankData,
  savingData,
  supportData,
} from "./data"
import faqData from "./faq-data"

//components
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import FaqSection from "@/src/components/faq-section"
import CommonButton from "@/src/components/buttons"
import PolicyCard from "@/src/components/policy-card"
import DynamicHeading from "@/src/components/dynamic-heading"

//helpers
import {
  paymentSummary,
  integration,
  paymenyMethod,
  dashboard,
  rank,
  support,
  leftHand,
  acceleratedGrowthImg,
} from "./img"
import HeroSection from "@/src/components/sections/hero-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"
import BlogSection from "@/src/components/sections/blog-section"

//utils

export const metadata: Metadata = generateMetaData({
  title: "Best Payment Gateway in India for SMBs and Startups",
  description:
    "Power your merchants with a Payment Gateway offering smooth checkouts, advanced fraud protection, and access to more customers.",
  alternates: {
    canonical: `${process.env.URL}/payment-gateway`,
  },
})
const salesUrl = getSalesUrl("/payment-gateway")

const PaymentGateway = (): React.JSX.Element => {
  return (
    <div className={`color-white`}>
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

      <div className={styles.introduction_section}>
        <div className="d-flex justify-content-center flex-column gap-32 align-items-center max-w-auto">
          <DynamicHeading
            content={[
              { title: "Say Hello to a ", color: "color-white" },
              {
                title: "Smarter, Faster & Secure  ",
                color: "color-white italic f-6",
              },
              { title: "way to handle transactions", color: "color-white" },
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
                    className="f-6 title-adaptive"
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

      <div className={styles.features_section}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center`}>
            <DynamicHeading
              content={[
                {
                  title: "Built for SMBs, ",
                  color: "color-equity-blue",
                },
                {
                  title: "Trusted by Merchants",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>

          {/* Section 1 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-0 pe-md-5 order-1 order-md-1">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Developer First Integration ",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h4"
                  className="f-5"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Built for developers, our robust SDKs, APIs, and plugins support major languages and platforms",
                      color: "color-main-grey",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
              <div className={` ${styles.payment_section}`}>
                {integrationData.map(({ icon, title, description }, i) => (
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
                <CommonButton
                  title="Get Started  Today "
                  theme="outline-blue"
                  url={salesUrl}
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 ${styles.third_container} order-2 order-md-2`}
            >
              <div>
                <Image
                  src={integration}
                  alt="card background"
                  className="position-relative w-100 h-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className={`bg-color-soft-mint ${styles.section}`}>
            <div className={`row pb-[50px] pt-[50px] align-items-center `}>
              <div
                className={`col-md-6 ${styles.third_container} order-2 order-md-1`}
              >
                <div>
                  <Image
                    src={paymenyMethod}
                    alt="card background"
                    className="position-relative w-100 h-100 mh-550 object-fit-contain"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-2">
                <div className={`d-flex flex-column ${styles.subtitle}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Accept All Payment Methods ",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h4"
                    className="f-5"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Provide your customers with the freedom to choose how they pay with several online payment methods. ",
                        color: "color-main-grey",
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
                    gap: "32px",
                  }}
                >
                  {paymentMethodData.map(({ icon, title, description }, i) => (
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
                  <CommonButton
                    title="Get Started Today "
                    theme="outline-blue"
                    url={salesUrl}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Section 3 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-0 pe-md-5 order-1 order-md-1">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Powerful Dashboards to Drive Decisions",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h4"
                  className="f-5"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Get detailed statistics and reports on payments, settlements, refunds, and much more for informed decision-making.",
                      color: "color-main-grey",
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
                  gap: "32px",
                }}
              >
                {dashboardData.map(({ icon, title, description }, i) => (
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
                <CommonButton
                  title="Get Started Today "
                  theme="outline-blue"
                  url={salesUrl}
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 d-flex my-md-5 my-3 justify-content-end ${styles.third_container} order-2 order-md-2`}
            >
              <div>
                <Image
                  src={dashboard}
                  alt="card background"
                  className="position-relative w-100 h-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className={`bg-color-soft-mint ${styles.section}`}>
            <div className={`row  pb-[50px] pt-[50px] align-items-center `}>
              <div
                className={`col-md-6 col-12 d-flex my-md-5 my-3 justify-content-start ${styles.third_container} order-2 order-md-1`}
              >
                <div>
                  <Image
                    src={rank}
                    alt="card background"
                    className="position-relative w-100 h-100 mh-550 object-fit-contain"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-2">
                <div className={`d-flex flex-column ${styles.subtitle}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Bank Grade Security",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h4"
                    className="f-5 mb-2"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Enjoy enterprise-grade security to reassure your customers of secure and reliable payment transactions.",
                        color: "color-main-grey",
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
                    gap: "32px",
                  }}
                >
                  {rankData.map(({ icon, title, description }, i) => (
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
                  <CommonButton
                    title="Get Started Today "
                    theme="outline-blue"
                    url={salesUrl}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-0 pe-md-5 order-1 order-md-1">
              <div className={`d-flex flex-column ${styles.subtitle}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "100% Lifetime Support ",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h4"
                  className="f-5 mb-2"
                />
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Dedicated Relationship Managers: Get personalized assistance from experts who understand your business and growth goals.",
                      color: "color-main-grey",
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
                  gap: "32px",
                }}
              >
                {supportData.map(({ icon, title, description }, i) => (
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
                <CommonButton
                  title="Get Started Today "
                  theme="outline-blue"
                  url={salesUrl}
                />
              </div>
            </div>
            <div
              className={`col-md-6 col-12 d-flex  justify-content-end ${styles.third_container} order-2 order-md-2`}
            >
              <div>
                <Image
                  src={support}
                  alt="card background"
                  className="position-relative w-100 h-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className={`bg-color-soft-mint ${styles.section}`}>
            <div className={`row pb-2 pb-md-5  position-relative `}>
              <div
                className={`col-md-6 col-12 ${styles.third_container} order-2 order-md-1`}
              >
                <div className={`${styles.custom_bottom_offset}`}>
                  <Image
                    src={leftHand}
                    alt="card background"
                    className="position-relative w-100 h-100 mh-550 object-fit-contain"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 px-0 px-md-5 order-1 order-md-2">
                <div className={`d-flex flex-column ${styles.subtitle}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Advanced Checkout and Card Saving",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h4"
                    className="f-5 mb-2"
                  />
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Enhance your checkout experience with features designed for convenience and efficiency:",
                        color: "color-main-grey",
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
                    gap: "32px",
                  }}
                >
                  {savingData.map(({ icon, title, description }, i) => (
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
                  <CommonButton
                    title="Get Started Today "
                    theme="outline-blue"
                    url={salesUrl}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.integration_section}  `}>
        <div className="max-w-auto w-100">
          <div className={`${styles.section} row`}>
            <div
              className={`${styles.title} text-start  d-flex flex-column pb-4 pb-md-5  col-md-7`}
            >
              <DynamicHeading
                content={[
                  {
                    title: "Best Payment Gateway in India for ",
                    color: "color-black",
                  },
                  {
                    title: "Accelerated Growth ",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>

            <div className="col-md-6 ">
              {acceleratedGrowthData.map(({ icon, title }, i) => (
                <div key={i} style={{ direction: "ltr" }}>
                  <div className="d-flex align-items-start gap-3 py-3 w-4 h-4">
                    <div
                      className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <Image src={icon} alt="icon" />
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <DynamicHeading
                        content={[
                          {
                            title: title,
                            color: "color-black",
                          },
                        ]}
                        headingTag="h5"
                        className="f-5"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              <div className={styles.faq_bg}>
                <Image
                  src={acceleratedGrowthImg}
                  alt="background image"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title={
          "Discover the EnKash difference - Secure, Scalable and Seamless."
        }
        buttonText={"Get Started Today"}
      />

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
