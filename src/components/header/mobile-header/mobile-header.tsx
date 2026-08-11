"use client"
import { Fragment, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
  const pathname = usePathname()
  const isMonsterPage = pathname === "/monsters-of-checkout"
  const [isBannerDismissed, setIsBannerDismissed] = useState(false)
  const isBannerVisible = !isMonsterPage && !isBannerDismissed

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
      {isBannerVisible && (
        <div
          style={{
            background: "linear-gradient(30deg, #1C5AF4 0%, #56CFFF 100%)",
            padding: "10px 32px 10px 16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: "100%",
            color: "#fff",
            fontWeight: "600",
            fontSize: "12px",
            zIndex: 20,
            textAlign: "center"
          }}
        >
          <Link
            href="/monsters-of-checkout"
            style={{
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "0.5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span>FOUR MONSTERS. ONE GATEWAY. ZERO EXCUSES.</span>
            <span style={{ textDecoration: "underline" }}>
              Enter the Monsterverse &rarr;
            </span>
          </Link>
          <button
            onClick={() => setIsBannerDismissed(true)}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
            }}
            aria-label="Close banner"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
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
