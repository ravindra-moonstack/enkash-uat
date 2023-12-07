import { space } from "@/constant/common";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import PrimaryButton from "../components/buttons/primary-button/primary-button";
import ExploreCard from "@/components/explore-card/explore-card";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import RainbowSection from "@/components/homepage/rainbow";
import BankSection from "@/components/homepage/bank-section";
import LoyaltyLoungeSection from "@/components/homepage/loyalty-lounge-section";
import PolygonSection from "@/components/homepage/polygon-section";
import TextAnimation from "@/components/framer-motion/text-animation";
import WhileInViewAnimation from "@/components/framer-motion/while-in-view-animation";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";

import {
  numberOne,
  numberThree,
  numberTwo,
  stack,
  userPlus,
  userTick,
  automateIcon,
  twoBoxIcon,
  blueBoxIcon,
  circleRupeeIcon,
  teamImg,
  inc42,
  paymentAndCardSummit,
  nasscom,
  testimonials,
  userImg,
  blueBlackLine,
  mobileTestimonial,
  leftBlueGradient,
  leftCardGradient,
  rightCardGradient,
  greenBg,
  integration,
} from ".";
import DashBoardAnimation from "@/components/homepage/dashboard-animation";

export const metadata: Metadata = {
  title: "Asia's 1st and Smartest Spend Management Platform | EnKash",
  description:
    "Enkash is now Asia's 1st and Smartest Spend Management Platform that offer services like Account Payable, Accounts Receivable, Expense Management & many more.",
};

const home = () => {
  const loginUrl = "https://home.enkash.com/login";
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>
      <RainbowSection />
      <div
        className={`${styles.second_row} row row-padding d-flex justify-content-center align-items-center
       text-center color-white bg-indi-volt`}
      >
        <div className={`col-12 ${styles.heading}`}>
          <div>
            <Heading
              title="3 Easy Steps to"
              color="white"
              size="h2"
              weight="6"
            />
          </div>
          <div>
            <Heading
              title="Get Started with EnKash"
              color="white"
              size="h2"
              weight="3"
            />
          </div>
        </div>
        <div className={`col-md-4 col-12 ${styles.steps}`}>
          <WhileInViewAnimation
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            }}
            innerHtml={
              <div className="d-flex align-items-center justify-content-start justify-content-md-center">
                <Image
                  src={userPlus}
                  alt="signup image"
                  className={`me-3 img-fluid ${styles.action_image_user_plus}`}
                />
                <Image
                  src={numberOne}
                  alt="step one image"
                  className={`me-3 ${styles.steps_image}`}
                />
                <div>
                  <div className={styles.three_steps_text}>Sign Up</div>
                </div>
              </div>
            }
          />
        </div>

        <div className={`col-md-4 col-12 ${styles.steps}`}>
          <WhileInViewAnimation
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: "easeInOut",
            }}
            innerHtml={
              <div className="d-flex align-items-center justify-content-start justify-content-md-center">
                <Image
                  src={userTick}
                  alt="kyc image"
                  className={`me-3 img-fluid ${styles.action_image_user_tick}`}
                />
                <Image
                  src={numberTwo}
                  alt="step one image"
                  className={`me-3 ${styles.steps_image}`}
                />
                <div>
                  <div className={styles.three_steps_text}>
                    Complete KYC Process
                  </div>
                </div>
              </div>
            }
          />
        </div>

        <div className={`col-md-4 col-12 ${styles.steps}`}>
          <WhileInViewAnimation
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: "easeInOut",
            }}
            innerHtml={
              <div className="d-flex align-items-center justify-content-start justify-content-md-center">
                <Image
                  src={stack}
                  alt="get started image"
                  className={`me-3 img-fluid ${styles.action_image_stack}`}
                />
                <Image
                  src={numberThree}
                  alt="step one image"
                  className={`me-3 ${styles.steps_image}`}
                />
                <div>
                  <div className={styles.three_steps_text}>Get Started</div>
                </div>
              </div>
            }
          />
        </div>

        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className={styles.email_box}>
            <div className="w-50 d-flex align-items-center">
              <input type="text" placeholder="Enter your work email"></input>
            </div>

            <div>
              <PrimaryButton title="Get Started Now" theme="theme-blue" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.third_row} row color-white`}>
        <PolygonSection />
        <DashBoardAnimation />
        <div className={`col-12  ${styles.descrption_container}`}>
          <TextAnimation
            innerHtml={
              <>
                <div>
                  <Heading
                    title="Solutions for businesses to"
                    size="h2"
                    weight="3"
                  />
                </div>
                <div>
                  <Heading
                    title="streamline their cash flow and optimize their workflow"
                    size="h2"
                    weight="7"
                  />
                </div>
              </>
            }
          />
        </div>
      </div>
      <div className={`${styles.fourth_row} bg-white row`}>
        <div
          className={`col-12 col-md-6 d-flex flex-column justify-content-start ${styles.title}`}
        >
          <div className="ps-3">
            <Heading title="Accelerate" color="black" size="h1" weight="6" />
            <div>
              <Heading
                title={`business${space}`}
                color="equity-blue"
                size="h1"
                weight="6"
              />
              <Heading
                title="growth"
                color="equity-blue"
                size="h1"
                weight="6"
              />
            </div>
            <div>
              <Heading
                title={`like${space}`}
                color="black"
                size="h1"
                weight="6"
              />
              <Heading
                title="never before!"
                color="black"
                size="h1"
                weight="6"
              />
            </div>
          </div>
          <div className="d-flex flex-column my-3 ps-md-3 mt-5">
            <div className="row d-flex my-4">
              <div className="col-6 d-flex">
                <Image
                  src={automateIcon}
                  alt="automate icon"
                  className={`me-4 ${styles.icons}`}
                />
                <div className="d-flex flex-column">
                  <Heading
                    title="Smart"
                    color="equity-blue"
                    size="h6"
                    weight="6"
                  />
                  <Heading
                    title="Automation Tools"
                    color="equity-blue"
                    size="h6"
                    weight="6"
                  />
                </div>
              </div>
              <div className="col-6 d-flex">
                <Image
                  src={twoBoxIcon}
                  alt="real time data icon"
                  className={`me-4 ${styles.icons}`}
                />
                <div className="d-flex flex-column">
                  <Heading
                    title="Real-Time Data"
                    color="equity-blue"
                    size="h6"
                    weight="6"
                  />
                  <Heading
                    title="& Insights"
                    color="equity-blue"
                    size="h6"
                    weight="6"
                  />
                </div>
              </div>
            </div>
            <div className="row d-flex my-4">
              <div className="col-6 d-flex">
                <Image
                  src={blueBoxIcon}
                  alt="productivity icon"
                  className={`me-4 ${styles.icons}`}
                />
                <div className="d-flex flex-column">
                  <Heading
                    title="Optimized Business"
                    color="equity-blue"
                    size="h6"
                    weight="6"
                  />
                  <Heading
                    title="Productivity"
                    color="equity-blue"
                    size="h6"
                    weight="6"
                  />
                </div>
              </div>
              <div className="col-6 d-flex">
                <Image
                  src={circleRupeeIcon}
                  alt="automate icon"
                  className={`me-4 ${styles.icons}`}
                />
                <div className="d-flex flex-column">
                  <Heading
                    title="Exceptional"
                    color="equity-blue"
                    size="h6"
                    weight="6"
                  />
                  <Heading
                    title="Savings"
                    color="equity-blue"
                    size="h6"
                    weight="6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-md-6 col-12 d-flex position-relative  ${styles.img_container}`}
        >
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"HomePagePhoneAndTab"}
              loop={true}
            />
          </div>
          <Image
            className={styles.green_bg}
            src={greenBg}
            alt="background image"
          />
        </div>
        <div className="col-md-6">
          <div className={`row-padding-x-only mb-3 mt-5`}>
            <div>
              <Heading
                title={`Financial${space}`}
                size="h2"
                color="equity-blue"
                weight="6"
              />
              <Heading
                title={`Partners${space}`}
                size="h2"
                color="black"
                weight="6"
              />
              <span className="mobile-only">
                <br />
              </span>
              <Heading
                title={`and${space}`}
                size="h2"
                color="equity-blue"
                weight="6"
              />
              <span className="desktop-only">
                <br />
              </span>
              <Heading title="Customers" size="h2" color="black" weight="6" />
            </div>

            <Image src={blueBlackLine} alt="underline image" />
          </div>
        </div>
        <div className="col-12 row-padding-x-only">
          <BankSection />
        </div>
      </div>
      <div className={`${styles.fifth_row} row row-padding`}>
        <div className={`col-md-6 col-12 d-flex mb-5 order-2 order-md-1`}>
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"HomePagePayables"}
              loop={true}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-5 order-1 order-md-2">
          <ExploreCard
            title="Payables"
            description="A centralized online platform to manage all outgoing business expenses. Record and track all the transactions along with timely reminders to avoid delays in business payments"
            theme="green"
            link="/payables"
          />
        </div>
        <div className="col-md-6 col-12 mt-5  order-3 order-md-3 pe-5">
          <ExploreCard
            title="Receivables"
            description="An intelligent automation tool to empower your business by removing manual and time-consuming follow-ups. It helps create better collection strategies"
            theme="green"
            link="/receivables"
          />
        </div>
        <div className={`col-md-6 col-12 d-flex mt-5 order-4 order-md-4 ps-5`}>
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"HomePageRecieveable"}
              loop={true}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.sixth_row} bg-white row d-flex row-padding-bottom-none`}
      >
        <Image
          className={styles.left_gradient}
          src={leftBlueGradient}
          alt="gradient image"
        />
        <div className="col-md-6 col-12 d-flex mb-5 order-2 order-md-1">
          <div className={styles.lottie_container}>
            <LottieDynamicLoadComponent
              animationName={"HomePageExpenseManagement"}
              loop={true}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-5 order-1 order-md-2">
          <ExploreCard
            title="Expense Management"
            description="A platform to gain complete control over business spending and expenses. Analyze data to create efficient budgets, optimize expenses, and scale your business"
            theme="blue"
            link="/ofex"
          />
        </div>
      </div>
      <div className={`${styles.seventh_row} bg-white row d-flex row-padding`}>
        <div
          className={`d-flex col-12 flex-column flex-md-row align-items-center ${styles.card}`}
        >
          <div className="d-flex flex-column-reverse flex-md-row">
            <div className={`d-flex flex-column ${styles.card_container}`}>
              <Heading
                title="Switch to better"
                color="electric-green"
                size="h2"
                weight="5"
              />
              <Heading
                title="approval flows"
                color="white"
                size="h2"
                weight="6"
              />
              <div className="mt-2">
                <Heading
                  title="Adopt an approval matrix that’s best for your business at all levels. Establish transparency in the approval processes and increase efficiency with no delays"
                  color="white"
                  size="h5"
                  weight="4"
                />
              </div>

              <div className="mt-4">
                <PrimaryButton
                  title="Get a Demo"
                  url={loginUrl}
                  theme="theme-green"
                />
              </div>
            </div>
            <div className={styles.img_container}>
              <Image
                src={teamImg}
                alt="office team image"
                className={`${styles.img_container} img-fluid`}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.eigth_row}row d-flex d-flex bg-white row-padding`}
      >
        <div className="d-flex flex-column justify-content-center align-items-center w-100">
          <div>
            <Heading
              title="Discover full control"
              color="black"
              size="h1"
              weight="7"
            />
          </div>
          <div>
            <Heading
              title="Discover freedom"
              color="equity-blue"
              size="h1"
              weight="7"
            />
          </div>
          <div className="mt-2 text-center px-4 px-m-0">
            <Heading
              title="Leverage the power of purpose-based cards with smart controls"
              color="equity-blue"
              size="h4"
              weight="5"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.ninth_row} row bg-white`}>
        <div
          className={`col-md-6 col-12 row-padding-x-only d-flex d-flex justify-content-center order-2 order-md-1 ${styles.section_padding}`}
        >
          <div className={styles.left_image_container}>
            <div className={styles.overlay_image}>
              <LottieDynamicLoadComponent
                animationName={"HomePageCorporateCard"}
                loop={true}
              />
            </div>

            <Image
              src={rightCardGradient}
              alt="gradients"
              className={styles.background_image}
            />
          </div>
        </div>
        <div
          className={`col-md-6 col-12 row-padding-bottom-none order-1 order-md-2`}
        >
          <ExploreCard
            title="Corporate Cards"
            description="Issue cards for different business needs and manage them on a single platform with smart controls. Enable or disable across spend categories as and when required"
            theme="blue"
            link="/slash"
          />
        </div>
        <div className="col-md-6 col-12 row-padding-x-only order-3 order-md-3">
          <ExploreCard
            title="DIY Card Module"
            description="Generate purpose-made company cards and empower departments and employees to use them while setting usage limits and tracking for better spend control"
            theme="blue"
            link="/"
          />
        </div>
        <div
          className={`col-md-6 col-12 mb-5 mb-m-0 row-padding-x-only d-flex d-flex justify-content-center order-4 order-md-4`}
        >
          <div className={styles.right_image_container}>
            <div className={styles.lottie_container}>
              <div className={styles.overlay_image}>
                <LottieDynamicLoadComponent
                  animationName={"HomePageDiyCard"}
                  loop={true}
                />
              </div>
            </div>

            <Image
              src={leftCardGradient}
              alt="gradients"
              className={styles.background_image}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.tenth_row} row bg-white row-padding-bottom-none `}
      >
        <LoyaltyLoungeSection />
      </div>

      <div
        className={`${styles.eleventh_row} row row-padding d-flex justify-content-center align-items-center
       text-center color-white bg-indi-volt`}
      >
        <div className={`col-12 mb-5`}>
          <div>
            <Heading
              title="3 Easy Steps to"
              color="white"
              size="h2"
              weight="6"
            />
          </div>
          <div>
            <Heading
              title="Get Started with EnKash"
              color="white"
              size="h2"
              weight="3"
            />
          </div>
        </div>
        <div
          className={`col-md-4 col-12 d-flex align-items-center justify-content-start justify-content-md-center ${styles.steps}`}
        >
          <Image
            src={userPlus}
            alt="signup image"
            className={`me-3 ${styles.action_image_user_plus}`}
          />
          <Image
            src={numberOne}
            alt="step one image"
            className={`me-3 ${styles.steps_image}`}
          />
          <div>
            <Heading title="Sign Up" size="h5" />
          </div>
        </div>
        <div
          className={`col-md-4 col-12 d-flex align-items-center justify-content-start justify-content-md-center ${styles.steps}`}
        >
          <Image
            src={userTick}
            alt="kyc image"
            className={`me-3 ${styles.action_image_user_tick}`}
          />
          <Image
            src={numberTwo}
            alt="step one image"
            className={`me-3 ${styles.steps_image}`}
          />
          <div>
            <Heading title="Complete KYC Process" size="h5" />
          </div>
        </div>
        <div
          className={`col-md-4 col-12 d-flex align-items-center justify-content-start justify-content-md-center ${styles.steps}`}
        >
          <Image
            src={stack}
            alt="get started image"
            className={`me-3 ${styles.action_image_stack}`}
          />
          <Image
            src={numberThree}
            alt="step one image"
            className={`me-3 ${styles.steps_image}`}
          />
          <div>
            <Heading title="Get Started" size="h5" />
          </div>
        </div>
      </div>
      <div
        className={`${styles.twelfth_row} row color-white bg-white row-padding`}
      >
        <div className={`col-12 d-flex flex-md-row mt-3 scroll_container`}>
          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="Optimize Spending"
              description="Empower your business with a centralized spend management platform & save countless working hours across payables, expenses, collections, and accounting"
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="Access Powerful Tools"
              description="Use modern and powerful tools to generate savings in payments. Process multiple payments with one click. Pace up your collections with our customizable modules and set up predefined follow-ups with payment links"
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="New Age Company Cards"
              description="Access multiple company cards to meet all business needs powered by state-of-the-art card management modules. Issue unlimited virtual or physical cards and use them instantly. Conveniently manage all your cards and spend on the go"
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              titleHtml={
                <div className="d-flex flex-column">
                  <Heading
                    title="Do It"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                  <Heading
                    title="Yourself"
                    color="rainy-blue"
                    size="h2"
                    weight="6"
                  />
                </div>
              }
              description="Manage all your finances in one place. Get customized workflows across unlimited users with 99+ combinations of approval matrices"
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="Credit On Demand"
              description="Get high credit for your enterprise with specially designed cards for businesses. Enjoy quick processing with digital KYC & collateral-free access"
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="Transparency Into Spends"
              description="Zoom in to as many details as you want across functions, levels, and teams—a single view to see all the spends done across the organization. Get real-time transaction records so you can have an updated picture any time of the day or night"
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.thirteenth_row} row row-padding-x-only bg-white`}
      >
        <div
          className={`col-md-6 col-12 d-flex justify-content-center  mt-3 order-2 order-md-1 ${styles.blue_grad_bg}`}
        >
          <div className={styles.lottie_container}>
            <Image src={integration} alt="enkash phone integration image" />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex flex-column  mt-3 order-1 order-md-2">
          <div className="mt-3">
            <div className="d-flex flex-column">
              <Heading
                title="Seamless"
                color="equity-blue"
                size="h1"
                weight="6"
              />
              <Heading title="Integration" color="black" size="h1" weight="6" />
            </div>
          </div>
          <div className="mt-4 d-flex flex-column">
            <Heading
              title="It readily connects with any accounting or ERP solution like Tally, Quickbooks, and SAP. This helps with continuous reconciliation that is audit-ready with real-time views"
              color="black"
              size="h4"
              weight="4"
            />
          </div>
          <div className="d-flex mt-4">
            <PrimaryButton
              title="Get a Demo"
              isDisabled={false}
              url=""
              theme="theme-blue"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.fourteenth_row} row bg-white row-padding`}>
        <div className="col-12 text-center mb-5">
          <Heading title="Awards & Accolades" color="equity-blue" size="h1" />
        </div>
        <div
          className={`d-flex flex-column flex-md-row justify-content-center text-center ${styles.box}`}
        >
          <div
            className={`d-flex flex-column justify-content-between ${styles.box_item}`}
          >
            <div className="mb-3 mb-m-5 py-2">
              <Heading
                title="Preferred Partner by NPCI"
                color="black"
                size="h6"
              />
            </div>
            <div>
              <Image src={inc42} alt="inc42 logo" className="img-fluid" />
            </div>
          </div>
          <div
            className={`d-flex flex-column bg-black justify-content-between ${styles.box_item}`}
          >
            <div className="mb-5 py-2">
              <Heading
                title="Best Platform for SME Financial Growth at the 4th Annual BFSI Excellence Award"
                color="electric-green"
                size="h6"
              />
            </div>
            <div>
              <Image src={nasscom} alt="nasscom logo" className="img-fluid" />
            </div>
          </div>
          <div
            className={`d-flex flex-column justify-content-betweens ${styles.box_item}`}
          >
            <div className="mb-3 mb-m-5 py-2">
              <Heading
                title="Fintech Festival India Award"
                color="black"
                size="h6"
              />
            </div>
            <div>
              <Image
                src={paymentAndCardSummit}
                alt="payment and card summit logo"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.fifthteen_row} row color-white`}>
        <div className={`${styles.title} col-12 mb-md-5 text-center`}>
          <Heading
            title={`Trusted by${space}`}
            color="white"
            size="h1"
            weight="6"
          />
          <Heading
            title={`1000+${space}`}
            color="electric-green"
            size="h1"
            weight="6"
          />
          <Heading title="companies." color="white" size="h1" weight="6" />
        </div>
        <div
          className={`col-md-6 col-12 d-flex flex-column ${styles.testimonials_section}`}
        >
          <div className="mb-3">
            <Heading title="NTech Media" color="white" size="h4" weight="6" />
          </div>
          <div className="mb-md-5">
            <Heading
              title="One of the key benefits of Olympus was gaining real-time visibility of our Daily Sales Outstanding (DSOs), which became an interactive feature. This real-time insight into our receivables greatly improved our decision-making capabilities. We have unlocked a new efficiency level in our receivables processes, streamlining operations and ensuring smoother financial management."
              size="h5"
              weight="6"
              color="electric-green"
            />
          </div>
          <div className="d-flex mt-4 align-items-center">
            <div className="me-4">
              <Image src={userImg} alt="enkash user image" />
            </div>
            <div className="d-flex flex-column">
              <Heading title="Deep Sehgal, Founder," size="h4" weight="4" />
              <Heading title="Vianet" size="h4" weight="4" />
            </div>
          </div>
        </div>
        <div className={`col-md-6 col-12 ${styles.image_section}`}>
          <Image
            src={testimonials}
            alt="enkash testimonials"
            className={`img-fluid ${styles.desktop_testimonial}`}
          />
          <Image
            src={mobileTestimonial}
            alt="enkash testimonials"
            className={styles.mobile_testimonial}
          />
        </div>
      </div>
      <div className={`row bg-white ${styles.sixteenth_row}`}>
        <ContactUsCard
          title="Ready to upgrade with our new-age business solutions?"
          description="Explore all these products on the same platform and empower your business and employees with efficient spend management, transparency, and control across all departments."
        />
      </div>
    </div>
  );
};

export default home;
