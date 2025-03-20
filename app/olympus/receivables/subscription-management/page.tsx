import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import { faqData, secondFaqData } from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { banner, caraouselBg, faqBg, whiteArrow } from ".";
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
import { FAQHtml } from "@/components/faq";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";
import { userPlus, numberOne, stack } from "@/components/three-steps/";
import AllProducts from "@/components/all-products/all-products";
import productData from "./product-data";

export const metadata: Metadata = generateMetaData({
  title: "Customize Subscription Management Solutions - EnKash",
  description:
    "EnKash's automated system is designed for scalability, effortlessly accommodating increasing transaction volumes without compromising efficiency. Book a Free demo Now !!",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/payment-links/",
  },
  faqData: faqData,
});

const subscriptionManagement = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/olympus/receivables/subscription-management/`}
        faqData={faqData}
      />
      <Header utmSource="receivables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Subscription Management${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex flex-column">
            <Heading title="Trusted" color="white" size="h2" weight="7" />
            <Heading
              title="Subscription Management"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="Software for Growth-oriented "
              color="white"
              size="h2"
              weight="7"
            />
            <Heading title="Businesses" color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Keep cash flow for your subscription-based business steady by collecting recurring payments via multiple payment methods like eNACH, autopay, standing instruction on credit & debit cards"
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
                url="/sales/?source=receivables"
              />
            </div>

            <div>
              <SecondryButton
                title="API Documentation"
                actionImage={whiteArrow}
                iconSize={15}
                url="https://docs.enkash.com"
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className={styles.lottie_container}>
            <LottieClientComponent animationData={banner} loop={true} />
          </div>
        </div>

        <div className={styles.three_step_container}>
          <ThreeSteps
            title="Time to scale subscription business with automated renewals and billing cycles"
            steps={[
              {
                icon: userPlus,
                text: "RBI Compliant",
              },
              {
                icon: stack,
                text: "Automated Subscription Management",
              },
              {
                icon: numberOne,
                text: "Customizable Subscription Plans",
              },
            ]}
          />
        </div>
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only mb-0`}
      >
        <div className="d-inline align-items-center mb-5">
          <div className="text-center">
            <Heading
              title="Manage Collections Business "
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`${space}Subscriptions Efficiently `}
              color="equity-blue"
              size="h1"
              weight="6"
            />
          </div>
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Smooth Integration"
              description="Businesses can integrate their payment gateways with the subscription management model with minimal technical effort. The user-friendly dashboard ensures a smooth experience"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automate Billing Cycles "
              description="Businesses can integrate their payment gateways with the subscription management model with minimal technical effort. The user-friendly dashboard ensures a smooth experience"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Renewal"
              description="Simply link the customer to a subscription plan and automate the invoicing, billing and renewal processes with the EnKash subscription model."
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customizations"
              description="With EnKash, billing cycles can be configured as per business subscription revenue models"
              source="receivables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.second_row}  bg-white`}>
        <AllProducts
          title="Check out other payment products at"
          subtitle="EnKash"
          data={productData}
        />
      </div>
      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center d-flex flex-column">
                <Heading
                  title="Manage business"
                  color="white"
                  size="h1"
                  weight="6"
                />

                <Heading
                  title="subscriptions efficiently"
                  color="rainy-blue"
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
          title="Seeking further understanding about subscription management?"
          description="Subscription management includes tasks such as tracking subscriptions, and managing renewals while ensuring efficient costs."
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
                  title="How does EnKash subscription management help my business?"
                />
              </div>
              <div className="mb-3">
                <p>
                  <strong>Customization:</strong> Businesses can customize the
                  subscription management as per their requirements and save
                  costs accordingly.
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <strong>Easy integration:</strong> Enterprises can easily
                  integrate with EnKash to manage their subscriptions
                  efficiently.{" "}
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <strong> Single dashboard access:</strong> Easy access to a
                  user-friendly dashboard to track invoices, check customer
                  history, and understand their behavior.
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <strong>Recurring payments: </strong>Define recurring payments
                  for your customers with{" "}
                  <Link href="https://www.enkash.com/" target="_blank">
                    EnKash’s subscription management.
                  </Link>{" "}
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <strong> Automated invoice generation: </strong> Businesses
                  can{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/invoices/"
                    target="_blank"
                  >
                    automate invoice generation
                  </Link>{" "}
                  for recurring payments by defining the timeline and frequency
                  for their customers.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  {" "}
                  <strong> Customer management: </strong> EnKash helps manage
                  customers efficiently by providing them with timely reminders,
                  automated invoices, and easy communication.
                </p>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Can we customize subscription payments?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses can customize subscription payments as per their industry standards, their customers and business needs like cash flow. If they need cash flow quarterly, they can define collections from customers in that way."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How automated subscription works?"
                />
              </div>
              <div className="mb-5">
                <p>
                  Automated subscriptions enable businesses to{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/bulk-collect/"
                    target="_blank"
                  >
                    track and collect payments
                  </Link>{" "}
                  for their product or service automatically with various
                  payment gateways. In case, a customer doesn’t have sufficient
                  funds, they will be automatically notified.
                </p>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does subscription management software help in customer retention?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Subscription management software allows customization of subscriptions based on customer preferences and their history. This enables a unique and customizable experience for the customer that meets their expectations. This helps in customer retention; making them feel valued and preferred."
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

export default subscriptionManagement;
