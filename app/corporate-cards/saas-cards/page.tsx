import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";
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
import BlogWrapper from "@/components/blog/blog-wrapper";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import Link from "next/link";
import FAQHtml from "./faq-html";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "SaaS Subscription Management Platform - EnKash",
  description:
    "Manage all your SaaS subscriptions on a single software platform. Enhance your spend strategies with actionable insights & smart controls with EnKash",
  alternates: {
    canonical: "https://www.enkash.com/corporate-cards/saas-cards/",
  },
};

const saasCard = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="corporate_cards" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Corporate Cards |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading
              title="SaaS Cards"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>

          <div className="d-flex flex-column">
            <Heading
              title="Simplified SaaS"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="subscription management"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="for your business"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Manage all your SaaS subscriptions on a single platform. Enhance your spend strategies with actionable insights and smart controls"
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
                url="https://home.enkash.com/signup?utm_source=corporate_cards"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=corporate_cards"
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
              itemArray: ["Subscription", "Management"],
              oldWayDescription:
                "Using multiple platforms to track individual SaaS subscription renewal dates can be confusing and amplifies the risk of missed payments.",
              newWayDescription:
                "Manage and pay for all your SaaS subscriptions on a unified platform, from renewal to expenditure.",
            },
            {
              itemArray: ["Billing &", "Invoicing"],
              oldWayDescription:
                "Manual billing & invoicing can amplify the risk of missed payments and put an extra burden on your finance teams.",
              newWayDescription:
                "It helps you develop optimization strategies based on insightful data to reduce costs by right-sizing, overlapping, or canceling underutilized subscriptions.",
            },
            {
              itemArray: ["Utility", "Analysis"],
              oldWayDescription:
                "Difficult to understand whether you are getting the most out of your SaaS subscription.",
              newWayDescription:
                "It helps you develop optimization strategies based on insightful data to reduce costs by right-sizing, overlapping, or canceling underutilized subscriptions.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex flex-column mb-5">
          <div className="text-center">
            <div>
              <Heading
                title={`Effortlessly${space}`}
                color="black"
                size="h1"
                weight="6"
              />
              <Heading
                title={`streamline your SaaS subscription${space}`}
                color="equity-blue"
                size="h1"
                weight="6"
              />
              <Heading title="management" color="black" size="h1" weight="6" />
            </div>
          </div>
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Recurring Subscriptions"
              description=" Manage all your recurring expenses on one platform with total visibility over your subscription spend. Track renewal dates and previous payments and get automated reminders about upcoming renewals"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Greater Visibility"
              description="A seamless and rich experience with real-time visibility into your SaaS purchases, helping you make better business decisions"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Purchasing Insights"
              description="Improve your organization's performance by increasing your purchasing oversight, which helps reduce costs and streamline your payment process"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Complete Control"
              description="Easy monitoring, analysis, and control of corporate SaaS expenses, ensuring SaaS policy compliance within your organization"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Set"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Limits"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="corporate_cards"
              description="For DIY corporate access, you can set daily, monthly, and annual usage limits to spend only your allocated budget on SaaS"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline">
                  <Heading
                    title={`Enjoy${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`full control${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="over your SaaS subscriptions"
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
      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how SaaS cards can benefit your business and employees!"
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
            title="Don't worry! Our FAQs section will help you learn about SaaS cards in detail"
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
          title="Seeking further understanding of SaaS cards?"
          description="Businesses can avail SaaS cards for subscription purposes and use them as required. For the smooth functioning of subscriptions, the respective teams can be allocated cards, and budgets can be assigned."
          source="corporate_cards"
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
                  title="What does SaaS stand for?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="SaaS stands for software as a service and relates to all the costs related to software-related expenses. These SaaS costs include hosting the website, software licensing fees, fees related to cloud storage, software subscriptions, website maintenance costs, and the salaries of the customer support teams."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does the SaaS expense management platform work?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Your SaaS expense management platform will collate all the costs associated with SaaS spend and provide IT and finance teams with complete visibility over software-related payments. These costs can be annual, quarterly, or monthly. In most companies, the marketing department works with the IT department to finalize the SaaS tools required and negotiate the costs for maximum advantage."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why do companies need SaaS expense management?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="SaaS expenses often pertain to the aspects of the business that are external-facing, like the website, blog, visuals, etc. To ensure these aspects run smoothly, you must choose the right SaaS tool, get the optimum cost, and pay the fees on time. With the SaaS expense management platform, you can track the cost and ensure you get the approvals to renew the subscriptions on time."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does SaaS expense management help businesses?"
                />
              </div>
              <div className="mb-5">
                <p>
                  <Link
                    href="https://www.enkash.com/resources/blog/saas-subscription-management-with-virtual-cards/"
                    target="_blank"
                  >
                    SaaS subscription management
                  </Link>{" "}
                  helps to optimize the expenses by timing the subscription
                  right. Sometimes, a particular SaaS subscription will be
                  cheaper when taken annually, and the platform will help you
                  analyze this. In other instances, you may not have to take an
                  annual subscription because the tool is used only for a short
                  period, thus reducing the expenses.
                </p>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How to build a SaaS expense management strategy?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A smart platform can help you build an effective SaaS expense management strategy in the following ways:"
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>
                    Discover: Get an overview of the subscriptions and costs
                    related to SaaS within your company
                  </li>
                  <li>
                    Dig deeper: The next step is to discover the purpose of the
                    cost
                  </li>
                  <li>
                    Reduce: Look at the usage patterns and reduce the
                    subscription time if required
                  </li>
                  <li>
                    Negotiate: For bulk usage and annual packages, you can
                    negotiate better rates
                  </li>
                  <li>
                    Approve and pay: Set up checking mechanisms to regulate
                    payments and monitor new spends
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does a SaaS expense management platform provide value?"
                />
              </div>
              <div className="mb-3">
                <p>
                  Our SaaS expense management platform or subscription
                  management platform will ensure the following:
                </p>
              </div>
              <div className="mb-5">
                <ul>
                  <li>Make payments on time and get rebates</li>
                  <li>
                    Reduce unnecessary spend by consolidating subscriptions
                  </li>
                  <li>Ensure there is an approval trail for audit purposes</li>
                  <li>
                    Enable your various teams to function without any
                    interruptions
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="corporate_cards" />
    </div>
  );
};

export default saasCard;
