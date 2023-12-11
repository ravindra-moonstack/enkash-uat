"use client";

import Image from "next/image";
import styles from "./mobile-header.module.scss";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import { forwardArrowBlue, mobileStack } from "..";
import navBarTopTtitle from "@/components/header/data/nav-bar";
import { Fragment, useState } from "react";
import ProductListView from "./product-list-view";
import Hamburger from "./hamburger";
import olympusProducts from "@/components/header/data/olympus-products";
import freedomProducts from "@/components/header/data/freedom-products";
import xpenzProducts from "@/components/header/data/ofex-products";
import loyaltyLoungeProducts from "@/components/header/data/loaylty-lounge-products";
import motherProducts from "@/components/header/data/mother-products";
import resources from "@/components/header/data/resources";

const singupUrl = "";
const loginUrl = "https://home.enkash.com/login";

const motherProductsList = [
  olympusProducts,
  freedomProducts,
  xpenzProducts,
  loyaltyLoungeProducts,
];

const resourcesList = [
  olympusProducts,
  freedomProducts,
  xpenzProducts,
  loyaltyLoungeProducts,
];

const MobileHeader = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  return (
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
                      setSelectedItemIndex(index);
                      setCurrentStep(2);
                    }}
                  >
                    <div className={styles.title}> {item.name}</div>
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
            <PrimaryButton title="Sign Up" url={singupUrl} theme="theme-blue" />
            <span className="mx-2"></span>
            <div>
              <button className={`${styles.secondary_button} ${styles.active}`}>
                Login
              </button>
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
              ? resources
              : resources
          }
          childProducts={
            selectedItemIndex === 0
              ? motherProductsList
              : selectedItemIndex === 1
              ? resourcesList
              : resourcesList
          }
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      )}
    </div>
  );
};

export default MobileHeader;
