"use client";

import Heading from "@/components/heading/heading";
import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import styles from "@/app/page.module.scss";

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
} from "@/app/index";

const BankSection = () => {
  const [selectedTab, setSelectedTab] = useState("partners");

  const handleTabClick = (tab: SetStateAction<string>) => {
    setSelectedTab(tab);
  };
  return (
    <>
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

      {selectedTab === "partners" && (
        <div
          className={`${styles.bank_logo} 
            animate__animated mb-3 d-flex align-items-center justify-content-between`}
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
          <Image className={styles.visa} src={visaLogo} alt="visa bank logo" />
          <Image
            className={styles.kotak}
            src={kotakLogo}
            alt="kotak bank logo"
          />
          <Image className={styles.hdfc} src={hdfcLogo} alt="hdfc bank logo" />
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
            animate__animated mb-3 d-flex align-items-center justify-content-between`}
        >
          <Image className={styles.box} src={box8Logo} alt="box8 logo" />
          <Image
            className={styles.firstcry}
            src={firstCryLogo}
            alt="first cry logo"
          />
          <Image
            className={styles.landmark}
            src={landmarkLogo}
            alt="landmark logo"
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
        </div>
      )}
    </>
  );
};

export default BankSection;
