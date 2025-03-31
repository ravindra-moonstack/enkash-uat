import Image from "next/image";
import styles from "./page.module.scss";
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
} from "@/components";
import { space } from "../../../../common/constant";
import { blogData, carouselData ,productData } from "./data";
import faqData from "./faq-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import { Metadata } from "next";
import generateMetaData from "@/common/utils/metaData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";



export const metadata: Metadata = generateMetaData({
  title: "Accept Instant Payments through QR codes for your Business",
  description:
    "QR codes help enterprises accept contactless and error-free in-store payments from customers using any UPI app.",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/qr-codes/",
  },
  faqData: faqData,
});

const QRCodes = (): React.JSX.Element => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/receivables/qr-codes/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div>
              <Heading
                title="QR Codes"
                color="rainy-blue"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
              <sup className="sup-symbol"></sup>
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Contactless${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <div className="d-inline">
              <Heading
                title={`Payments with${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
            <Heading title="UPI QR Code" color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Generate unique QR codes to collect payments via any UPI app while tracking each transaction for your business."
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="Get Started"
                theme="blue"
                url="/sales?source=receivables"
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
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Best Online Payment Solution"
            steps={[
              {
                icon: userPlus,
                text: "Fast",
              },
              {
                icon: stack,
                text: "Economical",
              },
              {
                icon: numberOne,
                text: "Secure",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.second_row} row d-flex bg-white row-padding-top-none`}
      ></div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Why EnKash for Collecting QR Code Payments"
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Generate QR Codes in Seconds"
              description="Generate unique QR codes instantly with EnKash’s user-friendly platform. No complicated steps or delays—just a few clicks to start accepting payments and boosting your business efficiency."
              source="qr-codes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Maintain Brand Identity"
              description="Add your business logo to every QR code with custom branding, promoting trust, and professionalism, and reinforcing your brand identity at every payment interaction—a simple yet impactful way to make your business unforgettable."
              source="qr-codes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Dynamic QR Codes"
              description="Generate fixed-amount QR codes for specific transactions or dynamic codes for flexible payments. Perfect for recurring billing or varied purchases, our solution adapts to your business needs, ensuring convenience for you and your customers."
              source="qr-codes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-time Reconciliation & Tracking"
              description="Track your finances in real-time with EnKash’s dashboard, offering instant payment updates, detailed reports, and reconciliation tools for clear insights and efficient revenue management."
              source="qr-codes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Enterprise-grade Security"
              description="Secure your business and customer data with EnKash’s encrypted QR codes, which are compliant with global security standards, ensuring every transaction is safe, reliable, and trustworthy for peace of mind."
              source="qr-codes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Unique QRs for Business Chains"
              description="Generate unique QRs for businesses with franchisees/chains/departments like hospitals, restaurants, travel agencies, jewellery showrooms, theaters, retail stores, pharmacies etc.Use data to reconcile with individual transaction."
              source="qr-codes"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <Heading
                  title={`Accepting Payments via`}
                  color="white"
                  size="h1"
                  weight="6"
                />
                <Heading
                  title={`${space}QR Codes${space}`}
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
                <Heading
                  title="was Never This Easy"
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

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how payment links can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about QR Codes in detail"
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

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="Check out other payment products at"
          subtitle="EnKash"
          data={productData}
        />
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of QR codes?"
          description="A QR code, short for Quick Response code, is a type of two-dimensional barcode that contains information in a machine-readable format. A QR code acts as a digital bridge between a customer and a business to initiate a contactless payment by helping users to pay and accept payments using the QR code scanner. "
          source="receivables"
        />
      </div>

      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore the comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h3"
                  color="black"
                  weight="6"
                  title="Q. How do I reconcile payments received through QR codes?"
                />
              </div>
              <div className="mb-5">
                <p>
                  EnKash provides a user-friendly dashboard for real-time
                  transaction tracking and automated reconciliation reports.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h3"
                  color="black"
                  weight="6"
                  title="Q. How to scan QR code with Google Pay?"
                />
              </div>
              <div className="mb-5">
                <p>
                  While Google Pay doesn't directly generate QR codes for
                  businesses, you can leverage our QR code solution to accept
                  payments through Google Pay. Here's how you can scan QR code
                  online:
                </p>

                <p>
                  <strong>Customers initiate payment:</strong> The customer
                  visits your store or receives an invoice with a static QR code
                  which can be generated on our platform.
                </p>
                <p>
                  <strong>Scan the QR code:</strong> The customer opens their
                  Google Pay app and accesses the QR scanner to scan QR code
                  online (refer to Google Pay's guide for specific steps).
                </p>
                <p>
                  <strong>Complete the payment:</strong> Google Pay will display
                  the pre-defined payment amount associated with the static QR
                  code. The customer confirms the payment using their Google Pay
                  PIN or fingerprint.
                </p>
                <p>
                  <strong>Payment confirmation:</strong> You'll receive
                  real-time notification of the successful payment on your
                  EnKash account.
                </p>
              </div>
            </>
          }
        />
      </div>

      <Footer utmSource="receivables" />
    </div>
  );
};

export default QRCodes;
