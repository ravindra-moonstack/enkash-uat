"use client";

import styles from "@/app/page.module.scss";
import { useState } from "react";
import LoungeAnimationSection from "./lounge-animation";
import Heading from "../heading/heading";
import { space } from "@/constant/common";
import PrimaryButton from "../buttons/primary-button/primary-button";

const LoyaltyLoungeSection = () => {
  const [activeAnimation, setActiveAnimation] = useState("LoyaltyOne");

  const loyaltyTexts: any = {
    LoyaltyOne:
      "400+ brand vouchers across multiple categories. These gift vouchers are the best way to encourage employees during R&R programs",
    LoyaltyTwo:
      "Establish a culture of employee engagement and retention with these rewards",
    LoyaltyThree:
      "Boost channel partner engagement, loyalty, and revenue with these incentives",
    LoyaltyFour:
      "Acknowledge your valued employees with these easy-to-access and use gift cards",
    LoyaltyFive:
      "Explore exclusive offers and discounts on various partnered subscriptions from popular services ",
  };

  return (
    <>
      <div className="col-12 d-flex justify-content-center">
        <div className="pb-md-5 pb-3">
          <Heading title={`Loyalty${space}`} color="black" size="h1" />
          <Heading title="Lounge" color="equity-blue" size="h1" />
        </div>
      </div>
      <div className="col-md-6 col-12 d-flex flex-column mt-3">
        <div className="d-flex justify-content-start">
          <button
            className={`${styles.button} ${
              activeAnimation !== "LoyaltyOne" ? styles.disabled : ""
            }`}
            disabled={activeAnimation !== "LoyaltyOne" ? false : true}
            onClick={() => setActiveAnimation("LoyaltyOne")}
          >
            Vouchers
          </button>
          <button
            className={`${styles.button} ${
              activeAnimation !== "LoyaltyTwo" ? styles.disabled : ""
            }`}
            disabled={activeAnimation !== "LoyaltyTwo" ? false : true}
            onClick={() => setActiveAnimation("LoyaltyTwo")}
          >
            Rewards
          </button>
          <button
            className={`${styles.button} ${
              activeAnimation !== "LoyaltyThree" ? styles.disabled : ""
            }`}
            disabled={activeAnimation !== "LoyaltyThree" ? false : true}
            onClick={() => setActiveAnimation("LoyaltyThree")}
          >
            Incentive
          </button>
        </div>
        <div className="d-flex justify-content-start mt-3">
          <button
            className={`${styles.button} ${
              activeAnimation !== "LoyaltyFour" ? styles.disabled : ""
            }`}
            disabled={activeAnimation !== "LoyaltyFour" ? false : true}
            onClick={() => setActiveAnimation("LoyaltyFour")}
          >
            Gift Cards
          </button>
          <button
            className={`${styles.button} ${
              activeAnimation !== "LoyaltyFive" ? styles.disabled : ""
            }`}
            disabled={activeAnimation !== "LoyaltyFive" ? false : true}
            onClick={() => setActiveAnimation("LoyaltyFive")}
          >
            Offers
          </button>
        </div>
        <div className="d-flex mt-3 text-md-start mt-4">
          <Heading
            title={loyaltyTexts[activeAnimation]}
            color="black"
            size="h4"
            weight="4"
          />
        </div>
        <div className="d-flex mt-4 justify-content-center justify-content-md-start">
          <PrimaryButton
            title="Get a Demo"
            isDisabled={false}
            url=""
            theme="theme-blue"
          />
        </div>
      </div>
      <div className="col-md-6 col-12 d-flex justify-content-center">
        <div className={styles.lottie_container}>
          <LoungeAnimationSection animationName={activeAnimation} />
        </div>
      </div>
    </>
  );
};

export default LoyaltyLoungeSection;
