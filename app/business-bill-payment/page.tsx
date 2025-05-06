import Image from "next/image"
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
import faqData from "./faq-data"
import { blogData, carouselData, productData } from "./data"
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from "."
import generateMetaData from "@/common/utils/metaData"
import { userPlus, numberOne, stack } from "@/components/three-steps/"

export const metadata: Metadata = generateMetaData({
  title: "Bill Payment | Billing Payment Solution | EnKash",
  description:
    "Streamline your financial management with an advanced bill payment platform.  Simplify bill payment processes and stay organized effortlessly. Discover efficient bill pay solutions for seamless financial tracking and timely payments",
  alternates: {
    canonical: "https://www.enkash.com/business-bill-payment/",
  },
  faqData: faqData,
})

const BillPayments = (): React.JSX.Element => {
  //

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/business-bill-payment/`}
        faqData={faqData}
      />
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Business Bill Payment${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-inline">
            <Heading
              title="Simplify Business"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`${space}Utility Bill Payments${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading title="with EnKash" color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Manage and pay all your business bills from a single, unified dashboard."
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
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Enterprise Utility Bill Payments Platform"
            steps={[
              {
                icon: userPlus,
                text: "Easy",
              },
              {
                icon: stack,
                text: "Fast",
              },
              {
                icon: numberOne,
                text: "Customizable",
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
            title="Say Goodbye to Bill Management Chaos with the Best "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Bill Payment Platform`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <>
                    <Heading
                      title="One Dashboard for "
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="All Your Bills "
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </>
                }
                description="EnKash centralizes utility bills, auto-fetching details like due dates and amounts, reducing manual effort and errors. Manage recurring expenses effortlessly with a single dashboard for complete control and seamless oversight."
                source="payables"
              />
            </div>

            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="One-click Payments"
                description="Simplify multiple payments with EnKash’s one-click feature. Filter bills by location, provider, or due date to pay them simultaneously, saving time and ensuring seamless bulk payment handling without missing deadlines."
                source="payables"
              />
            </div>

            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <>
                    <Heading
                      title=" Multi-location "
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="Management"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </>
                }
                source="payables"
                description="Manage utility bills across offices, warehouses, and retail outlets effortlessly. Centralized control consolidates expenses, improves accuracy, and enhances financial visibility, streamlining bill tracking and payments no matter where your business operates."
              />
            </div>

            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Real-time Reconciliation"
                description="Stay updated with real-time payment statuses on EnKash’s dashboard. Generate custom reports for audits, planning, or tracking histories, ensuring accurate records and eliminating manual reconciliations for seamless financial management and peace of mind."
                source="payables"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Streamlined Approvals"
                description="Optimize payments with customizable approval workflows. Assign roles and permissions to ensure compliance, prevent unauthorized transactions, and enhance transparency. EnKash’s system speeds decision-making and strengthens your organization’s financial governance."
                source="payables"
              />
            </div>
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
                <div className="text-center d-inline">
                  <Heading
                    title={`Steps for Effortless ${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Utility Bill Payments "
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`${space}for Your Business`}
                    color="white"
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
          title="Learn how bill payments could revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about bill payments in detail"
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
          title="Seeking further understanding of bill payments online?"
          description="Bill payments refer to those regularly occurring expenses that a business has. These could include utilities like electricity, water, and other regular payments you need to make on time to ensure your business operations continue uninterrupted."
          source="payables"
        />
      </div>

      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to make bill payments on EnKash platform?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can upload all the relevant bills on EnKash, and set internal processes to get the relevant approvals from different departments. Once you do that, every time the bill is due, you will be notified by email to take action like approve, reject, or pay, based on which you can take action. Once it is approved, you can pay using different payment methods on EnKash Platform."
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does department management help with bill pay solutions?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Different departments have different types of expenses, some of which are urgent, and some of them are only required for a certain period of time. With department management, you can set budgets, approval hierarchies, and other processes to ensure that bill payments happen without compromising business operations while ensuring spend is as per budgets."
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the types of utility bills I can pay?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can pay various utility bills like electricity, water, internet bills, etc. using EnKash platform."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do I know my bills are paid?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Once the bills are paid, you can log in to the platform and check the status of the bills paid on the dashboard including the date of bill payment and amount paid. "
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the different modes used for online bill payment?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The different modes you can use for online bill payment include
                  NEFT, RTGS, IMPS, UPI, debit cards, connected banking, and more.  
                  Each of the modes of payment has its own set of features and benefits."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  )
}

export default BillPayments
