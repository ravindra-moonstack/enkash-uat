"use client"

import Image from "next/image"
import styles from "./mobile-header.module.scss"
import { arrowDown } from ".."
import navBarTopTtitle from "@/components/header/data/nav-bar"
import { Fragment, useEffect, useState } from "react"
import Hamburger from "./hamburger"
import motherProducts from "@/components/header/data/mother-products"
import cardsProducts from "../data/cards-products"
import xpenzProducts from "../data/ofex-products"
import loyaltyLoungeProducts from "../data/loaylty-lounge-products"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import SubProductListView from "./sub-product-list-view"
import resourseProducts from "../data/resources"
import partnershipProducts from "../data/partnership"

interface Props {
  utmSource?: string
}

const MobileHeader = ({ utmSource }: Props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  )
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

  const getSubProductSections = () => {
    switch (selectedItemIndex) {
      case 0:
        return [
          {
            title: "Collect Payments",
            products: motherProducts[0].subProducts || [],
          },
          {
            title: "Make Payments",
            products: motherProducts[1].payableProducts || [],
          },
        ]
      case 1:
        return [
          {
            title: "Prepaid Cards",
            products: cardsProducts[0].subProducts || [],
          },
          {
            title: "Credit Cards",
            products: cardsProducts[1].payableProducts || [],
          },
        ]
      case 2:
        return [
          {
            title: "Expenses",
            products: xpenzProducts[0].subProducts || [],
          },
        ]
      case 3:
        return [
          {
            title: "Loyalty Lounge",
            products: loyaltyLoungeProducts[0].subProducts || [],
          },
        ]
      case 4:
        return [
          {
            title: "Resources",
            products: resourseProducts[0].subProducts || [],
          },
          {
            title: "For Developer",
            products: resourseProducts[1].payableProducts || [],
          },
        ]
      case 5:
        return [
          {
            title: "Partnerships",
            products: partnershipProducts[0].subProducts || [],
          },
        ]
      default:
        return []
    }
  }

  return (
    <div className={styles.mobile_header}>
      <div
        className="w-100 fixed z-10"
        style={{
          maxHeight: "90vh",
          overflowY: "scroll",
        }}
      >
        <Hamburger setCurrentStep={setCurrentStep} currentStep={currentStep} />

        {currentStep === 1 && (
          <div className={`fixed z-10 rounded-bottom ${styles.mobile_modal}`}>
            <div className="list">
              <ul>
                {navBarTopTtitle.map((item: any, index: number) => (
                  <Fragment key={index}>
                    <li
                      className="py-4 px-4"
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
              className={`d-flex justify-content-center ${styles.buttons_container}`}
            >
              <RectangleButton
                title="Talk to Sales"
                theme="blue"
                url={signupUrl}
              />
              <RectangleButton
                title="Log In"
                theme="outline-blue"
                url="https://home.enkash.com/login"
              />
            </div>
          </div>
        )}

        {currentStep === 2 && selectedItemIndex !== null && (
          <SubProductListView
            navTitle={navBarTopTtitle[selectedItemIndex!]?.name || ""}
            sections={getSubProductSections()}
            setCurrentStep={setCurrentStep}
            signupUrl={signupUrl}
          />
        )}
      </div>
    </div>
  )
}

export default MobileHeader
