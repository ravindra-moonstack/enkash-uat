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
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import productData from "./product-data";
import AllProducts from "@/components/all-products/all-products";
export const metadata: Metadata = generateMetaData({
  title:
    "UPI Payments - Accept Payments Online into your Bank Account - EnKash.com",
  description:
    " UPI is a digital payment system that allows instant money transfers between bank accounts using a Virtual Payment Address (VPA). Try UPI Payments to ease business collections.",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/upi-payments/",
  },
  faqData: faqData,
});

const AutoCollect = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/receivables/upi-payments/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`UPI Payments${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
          </div>
          <div className="">
            <Heading
              title={` Simplify Transactions, Accelerate Growth with EnKash `}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`UPI Payments `}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>
          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Effortless UPI payment. Whether it's BHIM, PhonePe, WhatsApp, or any UPI-supported app, experience smooth transactions without the hassle of SMS notifications or remembering VPAs."
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
                title=" API Documentation"
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
            title="Best UPI Payment Platform for Businesses "
            steps={[
              {
                icon: userPlus,
                text: "Instant Setup ",
              },
              {
                icon: stack,
                text: "Real-time Settlement",
              },
              {
                icon: numberOne,
                text: "Secure Transactions",
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
        <div className="d-inline text-center pb-2">
          <Heading title="EnKash" color="equity-blue" size="h1" weight="6" />
          <Heading
            title={`${space}UPI Payment Gateway for Businesses  `}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Effortless Integration "
              description="EnKash's easy-to-use SDKs and APIs seamlessly integrate UPI payments into your website or app, eliminating complex setups and saving time, so you can focus on growing your business effortlessly."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Instant Settlement"
              description="Our real-time settlement system ensures instant fund deposits into your bank account after customer payments, improving cash flow and enabling you to reinvest in your business without delays."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Prioritize Secure Transactions"
              description="Security is our priority. EnKash’s advanced infrastructure encrypts every UPI transaction, along with enabling two-factor authentication, safeguarding your business and customer data, reducing fraud risk, and ensuring peace of mind for you and your customers."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Ease of Use"
              description="UPI uses Virtual Payment Addresses or VPAs eliminating the need for lengthy bank account details. This establishes convenience as customers only need the merchant’s UPI ID to make payment."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="No Payment Failures"
              description="EnKash ensures the highest UPI success rates with optimized payment routing and advanced technology. Enjoy fewer declined payments, smoother transactions, increased customer trust, and higher revenue by never missing a payment."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Multiple Checkout Options"
              description="Integrate and use multiple UPI checkout options like dynamic QR code, WhatsApp UPI links, static QR code, virtual UPI ID, UPI autopay and UPI one-time mandate."
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
                <Heading
                  title={`Payment collections made easy via${space}`}
                  color="white"
                  size="h1"
                  weight="6"
                />
                <Heading title="UPI" color="rainy-blue" size="h1" weight="6" />
              </div>
            </>
          }
          mainTitle="How UPI Payment Works?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how UPI Payment will change the way you approach collections!"
        />
      </div>

      <div className={`${styles.fifth_row} row row-padding-x-only bg-white`}>
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about UPI Payments in detail"
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
      <div className={`${styles.second_row}  bg-white  `}>
        <AllProducts
          title="Check out other payment products at"
          subtitle="EnKash"
          data={productData}
        />
      </div>
      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of UPI payment?"
          description="UPI payments enable efficient and convenient business collections making it easier for them to manage their cash inflow and make better financial decisions."
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
                  title="Q. How to use UPI for B2B collections?"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    <strong>Generate UPI VPA:</strong> Ensure your business bank
                    account supports UPI. Generate a VPA through your bank's
                    mobile app or website.
                  </li>
                  <li>
                    <strong>Share your VPA:</strong> Provide your VPA details to
                    your customers via invoice, email, or any preferred
                    communication channel.
                  </li>
                  <li>
                    <strong>Payment Initiates:</strong> Your customer can
                    initiate the payment through their UPI app using your VPA
                    and the invoice amount.
                  </li>
                  <li>
                    <strong>Receive instant notification:</strong> You will
                    receive a notification on your UPI app upon payment
                    completion.
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h3"
                  color="black"
                  weight="6"
                  title="Q. Is UPI widely used for B2B payments now?"
                />
              </div>
              <div className="mb-5">
                <p>
                  UPI in B2B payments is currently used in a limited manner,
                  however, businesses will soon adapt to it considering the
                  benefits it offers.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h3"
                  color="black"
                  weight="6"
                  title="Q. How safe is UPI to receive payments for my business, especially for B2B transactions?"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    <strong>Two-Factor Authentication:</strong> UPI transactions
                    require a UPI PIN and a one-time password to complete a
                    payment. This two-factor authentication provides a double
                    layer of verification making it difficult for unauthorized
                    access.
                  </li>
                  <li>
                    <strong>Real-time Verification:</strong> UPI transactions
                    take place instantly prompting a notification confirming
                    payment status. This eliminates the risk of delayed payment
                    enabling quick reconciliation.
                  </li>
                  <li>
                    <strong>Transparency:</strong> UPI transactions provide
                    details like the sender's name and UPI ID associated with
                    each payment. This establishes transparency during the audit
                    trail for B2B transactions.
                  </li>
                  <li>
                    <strong>Efficiency:</strong> Customers can pay using the
                    business’s VPA eliminating the need for lengthy bank
                    transfers. This saves time and reduces effort.
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>

      <Footer utmSource="receivables" />
    </div>
  );
};

export default AutoCollect;
