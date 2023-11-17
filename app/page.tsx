import { space } from "@/constant/common";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./page.module.scss";
import PrimaryButton from "../components/buttons/primary-button/primary-button";
import MenuButton from "@/components/buttons/menu-button/menu-button";
import ExploreCard from "@/components/explore-card/explore-card";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import Heading from "@/components/heading/heading";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";
import RainbowSection from "@/components/homepage/rainbow";
import BankSection from "@/components/homepage/bank-section";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";
import DashBoardAnimation from "@/components/homepage/dashboard-animation";
import PolygonSection from "@/components/homepage/polygon-section";
import LoungeAnimationSection from "@/components/homepage/lounge-section";
import TextAnimation from "@/components/framer-motion/text-animation";
import WhileInViewAnimation from "@/components/framer-motion/while-in-view-animation";

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
                    title="Solutions that let you"
                    size="h2"
                    weight="3"
                  />
                </div>
                <div>
                  <Heading
                    title="streamline cashflow and optimize workflow."
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
        <div className="col-12 col-md-6 d-flex flex-column justify-content-start row-padding">
          <div className="ps-3">
            <Heading title="Ultimate" color="black" size="h1" weight="6" />
            <div>
              <Heading
                title={`productivity${space}`}
                color="equity-blue"
                size="h1"
                weight="6"
              />
              <Heading title="and" color="black" size="h1" weight="6" />
            </div>
            <div>
              <Heading
                title={`control${space}`}
                color="equity-blue"
                size="h1"
                weight="6"
              />
              <Heading title="Now at" color="black" size="h1" weight="6" />
            </div>
            <div>
              <Heading
                title={`your${space}`}
                color="equity-blue"
                size="h1"
                weight="6"
              />
              <Heading
                title="fingertips."
                color="equity-blue"
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
                    title="Intelligent"
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
                  alt="automate icon"
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
                  alt="automate icon"
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
                    title="Unparalleled"
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
              <Heading title="Customers." size="h2" color="black" weight="6" />
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
            description=" Manage all outgoing expenses in one place. Our online platform
              keeps track of all your business expenditures, and gives you
              timely reminders that ensure all necessary payments are paid,
              with no delays."
            theme="green"
            link="/payables"
          />
        </div>
        <div className="col-md-6 col-12 mt-5  order-3 order-md-3 pe-5">
          <ExploreCard
            title="Receivables"
            description="EnKash empowers your business by providing intelligent
                automation tools that help you end time-consuming manual
                follow-ups and create better collection strategies."
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
            description="Gain control over your business spends with a complete overview
              of all your expenses. Analyze data to create efficient budgets,
              optimize expenses and scale your business."
            theme="blue"
            link="/xpenz"
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
                title="Say yes to better"
                color="electric-green"
                size="h2"
                weight="5"
              />
              <Heading
                title="approval flows."
                color="white"
                size="h2"
                weight="6"
              />
              <div className="mt-2">
                <Heading
                  title="Choose an approval matrix that’s best for your business, down to
                the departmental level. Transparent approval processes increase
                efficiency and nullify delays."
                  color="white"
                  size="h5"
                  weight="4"
                />
              </div>

              <div className="mt-4">
                <PrimaryButton
                  title="Get a Demo"
                  size="medium"
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
              title="Discover full control."
              color="black"
              size="h1"
              weight="7"
            />
          </div>
          <div>
            <Heading
              title="Discover freedom."
              color="equity-blue"
              size="h1"
              weight="7"
            />
          </div>
          <div className="mt-2 text-center px-4 px-m-0">
            <Heading
              title="Leverage the power of purpose-based cards with smart controls."
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
            description="Issue cards for different purposes, and manage them all on a single platform with smart controls. Enable or disable spend categories as and when required."
            theme="blue"
          />
        </div>
        <div className="col-md-6 col-12 row-padding-x-only order-3 order-md-3">
          <ExploreCard
            title="DIY Card Module"
            description="Create purpose-made company cards yourself or empower employees and departments to generate cards, set usage limits, track, manage, and control card spends."
            theme="blue"
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
        <div className="col-12 d-flex justify-content-center">
          <div className="pb-md-5 pb-3">
            <Heading title={`Loyalty${space}`} color="black" size="h1" />
            <Heading title="Lounge" color="equity-blue" size="h1" />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex flex-column mt-3">
          <div className="d-flex justify-content-start">
            <button className={styles.button} disabled={true}>
              Vouchers
            </button>
            <button
              className={`${styles.button} ${styles.disabled}`}
              disabled={true}
            >
              Reward
            </button>
            <button
              className={`${styles.button} ${styles.disabled}`}
              disabled={true}
            >
              Incentive
            </button>
          </div>
          <div className="d-flex justify-content-start mt-3">
            <button
              className={`${styles.button} ${styles.disabled}`}
              disabled={true}
            >
              Gift Card
            </button>
            <button
              className={`${styles.button} ${styles.disabled}`}
              disabled={true}
            >
              Offers
            </button>
          </div>
          <div className="d-flex mt-3 text-md-start">
            <Heading
              title="200+ brand vouchers for corporate gifting. The more you spend, the
              more you’ll earn, and the closer you’ll get to unlocking more and
              more rewards."
              color="black"
              size="h4"
              weight="4"
            />
          </div>
          <div className="d-flex mt-3 justify-content-center justify-content-md-start">
            <PrimaryButton
              title="Get a Demo"
              isDisabled={false}
              url=""
              theme="theme-blue"
              size="medium"
            />
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center mt-5">
          <div className={styles.lottie_container}>
            <LoungeAnimationSection />
          </div>
        </div>
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
              whiteTitle="Optimize Spending;"
              blueTitle="save more."
              description="Power your business with a centralized spend management
               platform & save countless working hours."
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="Total Visibility;"
              blueTitle="smarter controls."
              description="Power your business with a centralized spend management
               platform & save countless working hours."
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="Convenient solutions to scale faster."
              blueTitle="to scale faster."
              description="Power your business with a centralized spend management
               platform & save countless working hours."
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              whiteTitle="Optimize Spending;"
              blueTitle="save more."
              description="Power your business with a centralized spend management
               platform & save countless working hours."
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.thirteenth_row} row row-padding-top-none bg-white`}
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
            <div>
              <Heading
                title="Integrate Seamlessly;"
                color="equity-blue"
                size="h1"
                weight="6"
              />
            </div>
            <Heading
              title="Connect Systems Readily."
              color="black"
              size="h1"
              weight="6"
            />
          </div>
          <div className="mt-2 d-flex flex-column">
            <Heading
              title="Our platform links seamlessly with any accounting, ERP solution you currently use like Tally, Quickbooks, SAP amongst others."
              color="black"
              size="h4"
              weight="4"
            />
            <Heading
              title="Ensure your books are always audit ready and view real-time up-to-the-minute data."
              color="black"
              size="h4"
              weight="4"
            />
          </div>
          <div className="d-flex mt-3">
            <PrimaryButton
              title="Get a Demo"
              isDisabled={false}
              url=""
              theme="theme-blue"
              size="medium"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.fourteenth_row} row bg-white row-padding`}>
        <div className="col-12 text-center mb-5">
          <Heading title="Awards & Accolades" color="equity-blue" size="h1" />
        </div>
        <div className="">
          <div
            className={`d-flex flex-column flex-md-row justify-content-center ${styles.box}`}
          >
            <div
              className={`d-flex flex-column justify-content-between ${styles.box_item}`}
            >
              <div className="mb-3 mb-m-5 py-2">
                <Heading title="Startups to Watch" color="black" size="h5" />
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
                  title="Winner - India Fintech Awards 2020"
                  color="electric-green"
                  size="h5"
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
                  title="Best B2B Solution Provider"
                  color="black"
                  size="h5"
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
      </div>
      <div className={`${styles.fifthteen_row} row color-white`}>
        <div className={`${styles.title} col-12 mb-md-5 text-center d-md-flex d-inline`}>
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
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis, ornare metus nec, feugiat erat."
              size="h3"
              weight="6"
              color="electric-green"
            />
          </div>
          <div className="d-flex mt-4 align-items-center">
            <div className="me-4">
              <Image src={userImg} alt="enkash user image" />
            </div>
            <div className="d-flex flex-column">
              <Heading title="- Manoj Day, CEO," size="h4" weight="4" />
              <Heading title=" NTech Media" size="h4" weight="4" />
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
          title="Seeking further understanding of bill payments online?"
          description="Bill payments refer to those regularly occurring expenses that a business has. These could include utilities like electricity, water, and other regular payments you need to make on time to ensure your business operations continue uninterrupted."
        />
      </div>
    </div>
  );
};

export default home;
