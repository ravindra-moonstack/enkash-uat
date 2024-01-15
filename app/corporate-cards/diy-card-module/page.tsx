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
import FAQ from "@/components/faq/faq";
import BlogWrapper from "@/components/blog/blog-wrapper";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "DIY Corporate Card & Module : Simplify Corporate Cards Payments - EnKash",
  description:
    "Elevate your business expenses with EnKash’s personalized DIY corporate card for business. Customized for your company's unique needs. Book Demo Now !!",
  alternates: {
    canonical: "https://www.enkash.com/corporate-cards/diy-card-module/",
  },
};

const diyCardModule = () => {
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
            <Heading title="DIY Card Module" size="h4" weight="4" />
          </div>
          <div className="d-inline">
            <Heading
              title={`Empower your Business with${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="DIY Card Control"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Experience the flexibility of purpose-made cards, and get unprecedented control over all your business spends like T&E, marketing, vendor payments, rental payments, and much more"
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
                title="Book a Demo"
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
              itemArray: ["Card", "Flexibility"],
              oldWayDescription:
                "Traditional corporate cards are very generic. They lack the flexibility to adapt to the unique spending requirements of different business functions.",
              newWayDescription:
                "Create purpose-made cards that cater to your specific needs and use cases, with the ability to configure each card and set spending rules aligned with organization policies.",
            },
            {
              itemArray: ["Set", "Limits"],
              oldWayDescription:
                "There was always a high risk of overspending, as there were no ways to monitor or limit business expenditures, leading to cash-flow disruption.",
              newWayDescription:
                "With our DIY card module, you can easily monitor business spends, set department-wise spend limits, and manage spend categories, to align with corporate policies and budgets.",
            },
            {
              itemArray: ["Approval", "Workflows"],
              oldWayDescription:
                "Slow process often involved the inconvenience of gathering all the bills and visiting cabins physically or sending repetitive email follow-ups seeking approvals.",
              newWayDescription:
                "With EnKash, get an in-built expense management suite to easily streamline approval workflows and enforce policies to ensure your business spends aligns with your budget.",
            },
            {
              itemArray: ["Spend", "Insights"],
              oldWayDescription:
                "Traditional cards don’t offer visibility into spending patterns, leading to poor decision-making and inefficient budget management.",
              newWayDescription:
                "Gain immediate insights into your spending patterns with detailed analytics and reports, enabling you to maintain centralized control and optimize business spends.",
            },
            {
              itemArray: ["Working Capital", "Management"],
              oldWayDescription:
                "Inefficient cash flow, ultimately leading to delayed business payments like vendor payments, impacting relationships, and missing out on potential rebates.",
              newWayDescription:
                "With our DIY card module, enhance payment processes for efficient working capital utilization, optimize vendor connections by ensuring timely payments, and unlock favorable payment terms.",
            },
            {
              itemArray: ["Audit", "Trails"],
              oldWayDescription:
                "Cumbersome reconciliation processes and inadequate audit trails, making it challenging to maintain transparency and compliance.",
              newWayDescription:
                "Effortlessly automate the reconciliation process to maintain clear audit trails and a transparent financial ecosystem.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading title="A truly" color="black" size="h1" weight="6" />
          <Heading
            title={`${space}centralized solution`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}for corporate card management`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <>
                  <Heading
                    title="Flexible"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Spend Controls"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </>
              }
              description="Tailor authorization rules according to your preferences, including permitted merchant categories and individual spending limits per cardholder"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Real-Time Records"
              description="Records are updated in real-time as and when any payment is made using a card which makes spending reconciliation a breeze"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Expenditure Overview"
              description="Optimize your business spends with a holistic overview of your overall card expenditure in a single dashboard"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Block Cards Instantly"
              description=" Take charge of card security by disabling and enabling cards when needed, all at your fingertips"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Integration"
              description="Seamless Integration with accounting softwares like Tally, Zoho, etc"
              source="corporate_cards"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Verification Process"
              description="Simplified onboarding process with our automated eKYC and seamless bank account verification for both suppliers and customers."
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
                <div className="d-flex flex-column">
                  <Heading
                    title="A DIY platform that gives you complete"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="control and transparency"
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
          title="Learn how meal cards can benefit your business and employees!"
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
            title="Don't worry! Our FAQs section will help you learn about our DIY cards module in detail"
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
          title="Seeking further understanding of DIY card module?"
          description="Do-It-Your Way or DIY card module by EnKash is a centralized solution for businesses to manage corporate card expenses. It revolutionizes corporate card management by offering a user-friendly dashboard for easy setup and usage."
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
                  title="What does DIY credit card mean?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A 'DIY credit card' refers to a Do-It-Yourself approach in managing the allocation and usage of funds on a business credit card. Unlike traditional credit cards that come in physical form with predefined details like name, expiry date, and CVV code, a DIY credit card allows the cardholder, often a business owner, to customize and allocate credit limits to different team members. This customization enables efficient fund management for specific purposes within the business, contributing to smoother operations."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Where can our customers use these cards?
                  "
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Our cards module are designed to offer unparalleled flexibility, allowing customers to utilize them across a wide spectrum of business needs. Here are some key areas where our customers can maximize the utility of these cards:
                  "
                />
              </div>
              <div className="mb-5">
                <ul>
                  <li>Pay AWS, Azure, & Google cloud bills.</li>
                  <li>Procure business inventory online.</li>
                  <li>Group employee Insurance through partners.</li>
                  <li>Landlord details and rental payments.</li>
                  <li>Subscribe to MS Office, Adobe, JIRA, CRM.</li>
                  <li>Spends on Google, Facebook, LinkedIn, etc.</li>
                  <li>Utility, broadband & communication bills.</li>
                  <li>POS and ATM transactions.</li>
                </ul>
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Why do I need a card module?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A card module is essential for efficiently handling your business corporate cards and distributing funds to your team. It simplifies the tracking and management of purpose-specific cards assigned to team members. If an employee leaves or misplaces a card, blocking or putting it on hold is a quick process with just a few clicks. The card module also allows you to set card usage parameters and spending limits easily, providing precise control. Overall, it streamlines card management tasks with its user-friendly functionalities."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does credit card DIY work?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Credit card DIY helps you manage all activities related to your corporate credit card and ensures that you have the right checks and approvals in place to ensure that the usage of the cards is as per your corporate spend policy."
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

export default diyCardModule;
