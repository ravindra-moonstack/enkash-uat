import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import { faqData, secondFaqData } from "./faq-data";
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
import { FAQHtml } from "@/components/faq";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import AllProducts from "@/components/all-products/all-products";
import productData from "./product-data";
import BlogWrapper from "@/components/blog/blog-wrapper";

export const metadata: Metadata = generateMetaData({
  title: "eNACH & eMandate: Registration, Process & Status Check - EnKash",
  description:
    "Simplify collections payments, reduce paperwork & enhance financial efficiency with our e-NACH Solution. Explore the benefits of Electronic National Automated Clearing House (eNach) & eMandate.",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/e-nach/",
  },
  faqData: faqData,
});

const eNach = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/receivables/e-nach/`}
        faqData={faqData}
      />

      <Header utmSource="receivables" />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <Heading
              title={`e-NACH${space}`}
              color="rainy-blue"
              size="h4"
              weight="7"
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Automate Recurring "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Payments with EnKash"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading title="eNACH" size="h2" color="rainy-blue" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Effortlessly automate recurring collections with EnKash eNACH mandate. Set up fast, secure digital mandates and seamlessly collect large recurring payments."
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
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent animationData={bannerLottie} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Simplify Collections for Businesses"
            steps={[
              {
                icon: userPlus,
                text: "Secure Transactions",
              },
              {
                icon: stack,
                text: "Seamless Auto-debit",
              },
              {
                icon: numberOne,
                text: "Real-time Notifications",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center">
          <Heading
            title={`${space}Digital Payment System `}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title={`${space}for `} color="black" size="h1" weight="6" />
        </div>

        <div className="mb-5 text-center">
          <Heading
            title={`${space}Recurring Payments`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Digital Mandate "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Saves Time"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="With enach, users can register mandates digitally bringing down the time involved."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Optimizes Transactions"
              description="e-NACH automates recurring collections and simplifies business processes"
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Fewer Errors & "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Timely Collections"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Businesses can reduce errors and streamline their payment processes to ensure timely collections with enach registration."
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Authentication "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="for Security"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="receivables"
              description="The automated payments made via E-NACH require one-time authentication."
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Expense "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Reduction"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="enach helps eliminate variable costs required for follow-ups, invoicing, operations, etc"
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Easy Plug &  "
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Play Integration"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="It provides customers hassle-free and smooth authentication as compared to physical NACH and can be easily integrated via plug and play method."
              source="receivables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white `}>
        <AllProducts
          title="Check Out EnKash’s Other Payment Products and Solutions"
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
                    title={`Automate business payments and 
                    ${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />

                  <div>
                    <Heading
                      title={`collections ${space}`}
                      color="white"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title={`with e-NACH 
                    ${space}`}
                      color="rainy-blue"
                      size="h1"
                      weight="6"
                    />
                  </div>
                </div>
              </div>
            </>
          }
          mainTitle="How to Setup eNACH?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how virtual accounts can revolutionize the way you work!"
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
        className={`${styles.fifth_row} row row-padding-bottom-none  bg-white`}
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
          title="Seeking further understanding about e-NACH?"
          description="The automated process of collecting funds from customers regularly for monthly subscriptions, loan repayments, utility bills, and insurance premiums with electronic authorization is e-NACH. It helps streamline the payment process by eliminating human interaction and reducing errors, promising timely collections."
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
                  title=" What does recurring payments mean?"
                />
              </div>

              <div className="mb-5">
                <p>
                  A payment model where customers authorize the payment of funds
                  from their accounts automatically at regular intervals for
                  goods, services, or{" "}
                  <Link
                    href="https://www.enkash.com/olympus/payables/bill-payment/"
                    target="_blank"
                  >
                    bill payments
                  </Link>{" "}
                  on an ongoing basis is called recurring payments.
                </p>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What is the difference between NACH and e-NACH?"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="National Payments Corporation of India (NPCI) incorporated the National Automated Clearing House or NACH for banks to make bulk transactions for subsidy distribution, dividends, and salaries."
                />
              </div>

              <div className="mb-3">
                <p>
                  NACH enables repetitive transactions that take place in bulk.
                  It can be further used for{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/bulk-collect/"
                    target="_blank"
                  >
                    payment collection
                  </Link>{" "}
                  like electricity bills, water bills, insurance premium
                  payments, and other utility bills.
                </p>
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="To automate these recurring payments, NPCI introduced the Electronic National Automated Clearing House, or e-NACH. The need to fill the NACH forms and involvement in paperwork is eliminated due to e-NACH. The mandate registration process for e-NACH can be completed within a few hours and requires minimum human intervention."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does e-Mandate work?"
                />
              </div>

              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="
                  E-mandate works by allowing individuals to provide their consent digitally for businesses to deduct payments directly from their bank accounts. These are directly set up through a net banking transaction from merchant websites. To enable this, a customer would have to complete a one-time net banking transaction authorization after which all subsequent payments will not require customer intervention."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does e-NACH work?"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="E-NACH works via electronic mandates, where customers are supposed to provide their authorization for automated debits from their bank accounts. These mandates enable businesses to initiate payments on pre-determined dates. The automated nature of e-NACH minimizes the administrative burden on businesses and customers, ensuring a secure and seamless payment experience."
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

export default eNach;
