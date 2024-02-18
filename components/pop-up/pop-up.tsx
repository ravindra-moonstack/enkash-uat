"use client";

import styles from "./pop-up.module.scss";
import boltImage from "./bolt-img.png";
import boltLogo from "./bolt-logo.png";
import boltImageMobile from "./bolt-img-mobile.jpg";
import enkashLogo from "./enkash-logo.png";
import Image from "next/image";
import PrimaryButton from "../buttons/primary-button/primary-button";
import cross from "./cross.svg";
import { useEffect, useState } from "react";

const PopUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const currentUrl = window.location.pathname;
  const smallPopupUrls = ["/", "/sales/"];
  const isSmallUrls = smallPopupUrls.includes(currentUrl);

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
                src={boltImage}
                alt="bolt image"
                className="desktop-only"
              />
              <Image
                src={boltImageMobile}
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
                {" "}
                <div className="mb-2">
                  <Image
                    src={boltLogo}
                    alt="bolt image"
                    className={styles.bolt_logo}
                  />
                </div>
                <div className={styles.main_text}>
                  Enjoy{" "}
                  <span className={styles.hightlighted_text}>up to 30%</span>{" "}
                  savings on{" "}
                  <span className={styles.hightlighted_text}>
                    400+ top brands
                  </span>
                </div>
                <div className={styles.description}>
                  Join the league of 5 million+ buyers for instant discounts on
                  brand gift vouchers
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                <div className="d-flex align-items-center">
                  <div className={styles.powered_by}>Powered By</div>
                  <Image src={enkashLogo} alt="bolt image" />
                </div>
                <div
                  className="mb-3 mb-md-0 mt-4 mt-md-0"
                  onClick={() => {
                    setShowPopup(false);
                  }}
                >
                  <PrimaryButton
                    title="Buy Now"
                    theme="blue"
                    url="https://bolt.enkash.com/signup?utm_source=bolt&utm_medium=website&utm_campaign=website_popup"
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

export default PopUp;
