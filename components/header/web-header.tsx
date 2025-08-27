"use client"
import Link from "next/link"
import Image from "next/image"

import styles from "./header.module.scss"

// components
import navBarTopTtitle from "./data/nav-bar"
import { enkashBlueLogo, arrowDownBlack, arrowDownWhite } from "."
import ResourcesModal from "./modal/resources-modal"
import PaymentModal from "./modal/payment-modal"
import CardModal from "./modal/card-modal"
import ExpensesModal from "./modal/expenses-modal"
import LoyaltyModal from "./modal/loyalty-modal"
import PartnershipModal from "./modal/patnership-modal"

// helpers
import { useHeaderHover } from "@/src/hooks/useHeaderHover"
import { useActiveTab } from "@/src/hooks/useActiveTab"

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

  return (
    <div className={styles.header_wrapper}>
      <header
        className={`w-full absolute z-10 d-flex flex-column mx-auto ${styles.header} ${
          isHeaderBgWhite ? styles.bg_white : styles.bg_blue
        }`}
        onMouseLeave={closeAllModals}
      >
        <nav className="d-flex justify-content-between">
          <div className="d-flex">
            <Link href="/" className={styles.logo_container}>
              <Image src={enkashBlueLogo} alt="logo" width={98} />
            </Link>

            <ul style={{ position: "relative" }}>
              {navBarTopTtitle.map((item, index) => (
                <li
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
                    top: "132%",
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
          {hoveredIndex === 0 && modalLeft !== null && (
            <PaymentModal onLinkClick={closeAllModals} modalLeft={modalLeft} />
          )}

          {hoveredIndex === 1 && modalLeft !== null && (
            <CardModal onLinkClick={closeAllModals} modalLeft={modalLeft} />
          )}

          {hoveredIndex === 2 && modalLeft !== null && (
            <ExpensesModal onLinkClick={closeAllModals} modalLeft={modalLeft} />
          )}

          {hoveredIndex === 3 && modalLeft !== null && (
            <LoyaltyModal onLinkClick={closeAllModals} modalLeft={modalLeft} />
          )}

          {hoveredIndex === 4 && modalLeft !== null && (
            <ResourcesModal
              onLinkClick={closeAllModals}
              modalLeft={modalLeft}
            />
          )}

          {hoveredIndex === 5 && modalLeft !== null && (
            <PartnershipModal
              onLinkClick={closeAllModals}
              modalLeft={modalLeft}
            />
          )}
        </div>
      </header>
    </div>
  )
}

export default WebHeader
