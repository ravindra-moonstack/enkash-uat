"use client"

import React, { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Heading from "../heading/heading"
import styles from "./enkash-way.module.scss"
import blurImg from "./img/blurBg.png"
import arrowUpImg from "./img/arrowup.svg"
import arrowDownImg from "./img/arrowdown.svg"

interface EnkashWayProps {
  progressData: {
    itemArray: string[]
    title: string
    description: string
    icon: StaticImageData
    bgImage?: string | StaticImageData
  }[]
  sectionHeading: string
  secondHeading?: string
}

const EnkashWay = ({
  progressData,
  sectionHeading,
  secondHeading,
}: EnkashWayProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)
  const selectedItem = progressData[selectedItemIndex]

  const [openIndexes, setOpenIndexes] = useState<number[]>([])
  const toggleOpen = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
    setSelectedItemIndex(index) // also update background
  }

  const currentBgImage =
    typeof selectedItem?.bgImage === "string"
      ? selectedItem.bgImage
      : selectedItem?.bgImage?.src || ""

  return (
    <>
      {/* ///for desktop... */}
      <div
        className={`d-md-block d-none  ${styles.sixth_row}`}
        style={{
          backgroundImage: `url(${currentBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.5s ease-in-out",
          height: "100vh",
        }}
      >
        <div className={styles.blur_bg}>
          <Image src={blurImg} alt="background image" />
        </div>
        <div className={styles.tab_section}>
          {/* Section Heading */}
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Heading
              title={sectionHeading}
              size="h1"
              color="black"
              weight="5"
            />
            <Heading
              title={secondHeading ?? ""}
              size="h1"
              color="equity-blue"
              weight="5"
            />
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
                      : "#ffff",
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
                      marginBottom: "0px",
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
              <Image
                src={selectedItem.icon}
                alt="icon"
                width={55}
                height={55}
              />
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
            <div className="d-flex justify-content-center align-items-center bg-light rounded-circle">
              <Image
                src={selectedItem.icon}
                alt="icon"
                width={55}
                height={55}
              />
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
      {/* ///for mobile... */}
      <div className={`d-md-none d-block  ${styles.sixth_row_mobile}`}>
        <div className={styles.tab_section}>
          {/* Heading */}
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Heading
              title={sectionHeading}
              size="h1"
              color="black"
              weight="5"
            />
          </div>

          {/* Tabs */}
          <div
            className={`d-flex flex-column mt-md-5 mt-3 gap-3 ${styles.progress_container}`}
          >
            {progressData.map((data, index) => {
              const isOpen = openIndexes.includes(index)
              const bgSrc =
                typeof data.bgImage === "string"
                  ? data.bgImage
                  : data.bgImage?.src || ""
              return (
                <div key={index} className={styles.progress_items}>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      backgroundColor: "#fff",
                      cursor: "pointer",
                      padding: "8px",
                      border: "1px solid #F2F2F2",
                      borderRadius: "8px",
                      color: "blue",
                    }}
                    onClick={() => toggleOpen(index)}
                  >
                    <h4
                      style={{
                        fontSize: "16px",
                        color: "#576675",
                        fontWeight: 500,
                        marginBottom: 0,
                      }}
                    >
                      {data.title}
                    </h4>
                    <Image
                      src={isOpen ? arrowUpImg : arrowDownImg}
                      alt={isOpen ? "Arrow up" : "Arrow down"}
                      width={24}
                      height={24}
                    />
                  </div>

                  {/* Dropdown content */}
                  <div
                    className={`${styles.dropdownContent} ${
                      isOpen ? styles.show : ""
                    }`}
                  >
                    {/* small bg image above text */}
                    <div className={styles.dropdownBg}>
                      <Image
                        src={bgSrc}
                        alt="background"
                        width={600}
                        height={200}
                      />
                    </div>
                    <div className="d-flex align-items-start gap-2 mt-2">
                      <Image
                        src={data.icon}
                        alt="icon"
                        width={28}
                        height={28}
                      />
                      <div className="d-flex flex-column gap-2">
                        <Heading
                          title={data.title}
                          color="black"
                          size="h2"
                          weight="5"
                        />
                        <Heading
                          title={data.description}
                          color="black"
                          size="h5"
                          weight="4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop selected content */}
          <div
            className={`${styles.desktopContent} mt-5 px-3 d-flex align-items-start gap-3`}
          >
            <div className="d-flex justify-content-center align-items-center bg-light rounded-circle">
              <Image
                src={selectedItem.icon}
                alt="icon"
                width={55}
                height={55}
              />
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
    </>
  )
}

export default EnkashWay
