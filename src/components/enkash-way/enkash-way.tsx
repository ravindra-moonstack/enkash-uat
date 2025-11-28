"use client"
import React, { memo, useState } from "react"
import Image, { StaticImageData } from "next/image"

import styles from "./enkash-way.module.scss"
import ellips from "../../../public/svgs/tab-ellips.svg"
import CommonButton from "../buttons"
import DynamicHeading from "../dynamic-heading"
import { FaArrowDown, FaArrowUp } from "react-icons/fa6"

interface EnkashWayProps {
  progressData: {
    itemArray: string[]
    title: string
    description: string
    url?: string
    icon: StaticImageData
    bgImage?: string | StaticImageData
    buttonText?: string
  }[]
  sectionHeading: string
  secondHeading?: string
  secondHeadingColor?: "black" | "white" | "secondry-black"
  subTitle?: string
  progressItemPadding?: string
  buttonText?: string
}

const EnkashWay = ({
  progressData,
  sectionHeading,
  secondHeading,
  subTitle,
  progressItemPadding,
}: EnkashWayProps) => {
  //

  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0)
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
        className={`d-md-block d-none position-relative ${styles.sixth_row}`}
        style={{
          backgroundImage: `url(${currentBgImage})`,
          backgroundSize: "cover", // show full image
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        {/* <div className={styles.blur_bg}></div> */}
        <div className="position-absolute">
          {" "}
          <Image src={ellips} alt={"ellips"} />
        </div>

        <div className={styles.tab_section}>
          {/* Headings */}
          <div className="d-flex flex-column text-center">
            <DynamicHeading
              content={[
                {
                  title: sectionHeading,
                  color: "color-black",
                },
                {
                  title: secondHeading,
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />

            {subTitle && (
              <DynamicHeading
                content={[
                  {
                    title: subTitle,
                    color: "color-black",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />
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
                  <p
                    key={wordIndex}
                    style={{
                      color: index === selectedItemIndex ? "black" : "#C4C4C4",
                      fontWeight: 500,
                      marginBottom: "0px",
                    }}
                  >
                    {word}
                  </p>
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
              <DynamicHeading
                content={[
                  {
                    title: selectedItem.title,
                    color: "color-black",
                  },
                ]}
                headingTag="h4"
                className="f-5"
              />
              <DynamicHeading
                content={[
                  {
                    title: selectedItem.description,
                    color: "color-black",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />

              {selectedItem.url && (
                <div className={`${styles.list_button}`}>
                  <CommonButton
                    title={
                      selectedItem.buttonText
                        ? selectedItem.buttonText
                        : "Learn More"
                    }
                    theme="border-gray"
                    arrow
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
          <div className="d-flex flex-column text-center pb-3">
            <DynamicHeading
              content={[
                {
                  title: sectionHeading,
                  color: "color-black",
                },
                {
                  title: secondHeading,
                  color: "color-equity-blue",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />

            {subTitle && (
              <DynamicHeading
                content={[
                  {
                    title: subTitle,
                    color: "color-black",
                  },
                ]}
                headingTag="p"
                className="mb-0"
              />
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
                    <p
                      style={{
                        color: "#576675",
                        fontWeight: 500,
                        marginBottom: 0,
                      }}
                    >
                      {data.title}
                    </p>

                    {isOpen ? <FaArrowUp /> : <FaArrowDown />}
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
                          <DynamicHeading
                            content={[
                              {
                                title: data.title,
                                color: "color-black",
                              },
                            ]}
                            headingTag="h4"
                            className="f-5"
                          />
                          <DynamicHeading
                            content={[
                              {
                                title: data.description,
                                color: "color-black",
                              },
                            ]}
                            headingTag="p"
                            className="mb-0"
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

export default memo(EnkashWay)
