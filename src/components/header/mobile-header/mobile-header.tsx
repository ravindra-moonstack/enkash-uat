"use client"
import { Fragment, useEffect, useMemo, useState } from "react"
import Image from "next/image"

import styles from "./mobile-header.module.scss"
import { arrowDown } from ".."

// components
import navBarTopTtitle from "@/src/components/header/data/nav-bar"
import Hamburger from "./hamburger"
import motherProducts from "@/src/components/header/data/mother-products"
import loyaltyLoungeProducts from "../data/loaylty-lounge-products"
import CommanButton from "@/src/components/buttons"
import SubProductListView from "./sub-product-list-view"
import {
  resourseProducts,
  partnershipProducts,
  expenseProducts,
  cardsProducts,
} from "../data"
import { TSubProduct } from "@/src/types/navbar"

// helpers

interface Props {
  utmSource?: string
}

const MobileHeader = ({ utmSource }: Props) => {
  //

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  )

  const [currentStep, setCurrentStep] = useState<number>(0)

  const signupUrl =
    utmSource !== "" ? `/sales/?source=${utmSource}` : "/sales/?source"

  useEffect(() => {
    if (currentStep === 1 || currentStep === 2) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }, [currentStep])

  const sectionConfig: {
    title: string
    sections: {
      title: string
      products?: TSubProduct[]
    }[]
  }[] = useMemo(() => {
    return [
      {
        title: "Payments",
        sections: [
          {
            title: "Collect Payments",
            products: motherProducts[0]?.subProducts,
          },
          {
            title: "Make Payments",
            products: motherProducts[1]?.subProducts,
          },
          {
            title: "Payable & Receivable+",
            products: motherProducts[2]?.subProducts,
          },
        ],
      },
      {
        title: "Cards",
        sections: [
          {
            title: "Prepaid Cards",
            products: cardsProducts[0]?.subProducts,
          },
          {
            title: "Credit Cards",
            products: cardsProducts[1]?.subProducts,
          },
        ],
      },
      {
        title: "Expenses",
        sections: [
          { title: "Expenses", products: expenseProducts[0]?.subProducts },
        ],
      },
      {
        title: "Loyalty Lounge",
        sections: [
          {
            title: "Brand Vouchers",
            products: loyaltyLoungeProducts[0]?.subProducts,
          },
          {
            title: "Rewards System",
            products: loyaltyLoungeProducts[1]?.subProducts,
          },
        ],
      },
      {
        title: "Resources",
        sections: [
          {
            title: "Resources",
            products: resourseProducts[0]?.subProducts,
          },
          {
            title: "For Developer",
            products: resourseProducts[1]?.subProducts,
          },
        ],
      },
      {
        title: "Partnerships",
        sections: [
          {
            title: "Partnerships",
            products: partnershipProducts[0]?.subProducts,
          },
        ],
      },
    ]
  }, [])

  const subProductSections = useMemo(() => {
    return selectedItemIndex !== null
      ? sectionConfig[selectedItemIndex]?.sections || []
      : []
  }, [sectionConfig, selectedItemIndex])

  return (
    <div className={styles.mobile_header_container}>
      <div className={styles.mobile_header}>
        <div className={`w-100 fixed z-10 ${styles.mobile_header_box}`}>
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
                          setSelectedItemIndex(index)
                          setCurrentStep(2)
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
                <CommanButton
                  title="Log In"
                  theme="outline-blue"
                  url={`${process.env.NEXT_PUBLIC_HOME_URL ?? ""}?source=nav-bar`}
                  width="100%"
                  openInNewTab
                />
              </div>
            </div>
          )}

          {currentStep === 2 && selectedItemIndex !== null && (
            <SubProductListView
              navTitle={navBarTopTtitle[selectedItemIndex!]?.name || ""}
              sections={subProductSections}
              setCurrentStep={setCurrentStep}
              signupUrl={signupUrl}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
