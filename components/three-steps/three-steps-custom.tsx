import React from "react";
import Image from "next/image";
import Heading from "../heading/heading";
import styles from "./three-steps.module.scss";
import { stack, userPlus, userTick } from ".";

const ThreeStepsCustom = ({
  steps = [
    { image: userPlus, heading: "Sign Up" },
    { image: userTick, heading: "Complete KYC Process" },
    { image: stack, heading: "Get Started" },
  ],
}) => {
  return (
    <div className={styles.home_container}>
      <div className="d-flex align-items-center flex-column text-center">
        <Heading title="Our Credentials," color="white" size="h2" weight="6" />
        <Heading title="Your Confidence" color="white" size="h2" weight="3" />
      </div>

      <div className="d-flex justify-content-evenly mt-5 flex-md-row flex-column align-items-center">
        {steps.map((step, index) => (
          <div key={index} className={`${styles.custom_step}`}>
            <div className={styles.image_div}>
              <Image
                src={step.image}
                alt={step.heading.toLowerCase() + " image"}
                className={`mx-2 ${styles[`action_image_${index}`]}`}
              />
            </div>
            <div>
              <Heading title={step.heading} size="h6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeStepsCustom;
