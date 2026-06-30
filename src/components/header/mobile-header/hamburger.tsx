import Image from "next/image"
import Link from "next/link"

import { hamnburgerIcon, enkashBlueLogo, crossMenu, callIcon } from ".."
import styles from "./mobile-header.module.scss"
import React from "react"

interface HamburgerProps {
  currentStep: number
  setCurrentStep: (step: number) => void
}

const Hamburger = ({
  currentStep,
  setCurrentStep,
}: HamburgerProps): React.JSX.Element => {
  //

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
              alt="Enkash"
              className={styles.enkash_logo}
              priority={true}
            />
          </Link>
          <div className="d-flex gap-2">
            <div title="Support" className={`${styles.mobile_right_icon}`}>
              <Link href="tel:8530490475">
                <Image src={callIcon} alt="Call Support" />
              </Link>
            </div>
            <div title="Menu" className={`${styles.mobile_right_icon}`}>
              <Image
                src={hamnburgerIcon}
                alt="Open Menu"
                onClick={() => {
                  setCurrentStep(1)
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={` bg-white  rounded-top ${styles.mobile_navbar_top} ${
          currentStep !== 0 ? "d-flex" : "d-none"
        }`}
      >
        <div className="d-flex justify-content-between  w-100">
          <div className="d-flex align-items-center  w-100">
            <Link href={"/"}>
              <Image
                src={enkashBlueLogo}
                alt="Enkash"
                width={100}
                className={`${styles.enkash_logo} `}
                priority={true}
              />
            </Link>
          </div>
          <div>
            <Image
              src={crossMenu}
              alt="Close Menu"
              onClick={resetState}
              width={20}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hamburger
