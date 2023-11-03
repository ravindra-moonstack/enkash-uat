import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faqData";
import carouselData from "./carouselData";
import { bannerLottie, caraouselBg, faqBg, heroImage, whiteArrow } from ".";
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

export const metadata: Metadata = {
  title: "Bulk Payout | Corporate Bulk Payment Solution | EnKash",
  description:
    "Revolutionize your financial processes with our advanced bulk payout solution. Experience the ease of managing large-scale payments through our efficient bulk payment system.",
};

const bulkPayout = () => {
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
            <Heading title="Bulk Payout" size="h4" weight="4" />
          </div>
          <Heading
            title={`Fast and Secure${space}`}
            color="white"
            size="h2"
            weight="7"
          />
          <div className="d-line">
            <Heading
              title="Bulk Payouts"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title={`${space}for All Your Business Needs`}
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Receive automated reminders and approvals for recurring business expenses, such as rent, utilities, vendors, and more"
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
              itemArray: ["Processing", "Time"],
              oldWayDescription:
                "Single payments take longer time to process since each transaction is processed separately",
              newWayDescription:
                "Multiple payments are processed much faster with a single click",
            },
            {
              itemArray: ["Type", "of", "Payment"],
              oldWayDescription:
                "Payments are typically used for one-off transactions such as purchases",
              newWayDescription:
                "Solves hassle of recurring payments such as vendor payments, GST, rental and utility",
            },
            {
              itemArray: ["Flexibility"],
              oldWayDescription:
                "Single payments offer lesser flexibility and control over each individual transaction",
              newWayDescription:
                "Bulk payments offer greater flexibility since all payments are in the batch and are processed together",
            },
            {
              itemArray: ["Vendor", "Relationships"],
              oldWayDescription:
                "Businesses fail to build stronger relationships with vendors and suppliers as payments are not timely processed",
              newWayDescription:
                "Businesses build stronger relationships with vendors and suppliers by providing timely or early payments",
            },
            {
              itemArray: ["Payment", "Tracking"],
              oldWayDescription:
                "Since payments are mostly done manually, the chances of loss of payment receipts are very high, making it difficult to track",
              newWayDescription:
                "Bulk payments are easier to track and manage as they are processed as a batch, making it simpler to reconcile accounts and track",
            },
            {
              itemArray: ["Payables", "Management"],
              oldWayDescription:
                "Paying numerous vendor invoices, utility bills, rental bills, or multiple GST challans is a cumbersome process with a risk of errors or missed deadlines",
              newWayDescription:
                "Outstanding invoices, bills, rentals, and GST challans simplifies managing company payables and minimizes errors and potential delays",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center">
          <Heading title="Facing the" color="black" size="h1" weight="6" />
          <Heading
            title={`${space}Complexities`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Involved in`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>
        <div className="text-center mb-5">
          <Heading
            title={`${space}Bulk Processing?`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Repeat Payments"
              title2=""
              description="Ensure that repeat payments that occur monthly, quarterly, or weekly happen as a matter of course. This way, your business can enjoy continued services and facilities with minimal manual dependencies"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Reduce Payment Processing Time"
              title2=""
              description="Processing payments individually can be time-consuming and can cause delays. By using bulk payout, you can reduce payment processing time and improve cash flow"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Centralized Payment Processing"
              title2=""
              description="By centralizing payment processing through a bulk payout system, you can have better visibility and control over processes to prevent errors"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Automate Payment Reminders"
              title2=""
              description="Enable an automated reminder engine to keep track of all your outstanding business payments"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Checks and Approvals"
              title2=""
              description="Finance is all about timely payments with the right checks and approvals to ensure negligible misuse of funds. The process of bulk payout for your recurring payments ensures speed and efficiency"
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
                    title={`Simplify your Payouts with our${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Bulk Processing Solution"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How Does Bulk Payout Work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper title="Learn how Bulk Payouts could revolutionize the way you work!" />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about bulk payout in detail"
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

export default bulkPayout;
