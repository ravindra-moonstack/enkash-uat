"use client"

import React, { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Heading from "../heading/heading"
import styles from "./payment-link-tab.module.scss"
import arrowUpImg from "./img/arrowup.svg"
import arrowDownImg from "./img/arrowdown.svg"
import RectangleButton from "../buttons/rectangle-button/rectangle-button"

interface PaymentLinkTabProps {
  progressData: {
    itemArray: string[]
    title: string
    descriptionOne?: string
    descriptionTwo?: string
    subtitleOne?: string
    subtitleTwo?: string
    icon: StaticImageData
    bgImage?: string | StaticImageData
    buttonUrl?: string
  }[]
  sectionHeading: string
  secondHeading?: string
}

const PaymentLinkTab = ({
  progressData,
  sectionHeading,
  secondHeading,
}: PaymentLinkTabProps) => {
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
      <div className={`d-md-block d-none  ${styles.sixth_row}`}>
        <div className={styles.tab_section}>
          {/* Section Heading */}
          <div className="d-flex flex-column align-items-center justify-content-center max-w-auto">
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
          <div>
            {/* Tab Selectors */}
            <div
              className={`d-flex mt-md-5 mt-3  ${styles.progress_container}`}
            >
              {progressData.map((data, index) => (
                <div
                  key={index}
                  className={styles.progress_items}
                  style={{
                    backgroundColor:
                      index === selectedItemIndex ? "#F6F6F6" : "#ffff",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedItemIndex(index)}
                >
                  {data.itemArray.map((word, wordIndex) => (
                    <h4
                      key={wordIndex}
                      style={{
                        fontSize: "16px",
                        color:
                          index === selectedItemIndex ? "black" : "#C4C4C4",
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
              style={{
                backgroundImage: `url(${currentBgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "background-image 0.5s ease-in-out",
                height: "100vh",
              }}
            >
              <div className=" max-w-auto">
                <div className=" p-3 py-5 d-flex align-items-start gap-3 col-md-6">
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-circle">
                    <Image
                      src={selectedItem.icon}
                      alt="icon"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="d-flex flex-column gap-5">
                    <Heading
                      title={selectedItem.title}
                      color="black"
                      size="h3"
                      weight="5"
                    />
                    <div className="d-flex flex-column gap-1">
                      {" "}
                      <Heading
                        title={selectedItem.subtitleOne ?? ""}
                        color="black"
                        size="h4"
                        weight="5"
                      />
                      <Heading
                        title={selectedItem.descriptionOne ?? ""}
                        color="grey-200"
                        size="h6"
                        weight="4"
                      />
                    </div>

                    <div className="d-flex flex-column gap-1">
                      <Heading
                        title={selectedItem.subtitleTwo ?? ""}
                        color="black"
                        size="h4"
                        weight="5"
                      />
                      <Heading
                        title={selectedItem.descriptionTwo ?? ""}
                        color="grey-200"
                        size="h6"
                        weight="4"
                      />
                    </div>

                    <div className={`${styles.list_button}`}>
                      <RectangleButton
                        title="Get Started"
                        theme="outline-blue"
                        url="/sales/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ///for mobile... */}
      <div className={`d-md-none d-block  ${styles.sixth_row_mobile}`}>
        <div className={styles.tab_section}>
          {/* Heading */}
          <div className="d-flex flex-column text-center">
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
                        width={274}
                        height={180}
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
                          title={selectedItem.title}
                          color="black"
                          size="h3"
                          weight="5"
                        />
                        <div className="d-flex flex-column gap-1">
                          {" "}
                          <Heading
                            title={selectedItem.subtitleOne ?? ""}
                            color="black"
                            size="h4"
                            weight="5"
                          />
                          <Heading
                            title={selectedItem.descriptionOne ?? ""}
                            color="grey-200"
                            size="h6"
                            weight="4"
                          />
                        </div>

                        <div className="d-flex flex-column gap-1">
                          <Heading
                            title={selectedItem.subtitleTwo ?? ""}
                            color="black"
                            size="h4"
                            weight="5"
                          />
                          <Heading
                            title={selectedItem.descriptionTwo ?? ""}
                            color="grey-200"
                            size="h6"
                            weight="4"
                          />
                        </div>
                        <div className={`${styles.list_button}`}>
                          <RectangleButton
                            title="Get Started"
                            theme="outline-blue"
                            url="/sales/"
                          />
                        </div>
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
            <div className="d-flex flex-column gap-5">
              <Heading
                title={selectedItem.title}
                color="black"
                size="h3"
                weight="5"
              />
              <div className="d-flex flex-column gap-1">
                {" "}
                <Heading
                  title={selectedItem.subtitleOne ?? ""}
                  color="black"
                  size="h4"
                  weight="5"
                />
                <Heading
                  title={selectedItem.descriptionOne ?? ""}
                  color="grey-200"
                  size="h6"
                  weight="4"
                />
              </div>

              <div className="d-flex flex-column gap-1">
                <Heading
                  title={selectedItem.subtitleTwo ?? ""}
                  color="black"
                  size="h4"
                  weight="5"
                />
                <Heading
                  title={selectedItem.descriptionTwo ?? ""}
                  color="grey-200"
                  size="h6"
                  weight="4"
                />
              </div>
              <div className={`${styles.list_button}`}>
                <RectangleButton
                  title="Get Started"
                  theme="outline-blue"
                  url="/sales/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentLinkTab
