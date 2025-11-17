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
import AllInOnePolicy from "@/components/all-in-one-policy"
import CardStacking from "@/components/card-stacking"
import FaqSection from "@/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import CoreBenefitsSection from "@/src/components/sections/core-benifits-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"

//helpers
import { paymentSummary, mealCardImage } from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import BlogSection from "@/src/components/sections/blog-section"

export const metadata: Metadata = generateMetaData({
  title: " eNACH Solution for Recurring Payments",
  description:
    "Enable automated recurring debit via eNACH mandates. EnKash helps businesses simplify collections, reduce payment failures, and improve cash flow predictability.",
  alternates: {
    canonical: `${process.env.URL}/e-nach`,
  },
})
const salesUrl = getSalesUrl("/e-nach")

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

const ENACH = (): React.JSX.Element => {
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
            name: "e-NACH",
            url: "/e-nach",
          },
        ]}
        subtitle={{
          text: "e-NACH",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Automate Recurring Payments with EnKash eNACH",
            color: "color-black",
          },
        ]}
        description={{
          text: "Effortlessly automate recurring collections with EnKash eNACH mandate. Set up fast, secure digital mandates and seamlessly collect large recurring payments.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <CoreBenefitsSection
        sectionTitle="Powering Recurring Payment Collection"
        cards={benifitsData}
      />

      <StepsSection
        heading={[
          {
            text: "How to ",
            colorClass: "color-black",
          },
          {
            text: "Set Up eNACH ",
            colorClass: "color-equity-blue",
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
            title: "Digital Payment System ",
            color: "color-black",
          },
          {
            title: "for Recurring Payments",
            color: "color-equity-blue",
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
                title: "Activate eNACH & Keep the Cash Flowing",
                color: "color-black",
              },
            ]}
          />
        </div>
      </div>

      <CtaSection
        title={"Ready to simplify your collections?"}
        buttonText={"Get Started Today!"}
      />

      <FaqSection faqData={faqData} />
      <BlogSection
        heading={[
          {
            title: "Related  ",
            color: "color-black ",
          },

          {
            title: " Resources",
            color: "color-black f-4",
          },
        ]}
        cards={[9158, 9870, 8984]}
      />
      <OtherProducts
        heading={[
          { title: "Check out ", color: "color-black" },
          { title: "other payment products", color: "color-equity-blue" },
          { title: " at EnKash", color: "color-black" },
        ]}
        cards={managementCards}
      />
    </div>
  )
}

export default ENACH
