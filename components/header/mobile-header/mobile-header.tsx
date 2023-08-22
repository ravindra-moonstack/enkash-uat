"use client";

import Image from "next/image";
import styles from "./mobile-header.module.scss";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import {
  enkashWhiteLogo,
  hamnburgerIcon,
  enkashBlueLogo,
  crossMenu,
  forwardArrowBlue,
  productModalEmptyStateImg,
} from "..";
import utmSources from "@/constant/utm-source";
import navBarTopTtitle from "@/constant/nav-bar";
import { useState } from "react";
import ProductListView from "./product-list-view";
import motherProducts from "@/constant/products/mother-products";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

const MobileHeader = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [showProducts, setshowProducts] = useState<number | null>(null);

  return (
    <div className={`w-100 absolute z-10 bg-indi-volt`}>
      <div
        className={`d-flex justify-content-between p-3 ${
          isHamburgerClicked ? "d-none" : "d-flex"
        }`}
      >
        <div>
          <Image
            src={hamnburgerIcon}
            alt="hamburger menu icon"
            onClick={() => setIsHamburgerClicked(true)}
          />
          <Image
            src={enkashWhiteLogo}
            alt="Enkash White logo"
            width={100}
            className="ps-4"
          />
        </div>
        <PrimaryButton title="Sign Up" url={singupUrl} />
      </div>

      <div
        className={`${styles.mobile_modal} ${
          isHamburgerClicked ? "d-block" : "d-none"
        } ${showProducts ? "d-none" : ""}`}
      >
        <div className="d-flex p-3">
          <Image src={crossMenu} alt="hamburger menu icon" />
          <Image
            src={enkashBlueLogo}
            alt="Enkash White logo"
            width={100}
            className="ps-4"
          />
        </div>
        {!showProducts && (
          <div className="list">
            <div className={styles.line}></div>
            <ul>
              {navBarTopTtitle.map((item: any, index: any) => (
                <>
                  <li
                    key={item.name}
                    className={`py-4 px-4`}
                    onClick={() => {
                      setshowProducts(index);
                    }}
                  >
                    {item.name}
                    {index !== 2 && (
                      <>
                        <Image src={forwardArrowBlue} alt="arrow down icon" />
                      </>
                    )}
                  </li>
                  <div className={styles.line}></div>
                </>
              ))}
            </ul>
          </div>
        )}
        <div className="d-flex justify-content-end">
          <Image
            src={productModalEmptyStateImg}
            width={320}
            height={200}
            alt="product empty state image"
          />
        </div>
        <div className={styles.line}></div>
        <div
          className={`d-flex p-5 justify-content-center ${styles.buttons_container}`}
        >
          <PrimaryButton title="Sign Up" url={singupUrl} />
          <span className="mx-2"></span>
          <PrimaryButton title="Log In" url={loginUrl} />
        </div>
      </div>
      {showProducts === 0 && <ProductListView products={motherProducts} />}
    </div>
  );
};

export default MobileHeader;
