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
import Header from "@/components/header/header";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import generateMetaData from "@/common/utils/metaData";

export const metadata: Metadata = generateMetaData({
  title:
    " Best Payment Gateway in India : Manage your Payments Online - EnKash",
  description:
    "Best Payment Gateway in India - EnKash Payment Gateway supports many payment modes. Accept payments from all domestic cards, UPI, Netbanking and Wallets with Lowest Fees. Book Free Demo !!",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/payment-gateway",
  },
  faqData: faqData,
});

const page = () => {
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
                title="Payment Gateway"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Enable swift business"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="transactions with our"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="secure and efficient"
              size="h2"
              color="rainy-blue"
              weight="7"
            />
            <Heading
              title="payment gateway"
              size="h2"
              color="rainy-blue"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Modernize your business with a quick, convenient and easy way of payment collections"
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
              itemArray: ["Payment", "Methods"],
              oldWayDescription:
                "Businesses rely on traditional payment methods like cash, cheques, and direct bank transfers.",
              newWayDescription:
                "With EnKash, businesses can integrate a payment gateway onto their websites  and make digital payments.",
            },
            {
              itemArray: ["Limitations"],
              oldWayDescription:
                "The traditional payment methods had their limitations in storing and losing them while transporting. Moreover, bank transfers involve delays hampering businesses.",
              newWayDescription:
                "Payment gateway enables instant payments in real-time without storing any information offline.",
            },
            {
              itemArray: ["Security"],
              oldWayDescription:
                "Be it cash, cheque, or bank transfers, security is at risk for businesses that include traditional ways of payment.",
              newWayDescription:
                "Olympus payment gateway is secure.  It enables payments by encrypting information ensuring it is secure from any violation.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Payment Gateway for"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}quick and easy payment collections`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Transactions"
              description="Payment gateway enables transactions in real-time making them quick and on-the-go"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Data"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Security"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Transactions done via payment gateways are secure and digitally encrypted to avoid data leakage"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Payment Options"
              description="A payment gateway allows you to use multiple modes of payment like debit cards/credit cards, UPI, Wallets,  and bank transfers to make payments"
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Integration"
              description="Olympus payment gateway can be easily integrated using API. This seamless integration can help businesses make quick and secure transactions"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Prevents"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Fraud"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Payment gateway detects fraud with tools to identify and mitigate the risk of online transactions"
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
                <div className="text-center d-flex flex-column">
                  <Heading
                    title={`Seamless integration with${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="enhanced security & customer experience"
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
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how virtual accounts can revolutionize the way you work!"
        />
      </div> */}
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
  );
};

export default page;
