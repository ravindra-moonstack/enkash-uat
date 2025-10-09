import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import { cardsData, paymentMethodData, payoutPolicies } from "./data"
import faqData from "./faq-data"

//components
import DynamicHeading from "@/components/dynamic-heading"
import FaqSection from "@/components/faq-section"
import BankLogoSlider from "@/components/banking-slider"
import FeatureCard from "@/components/feature-card"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"

//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import { getSalesUrl } from "@/utils/getSalesUrl"
import generateMetaData from "@/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Connected Banking: For Faster Payouts",
  description:
    "Simplify business banking with EnKash’s Seamless Banking solution. Enable faster transactions, smooth integrations, and unified banking on one smart platform.",
  alternates: {
    canonical: `${process.env.URL}/connected-banking/`,
  },
})
const salesUrl = getSalesUrl("/connected-banking")

const ConnectedBanking = (): React.JSX.Element => {
  //

  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Collect Payments",
            url: "products/collect-payments",
          },
          {
            name: "Connected Banking",
            url: "/connected-banking",
          },
        ]}
        subtitle={{
          text: "Connected Banking",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Power Up Payouts with Connected Banking",
            color: "color-black",
          },
        ]}
        description={{
          text: "Link your existing bank accounts directly, automate reconciliation, and initiate payouts in real time without changing your banking partner or loading a wallet.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <StepsSection
        heading={[
          {
            text: "How Connected Banking Works ",
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
            title: "Here’s What You Unlock with ",
            color: "color-black",
          },
          {
            title: "Connected Banking ",
            color: "color-equity-blue",
          },
        ]}
        items={payoutPolicies}
        buttonUrl={salesUrl}
      />

      <BankLogoSlider />

      <div className={styles.sixth_row}>
        <div className={` max-w-auto`}>
          <div className={`${styles.title} text-center  pb-4 pb-md-5`}>
            <DynamicHeading
              content={[
                {
                  title: "Built for Control, Powered by Intelligence ",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>

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
        title={"Ready to Connect Your Banks the Smarter Way?"}
        buttonText={"Get Started Today"}
      />

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default ConnectedBanking
