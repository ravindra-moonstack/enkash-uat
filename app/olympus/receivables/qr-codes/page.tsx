import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import BlogWrapper from "@/components/blog/blog-wrapper";
import Header from "@/components/header/header";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";

export const metadata: Metadata = generateMetaData({
  title: "Accept Instant Payments through QR codes for your Business",
  description:
    "QR codes help enterprises accept contactless and error-free in-store payments from customers using any UPI app.",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/qr-codes/",
  },
  faqData: faqData,
});

const QRCodes = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Olympus |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <div>
              <Heading
                title="QR Codes"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
              <sup className="sup-symbol"></sup>
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title={`Make secure${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <div className="d-inline">
              <Heading
                title={`contactless${space}`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading
                title={`payments${space}`}
                color="white"
                size="h2"
                weight="7"
              />
            </div>
            <Heading
              title="using QR codes"
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Empower your business to accept instant payments through QR codes. Offer a seamless customer experience and streamline your collection process"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="EnKash Now"
                theme="blue"
                url="/sales/?source=receivables"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
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
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Payment", "Process"],
              oldWayDescription:
                "Previously, making purchases required carrying a card or cash at all times, resulting in inconvenience.",
              newWayDescription:
                "Now customers can effortlessly scan QR codes using their mobile phones, leading to a quicker, more secure, and more convenient payment process.",
            },
            {
              itemArray: ["Settlement", "Time"],
              oldWayDescription:
                "Funds used to take days to settle in merchant's account, with no option to settle on holidays or weekends, causing a cashflow crunch.",
              newWayDescription:
                "With us, experience 365-days of instant settlements of funds after successful payment, even on bank holidays, for improved cash flow.",
            },
            {
              itemArray: ["Accounting", "Software Integration"],
              oldWayDescription:
                "Integration with accounting software was challenging due to transactions occurring in various modes such as cash, cards, and cheques.",
              newWayDescription:
                "Seamlessly integrate with accounting softwares like Tally, and automate reconciliation for both online and offline payments.",
            },
            {
              itemArray: ["Cost"],
              oldWayDescription:
                "Use of cash, card, or cheques, typically incurred high transaction fees, equipment costs for POS systems, and maintenance expenses.",
              newWayDescription:
                "The use of QR codes offers lower transaction fees, minimal setup costs, and reduced maintenance expenses, making it a cost-effective solution for businesses.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title=" Collect payments with QR codes"
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Static QR Codes"
              description="Generate a single QR code for your business. Customers scan and pay the pre-defined amount using any UPI app. Ideal for displaying at stores or on invoices"
              source="qr-codes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Dynamic QR Codes"
              description="Generate unique QR codes for each transaction. Perfect for online payments, allowing you to capture specific invoice details for easy reconciliation and can be left open-ended for variable payment amounts"
              source="qr-codes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Universal Acceptance"
              description="Accept payments via popular UPI apps like Google Pay, Phonepe, etc"
              source="qr-codes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-time Tracking"
              description="Create different QR codes for multiple branches or customers and easily track and reconcile all the incoming payments"
              source="qr-codes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customizable Design"
              description="Tailor and collect payment with QR codes with your brand logo and colors, creating a seamless payment experience for your customers"
              source="qr-codes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Enhanced Security"
              description="PCI DSS-compliant platform ensures secure transactions"
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
                <div className="text-center d-flex justify-content-center">
                  <Heading
                    title={`Leverage`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`${space}QR Code integration${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="for your business"
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
