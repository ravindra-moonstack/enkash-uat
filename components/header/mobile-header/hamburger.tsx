import Image from "next/image";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import { enkashWhiteLogo, hamnburgerIcon, enkashBlueLogo, crossMenu } from "..";
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
            }}
          />
          <Image
            src={enkashWhiteLogo}
            alt="Enkash White logo"
            className={styles.enkash_logo}
          />
        </div>
        <PrimaryButton title="Sign Up" url={"singupUrl"} theme="theme-blue" />
      </div>

      <div
        className={`p-3 bg-white ${currentStep !== 0 ? "d-flex" : "d-none"}`}
      >
        <div className="row p-3 w-full">
          <div className="col-3">
            <Image src={crossMenu} alt="Close menu icon" onClick={resetState} />
          </div>
          <div className="col-9 d-flex align-items-center">
            <Image
              src={enkashBlueLogo}
              alt="Enkash Blue logo"
              width={100}
              className="ps-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
