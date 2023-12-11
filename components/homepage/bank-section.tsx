"use client";

import Heading from "@/components/heading/heading";
import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import {
  motion,
  useTransform,
  useScroll,
  MotionValue,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";

import {
  axisBankLogo,
  iciciBankLogo,
  rupayLogo,
  sbmLogo,
  visaLogo,
  box8Logo,
  cureFoodsLogo,
  everestLogo,
  firstCryLogo,
  hdfcLogo,
  infraMarketLogo,
  kotakLogo,
  landmarkLogo,
  masterCardLogo,
  pristynCareLogo,
  relianceRetail,
  blueBlackLine,
  dtdcLogo,
  starBucksLogo,
} from "@/app/index";
import { space } from "@/constant/common";

const BankSection = () => {
  const [selectedTab, setSelectedTab] = useState("partners");

  const logoRow = useRef<HTMLDivElement>(null);

  //Framer motion scroll progress
  const logoScrollData = useScroll({
    target: logoRow,
    offset: ["0.5 2", "0.9 0.75"],
  }) as { scrollYProgress: MotionValue<number> };

  const opacityScrollData = useScroll({
    target: logoRow,
    offset: ["0.5 2", "0.9 0.6"],
  }) as { scrollYProgress: MotionValue<number> };

  //Framer motion transform values
  const logoTranslateX = useTransform(
    logoScrollData.scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );
  const opacity = useTransform(
    opacityScrollData.scrollYProgress,
    [0, 1],
    ["0", "100%"]
  );

  const handleTabClick = (tab: SetStateAction<string>) => {
    setSelectedTab(tab);
  };
  return (
    <>
      <div className="col-md-6">
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
      </div>
      <div className="col-12 row-padding-x-only">
        <div className="d-flex mb-4">
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
        </div>
        <motion.div
          ref={logoRow}
          style={{
            translateX: logoTranslateX,
            opacity: opacity,
          }}
        >
          {selectedTab === "partners" && (
            <div
              className={`${styles.bank_logo} 
            animate__animated mt-5 d-flex align-items-center justify-content-between`}
            >
              <Image
                className={styles.axis}
                src={axisBankLogo}
                alt="axis bank logo"
              />
              <Image
                className={styles.icici}
                src={iciciBankLogo}
                alt="icici bank logo"
              />
              <Image className={styles.sbm} src={sbmLogo} alt="sbm bank logo" />
              <Image
                className={styles.visa}
                src={visaLogo}
                alt="visa bank logo"
              />
              <Image
                className={styles.kotak}
                src={kotakLogo}
                alt="kotak bank logo"
              />
              <Image
                className={styles.hdfc}
                src={hdfcLogo}
                alt="hdfc bank logo"
              />
              <Image
                className={styles.rupay}
                src={rupayLogo}
                alt="rupay bank logo"
              />
              <Image
                className={styles.master}
                src={masterCardLogo}
                alt="master card logo"
              />
            </div>
          )}
          {selectedTab === "customers" && (
            <div
              className={`${styles.customer_logo} 
            d-flex align-items-center justify-content-between`}
            >
              <Image className={styles.box} src={box8Logo} alt="box8 logo" />
              <Image
                className={styles.reliance}
                src={relianceRetail}
                alt="reliance retail cry logo"
              />
              <Image
                className={styles.pristyn}
                src={pristynCareLogo}
                alt="pristyn care logo"
              />
              <Image
                className={styles.everest}
                src={everestLogo}
                alt="everest logo"
              />
              <Image
                className={styles.cure}
                src={cureFoodsLogo}
                alt="cure food logo"
              />
              <Image
                className={styles.infra}
                src={infraMarketLogo}
                alt="infra market logo"
              />
              <Image className={styles.dtdc} src={dtdcLogo} alt="dtdc logo" />
              <Image
                className={styles.starbucks}
                src={starBucksLogo}
                alt="star bucks logo"
              />
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default BankSection;
