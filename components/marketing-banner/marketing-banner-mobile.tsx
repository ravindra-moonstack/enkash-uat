"use client"
import React from "react"
import {
  bannerBrands,
  bannerBrandsMobile,
  bannerStackBlue,
  crossIcon,
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

const MarketingBannerMobile: React.FC<MarketingBannerProps> = ({
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
      // if (timeSinceLastPopup < POPUP_INTERVAL_MS) {
      //   console.log(timeSinceLastPopup + "  >  " + POPUP_INTERVAL_MS);
      //   return;
      // }
    }

    localStorage.setItem("lastBannerTimestamp", currentTime.toString())
    setShowBanner(true)
  }, [POPUP_INTERVAL_HOURS, POPUP_INTERVAL_MS])

  // useEffect(() => {
  //   console.log("I changed to " + showBanner);
  // }, [showBanner]);

  return (
    <>
      <div className={styles.mobile_only_banner}>
        {showBanner && (
          <div className={styles.mobile_banner_light_blue}>
            <div className={styles.text}>
              <div className="d-flex align-items-start">
                <Link className={styles.button} href="/payment-gateway">
                  IT'S HERE:
                </Link>
                <div>
                  Finally, a Payment Gateway Truly Built for SMBs & Startups
                </div>
              </div>
            </div>
            <div className={styles.buttons_container}>
              <Link href="/payment-gateway" target="_blank">
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
      </div>
    </>
  )
}

export default MarketingBannerMobile
