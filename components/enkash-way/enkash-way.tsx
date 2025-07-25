"use client"

import React, { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Heading from "../heading/heading"
import styles from "./enkash-way.module.scss"
import arrowUpImg from "./img/arrowup.svg"
import arrowDownImg from "./img/arrowdown.svg"
import RectangleButton from "../buttons/rectangle-button/rectangle-button"
import { blueArrow, whiteArrow } from "."

interface EnkashWayProps {
  progressData: {
    itemArray: string[]
    title: string
    description: string
    url?: string
    icon: StaticImageData
    bgImage?: string | StaticImageData
  }[]
  sectionHeading: string
  secondHeading?: string
  secondHeadingColor?: "black" | "white" | "secondry-black"
  subTitle?: string
  progressItemPadding?: string
}

const EnkashWay = ({
  progressData,
  sectionHeading,
  secondHeading,
  secondHeadingColor,
  subTitle,
  progressItemPadding,
}: EnkashWayProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)
  const selectedItem = progressData[selectedItemIndex]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
    setSelectedItemIndex(index) // update desktop bg too
  }

  const currentBgImage =
    typeof selectedItem?.bgImage === "string"
      ? selectedItem.bgImage
      : selectedItem?.bgImage?.src || ""

  return (
    <>
      {/* DESKTOP */}
      <div
        className={`d-md-block d-none ${styles.sixth_row}`}
        style={{
          backgroundImage: `url(${currentBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className={styles.blur_bg}></div>

        <div className={styles.tab_section}>
          {/* Headings */}
          <div className="d-flex flex-column text-center">
            <Heading
              title={sectionHeading}
              size="h1"
              color="black"
              weight="5"
            />
            {secondHeading && (
              <Heading
                title={secondHeading}
                size="h1"
                color={secondHeadingColor || "equity-blue"}
                weight="5"
              />
            )}
            {subTitle && (
              <Heading title={subTitle} size="h5" color="black" weight="5" />
            )}
          </div>

          {/* Tabs */}
          <div className={`d-flex mt-md-5 mt-3 ${styles.progress_container}`}>
            {progressData.map((data, index) => (
              <div
                key={index}
                className={styles.progress_items}
                style={{
                  padding: progressItemPadding || undefined, // 👈 new dynamic padding
                  backgroundColor:
                    index === selectedItemIndex
                      ? "rgba(0, 217, 255, 0.2)"
                      : "#fff",
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
              {selectedItem.url && (
                <div className={`${styles.list_button}`}>
                  <RectangleButton
                    title="Learn More"
                    theme="border-gray"
                    actionImage={blueArrow}
                    hoverImage={whiteArrow}
                    url={selectedItem.url}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className={`d-md-none d-block ${styles.sixth_row_mobile}`}>
        <div className={styles.tab_section}>
          {/* Heading */}
          <div className="d-flex flex-column text-center">
            <Heading
              title={sectionHeading}
              size="h1"
              color="black"
              weight="5"
            />
            {secondHeading && (
              <Heading
                title={secondHeading}
                size="h1"
                color={secondHeadingColor || "equity-blue"}
                weight="5"
              />
            )}
            {subTitle && (
              <Heading title={subTitle} size="h5" color="black" weight="5" />
            )}
          </div>

          {/* Accordions */}
          <div
            className={`d-flex flex-column mt-md-5 mt-3 gap-3 ${styles.progress_container}`}
          >
            {progressData.map((data, index) => {
              const isOpen = openIndex === index
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

                  {isOpen && (
                    <div className={`${styles.dropdownContent} ${styles.show}`}>
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
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default EnkashWay
