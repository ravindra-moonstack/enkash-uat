"use client"

import Image from "next/image"
import styles from "./mobile-header.module.scss"
import { arrowDown } from ".."
import navBarTopTtitle from "@/components/header/data/nav-bar"
import { Fragment, useEffect, useState } from "react"
import Hamburger from "./hamburger"
import motherProducts from "@/components/header/data/mother-products"
import resources from "@/components/header/data/resources"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import SubProductListView from "./sub-product-list-view"

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
          <SubProductListView
            products={
              selectedItemIndex === 0
                ? motherProducts[0].subProducts
                : selectedItemIndex === 1
                ? motherProducts[1].payableProducts
                : selectedItemIndex === 2
                ? resources
                : []
            }
            setSelectedItemIndex={selectedItemIndex}
            setCurrentStep={setCurrentStep}
            signupUrl={signupUrl}
          />
        )}
      </div>
    </div>
  )
}

export default MobileHeader
