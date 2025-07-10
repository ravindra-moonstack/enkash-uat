"use client"

import { Key, useEffect, useState } from "react"
import styles from "./how-does-it-work.module.scss"
import Image from "next/image"
import blueArrow from "./blue-arrrow.svg"
import RectangleButton from "../buttons/rectangle-button/rectangle-button"

interface howDoesItWorkProps {
  dataSets: any
}

const HowDoesItWork = ({ dataSets }: howDoesItWorkProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData((prevData: number) => (prevData + 1) % dataSets.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const [currentData, setCurrentData] = useState(0)

  const handleSpanClick = (index: number) => {
    setCurrentData(index)
  }

  return (
    <div className={styles.home_container}>
      <div
        className={`d-flex col-12 flex-column flex-md-row align-items-center ${styles.card}`}
      >
        <div
          className={`d-flex flex-column align-items-md-center ${styles.card_container}`}
        >
          {" "}
          <div className={`row`}>
            <div className="col-md-6 col-12">
              <div className="mt-md-5 mt-3 mb-3 d-flex flex-column flex-md-row">
                {dataSets[currentData].iconSrc ? (
                  <Image
                    src={dataSets[currentData].iconSrc}
                    alt={dataSets[currentData].altText || "icon"}
                    className={`${styles.icon_img}`}
                  />
                ) : null}
                <div className="text-start">
                  <div className={styles.title}>
                    {dataSets[currentData].title}
                  </div>
                  <div className={styles.subtitle}>
                    {dataSets[currentData].subtitle}
                  </div>
                </div>
              </div>
              <div className="mt-5 ">
                <RectangleButton
                  title="Learn More"
                  theme="border-black"
                  actionImage={blueArrow}
                  iconSize={15}
                  url="/sales/?source=receivables"
                />
              </div>{" "}
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center">
              {" "}
              <Image
                style={{
                  maxHeight: dataSets[currentData].imageMaxHeight || "300px", // default fallback
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                src={dataSets[currentData].imageSrc}
                alt={dataSets[currentData].altText}
                className={`${styles.right_img}`}
              />
            </div>
          </div>
          <div
            className={`d-flex justify-content-center ${styles.progress_bar}`}
          >
            {dataSets.map((_: any, index: Key | null | undefined) => (
              <span
                key={index}
                className={`${styles.bar} ${
                  currentData === index ? "bg-equity-blue" : "bg-shadow-blue"
                } cursor-pointer`}
                onClick={() => handleSpanClick(index as number)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowDoesItWork
