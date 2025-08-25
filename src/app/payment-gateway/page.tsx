import Image from "next/image"
import styles from "./page.module.scss"
import {
  acceleratedGrowthData,
  dashboardData,
  integrationData,
  managementCardData,
  paymentMethodData,
  rankData,
  savingData,
  supportData,
} from "./data"
import faqData from "./faq-data"
import {
  DynamicHeading,
  LogoSlider,
  CustomBreadcrumb,
  PolicyCard,
  RectangleButton,
  ManagementCard,
  FaqSection,
} from "@/components"
import {
  blueArrow,
  groupIcon,
  paymentSummary,
  integration,
  paymenyMethod,
  dashboard,
  rank,
  support,
  leftHand,
  acceleratedGrowthImg,
  whiteArrow,
} from "."
import generateMetaData from "@/common/utils/metaData"
import { getSalesUrl } from "@/common/utils/getSalesUrl"
import { Metadata } from "next"


export const metadata: Metadata = generateMetaData({
  title: "Best Payment Gateway in India for SMBs and Startups",
  description:
    "Power your merchants with a Payment Gateway offering smooth checkouts, advanced fraud protection, and access to more customers.",
  alternates: {
    canonical: "https://www.enkash.com/payment-gateway/",
  },
})
const salesUrl = getSalesUrl("/payment-gateway")

const PaymentGateway = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.first_row} `}>
        <div className="max-w-auto">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 d-flex flex-column">
              <div className="d-flex pt-1">
                <CustomBreadcrumb
                  items={[
                    { name: "Home", url: "/" },
                    { name: "Products", url: "/products" },
                    {
                      name: "Payment Gateway",
                      url: "/products/payment-gateway",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex d-none flex-column flex-md-row `}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Payment Gateway",
                      color: "color-equity-blue underline",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
              <div
                className={`text-center text-md-start ${styles.first_row_content}  `}
              >
                <div className="d-flex flex-column   pt-4 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "India’s First Payment Gateway Built for SMBs",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h1"
                    className="f-7"
                  />
                </div>

                <div className="d-flex mt-3 mb-3 pe-5 text-center text-md-start ">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "The best payment gateway for a superior merchant experience.",
                        color: "color-black subHeading",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0"
                  />
                </div>

                <div className="d-flex flex-column align-items-center align-items-md-start">
                  <Image
                    src={groupIcon}
                    alt="card visual"
                    className={styles.group_logo}
                  />
                  <div
                    className={`${styles.first_row_button} d-flex flex-row  align-items-center`}
                  >
                    <div>
                      <RectangleButton
                        title="Get Started  "
                        theme="blue"
                        url={salesUrl}
                      />
                    </div>
                    <div>
                      <RectangleButton
                        title="API Doc"
                        theme="outline-blue"
                        url="https://docs.enkash.com/payment-gateway"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center d-md-flex">
              <div
                className={`${styles.right_img} position-relative w-100 h-100 d-flex`}
              >
                <Image
                  src={paymentSummary}
                  alt="card visual"
                  style={{ objectFit: "contain" }}
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <LogoSlider />
      </div>

      <div className={` ${styles.second_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32  align-items-center max-w-auto">
          <div className="d-inline justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Say Hello to a ",
                  color: "color-white",
                },
                {
                  title: "Smarter, Faster & Secure  ",
                  color: "color-white italic f-6",
                },
                {
                  title: "way to handle transactions",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-3 mb-3"
            />
          </div>

          <div className={` d-flex ${styles.section}`}>

            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "100%",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
                />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >

                <DynamicHeading
                  content={[
                    {
                      title: "Support",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "100%",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
                />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >

                <DynamicHeading
                  content={[
                    {
                      title: "Uptime",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "100+",
                      color: "color-white",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
                />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >

                <DynamicHeading
                  content={[
                    {
                      title: "Faster",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.third_row}>
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
                <RectangleButton
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
                  <RectangleButton
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
                <RectangleButton
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
                  <RectangleButton
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
                <RectangleButton
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
                  <RectangleButton
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

      <div className={`${styles.eigth_row}  `}>
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

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title:
                    "Discover the EnKash difference - Secure, Scalable and Seamless.",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 mb-3 mb-mb-0"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started Today "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />


    </div>
  )
}

export default PaymentGateway
