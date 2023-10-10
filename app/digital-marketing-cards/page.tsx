import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faqData";
import carouselData from "./carouselData";
import { faqBg, heroImage, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import FAQ from "@/components/faq/faq";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";

const digitalMarketingCards = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
       <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-4 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Freedom${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="| Digital Marketing Cards" size="h4" weight="7" />
          </div>

          <div className="">
            <div className="d-flex flex-wrap">
              <Heading
                title={`Never exceed your${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title=" Digital Marketing budget."
                color="rainy-blue"
                size="h2"
                weight="7"
              />
              <Heading title="again" color="white" size="h2" weight="7" />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Manage your business’ digital marketing expenses with smart corporate cards with flexible controls. Load your marketing budget into the card, select the types of campaigns you want to run and keep track of expenditure in real-time."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className="my-5 d-flex flex-row justify-content-start align-items-center">
            <div className="me-2">
              <PrimaryButton title="Enkash Now!" theme="theme-blue" />
            </div>
            <div>
              <SecondryButton
                title="Book a Demo"
                actionImage={whiteArrow}
                iconSize="small-icon"
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
              item: "Budget Allocation",
              oldWayDescription:
                "Verbally specifying budgets, or even having them in writing does not guarantee that your digital marketing spends will not cross said budget, especially when you’re using one corporate card for all spends.",
              newWayDescription:
                "Having a purpose-based corporate card for digital marketing with a predefined limit ensures that your digital marketing spends cannot exceed your intended budget.",
            },
            {
              item: "Expense Tracking",
              oldWayDescription:
                "Manual procedures are quite time consuming and involve multiple levels of bureaucracy",
              newWayDescription:
                "Leverage smart tools like OCR technology and approval matrices to automate the reimbursement process.",
            },
            {
              item: "Campaign Management",
              oldWayDescription:
                "When businesses generate paper invoices manually, the process is time-consuming, resource-intensive, and poses risks of errors or lost invoices.",
              newWayDescription:
                "EnKash generates and sends invoices automatically, which saves time and reduces the risk of human error. This means your teams can focus on other important tasks and improve their overall efficiency.",
            },
            {
              item: "Spend Overview",
              oldWayDescription:
                "Manually keeping track of receivables and and following-up with customers for payments can take up a lot of your collection team's bandwidth, slowing down the collection process.",
              newWayDescription:
                "Digitize the collection process with the help of automation tools, and improve your customer experience to quicken your collection process.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-top-none`}
      >
        <div className="d-flex justify-content-center text-center flex-wrap mb-5">
          <Heading title="EnKash is the" color="black" size="h1" weight="6" />
          <Heading
            title={`${space}key to boosting${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="your Digital Marketing performance."
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div
          className={`col-12 d-flex flex-md-row mt-3 pb-3 ${styles.scroll_container}`}
        >
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Subscription Management"
              title2=""
              description="Effectively manage your recurring digital marketing expenses such as subscriptions that recur monthly or annually."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Spend Optimization"
              title2=""
              description="Enhance your organization's performance by implementing a robust purchasing oversight process that helps to reduce costs and streamlines your payment process."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Marketing Budgets"
              title2=""
              description="EnKash lets you set customized usage limits that ensure there is no scope for overspending. You’ll have the flexibility to set the limit based on your marketing budget."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Run Campaigns"
              title2=""
              description="Seamlessly add your card for digital marketing expenses onto the platform and select the desired campaigns you wish to run."
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center d-flex justify-content-center flex-wrap">
                <Heading
                  title={`Master Your Digital Marketing Expenditure with greater${space}`}
                  color="white"
                  size="h1"
                  weight="6"
                />
                <Heading
                  title="Control and Visibility."
                  color="rainy-blue"
                  size="h1"
                  weight="6"
                />
              </div>
            </>
          }
          mainTitle="How do Digital Marketing Cards work?"
          carouselData={carouselData}
        />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about Reimbursements in detail."
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

export default digitalMarketingCards;
