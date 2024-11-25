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
import StructuredData from "@/components/head/structuredData";

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
                title="e-NACH"
                size="h4"
                weight="4"
                useH1TagInHtml={true}
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Automate recurring"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="payments and collections"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="for your business"
              size="h2"
              color="white"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Facilitate a simple and hassle-free process for payments and collections through quick and reliable transactions"
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
              itemArray: ["Automated", "Reminders"],
              oldWayDescription:
                "The traditional way requires one to remember payment due dates and manually initiate payments.",
              newWayDescription:
                "e-NACH keeps track of all recurring payments and enables you to make payments automatically; helping you save big on penalties and lapsing of services.",
            },
            {
              itemArray: ["Convenience"],
              oldWayDescription:
                "The traditional way of making payments does not give you the flexibility of payments as per convenience.",
              newWayDescription:
                "e-NACH enables you to choose the payment schedule as per convenience for recurring payments.",
            },
            {
              itemArray: ["Data", "Security"],
              oldWayDescription:
                "The conventional way of transactions leaves your data prone to violation and misuse.",
              newWayDescription:
                "e-NACH transactions are digitally authorized and encrypted, which reduces the risk of data breaches.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center">
          <Heading title="Improve your" color="black" size="h1" weight="6" />
          <Heading
            title={`${space}business collections`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title={`${space}with`} color="black" size="h1" weight="6" />
        </div>

        <div className="mb-5 text-center">
          <Heading
            title={`${space}virtual accounts`}
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
                    title="Digital"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Mandate"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="e-NACH allows users to register mandates digitally, reducing the time involved"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Streamlines Payments"
              description="It automates recurring payments and collections and simplifies business processes"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Timely Collections"
              description="It reduces errors, streamlines the payment process, and ensures timely collections"
              source="receivables"
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="One-Time Authentication"
              source="receivables"
              description="The automated payments made via E-NACH require one-time authentication"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Cost"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Savings"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="It helps eliminate variable costs required for follow-ups, invoicing, operations, etc"
              source="receivables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Plug & Play Integration"
              description="It provides customers a hassle-free and smooth authentication as compared to physical NACH and can be easily integrated via plug and play method"
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
            title="Don't worry! Our FAQs section will help you learn about e-Nach in detail"
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
