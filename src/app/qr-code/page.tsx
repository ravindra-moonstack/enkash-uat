import styles from "./page.module.scss"
import { Metadata } from "next"

// data
import {
  allInOnePolicyData,
  benifitsData,
  cardsData,
  managementCardData,
  paymentMethodData,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

// components
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import DynamicHeading from "@/src/components/dynamic-heading"
import FaqSection from "@/src/components/faq-section"
import CardStacking from "@/src/components/card-stacking"
import FeatureCard from "@/src/components/feature-card"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

// helpers
import { paymentSummary, mealCardImage } from "./img"

// utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "QR Code Payments: Pay with UPI QR Codes",
  description:
    "Generate dynamic or static QR codes for fast, secure, and contactless UPI payments. Perfect for retail, delivery, and offline collections—no hardware needed.",
  alternates: {
    canonical: `${process.env.URL}/qr-code/`,
  },
})
const salesUrl = getSalesUrl("/qr-code")
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

const QrCode = (): React.JSX.Element => {
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
            name: "QR Code",
            url: "/collect-payments/qr-code",
          },
        ]}
        subtitle={{
          text: "QR Codes",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Contactless Payments with UPI QR Code",
            color: "color-black",
          },
        ]}
        description={{
          text: "Generate unique QR codes to collect payments via any UPI app while tracking each transaction for your business.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Best Online Payment Solution"
        cards={benifitsData}
      />

      <StepsSection
        heading={[
          {
            text: "Accepting Payments via ",
            colorClass: "color-black",
          },
          {
            text: "QR Codes ",
            colorClass: "color-equity-blue",
          },
          {
            text: "was Never This Easy",
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
            title: "Why EnKash for Collecting ",
            color: "color-black",
          },
          {
            title: "QR Code Payments",
            color: "color-equity-blue",
          },
          {
            title: "?",
            color: "color-equity-blue",
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
                title: "Choose the Best QR Code for Your Business",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.sixth_row}>
        <div className={` max-w-auto`}>
          <DynamicHeading
            content={[
              {
                title: "EnKash",
                color: "color-black",
              },
              {
                title: " QR Code Features",
                color: "color-equity-blue",
              },
            ]}
            headingTag="h2"
            className="f-6 text-center  pb-md-5 pb-4"
          />

          <div className={styles.card_grid}>
            {paymentMethodData.map(({ icon, title, description }, i) => (
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

      <CtaSection
        title={"Ready To Simplify Your Collections?"}
        buttonText={"Get Started  Today "}
      />

      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other payment products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCardData}
      />
    </div>
  )
}

export default QrCode
