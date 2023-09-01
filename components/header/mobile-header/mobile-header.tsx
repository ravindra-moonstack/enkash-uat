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
import Hamburger from "./hamburger";

const singupUrl = `https://home.enkash.com/signup?utm_source=${utmSources["nav_bar"]}`;
const loginUrl = "https://home.enkash.com/login";

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
              src={productModalEmptyStateImg}
              height={450}
              width={1200}
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
      )}
      {currentStep === 2 && (
        <ProductListView
          products={
            selectedItemIndex === 0
              ? motherProducts
              : selectedItemIndex === 1
              ? solutions
              : resources
          }
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      )}
    </div>
  );
};

export default MobileHeader;
