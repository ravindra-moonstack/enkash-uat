"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "@/constant/common";
import {
  budgetAndAdvance,
  heirarchyControl,
  officeImg,
  policyApproval,
  reimbursement,
  scanAndDrop,
  whiteArrow,
  xpenzDashboard,
  greenArrow,
  gradientBg,
  heirarchyControlAnimation,
  budgetAndAdvanceAnimation,
  reimbursementAnimation,
  scanAndDropAnimation,
  policyAnimation,
  cardBg,
  faqBg,
  expense,
  cardOnLaptop,
  cardIcon,
  timeJarIcon,
  settingsIcon,
} from ".";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import BlogCard from "@/components/blog/blog-card/blog-card";
import MenuButton from "@/components/buttons/menu-button/menu-button";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work.";
import Lottie from "lottie-react";
import faqData from "./faqData";
import FAQ from "@/components/faq/faq";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";

const xpenz = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row color-white`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading title="F" color="rainy-blue" size="h1" weight="7" />
            <Heading title="reedom" size="h1" weight="7" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Leverage purpose-based"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading title="corporate cards for better spending" color="white" size="h2" />
          </div>
          <div className={`mt-4 ${styles.desktop_description}`}>
            <Heading
              title="Choose from unique card offerings and solutions that cover a range of business spends such as travel, subscriptions, marketing, GST, procurement, and more."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className={`mt-4 ${styles.mobile_description}`}>
            <Heading
              title="Choose from unique card offerings and solutions that cover a range of business spends such as travel, subscriptions, marketing, GST, procurement, and more."
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className="my-5">
            <PrimaryButton
              title="Enkash Now!"
              theme="theme-blue"
              size="medium"
            />
            <span className="mx-2"></span>
            <SecondryButton
              title="Book a Demo"
              actionImage={whiteArrow}
              iconSize={15}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          {/* <Image
            src={xpenzDashboard}
            alt="reimbursement dashboard"
            className={styles.dashboard_img}
          /> */}
          <Lottie animationData={expense} loop={true}/>
         
        </div>
      </div>
      <div className={`${styles.second_row} bg-white row d-flex row-padding`}>
        <HowDoesItWork bannerImage={cardOnLaptop}/>
      </div>
      <div className={styles.third_row}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Virtual Cards"
              description="Issue, manage, and monitor virtual cards on the go for unexpected expenses. "
              theme="blue"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex justify-content-end ${styles.first_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <Lottie animationData={budgetAndAdvanceAnimation} loop={true} />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div
            className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.second_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <Lottie animationData={heirarchyControlAnimation} loop={true} />
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Travel Cards"
              description="Manage, monitor and maximize control over travel expenditure."
              theme="blue"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 px-5 my-md-5 my-3">
            <ExploreCard
              title="Spend Control"
              description="DIY management tools for total control over card usage, budgets and spends."
              theme="blue"
            />
          </div>
          <div
            className={`col-md-6 col-12 d-flex my-md-5 my-3 d-flex justify-content-end ${styles.third_container}`}
          >
            <Image
              src={cardBg}
              alt="card background"
              className={styles.card_bg}
            />
            <Lottie animationData={reimbursementAnimation} loop={true} />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          {/* <Image
            src={scanAndDrop}
            alt="policy and approval flows image"
            className="img-fluid"
          /> */}
          <div className={styles.lottie_container}>
          <Lottie animationData={policyAnimation} loop={true} />
             </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="SaaS Cards"
            description="Control SaaS spends & security like never before with real-time visibility"
            theme="green"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Digital Marketing Cards"
            description="Effectively handle subscriptions to various digital marketing platforms, and prevent excessive expenditures"
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          <div className={styles.lottie_second_container}>
          <Lottie animationData={scanAndDropAnimation} loop={true} />
          </div>
        </div>
      </div>

      <div className="row bg-white row-padding">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap">
          <Heading
            title={`Corporate cards made for${space}`}
            size="h1"
            color="equity-blue"
            weight="6"
          />
          <Heading
            title={`fast growing businesses.${space}`}
            size="h1"
            color="black"
            weight="6"
          />
        </div>
      </div>

      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div className="d-flex flex-column flex-md-row tex-center justify-content-evenly">
          <div className="md:mb-0 mb-4 text-md-center">
            <Image src={cardIcon} alt="coins icon" className="md:mb-0 mb-4" />
            <div className="d-flex flex-column">
              <Heading title="Cards for" size="h5" color="white" weight="7" />
            </div>
            <Heading title="Every Need" size="h5" color="white" weight="7" />
          </div>
          <div className="mb-4 text-md-center">
            <Image src={timeJarIcon} alt="regulation icon" className="mb-4" />
            <div className="d-flex flex-column">
              <Heading title="Quick" size="h5" color="white" weight="7" />
              <Heading title="Processing" size="h5" color="white" weight="7" />
            </div>
          </div>
          <div className="mb-4 text-md-center">
            <Image
              src={settingsIcon}
              alt="cash and coin icon"
              className="md:mb-0 mb-4"
            />
            <div className="d-flex flex-column">
              <Heading title="Flexible" size="h5" color="white" weight="7" />
              <Heading
                title="Controls"
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
        </div>

      </div>
      <div className={`${styles.sixth_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              item: "Expense Reporting",
              oldWayDescription:
                "Employees pay for business expenses from their own pocket, causing tiresome reimbursement processes for both the employer and employee.",
              newWayDescription:
                "Issue virtual corporate cards with a pre-approved budget that can be tracked in real time and optimized accordingly, reducing the reimbursement load.",
            },
            {
              item: "Clear Demarcation",
              oldWayDescription:
                "Manual procedures are quite time consuming and involve multiple levels of bureaucracy",
              newWayDescription:
                "Leverage smart tools like OCR technology and approval matrices to automate the reimbursement process.",
            },
            {
              item: "Complete Control",
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
            {
              item: "Fund Disbursement",
              oldWayDescription:
                "Manually keeping track of receivables and and following-up with customers for payments can take up a lot of your collection team's bandwidth, slowing down the collection process.",
              newWayDescription:
                "Digitize the collection process with the help of automation tools, and improve your customer experience to quicken your collection process.",
            },
          ]}
        />
      </div>
      <div
        className={`row d-flex bg-white row-padding-top-none ${styles.seventh_row}`}
      >
        <div
          className={`d-flex col-12 flex-column-reverse flex-md-row ${styles.container}`}
        >
          <div className={`d-flex flex-column bg-indi-volt ${styles.left_row}`}>
            <div className="d-flex flex-column">
              <div className="d-flex">
                <Heading title="Total" color="white" size="h1" weight="5" />
                <Heading
                  title={`${space}Control`}
                  color="electric-green"
                  size="h1"
                  weight="5"
                />
              </div>

              <div className="my-4">
                <Heading
                  title="Gain control over your business spends with a complete overview of all your expenses. Analyze data to create efficient budgets, optimize expenses and increase your savings."
                  color="white"
                  size="h6"
                  weight="4"
                />
              </div>
              <div className="d-flex align-items-center mt-2">
                <Heading
                  title="Get Started"
                  color="electric-green"
                  size="h6"
                  weight="4"
                />
                <Image
                  className="m-2"
                  src={greenArrow}
                  alt="arrow icon"
                  width={50}
                />
              </div>
            </div>
          </div>
          <div className={styles.right_row}>
            <Image
              src={officeImg}
              alt="office team image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row bg-white row-padding">
        <div
          className={`col-12 d-flex flex-md-row mt-3 pb-3 justify-content-md-center align-items-center scroll_container`}
        >
          <div className="me-4">
            <GetStartedCard
              title1="Simplified Card Creation"
              title2=""
              description="Onboard and issue purpose-based corporate cards in a few simple steps with basic KYC documents."
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              title1="Set Card Spend Limits"
              title2=""
              description="Use the DIY card platform to set limits on expenditure and types of expenses to enhance spending for your teams and employees."
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              title1="Enhanced Savings"
              title2=""
              description="Maximize savings by ensuring that your spends are optimized, and benefit from on-time payment rebates and better payment terms."
              ctaColor="blue"
            />
          </div>
        </div>
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper title="Expense Management Insights" />
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about expense in detail."
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

      <div className={`row ${styles.ninth_row} bg-equity-blue`}>
        <div className="d-flex justify-content-evenly align-items-center">
          <Heading
            title="Have Questions about Corporate Cards?"
            size="h3"
            color="white"
          />
          <div>
            <PrimaryButton
              title="Know More"
              theme="theme-black"
              size="medium"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <ContactUsCard />
      </div>
    </div>
  );
};

export default xpenz;
function setCurrentData(arg0: (prevData: any) => number) {
  throw new Error("Function not implemented.");
}
