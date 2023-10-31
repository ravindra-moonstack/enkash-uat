"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../constant/common";
import faqData from "./faqData";
import carouselData from "./carouselData";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
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

const brandVoucher = () => {
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
                title={`Freedom |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="Meal Cards" size="h4" weight="4" />
          </div>
          <Heading
            title={`Enhance Employee${space}`}
            color="rainy-blue"
            size="h2"
            weight="7"
          />
          <Heading
            title={`Experience with${space}`}
            color="white"
            size="h2"
            weight="7"
          />
          <Heading title="Meal Cards" color="white" size="h2" weight="7" />

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Provide your employees tax-free meal cards to purchase food and grocery-related items across multiple food chains, retail outlets, and supermarkets"
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
              item: "Management",
              oldWayDescription:
                "Paper-based coupons are challenging to manage and carry everywhere ",
              newWayDescription:
                "Prepaid digital cards are preloaded with a particular amount and can be easily managed",
            },
            {
              item: "Security",
              oldWayDescription:
                "Paper coupons are always at risk of loss or expiry, with the balance remaining discarded",
              newWayDescription:
                "Secure and easy-to-track cards to prevent loss or misuse by others. The balance remaining can be carried forward",
            },
            {
              item: "Accessibility",
              oldWayDescription:
                "Food vouchers are allocated manually, making it a time-consuming process",
              newWayDescription:
                "EnKash meal card can be accessed on the platform after KYC",
            },
            {
              item: "Limitations",
              oldWayDescription:
                "Face limitations due to restrictions of certain food shops",
              newWayDescription:
                "Fewer restrictions due to the broader acceptability of meal cards across outlets",
            },
            {
              item: "Tracking",
              oldWayDescription:
                "Difficult to keep track of the balance remaining due to paper coupons",
              newWayDescription:
                "Automatic updates from the card-issuing entities on balance available",
            },
            {
              item: "Allocation of Funds",
              oldWayDescription:
                "Limitations to dynamically allocate funds or control the transactions",
              newWayDescription:
                "Limitations to dynamically allocate funds or control the transactions",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Meal cards from EnKash are"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}hassle-free, widely accepted & trackable`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Issue and Refill"
              title2=""
              description="Meal cards are easy to issue with a specific limit towards food purchases and easier to refill"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Easy Management"
              title2=""
              description="In case of loss or misuse, it is easy to manage the card from the platform to restrict or block usage"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1=" Track and Control"
              title2=""
              description="Due to the features that mimic debit cards, the meal card is easy to keep track of and control for the end user"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Wider Acceptance"
              title2=""
              description="Various supermarkets, food delivery apps, and other eating establishments widely accept meal cards"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline flex-column">
                  <Heading
                    title={`Explore${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`secure, convenient${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`and${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`widely accepted${space}`}
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="EnKash meal cards"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
                <div></div>
              </div>
            </>
          }
          mainTitle="How Does Meal Cards Work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper title="Learn how meal cards offer a host of benefits for your business and employees!" />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about meal cards in detail"
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

export default brandVoucher;
