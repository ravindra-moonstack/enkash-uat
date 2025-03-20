import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../common/constant";

import { blogData, faqData, carouselData } from "./data";

import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import BlogWrapper from "@/components/blog/blog-wrapper";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import { FAQHtml } from "@/components/faq";
import { Header, Footer } from "@/components";

import generateMetaData from "@/common/utils/metaData";
import StructuredData from "@/components/head/structuredData";

export const metadata: Metadata = generateMetaData({
  title: "Brand Voucher – Corporate Gift Vouchers for Employees | EnKash",
  description:
    "Explore Brand Vouchers and Buy Gift Vouchers. Discover a thoughtful and versatile way to recognize and motivate your team with our selection of brand vouchers",
  alternates: {
    canonical: "https://www.enkash.com/loyalty-lounge/brand-voucher/",
  },
  faqData: faqData,
});

const brandVoucher = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <StructuredData
        url={`https://www.enkash.com/loyalty-lounge/brand-voucher/`}
        faqData={faqData}
      />
      <Header utmSource="Loyalty_lounge" />

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
            <Heading
              title="Brand Vouchers"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>
          <Heading
            title={`Unlock huge savings on${space}`}
            color="white"
            size="h2"
            weight="7"
          />
          <Heading
            title={`a wide range of exclusive${space}`}
            color="white"
            size="h2"
            weight="7"
          />
          <div className="d-line">
            <Heading
              title="brand vouchers"
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
              <PrimaryButton
                title="EnKash Now"
                theme="blue"
                url="/sales/?source=Loyalty_lounge"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=Loyalty_lounge"
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
              itemArray: ["Voucher", "Access"],
              oldWayDescription:
                "Buying physical vouchers can take time and effort.",
              newWayDescription:
                "Vouchers are promptly delivered to your email. You can easily access these brand vouchers anytime and anywhere with your EnKash account.",
            },
            {
              itemArray: ["Redemption", "Process"],
              oldWayDescription:
                "Redeeming vouchers may require in-person visits or lengthy online processes.",
              newWayDescription:
                "Redeem vouchers effortlessly with just a few clicks during online purchases or in-store transactions.",
            },
            {
              itemArray: ["Freedom of", "Choice"],
              oldWayDescription:
                "Voucher limitations and restrictions can hinder your ability to choose freely.",
              newWayDescription:
                "Enjoy the flexibility to choose from a diverse range of vouchers tailored to your preferences.",
            },
            {
              itemArray: ["Voucher", "Management"],
              oldWayDescription:
                "Keeping track of multiple paper vouchers can be troublesome.",
              newWayDescription:
                "No more clutter or misplacement, these gift vouchers for employees can be easily accessed and managed online.",
            },
            {
              itemArray: ["Personalization"],
              oldWayDescription:
                "Limited personalization options for physical vouchers.",
              newWayDescription:
                "Share brand vouchers as gifts with personalized messages.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Let them choose their adventure with our exclusive range of"
            color="black"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}brand vouchers`}
            color="equity-blue"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Instant"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Delivery"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              source="Loyalty_lounge"
              description="Brand vouchers are available with a snap of a finger and can be accessed anytime and anywhere"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Flexible Denominations"
              description="Brand vouchers can be availed in multiple flexible denominations as per budget"
              source="Loyalty_lounge"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Bulk Order Discount"
              description="Exclusive savings can be availed on employee gift vouchers ordered in bulk for rewards and recognition"
              source="Loyalty_lounge"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="R&R Management"
              description="HR managers can manage points allocation to employees on a single platform"
              source="Loyalty_lounge"
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
                    title={`Explore exclusive${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="brand vouchers"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                </div>
                <div>
                  <Heading
                    title="with huge discounts across various categories"
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How does it work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      {/* <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how brand vouchers can benefit your business and employees!"
        />
      </div> */}
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about brand vouchers in detail"
            color="black"
            size="h4"
          />
        </div>

        <div>
          <FAQHtml faqData={faqData} />
        </div>
        <div className={styles.faq_bg}>
          <Image src={faqBg} alt="background image" />x
        </div>
      </div>

      <div className={`${styles.sixth_row} row`}>
        <ContactUsCard
          title="Seeking further understanding of brand vouchers?"
          description="Brand vouchers are prepaid instruments created to provide discounts on purchasing specific products and services following their terms and conditions."
          source="Loyalty_lounge"
        />
      </div>

      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does a gift voucher or brand voucher work?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A gift or brand voucher works like a debit card. It is preloaded with money, and the receiver can use it wherever specified up to the limit of the gift voucher. It comes with specific terms and conditions and has an expiration date."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Can you claim GST on gift vouchers to employees?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Businesses cannot claim GST on employee gift vouchers if they are not considered a business expense."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="Are there any restrictions on using brand vouchers?"
                />
              </div>
              <div className="mb-3">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Brand vouchers intend to provide discounts to the receiver. However, specific associated terms and conditions could be termed as restrictions."
                />
              </div>
              <div className="mb-2 d-inline">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Applicability:"
                  />
                </div>
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="It is crucial to check whether the brand voucher can be redeemed online, offline, or both. The brand can decide whether the voucher they have provided can be used once or multiple times."
                />
              </div>
              <br />
              <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Non-refundable, non-transferable, or exchanged against cash:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Typically, brand vouchers cannot be refunded, transferred, or exchanged for cash."
                />
              </div>
              <br /> <br />
              <div className="mb-2 d-inline mt-2">
                <div className="me-2 d-inline">
                  <Heading
                    size="h6"
                    color="black"
                    weight="6"
                    title="Expiry date:"
                  />
                </div>

                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Brand vouchers are usually valid for one year from the date of issuance. Check the last date of usage to be able to utilize the discount available."
                />
              </div>
            </>
          }
        />
      </div>

      <Footer utmSource="Loyalty_lounge" />
    </div>
  );
};

export default brandVoucher;
