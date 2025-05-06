import Image from "next/image"
import { Metadata } from "next"
import Link from "next/link"

import styles from "./page.module.scss"
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
import { space } from "@/common/constant"
import { faqData, secondFaqData } from "./faq-data"
import { blogData, carouselData, productData } from "./data"
import { banner, bannerLottie, caraouselBg, faqBg, whiteArrow } from "."
import generateMetaData from "@/common/utils/metaData"
import { userPlus, numberOne, stack } from "@/components/three-steps/"

export const metadata: Metadata = generateMetaData({
  title:
    "Payment Reminders: Automate Payment Collection Reminders - EnKash.com",
  description:
    "Reminder engines help businesses keep track of the payments to be received by the customer. Businesses can use these reminders to collect payments timely and facilitate their cash flow.",
  alternates: {
    canonical: "https://www.enkash.com/collection-reminder/",
  },
  faqData: faqData,
})

const reminderEngine = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/collection-reminder/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Reminder Engine${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Get paid instantly with"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title=" automated payment "
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="Collection Reminders "
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Automated reminders using payment links via SMS, email, or WhatsApp can replace manual reminders and collect business payments."
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
                url="https://docs.enkash.com/"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            {/* <Image src={banner} alt="reminder flow image" /> */}
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Quick Collection via Automated Payment Reminders"
            steps={[
              {
                icon: userPlus,
                text: "Instant Setup",
              },
              {
                icon: stack,
                text: "Single Dashboard Tracking",
              },
              {
                icon: numberOne,
                text: "Detailed Insights ",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="EnKash Automated "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Payment Reminders ${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="for Collections "
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automation"
              description="Automate payment collection reminders and save time for other productive work."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Payment Links"
              description="Businesses can embed payment links within the payment reminder engine channel and collections can be done instantly."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="DSO Management"
              description="Businesses can automate payment collection reminders and accelerate their collections, decreasing their DSO and stabilizing their cash flow."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Improved Customer "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Relationships"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              whiteTitle="Improved Customer Relationships"
              description="EnKash brings businesses closer to their customers by providing insights into their behaviour and patterns. This enables businesses to make decisions keeping customers at the forefront, therefore, establishing better customer relationships."
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
                <div className="text-center d-inline px-5">
                  <Heading
                    title={`Facilitate business processes and efficient cash flow with an${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="automated reminder engine"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
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
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading
            title="Seeking further understanding of instant settlements? Explore our comprehensive guide"
            color="equity-blue"
            size="h1"
          />
        </div>
        <div className="mb-5">
          <Heading
            title="Reminder engines help businesses keep track of the payments to be received by the customer. Businesses can use these reminders to collect payments timely and facilitate their cash flow."
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
          title="Seeking further understanding of the reminder engine?"
          description="Reminder engines help businesses keep track of the payments to be received by the customer. Businesses can use these reminders to collect payments timely and facilitate their cash flow."
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
                  title="How do payment reminders work?"
                />
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Payment reminders are automated messages that help businesses collect payments from their customers timely. They facilitate easy payment collection and enable businesses to fulfill their demands related to cash flow and other business processes."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Can we set payment reminders before the due date?"
                />
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Enterprises can define the reminders as per their convenience. They can set reminders for pre-payment and late payments"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to set up an automated payment reminder?"
                />
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Define the reminder timeline, it could be before or after the due date. Certain businesses give early payment discounts which can be availed if reminders are received before the date of payment."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do payment reminders facilitate cash flow in a business?"
                />
              </div>

              <div className="mb-3">
                <p>
                  <Link
                    href="https://www.enkash.com/resources/blog/benefits-of-enabling-auto-reminder-for-bill-payments/"
                    target="_blank"
                  >
                    Payment reminders
                  </Link>{" "}
                  can facilitate cash flow in a business in the following ways:
                </p>
              </div>

              <div className="mb-3">
                <p>
                  Reducing late payments: Businesses can reduce late payments by
                  reminding customers of their due payments and settling their
                  outstanding amounts instantly.
                </p>
              </div>

              <div className="mb-3">
                <p>
                  Better customer relationship: Enterprises can establish better
                  customer relationships with timely payments and understand
                  their payment patterns better.
                </p>
              </div>

              <div className="mb-3">
                <p>
                  Improved accounts receivable: With payment reminders in place,{" "}
                  <Link
                    href="https://www.enkash.com/collect-payments/"
                    target="_blank"
                  >
                    accounts receivables
                  </Link>{" "}
                  of a business can be accessed and maintained efficiently with
                  easy access to outstanding invoices and identification of the
                  payments due.
                </p>
              </div>

              <div className="mb-5">
                <p>
                  Cash flow prediction: Businesses can predict their cash flow
                  better and use it for the expansion of the processes with
                  efficient decision-making.
                </p>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="receivables" />
    </div>
  )
}

export default reminderEngine
