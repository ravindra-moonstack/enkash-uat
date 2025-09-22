import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  allInOnePolicyData,
  allProductSections,
  cardsData,
  managementCardData,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

//components
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import CommonButton from "@/src/components/buttons"
import PolicyCard from "@/src/components/policy-card"
import AllProducts from "@/src/components/all-products"
import ManagementCard from "@/src/components/management-card"

//helpers
import {
  groupIcon,
  paymentSummary,
  mealCardImage,
  activationIcon,
  realTimeIcon,
} from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Payment Page: Create Custom Branded Checkout Pages",
  description:
    "Design personalized payment pages with your brand logo, colors, and fields. Accept UPI, cards & more—no coding needed, easy to share and collect payments.",
  alternates: {
    canonical: `${process.env.URL}/payment-page/`,
  },
})
const salesUrl = getSalesUrl("/payment-page")
const showScroll = cardsData.length > 3
const mergedCards = allProductSections.flatMap((section) => section.items)
const cards = stackcardData.map((item, index) => ({
  content: (
    <AllInOnePolicy
      key={index}
      buttonText="Get Started"
      icon={item.icon}
      title={item.title}
      description={item.description}
      image={item.image}
      buttonUrl={salesUrl}
      maxImageHeight="300px"
    />
  ),
}))
const PaymentPage = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.hero_section} `}>
        <div className="max-w-auto">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 d-flex flex-column">
              <div className="d-flex">
                <CustomBreadcrumb
                  items={[
                    { name: "Home", url: "/" },
                    {
                      name: "Collect Payments",
                      url: "/products/collect-payments",
                    },
                    {
                      name: "Payment Page",
                      url: "/payment-page",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex text-center flex-column flex-md-row `}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Payment Page",
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
                <div className="d-flex pt-3 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Instant Online Payments with Custom  Payment Page",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h1"
                    className="f-7"
                  />
                </div>

                <div className="d-flex mt-3 mb-3 text-center text-md-start ">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Create professional, branded payment pages that enable secure and hassle-free online payment collection.",
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
                      <CommonButton
                        title="Get Started  "
                        theme="blue"
                        url={salesUrl}
                      />
                    </div>
                    <div>
                      <CommonButton
                        title="API Doc"
                        theme="outline-blue"
                        url="https://docs.enkash.com/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className={`${styles.right_img} position-relative ps-md-5`}>
                <Image
                  src={paymentSummary}
                  alt="card visual"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <LogoSlider />
      </div>

      <div className={`row ${styles.introduction_section} `}>
        <div className="d-flex justify-content-center  flex-column gap-32  max-w-auto">
          <div className="d-inline justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Collect Payments Directly on Your Page",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 mb-3 mb-md-0 "
            />
          </div>

          <div className={` d-flex ${styles.section}`}>
            <div className={` ${styles.card}`}>
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
              <div className={`py-2 text-center ${styles.innerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Fast",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
            <div className={` ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <Image src={activationIcon} alt="icon" />
              </div>
              <div className={`py-2 text-center ${styles.innerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Customizable",
                      color: "color-white",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
            </div>
            <div className={` ${styles.card}`}>
              <div className={` d-flex ${styles.outerCard}`}>
                <Image src={realTimeIcon} alt="icon" />
              </div>
              <div className={`py-2 text-center ${styles.innerCard}`}>
                <DynamicHeading
                  content={[
                    {
                      title: "Secure",
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

      <div className={styles.features_section}>
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "How to Setup EnKash Payment Pages",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <div
                className={` mt-md-5 ${
                  showScroll ? "overflow-auto scrollbar-thin" : ""
                }`}
                style={{
                  maxHeight: "400px",
                  direction: showScroll ? "rtl" : "ltr",
                }}
              >
                {cardsData.map(({ icon, title, description }, i) => (
                  <div
                    key={i}
                    style={{
                      direction: "ltr",
                    }}
                    className={styles.scrollCard}
                  >
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button} `}>
                <CommonButton
                  title="Get Started"
                  theme="outline-blue"
                  url={salesUrl}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div>
                <Image
                  src={mealCardImage}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.use_case_section}  `}>
        <div className="max-w-auto">
          <div className={`${styles.section}`}>
            <div className={`row  align-items-center `}>
              <div className={`${styles.title} text-center  `}>
                <div className={`text-center pb-4 pb-md-5`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Effortless Transactions, Secure ",
                        color: "color-equity-blue",
                      },
                      {
                        title: " Payments -  The EnKash Way",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
              </div>

              <div className={styles.allInOnePolicy}>
                {allInOnePolicyData.map((item, index) => (
                  <AllInOnePolicy
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    buttonUrl={salesUrl}
                    maxImageHeight={item.maxImageHeight}
                    reverse={item.reverse}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <CardStacking
            cards={cards}
            heading={[
              {
                title: "EnKash Payment Pages -",
                color: "color-black",
              },
              {
                title: " Built for Every Business Need",
                color: "color-equity-blue",
              },
            ]}
          />
        </div>
      </div>
      <div className={`${styles.slider_row} relative`}>
        <div className="max-w-auto">
          <div className={`${styles.title} row`}>
            <div className={`col-md-12 px-md-3`}>
              <DynamicHeading
                content={[
                  {
                    title: "EnKash Payment Pages Features for ",
                    color: "color-black",
                  },
                  {
                    title: "Secure Online Payment",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6 text-center"
              />
            </div>
          </div>
        </div>
        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div>

      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className=" text-center">
            <DynamicHeading
              content={[
                {
                  title: "Turn Clicks Into Transactions",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 mb-3 "
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <CommonButton
              title="Get Started  Today "
              theme="outline-blue"
              arrow
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center  pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Check out ",
                  color: "color-black",
                },
                {
                  title: "other collection products",
                  color: "color-equity-blue",
                },
                {
                  title: " at EnKash",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>

          <div className="row g-3 pb-4">
            {managementCardData.map((item, index) => (
              <div key={index} className="col-12 col-md-4">
                <ManagementCard
                  titleHtml={item.titleHtml}
                  description={item.description}
                  cardImage={item.cardImage}
                  linkUrl={item.linkUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
