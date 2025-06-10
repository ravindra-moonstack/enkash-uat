"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import styles from "./header.module.scss"
import navBarTopTtitle from "./data/nav-bar"
import { enkashBlueLogo, arrowDownBlack, arrowDownWhite } from "."
import ProductModal from "./modal/payment-modal"
import ResourcesModal from "./modal/resources-modal"
import SolutionsModal from "./modal/solutions-modal"
import ApiDocsModal from "./modal/api-docs-modal"
import { usePathname } from "next/navigation"
import PaymentModal from "./modal/payment-modal"

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
  const [active, setActive] = useState("get-started")
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
        <nav className="d-flex justify-content-between mb-2 pe-5">
          <div className="d-flex">
            <Link href="/" className={styles.logo_container}>
              <Image
                src={enkashBlueLogo}
                alt="logo"
                width={120}
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
                  className={`px-3 d-flex justify-content-center align-items-center cursor-pointer ${
                    hoveredIndex === index
                      ? styles.opacity_selected
                      : styles.opacity_normal
                  }`}
                  onMouseEnter={() => {
                    const position =
                      itemRefs.current[index]?.getBoundingClientRect().left || 0
                    const width = itemRefs.current[index]?.offsetWidth || 0

                    setSlidePosition(
                      position -
                        (itemRefs.current[
                          index
                        ]?.parentElement?.getBoundingClientRect().left || 0)
                    )
                    setItemWidth(width)
                    setHoveredIndex(index)
                    // setIsHeaderBgWhite(true);

                    if (index === 5) {
                      setIsHeaderBgWhite(false)
                    }
                  }}
                >
                  {index === 5 ? (
                    <Link className={styles.link} href={item.link}>
                      {item.name}
                    </Link>
                  ) : (
                    item.name
                  )}

                  {index !== 5 && (
                    <>
                      <Image
                        src={getArrowImageSource(index)}
                        alt="arrow down icon"
                      />
                    </>
                  )}
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
            <div className={styles.button_switch_wrapper}>
              <Link href={signupUrl} target="_blank">
                <button
                  className={`${styles.button} ${
                    active === "get-started" ? styles.active : ""
                  }`}
                  onClick={() => setActive("get-started")}
                >
                  Get Started
                </button>
              </Link>

              <Link href="https://home.enkash.com/login" target="_blank">
                <button
                  className={`${styles.button} ${
                    active === "login" ? styles.active : ""
                  }`}
                  onClick={() => setActive("login")}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>
        {/* <ProductModal onLinkClick={handleLinkClick} /> */}
        {hoveredIndex === 0 && <PaymentModal onLinkClick={handleLinkClick} />}
        {hoveredIndex === 1 && <SolutionsModal />}
        {hoveredIndex === 2 && <ResourcesModal />}
        {hoveredIndex === 3 && <ApiDocsModal />}
      </header>
    </div>
  )
}

export default WebHeader
