// External imports
import Image from "next/image";
import { Fragment, useState } from "react";

// Component imports
import PrimaryButton from "@/components/buttons/primary-button/primary-button";

// Constant imports
import {
  enkashWhiteLogo,
  hamnburgerIcon,
  enkashBlueLogo,
  crossMenu,
  forwardArrowBlue,
  productModalEmptyStateImg,
} from "..";
import utmSources from "@/constant/utm-source";
import navBarTopTtitle from "@/constant/nav-bar";
import motherProducts from "@/constant/products/mother-products";
import solutions from "@/constant/solutions";
import resources from "@/constant/resources";
import styles from "./mobile-header.module.scss";

interface HamburgerProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const Hamburger = ({ currentStep, setCurrentStep }: HamburgerProps) => {
  const resetState = () => {
    setCurrentStep(0);
  };

  return (
    <>
      <div
        className={`d-flex justify-content-between p-3 ${
          currentStep === 0 ? "d-flex" : "d-none"
        }`}
      >
        <div>
          <Image
            src={hamnburgerIcon}
            alt="hamburger menu icon"
            onClick={() => {
              setCurrentStep(1);
              console.log("Opening ProductListView");
            }}
          />
          <Image
            src={enkashWhiteLogo}
            alt="Enkash White logo"
            width={100}
            className="ps-4"
          />
        </div>
        <PrimaryButton title="Sign Up" url={"singupUrl"} theme="theme-blue" />
      </div>

      <div
        className={`d-flex justify-content-between p-3 bg-white ${
          currentStep !== 0 ? "d-flex" : "d-none"
        }`}
      >
        <div className="d-flex p-3">
          <Image src={crossMenu} alt="Close menu icon" onClick={resetState} />
          <Image
            src={enkashBlueLogo}
            alt="Enkash Blue logo"
            width={100}
            className="ps-4"
          />
        </div>
      </div>
    </>
  );
};

export default Hamburger;
