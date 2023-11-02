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

const rentalPayments = () => {
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
            <Heading title="Rental Payments" size="h4" weight="4" />
          </div>

          <div className="d-line">
            <Heading
              title={`Making${space}`}
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="Rental Payments"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title={`${space}Has Never Been this Seamless!`}
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="With EnKash, make rental payments in just a few clicks and easy steps with no delays or hassles"
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
          <Lottie animationData={bannerLottie} loop={true} />
        </div>
        <div className={styles.three_step_container}>
          <ThreeSteps />
        </div>
      </div>

      <div className={`${styles.second_row} row d-flex bg-white row-padding`}>
        <EnkashWay
          progressData={[
            {
              itemArray: ["Data", "Processing"],
              oldWayDescription: "Data loss due to manual payment processing",
              newWayDescription:
                "The records and receipts are digitally stored; low or no chance of data loss",
            },
            {
              itemArray: ["Payments", "Charges"],
              oldWayDescription:
                "Late payment charges are incurred due to delays in making payments",
              newWayDescription:
                "Automated reminders ensure timely payments; no penalties or late payment charges",
            },
            {
              itemArray: ["Bulk", "Payments"],
              oldWayDescription:
                "Prepare paperwork to get the payment approved from the right person",
              newWayDescription:
                "Upload GST challan to EnKash portal. Challan will be read and verified digitally",
            },
            {
              itemArray: ["Payment", "Modes"],
              oldWayDescription:
                "Challenging to make bulk rental payments in real time",
              newWayDescription:
                "Bulk rental payments can be made seamlessly and hassle-free",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-2">
          <Heading
            title="Simple, smooth & hassle-free rental payments"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}for your business`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className="d-flex justify-content-center text-center mb-5">
          <Heading
            title="We ensure fast, easy, and safe payments!"
            color="black"
            size="h5"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Quick and Easy Onboarding"
              title2=""
              description="Complete the onboarding with a few simple steps to ensure that rent payments go on time"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Automated Payment Reminders"
              title2=""
              description="Enables automated reminders to track due dates, reduce late payments, and improve business cash flow"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Easy Payment Tracking"
              title2=""
              description="Track what’s paid, due, and pending on a single dashboard to improve visibility, control payment activity, and increase efficiency"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Centralized Approval"
              title2=""
              description="Easily pay rent online for all locations with a centralized approval process with all due checks and approvals"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Pay Using Credit Cards"
              title2=""
              description="Get the option to pay rentals on time using any credit card and keep your business cash flow steady"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Auto-Generated Records"
              title2=""
              description="The platform auto-generates monthly rental bills on specified dates as per rental agreements that you feed into the system"
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
                    title={`Rental Payments${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="are Now Fast, Easy, and Safe!"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How Does Rental Payments Work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper title="Learn how Rental Payments could revolutionize the way you work!" />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about rental payments in detail."
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

export default rentalPayments;
