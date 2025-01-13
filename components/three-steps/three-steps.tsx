import React from "react";
import Image from "next/image";
import Heading from "../heading/heading";
import styles from "./three-steps.module.scss";
import {
  userPlus,
  numberOne,
  userTick,
  numberTwo,
  numberThree,
  stack,
} from ".";

const ThreeSteps = () => {
  return (
    <>
      <div className={styles.home_container}>
        <div className="d-flex align-items-center flex-column text-center">
          <Heading
            title="Say hello to a smarter, faster,"
            color="white"
            size="h2"
            weight="6"
          />
          <Heading
            title=" and secure way to handle transactions"
            color="white"
            size="h2"
            weight="3"
          />
        </div>

        <div className="d-flex justify-content-evenly mt-5 flex-md-row flex-column">
          <div
            className={`d-flex align-items-center justify-content-start justify-content-md-center mb-2 mb-md-0`}
          >
            <Image
              src={userPlus}
              alt="signup image"
              className={`mx-2 ${styles.action_image_user_plus}`}
            />
            {/* <Image
              src={numberOne}
              alt="step one image"
              className={`mx-2 ${styles.steps_image}`}
            /> */}
            <div>
              <Heading title="Transaction Success Rate" size="h6" />
            </div>
          </div>
          <div
            className={`d-flex align-items-center justify-content-start justify-content-md-center mb-2 mb-md-0`}
          >
            <Image
              src={userTick}
              alt="kyc image"
              className={`mx-2 ${styles.action_image_user_tick}`}
            />
            {/* <Image
              src={numberTwo}
              alt="step one image"
              className={`mx-2 ${styles.steps_image}`}
            /> */}
            <div>
              <Heading title="Uptime" size="h6" />
            </div>
          </div>
          <div
            className={`d-flex align-items-center justify-content-start justify-content-md-center mb-2 mb-md-0`}
          >
            <Image
              src={stack}
              alt="get started image"
              className={`mx-2 ${styles.action_image_stack}`}
            />
            {/* <Image
              src={numberThree}
              alt="step one image"
              className={`mx-2 ${styles.steps_image}`}
            /> */}
            <div>
              <Heading title="Payment Options" size="h6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeSteps;
