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
import DynamicHeading from "@/src/components/dynamic-heading"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"

//helpers
import {
  paymentSummary,
  mealCardImage,
  activationIcon,
  realTimeIcon,
} from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import SliderSection from "@/src/components/sections/slider-section"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

export const metadata: Metadata = generateMetaData({
  title: "Payment Page: Create Custom Branded Checkout Pages",
  description:
    "Design personalized payment pages with your brand logo, colors, and fields. Accept UPI, cards & more—no coding needed, easy to share and collect payments.",
  alternates: {
    canonical: `${process.env.URL}/payment-page`,
  },
})
const salesUrl = getSalesUrl("/payment-page")

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
    <div className={`color-white `}>
      <HeroSection
        breadcrumbs={[
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
        subtitle={{
          text: "Payment Page",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Instant Online Payments with Custom  Payment Page",
            color: "color-black",
          },
        ]}
        description={{
          text: "Create professional, branded payment pages that enable secure and hassle-free online payment collection.",
        }}
        button={{
          title: "Get Started",
          url: salesUrl,
          theme: "blue",
          apiUrl: "https://docs.enkash.com/",
        }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

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

      <StepsSection
        heading={[
          {
            text: "How to Setup EnKash Payment Pages ",
            colorClass: "color-black",
          },
        ]}
        steps={cardsData}
        button={{
          title: "Get started",
          theme: "outline-blue",
        }}
        image={{
          src: mealCardImage,
          alt: "card background",
        }}
      />

      <UseCaseSection
        heading={[
          {
            title: "Effortless Transactions, Secure ",
            color: "color-equity-blue",
          },
          {
            title: " Payments -  The EnKash Way",
            color: "color-black",
          },
        ]}
        items={allInOnePolicyData}
        buttonUrl={salesUrl}
      />

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

      <SliderSection
        headingContent={[
          {
            title: "EnKash Payment Pages Features for ",
            color: "color-black",
          },
          {
            title: "Secure Online Payment",
            color: "color-equity-blue",
          },
        ]}
        productsData={mergedCards}
        productsTitle="All Features"
        productsSubtitle="Combine all use cases"
      />

      <CtaSection
        title={"Turn Clicks Into Transactions"}
        buttonText={"Get Started  Today "}
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
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
        cards={managementCardData}
      />
    </div>
  )
}

export default PaymentPage
