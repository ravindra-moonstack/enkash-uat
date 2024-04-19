"use client";

import Image from "next/image";
import styles from "./mobile-header.module.scss";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import {
  bannerBrandsMobile,
  confetti,
  crossIcon,
  forwardArrowBlue,
  mobileStack,
} from "..";
import navBarTopTtitle from "@/components/header/data/nav-bar";
import { Fragment, useState } from "react";
import ProductListView from "./product-list-view";
import Hamburger from "./hamburger";
import freedomProducts from "@/components/header/data/freedom-products";
import xpenzProducts from "@/components/header/data/ofex-products";
import loyaltyLoungeProducts from "@/components/header/data/loaylty-lounge-products";
import motherProducts from "@/components/header/data/mother-products";
import resources from "@/components/header/data/resources";
import Link from "next/link";
import solutions from "../data/solutions";
import ReceivableProducts from "@/components/header/data/receivable-products";
import payableProducts from "../data/payable-products";
import brandVouchersProducts from "../data/brand-voucher-products";
import TopBannerMobile from "@/components/top-banner/top-banner-mobile";

const motherProductsList = [
  ReceivableProducts,
  payableProducts,
  freedomProducts,
  xpenzProducts,
  brandVouchersProducts,
  loyaltyLoungeProducts,
];

interface props {
  utmSource?: string;
}

const MobileHeader = ({ utmSource }: props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showBanner, setShowBanner] = useState(true);

  const signupUrl =
    utmSource !== ""
      ? `https://home.enkash.com/signup?utm_source=${utmSource}`
      : "https://home.enkash.com/get-started";

  return (
    <div>
      <TopBannerMobile />

      <div className={`w-100 absolute z-10 bg-indi-volt`}>
        <Hamburger setCurrentStep={setCurrentStep} currentStep={currentStep} />

        {currentStep === 1 && (
          <div className={`${styles.mobile_modal}`}>
            <div className="list">
              <div className={styles.line}></div>
              <ul>
                {navBarTopTtitle.map((item: any, index: any) => (
                  <Fragment key={index}>
                    <li
                      key={item.name}
                      className={`py-4 px-4`}
                      onClick={() => {
                        if (index !== 3) {
                          setSelectedItemIndex(index);
                          setCurrentStep(2);
                        }
                      }}
                    >
                      {index === 3 ? (
                        <Link className={styles.title} href={item.link}>
                          {item.name}
                        </Link>
                      ) : (
                        <div className={styles.title}>{item.name}</div>
                      )}
                      {index !== 3 && (
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
                src={mobileStack}
                alt="enkash blue stack image"
                height={300}
                width={580}
              />
            </div>
            <div className={styles.line}></div>
            <div
              className={`d-flex p-5 justify-content-center ${styles.buttons_container}`}
            >
              <PrimaryButton title="Sign Up" theme="blue" url={signupUrl} />
              <span className="mx-2"></span>
              <div>
                <Link href="https://home.enkash.com/login" target="_blank">
                  <button
                    className={`${styles.secondary_button} ${styles.active}`}
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <ProductListView
            products={
              selectedItemIndex === 0
                ? motherProducts
                : selectedItemIndex === 1
                ? solutions
                : selectedItemIndex === 2
                ? resources
                : []
            }
            childProducts={
              selectedItemIndex === 0
                ? motherProductsList
                : selectedItemIndex === 1
                ? []
                : []
            }
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            signupUrl={signupUrl}
          />
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
