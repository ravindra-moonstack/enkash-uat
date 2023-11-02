import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faqData";
import carouselData from "./carouselData";
import { carouselBg, faqBg, heroImage, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import FAQ from "@/components/faq/faq";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";

const travelAndExpenseCards = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column">
            <Heading title="Freedom " color="rainy-blue" size="h4" weight="7" />
            <Heading title="| Travel and Expense Cards" size="h4" weight="4" />
          </div>

          <div className="">
            <div className="d-flex flex-wrap">
              <Heading
                title="Corporate Card controls for"
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title={`hassle-free traveling.`}
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Monitor, analyze, and control corporate travel expenses, all while ensuring travel policy compliance within your organization."
              color="white"
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
          <Image
            src={heroImage}
            alt="reimbursement dashboard"
            className={styles.hero_image}
          />
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
                "Without a centralized system to track and manage expenses, organizations have limited visibility into how much is being spent on travel, who is spending the money, and on what.",
              newWayDescription:
                "EnKash travel and expenses corporate cards, along with the DIY management platform gives you full control over your business’ travel expenditure, in real-time, so that you can be in the know, on the go.",
            },
            {
              itemArray: ["Fund", "Disbursement"],
              oldWayDescription:
                "Traditional methods take a lot of time and come with layers of red tape.",
              newWayDescription:
                "Utilize advanced solutions like OCR technology and approval systems to streamline the reimbursement procedure.",
            },
            {
              itemArray: ["Budget", "Compliance"],
              oldWayDescription:
                "Manual procedures are quite time-consuming and involve multiple levels of bureaucracy.",
              newWayDescription:
                "Leverage smart tools like OCR technology and approval matrices to automate the reimbursement process.",
            },
            {
              itemArray: ["Fraud", "&", "Misuse"],
              oldWayDescription:
                "When businesses generate paper invoices manually, the process is time-consuming, resource-intensive, and poses risks of errors or lost invoices.",
              newWayDescription:
                "EnKash generates and sends invoices automatically, which saves time and reduces the risk of human error. This means your teams can focus on other important tasks and improve their overall efficiency.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-flex justify-content-center text-center flex-wrap mb-5">
          <Heading
            title="One place to manage"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}all your travel expenses.`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Spend Smarter"
              title2=""
              description="Comprehensive business travel solution that scale your travel programs smartly by providing end-to-end visibility into your employees' travel expenditure."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Streamline Travel Expenses"
              title2=""
              description="Discover purpose-based corporate cards that have rules and policies built into them that can be managed from anywhere, anytime."
            />
          </div>

          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Real-time Management"
              title2=""
              description="Set up rules, limits and approval matrices for better budget control, on-the-go. Enable or disable certain types of expenditure or block and unblock cards in cases of an emergency."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Complete Overview"
              title2=""
              description="Get actionable insights about where expenses can be reduced, or where spend limits might need to be increased. Maximize travel expense visibility."
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center d-flex justify-content-center flex-wrap">
                <Heading title="EnKash" color="white" size="h1" weight="6" />
                <Heading
                  title={`${space}redefines travel expense${space}`}
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
                <Heading
                  title="management for your business"
                  color="white"
                  size="h1"
                  weight="6"
                />
              </div>
            </>
          }
          mainTitle="How do Travel and Expense Cards work?"
          carouselBg={carouselBg}
          carouselData={carouselData}
        />
      </div>

      <div className="row bg-white row-padding text-center">
        <BlogWrapper title="Travel Expense Insights" />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about Travel cards in detail."
            color="black"
            size="h4"
          />
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQ key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard />
      </div>
    </div>
  );
};

export default travelAndExpenseCards;
