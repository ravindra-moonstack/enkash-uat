"use client"

import React, { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Heading from "../heading/heading"
import styles from "./enkash-way.module.scss"

interface EnkashWayProps {
  progressData: {
    itemArray: string[]
    title: string
    description: string
    icon: StaticImageData
    bgImage?: string | StaticImageData
  }[]
  sectionHeading: string
}

const EnkashWay = ({ progressData, sectionHeading }: EnkashWayProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)
  const selectedItem = progressData[selectedItemIndex]

  const currentBgImage =
    typeof selectedItem?.bgImage === "string"
      ? selectedItem.bgImage
      : selectedItem?.bgImage?.src || ""

  return (
    <div
      className={styles.sixth_row}
      style={{
        backgroundImage: `url(${currentBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.5s ease-in-out",
        height: "100vh",
      }}
    >
      <div className={styles.tab_section}>
      {/* Section Heading */}
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Heading title={sectionHeading} size="h1" color="black" weight="6" />
      </div>

      {/* Tab Selectors */}
      <div className={`d-flex mt-md-5 mt-3 ${styles.progress_container}`}>
        {progressData.map((data, index) => (
          <div
            key={index}
            className={styles.progress_items}
            style={{
              backgroundColor:
                index === selectedItemIndex
                  ? "rgba(0, 217, 255, 0.2)"
                  : "transparent",
              cursor: "pointer",
            }}
            onClick={() => setSelectedItemIndex(index)}
          >
            {data.itemArray.map((word, wordIndex) => (
              <h4
                key={wordIndex}
                style={{
                  fontSize: "16px",
                  color: index === selectedItemIndex ? "black" : "#C4C4C4",
                  fontWeight: 500,
                }}
              >
                {word}
              </h4>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.progress_bar}></div>

      {/* Selected Content */}
      <div
        className="mt-5 px-3 d-flex align-items-start gap-3"
        style={{ width: "50%" }}
      >
        <div className="d-flex justify-content-center align-items-center bg-light rounded-circle">
          <Image src={selectedItem.icon} alt="icon" width={55} height={55} />
        </div>
        <div className="d-flex flex-column gap-3">
          <Heading
            title={selectedItem.title}
            color="black"
            size="h3"
            weight="5"
          />
          <Heading
            title={selectedItem.description}
            color="black"
            size="h6"
            weight="4"
          />
        </div>
      </div>
      </div>
    </div>
  )
}

export default EnkashWay
