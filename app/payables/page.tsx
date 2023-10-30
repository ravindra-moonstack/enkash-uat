"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "@/constant/common";
import {
  cardBg,
  faqBg,
  whiteArrow,
  officeImg,
  bannerAnimation,
  virtualCardAnimation,
  travelCardAnimation,
  spendAnimation,
  digitalAnimation,
  saasAnimation,
  office,
  settingIcon,
  cashAndTime,
  coinIcon,
} from ".";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import BlogCard from "@/components/blog/blog-card/blog-card";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work.";
import Lottie from "lottie-react";
import faqData from "./faqData";
import howDoesItWorkData from "./howDoesItWorkData";
import FAQ from "@/components/faq/faq";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import ActionCard from "@/components/action-card/action-card";
import { cashAndCoin } from "../xpenz";

const payables = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <div className={`${styles.first_row} row color-white`}>
        <div className="col-md-6 col-12 d-flex flex-column">
          <div className="d-flex mb-4">
            <Heading
              title={`olympus${space}`}
              color="rainy-blue"
              size="h1"
              weight="7"
            />
            <Heading title="| payables" size="h1" weight="7" />
          </div>
          <div className="d-iline">
            <Heading
              title={`Streamline all your business payments${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="on one platform."
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>
          <div className={`mt-4 ${styles.desktop_description}`}>
            <Heading
              title="Pay vendors, utility bills, taxes and more using payment methods of your choice. When you work on EnKash, cost reductions, optimized workflows and timely payments come to your business naturally."
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
          <div className={`my-5 ${styles.button_container}`}>
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
          <Lottie
            animationData={bannerAnimation}
            loop={true}
            className={styles.lottie_container}
          />
        </div>
      </div>
      <div className={`${styles.second_row} bg-white row d-flex row-padding`}>
        <HowDoesItWork dataSets={howDoesItWorkData} bannerImage={office} />
      </div>
      <div className={styles.third_row}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Vendor Payments"
              description="Keep track of all your vendor bills, get automated updates about upcoming payments, and simplify bulk vendor payments with a single click."
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
            <Lottie
              animationData={virtualCardAnimation}
              loop={true}
              className={styles.lottie_container}
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

            <Lottie
              animationData={travelCardAnimation}
              loop={true}
              className={styles.lottie_container}
            />
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Rental Payments"
              description="Maintain rental records, manage TDS benefits & pay rent for several locations, all on one platform."
              theme="blue"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 px-5 my-md-5 my-3">
            <ExploreCard
              title="Bulk Payouts"
              description="Enable bulk payouts and make payments to vendors, billers & more via payment modes of your choice."
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
            <Lottie animationData={spendAnimation} loop={true} />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          <div className={styles.lottie_container}>
            <Lottie animationData={saasAnimation} loop={true} />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Bill Payments"
            description="Automate different kinds of bill payments and ensure on-time payments. Every time."
            theme="green"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Tax Payments"
            description="Ensure an audit-compliant and seamless tax payment process for timely remittance."
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          <div className={styles.lottie_second_container}>
            <Lottie animationData={digitalAnimation} loop={true} />
          </div>
        </div>
      </div>

      <div className="row bg-white row-padding">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <div className="d-inline text-center">
            <Heading
              title={`Streamlined and expedited payouts,${space}`}
              size="h1"
              color="black"
              weight="6"
            />
            <Heading
              title={`with no delays.${space}`}
              size="h1"
              color="equity-blue"
              weight="6"
            />
          </div>
        </div>
      </div>

      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div
          className={`d-flex flex-column flex-md-row tex-center justify-content-evenly  ${styles.container}`}
        >
          <div className="md:mb-0 mb-4 text-md-center">
            <Image src={coinIcon} alt="coins icon" className="md:mb-0 mb-4" />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="Enhanced" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}Savings`}
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
          <div className="mb-4 text-md-center">
            <Image src={settingIcon} alt="regulation icon" className="mb-4" />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="Optimized" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}Workflow`}
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
          <div className="mb-4 text-md-center">
            <Image
              src={cashAndTime}
              alt="cash and coin icon"
              className="md:mb-0 mb-4"
            />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="Timely" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}Payouts`}
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
              item: "Data Entry Techniques",
              oldWayDescription:
                "Manual invoice processing and data entries impedes the reconciliation process. It is time-consuming, error-prone, and can result in delayed payments.",
              newWayDescription:
                "Harness technology to process invoices digitally; Save time and money. Automating the invoicing process can help reduce manual efforts, increase efficiency, and improve productivity.",
            },
            {
              item: "Process & Hierarchy",
              oldWayDescription:
                "Manual procedures are quite time consuming and involve multiple levels of bureaucracy",
              newWayDescription:
                "Leverage smart tools like OCR technology and approval matrices to automate the reimbursement process.",
            },
            {
              item: "Risk and Errors",
              oldWayDescription:
                "When businesses generate paper invoices manually, the process is time-consuming, resource-intensive, and poses risks of errors or lost invoices.",
              newWayDescription:
                "EnKash generates and sends invoices automatically, which saves time and reduces the risk of human error. This means your teams can focus on other important tasks and improve their overall efficiency.",
            },
            {
              item: "Financial Control",
              oldWayDescription:
                "Manually keeping track of receivables and and following-up with customers for payments can take up a lot of your collection team's bandwidth, slowing down the collection process.",
              newWayDescription:
                "Digitize the collection process with the help of automation tools, and improve your customer experience to quicken your collection process.",
            },
            {
              item: "Bulk Vendor Payments",
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
        <ActionCard
          mainTitle={
            <>
              <div className="d-flex flex-column">
                <Heading title="Complete" color="white" size="h1" weight="5" />
                <Heading
                  title={`${space}Transparency`}
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
              title1="Regulate Payments"
              title2=""
              description="Set checking and approval matrices for timely payments, discover improved spend control and eliminate manual errors."
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              title1="Automate Reminders"
              title2=""
              description="Never miss a payment again with auto-fetch and timely reminders. Make on-time payments towards vendors, rent, taxes and more, every time."
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              title1="Approval Flow"
              title2=""
              description="Approval workflows make managing and optimizing expenses easier. Set approval limits, create hierarchies, avoid delays and reduce errors with set rules."
              ctaColor="blue"
            />
          </div>
        </div>
      </div>

      <div className="row bg-white row-padding text-center">
        <BlogWrapper title="Payables Insights" />
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
            title="Have Questions about Payables?"
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

export default payables;
