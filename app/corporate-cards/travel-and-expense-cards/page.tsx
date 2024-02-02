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
import BlogWrapper from "@/components/blog/blog-wrapper";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import Link from "next/link";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Best Travel and Expenses Corporate Cards for Business - EnKash",
  description:
    "Travel & expense cards offer benefits that enhance corporate travel management. Use these cards and avail amazing travel perks and rewards.",
  alternates: {
    canonical:
      "https://www.enkash.com/corporate-cards/travel-and-expense-cards/",
  },
};

const travelAndExpenseCard = () => {
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
              title="Travel And Expense Cards"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>

          <div>
            <Heading
              title={`All your business${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title={`travel and expense needs${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="are prioritized in a card"
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Manage all your corporate travel expenses with this go-to card"
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
              itemArray: ["Spend", "Visibility"],
              oldWayDescription:
                "Without a centralized system to track and manage expenses, organizations have limited visibility into how much is spent on travel and by whom.",
              newWayDescription:
                "The travel and expenses corporate card, along with the DIY management platform, provides complete control over your business travel expenditure in real-time so that you can be in the know on the go.",
            },
            {
              itemArray: ["Fund", "Disbursement"],
              oldWayDescription:
                "Providing last-minute funds via traditional banking methods for travel expenses is a hassle.",
              newWayDescription:
                "Enable sudden expenses for unexpected travel from anywhere for anyone with smart controls, anytime.",
            },

            {
              itemArray: ["Budget", "Compliance"],
              oldWayDescription:
                "With no strict rules or policies for travel budgeting, the risk of overspending is high.",
              newWayDescription:
                "Employees have pre-approved budgets for travel and more with automated rules and limits.",
            },
            {
              itemArray: ["Fraud &", "Misuse"],
              oldWayDescription:
                "Organizations are vulnerable to fraud and misuse of funds, as it is easy to manipulate expense reports or claim illegitimate expenses with fake receipts and invoices.",
              newWayDescription:
                "Eliminate the need for expense reports and paper receipts with corporate cards, which track your expenses digitally, as all transactions are being made on the card itself.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="One place to manage"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}all your business travel expenses`}
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
                    title="Spend"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Smarter"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="corporate_cards"
              description="This comprehensive business travel solution enables companies to smoothen their business-related travel by providing end-to-end visibility into their employees' travel expenditures"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Streamline Expenses"
              description="Bid adieu to complicated expenditure reports with purpose-based corporate cards that can be managed from anywhere, anytime"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Management"
              description="Set up rules, limits, and approval matrices for better budget control on the go. Easily block and unblock cards in cases of any misuse or emergency"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Complete Overview"
              description="Maximize visibility and insights on travel expenses with a comprehensive overview on a single dashboard"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="DIY with Control"
              description="Use separate controls for categories like Admin and cardholder. This reduces fraud with automation tools such as approval matrices"
              source="corporate_cards"
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
                    title={`Business${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`travels made easy${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="with EnKash"
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
          title="Learn how travel and expense cards can revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about travel cards in detail"
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
          title="Seeking further understanding of travel & expense cards?"
          description="Travel and Expense cards, often called T&E cards are specialized financial instruments designed to streamline and enhance business travel expenses."
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
                  title="What are the benefits of travel and expense cards"
                />
              </div>
              <div className="mb-5">
                <p>
                  Travel & Expense cards offer a range of benefits that enhance{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/guide-about-travel-and-expense-management"
                    target="_blank"
                  >
                    corporate travel management
                  </Link>
                  . With these cards, you can enjoy a comprehensive business
                  travel solution with end-to-end visibility into travel
                  expenditures. These purpose-based corporate cards are equipped
                  with customizable rules and policies.
                </p>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="These cards can be managed in real-time, allowing you to define rules, limits, and approval matrices and enabling efficient budget management. The cards also offer a complete overview of travel expenses, providing actionable insights for reducing costs and optimizing budgets. At the same time, smart controls help prevent expense fraud and hold everyone accountable in real-time."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do travel cards in India work?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The travel cards provide businesses and employees with a convenient and secure way to manage travel expenses. These cards come preloaded with approved budgets, eliminating the need for employees to use their personal expenses. You can tailor the cards to your team's specific needs by setting daily, monthly, and annual usage limits via the DIY corporate access feature."
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The hassle of expense reports and reimbursements is eliminated, as all transaction data is available in real-time through an intuitive platform. Additionally, travel cards allow you to book online business travels from anywhere while earning meaningful rewards, such as exclusive flight and hotel deals."
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can I get the balance on my travel card?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="It is easy to check the balance on your travel card. With a user-friendly dashboard, you can access real-time transaction information and view your card's current balance anytime. This feature provides transparency and control over your travel expenses, ensuring you are aware of the funds available on your card."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="corporate_cards" />
    </div>
  );
};

export default travelAndExpenseCard;
