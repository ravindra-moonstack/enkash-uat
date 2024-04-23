"use client";

import styles from "./pop-up.module.scss";
import boltImage from "./bolt-img.png";
import boltLogo from "./bolt-logo.png";
import boltImageMobile from "./bolt-img-mobile.jpg";
import enkashLogo from "./enkash-logo.png";
import gatewayGirl from "./gateway-girl.png";
import Image from "next/image";
import PrimaryButton from "../buttons/primary-button/primary-button";
import cross from "./cross.svg";
import { useEffect, useState } from "react";

const PopUpPaymentGateway = () => {
  const [showPopup, setShowPopup] = useState(false);
  const POPUP_INTERVAL_HOURS = 1;
  const POPUP_INTERVAL_MS = POPUP_INTERVAL_HOURS * 60 * 60 * 1000;
  // const POPUP_INTERVAL_MS = 15 * 1000;
  const POPUP_DELAY_MS = 4000;

  useEffect(() => {
    const lastPopupTimestamp = localStorage.getItem("lastPopupTimestamp");
    const currentTime = new Date().getTime();

    if (lastPopupTimestamp) {
      const timeSinceLastPopup = currentTime - parseInt(lastPopupTimestamp, 10);
      // console.log(lastPopupTimestamp, currentTime, timeSinceLastPopup);
      if (timeSinceLastPopup < POPUP_INTERVAL_MS) {
        // console.log("already present so returning");
        return;
      }
    }

    const timer = setTimeout(() => {
      // console.log("setting timeouttt");
      localStorage.setItem("lastPopupTimestamp", currentTime.toString());
      setShowPopup(true);
    }, POPUP_DELAY_MS);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const currentUrl =
    typeof window !== "undefined" ? window.location.pathname : "";
  const smallPopupUrls = ["/", "/sales/"];
  // const isSmallUrls = smallPopupUrls.includes(currentUrl);
  const isSmallUrls = true;

  return (
    <div>
      {showPopup && (
        <div
          className={
            isSmallUrls ? styles.popup_container_small : styles.popup_container
          }
        >
          <div className={styles.popup}>
            <div
              className={
                isSmallUrls
                  ? styles.left_container_small
                  : styles.left_container
              }
            >
              <Image
                src={gatewayGirl}
                alt="bolt image"
                className="desktop-only"
              />
              <Image
                src={gatewayGirl}
                alt="bolt image"
                className="mobile-only w-100"
              />
            </div>
            <div
              className={
                isSmallUrls
                  ? styles.right_container_small
                  : styles.right_container
              }
            >
              <div>
                <div className={styles.main_text}>
                  When you are{" "}
                  <span className={styles.hightlighted_text}>
                    not ordinary,
                  </span>{" "}
                  why your{" "}
                  <span className={styles.hightlighted_text}>
                    payment gateway
                  </span>{" "}
                  should be?
                </div>
                {/* <div className={styles.main_text}>
                  why your{" "}
                  <span className={styles.hightlighted_text}>
                    payment gateway
                  </span>{" "}
                </div> */}
                {/* <div className={styles.main_text}>should be?</div> */}
                <div className={styles.description}>
                  Time to upgrade to the new age payment gateway
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                {/* <div className="d-flex align-items-center">
                  <div className={styles.powered_by}>Powered By</div>
                  <Image src={enkashLogo} alt="bolt image" />
                </div> */}
                <div
                  className="mb-3 mb-md-0 mt-4 mt-md-0"
                  onClick={() => {
                    setShowPopup(false);
                  }}
                >
                  <PrimaryButton
                    title="Switch to Olympus PG today"
                    theme="blue"
                    url="/sales?source=interested-payment-gateway"
                  />
                </div>
              </div>
            </div>
            <div
              className={styles.icon}
              onClick={() => {
                setShowPopup(false);
              }}
            >
              <Image src={cross} alt="cross icon" className="cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpPaymentGateway;
