"use client";

import Heading from "@/components/heading/heading";
import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import Marquee from "react-fast-marquee";

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
} from "@/app/index";
import { space } from "@/common/constant";

const BankSection = ({ type }: { type: "partners" | "customers" }) => {
  const [selectedTab, setSelectedTab] = useState(type);

  // const handleTabClick = (tab: SetStateAction<string>) => {
  //   setSelectedTab(tab);
  // };
  return (
    <>
      {/* <div className="col-md-6">
        <div className={`row-padding-x-only mb-3 mt-5`}>
          <div>
            <Heading
              title={`Financial${space}`}
              size="h2"
              color="equity-blue"
              weight="6"
            />
            <Heading
              title={`Partners${space}`}
              size="h2"
              color="black"
              weight="6"
            />
            <span className="mobile-only">
              <br />
            </span>
            <Heading
              title={`and${space}`}
              size="h2"
              color="equity-blue"
              weight="6"
            />
            <span className="desktop-only">
              <br />
            </span>
            <Heading title="Customers" size="h2" color="black" weight="6" />
          </div>

          <div
            className={`${styles.progress_bar} ${
              selectedTab === "partners" ? styles.partner : styles.customer
            }`}
          ></div>
        </div>
      </div> */}
      <div className="col-12">
        {/* <div className="d-flex mb-4">
          <div
            className="ms-3 me-5 cursor-pointer"
            onClick={() => handleTabClick("partners")}
          >
            <Heading
              title="Our Partners"
              size="h4"
              color={selectedTab === "partners" ? "equity-blue" : "black"}
              weight="6"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleTabClick("customers")}
          >
            <Heading
              title="Happy Customers"
              size="h4"
              color={selectedTab === "partners" ? "black" : "equity-blue"}
              weight="6"
            />
          </div>
        </div> */}

        <div className="mobile-only">
          <div>
            <div
              className={`${styles.bank_logo} ${styles.customer_logo}
              d-flex align-items-center justify-content-between mt-3`}
            >

              {selectedTab === "partners" && (
                <Image
                  className={styles.icici}
                  src={iciciBankLogo}
                  alt="icici bank logo"
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
                  className={styles.kotak}
                  src={kotakLogo}
                  alt="kotak bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.hdfc}
                  src={hdfcLogo}
                  alt="hdfc bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.au}
                  src={auBankLogo}
                  alt="au bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.rupay}
                  src={rupayLogo}
                  alt="rupay bank logo"
                />
              )}
              {selectedTab === "partners" && (
                <Image
                  className={styles.master}
                  src={masterCardLogo}
                  alt="master card logo"
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
                  className={`${styles.bank_logo} ${styles.customer_logo}
              d-flex align-items-center justify-content-between mt-3`}
                >
                  {selectedTab === "partners" && (
                    <Image
                      className={styles.icici}
                      src={iciciBankLogo}
                      alt="icici bank logo"
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
                      className={styles.kotak}
                      src={kotakLogo}
                      alt="kotak bank logo"
                    />
                  )}
                  {selectedTab === "partners" && (
                    <Image
                      className={styles.hdfc}
                      src={hdfcLogo}
                      alt="hdfc bank logo"
                    />
                  )}
                  {selectedTab === "partners" && (
                    <Image
                      className={styles.au}
                      src={auBankLogo}
                      alt="au bank logo"
                    />
                  )}
                  {selectedTab === "partners" && (
                    <Image
                      className={styles.rupay}
                      src={rupayLogo}
                      alt="rupay bank logo"
                    />
                  )}
                  {selectedTab === "partners" && (
                    <Image
                      className={styles.master}
                      src={masterCardLogo}
                      alt="master card logo"
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
                    <Image
                      className={styles.dtdc}
                      src={dtdcLogo}
                      alt="dtdc logo"
                    />
                  )}
                  {selectedTab === "customers" && (
                    <Image
                      className={styles.pristyn}
                      src={pristynCareLogo}
                      alt="pristyn care logo"
                    />
                  )}
                  {selectedTab === "customers" && (
                    <Image
                      className={styles.box}
                      src={box8Logo}
                      alt="box8 logo"
                    />
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
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankSection;
