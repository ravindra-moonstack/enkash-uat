"use client";
import React from "react";
import { bannerBrands, bannerStackBlue, crossIcon } from "../header";
import Link from "next/link";
import styles from "./top-banner.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

interface TopBannerProps {
  name?: string;
}

const TopBanner: React.FC<TopBannerProps> = ({ name = "temp" }) => {
  const [showBanner, setShowBanner] = useState(false);

  const POPUP_INTERVAL_HOURS = 1;
  const POPUP_INTERVAL_MS = POPUP_INTERVAL_HOURS * 60 * 60 * 1000;
  //   const POPUP_INTERVAL_MS = 15 * 1000;

  useEffect(() => {
    const lastPopupTimestamp = localStorage.getItem("lastBannerTimestamp");
    const currentTime = new Date().getTime();

    if (lastPopupTimestamp) {
      const timeSinceLastPopup = currentTime - parseInt(lastPopupTimestamp, 10);

      //check if last session was within POPUP_INTERVAL_HOURS
      if (timeSinceLastPopup < POPUP_INTERVAL_MS) {
        return;
      }
    }

    localStorage.setItem("lastBannerTimestamp", currentTime.toString());
    setShowBanner(true);

    return () => {};
  }, []);

  return (
    <>
      {showBanner && (
        <div
          className={`${styles.desktop_banner_light_blue} `} //ADD this for blue banner ${styles.desktop_banner}
        >
          <div className={styles.text}>
            <Image
              src={bannerBrands}
              alt="brands"
              width={230}
              className="me-4"
            />
            <div className="d-flex flex-column align-items-end">
              <div>Enjoy upto 30% savings on 400+ top brands</div>
              <div className={styles.bottom_powered}>Powered by EnKash</div>
            </div>
          </div>
          <Link
            className={styles.button}
            href={
              "https://bolt.enkash.com/signup?utm_source=bolt&utm_medium=website&utm_campaign=bolt_top_banner"
            }
          >
            Buy Now
          </Link>
          <Image
            className={styles.cross_image}
            src={crossIcon}
            alt="cross icon"
            onClick={() => {
              setShowBanner(false);
            }}
          />
          <Image
            className={styles.banner_stack}
            src={bannerStackBlue}
            alt="stack image"
          />
        </div>
      )}
    </>
  );
};

export default TopBanner;
