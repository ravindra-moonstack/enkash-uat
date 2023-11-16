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
          <Image src={axisBankLogo} width={150} alt="axis bank logo" />
          <Image width={150} src={iciciBankLogo} alt="axis bank logo" />
          <Image width={150} src={sbmLogo} alt="axis bank logo" />
          <Image width={70} src={visaLogo} alt="axis bank logo" />
          <Image width={130} src={kotakLogo} alt="axis bank logo" />
          <Image width={65} src={hdfcLogo} alt="axis bank logo" />
          <Image width={100} src={rupayLogo} alt="axis bank logo" />
          <Image width={90} src={masterCardLogo} alt="axis bank logo" />
        </div>
      )}
      {selectedTab === "customers" && (
        <div
          className={`${styles.customer_logo} 
            animate__animated mb-3 d-flex align-items-center justify-content-between`}
        >
          <Image width={100} src={box8Logo} alt="axis bank logo" />
          <Image width={100} src={firstCryLogo} alt="axis bank logo" />
          <Image width={100} src={landmarkLogo} alt="axis bank logo" />
          <Image width={120} src={everestLogo} alt="axis bank logo" />
          <Image width={120} src={cureFoodsLogo} alt="axis bank logo" />
          <Image width={140} src={infraMarketLogo} alt="axis bank logo" />
        </div>
      )}
    </>
  );
};

export default BankSection;
