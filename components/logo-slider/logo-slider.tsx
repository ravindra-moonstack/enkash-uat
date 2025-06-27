"use client"

import React, { useState } from "react"
import Image from "next/image"
import styles from "./logo-slider.module.scss"
import Marquee from "react-fast-marquee"

import {
  blinkitLogo,
  britishAirwaysLogo,
  dtdcLogo,
  housingLogo,
  pristynCareLogo,
  rakutenLogo,
  relianceLogo,
  starbucksLogo,
} from "../../src/app/index"

const LogoSlider = ({ type }: { type: "partners" | "customers" }) => {
  const [selectedTab] = useState(type)
  return (
    <>
      <div className="col-12">
        <div className="mobile-only">
          <div>
            <div
              className={`${styles.bank_logo} ${styles.customer_logo}
              d-flex align-items-center justify-content-between mt-3 mb-3`}
            >
              {selectedTab === "partners" && (
                <Image
                  className={styles.rupay}
                  src={blinkitLogo}
                  alt="rupay bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.visa}
                  src={britishAirwaysLogo}
                  alt="visa bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.master}
                  src={housingLogo}
                  alt="master card logo"
                />
              )}{" "}
              {selectedTab === "partners" && (
                <Image
                  className={styles.master}
                  src={rakutenLogo}
                  alt="amex bank logo"
                />
              )}{" "}
              {selectedTab === "partners" && (
                <Image
                  className={styles.hdfc}
                  src={starbucksLogo}
                  alt="hdfc bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.icici}
                  src={pristynCareLogo}
                  alt="icici bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.icici}
                  src={dtdcLogo}
                  alt="idfc bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.kotak}
                  src={relianceLogo}
                  alt="kotak bank logo"
                />
              )}
            </div>
          </div>
        </div>
        <div className="desktop-only">
          <div className={styles.marquee_box}>
            <div id="marquee">
              <Marquee speed={80}>
                <div
                  className={`${styles.bank_logo} ${styles.customer_logo} d-flex align-items-center justify-content-between mt-3 mb-3`}
                >
                  {selectedTab === "partners" && (
                    <>
                      <Image
                        className={styles.rupay}
                        src={blinkitLogo}
                        alt="rupay bank logo"
                      />
                      <Image
                        className={styles.visa}
                        src={britishAirwaysLogo}
                        alt="visa bank logo"
                      />
                      <Image
                        className={styles.master}
                        src={housingLogo}
                        alt="master card logo"
                      />
                      <Image
                        className={styles.master}
                        src={rakutenLogo}
                        alt="amex bank logo"
                      />
                      <Image
                        className={styles.hdfc}
                        src={starbucksLogo}
                        alt="hdfc bank logo"
                      />
                      <Image
                        className={styles.icici}
                        src={pristynCareLogo}
                        alt="icici bank logo"
                      />
                      <Image
                        className={styles.kotak}
                        src={dtdcLogo}
                        alt="idfc bank logo"
                      />
                      <Image
                        className={styles.kotak}
                        src={relianceLogo}
                        alt="kotak bank logo"
                      />
                      <Image
                        className={styles.rupay}
                        src={blinkitLogo}
                        alt="rupay bank logo"
                      />
                      <Image
                        className={styles.visa}
                        src={britishAirwaysLogo}
                        alt="visa bank logo"
                      />
                      <Image
                        className={styles.master}
                        src={housingLogo}
                        alt="master card logo"
                      />
                      <Image
                        className={styles.master}
                        src={rakutenLogo}
                        alt="amex bank logo"
                      />
                      <Image
                        className={styles.hdfc}
                        src={starbucksLogo}
                        alt="hdfc bank logo"
                      />
                      <Image
                        className={styles.icici}
                        src={pristynCareLogo}
                        alt="icici bank logo"
                      />
                      <Image
                        className={styles.kotak}
                        src={dtdcLogo}
                        alt="idfc bank logo"
                      />
                      <Image
                        className={styles.kotak}
                        src={relianceLogo}
                        alt="kotak bank logo"
                      />
                    </>
                  )}

                  {selectedTab === "customers" && (
                    <>
                      <Image
                        className={styles.rupay}
                        src={blinkitLogo}
                        alt="rupay bank logo"
                      />
                      <Image
                        className={styles.visa}
                        src={britishAirwaysLogo}
                        alt="visa bank logo"
                      />
                      <Image
                        className={styles.master}
                        src={housingLogo}
                        alt="master card logo"
                      />
                      <Image
                        className={styles.master}
                        src={rakutenLogo}
                        alt="amex bank logo"
                      />
                      <Image
                        className={styles.hdfc}
                        src={starbucksLogo}
                        alt="hdfc bank logo"
                      />
                      <Image
                        className={styles.icici}
                        src={pristynCareLogo}
                        alt="icici bank logo"
                      />
                      <Image
                        className={styles.kotak}
                        src={dtdcLogo}
                        alt="idfc bank logo"
                      />
                      <Image
                        className={styles.kotak}
                        src={relianceLogo}
                        alt="kotak bank logo"
                      />
                    </>
                  )}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogoSlider
