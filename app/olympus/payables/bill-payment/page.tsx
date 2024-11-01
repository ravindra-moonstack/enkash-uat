import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../../common/constant";
import faqData from "./faq-data";
import blogData from "./blog-data";
import carouselData from "./carousel-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import { Metadata } from "next";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import BlogWrapper from "@/components/blog/blog-wrapper";
import FAQHtml from "./faq-html";
import Header from "@/components/header/header";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import Footer from "@/components/footer/footer";
import generateMetaData from "@/common/utils/metaData";

export const metadata: Metadata = generateMetaData({
  title: "Bill Payment | Billing Payment Solution | EnKash",
  description:
    "Streamline your financial management with an advanced bill payment platform.  Simplify bill payment processes and stay organized effortlessly. Discover efficient bill pay solutions for seamless financial tracking and timely payments",
  alternates: {
    canonical: "https://www.enkash.com/olympus/payables/bill-payment/",
  },
  faqData: faqData,
});

const billPayments = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <Header utmSource="payables" />
      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Payables${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading
              title="| Bill Payment"
              size="h4"
              weight="4"
              useH1TagInHtml={true}
            />
          </div>

          <div className="d-inline">
            <Heading
              title="Digital bill payments to enjoy "
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

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Pay all your business-related bills digitally from a single dashboard. Experience exclusive features like auto-fetch and automated reminders to avoid late payment charges"
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
                url="/sales/?source=payables"
              />
            </div>
            <div>
              <SecondryButton
                title="Get Free Demo"
                actionImage={whiteArrow}
                iconSize={15}
                url="/sales/?source=payables"
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
              itemArray: ["Manual", "Intervention"],
              oldWayDescription:
                "The old way to make bill payments is time-consuming and requires manual intervention that leads to errors, misses, and losses of bills.",
              newWayDescription:
                "With the EnKash way, make instant bill payments in a few clicks from a single dashboard and reduce manual efforts extensively.",
            },
            {
              itemArray: ["Mode of", "Payment"],
              oldWayDescription:
                "The traditional way doesn’t allow you to use multiple modes of payment to pay bills.",
              newWayDescription:
                "EnKash supports different modes of payments like netbanking, debit cards, connected banking and more.",
            },
            {
              itemArray: ["Late Payment", "Charges"],
              oldWayDescription:
                "In case you miss the payment date, late payment charges will incur.",
              newWayDescription:
                "With EnKash, you will not incur any penalties or late payments as chances of making late payments will be negligible.",
            },
            {
              itemArray: ["Bulk or Multiple", " Payments"],
              oldWayDescription: "Only one bill can be paid at a time.",
              newWayDescription:
                "Bill payments in bulk can be automated in one click.",
            },
            {
              itemArray: ["Chances of", "Loss"],
              oldWayDescription:
                "Managing paper-made bills is a hassle and comes with its own set of challenges like loss, storage, and depreciation.",
              newWayDescription:
                "All bills are digitally stored for future records and reconciliation.",
            },
            {
              itemArray: ["Timely", "Reminders"],
              oldWayDescription:
                "There is no way to send timely reminders to customers.",
              newWayDescription:
                "With EnKash, you can send timely reminders to customers.",
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

        <div className="d-flex justify-content-center">
          <div className={`d-flex flex-md-row mt-3 pb-4 scroll_container`}>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Regulate Payments"
                description="Carry out a one-time process to ensure that you have a regulated payment process that helps you make payments smoothly without any risk"
                source="payables"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Automated Reminders"
                description="Ensure that you do not miss any of the regularly recurring bill payments’ deadlines, with automatic reminders. This ensures continuity, helps cut down penalties, and improves savings"
                source="payables"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                titleHtml={
                  <>
                    <Heading
                      title="Approval"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                    <Heading
                      title="Flow"
                      color="rainy-blue"
                      size="h2"
                      weight="6"
                    />
                  </>
                }
                source="payables"
                description="Ensure checks and approvals are in place for valid spending, the proper audit trail, and close books quickly. This will help you 
              prevent errors, unauthorized payments and reduce the risk of fraud"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Complete Transparency"
                description="Clearly view the status of your bill payments, including confirmation of payment processing, the date of payment, and upcoming bills to pay"
                source="payables"
              />
            </div>
            <div className="mb-2 mb-md-0 me-3">
              <GetStartedCard
                whiteTitle="Secured Payments"
                description="Billing automation helps protect your privacy and identity by eliminating any risks associated with lost paperwork using encryption to protect the transmission of sensitive data"
                source="payables"
              />
            </div>
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
                    title="bill payment"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title={`${space}seamlessly with EnKash`}
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
      <div className="bg-white row-padding text-center d-flex flex-column">
        <BlogWrapper
          blogData={blogData}
          title="Learn how bill payments can revolutionize the way you work!"
        />
      </div>
      <div
        className={`${styles.fifth_row} row row-padding-bottom-none bg-white`}
      >
        <div className="mb-5">
          <Heading title="Got Questions?" color="equity-blue" size="h1" />
        </div>
        <div className="mb-5">
          <Heading
            title="Don't worry! Our FAQs section will help you learn about bill payments in detail"
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
          title="Seeking further understanding of bill payments online?"
          description="Bill payments refer to those regularly occurring expenses that a business has. These could include utilities like electricity, water, and other regular payments you need to make on time to ensure your business operations continue uninterrupted."
          source="payables"
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
                  title="How to make bill payments on EnKash platform?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can upload all the relevant bills on EnKash, and set internal processes to get the relevant approvals from different departments. Once you do that, every time the bill is due, you will be notified by email to take action like approve, reject, or pay, based on which you can take action. Once it is approved, you can pay using different payment methods on EnKash Platform."
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How does department management help with bill pay solutions?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Different departments have different types of expenses, some of which are urgent, and some of them are only required for a certain period of time. With department management, you can set budgets, approval hierarchies, and other processes to ensure that bill payments happen without compromising business operations while ensuring spend is as per budgets."
                />
              </div>

              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the types of utility bills I can pay?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="You can pay various utility bills like electricity, water, internet bills, etc. using EnKash platform."
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How do I know my bills are paid?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Once the bills are paid, you can log in to the platform and check the status of the bills paid on the dashboard including the date of bill payment and amount paid. "
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What are the different modes used for online bill payment?"
                />
              </div>
              <div className="mb-2">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="The different modes you can use for online bill payment include
                  NEFT, RTGS, IMPS, UPI, debit cards, connected banking, and more.  
                  Each of the modes of payment has its own set of features and benefits."
                />
              </div>
            </>
          }
        />
      </div>
      <Footer utmSource="payables" />
    </div>
  );
};

export default billPayments;
