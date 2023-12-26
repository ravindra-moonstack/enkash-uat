import Image from "next/image";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import { enkashWhiteLogo, hamnburgerIcon, enkashBlueLogo, crossMenu } from "..";
import styles from "./mobile-header.module.scss";
import Link from "next/link";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";

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
        className={`d-flex justify-content-between ${styles.main_padding} ${
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
          <Link href={"/"}>
            <Image
              src={enkashWhiteLogo}
              alt="Enkash White logo"
              className={styles.enkash_logo}
            />
          </Link>
        </div>
        <PrimaryButton
          title="Log In"
          theme="blue"
          url="https://home.enkash.com/login"
        />
      </div>

      <div
        className={`p-3 bg-white ${currentStep !== 0 ? "d-flex" : "d-none"}`}
      >
        <div className="row p-3 w-full">
          <div className="col-3">
            <Image src={crossMenu} alt="Close menu icon" onClick={resetState} />
          </div>
          <div className="col-9 d-flex align-items-center">
            <Link href={"/"}>
              <Image
                src={enkashBlueLogo}
                alt="Enkash Blue logo"
                width={100}
                className={`${styles.enkash_logo} ps-4`}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
