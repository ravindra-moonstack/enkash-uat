"use client";

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
import Lottie from "lottie-react";

const taxPayments = () => {
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
            <Heading title="Tax Payments" size="h4" weight="4" />
          </div>

          <div className="">
            <div className="d-flex flex-wrap">
              <Heading
                title={`GST Payments with Complete${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="Visibility and Approvals"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Make GST challan payments on time every time with an optimized process and easy approvals via EnKash"
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
          <Lottie
            animationData={bannerLottie}
            loop={true}
            className={styles.lottie_container}
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
              itemArray: ["Manual", "Intervention"],
              oldWayDescription:
                "Set a reminder for tax payments to make sure it is paid on time",
              newWayDescription:
                "Go to the government portal - Create GST challan",
            },
            {
              itemArray: ["Mode", "of", "Payment"],
              oldWayDescription:
                "Log in to the portal to get access to the invoice and check it",
              newWayDescription:
                "Choose payment mode like NEFT/RTGS - Remitting bank - Axis bank",
            },
            {
              itemArray: ["Late", "Payment", "Charges"],
              oldWayDescription:
                "Prepare paperwork to get the payment approved from the right person",
              newWayDescription:
                "Upload GST challan to EnKash portal. Challan will be read and verified digitally",
            },
            {
              itemArray: ["Bulk", "or", "Multiple", "Payments"],
              oldWayDescription:
                "Arrange funds or ensure limits to make the payment",
              newWayDescription:
                "Set unlimited hierarchy approvals and pay using any mode",
            },
            {
              itemArray: ["Chances", "of", "Loss"],
              oldWayDescription:
                "Make the payment and file the paperwork for future reference",
              newWayDescription:
                "Automatic real-time entry of the payment record",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Leverage EnKash for"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Automatic and Easy${space}`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title="GST Tax Payments"
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Easy Payments"
              title2=""
              description=" Set and manage a simple and intuitive process to ensure that all aspects are checked and payments are quick and easy."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Easy Monitoring"
              title2=""
              description="Benefit from centralized view and control over all GST bill payments across your company on a single platform"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Approval Flow"
              title2=""
              description="Ensure checks and approvals are in place for valid spending, the proper audit trail, and close books quickly. This will help you 
              prevent errors, unauthorized payments and reduce the risk of fraud"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Digital Challans"
              title2=""
              description="Auto read the challans and convert them into paper records for audits and other purposes"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Manage Approvals"
              title2=""
              description="Set multi-level hierarchical approvals"
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
                    title={`How Tax Payments Help with${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Expense Monitoring and Audit Trails"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How do Tax Payments Cards work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper
          title="How does Tax Payment Help Your Finance Team Become More Efficient?"
          pageName="tax-payment"
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
            title="Don't worry! Our FAQs Section will Help you Learn about Tax Payments in detail."
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

export default taxPayments;
