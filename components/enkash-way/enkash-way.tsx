"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heading from "../heading/heading";
import { space } from "../../constant/common";
import { blueArrowForward, gradient, newWay, oldWay } from ".";
import styles from "./enkash-way.module.scss";

interface EnkashWayProps {
  progressData?: {
    itemArray: string[];
    oldWayDescription: string;
    newWayDescription: string;
  }[];
}

const EnkashWay = ({ progressData }: EnkashWayProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [oldWayAnimationClassName, setOldWayAnimationClassName] = useState("");
  const [newWayAnimationClassName, setNewWayAnimationClassName] = useState("");
  const [arrowClassName, setArrowClassName] = useState("");

  useEffect(() => {
    if (selectedItemIndex >= -1) {
      setOldWayAnimationClassName(styles.left_to_right);
      setArrowClassName(styles.left_to_right_arrow);
      setNewWayAnimationClassName(styles.right_to_left);
    }
  }, [selectedItemIndex]);

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
        className={`d-flex position-relative flex-column flex-md-row justify-content-center align-items-center text-center`}
      >
        <Image
          src={gradient}
          alt="background gradient image"
          className={styles.gradient}
        />
        <Heading
          title={`The EnKash way is${space}`}
          color="black"
          size="h1"
          weight="6"
        />
        <Heading
          title="the better way"
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
            <div
              key={index}
              className={styles.progress_items}
              onClick={() => setSelectedItemIndex(index)}
            >
              {data.itemArray.map((word, wordIndex) => (
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
          <div
            key={selectedItemIndex + "old-way"}
            className={`${styles.old_way_container} ${oldWayAnimationClassName}`}
          >
            <Image
              className="img-fluid"
              src={oldWay}
              alt="enkash steps"
              width={550}
            />
            <div
              key={selectedItemIndex + "old-way-text"}
              className={styles.old_way_text}
            >
              {progressData &&
                progressData[selectedItemIndex].oldWayDescription}
            </div>
          </div>

          <Image
            key={selectedItemIndex + "arrow"}
            className={`img-fluid ${styles.arrow} ${arrowClassName}`}
            src={blueArrowForward}
            alt="enkash steps"
          />
          <div
            key={selectedItemIndex + "new-way"}
            className={`${styles.new_way_container} ${newWayAnimationClassName}`}
          >
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
