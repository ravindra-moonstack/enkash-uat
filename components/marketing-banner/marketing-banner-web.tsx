"use client"
import React from "react"
import {
  bannerBrands,
  bannerStackBlue,
  crossIcon,
  bannerDiamond,
  whiteArrow,
  closeIconBlack,
} from "../header"
import Link from "next/link"
import styles from "./marketing-banner.module.scss"
import { useState, useEffect } from "react"
import Image from "next/image"

interface MarketingBannerProps {
  name?: string
}

const MarketingBannerWeb: React.FC<MarketingBannerProps> = ({
  name = "temp",
}) => {
  const [showBanner, setShowBanner] = useState(false)

  const POPUP_INTERVAL_HOURS = 1
  const POPUP_INTERVAL_MS = POPUP_INTERVAL_HOURS * 60 * 60 * 1000
  //   const POPUP_INTERVAL_MS = 15 * 1000;

  useEffect(() => {
    const lastPopupTimestamp = localStorage.getItem("lastBannerTimestamp")
    const currentTime = new Date().getTime()

    if (lastPopupTimestamp) {
      const timeSinceLastPopup = currentTime - parseInt(lastPopupTimestamp, 10)

      //check if last session was within POPUP_INTERVAL_HOURS
      if (timeSinceLastPopup < POPUP_INTERVAL_MS) {
        return
      }
    }

    localStorage.setItem("lastBannerTimestamp", currentTime.toString())
    setShowBanner(true)
  }, [POPUP_INTERVAL_HOURS, POPUP_INTERVAL_MS])

  return (
    <>
      {showBanner && (
        <div
          className={`${styles.desktop_banner_light_blue} `} //ADD this for blue banner ${styles.desktop_banner}
        >
          {" "}
          <Image
            src={bannerDiamond}
            alt="brands"
            width={174}
            height={64}
            className={`me-4 ${styles.bannerImg} `}
          />
          <div></div>
          <div className={styles.text}>
            <div className="d-flex">
              <Link
                className={styles.button}
                href={
                  "https://www.enkash.com/payment-gateway/?utm_source=website&utm_medium=banner&utm_campaign=pg-launch"
                }
              >
                IT'S HERE:
              </Link>
              <div>
                Finally, a Payment Gateway Truly Built for SMBs & Startups
              </div>
            </div>
          </div>
          <div className={styles.buttons_container}>
            <Link
              href={
                "https://www.enkash.com/payment-gateway/?utm_source=website&utm_medium=banner&utm_campaign=pg-launch"
              }
              target="_blank"
            >
              <div>
                <button className={styles.primary_button}>
                  Explore Now
                  <Image
                    className={`ms-2  ${styles} `}
                    src={whiteArrow}
                    alt="action image"
                    width={14}
                  />
                </button>
              </div>
            </Link>
            <Image
              className={styles.cross_image}
              src={closeIconBlack}
              alt="cross icon"
              onClick={() => {
                setShowBanner(false)
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default MarketingBannerWeb
