import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

import {
  Header,
  ThreeSteps,
  Footer,
  Heading,
  BlogWrapper,
  ComprehensiveView,
  PrimaryButton,
  GetStartedCard,
  HowDoesCarousel,
  ContactUsCard,
  LottieClientComponent,
  StructuredData,
  AllProducts,
  FAQHtml,
} from "@/components"
import styles from "./page.module.scss"
import { space } from "@/common/constant"
import { blogData, carouselData, productData } from "./data"
import faqData from "./faq-data"
import { banner, caraouselBg, faqBg } from "."
import generateMetaData from "@/common/utils/metaData"
import { userPlus, numberOne, stack } from "@/components/three-steps/"

export const metadata: Metadata = generateMetaData({
  title: "Payable Analytics Automation Solution for Business - EnKash",
  description:
    "Track your AP metrics and KPIs is an excellent way to improve operations and make data-driven business decisions with EnKash Payable Analytics. Book a Free Demo !!",
  alternates: {
    canonical: "https://www.enkash.com/payable-analytics/",
  },
  faqData: faqData,
})

const PayableAnalytics = (): React.JSX.Element => {
  //

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Account Payables Insights${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Access, Manage,"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="and Utilize Data with"
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title="Payable Analytics"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Gain full visibility into your account payables. Identify cost-saving opportunities, enhance cash flow management, and foster better vendor relationships—all in one centralized platform."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="Get Started"
                theme="blue"
                url="/sales/?source=payables"
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent animationData={banner} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Optimize Your Account Payables and Cash Flow with EnKash Analytics"
            steps={[
              {
                icon: userPlus,
                text: "Actionable Insights",
              },
              {
                icon: stack,
                text: "Trend Analysis",
              },
              {
                icon: numberOne,
                text: "Enhanced Control",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-2">
          <Heading
            title="Turn Payable Data into"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="Actionable Insights"
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Gain Extensive Business Insights"
              description="Unlock insights from accounts payable data to identify payment trends, save costs, and improve cash flow. Strengthen vendor relationships, align spending with goals, and enhance decision-making to drive better financial performance for your business."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Invoice Management  Made Easy"
              description="Streamline invoice approvals and payments with data-driven insights. Analyze trends, identify bottlenecks, and optimize workflows to ensure timely approvals, reduce errors, and enhance efficiency, making your accounts payable processes seamless and reliable."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-time Data Accessibility"
              description="Access real-time financial updates, including cash, payments, and transaction history. Use this data to avoid missed deadlines, seize early payment discounts, and keep accurate records, enabling smarter, faster financial decisions."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Advanced Vendor Negotiations"
              description="Leverage comparative data across departments, projects, or locations to secure better payment terms, cut costs, and strengthen vendor partnerships. Gain enhanced negotiation power for a competitive edge and improved financial outcomes."
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Complete Control Over Payments"
              description="Centralize accounts payable on one intuitive dashboard to track vendor payments, utility bills, and transactions effortlessly. Gain visibility and control, eliminate inefficiencies, and focus on strategic growth initiatives with optimized financial processes."
              source="payables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="EnKash Products - Making Payments "
          subtitle="Smarter"
          data={productData}
        />
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="d-flex flex-column">
                  <Heading
                    title="How to Get Insights"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <div>
                    <Heading
                      title="into Your"
                      color="white"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title={`${space} Account Payables`}
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                  </div>
                </div>
              </div>
            </>
          }
          mainTitle="How does it work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how payable analytics can revolutionize the way you work!"
        />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about payable analytics in detail"
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={faqData} />
        </div>

        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of payable analytics?"
          description="Payable analytics facilitates businesses in better decision making with payables data in hand and improves their overall performance."
          source="payables"
        />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is a payable analytics platform by EnKash?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash’s payable analytics provides you all the insights about payments made across different categories and vendors, approval time required for payments, cash-in-hand in real-time, payments that are yet to be made and payments made from a specific bank branch. This enables businesses to gain insights about their spending and its management. Businesses can decipher their spend patterns and identify the gaps for better and more informed decision-making."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does a payable analytics platform work?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A payable analytics platform integrates with your business’s accounting software and identifies all payment related transactions; analyzes them and provides data suitable for business decision-making."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Is a payable analytics platform suitable for businesses of all sizes??"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Payable analytics can be tailored for all business sizes as per their needs. Small businesses can streamline their process using analytics while large businesses can use them to optimize their payments. The versatility of analytics for different businesses makes it powerful and worth investing in."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the key features and functionalities of payable analytics software?"
                />
              </div>
              <div className="mb-5">
                <p>
                  An efficient payable analytics software helps in{" "}
                  <Link
                    href="https://www.enkash.com/invoice-management/"
                    target="_blank"
                  >
                    invoice management
                  </Link>{" "}
                  , tracks all payment-related data, and provides deep insights
                  into transactions. It enables real-time data access with
                  expense tracking and compliance monitoring. The software
                  establishes transparency, convenience, and efficiency for
                  business improvement.
                </p>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  )
}

export default PayableAnalytics
