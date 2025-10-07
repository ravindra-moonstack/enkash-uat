import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import {
  allInOnePolicies,
  benifitsData,
  cardsData,
  managementCards,
  stackcardData,
} from "./data"
import faqData from "./faq-data"

//components

import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CardStacking from "@/src/components/card-stacking"
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import { StepsSection } from "@/src/components"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "Collection Reminder: Automate Payment Reminders",
  description:
    "Boost on-time collections with EnKash’s automated collection reminders. Send timely payment nudges via SMS, email, or WhatsApp and reduce manual follow-ups.",
  alternates: {
    canonical: `${process.env.URL}/collection-reminder/`,
  },
})

const salesUrl = getSalesUrl("/collection-reminder")

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

const CollectionReminders = (): React.JSX.Element => {
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
            name: "Collection Reminders",
            url: "/collection-reminder",
          },
        ]}
        subtitle={{
          text: "Collection Reminders",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Get Paid Instantly with Automated Collection Reminders",
            color: "color-black",
          },
        ]}
        description={{
          text: "Automated reminders using payment links via SMS, email, or WhatsApp can replace manual reminders and collect business payments.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Quick Payment Collection via Automated Payment Reminders"
        cards={benifitsData}
      />

      <StepsSection
        heading={[
          {
            text: "How to Setup EnKash Collection Reminders ",
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
            title: "Automated Reminders for Collection ",
            color: "color-black",
          },
        ]}
        items={allInOnePolicies}
        buttonUrl={salesUrl}
      />

      <div className={styles.card_stacking_row}>
        <div className={` max-w-auto  ${styles.section}`}>
          <CardStacking
            cards={cards}
            heading={[
              {
                title: "Collection Reminders for",
                color: "color-black",
              },
              {
                title: " All Business Types ",
                color: "color-equity-blue",
              },
            ]}
          />
        </div>
      </div>

      <CtaSection
        title={"Collect Payments Faster with Reminders"}
        buttonText={"Get Started Today"}
      />
      <FaqSection faqData={faqData} />

      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other collection products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCards}
      />
    </div>
  )
}

export default CollectionReminders
