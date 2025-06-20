"use client";

import React, { useState } from "react";
import Image from "next/image";
import Heading from "../heading/heading";
import styles from "./enkash-way.module.scss";

interface EnkashWayProps {
  progressData?: {
    itemArray: string[]; // Tab labels
    title: string;
    description: string;
    icon: string; // image path
  }[];
}

const EnkashWay = ({ progressData }: EnkashWayProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div className={styles.content}>
      {/* Tabs */}
      <div className={`d-flex mt-md-5 mt-3 ${styles.progress_container}`}>
        {(progressData || []).map((data, index) => (
          <div
            key={index}
            className={styles.progress_items}
            style={{
              backgroundColor:
                index === selectedItemIndex ? "#E6E9FF" : "transparent",
              cursor: "pointer",
            }}
            onClick={() => setSelectedItemIndex(index)}
          >
            {data.itemArray.map((word, wordIndex) => (
              <div key={wordIndex}>
                <h4
                  style={{
                    fontSize: "20px",
                    color: index === selectedItemIndex ? "black" : "#C4C4C4",
                    fontWeight: 500,
                  }}
                >
                  {word}
                </h4>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.progress_bar}></div>
      {/* Selected Tab Content */}
      <div className="mt-5">
        {progressData && (
          <div
            className={`d-flex align-items-start gap-3 p-3`}
            style={{
              width: "50%",
            }}
          >
            {/* Icon */}
            <div className="d-flex justify-content-center align-items-center bg-light rounded-circle">
              <Image
                src={progressData[selectedItemIndex].icon}
                alt="icon"
                width={55}
                height={55}
              />
            </div>

            {/* Title and Description */}
            <div className="d-flex flex-column gap-3">
              <Heading
                title={progressData[selectedItemIndex].title}
                color="black"
                size="h3"
                weight="5"
              />
              <Heading
                title={progressData[selectedItemIndex].description}
                color="black"
                size="h6"
                weight="4"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnkashWay;
