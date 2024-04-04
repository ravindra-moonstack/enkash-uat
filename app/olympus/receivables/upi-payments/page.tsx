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

export const metadata: Metadata = {
  title:
    "UPI Payments - Accept Payments Online into your Bank Account - EnKash.com",
  description:
    " UPI is a digital payment system that allows instant money transfers between bank accounts using a Virtual Payment Address (VPA). Try UPI Payments to ease business collections.",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/upi-payments",
  },
};

const AutoCollect = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`UPI${space}`}
                color="rainy-blue"
                size="h1"
                weight="7"
              />
            </div>
            <div>
              <Heading
                title="Payments"
                size="h1"
                weight="7"
                useH1TagInHtml={true}
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <div>
              <Heading
                title={`Collect payments directly${space}`}
                color="rainy-blue"
                size="h3"
                weight="7"
              />
              <Heading title={`in your`} color="white" size="h3" weight="7" />
            </div>
            <Heading
              title="bank account with UPI Payments"
              color="white"
              size="h3"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Enable easy and secure business collections with real-time settlement and two-factor authentication"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton
                title="EnKash Now"
                theme="blue"
                url="https://home.enkash.com/signup?utm_source=receivables"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=upi-payments"
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
              itemArray: ["Quick", " Payments"],
              oldWayDescription:
                "The traditional way of making B2B collections involved cash and cheques often leading to cumbersome processes.",
              newWayDescription:
                "UPI payments on the other hand offer a convenient way for B2B transactions as payments can be made instantly with virtual IDs.",
            },
            {
              itemArray: ["Instant", "Settlements"],
              oldWayDescription:
                "The conventional way of payment collection led to delayed payment settlement.",
              newWayDescription:
                "UPI payments enable real-time settlements, facilitating instant inflow of cash for the business.",
            },
            {
              itemArray: ["Improved", "Transparency"],
              oldWayDescription:
                "Manually tracking offline payments is a task in itself often leading to confusion and double or missed entries during record-keeping.",
              newWayDescription:
                "Payments made via UPI can be tracked easily, facilitating convenient record-keeping and reconciliation.",
            },
            {
              itemArray: ["Automating", "Recurring Collections"],
              oldWayDescription:
                "Recurring payment collections manually for utility, bills, rentals, and subscriptions often leads to delays and late fees.",
              newWayDescription:
                "UPI AutoPay or mandates can be set for recurring payment collections helping avoid late fees and delays.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center pb-2">
          <Heading
            title="Facilitate convenient B2B collections"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}with UPI payments `}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Economical"
              description="UPI transactions are usually free or with minimal charges. This leads to higher profit margins for your business."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Virtual UPI ID"
              description="Businesses can create their UPI ID and accept B2B payments via the UPI payment gateway. The ID can be used to track and automate the reconciliation process with UPI payments."
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
              whiteTitle="Recurring Payments with UPI AutoPay"
              description="Businesses following subscription models can collect payments with UPI AutoPay as it allows customers to enable automatic recurring payments."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Two-Factor Authentication"
              description="To avoid fraud, UPI transactions are secured with two-factor authentication. This protects businesses from financial losses."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Settlement"
              description="UPI transactions are settled in real-time implying the bank account receives the money instantly; thus improving business cash flow."
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
                <div className="text-center d-flex justify-content-center">
                  <Heading
                    title={`Payment${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="collections made easy via UPI"
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
          title="Learn how UPI Payment will change the way you approach collections and receivables!"
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
            title="Don't worry! Our FAQs section will help you learn about auto collect in detail"
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
