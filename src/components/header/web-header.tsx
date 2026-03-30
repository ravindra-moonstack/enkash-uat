"use client"
import Link from "next/link"
import Image from "next/image"
import styles from "./header.module.scss"
// components
import navBarTopTtitle from "./data/nav-bar"
import { enkashBlueLogo, arrowDownBlack, arrowDownWhite } from "."
import PaymentModal from "./modal/payment-modal"
import CommonModal from "./modal/common-modal"

// helpers
import { useHeaderHover } from "@/src/hooks/useHeaderHover"
import { useActiveTab } from "@/src/hooks/useActiveTab"

// data
import {
  expenseProducts,
  loyaltyLoungeProducts,
  resourseProducts,
  partnershipProducts,
  cardsProducts,
} from "./data"

interface props {
  utmSource?: string
}

const WebHeader = ({ }: props) => {
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

      <a href="#main" className="sr-only sr-only-focusable skip" tabIndex={0}>
        Skip to main content
      </a>

      <header
        className={`w-full absolute z-10 ${styles.header} ${isHeaderBgWhite ? styles.bg_white : styles.bg_blue
          }`}
        onMouseLeave={closeAllModals}
        role="banner"
        aria-label="Primary"
      >
        <div className="container">
          <nav
            className="position-relative mb-0"
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="row align-items-center">

              <div className="col-12 col-md-auto d-flex align-items-center">
                <Link
                  href="/"
                  className={styles.logo_container}
                  aria-label="Enkash Home"
                >
                  <Image src={enkashBlueLogo} alt="logo" width={98} />
                </Link>


                <ul
                  role="menubar"
                  aria-label="Main menu"
                  className={`d-flex align-items-center mb-0 ${styles.menu}`}
                >
                  {navBarTopTtitle.map((item, index) => (
                    <li
                      key={item.name}
                      className={`${styles.menu_item} ${styles[`menu_item_${index}`]} ${hoveredIndex === index ? styles.opacity_selected : ""
                        }`}
                      ref={(el) => {
                        itemRefs.current[index] = el
                      }}
                      id={`menuitem_${index}${styles.box}`}
                      role="none"

                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          closeAllModals()
                        }
                      }}
                    >

                      <button
                        className={styles.link}
                        type="button"
                        id={`menuitem-${index}`}
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded={hoveredIndex === index}
                        aria-controls={`navbar-submenu-${index}`}
                        tabIndex={0}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onFocus={() => handleMouseEnter(index)}
                        onClick={() => { closeAllModals(); handleMouseEnter(index); }}
                      >
                        <span>{item.name}</span>
                        <Image
                          src={getArrowImageSource(index)}
                          alt=""
                          role="presentation"
                          height={16}
                          width={16}
                        />
                      </button>


                      {hoveredIndex === index && modalLeft !== null && (
                        <div
                          id={`navbar-submenu-${index}`}
                          role="menu"
                          aria-labelledby={`menuitem-${index}`}
                          className={styles.submenu_wrapper}
                        >
                          {index === 0 && (
                            <PaymentModal onLinkClick={closeAllModals} />
                          )}
                          {index === 1 && (
                            <CommonModal
                              onLinkClick={closeAllModals}
                              data={cardsProducts}
                              isCorporate
                            />
                          )}
                          {index === 2 && (
                            <CommonModal
                              onLinkClick={closeAllModals}
                              data={expenseProducts}
                            />
                          )}
                          {index === 3 && (
                            <CommonModal
                              onLinkClick={closeAllModals}
                              data={loyaltyLoungeProducts}
                            />
                          )}
                          {index === 4 && (
                            <CommonModal
                              onLinkClick={closeAllModals}
                              data={resourseProducts}
                            />
                          )}
                          {index === 5 && (
                            <CommonModal
                              onLinkClick={closeAllModals}
                              data={partnershipProducts}
                            />
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>


              <div className="col-12 col-md d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                <Link
                  href={`/support/?source=nav-bar`}
                  target="_blank"
                  aria-label="Open support page in new tab"
                >
                  <button
                    className={`${styles.button_getStarted} ${
                      active === "get-support" ? styles.active : ""
                    }`}
                    onClick={() => setActive("get-support")}
                    aria-current={active === "get-support" ? "page" : undefined}
                    type="button"
                  >
                    Get Support
                  </button>
                </Link>

                <div
                  className={styles.button_switch_wrapper + " ms-3"}
                  role="group"
                  aria-label="Login and Sales"
                >
                  <Link
                    target="_blank"
                    href={`${process.env.NEXT_PUBLIC_HOME_URL}?source=nav-bar`}
                    aria-label="Login page"
                  >
                    <button
                      className={`${styles.button} ${styles.login} ${activeTab === "login" ? styles.active : ""
                        }`}
                      onMouseEnter={() => setActiveTab("login")}
                      aria-current={activeTab === "login" ? "page" : undefined}
                      type="button"
                    >
                      Login
                    </button>
                  </Link>

                  <Link
                    href={`/sales/?source=nav-bar`}
                    target="_blank"
                    aria-label="Talk to Sales page in new tab"
                  >
                    <button
                      className={`${styles.button} ${styles.sales} ${
                        activeTab === "sales" ? styles.active : ""
                      }`}
                      onMouseEnter={() => setActiveTab("sales")}
                      aria-current={activeTab === "sales" ? "page" : undefined}
                      type="button"
                    >
                      Talk to Sales
                    </button>
                  </Link>

                  <span
                    className={styles.slider}
                    style={{
                      left: activeTab === "login" ? "0" : "calc(50% + 4px)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default WebHeader
