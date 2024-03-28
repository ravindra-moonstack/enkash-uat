import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import faqData from "./faq-data";
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
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customize Subscription Management Solutions - EnKash",
  description:
    "EnKash's automated system is designed for scalability, effortlessly accommodating increasing transaction volumes without compromising efficiency. Book a Free demo Now !!",
  alternates: {
    canonical: "https://www.enkash.com/olympus/receivables/payment-links",
  },
};

const subscriptionManagement = () => {
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
                title="Subscriptions"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Automate invoices, billing"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="and renewal processes"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="with subscription"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading title="management" color="white" size="h2" weight="7" />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Eliminate manual intervention and ensure timely payments from customers with a smooth and efficient process"
              color="white"
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
                url="/sales/?source=receivables"
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
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Automates Invoices", "& Recurring Payments"],
              oldWayDescription:
                "The conventional way includes manual invoice generation and reminders and multiple follow-ups for recurring subscription payments.",
              newWayDescription:
                "With EnKash, businesses can automate invoice generation and collect recurring payments for subscriptions.",
            },
            {
              itemArray: ["Automates", "Billing Cycles"],
              oldWayDescription:
                "The manual task of billing for different subscription models is not efficient and appropriate.",
              newWayDescription:
                "With EnKash, billing cycles can be configured for varying subscription revenue models.",
            },
            {
              itemArray: ["Single", "Dashboard"],
              oldWayDescription:
                "Data can be scattered and mismanaged when handled manually.",
              newWayDescription:
                "Businesses can easily access a single dashboard to analyze their entire  subscriptions and reconciliation data.",
            },
            {
              itemArray: ["Customer", "Retention"],
              oldWayDescription:
                "Manually handling customers cannot be feasible for businesses in the long term which in turn witnesses customer churn.",
              newWayDescription:
                "Subscription management platform   ensures customer retention by providing free trials and customizing the pricing as per their requirements.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline align-items-center mb-5">
          <div className="text-center">
            <Heading
              title="A SaaS subscription management"
              color="black"
              size="h1"
              weight="6"
            />
            <Heading
              title={`${space}platform for collections`}
              color="equity-blue"
              size="h1"
              weight="6"
            />
          </div>
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Integration"
              description="Enterprises can easily integrate their website with EnKash’s subscription management model without much technical hassle. The dashboard gives a user-friendly experience"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Efficient Renewal"
              description="Businesses can eliminate the hassle of sending reminders for collections and renewal. These can be automated with subscription management and communicated to the user easily"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customer History"
              description="Businesses can easily access customer transaction history and use it to analyze their behavior to provide them with solutions that suit their needs. This data also helps in reconciliation"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Customizations"
              description="Customize the subscription management as per your business requirements and get paid on time"
              source="receivables"
            />
          </div>
        </div>
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
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how payment links can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about subscription management in detail"
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
