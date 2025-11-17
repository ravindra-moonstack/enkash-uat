import Image from "next/image"
import { Metadata } from "next"
import styles from "./page.module.scss"

//data
import { cardsData, managementCards, policies } from "./data"
import faqData, { SecondfaqData } from "./faq-data"

// components
import DynamicHeading from "@/src/components/dynamic-heading"
import SecondFaqHtml from "@/src/components/second-faq/secondFaqHtml"
import PaymentLinkTab from "@/src/components/payment-link-tabs/payment-link-tab"

//helpers
import {
  paymentSummary,
  mealCardImage,
  activationIcon,
  realTimeIcon,
  travelBookingIcon,
  registrationFeesIcon,
  onlinSellsIcon,
  feeCancelIcon,
  invoiceIcon,
  faqBg,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
} from "./img"

//utils
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import generateMetaData from "@/src/utils/metaData"
import FaqSection from "@/src/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import StepsSection from "@/src/components/steps-section"
import UseCaseSection from "@/src/components/sections/use-case-section"
import CtaSection from "@/src/components/sections/cta-section"
import OtherProducts from "@/src/components/sections/other-products"
import BlogSection from "@/src/components/sections/blog-section"

export const metadata: Metadata = generateMetaData({
  title: "Simple Payment Links to Accept Online Payments",
  description:
    "Create and share secure payment links in seconds—no coding needed. Accept UPI, cards, and net banking with EnKash’s powerful payment link solution.",
  alternates: {
    canonical: `${process.env.URL}/payment-links`,
  },
})
const salesUrl = getSalesUrl("/payment-links")

const PaymentLinks = (): React.JSX.Element => {
  //

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
            name: "Payment Links",
            url: "/payment-links",
          },
        ]}
        subtitle={{
          text: "Payment Links",
          color: "color-equity-blue",
          underline: true,
        }}
        title={[
          {
            text: "Accept Payments Instantly with EnKash Payment Links",
            color: "color-black",
          },
        ]}
        description={{
          text: "Create payment link effortlessly—no website or app needed. Share via SMS, WhatsApp, email, or social media, and accept payments through 100+ methods - no coding required.",
        }}
        button={{
          title: "Get Started",
          url: salesUrl,
          theme: "blue",
          apiUrl: "https://docs.enkash.com/",
        }}
        rightImage={paymentSummary}
        backgroundImage="/images/collectPaymentBg.webp"
        rightImageMaxHeight="489px"
      />

      <div className={`row ${styles.introduction_section} `}>
        <div className="gap-32  align-items-center max-w-auto">
          <div className="d-inline justify-content-center  align-items-center text-center">
            <DynamicHeading
              content={[
                {
                  title: "Simplify Payments, Amplify Business",
                  color: "color-white",
                },
              ]}
              headingTag="h3"
              className="f-5 mb-4 "
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
                      title: "100+ Payment Options",
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
                <Image src={activationIcon} alt="icon" />
              </div>
              <div
                className={`py-2 d-flex flex-column justify-content-center align-items-center ${styles.innerCard}`}
              >
                <DynamicHeading
                  content={[
                    {
                      title: "Instant Activation",
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
                      title: "Real-time Monitoring",
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
            text: "How to Create  ",
            colorClass: "color-black",
          },
          {
            text: "Payment Links",
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
          { title: "Get Paid with a ", color: "color-black" },
          { title: "Single Link ", color: "color-equity-blue" },
        ]}
        items={policies}
        buttonUrl={salesUrl}
      />

      <div className={`${styles.integration_section} `}>
        <div className={`${styles.faqSection} text-start  max-w-auto`}>
          <div className={`${styles.title} text-start pb-md-5 pb-4`}>
            <DynamicHeading
              content={[
                {
                  title: "Integrate with Ease. Connect Without Gaps.",
                  color: "color-black",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div>
                <SecondFaqHtml SecondfaqData={SecondfaqData} />
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.faq_bg}>
                <Image
                  src={faqBg}
                  alt="background image"
                  className="w-100 mh-550 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.tab_row}  bg-white `}>
        <PaymentLinkTab
          sectionHeading="Payment Link for All Merchants:"
          secondHeading="Accept Payments Anywhere, Anytime"
          progressData={[
            {
              itemArray: ["Invoicing and Billing"],
              title: "Invoicing and Billing",
              subtitleOne: "Invoice Payments",
              descriptionOne:
                "Merchants can embed payment links directly into invoices, making it easy for clients to pay outstanding balances with a single click.",
              subtitleTwo: "Recurring Payments ",
              descriptionTwo:
                "Payment links are used to set up recurring payments for subscriptions, memberships, or other recurring services.",
              icon: invoiceIcon,
              bgImage: bg1,
            },
            {
              itemArray: ["Fee Collection"],
              title: "Fee Collection",
              subtitleOne: "Schools and Educational Institutions",
              descriptionOne:
                "Streamline tuition and other fee payments by sending unique payment links to students or parents.",
              subtitleTwo: "Professional Services",
              descriptionTwo:
                " Lawyers, accountants, and consultants can use payment links to collect retainers, invoices, or other professional fees.",
              icon: feeCancelIcon,
              bgImage: bg2,
            },
            {
              itemArray: ["Online Sales"],
              title: "Online Sales",
              subtitleOne: "Direct Sales",
              descriptionOne:
                " Merchants can easily create and share payment links for individual products or services, enabling customers to purchase directly through a simple link.",
              subtitleTwo: "Social Media Sales",
              descriptionTwo:
                "Payment links are ideal for merchants selling through platforms like Instagram or Facebook, where customers can easily click and pay without leaving the platform.",
              icon: onlinSellsIcon,
              bgImage: bg3,
            },
            {
              itemArray: ["Registration Fees"],
              title: "Registration Fees",
              subtitleOne: "Event Tickets",
              descriptionOne:
                " Event organizers can use payment links to sell tickets online, providing a convenient and secure payment option.",
              subtitleTwo: "Workshop or Class Registration ",
              descriptionTwo:
                " Payment links can be used to collect registration fees for workshops, classes, or other events.",
              icon: registrationFeesIcon,
              bgImage: bg4,
            },
            {
              itemArray: ["Travel Bookings"],
              title: "Travel Bookings",
              subtitleOne: "Travel Agents and Operators",
              descriptionOne:
                " Use payment links to collect deposits or full payments for travel packages, flights, accommodations, and other travel-related services. This streamlines the booking process and reduces administrative overhead.",
              subtitleTwo: "Accommodation Providers",
              descriptionTwo:
                "Hotels, hostels, and other accommodation providers can use payment links to collect booking deposits or full payments directly from guests. This can be integrated into booking confirmation emails or used for last-minute bookings.",
              icon: travelBookingIcon,
              bgImage: bg5,
            },
          ]}
        />
      </div>

      <CtaSection
        title={"Ready To Simplify Your Collections?"}
        buttonText={"Get Started  Today "}
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
        cards={[8893, 4695, 9045]}
      />
      <OtherProducts
        heading={[
          {
            title: "Check out other ",
            color: "color-black",
          },
          {
            title: "collection products",
            color: "color-equity-blue",
          },
          {
            title: " at EnKash",
            color: "color-black",
          },
        ]}
        cards={managementCards}
      />
    </div>
  )
}

export default PaymentLinks
