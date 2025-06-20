"use client"

import Heading from "@/components/heading/heading"
import React, { SetStateAction, useState } from "react"
import Image from "next/image"
import styles from "./logo-slider.module.scss"
import Marquee from "react-fast-marquee"

import {
  iciciBankLogo,
  rupayLogo,
  visaLogo,
  box8Logo,
  cureFoodsLogo,
  everestLogo,
  hdfcLogo,
  infraMarketLogo,
  kotakLogo,
  masterCardLogo,
  pristynCareLogo,
  relianceRetail,
  dtdcLogo,
  starBucksLogo,
  auBankLogo,
  amexLogo,
  idfcLogo,
  axisLogo,
  yesLogo,
} from "../../src/app/index"
import { space } from "@/common/constant"

const LogoSlider = ({ type }: { type: "partners" | "customers" }) => {
  const [selectedTab, setSelectedTab] = useState(type)
  return (
    <>
      <div className="col-12">
        <div className="mobile-only">
          <div>
            <div
              className={`${styles.bank_logo} ${styles.customer_logo}
              d-flex align-items-center justify-content-between mt-3`}
            >
              {selectedTab === "partners" && (
                <Image
                  className={styles.rupay}
                  src={rupayLogo}
                  alt="rupay bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.visa}
                  src={visaLogo}
                  alt="visa bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.master}
                  src={masterCardLogo}
                  alt="master card logo"
                />
              )}{" "}
              {selectedTab === "partners" && (
                <Image
                  className={styles.master}
                  src={amexLogo}
                  alt="amex bank logo"
                />
              )}{" "}
              {selectedTab === "partners" && (
                <Image
                  className={styles.hdfc}
                  src={hdfcLogo}
                  alt="hdfc bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.icici}
                  src={iciciBankLogo}
                  alt="icici bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.icici}
                  src={idfcLogo}
                  alt="idfc bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.kotak}
                  src={kotakLogo}
                  alt="kotak bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.axis}
                  src={axisLogo}
                  alt="axis bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.yes}
                  src={yesLogo}
                  alt="yes bank logo"
                />
              )}
              {selectedTab === "customers" && (
                <Image
                  className={styles.everest}
                  src={everestLogo}
                  alt="everest logo"
                />
              )}
              {selectedTab === "customers" && (
                <Image
                  className={styles.cure}
                  src={cureFoodsLogo}
                  alt="cure food logo"
                />
              )}
              {selectedTab === "customers" && (
                <Image
                  className={styles.infra}
                  src={infraMarketLogo}
                  alt="infra market logo"
                />
              )}
              {selectedTab === "customers" && (
                <Image className={styles.dtdc} src={dtdcLogo} alt="dtdc logo" />
              )}
              {selectedTab === "customers" && (
                <Image
                  className={styles.pristyn}
                  src={pristynCareLogo}
                  alt="pristyn care logo"
                />
              )}
              {selectedTab === "customers" && (
                <Image className={styles.box} src={box8Logo} alt="box8 logo" />
              )}
              {selectedTab === "customers" && (
                <Image
                  className={styles.reliance}
                  src={relianceRetail}
                  alt="reliance retail cry logo"
                />
              )}
              {selectedTab === "customers" && (
                <Image
                  className={styles.starbucks}
                  src={starBucksLogo}
                  alt="star bucks logo"
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
                  className={`${styles.bank_logo} ${styles.customer_logo} d-flex align-items-center justify-content-between mt-3`}
                >
                  {selectedTab === "partners" && (
                    <>
                      <Image
                        className={styles.rupay}
                        src={rupayLogo}
                        alt="rupay bank logo"
                      />
                      <Image
                        className={styles.visa}
                        src={visaLogo}
                        alt="visa bank logo"
                      />
                      <Image
                        className={styles.master}
                        src={masterCardLogo}
                        alt="master card logo"
                      />
                      <Image
                        className={styles.master}
                        src={amexLogo}
                        alt="amex bank logo"
                      />
                      <Image
                        className={styles.hdfc}
                        src={hdfcLogo}
                        alt="hdfc bank logo"
                      />
                      <Image
                        className={styles.icici}
                        src={iciciBankLogo}
                        alt="icici bank logo"
                      />
                      <Image
                        className={styles.kotak}
                        src={idfcLogo}
                        alt="idfc bank logo"
                      />
                      <Image
                        className={styles.kotak}
                        src={kotakLogo}
                        alt="kotak bank logo"
                      />
                      <Image
                        className={styles.axis}
                        src={axisLogo}
                        alt="axis bank logo"
                      />
                      <Image
                        className={styles.kotak}
                        src={yesLogo}
                        alt="yes bank logo"
                      />
                    </>
                  )}

                  {selectedTab === "customers" && (
                    <>
                      <Image
                        className={styles.rupay}
                        src={rupayLogo}
                        alt="rupay bank logo"
                      />
                      <Image
                        className={styles.visa}
                        src={visaLogo}
                        alt="visa bank logo"
                      />
                      <Image
                        className={styles.master}
                        src={masterCardLogo}
                        alt="master card logo"
                      />
                      <Image
                        className={styles.hdfc}
                        src={hdfcLogo}
                        alt="hdfc bank logo"
                      />
                      <Image
                        className={styles.icici}
                        src={iciciBankLogo}
                        alt="icici bank logo"
                      />
                      <Image
                        className={styles.kotak}
                        src={kotakLogo}
                        alt="kotak bank logo"
                      />
                      <Image
                        className={styles.au}
                        src={auBankLogo}
                        alt="au bank logo"
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
