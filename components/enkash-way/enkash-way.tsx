"use client";

import Heading from "../heading/heading";
import { space } from "../../constant/common";
import Image from "next/image";
import { blueArrowForward, newWay, oldWay } from ".";
import styles from "./enkash-way.module.scss";
import React, { useState } from "react";

interface EnkashWayProps {
  progressData?: {
    item: string;
    oldWayDescription: string;
    newWayDescription: string;
  }[];
}

const EnkashWay = ({ progressData }: EnkashWayProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleArrowClick = () => {
    if (selectedItemIndex < progressData!.length - 1) {
      setSelectedItemIndex((prevIndex) => prevIndex + 1);
    } else {
      setSelectedItemIndex(0);
    }
  };

  const getProgressBarStyle = (
    selectedItem: number,
    totalItems: number | undefined
  ) => {
    if (!totalItems) return {};

    const percentage = 100 / totalItems;
    const startColor = selectedItem * percentage + "%";
    const endColor = (selectedItem + 1) * percentage + "%";

    return {
      background: `linear-gradient(90deg, #000000 0%, #000000 ${startColor}, #1c5af4 ${startColor}, #1c5af4 ${endColor}, #000000 ${endColor}, #000000 100%)`,
    };
  };

  return (
    <>
      <div
        className={`d-flex flex-column flex-md-row justify-content-center align-items-center text-center`}
      >
        <Heading
          title={`The EnKash Way is${space}`}
          color="black"
          size="h1"
          weight="6"
        />
        <Heading
          title="the better way."
          size="h1"
          color="equity-blue"
          weight="6"
        />
      </div>
      <div className="d-flex justify-content-center mb-5 text-center">
        <Heading
          title="Switch to EnKash today!"
          color="black"
          size="h1"
          weight="6"
        />
      </div>
      <div className={styles.content}>
        <div className={`d-flex my-md-5 my-3 ${styles.progress_container}`}>
          {(progressData || []).map((data, index) => (
            <div key={index} className={styles.progress_items}>
              {data.item.split(" ").map((word, wordIndex) => (
                <div key={wordIndex}>
                  <Heading
                    title={word}
                    size="h4"
                    color={
                      index === selectedItemIndex ? "equity-blue" : "black"
                    }
                    weight="7"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          className={styles.progress_bar}
          style={getProgressBarStyle(selectedItemIndex, progressData?.length)}
        ></div>

        <div className="d-flex flex-column flex-lg-row my-5 align-items-center justify-content-center">
          <div className={styles.old_way_container}>
            <Image
              className="img-fluid"
              src={oldWay}
              alt="enkash steps"
              width={550}
            />
            <div className={styles.old_way_text}>
              {progressData &&
                progressData[selectedItemIndex].oldWayDescription}
            </div>
          </div>

          <Image
            className={`img-fluid ${styles.arrow}`}
            src={blueArrowForward}
            alt="enkash steps"
            onClick={handleArrowClick}
          />
          <div className={styles.new_way_container}>
            <Image
              className="img-fluid"
              src={newWay}
              alt="enkash steps"
              width={550}
            />
            <div className={styles.new_way_text}>
              {progressData &&
                progressData[selectedItemIndex].newWayDescription}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnkashWay;
