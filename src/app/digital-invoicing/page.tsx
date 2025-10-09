import Image from "next/image"
import styles from "./page.module.scss"
import { Metadata } from "next"

//data
import { allInOnePolicies, cardsData } from "./data"
import faqData from "./faq-data"

//components
import DynamicHeading from "@/src/components/dynamic-heading"
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"

//helpers
import {
  paymentSummary,
  mealCardImage,
  realTimeIcon,
  hundredPercentIcon,
} from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

export const metadata: Metadata = generateMetaData({
  title: "E Invoicing Solution: Automate Billing & Get Paid Faster",
  description:
    "Simplify your billing process with EnKash Digital Invoicing. Create GST-compliant invoices, send them instantly, and track payments in real time—no manual effort.",
  alternates: {
    canonical: `${process.env.URL}/digital-invoicing/`,
  },
})

const salesUrl = getSalesUrl("/digital-invoicing")

const DigitalInvoicing = (): React.JSX.Element => {
  //
  return (
    <div className={`color-white`}>
      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: "Make Payments",
            url: "products/make-payments",
          },
          {
            name: "Digital Invoicing",
            url: "/digital-invoicing",
          },
        ]}
        subtitle={{
          text: "Digital Invoicing",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Enhance business operations with Digital Invoicing",
            color: "color-black",
          },
        ]}
        description={{
          text: "Automate your invoicing process for recurring transactions and gain complete visibility of sales and payments.",
        }}
        button={{ title: "Get Started", url: salesUrl, theme: "blue" }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
      />

      <div className={`row ${styles.introduction_section} `}>
        <div className="d-flex justify-content-center  flex-column gap-32  align-items-center max-w-auto">
          <div className="d-inline justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Simplify Business Payments With Digital Invoicing",
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
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Automated Invoice Generation",
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
                      title: "Real-Time Tracking",
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
                <Image src={realTimeIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Seamless Integration",
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
            text: "How to Set Up ",
            colorClass: "color-black",
          },
          {
            text: "EnKash Digital Invoicing",
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
            title: "Effortless ",
            color: "color-equity-blue",
          },
          {
            title: "Invoicing, ",
            color: "color-black",
          },
          {
            title: "Faster ",
            color: "color-equity-blue",
          },
          {
            title: "Payments ",
            color: "color-black",
          },
        ]}
        items={allInOnePolicies}
        buttonUrl={salesUrl}
      />

      <CtaSection
        title={"Opt For Digital Invoicing and Get Paid Faster!"}
        buttonText={"Get Started Today"}
      />

      <FaqSection faqData={faqData} />
    </div>
  )
}

export default DigitalInvoicing
