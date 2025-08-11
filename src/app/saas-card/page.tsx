import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"
import { allProductSections, cardType, intantActionData } from "./data"
import { Header, Footer, FAQHtml } from "@/components"
import {
  blueArrow,
  whiteArrow,
  mealCardImage,
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
import CardStacking from "@/components/cardStacking/cardStacking"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"

const mergedCards = allProductSections.flatMap((section) => section.items)
const cards = [
  {
    color: "#fff",
    content: (
      <>
        <AllInOnePolicy
          icon={realTimeExpenseIcon}
          title="Seamless Integration with Your SaaS Stack"
          description="EnKash works effortlessly with all leading, IT-approved tools, giving you unified control and valuable insights across your entire SaaS ecosystem."
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
          icon={fraudProtectionIcon}
          title="Single Dashboard Management"
          description="Stay on top of all your recurring expenses from a single platform. Your subscription spend, past payments, renewal dates, and automated reminders can be managed from the same dashboard."
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
          icon={streamlinedReimbursementIcon}
          title="Smarter Decisions, Backed by Data"
          description="EnKash SaaS Cards give real-time insights into all your SaaS spends, enabling faster, more informed decisions that drive your business forward."
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
          icon={costControlSavingsIcon}
          title="Complete Control, Zero Surprises"
          description="With EnKash, effortlessly monitor, analyze, and manage your corporate SaaS expenses while ensuring every spend stays compliant with your internal policies."
          image={costControlSavings}
          buttonUrl="/sales"
          maxImageHeight="300px"
        />
      </>
    ),
  },
]
const SaasCards = (): React.JSX.Element => {
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
                  name: "Saas Card",
                  url: "/corporate-cards/saas-card",
                },
              ]}
            />
          </div>
          <div className={`${styles.title} col-12 `}>
            <DynamicHeading
              content={[
                {
                  title: "Saas Card",
                  color: "color-equity-blue underline",
                },
              ]}
              headingTag="p"
              className=""
            />

            <div className="d-flex  flex-column text-center">
              <DynamicHeading
                content={[
                  {
                    title: "SaaS Cards: Designed to manage, monitor, and",
                    color: "color-black italic f-3 d-block",
                  },
                  {
                    title: "master your SaaS spends.",
                    color: "color-black",
                  },
                ]}
                headingTag="h1"
                className="mb-2"
              />
            </div>

            <div className="d-inline text-center">
              <DynamicHeading
                content={[
                  {
                    title:
                      "Automate your SaaS business subscriptions for better expense control and auto-renewal.",
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

      <div className={`${styles.action_row} bg-white  `}>
        <div className="max-w-auto">
          <div className={`${styles.title} text-center pb-md-5 pb-5`}>
            <DynamicHeading
              content={[
                {
                  title: "How To Get Started with SaaS Cards",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className={`row bg-white align-items-center ${styles.section}`}>
            <div className="col-md-6 col-12 px-md-5">
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
                    title: "SaaS Cards for ",
                    color: "color-black",
                  },
                  {
                    title: "Smooth Subscription Services ",
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
        <div className={`${styles.title} text-center  max-w-auto`}>
          <div
            className={` flex-column justify-content-center align-items-center pb-3  d-inline`}
          >
            <DynamicHeading
              content={[
                {
                  title: "Key Features of SaaS Card ",
                  color: "color-black",
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
                  title:
                    "Discover the EnKash difference - Secure, Scalable and Seamless. ",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5"
            />
          </div>

          <div className={`${styles.get_started_button} `}>
            <RectangleButton
              title="Try for Yourself"
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
                  title: "Choose ",
                  color: "color-black",
                },
                {
                  title: "the Right Card ",
                  color: "color-equity-blue",
                },
                {
                  title: "for Every Use Case",
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

export default SaasCards
