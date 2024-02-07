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
import BlogWrapper from "@/components/blog/blog-wrapper";
import Footer from "@/components/footer/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payable Analytics Automation Solution for Business - EnKash",
  description:
    "Track your AP metrics and KPIs is an excellent way to improve operations and make data-driven business decisions with EnKash Payable Analytics. Book a Free Demo !!",
  alternates: {
    canonical: "https://www.enkash.com/olympus/payables/payable-analytics/",
  },
};

const payableAnalytics = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="payables" />
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
            <Heading
              title="Payable Analytics"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Access, manage and"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="utilize data with payable"
              color="white"
              size="h2"
              weight="7"
            />
            <div>
              <Heading
                title="analytics for"
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title={`${space}better`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>

            <Heading
              title="business outcomes"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Identify unnecessary costs, stay on top of your cash flows, and improve vendor relationships"
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
                url="https://home.enkash.com/signup?utm_source=payables"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=payables"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <LottieClientComponent animationData={bannerLottie} loop={true} />
        </div>
        <div className={styles.three_step_container}>
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Improved", "Cash Flow"],
              oldWayDescription:
                "The traditional way does not provide data that can allow better vendor management and facilitate cash flow.",
              newWayDescription:
                "The insights from the analytics allow better vendor management and negotiations enabling reduction in costs and improved cash flow.",
            },
            {
              itemArray: ["Better", "Decision-Making "],
              oldWayDescription:
                "The conventional way of data management is scattered and not available in real-time which delays decision-making.",
              newWayDescription:
                "Businesses have complete access to accounts payable data including payments to be made and due. This allows them to make informed business decisions.",
            },
            {
              itemArray: ["Transparency", "& Control"],
              oldWayDescription:
                "There is data overlapping and mismanagement traditionally with no transparency.",
              newWayDescription:
                "The payable analytics dashboard provides complete transparency and control to the team members for insights.",
            },
            {
              itemArray: ["Business", "Advancement"],
              oldWayDescription:
                "The inefficient nature of data doesn’t allow businesses to decide in real-time which can facilitate business improvement.",
              newWayDescription:
                "Businesses can improve their processes like approval workflow and turnaround time using data from analytics.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column text-center mb-2">
          <Heading
            title="Gain extensive insights for"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title="business improvement"
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5"></div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Complete Control"
              description="Businesses can have complete control over accounts payable data including vendor payments, utility payments, and other payments made across different categories. This data helps bring efficiency to business processes"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Invoice Management"
              description="Businesses can use data extracted from payable analytics to manage invoices by streamlining their processes, identifying payment patterns, and optimizing their approval workflows"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-time Data Accessibility"
              description="Know business data related to cash in hand, payments due and made in real-time, and use it optimally like making early payments and availing trade discounts"
              source="payables"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Better Negotiation"
              description="With data in hand, businesses can compare data in real time across different branches/ departments and projects and use it for better negotiations with vendors"
              source="payables"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="d-flex flex-column">
                  <Heading
                    title="Know business payments in detail for"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <div>
                    <Heading
                      title="better"
                      color="white"
                      size="h1"
                      weight="6"
                    />
                    <Heading
                      title={`${space}cash flow management`}
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
      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how payable analytics can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about payable analytics in detail"
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
          title="Seeking further understanding of payable analytics?"
          description="Payable analytics facilitates businesses in better decision making with payables data in hand and improves their overall performance."
          source="payables"
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
                  title="What is a payable analytics platform by EnKash?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash’s payable analytics provides you all the insights about payments made across different categories and vendors, approval time required for payments, cash-in-hand in real-time, payments that are yet to be made and payments made from a specific bank branch. This enables businesses to gain insights about their spending and its management. Businesses can decipher their spend patterns and identify the gaps for better and more informed decision-making."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does a payable analytics platform work?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A payable analytics platform integrates with your business’s accounting software and identifies all payment related transactions; analyzes them and provides data suitable for business decision-making."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Is a payable analytics platform suitable for businesses of all sizes??"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Payable analytics can be tailored for all business sizes as per their needs. Small businesses can streamline their process using analytics while large businesses can use them to optimize their payments. The versatility of analytics for different businesses makes it powerful and worth investing in."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the key features and functionalities of payable analytics software?"
                />
              </div>
              <div className="mb-5">
                <p>
                  An efficient payable analytics software helps in{" "}
                  <Link
                    href="https://www.enkash.com/olympus/payables/invoice-management/"
                    target="_blank"
                  >
                    invoice management
                  </Link>{" "}
                  , tracks all payment-related data, and provides deep insights
                  into transactions. It enables real-time data access with
                  expense tracking and compliance monitoring. The software
                  establishes transparency, convenience, and efficiency for
                  business improvement.
                </p>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  );
};

export default payableAnalytics;
