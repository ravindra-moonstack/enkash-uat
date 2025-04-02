import React from "react"
import Image from "next/image"
import { Metadata } from "next"
import Link from "next/link"

import styles from "./page.module.scss"
import { space } from "@/common/constant"
import { faqData, secondFaqData } from "./faq-data"
import { blogData, carouselData, productData } from "./data"
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from "."
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
  title: "eNACH & eMandate: Registration, Process & Status Check - EnKash",
  description:
    "Simplify collections payments, reduce paperwork & enhance financial efficiency with our e-NACH Solution. Explore the benefits of Electronic National Automated Clearing House (eNach) & eMandate.",
  alternates: {
    canonical: "https://www.enkash.com/e-nach/",
  },
  faqData: faqData,
})

const eNach = (): React.JSX.Element => {
  //

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/e-nach/`}
        faqData={faqData}
      />

      <Header utmSource="receivables" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`e-NACH${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Automate Recurring "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Payments with EnKash"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading title="eNACH" size="h2" color="rainy-blue" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Effortlessly automate recurring collections with EnKash eNACH mandate. Set up fast, secure digital mandates and seamlessly collect large recurring payments."
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
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Powering Recurring Payment Collection"
            steps={[
              {
                icon: userPlus,
                text: "Quick mandate creation",
              },
              {
                icon: stack,
                text: "Easy Subscription Management",
              },
              {
                icon: numberOne,
                text: "Instant Payment Settlement",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center">
          <Heading
            title={`${space}Digital Payment System `}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title={`${space}for `} color="black" size="h1" weight="6" />
        </div>

        <div className="mb-5 text-center">
          <Heading
            title={`${space}Recurring Payments`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Instant Digital"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title=" Mandate Creation"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Eliminate paperwork and delays—register mandates digitally for faster processing and hassle-free automation."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Smart Payment Retries for Higher Success Rates"
              description="Reduce revenue loss with automatic retries on failed payments, ensuring uninterrupted cash flow and improved collection efficiency."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Fewer Errors & "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Timely Collections"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Bulk Subscription Management Made Easy Set up, track, and manage multiple mandates at scale directly to handle larger payments from a single dashboard—saving time and effort."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="One-Time Authentication, "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Lifetime Convenience"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="receivables"
              description="Secure recurring payments with a simple one-time authentication, offering a frictionless experience for both businesses and customers"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Customizable Checkout for "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="a Branded Experience"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Choose between a quick plug-and-play checkout or fully customize it with your brand’s identity, colors, and elements for better engagement."
              source="receivables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white `}>
        <AllProducts
          title="Check Out EnKash’s Other Payment Products and Solutions"
          data={productData}
        />
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-flex flex-column">
                  <Heading
                    title={`Automate business payments and 
                    ${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />

                  <div>
                    <Heading
                      title={`collections ${space}`}
                      color="white"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title={`with e-NACH 
                    ${space}`}
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                  </div>
                </div>
              </div>
            </>
          }
          mainTitle="How to Setup eNACH?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how virtual accounts can revolutionize the way you work!"
        />
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white pb-0`}
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
      </div>

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none  bg-white`}
      >
        <div className="mb-5">
          <Heading
            title="Seeking further understanding about e-NACH? Explore the Comprehensive Guide."
            color="equity-blue"
            size="h1"
          />
        </div>
        <div className="mb-5">
          <Heading
            title="The automated process of collecting funds from customers regularly for monthly subscriptions, loan repayments, utility bills, and insurance premiums with electronic authorization is e-NACH. It helps streamline the payment process by eliminating human interaction and reducing errors, promising timely collections."
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={secondFaqData} />
        </div>

        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding about e-NACH?"
          description="The automated process of collecting funds from customers regularly for monthly subscriptions, loan repayments, utility bills, and insurance premiums with electronic authorization is e-NACH. It helps streamline the payment process by eliminating human interaction and reducing errors, promising timely collections."
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
                  title=" What does recurring payments mean?"
                />
              </div>

              <div className="mb-5">
                <p>
                  A payment model where customers authorize the payment of funds
                  from their accounts automatically at regular intervals for
                  goods, services, or{" "}
                  <Link
                    href="https://www.enkash.com/business-bill-payment/"
                    target="_blank"
                  >
                    bill payments
                  </Link>{" "}
                  on an ongoing basis is called recurring payments.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the difference between NACH and e-NACH?"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="National Payments Corporation of India (NPCI) incorporated the National Automated Clearing House or NACH for banks to make bulk transactions for subsidy distribution, dividends, and salaries."
                />
              </div>

              <div className="mb-3">
                <p>
                  NACH enables repetitive transactions that take place in bulk.
                  It can be further used for{" "}
                  <Link
                    href="https://www.enkash.com/bulk-collect/"
                    target="_blank"
                  >
                    payment collection
                  </Link>{" "}
                  like electricity bills, water bills, insurance premium
                  payments, and other utility bills.
                </p>
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="To automate these recurring payments, NPCI introduced the Electronic National Automated Clearing House, or e-NACH. The need to fill the NACH forms and involvement in paperwork is eliminated due to e-NACH. The mandate registration process for e-NACH can be completed within a few hours and requires minimum human intervention."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does e-Mandate work?"
                />
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="
                  E-mandate works by allowing individuals to provide their consent digitally for businesses to deduct payments directly from their bank accounts. These are directly set up through a net banking transaction from merchant websites. To enable this, a customer would have to complete a one-time net banking transaction authorization after which all subsequent payments will not require customer intervention."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does e-NACH work?"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="E-NACH works via electronic mandates, where customers are supposed to provide their authorization for automated debits from their bank accounts. These mandates enable businesses to initiate payments on pre-determined dates. The automated nature of e-NACH minimizes the administrative burden on businesses and customers, ensuring a secure and seamless payment experience."
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

export default eNach
