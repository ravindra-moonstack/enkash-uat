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
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bill Payment | Billing Payment Solution | EnKash",
  description:
    "Streamline your financial management with an advanced bill payment platform.  Simplify bill payment processes and stay organized effortlessly. Discover efficient bill pay solutions for seamless financial tracking and timely payments",
};

const billPayments = () => {
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
            <Heading title="Bill Payments" size="h4" weight="4" />
          </div>

          <div className="">
            <div className="d-flex flex-wrap">
              <Heading
                title={`Digital bill payments to enjoy${space}`}
                color="white"
                size="h2"
                weight="7"
              />
              <Heading
                title="convenience, flexibility, and control"
                color="rainy-blue"
                size="h2"
                weight="7"
              />
            </div>
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Pay all your business-related bills digitally from a single dashboard. Experience exclusive features like auto-fetch and automated reminders to avoid late payment charges."
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
          <LottieClientComponent animationData={bannerLottie} loop={true} />
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
                "The old way to make bill payments is time-consuming and requires manual intervention that leads to errors, misses, and losses of bills",
              newWayDescription:
                "With the EnKash way, make instant bill payments in a few clicks from a single dashboard and reduce manual efforts extensively",
            },
            {
              itemArray: ["Mode of", "Payment"],
              oldWayDescription:
                "The traditional way doesn’t allow you to use multiple modes of payment to pay bills",
              newWayDescription:
                "EnKash supports different modes of payments like credit cards, net banking, debit cards, and connected banking",
            },
            {
              itemArray: ["Late", "Payment", "Charges"],
              oldWayDescription:
                "In case you miss the payment date, late payment charges will incur",
              newWayDescription:
                "With EnKash, you will not incur any penalties or late payments as chances of making late payments will be negligible",
            },
            {
              itemArray: ["Bulk or", "Multiple", "Payments"],
              oldWayDescription: "Only one bill can be paid at a time",
              newWayDescription:
                "Bill payments in bulk can be automated in one click",
            },
            {
              itemArray: ["Chances of", "Loss"],
              oldWayDescription:
                "Managing paper-made bills is a hassle and comes with its own set of challenges like loss, storage, and depreciation",
              newWayDescription:
                "All bills are digitally stored for future records and reconciliation",
            },
            {
              itemArray: ["Timely", "Reminders"],
              oldWayDescription:
                "There is no way to send timely reminders to customers",
              newWayDescription:
                "With EnKash, you can send timely reminders to customers",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Bill payments"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading
            title={`${space}with EnKash is easier, simpler, and faster`}
            color="black"
            size="h1"
            weight="6"
          />
        </div>

        <div className={`col-12 d-flex flex-md-row mt-3 pb-3 scroll_container`}>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Regulate Payments"
              title2=""
              description="Carry out a one-time process to ensure that you have a regulated payment process that helps you make payments smoothly without any risk"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Automated Reminders"
              title2=""
              description="Ensure that you do not miss any of the regularly recurring bill payments’ deadlines, with automatic reminders. This ensures continuity, helps cut down penalties, and improves savings"
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
              title1="Complete Transparency"
              title2=""
              description="Clearly view the status of your bill payments, including confirmation of payment processing, the date of payment, and upcoming bills to pay"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              title1="Secured Payments"
              title2=""
              description="Billing automation helps protect your privacy and identity by eliminating any risks associated with lost paperwork using encryption to protect the transmission of sensitive data."
            />
          </div>
        </div>
      </div>

      <div className={`${styles.fourth_row} row`}>
        <HowDoesCarousel
          titleContent={
            <>
              <div className="text-center">
                <div className="text-center d-inline">
                  <Heading
                    title={`Choose to make${space}`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="Billl Payments"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`${space}seamlessly with Enkash!`}
                    color="white"
                    size="h1"
                    weight="6"
                  />
                </div>
              </div>
            </>
          }
          mainTitle="How do Bill Payments Cards work?"
          carouselData={carouselData}
          carouselBg={caraouselBg}
        />
      </div>
      <div className="row bg-white row-padding text-center">
        <BlogWrapper
          pageName="bill-payment"
          title="Learn how bill payments could revolutionize the way you work!"
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
            title="Don't worry! Our FAQs section will help you learn about bill payments in detail"
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

export default billPayments;
