import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"
import {
  allProductSections,
  cardData,
  cardType,
  intantActionData,
} from "./data"

import { Header, Heading, Footer, FAQHtml } from "@/components"

import {
  blueArrow,
  whiteArrow,
  mealCardImage,
  heroCardImg,
  realTimeExpenseIcon,
  realTimeExpense,
  fraudProtectionIcon,
  fraudProtection,
  streamlinedReimbursementIcon,
  streamlinedReimbursement,
  costControlSavingsIcon,
  costControlSavings,
} from "."

import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import faqData from "./faq-data"
import LogoSlider from "@/components/logo-slider/logo-slider"
import CardProduct from "@/components/card-product/card-product"
import AllProducts from "@/components/all-products/all-products"
import StepCard from "@/components/stepCard/stepCard"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import CardStacking from "@/components/cardStacking/cardStacking"

// const showScroll = cardsData.length > 3
const mergedCards = allProductSections.flatMap((section) => section.items)
const cards = [
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={realTimeExpenseIcon}
          title="Instant Actions. Full Control."
          description="Manage your cards on the spot—activate, disable, or adjust without any effort using our robust corporate card management system."
          image={realTimeExpense}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
          buttonText="Get started today"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={fraudProtectionIcon}
          title="Enhanced Security"
          description="Protect your business from fraud with instant deactivation and real-time alerts."
          image={fraudProtection}
          buttonUrl="/sales"
          maxImageHeight="300px"
          buttonText="Get started today"
        />
      </>
    ),
  },
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={streamlinedReimbursementIcon}
          title="Smarter Expense Tracking"
          description="Get a clear view of every transaction, categorize spends, and avoid overspending."
          image={streamlinedReimbursement}
          buttonUrl="/sales/?source=expense_management"
          maxImageHeight="300px"
          buttonText="Get started today"
        />
      </>
    ),
  },
  {
    color: "#eee",
    content: (
      <>
        <AllInOnePolicy
          icon={costControlSavingsIcon}
          title="Streamlined Workflows"
          description="Manage all card-related tasks from a single, centralized dashboard, saving time and effort."
          image={costControlSavings}
          buttonUrl="/sales"
          maxImageHeight="300px"
          buttonText="Get started today"
        />
      </>
    ),
  },
]
const InstantCardManagement = (): React.JSX.Element => {
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
                  name: "Instant Card Management",
                  url: "/corporate-cards/instant-card-management",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Instant Card Management",
                  color: "color-equity-blue underline",
                },
              ]}
              headingTag="p"
              className="mb-2"
            />

            <div className="d-flex  flex-column text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Take Charge of Your Cards",
                    color: "color-black italic f-3 d-block",
                  },
                  {
                    title: "In Real Time",
                    color: "color-black",
                  },
                ]}
                headingTag="h1"
                className="mb-2 f-7"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "One click to block lost cards, manage permissions, and stay secure with EnKash’s advanced card management system",
                    color: "color-black subHeading",
                  },
                ]}
                headingTag="p"
                className=""
              />
            </div>
            <div className={styles.button_wrapper}>
              <RectangleButton
                title="Get Started"
                theme="blue"
                url="/sales/?source=expense_management"
              />
            </div>
          </div>
        </div>
        <div className=" col-12 pt-5 ">
          <div className={styles.lottie_container}>
            {" "}
            <Image src={heroCardImg} alt="card background" className=" " />
          </div>
        </div>
      </div>

      <div>
        <LogoSlider />
      </div>
      <div className={styles.second_row}>
        <div className="max-m-auto">
          <div
            className={`${styles.second_row_title} text-center pb-3 pb-md-5`}
          >
            <DynamicHeading
              content={[
                {
                  title: "Best Gift Cards Online",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>
          <div className={`d-flex  flex-wrap  ${styles.section}`}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column justify-content-center align-items-center ${styles.card}`}
              >
                {item.icon && (
                  <Image src={item.icon} alt="icon" width={28} height={28} />
                )}

                <Heading
                  title={item.title}
                  color="main-grey"
                  size="h7"
                  weight="4"
                  useH1TagInHtml={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.action_row} bg-white  `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-md-5 pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "How To Get Started with ",
                  color: "color-black",
                },
                {
                  title: "Card Management",
                  color: "color-equity-blue",
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
                  url="/sales/?source=expense_management"
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
                    title: "Control your cards end-to-end from ",
                    color: "color-black",
                  },
                  {
                    title: "a single dashboard",
                    color: "color-equity-blue",
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

      <div className={`${styles.fifth_row} relative`}>
        <div className={`${styles.title} text-center max-w-auto`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <DynamicHeading
              content={[
                {
                  title: "Key Features of ",
                  color: "color-black",
                },
                {
                  title: "Instant Card Management ",
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

      <div className={`${styles.sixth_row} `}>
        <div className="d-flex justify-content-center  flex-column gap-32   align-items-center max-w-auto">
          <div className="d-flex justify-content-center   flex-column gap-4 align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Explore our customizable instant management cards!",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Get Started Today "
              theme="outline-blue"
              actionImage={blueArrow}
              hoverImage={whiteArrow}
              url="/sales/?source=expense_management"
            />
          </div>
        </div>
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
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div>
              <div>
                <DynamicHeading
                  content={[
                    {
                      title: "Have more questions?",
                      color: "color-dark-grey subHeading",
                    },
                  ]}
                  headingTag="p"
                  className="mb-0"
                />
              </div>
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
                  title: "Choose",
                  color: "color-black",
                },
                {
                  title: " the Right Card",
                  color: "color-equity-blue",
                },
                {
                  title: " for Every Use Case",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row g-3 pb-4">
            {cardType.map(({ titleHtml, description, cardImage }, index) => (
              <div key={index} className="col-12 col-md-4">
                <CardProduct
                  titleHtml={titleHtml}
                  description={description}
                  cardImage={cardImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default InstantCardManagement
