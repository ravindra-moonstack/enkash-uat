import React from "react"
import Image from "next/image"
import { Metadata } from "next"

import {
  Header,
  PrimaryButton,
  BlogWrapper,
  LottieClientComponent,
  ComprehensiveView,
  FAQHtml,
  Footer,
  StructuredData,
  HowDoesCarousel,
  Heading,
  GetStartedCard,
  ThreeSteps,
  ContactUsCard,
} from "@/components"

import styles from "./page.module.scss"

import { space } from "@/common/constant"
import faqData from "./faq-data"
import { blogData, carouselData } from "./data"
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from "."

import generateMetaData from "@/common/utils/metaData"
import { userPlus, numberOne, stack } from "@/components/three-steps/"
import AllProducts from "@/components/all-products/all-products"
import productData from "./product-data"

export const metadata: Metadata = generateMetaData({
  title: "Vendor Payment - Automated Multiple Vendor Payment | EnKash",
  description:
    "Explore how our vendor payment solutions streamline transactions, improve financial control, and enhance supplier relationships. Discover the ease and effectiveness of managing vendor payments",
  alternates: {
    canonical: "https://www.enkash.com/vendor-payment/",
  },
  faqData: faqData,
})

const VendorPayment = (): React.JSX.Element => {
  //

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/vendor-payment/`}
        faqData={faqData}
      />
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Vendor Payment`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <Heading
            title={`Faster, Smarter ${space}`}
            color="white"
            size="h2"
            weight="7"
          />

          <div className="d-line">
            <Heading
              title="Vendor Payments "
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading title="with EnKash " color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Transform your vendor payments with a single click and get complete control with real-time updates."
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
            title="Vendor Payment Solution for Better Business Efficiency"
            steps={[
              {
                icon: userPlus,
                text: "Effortless Automation",
              },
              {
                icon: stack,
                text: "Secure Transactions",
              },
              {
                icon: numberOne,
                text: "Muti-mode Payments",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row} row d-flex bg-white row-padding-x-only`}
      >
        <div className="text-center mb-5">
          <div className="d-inline">
            <Heading
              title="Your End-to-End "
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`${space}Vendor Payment Portal${space}`}
              color="equity-blue"
              size="h1"
              weight="6"
            />
          </div>
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Pay Vendors "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="in Seconds"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="payables"
              description="Simplify vendor payments with UPI, NEFT, RTGS, or cards. Settle invoices instantly with secure transactions using EnKash, ensuring fast, reliable payments that eliminate delays and strengthen vendor relationships."
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Eliminate Manual Hassles"
              description="Eliminate spreadsheets and manual errors with EnKash. Automate invoice uploads, payment reminders, and TDS compliance, ensuring accurate, timely, and regulation-compliant payments while freeing your team to focus on growth.Eliminate spreadsheets and manual errors with EnKash. Automate invoice uploads, payment reminders, and TDS compliance, ensuring accurate, timely, and regulation-compliant payments while freeing your team to focus on growth."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Speed Up Approvals"
              description="Speed up approvals with EnKash’s customizable workflows. Define hierarchies, assign roles, and receive instant notifications. Approve vendor payments securely from any device, ensuring agility and seamless operations wherever you are."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Comprehensive Reconciliation"
              description="Keep your books audit-ready with EnKash’s automatic reconciliation. Match invoices to payments, generate detailed reports, and eliminate discrepancies effortlessly, improving accuracy and saving valuable time for your finance team."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="End-to-End Security"
              description="Secure transactions with EnKash’s enterprise-grade measures, including multi-layered encryption, fraud monitoring, and bank account validation. Built-in compliance ensures your vendor payments are protected and reliable at every step."
              source="payables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="EnKash Products - Making Payments "
          subtitle=" Smarter"
          data={productData}
        />
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline flex-column">
                  <Heading
                    title={`Pay, Approve, Reconcile ${space}`}
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
          title="Learn how a Vendor Payments Platform could revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about vendor payment in detail"
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
          title="Seeking further understanding of vendor payments?"
          description="Vendor payments are accounts payable or invoices to pay, which refer to compensating suppliers for the goods or services they provide to your business. Maintaining a good relationship with your suppliers while ensuring you don’t have responsibilities for an extended time is possible by managing your vendor payments methodically and timely. This keeps businesses of all kinds running as efficiently & effectively as possible."
          source="payables"
        />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide."
          innerHtml={
            <>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is a vendor in accounts payable?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="In Accounts Payable (AP), a vendor refers to a person, business, or entity from whom a company purchases goods or services. A vendor can be an individual, a company, a supplier, or a service provider that supplies products or services required for the company's operations. Vendors play a crucial role in the procurement and supply chain process of a business. Timely payment to suppliers is crucial for maintaining good credit terms and sustaining a healthy supply chain."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why do businesses need to streamline vendor payments?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses need to streamline their vendor payments to:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Ensure their payments are quick, accurate, and made on time
                  </li>
                  <li>
                    Establish a rapport in the industry with timely vendor
                    payments
                  </li>
                  <li>Improve vendor relations in the longer run</li>
                  <li>
                    Pay before the due date and avail trade discount, if both
                    parties agree
                  </li>
                </ul>
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What issues arise from a poor vendor payment system?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A poor vendor payment system can lead to several issues that can significantly impact a company's operations. Some of the common issues are:"
                />
              </div>
              <div className="mb-2 d-inline">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Late payments:"
                  />
                </div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Delays in processing and making payments to vendors can lead to strained vendor relationships and potential disruptions in the supply chain."
                />
              </div>
              <br />
              <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Inaccuracies and discrepancies:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Errors in payment amounts, duplicate payments, or incorrect payment details can lead to financial inaccuracies and reconciliation challenges."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Cash flow challenges"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Inadequate cash flow management due to inconsistent or delayed payments can potentially affect the company's ability to meet its financial obligations."
                />
              </div>
              <br /> <br />
              <div className="mb-5 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Operational inefficiencies:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Wasted time and resources spent on manual and inefficient payment processing, including duplicate data entry, approval delays, and manual reconciliation efforts."
                />
              </div>
              <br /> <br /> <br />
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" What are the various functions of the vendor payment module?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The vendor payment module is designed to streamline and manage the end-to-end vendor payment process efficiently. Here are the various functions typically associated with a vendor payment module:"
                />
              </div>
              <div className="mb-2 d-inline">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Adding your vendor:"
                  />
                </div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The first and foremost step in the vendor payment module is to add the vendor to the portal."
                />
              </div>
              <br />
              <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Invoice verification:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Validates and verifies vendor invoices against purchase orders, contracts, or other agreements to ensure accuracy and authenticity."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Payment authorization and approval:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Facilitates the approval workflow for vendor payments, ensuring that authorized personnel review and approve payments in accordance with company policies."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Payment scheduling:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Allows for the scheduling of vendor payments based on agreed-upon payment terms, ensuring timely and accurate disbursement of funds to vendors."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Payment processing:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Initiates the actual payment transactions using selected payment methods, such as electronic transfers, net banking, or UPI."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Bank reconciliation:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Integrates with bank statements and reconciles payments made with bank transactions, minimizing errors and discrepancies in financial records."
                />
              </div>
              <br></br>
              <br /> <br />
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What payment modes can I use for vendor payments?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can use a virtual card to make quick, easy, and reliable vendor invoice payments. As soon as you register on the platform, you will get access to a virtual card with an account number."
                />
              </div>
              <div className="mb-2 d-inline">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Cheque Payments:"
                  />
                </div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These are traditional and widely used and can be mailed or handed directly to the vendor. Moreover, it requires manual processing and may have longer processing times."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="National Electronic Funds Transfer (NEFT):"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title=" Directly transfers funds from your bank account to the vendor's bank account and is faster and more efficient than cheques. These are most commonly used for recurring vendor payments."
                />
              </div>
              <br />
              <br />
              {/* <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Credit Card Payments:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="It allows vendor payment through credit cards and provides convenience and potential rewards (e.g., cashback, reward points). Not only this, there’s another best option available, i.e., making vendor payments through Corporate Cards that come with a simplified onboarding process, complete transparency, and so much more, offering cash flow management seamlessly."
                />
              </div> */}
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Virtual Card Payments:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can use a virtual card to make quick, easy, and reliable vendor invoice payments. As soon as you register on the platform, you will get access to a virtual card with an account number."
                />
              </div>
              <br />
              <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Real Time Gross Settlement (RTGS):"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="It enables real-time funds transfer from one bank to another in India."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Immediate Payment Service (IMPS):"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title=" Vendor bill payment can be done with this facility that provides instant interbank electronic fund transfers, which are available 24/7 and can used for real-time payments."
                />
              </div>
              <br /> <br />
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  )
}

export default VendorPayment
