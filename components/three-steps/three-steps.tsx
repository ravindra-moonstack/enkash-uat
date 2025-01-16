import React from "react";
import Image from "next/image";
import Heading from "../heading/heading";
import styles from "./three-steps.module.scss";

interface Step {
  icon: any;
  text: string;
}

interface ThreeStepsProps {
  title?: string;
  steps?: Step[];
}

const ThreeSteps: React.FC<ThreeStepsProps> = ({ title, steps }) => {
  if (!title || !steps) return null;

  return (
    <>
      <div className={styles.home_container}>
        <div className="d-flex align-items-center flex-column text-center">
          <Heading title={title} color="white" size="h2" weight="6" />
        </div>

        <div className="d-flex justify-content-evenly mt-5 flex-md-row flex-column">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`d-flex align-items-center justify-content-start justify-content-md-center mb-2 mb-md-0`}
            >
              <Image
                src={step.icon}
                alt={`${step.text} image`}
                className={`mx-2 ${styles.action_image}`}
              />
              <div>
                <Heading title={step.text} size="h6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThreeSteps;
