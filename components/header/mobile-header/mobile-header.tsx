"use client"

import Image from "next/image"
import styles from "./mobile-header.module.scss"
import {
  arrowDown,
} from ".."
import navBarTopTtitle from "@/components/header/data/nav-bar"
import { Fragment, useEffect, useState } from "react"
import ProductListView from "./product-list-view"
import Hamburger from "./hamburger"
import freedomProducts from "@/components/header/data/freedom-products"
import xpenzProducts from "@/components/header/data/ofex-products"
import loyaltyLoungeProducts from "@/components/header/data/loaylty-lounge-products"
import motherProducts from "@/components/header/data/mother-products"
import resources from "@/components/header/data/resources"
import solutions from "../data/solutions"
import ReceivableProducts from "@/components/header/data/receivable-products"
import payableProducts from "../data/payable-products"
import brandVouchersProducts from "../data/brand-voucher-products"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"

const motherProductsList = [
  ReceivableProducts,
  payableProducts,
  freedomProducts,
  xpenzProducts,
  brandVouchersProducts,
  loyaltyLoungeProducts,
]

interface props {
  utmSource?: string
}

const MobileHeader = ({ utmSource }: props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)

  const signupUrl =
    utmSource !== "" ? `/sales/?source=${utmSource}` : "/sales/?source"

  useEffect(() => {
    if (currentStep === 1 || currentStep === 2) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }, [currentStep])

  return (
    <div className={`${styles.mobile_header}`}>
      <div className={`w-100 fixed z-10`}>
        <Hamburger setCurrentStep={setCurrentStep} currentStep={currentStep} />

        {currentStep === 1 && (
          <div className={` fixed z-10 rounded-bottom  ${styles.mobile_modal}`}>
            <div className="list">
              <ul>
                {navBarTopTtitle.map((item: any, index: any) => (
                  <Fragment key={index}>
                    <li
                      key={item.name}
                      className={`py-4 px-4`}
                      onClick={() => {
                        if (index !== 3) {
                          setSelectedItemIndex(index)
                          setCurrentStep(2)
                        }
                      }}
                    >
                      <div className={styles.title}>{item.name}</div>
                      <Image src={arrowDown} alt="arrow down icon" />
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
            <div
              className={`d-flex   justify-content-center ${styles.buttons_container}`}
            >
              <RectangleButton
                title="Talk to Sales"
                theme="blue"
                url={signupUrl}
              />
              {/* <span className="mx-2"></span> */}

              <RectangleButton
                title="Log In"
                theme="outline-blue"
                url={"https://home.enkash.com/login"}
              />
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <ProductListView
            products={
              selectedItemIndex === 0
                ? motherProducts
                : selectedItemIndex === 1
                ? solutions
                : selectedItemIndex === 2
                ? resources
                : []
            }
            childProducts={
              selectedItemIndex === 0
                ? motherProductsList
                : selectedItemIndex === 1
                ? []
                : []
            }
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            signupUrl={signupUrl}
          />
        )}
      </div>
    </div>
  )
}

export default MobileHeader
