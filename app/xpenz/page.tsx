"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "@/constant/common";
import blogData from "./blog-data";
import {
  cashAndCoin,
  coin,
  officeImg,
  regualation,
  whiteArrow,
  cardBg,
  faqBg,
  expense,
} from ".";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work.";
import faqData from "./faqData";
import howDoesItWorkData from "./howDoesItWorkData";
import FAQ from "@/components/faq/faq";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import ActionCard from "@/components/action-card/action-card";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";

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
            <Heading title="X" color="rainy-blue" size="h1" weight="7" />
            <Heading title="penz" size="h1" weight="7" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Optimize buisness spends"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading title="with a complete overview" color="white" size="h2" />
            <Heading title="of expenses" color="white" size="h2" />
          </div>
          <div className={`mt-4 ${styles.desktop_description}`}>
            <Heading
              title="Get a detailed analysis of where, when and how your business is spending, and optimize accordingly with digital receipt management, approval matrices and more."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className={`mt-4 ${styles.mobile_description}`}>
            <Heading
              title="Maximize productivity within your organization with an easier 
                  reimbursement system that helps you track, process and sync data in
                   real-time."
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className="my-5">
            <PrimaryButton
              title="EnKash Now"
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
          <LottieClientComponent animationData={expense} loop={true} />
        </div>
      </div>
      <div className={`${styles.second_row} bg-white row d-flex row-padding`}>
        <HowDoesItWork dataSets={howDoesItWorkData} bannerImage={officeImg} />
      </div>
      <div className={styles.third_row}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Budgets and Advances"
              description="Create budgets, track and optimize expenses, increase savings. "
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
            <LottieDynamicLoadComponent
              animationName={"XpenzBudgetAnimation"}
              loop={true}
            />
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
            <LottieDynamicLoadComponent
              animationName={"XpenzHeirarchyAnimation"}
              loop={true}
            />
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Hierarchy and Controls"
              description="Create hierarchies and establish control over employee expenditure."
              theme="blue"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 px-5 my-md-5 my-3">
            <ExploreCard
              title="Reimbursements"
              description="Fast-track and optimize the entire reimbursement process with better spend overview."
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

            <LottieDynamicLoadComponent
              animationName={"XpenzReimbursementAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"XpenzPolicyAnimation"}
              loop={true}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Policy and Approval Flows"
            description="Choose an approval matrix that works best for your business and create and maintain an aligned approval process for all kinds of spends."
            theme="green"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Scan and Drop Receipts"
            description="Leverage OCR for digital receipt management & reconciliation."
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          {/* <Image
            src={policyApproval}
            alt="scan and drop receipt image"
            className="img-fluid"
          /> */}
          <div className={styles.lottie_second_container}>
            <LottieDynamicLoadComponent
              animationName={"XpenzScanAnimation"}
              loop={true}
            />
          </div>
        </div>
      </div>

      <div className="row bg-white row-padding">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <Heading
            title={`EnKash does${space}`}
            size="h1"
            color="black"
            weight="6"
          />
          <Heading
            title={`the heavy lifting${space}`}
            size="h1"
            color="equity-blue"
            weight="6"
          />
          <Heading title="for you." size="h1" color="black" weight="6" />
        </div>
      </div>

      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div className="d-flex flex-column flex-md-row tex-center justify-content-evenly">
          <div className="md:mb-0 mb-4 text-md-center">
            <Image src={coin} alt="coins icon" className="md:mb-0 mb-4" />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="On-time" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}Payments`}
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
          <div className="mb-4 text-md-center">
            <Image src={regualation} alt="regulation icon" className="mb-4" />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="Spend " size="h5" color="white" weight="7" />
              <Heading
                title={`${space}Regulation`}
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
          <div className="mb-4 text-md-center">
            <Image
              src={cashAndCoin}
              alt="cash and coin icon"
              className="md:mb-0 mb-4"
            />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="Cash Flow" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}Optimization`}
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
        </div>

        {/* <Image
          src={gradientBg}
          alt="gradient image"
          className={styles.gradient}
        /> */}
      </div>
      <div className={`${styles.sixth_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Expense", "Reporting"],
              oldWayDescription:
                "Manual expense reporting is prone to errors and can lead to incorrect reimbursement or accounting issues.",
              newWayDescription:
                "EnKash’s Expense management platform automates the process of recording expenses, reducing the likelihood of errors.",
            },
            {
              itemArray: ["Operational", "Efficiency"],
              oldWayDescription:
                "Manual procedures are quite time consuming and involve multiple levels of bureaucracy",
              newWayDescription:
                "Leverage smart tools like OCR technology and approval matrices to automate the reimbursement process.",
            },
            {
              itemArray: ["Spend", "Overview"],
              oldWayDescription:
                "When businesses generate paper invoices manually, the process is time-consuming, resource-intensive, and poses risks of errors or lost invoices.",
              newWayDescription:
                "EnKash generates and sends invoices automatically, which saves time and reduces the risk of human error. This means your teams can focus on other important tasks and improve their overall efficiency.",
            },
            {
              itemArray: ["Expense", "Approvals"],
              oldWayDescription:
                "Manually keeping track of receivables and following-up with customers for payments can take up a lot of your collection team's bandwidth, slowing down the collection process.",
              newWayDescription:
                "Digitize the collection process with the help of automation tools, and improve your customer experience to quicken your collection process.",
            },
            {
              itemArray: ["Accessibility"],
              oldWayDescription:
                "Manually keeping track of receivables and following-up with customers for payments can take up a lot of your collection team's bandwidth, slowing down the collection process.",
              newWayDescription:
                "Digitize the collection process with the help of automation tools, and improve your customer experience to quicken your collection process.",
            },
          ]}
        />
      </div>
      <div
        className={`row d-flex bg-white row-padding-top-none ${styles.seventh_row}`}
      >
        <ActionCard
          mainTitle={
            <>
              <div className="d-flex flex-column">
                <Heading title="Total" color="white" size="h1" weight="5" />
                <Heading
                  title={`${space}Control`}
                  color="electric-green"
                  size="h1"
                  weight="5"
                />
              </div>
            </>
          }
          mainImage={officeImg}
          description="Gain control over your business spends with a complete overview of all your expenses. Analyze data to create efficient budgets, optimize expenses and increase your savings."
        />
      </div>
      <div className="bg-white row-padding d-flex justify-content-center">
        <div className="ps-md-5 scroll_container d-flex pb-4">
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Digital Receipt Management"
              description="Leverage OCR technology to create a seamless reimbursement process 
            for your employees. Scan or photograph receipts, and upload them for immediate approvals."
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Approval Process"
              description="Configure approval processes as per the requirements of your business.
             Plan your cash flow better, optimize savings, and accelerate your reimbursement process."
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              whiteTitle="Departmental Hierarchy"
              description="Choose an approval matrix that’s best for your business, down to the departmental level. More transparency means increased efficiency and nullified delays."
              ctaColor="blue"
            />
          </div>
        </div>
      </div>

      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper blogData={blogData} title="Expense Management Insights" />
      </div>

      <div
        className={`${styles.eigth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about virtual accounts in detail"
            color="black"
            size="h4"
          />
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQ
              key={index}
              question={item.question}
              answer={item.answer}
              answerVisible={index === 0}
            />
          ))}
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`row ${styles.ninth_row} bg-equity-blue`}>
        <div className="d-flex justify-content-evenly align-items-center">
          <Heading
            title="Have Questions about Expense Management?"
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
        <ContactUsCard
          title="Seeking further understanding of bill payments online?"
          description="Bill payments refer to those regularly occurring expenses that a business has. These could include utilities like electricity, water, and other regular payments you need to make on time to ensure your business operations continue uninterrupted."
        />
      </div>
    </div>
  );
};

export default xpenz;
