"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import styles from "./header.module.scss"
import navBarTopTtitle from "./data/nav-bar"
import { enkashBlueLogo, arrowDownBlack, arrowDownWhite } from "."
import ResourcesModal from "./modal/resources-modal"
import { usePathname } from "next/navigation"
import PaymentModal from "./modal/payment-modal"
import CardModal from "./modal/card-modal"
import ExpensesModal from "./modal/expenses-modal"
import LoyaltyModal from "./modal/loyalty-modal"
import PartnershipModal from "./modal/patnership-modal"

interface props {
  utmSource?: string
}

const WebHeader = ({ utmSource }: props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isHeaderBgWhite, setIsHeaderBgWhite] = useState(false)
  const [itemWidth, setItemWidth] = useState(0)
  const itemRef = useRef<HTMLLIElement | null>(null)
  const [slidePosition, setSlidePosition] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [active, setActive] = useState("sales")
  const [modalLeft, setModalLeft] = useState<number | null>(null)
  // let signupUrl = utmSource
  //   ? `https://home.enkash.com/signup?utm_source=${utmSource}`
  //   : "https://home.enkash.com/get-started";

  let signupUrl = `/sales/?source=${utmSource}`

  const isHomePage = usePathname()
  if (isHomePage == "/") {
    signupUrl = "https://home.enkash.com/get-started"
  }

  useEffect(() => {
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    console.log(hoveredIndex)
  }, [hoveredIndex])

  const getArrowImageSource = (index: number) => {
    if (hoveredIndex === index) {
      return arrowDownBlack
    }
    return isHeaderBgWhite ? arrowDownBlack : arrowDownWhite
  }

  const handleLinkClick = () => {
    setHoveredIndex(null)
    setIsHeaderBgWhite(false)
  }

  return (
    <div className={styles.header_wrapper}>
      {/* <TopBannerWeb /> */}

      <header
        className={`w-full absolute z-10 d-flex flex-column ${styles.header}
       ${isHeaderBgWhite ? styles.bg_white : styles.bg_blue}`}
        onMouseLeave={() => {
          setHoveredIndex(null)
          setIsHeaderBgWhite(false)
        }}
      >
        <nav className="d-flex justify-content-between mb-2 ">
          <div className="d-flex">
            <Link href="/" className={styles.logo_container}>
              <Image
                src={enkashBlueLogo}
                alt="logo"
                width={123}
                className="me-3"
              />
            </Link>
            <ul>
              {hoveredIndex !== null && (
                <div
                  className={styles.nav_background_slide}
                  style={{
                    transform: `translateX(${slidePosition}px)`,
                    width: `${itemWidth}px`,
                  }}
                ></div>
              )}

              {navBarTopTtitle.map((item, index) => (
                <li
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  key={item.name}
                  className={`px-3 d-flex justify-content-center align-items-center cursor-pointer gap-1 ${
                    hoveredIndex === index
                      ? styles.opacity_selected
                      : styles.opacity_normal
                  }`}
                  onMouseEnter={() => {
                    const navItem = itemRefs.current[index]
                    if (navItem) {
                      const itemRect = navItem.getBoundingClientRect()
                      const parentRect =
                        navItem.parentElement?.getBoundingClientRect()
                      const left =
                        itemRect.left -
                        (parentRect?.left || 0) +
                        itemRect.width / 2 +
                        150

                      setModalLeft(left)
                      setSlidePosition(left - itemRect.width / 2)
                      setItemWidth(itemRect.width)
                      setHoveredIndex(index)
                    }
                    setIsHeaderBgWhite(false)
                  }}
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
            </ul>
          </div>
          <div className="d-flex align-items-center gap-4">
            {" "}
            <Link href={signupUrl} target="_blank">
              <button
                className={`${styles.button_getStarted} ${
                  active === "get-started" ? styles.active : ""
                }`}
                onClick={() => setActive("get-support")}
              >
                Get Support
              </button>
            </Link>
            <div
              className={`${styles.button_switch_wrapper} ${
                active === "login"
                  ? styles["login-active"]
                  : styles["get-started-active"]
              }`}
            >
              <button
                className={`${styles.button} ${
                  active === "login" ? styles.active : ""
                }`}
                onClick={() => setActive("login")}
              >
                Login
              </button>
              <button
                className={`bg-brand-blue ${styles.button} ${
                  active === "sales" ? styles.active : ""
                }`}
                onClick={() => setActive("sales")}
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </nav>
        {/* {true && (
          <PartnershipModal
            onLinkClick={handleLinkClick}
            modalLeft={modalLeft ?? 200}
          />
        )} */}
        {hoveredIndex === 0 && modalLeft !== null && (
          <PaymentModal onLinkClick={handleLinkClick} modalLeft={modalLeft} />
        )}
        {hoveredIndex === 1 && modalLeft !== null && (
          <CardModal onLinkClick={handleLinkClick} modalLeft={modalLeft} />
        )}
        {hoveredIndex === 2 && modalLeft !== null && (
          <ExpensesModal onLinkClick={handleLinkClick} modalLeft={modalLeft} />
        )}

        {hoveredIndex === 3 && modalLeft !== null && (
          <LoyaltyModal onLinkClick={handleLinkClick} modalLeft={modalLeft} />
        )}

        {hoveredIndex === 4 && modalLeft !== null && (
          <ResourcesModal onLinkClick={handleLinkClick} modalLeft={modalLeft} />
        )}

        {hoveredIndex === 5 && modalLeft !== null && (
          <PartnershipModal
            onLinkClick={handleLinkClick}
            modalLeft={modalLeft}
          />
        )}
      </header>
    </div>
  )
}

export default WebHeader
