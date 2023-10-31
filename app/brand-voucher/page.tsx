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
                title={`Loyalty Lounge |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="Brand Vouchers" size="h4" weight="4" />
          </div>
          <Heading
            title={`Unlock huge savings on${space}`}
            color="white"
            size="h2"
            weight="7"
          />
          <Heading
            title={`a wide range of Exclusive${space}`}
            color="white"
            size="h2"
            weight="7"
          />
          <div className="d-line">
            <Heading
              title="Brand Vouchers"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Keep your employees motivated with exclusively curated 400+ brand gift vouchers available across various categories. Businesses can use these brand vouchers for R&R purposes and save time in the procurement and tracking process"
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
              item: "Voucher Access",
              oldWayDescription:
                "Buying physical vouchers can take time and effort",
              newWayDescription:
                "Vouchers instantly come in your mail. You can easily access these brand vouchers anytime and anywhere with your EnKash account",
            },
            {
              item: "Redemption Process",
              oldWayDescription:
                "Redeeming vouchers may require in-person visits or lengthy online processes",
              newWayDescription:
                "Redeem vouchers effortlessly with just a few clicks during online purchases or in-store transactions",
            },
            {
              item: "Freedom of Choice",
              oldWayDescription:
                "Voucher limitations and restrictions can hinder your ability to choose freely",
              newWayDescription:
                "Enjoy the flexibility to choose from a diverse range of vouchers tailored to your preferences",
            },
            {
              item: "Voucher Management",
              oldWayDescription:
                "Keeping track of multiple paper vouchers can be troublesome",
              newWayDescription:
                "No more clutter or misplacement, these gift vouchers for employees can be easily accessed and managed online",
            },
            {
              item: "Personalization",
              oldWayDescription:
                "Limited personalization options for physical vouchers",
              newWayDescription:
                "Share brand vouchers as gifts with personalized messages",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Let them Choose their Adventure with our Exclusive Range of"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}Brand Vouchers`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>
        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Instant Delivery"
              title2=""
              description="Brand vouchers are available with a snap of a finger and can be accessed anytime and anywhere"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Flexible Denominations"
              title2=""
              description="Brand vouchers can be availed in multiple flexible denominations as per budget."
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Exclusive Discount on Bulk Ordering"
              title2=""
              description="Exclusive savings can be availed on employee gift vouchers ordered in bulk for rewards and recognition"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="R&R Management"
              title2=""
              description="HR managers can manage points allocation to employees on a single platform"
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
                    title={`EnKash makes it easy to${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="purchase and use"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
                <div>
                  <Heading
                    title="brand vouchers"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How Does Brand Vouchers Work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper title="Learn how Brand Vouchers offer many benefits for your business and employees!" />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions ?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about brand vouchers in detail"
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
