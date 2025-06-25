import Image from "next/image"
import {
  hamnburgerIcon,
  enkashBlueLogo,
  crossMenu,
  callIcon,
} from ".."
import styles from "./mobile-header.module.scss"
import Link from "next/link"


interface HamburgerProps {
  currentStep: number
  setCurrentStep: (step: number) => void
}

const Hamburger = ({ currentStep, setCurrentStep }: HamburgerProps) => {
  const resetState = () => {
    setCurrentStep(0)
  }

  return (
    <>
      <div
        className={`d-flex justify-content-between ${styles.main_padding} ${
          currentStep === 0 ? "d-flex" : "d-none"
        }`}
      >
        <div className={`${styles.mobile_navbar}`}>
          <Link href={"/"}>
            <Image
              src={enkashBlueLogo}
              alt="Enkash White logo"
              className={styles.enkash_logo}
            />
          </Link>
          <div className="d-flex gap-2">
            <div className={`${styles.mobile_right_icon}`}>
              <Image
                src={callIcon}
                alt="hamburger menu icon"
                onClick={() => {
                  setCurrentStep(1)
                }}
              />
            </div>
            <div className={`${styles.mobile_right_icon}`}>
              <Image
                src={hamnburgerIcon}
                alt="hamburger menu icon"
                onClick={() => {
                  setCurrentStep(1)
                }}
              />
            </div>
          </div>
        </div>
        {/* <PrimaryButton
          title="Log In"
          theme="blue"
          url="https://home.enkash.com/login"
        /> */}
      </div>

      <div
        className={`p-3 bg-white  rounded-top ${
          currentStep !== 0 ? "d-flex" : "d-none"
        }`}
      >
        <div className="d-flex justify-content-between p-3 w-100">
          <div className="d-flex align-items-center  w-100">
            <Link href={"/"}>
              <Image
                src={enkashBlueLogo}
                alt="Enkash Blue logo"
                width={100}
                className={`${styles.enkash_logo} `}
              />
            </Link>
          </div>
          <div>
            <Image src={crossMenu} alt="Close menu icon" onClick={resetState} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hamburger
