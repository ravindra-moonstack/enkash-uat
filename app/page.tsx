import styles from "./page.module.scss";
import PrimaryButton from "../components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";
import {
  dashboard,
  numberOne,
  numberThree,
  numberTwo,
  stack,
  userPlus,
  userTick,
} from ".";
import Image from "next/image";

export const metadata = {
  title: "Asia's 1st and Smartest Spend Management Platform | EnKash",
  description:
    "Enkash is now Asia's 1st and Smartest Spend Management Platform that offer services like Account Payable, Accounts Receivable, Expense Management & many more.",
};

const loginUrl = "https://home.enkash.com/login";

const home = () => {
  return (
    <div className={`bg-indi-volt color-white ${styles.home_container}`}>
      <div className="">
        <div
          className={`row text-center color-white ${styles.bg_rainbow} ${styles.first_row}`}
        >
          <span className={`col-12 ${styles.font_heading}`}>A Spend</span>
          <span className={`col-12 mt-4 ${styles.font_heading}`}>
            Management Solution
          </span>
          <span className={`col-12 mt-5 ${styles.font_heading}`}>
            That Does it All
          </span>
          <div className={`col-12 mt-5`}>
            <div>Now streamline buisiness spend and optimize your cashflow</div>
            <div>with real-time data and insights.</div>
          </div>
          <div className="my-5">
            <PrimaryButton title="Get a Demo" url={loginUrl} />
            <span className="mx-2"></span>
            <SecondryButton title="Watch Video" url={loginUrl} />
          </div>
        </div>
        <div className={`row ${styles.second_row}`}>
          <div className={`col-12`}>
            <div className={styles.title}>
              <b>3 Easy Steps to</b> <br />
              Get Started with EnKash
            </div>
            <div className="d-flex justify-content-evenly align-items-center mt-5">
              <div className="d-flex align-items-center">
                <Image src={userPlus} alt="signup image"></Image>
                <Image
                  className="ms-2"
                  src={numberOne}
                  alt="step one image"
                ></Image>
                <div className="ms-2">Sign Up</div>
              </div>
              <div className="d-flex align-items-center">
                <Image src={userTick} alt="signup image"></Image>
                <Image
                  className="ms-2"
                  src={numberTwo}
                  alt="step one image"
                ></Image>
                <div className="ms-2">Complete KYC Process</div>
              </div>
              <div className="d-flex align-items-center">
                <Image src={stack} alt="signup image"></Image>
                <Image
                  className="ms-2"
                  src={numberThree}
                  alt="step one image"
                ></Image>
                <div className="ms-2">Get Started</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.third_row}`}>
          <div
            className={`col-12 d-flex justify-content-center align-items-center`}
          >
            <div className={styles.menu_title}>Manage</div>
            <div className={styles.menu_title}>Track</div>
            <div className={styles.menu_title}>Customize</div>
            <div className={styles.menu_title}>Automate</div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center p-4">
            <Image
              src={dashboard}
              alt="enkash dashboard"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center p-4 text-center">
            <div className={styles.title}>
              Solutions that let you
              <br />
              <b>streamline cashflow and optimize workflow.</b>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default home;
