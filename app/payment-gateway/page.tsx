import { Metadata } from "next"
import Image from "next/image"
import styles from "./page.module.scss"
import { space } from "@/common/constant"
import {
  bannerLottie,
  caraouselBg,
  faqBg,
  stepOne,
  stepThree,
  stepTwo,
  whiteArrow,
} from "."
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
import { blogData, carouselData } from "./data"
import faqData from "./faq-data"

export const metadata: Metadata = generateMetaData({
  title: "Best Payment Gateway in India : Manage your Payments Online - EnKash",
  description:
    "Best Payment Gateway in India - EnKash Payment Gateway supports many payment modes. Accept payments from all domestic cards, UPI, Netbanking and Wallets with Lowest Fees. Book Free Demo !!",
  alternates: {
    canonical: "https://www.enkash.com/payment-gateway/",
  },
  faqData: faqData,
})

const PaymentGateway = (): React.JSX.Element => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/payment-gateway/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Payment Gateway${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="India’s First "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title=" Payment Gateway "
              size="h2"
              color="rainy-blue"
              weight="7"
            />
            <Heading
              title="Built for SMBs "
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="The best payment gateway for a superior merchant experience."
              size="h6"
              weight="5"
            />
          </div>

          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="Become a Partner"
                theme="blue"
                url="/sales/?source=receivables"
              />
            </div>
            <div>
              <SecondryButton
                title="API Documentation"
                actionImage={whiteArrow}
                iconSize={15}
                url="https://docs.enkash.com/payment-gateway"
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
            title="RBI-Approved Online Payment Gateway Built for Growing Businesses"
            steps={[
              {
                icon: stepOne,
                text: "Support",
              },
              {
                icon: stepTwo,
                text: "Uptime",
              },
              {
                icon: stepThree,
                text: "Faster",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.second_row}  row d-flex bg-white px-md-5 px-0 mb-5 pt-5`}
      >
        <div className="d-inline text-center my-5 px-3 px-md-5">
          <Heading title="Built for " color="black" size="h1" weight="6" />
          <Heading title="SMBs " color="equity-blue" size="h1" weight="6" />
          <Heading
            title={`trusted by enterprises`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Developer-First, Business-Focused"
              description="<span>Integrate payment gateway</span>across platforms, <span> Shopify, WooCommerce, Magento,</span>  or your custom stack, with powerful  <span>payment gateway API integration,</span> with 50+ major banks, <span>Digital Wallets</span>  SDKs, and no-code plugins. Build quickly. Scale endlessly."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="100+ Payment Methods"
              description="Unmatched flexibility for your customers with support for<span>UPI,</span> cards, <span> net banking,</span> wallets, BNPL, and EMI, making it easier to complete transactions on their terms, every time."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="One Dashboard, Total Control"
              description="Track payments, monitor refunds, reconcile faster, and get actionable business insights,  all from one intuitive dashboard."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="100% Lifetime Support"
              description="You are never left in the dark. We offer dedicated relationship managers, tech support across all stages, and 24x7 <span>merchant support</span> ."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Bank Grade Security"
              description="A secure payment gateway with features like <span>PCI DSS Compliance</span> for data protection, <span>end-to-end encryption</span> to prevent breaches, <span>tokenization</span> for enhanced privacy, and <span>continuous monitoring</span> with real-time threat assessments and audits."
              source="receivables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <Heading title="EnKash " color="white" size="h1" weight="6" />
                <Heading
                  title="Payment Gateway Integration "
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
                <Heading
                  title="for the Best Merchant Experience  "
                  color="white"
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

      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about payment gateway in detail"
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

      <div className={`${styles.second_row}  bg-white `}>
        <AllProducts subtitle="EnKash" />
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how payment gateway works for businesses."
        />
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of payment gateway?"
          description="Payment gateway enables secure business transactions while supporting multiple payment methods. These integrate seamlessly with websites and avoid data leakage and fraud."
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
                  title="How to integrate payment gateway in the website?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Payment gateway APIs are integrated into the business website to ensure data transmission and encryption. This ensures that all the parties involved in the transaction - vendor and customer are aware of the process."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Integrating a payment gateway to the website needs a payment gateway service provider and building a technology aligned with the website’s checkout process. This can be customized for payment methods as required."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="There are different types of payment gateway integration options as per business needs:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    <strong>API Integration:</strong> This enables a maximum
                    number of customizations and suits businesses with custom
                    websites or apps.
                  </li>
                  <li>
                    <strong>Plugin Integration:</strong> This is perfectly
                    suited if you use platforms like WordPress, Shopify, and
                    others.
                  </li>
                  <li>
                    <strong>SDK Integration:</strong> This enables the developer
                    to create their version of the payment gateway for their
                    mobile app or website.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the terms and conditions for integrating Olympus payment gateway with their business?"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses need to follow these terms and conditions to activate Olympus payment gateway:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    The business website must be live in the public domain
                  </li>
                  <li>
                    The website needs to have: A{" "}
                    <strong>Contact Us section</strong> with an email address
                    and phone number. A <strong>Privacy Policy</strong> section.
                    <br /> A Refund Policy section. A{" "}
                    <strong>Terms and Condition</strong> section
                  </li>
                  <li>
                    The website must not be dealing in banned products and
                    services
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What payment modes are supported by EnKash?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash supports multiple modes of payment like credit cards, debit cards, net banking, NEFT, and RTGS payments."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What documents are required for setting up an EnKash account?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="For the onboarding process, businesses need to submit their details like PAN card number and complete their KYC by providing their details like address proof, business proof, and website details."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Does EnKash own a license for being a payment gateway?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Yes, EnKash’s product Olympus Payment Gateway is a licensed online payment aggregator authorized by the RBI. EnKash happens to be the first new applicant to get the license."
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

export default PaymentGateway
