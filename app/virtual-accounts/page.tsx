import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import FAQ from "@/components/faq/faq";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";

import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import Link from "next/link";
import FAQHtml from "./faq-html";

export const metadata: Metadata = {
  title: "Virtual Account - Open a virtual business account| EnKash",
  description:
    "Optimize Your Financial Operations with Virtual Account Solutions. Explore virtual accounts designed to streamline receivables, enhance cash flow management, and boost financial efficiency",
};

const virtualAccounts = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
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
            <Heading title="Virtual Accounts" size="h4" weight="4" />
          </div>
          <div className="d-flex flex-column">
            {" "}
            <Heading
              title={`Harness the power of${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`virtual accounts for${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title=" quicker collections"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Streamline your payment collection process by mapping customer payments against respective invoices in real-time"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton title="EnKash Now" theme="theme-blue" />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize={15}
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
              itemArray: ["Repetitive", "Follow-up"],
              oldWayDescription:
                "The traditional way of collections requires numerous follow-ups and paper trails.",
              newWayDescription:
                "The creation of virtual accounts for various customers ensures that follow-ups are on a need-to-basis.",
            },
            {
              itemArray: ["Invoice", "Matching"],
              oldWayDescription:
                "Matching payments received against invoice reference numbers is a long-drawn and manual process.",
              newWayDescription:
                "With smart data parsing, the invoice generated for payment is easily matched with the payment received.",
            },
            {
              itemArray: ["Payment", "Links"],
              oldWayDescription:
                "With the lack of virtual accounts, the possibility of providing payment links for easy collection becomes difficult.",
              newWayDescription:
                "Embedded payment links encourage customers to make timely payments using their preferred mode of payment.",
            },
            {
              itemArray: ["Cash Flow", "Management"],
              oldWayDescription:
                "Due to lack of insights into the amount collected and the payments due, cash flow management becomes difficult.",
              newWayDescription:
                "With clear tracking of payments and insights into financial patterns, cash flow management becomes easier.",
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
              whiteTitle="Simplified Collection Tracking"
              description="With a virtual account, the process of tracking customer payments made and due can be checked easily"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Updates"
              description="Records are updated in real-time as and when payment is received from the customer"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Outstanding Management"
              description="With complete insight into payments made by customers, outstanding management becomes easy"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Automated Reconciliation"
              description="Virtual accounts make the bank reconciliation process automated,  fast, and accurate with source information"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Overall"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Visibility"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Virtual accounts ensure you have overall visibility into activities like collections and cash flow usage in a few simple clicks"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Easy Payment Collection"
              description="The payment collection becomes easy and faster with unique virtual account numbers"
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
                    title={`Use Virtual Accounts To Simplify${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Business Collection Processes"
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
          title="Learn how Virtual Accounts will change the way you approach collections and receivables!"
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
            title="Don't worry! Our FAQs section will help you learn about virtual accounts in detail"
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
          title="Seeking further understanding of virtual accounts?"
          description="Virtual accounts basically function as an electronically usable payment and collection instrument, which can be formed as a subset of your core bank account. A virtual account contains a series of unique sets of codes that in most instances are numerical"
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
                  title="Why are virtual accounts essential for my business?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="With the creation of virtual accounts, you will find it easier to manage payments you receive from your customers. Since the virtual account will be different for different customers, you will know when a customer has delayed their payment, allowing you to intensify your collection efforts. 
                  Virtual account management ensures your finance team spends less time on mundane and repetitive tasks. Virtual accounts ease the process of receivables"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Does the virtual account module help improve the finance team’s performance? If yes, how?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Yes, it does. With virtual accounts being tagged to each customer account, the tracking of payments received and the reconciliation process that follows becomes much easier. The finance team spends less time tracing which payments belong to which customer account and can support the sales team"
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why should a business consider virtual accounts?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="
                  Virtual accounts are essential for any growing business because they help them with the following aspects:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>They provide a better customer experience</li>
                  <li>
                    They help the finance team function with maximum efficiency
                  </li>
                  <li>
                    Virtual current accounts ensure that you have a complete
                    overview of your funds
                  </li>
                  <li>
                    Reduce the follow-up efforts and make the accounts
                    receivable process better
                  </li>
                  <li>
                    Let the finance team focus on more essential tasks like
                    reducing capital costs and more
                  </li>
                  <li>
                    Virtual accounts help the business to be more prepared to
                    meet audit requirements
                  </li>
                  <li>
                    You can use virtual accounts to ensure that transactions are
                    secure and prevent frauds
                  </li>
                  <li>
                    Creation of reports around DSO and the state of accounts
                    receivables in the company becomes easier
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does the virtual accounts module curb misuse?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="With the virtual accounts module, it becomes easier to track which customers are habitual late payers and the ones that often mislead you about the payment status. It also ensures that customers who are habitual defaulters do not continue to avail goods or services on credit terms. It removes the personal bias factor when it comes to deciding on credit terms for customers"
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default virtualAccounts;
