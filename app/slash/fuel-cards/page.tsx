import Image from "next/image";
import styles from "./page.module.scss";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import { space } from "../../../constant/common";
import faqData from "./faq-data";
import { bannerLottie, caraouselBg, faqBg, whiteArrow } from ".";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import EnkashWay from "@/components/enkash-way/enkash-way";
import ThreeSteps from "@/components/three-steps/three-steps";
import HowDoesCarousel from "@/components/carousel/how-does-carousel";
import { Metadata } from "next";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import ComprehensiveView from "@/components/comprehensive-view/comprehensive-view";
import carouselData from "./carousel-data";
import FAQHtml from "./faq-html";
import HeaderWrapper from "@/components/header/header-wrapper";
import BlogWrapper from "@/components/blog/blog-wrapper";
import blogData from "./blog-data";

export const metadata: Metadata = {
  title: "Corporate Meal Card Online: Effortless Dining Solutions for Business",
  description:
    "Unlock the convenience of corporate meal cards online. Streamline employee benefits and expense management effortlessly with our secure and efficient solution.",
};

const fuelCard = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <HeaderWrapper />

      <div className={`${styles.first_row} row row-padding color-white`}>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex mb-5 flex-column flex-md-row">
            <div className="d-flex">
              <Heading
                title={`Slash |${space}`}
                color="rainy-blue"
                size="h4"
                weight="7"
              />
            </div>
            <Heading title="Fuel Cards" size="h4" weight="4" />
          </div>
          <div className="d-flex flex-column">
            <Heading
              title="Empower your workforce"
              color="rainy-blue"
              size="h2"
              weight="7"
            />
            <Heading
              title="with simplified fuel"
              color="white"
              size="h2"
              weight="7"
            />
            <Heading
              title="expense management"
              color="white"
              size="h2"
              weight="7"
            />
          </div>

          <div className="d-flex mt-4 pe-5">
            <Heading
              title="Streamline employee fuel expenses, gain real-time visibility into fuel usage, and eliminate the hassles of traditional fuel reimbursement processes"
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
              itemArray: ["Ease of Use"],
              oldWayDescription:
                "Previously, employees bore the burden of covering fuel expenses and navigating a cumbersome paper-based reimbursement system.",
              newWayDescription:
                "With EnKash, fuel cards can be used across a vast network of fuel stations, eliminating the hassle of personal upfront costs and a long reimbursement process.",
            },
            {
              itemArray: ["Expense Tracking"],
              oldWayDescription:
                "Manual tracking and management of fuel receipts.",
              newWayDescription:
                "Easily automate tracking and reporting of fuel expenses by employees in real time.",
            },
            {
              itemArray: ["Set Limits"],
              oldWayDescription:
                "No effective means of setting limits on employee fuel expenses, leading to potential overspending and a lack of control.",
              newWayDescription:
                "Set and manage precise spending limits for each employee card, ensuring fuel expenses are within the defined budget.",
            },
            {
              itemArray: ["Visibility"],
              oldWayDescription:
                "Getting a comprehensive view of the business's fuel costs is extremely challenging.",
              newWayDescription:
                "Gain a holistic overview of your employees' fuel expenses through a single dashboard that can help you reduce costs.",
            },
          ]}
        />
      </div>

      <div
        className={`${styles.third_row}  row d-flex bg-white row-padding-x-only`}
      >
        <div className="d-inline text-center mb-5">
          <Heading
            title="Efficiency, control, and savings"
            color="equity-blue"
            size="h1"
            weight="6"
          />
          <Heading title=" in every mile " color="black" size="h1" weight="6" />
          <Heading
            title="with prepaid fuel cards"
            color="black"
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
                    title="Spend"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Control"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Establish daily and monthly payment limits to align with your budget and spend habits"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Wider Acceptance"
              description="Utilize your fuel card at a vast network of authorized fuel stations without incurring additional charges"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Reduce"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Fraud"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Receive real-time alerts, enhance security, and block the card instantly for any suspicious activity to ensure protection against misuse and fraud"
            />
          </div>
          <div className="mb-2 mb-md-0 me-3">
            <GetStartedCard
              whiteTitle="Smart Monitoring"
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
                <div className="d-flex flex-column">
                  <Heading
                    title="Leverage pre-loaded fuel cards for business"
                    color="rainy-blue"
                    size="h1"
                    weight="6"
                  />
                  <Heading
                    title="travel expenses"
                    color="rainy-blue"
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
          title="Learn how Fuel Cards offer a host of benefits for your business and employees!"
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
            title="Don't worry! Our FAQs section will help you learn about fuel cards in detail"
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
          title="Seeking further understanding of fuel cards?"
          description="Fuel or fleet cards simplify business fuel purchases, offering a streamlined and secure payment process. These cards optimize budgets, reduce administrative overhead, and enhance accountability, making them essential tools for organizations' efficient and cost-effective fuel management"
        />
      </div>
      <div className={`${styles.seventh_row} row`}>
        <ComprehensiveView
          title="Explore our comprehensive guide"
          innerHtml={
            <>
              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="How can I get fuel cards for my business?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="EnKash streamlines the process of obtaining fuel cards for your business with a straightforward approach. Begin by signing up on EnKash and completing KYC; then, link your company's bank account and load the necessary funds for business expenses. Subsequently, issue fuel cards to employees preloaded with funds and notify them about card activation via SMS/email."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" Are fuel cards good for small businesses?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="Fuel cards are a valuable asset for small businesses. These cards simplify the often cumbersome reimbursement process, significantly reducing paperwork and administrative overhead. They offer cost-effective benefits, enabling businesses to optimize their fuel-related expenses efficiently. For small businesses seeking streamlined processes and cost savings, fuel cards like EnKash's are undoubtedly worth considering."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title="What risks are associated with fuel cards?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="While fuel cards are designed to mitigate misuse through authorized outlets, there are inherent risks, particularly in unauthorized usage. Fuel cards by EnKash address this concern with robust security features like passcodes and OTPs, ensuring that only authorized individuals can use the cards. These security measures help prevent unauthorized usage and control fuel expenses."
                />
              </div>

              <div className="mb-3">
                <Heading
                  size="h5"
                  color="black"
                  weight="6"
                  title=" Is it better to use a fuel or credit card for fuel expenses?"
                />
              </div>
              <div className="mb-5">
                <Heading
                  size="h6"
                  color="black"
                  weight="4"
                  title="A dedicated fuel card, such as EnKash's offering, is generally a superior choice for managing fuel expenses. Fuel cards provide targeted control over fuel-related spending, efficient tracking of transactions, and cost-saving benefits that credit cards lack. They streamline the management of fuel expenses and offer a more cost-effective solution than traditional credit cards."
                />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default fuelCard;
