import { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.scss";
import { space } from "../../../../common/constant";
import { blogData, carouselData, productData } from "./data";
import faqData from "./faq-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
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
  FAQHtml
} from "@/components";
import generateMetaData from "@/common/utils/metaData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";


export const metadata: Metadata = generateMetaData({
  title: "Rent Payment - Pay Rent Through Credit Card | EnKash",
  description:
    "Decentralize rent payment by credit card to your different offices and pay rent online. Get TDS benefits and record approval hierarchy and make audits easy with Enkash's Rental Portal",
  alternates: {
    canonical: "https://www.enkash.com/olympus/payables/rental-payment/",
  },
  faqData: faqData,
});

const rentalPayments = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/payables/rental-payment/`}
        faqData={faqData}
      />
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`Rental Payments${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-line">
            <Heading
              title={`Hassle-Free ${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Rent Payments "
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading title={`with EnKash`} color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Say goodbye to delays and manual effort. EnKash accelerates rent payments, ensuring they are fast, secure, and convenient"
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
          <LottieClientComponent animationData={bannerLottie} loop={true} />
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Never Miss Your Rent Payment"
            steps={[
              {
                icon: userPlus,
                text: "No Late Payments",
              },
              {
                icon: stack,
                text: "Secure Transactions",
              },
              {
                icon: numberOne,
                text: "Payment Tracking",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-2">
          <Heading
            title="Put an End to Rental Payment Woes "
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}with EnKash`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Eliminate Late Payment Penalties"
              description="Avoid late fees with EnKash’s automated reminders and recurring payments. Ensure your rent is paid on time, every time, improving cash flow and eliminating the need for constant follow-ups."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multiple Payment Modes"
              description="Pay your rent your way with EnKash. Choose from UPI, NEFT, RTGS, credit cards, or digital wallets for instant processing or flexible fund management—ensuring convenience for you and satisfaction for your landlord."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Streamlined Payment Tracking"
              description="Say goodbye to messy spreadsheets with EnKash’s centralized dashboard. Get a real-time view of all your rent transactions—paid, pending, and overdue—on one intuitive platform, giving you control and transparency like never before."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Instant Reconciliation"
              description="Save hours with automatic reconciliation on EnKash. Seamlessly link payments to invoices, eliminating manual matching and errors. Enjoy accurate records and peace of mind as rent settlements are tracked effortlessly."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Secure Transactions"
              description="Your security is our priority. EnKash employs multi-layered encryption, fraud detection, and bank-grade protocols to protect every transaction, ensuring your data and funds are safe whether paying rent via credit card, UPI, or other methods."
              source="payables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Fast Onboarding"
              description="Get started effortlessly with EnKash. Complete your KYC, set up rental payment preferences, and you're ready to go in a few simple steps—no steep learning curve, just seamless functionality from day one"
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
                <div className="text-center d-flex flex-column">
                  <Heading
                    title={`How To Setup ${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Rent Payments Automation"
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
          title="Learn how rental payments can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about rental payments in detail"
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
          title="Seeking further understanding of rent payment software?"
          description="Rent payment software or platform is often a part of your overall business spend management platform and helps you manage and automate your business rental payments."
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
                  title="Why should you pay rent using a credit card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="There are many reasons to pay rent using a credit card:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Using your credit card and getting a credit period to make
                    rental payments helps manage your cash flow
                  </li>
                  <li>
                    It is easy to create records and set processes while using a
                    card to make rental payments
                  </li>
                  <li>
                    It helps to pay rent using credit cards when you are facing
                    a temporary funds crunch and helps in short-term working
                    capital management
                  </li>
                </ul>
              </div>

              {/* <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why should you choose EnKash for paying rent using credit cards?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Here are some of the main reasons to pay rent using the EnKash portal:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    It offers an intuitive and quick method of paying rent
                  </li>
                  <li>
                    The charges to use your credit card on the EnKash portal are
                    reasonable
                  </li>
                  <li>
                    It is possible to create approval processes to meet auditory
                    requirements
                  </li>
                  <li>
                    Syncing with your existing ERP or accounting system is easy
                  </li>
                  <li>You can generate MIS reports with a few simple clicks</li>
                </ul>
              </div> */}

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to pay rent online with a credit card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Here are a few one-time steps to set up the process:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>Set up processes and workflows and upload records</li>
                  <li>Set maker-checker-approver matrices</li>
                  <li>Define centralized and decentralized processes</li>
                  <li>
                    Include details like GST, TDS, and other factors applicable
                    to your rental amounts
                  </li>
                </ul>
              </div>

              {/* <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to make multiple office rent payments with credit cards?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can make multiple rental payment for business through credit cards on the EnKash portal by using our bulk payment option. To do that, ensure that all rental agreements and details are uploaded. Once the records are uploaded, it is simply a matter of setting limits and getting approvals to pay using the card as described above. Before making the payment, fetch rental records, view the records, adjust for deductions, advance payments, taxes, etc, and get approvals for payments. You can pay rent via any credit card in the following way:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>Select the rental bills you want to pay</li>
                  <li>Input your credit card details and request OTP</li>
                  <li>
                    Enter OTP and complete the bulk rental payment in one click
                  </li>
                </ul>
              </div> */}

              {/* <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the benefits of paying rent via credit card?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="There are many benefits of rent payment through credit card, which include the following:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Smart utilization of funds by getting access to additional
                    working capital easily
                  </li>
                  <li>
                    With well-timed payments, you can get a free credit period
                    to repay the amount
                  </li>
                  <li>
                    Automatic recording of payments with a portal like EnKash
                  </li>
                </ul>
              </div> */}

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to get rent receipts for online rent payments?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="If you are using EnKash portal to make online rent payments, it is a matter of a few clicks to download the rental payment receipts. You will be intimated via email of your rental payment along with an attached receipt."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why should businesses use automated rental payments?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Automated rental payments are a convenient and efficient way for businesses to collect payments. These can reduce the late payment charges and eliminate the need to pay cheques or cash each month manually. Additionally, automated rental payments help businesses save time and simplify accounting and record-keeping."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  );
};

export default rentalPayments;
