"use client";

import React, { useState } from "react";
import {
  bfsi,
  cnbc,
  fintectFestival,
  forwardArrow,
  forwardBackward,
  inc42,
  nasscom,
  npci,
  paymentAndCardSummit,
} from "@/app";
import Heading from "../heading/heading";
import styles from "@/app/page.module.scss";
import Image from "next/image";

const AwardSection = () => {
  const [currentRow, setCurrentRow] = useState(1);

  const handleForwardClick = () => {
    if (currentRow < 3) {
      setCurrentRow((prevRow) => prevRow + 1);
    }
  };

  const handleBackwardClick = () => {
    if (currentRow > 1) {
      setCurrentRow((prevRow) => prevRow - 1);
    }
  };
  return (
    <div>
      <div className="text-center mb-5">
        <div className="d-flex flex-column">
          <Heading title="Awards & Accolades" color="equity-blue" size="h1" />
        </div>

        <div className={styles.arrow_mobile_container}>
          <Image
            src={forwardBackward}
            alt="forward arrow"
            className={styles.left}
            onClick={handleBackwardClick}
            style={{
              cursor: currentRow === 1 ? "not-allowed" : "pointer",
              opacity: currentRow === 1 ? 0.5 : 1,
            }}
          />
          <Image
            src={forwardArrow}
            alt="forward arrow"
            className={styles.right}
            onClick={handleForwardClick}
            style={{
              cursor: currentRow === 3 ? "not-allowed" : "pointer",
              opacity: currentRow === 3 ? 0.5 : 1,
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-md-between justify-content-center">
        <div className={styles.arrow_desktop_container}>
          <Image
            src={forwardBackward}
            alt="forward arrow"
            className={styles.left}
            onClick={handleBackwardClick}
            style={{
              cursor: currentRow === 1 ? "not-allowed" : "pointer",
              opacity: currentRow === 1 ? 0.5 : 1,
            }}
          />
        </div>
        <div className={`px-md-5 ${currentRow !== 3 ? "" : "flex-grow-1"}`}>
          {currentRow === 1 && (
            <div
              className={`d-flex flex-column flex-md-row justify-content-center text-center ${styles.box}`}
            >
              <div
                className={`d-flex flex-column justify-content-between ${styles.box_item}`}
              >
                <div className="mb-3">
                  <Heading
                    title="Amongst top 200 global fintech companies by CNBC"
                    color="black"
                    size="h6"
                  />
                </div>
                <div>
                  <Image src={cnbc} alt="cnbc logo" loading="lazy" />
                </div>
              </div>
              <div
                className={`d-flex flex-column bg-black justify-content-between ${styles.box_item}`}
              >
                <div className="mb-3">
                  <Heading
                    title="Best Platform for SME Financial Growth at the 4th Annual BFSI Excellence Award"
                    color="electric-green"
                    size="h6"
                  />
                </div>
                <div>
                  <Image src={bfsi} alt="BFSI Excellence Award image" />
                </div>
              </div>
              <div
                className={`d-flex flex-column justify-content-between ${styles.box_item}`}
              >
                <div className="mb-3">
                  <Heading
                    title="Preferred Partner by NPCI"
                    color="black"
                    size="h6"
                  />
                </div>
                <div>
                  <Image src={npci} alt="NPCI logo" loading="lazy" />
                </div>
              </div>
            </div>
          )}
          {currentRow === 2 && (
            <div
              className={`d-flex flex-column flex-md-row justify-content-center text-center ${styles.box}`}
            >
              <div
                className={`d-flex flex-column justify-content-between ${styles.box_item}`}
              >
                <div className="mb-3">
                  <Heading
                    title="Best B2B Solution Provider at 8th Edition of Payments and Cards Summit"
                    color="black"
                    size="h6"
                  />
                </div>
                <div>
                  <Image
                    src={paymentAndCardSummit}
                    alt="8th Edition of Payments and Cards Summit"
                    loading="lazy"
                  />
                </div>
              </div>
              <div
                className={`d-flex flex-column bg-black justify-content-between ${styles.box_item}`}
              >
                <div className="mb-3">
                  <Heading
                    title="Winner under the Payments Category at NASSCOM India Fintech 2020"
                    color="electric-green"
                    size="h6"
                  />
                </div>
                <div>
                  <Image src={nasscom} alt="nasscom logo" loading="lazy" />
                </div>
              </div>
              <div
                className={`d-flex flex-column  justify-content-between ${styles.box_item}`}
              >
                <div className="mb-3">
                  <Heading
                    title="Best White Label Technology Provider of the Year for CardX by Fintech Festival India Awards 2022"
                    color="black"
                    size="h6"
                  />
                </div>
                <div>
                  <Image
                    src={fintectFestival}
                    alt="Fintech Festival India Awards 2022"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}
          {currentRow === 3 && (
            <div
              className={`d-flex flex-column flex-md-row  justify-content-center text-center ${styles.box}`}
            >
              <div
                className={`d-flex flex-column justify-content-between ${styles.box_item}`}
              >
                <div className="mb-3">
                  <Heading
                    title="Startups to Watch for by Inc42"
                    color="black"
                    size="h6"
                  />
                </div>
                <div>
                  <Image src={inc42} alt="Inc42 logo" loading="lazy" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.arrow_desktop_container}>
          <Image
            src={forwardArrow}
            alt="forward arrow"
            className={styles.right}
            onClick={handleForwardClick}
            style={{
              cursor: currentRow === 3 ? "not-allowed" : "pointer",
              opacity: currentRow === 3 ? 0.5 : 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
