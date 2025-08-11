import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"
import {
  allProductSections,
  cardType,
  intantActionData,
  spendAnalyticsData,
} from "./data"

import { Header, Footer, FAQHtml } from "@/components"

import {
  blueArrow,
  whiteArrow,
  mealCardImage,
  instantActionImg,
  heroCardImg,
  podiumImage,
  realTimeExpenseIcon,
  realTimeExpense,
  fraudProtectionIcon,
  fraudProtection,
  streamlinedReimbursementIcon,
  streamlinedReimbursement,
  costControlSavingsIcon,
  costControlSavings,
  wideAcceptanceNetworkIcon,
  wideAcceptanceNetwork,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import PolicyCard from "@/components/policyCard/policyCard"
import faqData from "./faq-data"
import LogoSlider from "@/components/logo-slider/logo-slider"
import CardProduct from "@/components/card-product/card-product"
import AllProducts from "@/components/all-products/all-products"
import StepCard from "@/components/stepCard/stepCard"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import CardStacking from "@/components/cardStacking/cardStacking"

// const showScroll = cardsData.length > 3
const mergedCards = allProductSections.flatMap((section) => section.items)
const cards = [
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          buttonText="Get Started"
          icon={realTimeExpenseIcon}
          title="Reduce Business Costs with Smarter Payment Solutions"
          description="Save costs by eliminating the need for physical cards, including production and maintenance fees. Advanced fraud control features minimize the risk of unauthorized transactions, ensuring secure financial operations without additional expenses."
          image={realTimeExpense}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          buttonText="Get Started"
          icon={fraudProtectionIcon}
          title="Stay in Control with Real-Time Expense Insights"
          description="Monitor every transaction in real-time with our intuitive dashboard. Access detailed insights into spending trends, helping your business optimize budgets and make informed financial decisions."
          image={fraudProtection}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          buttonText="Get Started"
          icon={streamlinedReimbursementIcon}
          title="Tailor Your Virtual Card to Fit Your Needs"
          description="Design virtual cards tailored for specific needs such as vendor payments, SaaS subscriptions, or travel expenses. Set individual or departmental spending limits and usage policies to ensure compliance and efficiency."
          image={streamlinedReimbursement}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          buttonText="Get Started"
          icon={costControlSavingsIcon}
          title="Strengthen Vendor Trust with Timely Payments"
          description="Ensure timely and secure payments to vendors, fostering trust and better business terms. Streamlined payment processes enable quicker transactions, enhancing vendor satisfaction."
          image={costControlSavings}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          buttonText="Get Started"
          icon={wideAcceptanceNetworkIcon}
          title="No Expense Oversight with One Dashboard"
          description="Easily manage multiple cards through a centralized, user-friendly interface. Take immediate action by monitoring, blocking, or canceling cards, all while maintaining full control over business expenses."
          image={wideAcceptanceNetwork}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
        />
      </>
    ),
  },
]
const VirtualCards = (): React.JSX.Element => {
  return (
    <div className={`color-white  ${styles.home_container}`}>
      <Header utmSource="expense_management" />
      <TalkToSales />
      <div className={`${styles.first_row}`}>
        <div className="max-w-auto ">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Corporate Cards ", url: "/corporate-cards" },
                {
                  name: "Virtual Card",
                  url: "/corporate-cards/virtual-card",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Virtual Card",
                  color: "color-equity-blue underline",
                },
              ]}
              headingTag="p"
              className=""
            />

            <div className="d-flex  flex-column justify-content-center align-items-center">
              <DynamicHeading
                content={[
                  {
                    title: "Secure and Efficient Payments with",
                    color: "color-black italic f-3 d-block",
                  },
                  {
                    title: "Virtual Prepaid Card*",
                    color: "color-black",
                  },
                ]}
                headingTag="h1"
                className="f-7 mb-3"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Empower your organization to control, track, and optimize spending like never before.",
                    color: "color-black subHeading",
                  },
                ]}
                headingTag="p"
                className=" mb-3"
              />
            </div>
            <div className={styles.button_wrapper}>
              <RectangleButton title="Get Started" theme="blue" url="/sales" />
            </div>
          </div>
        </div>
        <div className=" col-12 pt-5 ">
          <div className={styles.lottie_container}>
            {" "}
            <Image src={heroCardImg} alt="card background" className=" " />
          </div>
          <div className={styles.lottie_container_bottom}>
            {" "}
            <Image
              src={podiumImage}
              alt="card background"
              className="position-absolute "
            />
          </div>
        </div>
      </div>

      <div>
        <LogoSlider />
      </div>

      <div className={`${styles.action_row} bg-white `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-md-5 pb-3`}>
            <DynamicHeading
              content={[
                {
                  title: "How to Set Up Virtual Prepaid Cards ",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 pe-md-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {intantActionData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <StepCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get started "
                  theme="border-gray"
                  actionImage={blueArrow}
                  hoverImage={whiteArrow}
                  url="/sales"
                  className="d-flex justify-content-between align-items-center"
                />
              </div>
            </div>
            <div className={`col-md-6 col-12 `}>
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
      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <>
            <div className={`${styles.title} text-center `}>
              <DynamicHeading
                content={[
                  {
                    title: "Unlock  ",
                    color: "color-black",
                  },
                  {
                    title: "Savings ",
                    color: "color-equity-blue",
                  },
                  {
                    title: "on Every Mile",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>

            <CardStacking cards={cards} />
          </>
        </div>
      </div>

      <div className={`${styles.second_row} `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-2 pb-md-5`}>
            <div
              className={` flex-column justify-content-center align-items-center pb-3 `}
            >
              <DynamicHeading
                content={[
                  {
                    title: "Use Cases for Virtual ",
                    color: "color-black",
                  },
                  {
                    title: "Prepaid Cards ",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
          </div>
          <div className={`row align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12  pe-md-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                }}
              >
                {spendAnalyticsData.map(({ icon, title, description }, i) => (
                  <div key={i} style={{ direction: "ltr" }}>
                    <PolicyCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={`col-md-6 col-12 d-flex `}>
              <div>
                <Image
                  src={instantActionImg}
                  alt="card background"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fifth_row} relative`}>
        <div className={`${styles.title} text-center  max-w-auto`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <DynamicHeading
              content={[
                {
                  title: "The EnKash Advantage - Why Businesses Trust   ",
                  color: "color-black",
                },
                {
                  title: "Virtual Prepaid Cards ",
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
        </div>
        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div>

      <div className={`${styles.faq_new_row}  relative`}>
        <div className={`${styles.faqSection} text-start max-w-auto `}>
          <div className={`${styles.title} text-start  pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Frequently Asked Questions (",
                  color: "color-black",
                },
                {
                  title: "FAQs",
                  color: "color-equity-blue",
                },
                {
                  title: ")",
                  color: "color-black",
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
                  title: "Have more questions?",
                  color: "color-dark-grey subheading",
                },
              ]}
              headingTag="p"
              className="mb-0"
            />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div className="mt-3 d-none d-md-block">
                <div className="connectWithUs">
                  <Link href="/contact-us">
                    <DynamicHeading
                      content={[
                        {
                          title: "Connect with us",
                          color: "color-equity-blue ",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 f-5"
                    />
                    <Image
                      src={blueArrow}
                      alt="blue Arrow"
                      width={15}
                      height={15}
                      className="ms-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${styles.faqData}`}>
              <FAQHtml faqData={faqData} />
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
                  title: "Your Business, Your Cards –",
                  color: "color-black",
                },
                {
                  title: "Tailored by EnKash ",
                  color: "color-equity-blue",
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
      <Footer />
    </div>
  )
}

export default VirtualCards
