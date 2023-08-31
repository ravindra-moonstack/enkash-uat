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
import { Fragment, useState } from "react";
import ProductListView from "./product-list-view";
import motherProducts from "@/constant/products/mother-products";
import solutions from "@/constant/solutions";
import resources from "@/constant/resources";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

const MobileHeader = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

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
        <PrimaryButton title="Sign Up" url={singupUrl} theme="theme-blue" />
      </div>

      <div
        className={`${styles.mobile_modal} ${
          isHamburgerClicked ? "d-block" : "d-none"
        }`}
      >
        <div className="d-flex p-3">
          <Image
            src={crossMenu}
            alt="hamburger menu icon"
            onClick={() => setIsHamburgerClicked(false)}
          />
          <Image
            src={enkashBlueLogo}
            alt="Enkash White logo"
            width={100}
            className="ps-4"
          />
        </div>
        <div className="list">
          <div className={styles.line}></div>
          <ul>
            {navBarTopTtitle.map((item: any, index: any) => (
              <Fragment key={item.name}>
                <li
                  key={item.name}
                  className={`py-4 px-4`}
                  onClick={() => setSelectedItemIndex(index)}
                >
                  {item.name}
                  {index !== 2 && (
                    <>
                      <Image src={forwardArrowBlue} alt="arrow down icon" />
                    </>
                  )}
                </li>
                <div className={styles.line}></div>
              </Fragment>
            ))}
          </ul>
        </div>

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
          <PrimaryButton title="Sign Up" url={singupUrl} theme="theme-blue" />
          <span className="mx-2"></span>
          <PrimaryButton title="Log In" url={loginUrl} theme="theme-blue" />
        </div>
      </div>
      {selectedItemIndex === 0 && <ProductListView products={motherProducts} />}
      {selectedItemIndex === 1 && <ProductListView products={solutions} />}
      {selectedItemIndex === 2 && <ProductListView products={resources} />}
    </div>
  );
};

export default MobileHeader;
