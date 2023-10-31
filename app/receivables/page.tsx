"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "@/constant/common";
import {
  officeImg,
  whiteArrow,
  cardBg,
  faqBg,
  bannerImage,
  bulkCollectAnimation,
  invoiceAnimation,
  quickCollectAnimation,
  paymentLinkAnimation,
  receivablesAnimation,
  virtualAccountAnimation,
  cashInHandIcon,
  clickIcon,
  searchIcon,
} from ".";
import Heading from "@/components/heading/heading";
import ExploreCard from "@/components/explore-card/explore-card";
import EnkashWay from "@/components/enkash-way/enkash-way";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import HowDoesItWork from "@/components/how-does-it-work/how-does-it-work.";
import Lottie from "lottie-react";
import faqData from "./faqData";
import howDoesItWorkData from "./howDoesItWorkData";
import FAQ from "@/components/faq/faq";
import BlogWrapper from "@/components/blog/blog-wrapper/blog-wrapper";
import ActionCard from "@/components/action-card/action-card";

const receivables = () => {
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
              title={`Olympus${space}`}
              color="rainy-blue"
              size="h1"
              weight="7"
            />
            <Heading title="| Receivables" size="h1" weight="7" />
          </div>
          <div>
            <Heading
              title={`Digitize and optimize${space}`}
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading title="your collection process." color="white" size="h2" />
          </div>
          <div className={`mt-4 ${styles.desktop_description}`}>
            <Heading
              title="With EnKash, you’ll build collection strategies that work for both you and your customers with smart automation tools, actionable data and smart invoices."
              color="white"
              size="h6"
              weight="5"
            />
          </div>
          <div className={`mt-4 ${styles.mobile_description}`}>
            <Heading
              title="With EnKash, you’ll build collection strategies that work for both you and your customers with smart automation tools, actionable data and smart invoices."
              color="white"
              size="h5"
              weight="5"
            />
          </div>
          <div className={`my-5 ${styles.button_container}`}>
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
          <Lottie
            animationData={receivablesAnimation}
            loop={true}
            className={styles.lottie_container}
          />
        </div>
      </div>
      <div className={`${styles.second_row} bg-white row d-flex row-padding`}>
        <HowDoesItWork dataSets={howDoesItWorkData} bannerImage={bannerImage} />
      </div>
      <div className={styles.third_row}>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 my-md-5 my-3">
            <ExploreCard
              title="Virtual Accounts"
              description="Steamline the collection process by creating virtual accounts for your customers "
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
            <div className={styles.lottie_container}>
              <Lottie animationData={virtualAccountAnimation} loop={true} />
            </div>
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
            <div className={styles.lottie_container}>
              <Lottie animationData={paymentLinkAnimation} loop={true} />
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
            <ExploreCard
              title="Payment Links"
              description="Embed payment links within digital invoices for quicker collections."
              theme="blue"
            />
          </div>
        </div>
        <div className={`row bg-white ${styles.section}`}>
          <div className="col-md-6 col-12 px-5 my-md-5 my-3">
            <ExploreCard
              title="Bulk Collect"
              description="Create an improved, customer-focused collection experience while ensuring better DSO."
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
            <div className={styles.lottie_container}>
              <Lottie animationData={bulkCollectAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row row-padding`}>
        <div className="col-md-6 col-12 d-flex mb-5 order-1 order-md-1 justify-content-center">
          <div className={styles.lottie_container}>
            <Lottie animationData={quickCollectAnimation} loop={true} />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-md-5 mb-3 order-2 order-md-2 px-md-5">
          <ExploreCard
            title="Quick Collect"
            description="Choose an approval matrix that works best for your business and create and maintain an aligned approval process for all kinds of spends."
            theme="green"
          />
        </div>

        <div className="col-md-6 col-12 mt-5 order-4 order-md-3 px-md-5">
          <ExploreCard
            title="Invoices"
            description="Automate invoice fetching seamlessly and discover hassle free invoice sharing."
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 d-flex mt-5 order-3 order-md-4 px-md-5">
          <div className={styles.lottie_second_container}>
            <Lottie animationData={invoiceAnimation} loop={true} />
          </div>
        </div>
      </div>

      <div className="row bg-white row-padding text-center">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-center">
          <Heading
            title={`Quick Collection,${space}`}
            size="h1"
            color="equity-blue"
            weight="6"
          />
          <Heading
            title={`Seamless Invoice Sharing${space}`}
            size="h1"
            color="black"
            weight="6"
          />
        </div>
      </div>

      <div className={`row bg-indi-volt ${styles.fifth_row}`}>
        <div
          className={`d-flex flex-column flex-md-row tex-center justify-content-evenly  ${styles.container}`}
        >
          <div className="md:mb-0 mb-4 text-md-center">
            <Image
              src={cashInHandIcon}
              alt="cash icon"
              className="md:mb-0 mb-4"
            />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="Quick" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}Collections`}
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
          <div className="mb-4 text-md-center">
            <Image src={clickIcon} alt="click icon" className="mb-4" />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="One-click" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}Sharing`}
                size="h5"
                color="white"
                weight="7"
              />
            </div>
          </div>
          <div className="mb-4 text-md-center">
            <Image
              src={searchIcon}
              alt="search icon"
              className="md:mb-0 mb-4"
            />
            <div className="d-flex flex-md-column flex-row">
              <Heading title="Easy" size="h5" color="white" weight="7" />
              <Heading
                title={`${space}Tracking`}
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
              item: "Collection Process",
              oldWayDescription:
                "Manually keeping track of receivables and customer payments creates unnecessary confusion.",
              newWayDescription:
                "Leverage virtual accounts to streamline the reconciliation process by linking received payments to customer accounts.",
            },
            {
              item: "Payment Methods",
              oldWayDescription:
                "Manual procedures are quite time consuming and involve multiple levels of bureaucracy",
              newWayDescription:
                "Leverage smart tools like OCR technology and approval matrices to automate the reimbursement process.",
            },
            {
              item: "Collection Method",
              oldWayDescription:
                "When businesses generate paper invoices manually, the process is time-consuming, resource-intensive, and poses risks of errors or lost invoices.",
              newWayDescription:
                "EnKash generates and sends invoices automatically, which saves time and reduces the risk of human error. This means your teams can focus on other important tasks and improve their overall efficiency.",
            },
            {
              item: "Invoice Generation",
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
                <Heading title="Automate." color="white" size="h1" weight="5" />
                <Heading
                  title="Accelerate."
                  color="electric-green"
                  size="h1"
                  weight="5"
                />
              </div>
            </>
          }
          mainImage={officeImg}
          description="Put repetitive and mundane tasks on auto-pilot and significantly reduce your team’s efforts in the invoicing and reconciliation process."
        />
      </div>
      <div className="bg-white row-padding d-flex justify-content-center">
        <div className="ps-md-5 scroll_container d-flex pb-4">
          <div className="me-4">
            <GetStartedCard
              title1="Proactive Collection"
              title2=""
              description="Build collection strategies that work for both you, and your customer. Get details about each and every transaction, linked seamlessly with virtual accounts for better insights."
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              title1="Improved Cashflow"
              title2=""
              description="Improve your businesses overall cashflow with an automated collection strategy that does most of the work for you."
              ctaColor="blue"
            />
          </div>
          <div className="me-4">
            <GetStartedCard
              title1="Departmental Hierarchy"
              title2=""
              description="Choose an approval matrix that’s best for your business, down to the departmental level. More transparency means increased efficiency and nullified delays."
              ctaColor="blue"
            />
          </div>
        </div>
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper title="Receivables Insights" />
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
            title="Have Questions about Receivables?"
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

export default receivables;
