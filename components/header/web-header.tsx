"use client"
import Link from "next/link"
import Image from "next/image"

import styles from "./header.module.scss"

// components
import navBarTopTtitle from "./data/nav-bar"
import { enkashBlueLogo, arrowDownBlack, arrowDownWhite } from "."
import PaymentModal from "./modal/payment-modal"

// helpers
import { useHeaderHover } from "@/src/hooks/useHeaderHover"
import { useActiveTab } from "@/src/hooks/useActiveTab"
import CommonModal from "./modal/common-modal"
import {
  expenseProducts,
  loyaltyLoungeProducts,
  resourseProducts,
  partnershipProducts,
  cardsProducts,
} from "./data"
import { useMemo } from "react"

interface props {
  utmSource?: string
}

const WebHeader = ({}: props) => {
  //

  const {
    hoveredIndex,
    isHeaderBgWhite,
    modalLeft,
    itemRefs,
    handleMouseEnter,
    closeAllModals,
  } = useHeaderHover()

  const { active, setActive, activeTab, setActiveTab } = useActiveTab()

  const getArrowImageSource = (index: number) =>
    hoveredIndex === index
      ? arrowDownBlack
      : isHeaderBgWhite
        ? arrowDownBlack
        : arrowDownWhite

  const modalsConfig =
    useMemo(
      () => [
        {
          component: PaymentModal,
          props: { onLinkClick: closeAllModals },
        },
        {
          component: CommonModal,
          props: {
            onLinkClick: closeAllModals,
            data: cardsProducts!,
            isCorporate: true,
          },
        },
        {
          component: CommonModal,
          props: { onLinkClick: closeAllModals, data: expenseProducts },
        },
        {
          component: CommonModal,
          props: { onLinkClick: closeAllModals, data: loyaltyLoungeProducts },
        },
        {
          component: CommonModal,
          props: { onLinkClick: closeAllModals, data: resourseProducts },
        },
        {
          component: CommonModal,
          props: { onLinkClick: closeAllModals, data: partnershipProducts },
        },
      ],
      [closeAllModals]
    ) ?? []

  const modalEntry = hoveredIndex !== null ? modalsConfig[hoveredIndex] : null
  const ModalComponent = modalEntry?.component

  return (
    <div className={styles.header_wrapper}>
      <header
        className={`w-full absolute z-10 d-flex flex-column mx-auto ${styles.header} ${
          isHeaderBgWhite ? styles.bg_white : styles.bg_blue
        }`}
        onMouseLeave={closeAllModals}
      >
        <a href="#main" className="skip">
          Skip to main content
        </a>

        <nav className="d-flex justify-content-between">
          <div className="d-flex">
            <Link href="/" className={styles.logo_container}>
              <Image src={enkashBlueLogo} alt="logo" width={98} />
            </Link>

            <ul
              role="menubar"
              aria-label="Main navigation"
              className="position-relative"
            >
              {navBarTopTtitle.map((item, index) => (
                <li
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={hoveredIndex === index}
                  aria-controls={item.link}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  key={item.name}
                  className={`d-flex justify-content-center align-items-center cursor-pointer gap-1 ${
                    hoveredIndex === index
                      ? styles.opacity_selected
                      : styles.opacity_normal
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={closeAllModals}
                >
                  <span className={styles.link}>{item.name}</span>
                  <Image
                    src={getArrowImageSource(index)}
                    alt="arrow down icon"
                    height={16}
                    width={16}
                  />
                </li>
              ))}

              {hoveredIndex !== null && modalLeft !== null && (
                <div
                  className={styles.arrow}
                  style={{
                    left: `calc(${modalLeft}px - 8px)`,
                    top: "126%",
                    position: "absolute",
                    zIndex: 0,
                  }}
                />
              )}
            </ul>
          </div>

          <div
            className={`d-flex align-items-center gap-4 ${styles.nav_right}`}
          >
            <Link href={`/support/?source=nav-bar`} target="_blank">
              <button
                className={`${styles.button_getStarted} ${
                  active === "get-support" ? styles.active : ""
                }`}
                onClick={() => setActive("get-support")}
              >
                Get Support
              </button>
            </Link>

            <div className={styles.button_switch_wrapper}>
              <Link
                target="_blank"
                href={`${process.env.HOME_URL}?source=nav-bar`}
              >
                <button
                  className={`${styles.button} ${styles.login} ${
                    activeTab === "login" ? styles.active : ""
                  }`}
                  onMouseEnter={() => setActiveTab("login")}
                >
                  Login
                </button>
              </Link>

              <Link href={`/sales/?source=nav-bar`} target="_blank">
                <button
                  className={`${styles.button} ${styles.sales} ${
                    activeTab === "sales" ? styles.active : ""
                  }`}
                  onMouseEnter={() => setActiveTab("sales")}
                >
                  Talk to Sales
                </button>
              </Link>

              <span
                className={styles.slider}
                style={{
                  left: activeTab === "login" ? "0" : "calc(50% + 4px)",
                }}
              />
            </div>
          </div>
        </nav>

        <div className="max-width-auto">
          {ModalComponent && modalLeft !== null && (
            <ModalComponent {...modalEntry.props} key={"asdfasdf"} />
          )}
        </div>
      </header>
    </div>
  )
}

export default WebHeader
