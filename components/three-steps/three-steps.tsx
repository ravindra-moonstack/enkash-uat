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
        <div className="d-flex align-items-center flex-column">
          <Heading title="3 Easy Steps to" color="white" size="h2" weight="6" />
          <Heading
            title="Get Started with EnKash"
            color="white"
            size="h2"
            weight="3"
          />
        </div>

        <div className="d-flex justify-content-evenly mt-5">
          <div
            className={`d-flex align-items-center justify-content-start justify-content-md-center `}
          >
            <Image
              src={userPlus}
              alt="signup image"
              className={`img-fluid me-2`}
            />
            <Image src={numberOne} alt="step one image" className="me-2" />
            <div>
              <Heading title="Sign Up" size="h6" />
            </div>
          </div>
          <div
            className={`d-flex align-items-center justify-content-start justify-content-md-center `}
          >
            <Image
              src={userTick}
              alt="kyc image"
              className={`img-fluid me-2`}
            />
            <Image src={numberTwo} alt="step one image" className="me-2" />
            <div>
              <Heading title="Complete KYC Process" size="h6" />
            </div>
          </div>
          <div
            className={`d-flex align-items-center justify-content-start justify-content-md-center`}
          >
            <Image
              src={stack}
              alt="get started image"
              className={`img-fluid me-2`}
            />
            <Image src={numberThree} alt="step one image" className="me-2" />
            <div>
              <Heading title="Get Started" size="h6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeSteps;
