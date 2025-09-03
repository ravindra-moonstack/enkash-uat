import Image from "next/image"
import styles from "./page.module.scss"
import {
  allInOnePolicies,
  cardsData,
  managementCards,
  stackcardData,
} from "./data"
import faqData from "./faq-data"
import {
  DynamicHeading,
  LogoSlider,
  CustomBreadcrumb,
  PolicyCard,
  RectangleButton,
  ManagementCard,
  AllInOnePolicy,
  FaqSection,
  CardStacking,
} from "@/src/components"
import {
  blueArrow,
  groupIcon,
  paymentSummary,
  whiteArrow,
  mealCardImage,
  activationIcon,
  hundredPercentIcon,
  creationIcon,
} from "."

import { Metadata } from "next"
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: " eNACH Solution for Recurring Payments",
  description:
    "Enable automated recurring debit via eNACH mandates. EnKash helps businesses simplify collections, reduce payment failures, and improve cash flow predictability.",
  alternates: {
    canonical: `${process.env.URL}/e-nach/`,
  },
})
const salesUrl = getSalesUrl("/e-nach")

const showScroll = cardsData.length > 3
const cards = stackcardData.map((item, index) => ({
  color: item.color,
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
const eNACH = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.first_row} `}>
        <div className="max-w-auto">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-6 d-flex flex-column">
              <div className="d-flex">
                <CustomBreadcrumb
                  items={[
                    { name: "Home", url: "/" },
                    {
                      name: "Collect Payments",
                      url: "products/collect-payments",
                    },
                    {
                      name: "e-NACH",
                      url: "/e-nach",
                    },
                  ]}
                />
              </div>
              <div
                className={`${styles.first_row_title} d-md-flex d-none text-center flex-column flex-md-row `}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "e-NACH",
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
                <div className="d-flex flex-column pt-4 pt-md-0">
                  <DynamicHeading
                    content={[
                      {
                        title: "Automate Recurring Payments with EnKash eNACH",
                        color: "color-black",
                      },
                    ]}
                    headingTag="h1"
                    className="f-7"
                  />
                </div>

                <div className="d-flex mt-3 mb-3  text-center text-md-start ">
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Effortlessly automate recurring collections with EnKash eNACH mandate. Set up fast, secure digital mandates and seamlessly collect large recurring payments.",
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
                  style={{
                    objectFit: "contain",
                    maxHeight: "672px",
                  }}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <LogoSlider />
      </div>

      <div className={`row ${styles.second_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32  max-w-auto">
          <div className="d-inline justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Powering Recurring Payment Collection",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-3 pb-md-0"
            />
          </div>

          <div className={` d-flex ${styles.section}`}>
            <div
              className={` d-flex flex-column justify-content-center align-items-center ${styles.card}`}
            >
              <div className={` d-flex ${styles.outerCard}`}>
                <Image src={creationIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Quick Mandate Creation",
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
              <div className={`d-flex ${styles.outerCard}`}>
                <Image src={activationIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Easy Subscription Management",
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
                <Image src={hundredPercentIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Instant Payment Settlement",
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
        <div className={`relative max-w-auto`}>
          <div className={`${styles.title} text-center pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "How to ",
                  color: "color-black",
                },
                {
                  title: "Set Up eNACH ",
                  color: "color-equity-blue",
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
                <RectangleButton
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
                  className="w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row}  `}>
        <div className="max-w-auto">
          <div className={`${styles.section}`}>
            <div className={`row  align-items-center gap-3`}>
              <div className={`${styles.title} text-center `}>
                <div
                  className={`flex-column justify-content-center align-items-center pb-md-4 pb-1`}
                >
                  <DynamicHeading
                    content={[
                      {
                        title: "Digital Payment System ",
                        color: "color-black",
                      },
                      {
                        title: "for Recurring Payments",
                        color: "color-equity-blue",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6"
                  />
                </div>
              </div>

              {allInOnePolicies.map((policy, index) => (
                <AllInOnePolicy
                  key={index}
                  icon={policy.icon}
                  title={policy.title}
                  description={policy.description}
                  image={policy.image}
                  buttonUrl={salesUrl}
                  maxImageHeight={policy.maxImageHeight}
                  reverse={policy.reverse}
                />
              ))}
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
                title: "Activate eNACH & Keep the Cash Flowing",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>
      <div className={`${styles.fifth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Ready to simplify your collections?",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 pb-3 pb-md-0"
            />
          </div>
          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started Today!"
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url={salesUrl}
            />
          </div>
        </div>
      </div>

      <FaqSection faqData={faqData} />

      <div className={styles.other_products}>
        <div className="max-w-auto">
          <div
            className={`${styles.title} text-start text-md-center pb-4 pb-md-5`}
          >
            <DynamicHeading
              content={[
                {
                  title: "Check out ",
                  color: "color-black",
                },
                {
                  title: "other payment products",
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
            {managementCards.map(
              ({ titleHtml, description, cardImage, linkUrl }, index) => (
                <div key={index} className="col-12 col-md-4">
                  <ManagementCard
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
    </div>
  )
}

export default eNACH
