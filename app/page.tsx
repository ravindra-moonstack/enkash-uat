"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import PrimaryButton from "../components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import MenuButton from "@/components/buttons/menu-button/menu-button";
import ExploreCard from "@/components/explore-card/explore-card";
import GetStartedCard from "@/components/get-started-card/get-started-card";
import ContactUsCard from "@/components/contact-us-card/contact-us-card";
import { space } from "@/constant/common";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import Lottie from "lottie-react";

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
  corporateCardsImg,
  loyaltyLoungeMobileImg,
  mobileIntegration,
  inc42,
  paymentAndCardSummit,
  nasscom,
  testimonials,
  userImg,
  axisBankLogo,
  iciciBankLogo,
  rupayLogo,
  sbmLogo,
  visaLogo,
  desktopIphone,
  playButton,
  rainbowOne,
  rainbowTwo,
  rainbowThree,
  polygonOne,
  polygonOneShadow,
  polygonTwo,
  polygonThree,
  blueBlackLine,
  threeDownArrow,
  mobileTestimonial,
  expenseManagementAnimation,
  payablesAnimation,
  recieveableAnimation,
  diyCardAnimation,
  dashboardUi,
  rainbowOneShadow,
  rainbowThreeShadow,
  leftBlueGradient,
  leftCardGradient,
  rightCardGradient,
  dashboardUiAutomateAnimation,
  dashboardUiManageAnimation,
  dashboardUiTrackAnimation,
  dashboardUiOptimizeAnimation,
  dashboardAnimation,
  expenseAnimation,
} from ".";
import Heading from "@/components/heading/heading";
import { useEffect, useRef, useState } from "react";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import WebHeader from "@/components/header/web-header";

const loginUrl = "https://home.enkash.com/login";

const home = () => {
  //Framer motion (scroll intact animations)
  const loungeImgRef = useRef<HTMLDivElement>(null);
  const polygonOneRef = useRef<HTMLImageElement>(null);
  const polygonTwoRef = useRef<HTMLImageElement>(null);
  const polygonThreeRef = useRef<HTMLImageElement>(null);

  const loungeScrollData = useScroll({
    target: loungeImgRef,
    offset: ["0.5 1.5", "1 1"],
  }) as { scrollYProgress: MotionValue<number> };

  const polygonOneScrollData = useScroll({
    target: polygonOneRef,
    offset: ["0.2 1.2", "0.5 1.2"],
  }) as { scrollYProgress: MotionValue<number> };

  const polygonTwoScrollData = useScroll({
    target: polygonTwoRef,
    offset: ["0.2 1.3", "0.7 1.3"],
  }) as { scrollYProgress: MotionValue<number> };

  const polygonThreeScrollData = useScroll({
    target: polygonThreeRef,
    offset: ["0.2 1.4", "1.1 1.4"],
  }) as { scrollYProgress: MotionValue<number> };

  const loungeTranslateY = useTransform(
    loungeScrollData.scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );
  const polygonOneTranslateY = useTransform(
    polygonOneScrollData.scrollYProgress,
    [0, 1],
    ["50%", "0%"]
  );

  const polygonTwoTranslateY = useTransform(
    polygonTwoScrollData.scrollYProgress,
    [0, 1],
    ["100", "0%"]
  );
  const polygonThreeTranslateY = useTransform(
    polygonThreeScrollData.scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  //Below code is animation which are custom built and any lib is not used
  //Stack animation custom built
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeAnimation, setActiveAnimation] = useState("manage");

  let largeScreen;
  let posTopRainbowOneImg, posTopRainbowTwoImg, posTopRainbowThreeImg;
  let maxScrollForFullAdjustment;
  let maxAdjustment;

  if (typeof window !== "undefined") {
    largeScreen = window.matchMedia("(min-width:786px)");

    if (largeScreen.matches) {
      posTopRainbowOneImg = 180;
      posTopRainbowTwoImg = 290;
      posTopRainbowThreeImg = 400;
      maxScrollForFullAdjustment = 400;
      maxAdjustment = 45;
    } else {
      posTopRainbowOneImg = 130;
      posTopRainbowTwoImg = 180;
      posTopRainbowThreeImg = 230;
      maxScrollForFullAdjustment = 300;
      maxAdjustment = 15;
    }

    const segmentLength = maxScrollForFullAdjustment / 3;

    const computeAdjustment = (
      currentScroll: number,
      segmentLength: number,
      maxAdj: number
    ) => {
      return Math.min((currentScroll / segmentLength) * maxAdj, maxAdj);
    };

    if (scrollY < segmentLength) {
      posTopRainbowOneImg -= computeAdjustment(
        scrollY,
        segmentLength,
        maxAdjustment
      );
    } else if (scrollY < segmentLength * 2) {
      posTopRainbowOneImg -= maxAdjustment;
      posTopRainbowTwoImg -= computeAdjustment(
        scrollY - segmentLength,
        segmentLength,
        maxAdjustment
      );
    } else {
      posTopRainbowOneImg -= maxAdjustment;
      posTopRainbowTwoImg -= maxAdjustment;
      posTopRainbowThreeImg -= computeAdjustment(
        scrollY - 2 * segmentLength,
        segmentLength,
        maxAdjustment
      );
    }
  }

  //Start of HTML code

  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="desktop-header">{<WebHeader />}</div>

      <div
        className={`${styles.first_row} row  text-center color-white bg-indi-volt`}
      >
        <span className={`col-12  ${styles.first_text}`}>
          <Heading title="A Spend" size="h0" />
        </span>
        <Image
          src={rainbowOne}
          alt="background image"
          className={styles.rainbow_one}
          style={{ top: `${posTopRainbowOneImg}px` }}
        />
        <span className={`col-12  ${styles.second_text}`}>
          <Heading title="Management Solution" size="h0" />
        </span>

        <Image
          src={rainbowTwo}
          alt="background image 2"
          className={styles.rainbow_two}
          style={{ top: `${posTopRainbowTwoImg}px` }}
        />

        <span className={`col-12  ${styles.third_text}`}>
          <Heading title="That Does it All" size="h0" />
        </span>

        <Image
          src={rainbowThree}
          alt="background image 3"
          className={styles.rainbow_three}
          style={{ top: `${posTopRainbowThreeImg}px` }}
        />

        <div className={`col-12 ${styles.description_text}`}>
          <div>
            <Heading
              title="Now streamline buisiness spend and optimize your cashflow"
              size="h4"
              weight="4"
            />
          </div>
          <div>
            <Heading
              title="with real-time data and insights."
              size="h4"
              weight="4"
            />
          </div>
        </div>
        <div className={`col-12 ${styles.description_text_mobile}`}>
          <div>
            <Heading
              title="Now streamline buisiness spend and optimize your cashflow"
              size="h3"
              weight="4"
            />
          </div>
          <div>
            <Heading
              title="with real-time data and insights."
              size="h3"
              weight="4"
            />
          </div>
        </div>
        <div className={`col-12 ${styles.button_container}`}>
          <PrimaryButton title="Get a Demo" url={loginUrl} theme="theme-blue" />
          <span className="mx-2"></span>
          <SecondryButton
            title="Watch Video"
            actionImage={playButton}
            url={loginUrl}
            iconSize={25}
          />
        </div>
        <div className={`col-12 ${styles.down_arrow}`}>
          <Image src={threeDownArrow} alt="arrow icon" />
        </div>
      </div>

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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className={`col-md-4 col-12 d-flex align-items-center justify-content-start justify-content-md-center ${styles.steps}`}
        >
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
            <Heading title="Sign Up" size="h5" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: "easeInOut",
          }}
          className={`col-md-4 col-12 d-flex align-items-center justify-content-start justify-content-md-center ${styles.steps}`}
        >
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
            <Heading title="Complete KYC Process" size="h5" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 2.2 }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease: "easeInOut",
          }}
          className={`col-md-4 col-12 d-flex align-items-center justify-content-start justify-content-md-center ${styles.steps}`}
        >
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
            <Heading title="Get Started" size="h5" />
          </div>
        </motion.div>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className={styles.email_box}>
            <div className="w-50 d-flex align-items-center">
              <input type="text" placeholder="Enter your work email"></input>
            </div>

            <div>
              {/* <motion.div
                initial={{ translateX: "-150px" }}
                whileInView={{ translateX: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
              > */}
              <PrimaryButton title="Get Started Now" theme="theme-blue" />
              {/* </motion.div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.third_row} row color-white`}>
        <motion.img
          ref={polygonOneRef}
          style={{ y: polygonOneTranslateY }}
          src={polygonOne.src}
          alt="background image"
          className={styles.polygon_one}
        />
        <motion.img
          ref={polygonOneRef}
          style={{ y: polygonOneTranslateY }}
          src={polygonOneShadow.src}
          alt="background image"
          className={styles.polygon_one_shadow}
        />
        <motion.img
          ref={polygonTwoRef}
          style={{ y: polygonTwoTranslateY }}
          src={polygonTwo.src}
          alt="background image"
          className={styles.polygon_two}
        />
        <motion.img
          ref={polygonThreeRef}
          style={{ y: polygonThreeTranslateY }}
          src={polygonThree.src}
          alt="background image"
          className={styles.polygon_three}
        />

        <div className={`col-md-12 col-4  ${styles.action_container}`}>
          <div className="d-flex flex-column flex-md-row justify-content-center w-100">
            <div className="me-2" onClick={() => setActiveAnimation("manage")}>
              <MenuButton
                title="Manage"
                theme={activeAnimation === "manage" ? "dark" : "disabled"}
              />
            </div>
            <div className={styles.space}></div>
            <div className="me-2" onClick={() => setActiveAnimation("track")}>
              <MenuButton
                title="Track"
                theme={activeAnimation === "track" ? "dark" : "disabled"}
              />
            </div>
            <div className={styles.space}></div>
            <div
              className="me-2"
              onClick={() => setActiveAnimation("optimize")}
            >
              <MenuButton
                title="Optimize"
                theme={activeAnimation === "optimize" ? "dark" : "disabled"}
              />
            </div>
            <div className={styles.space}></div>
            <div onClick={() => setActiveAnimation("automate")}>
              <MenuButton
                title="Automate"
                theme={activeAnimation === "automate" ? "dark" : "disabled"}
              />
            </div>
          </div>
        </div>
        <div className={`col-md-12 col-8 ${styles.image_container}`}>
          {activeAnimation === "manage" && (
            <Lottie animationData={dashboardUiManageAnimation} loop={true} />
          )}
          {activeAnimation === "track" && (
            <Lottie animationData={dashboardUiTrackAnimation} loop={true} />
          )}
          {activeAnimation === "optimize" && (
            <Lottie animationData={dashboardUiOptimizeAnimation} loop={true} />
          )}
          {activeAnimation === "automate" && (
            <Lottie animationData={dashboardUiAutomateAnimation} loop={true} />
          )}
        </div>
        <div className={`col-12  ${styles.descrption_container}`}>
          <div>
            <Heading title="Solutions that let you" size="h2" weight="3" />
          </div>
          <div>
            <Heading
              title="streamline cashflow and optimize workflow."
              size="h2"
              weight="7"
            />
          </div>
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
          <div className="d-flex flex-column my-3 ps-3 mt-5">
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
          <Image
            src={desktopIphone}
            alt="enkash dashboard image"
            className={styles.desktop_img}
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
              <Heading title="and" size="h2" color="equity-blue" weight="6" />
            </div>
            <div>
              <Heading title="Customers." size="h2" color="black" weight="6" />
            </div>
            <Image src={blueBlackLine} alt="underline image" />
          </div>
        </div>
        <div className="col-12">
          <div
            className={`${styles.bank_logo} row-padding-x-only mb-3 d-flex align-items-center`}
          >
            <Image
              src={axisBankLogo}
              width={150}
              className="me-5"
              alt="axis bank logo"
            />
            <Image
              width={150}
              src={iciciBankLogo}
              className="me-5"
              alt="axis bank logo"
            />
            <Image
              width={120}
              src={rupayLogo}
              className="me-5"
              alt="axis bank logo"
            />
            <Image
              width={150}
              src={sbmLogo}
              className="me-3"
              alt="axis bank logo"
            />
            <Image
              width={70}
              src={visaLogo}
              className="me-3"
              alt="axis bank logo"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.fifth_row} row row-padding`}>
        <div
          className={`col-md-6 col-12 d-flex mb-5 order-2 order-md-1 ${styles.animation_data_padding}`}
        >
          {/* <Image
            src={payablesImage}
            alt="payables image"
            className="img-fluid"
          /> */}
          <Lottie animationData={payablesAnimation} loop={true} />
        </div>
        <div className="col-md-6 col-12 mb-5 order-1 order-md-2">
          <ExploreCard
            title="Payables"
            description=" Manage all outgoing expenses in one place. Our online platform
              keeps track of all your business expenditures, and gives you
              timely reminders that ensure all necessary payments are paid,
              with no delays."
            theme="green"
          />
        </div>
        <div className="col-md-6 col-12 mt-5  order-3 order-md-3">
          <ExploreCard
            title="Receivables"
            description="EnKash empowers your business by providing intelligent
                automation tools that help you end time-consuming manual
                follow-ups and create better collection strategies."
            theme="green"
          />
        </div>
        <div
          className={`col-md-6 col-12 d-flex mt-5 order-4 order-md-4 ${styles.animation_data_padding}`}
        >
          <Lottie animationData={recieveableAnimation} loop={true} />
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
        <div
          className={`col-md-6 col-12 d-flex mb-5 ${styles.animation_data_padding}`}
        >
          <Lottie animationData={expenseManagementAnimation} loop={true} />
        </div>
        <div className="col-md-6 col-12 mb-5">
          <ExploreCard
            title="Expense Management"
            description="Gain control over your business spends with a complete overview
              of all your expenses. Analyze data to create efficient budgets,
              optimize expenses and scale your business."
            theme="blue"
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
          <div className="mt-2 text-center">
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
          className={`col-md-6 col-12 row-padding-bottom-none d-flex mb-5 d-flex justify-content-center order-2 order-md-1`}
        >
          <div className={styles.left_image_container}>
            <Image
              src={corporateCardsImg}
              width={350}
              alt="payables image"
              className={`img-fluid ${styles.overlay_image}`}
            />
            <Image
              src={rightCardGradient}
              alt="gradients"
              className={styles.background_image}
            />
          </div>
        </div>
        <div className="col-md-6 col-12 mb-5 row-padding-bottom-none order-1 order-md-2">
          <ExploreCard
            title="Corporate Cards"
            description="Issue cards for different purposes, and manage them all on a single platform with smart controls. Enable or disable spend categories as and when required."
            theme="blue"
          />
        </div>
        <div className="col-md-6 col-12 mt-5 row-padding-top-none order-3 order-md-3">
          <ExploreCard
            title="DIY Card Module"
            description="Create purpose-made company cards yourself or empower employees and departments to generate cards, set usage limits, track, manage, and control card spends."
            theme="blue"
          />
        </div>
        <div
          className={`col-md-6 col-12 row-padding-top-none d-flex mt-5 d-flex justify-content-center order-4 order-md-4`}
        >
          {/* <Image
            src={diyCardsModuleImg}
            width={350}
            alt="receivable image"
            className="img-fluid"
          /> */}
          <div className={styles.right_image_container}>
            <Lottie
              className={styles.overlay_image}
              animationData={diyCardAnimation}
              loop={true}
              style={{ width: 350 }}
            />
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
          <div className="d-flex  justify-content-md-start">
            <div className="me-2">
              <MenuButton isDisabled={false} title="Vouchers" theme="light" />
            </div>
            <div className="me-2">
              <MenuButton isDisabled={false} title="Reward" theme="disabled" />
            </div>
            <MenuButton isDisabled={false} title="Incentive" theme="disabled" />
          </div>
          <div className="d-flex mt-3  justify-content-md-start">
            <div className="me-2">
              <MenuButton
                isDisabled={false}
                title="Gift Card"
                theme="disabled"
              />
            </div>
            <MenuButton isDisabled={false} title="Offers" theme="disabled" />
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
          <motion.div
            ref={loungeImgRef}
            style={{
              y: loungeTranslateY,
            }}
          >
            <Image
              src={loyaltyLoungeMobileImg}
              alt="loyalty lounge image"
              width={300}
              className={`img-fluid`}
            />
          </motion.div>
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
        <div
          className={`col-12 d-flex flex-md-row mt-3 ${styles.scroll_container}`}
        >
          <div className={styles.card}>
            <GetStartedCard
              title1="Optimize Spending;"
              title2="save more."
              description="Power your business with a centralized spend management
               platform & save countless working hours."
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              title1="Total Visibility;"
              title2="smarter controls."
              description="Power your business with a centralized spend management
               platform & save countless working hours."
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              title1="Convenient solutions to scale faster."
              title2="to scale faster."
              description="Power your business with a centralized spend management
               platform & save countless working hours."
            />
          </div>

          <div className={styles.card}>
            <GetStartedCard
              title1="Optimize Spending;"
              title2="save more."
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
          <Image
            src={mobileIntegration}
            alt="mobile integrations"
            className="img-fluid"
            height={450}
          />

          {/* <Lottie animationData={expenseAnimation} loop={true} /> */}
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
              <div className="mb-5 py-2">
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
              <div className="mb-5 py-2">
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
        <ContactUsCard />
      </div>
    </div>
  );
};

export default home;
