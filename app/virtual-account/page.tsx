import Image from "next/image"
import { Metadata } from "next"

import styles from "./page.module.scss"
import { space } from "@/common/constant"
import { faqData, secondFaqData } from "./faq-data"
import { blogData, productData, carouselData } from "./data"
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
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from "."
import generateMetaData from "@/common/utils/metaData"
import { numberOne, stack, userPlus } from "@/app"

export const metadata: Metadata = generateMetaData({
  title: "Virtual Account - Open a virtual business account| EnKash",
  description:
    "Optimize Your Financial Operations with Virtual Account Solutions. Explore virtual accounts designed to streamline receivables, enhance cash flow management, and boost financial efficiency",
  alternates: {
    canonical: "https://www.enkash.com/virtual-account/",
  },
  faqData: faqData,
})

const VirtualAccount = (): React.JSX.Element => {
  //

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/virtual-account/`}
        faqData={faqData}
      />

      <Header utmSource="receivables" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Virtual Accounts${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Make business collections  ${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`faster and easier with${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title=" Virtual Account"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Receive funds via multiple payment modes seamlessly and simplify the reconciliation process by mapping collections with invoices in real time."
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
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Enables payment collection with real-time reconciliation"
            steps={[
              {
                icon: userPlus,
                text: "Unique Account Numbers",
              },
              {
                icon: stack,
                text: "Real-Time Reconciliation",
              },
              {
                icon: numberOne,
                text: "Easy Activation Control",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only `}
      >
        <div className="d-inline text-center">
          <Heading
            title="Ensure Timely Collections With  "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Virtual Account`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Instant Payment Collection"
              description="Businesses can embed payment links in virtual accounts and encourage customers to make payments instantly with their preferred payment mode."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Accurate Reconciliation in Real-Time"
              description="Business payments from multiple branches and departments can be reconciled in real time with a user-friendly dashboard."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Access Centralized Dashboard "
              description="Get access to the centralized dashboard with downloadable reports to know daily, weekly, and monthly collections of business. "
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Quick Activation & Deactivation "
              description="Easily create and deactivate virtual accounts in real-time. In case of transfers to a disabled account, the amount will be auto-rejected."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <Heading
                  title="Settle Funds Easily"
                  color="rainy-blue"
                  size="h2"
                  weight="6"
                />
              }
              source="receivables"
              description="Businesses can receive payments via Auto Collect and split them among multiple parties as per their defined percentages and settlement cycles."
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Receive KYC Approved Payments "
              description="Get funds from KYC-approved customers by allowing amount and remitter lock to enhance the reconciliation process accuracy."
              source="receivables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="Check out other payment products at "
          subtitle="EnKash"
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
                    title={`Use virtual accounts to simplify${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="business collection processes"
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
          title="Learn how Virtual Accounts will change the way you approach collections and receivables!"
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
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white `}
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
          title="Seeking further understanding of virtual accounts?"
          description="Virtual accounts basically function as an electronically usable payment and collection instrument, which can be formed as a subset of your core bank account. A virtual account contains a series of unique sets of codes that in most instances are numerical."
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
                  title="Why are virtual accounts essential for my business?"
                />
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="With the creation of virtual accounts, you will find it easier to manage payments you receive from your customers. Since the virtual account will be different for different customers, you will know when a customer has delayed their payment, allowing you to intensify your collection efforts. 
                  Virtual account management ensures your finance team spends less time on mundane and repetitive tasks. Virtual accounts ease the process of receivables."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Does the virtual account module help improve the finance team’s performance? If yes, how?"
                />
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Yes, it does. With virtual accounts being tagged to each customer account, the tracking of payments received and the reconciliation process that follows becomes much easier. The finance team spends less time tracing which payments belong to which customer account and can support the sales team."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why should a business consider virtual accounts?"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="
                  Virtual accounts are essential for any growing business because they help them with the following aspects:"
                />
              </div>

              <div className="mb-5">
                <ul>
                  <li>They provide a better customer experience</li>
                  <li>
                    They help the finance team function with maximum efficiency
                  </li>
                  <li>
                    Virtual current accounts ensure that you have a complete
                    overview of your funds
                  </li>
                  <li>
                    Reduce the follow-up efforts and make the accounts
                    receivable process better
                  </li>
                  <li>
                    Let the finance team focus on more essential tasks like
                    reducing capital costs and more
                  </li>
                  <li>
                    Virtual accounts help the business to be more prepared to
                    meet audit requirements
                  </li>
                  <li>
                    You can use virtual accounts to ensure that transactions are
                    secure and prevent frauds
                  </li>
                  <li>
                    Creation of reports around DSO and the state of accounts
                    receivables in the company becomes easier
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does the virtual accounts module curb misuse?"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="With the virtual accounts module, it becomes easier to track which customers are habitual late payers and the ones that often mislead you about the payment status. It also ensures that customers who are habitual defaulters do not continue to avail goods or services on credit terms. It removes the personal bias factor when it comes to deciding on credit terms for customers."
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

export default VirtualAccount
