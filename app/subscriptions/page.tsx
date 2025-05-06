import Image from "next/image"
import { Metadata } from "next"
import Link from "next/link"

import styles from "./page.module.scss"
import { space } from "@/common/constant"
import { faqData, secondFaqData } from "./faq-data"
import { blogData, carouselData, productData } from "./data"
import { banner, caraouselBg, faqBg, whiteArrow } from "."
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
  SecondryButton,
} from "@/components"
import generateMetaData from "@/common/utils/metaData"
import { userPlus, numberOne, stack } from "@/components/three-steps/"

export const metadata: Metadata = generateMetaData({
  title: "Customize Subscription Management Solutions - EnKash",
  description:
    "EnKash's automated system is designed for scalability, effortlessly accommodating increasing transaction volumes without compromising efficiency. Book a Free demo Now !!",
  alternates: {
    canonical: "https://www.enkash.com/subscriptions/",
  },
  faqData: faqData,
})

const subscriptionManagement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/subscriptions/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Subscription Management${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex flex-column">
            <Heading title="Trusted" color="white" size="h2" weight="7" />
            <Heading
              title="Subscription Management"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="Software for Growth-oriented "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading title="Businesses" color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Keep cash flow for your subscription-based business steady by collecting recurring payments via multiple payment methods like eNACH, autopay, standing instruction on credit & debit cards."
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
                url="/sales/?source=receivables"
              />
            </div>

            <div>
              <SecondryButton
                title="API Documentation"
                actionImage={whiteArrow}
                iconSize={15}
                url="https://docs.enkash.com"
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
            title="Time to scale subscription business with automated renewals and billing cycles"
            steps={[
              {
                icon: userPlus,
                text: "RBI Compliant",
              },
              {
                icon: stack,
                text: "Automated Subscription Management",
              },
              {
                icon: numberOne,
                text: "Customizable Subscription Plans",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only mb-0`}
      >
        <div className="d-inline align-items-center mb-5">
          <div className="text-center">
            <Heading
              title="Manage Collections Business "
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`${space}Subscriptions Efficiently `}
              color="equity-blue"
              size="h1"
              weight="6"
            />
          </div>
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automate Recurring Payments"
              description="Streamline recurring payment schedules, take control of billing cycles, and stay informed with instant alerts. Our advanced billing system simplifies subscription management with a reliable solution for card updates, payment retries, email notifications, and more."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="UPI AutoPay for Scalability"
              description="Broaden your audience by including non-cardholders, drive conversions with affordable subscription plans, and foster customer loyalty through visibility and control while enjoying extensive UPI app compatibility."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Tailored Recurring Payment Models "
              description="Choose fixed, usage-based, or variable models to automate payments. Support predefined amounts, usage-based billing, or both fixed rentals and ad-hoc charges for complete payment flexibility."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customize Your Checkout Experience"
              description="Seamlessly integrate EnKash’s ready-to-use APIs into your app or website to offer a branded, no-redirect checkout experience. Use our dashboard to create plans, manage customers, and share payment links via email or SMS."
              source="receivables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="Check out other payment products at"
          subtitle="EnKash"
          data={productData}
        />
      </div>
      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center d-flex flex-column">
                <Heading
                  title="Manage business"
                  color="white"
                  size="h1"
                  weight="6"
                />

                <Heading
                  title="subscriptions efficiently"
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
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
          title="Learn how payment links can revolutionize the way you work!"
        />
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white `}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about instant settlements in detail"
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
          title="Seeking further understanding about subscription management?"
          description="Subscription management includes tasks such as tracking subscriptions, and managing renewals while ensuring efficient costs."
          source="receivables"
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
                  title="How does EnKash subscription management help my business?"
                />
              </div>
              <div className="mb-3">
                <p>
                  <strong>Customization:</strong> Businesses can customize the
                  subscription management as per their requirements and save
                  costs accordingly.
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <strong>Easy integration:</strong> Enterprises can easily
                  integrate with EnKash to manage their subscriptions
                  efficiently.{" "}
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <strong> Single dashboard access:</strong> Easy access to a
                  user-friendly dashboard to track invoices, check customer
                  history, and understand their behavior.
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <strong>Recurring payments: </strong>Define recurring payments
                  for your customers with{" "}
                  <Link href="https://www.enkash.com/" target="_blank">
                    EnKash’s subscription management.
                  </Link>{" "}
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <strong> Automated invoice generation: </strong> Businesses
                  can{" "}
                  <Link
                    href="https://www.enkash.com/digital-invoicing/"
                    target="_blank"
                  >
                    automate invoice generation
                  </Link>{" "}
                  for recurring payments by defining the timeline and frequency
                  for their customers.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  {" "}
                  <strong> Customer management: </strong> EnKash helps manage
                  customers efficiently by providing them with timely reminders,
                  automated invoices, and easy communication.
                </p>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Can we customize subscription payments?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses can customize subscription payments as per their industry standards, their customers and business needs like cash flow. If they need cash flow quarterly, they can define collections from customers in that way."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How automated subscription works?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Automated subscriptions enable businesses to{" "}
                  <Link
                    href="https://www.enkash.com/bulk-payment-collection/"
                    target="_blank"
                  >
                    track and collect payments
                  </Link>{" "}
                  for their product or service automatically with various
                  payment gateways. In case, a customer doesn’t have sufficient
                  funds, they will be automatically notified.
                </p>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does subscription management software help in customer retention?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Subscription management software allows customization of subscriptions based on customer preferences and their history. This enables a unique and customizable experience for the customer that meets their expectations. This helps in customer retention; making them feel valued and preferred."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="receivables" />
    </div>
  )
}

export default subscriptionManagement
