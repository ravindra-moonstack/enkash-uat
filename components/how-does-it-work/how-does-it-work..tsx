"use client"

import { Key, useEffect, useState } from "react"
import styles from "./how-does-it-work.module.scss"
import Image from "next/image"
import blueArrow from "./blue-arrrow.svg"
import RectangleButton from "../buttons/rectangle-button"
import { whiteArrow } from "../all-in-one-policy"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import { useSalesUrl } from "@/common/utils/useSalesUrl"

interface howDoesItWorkProps {
  dataSets: any
  ctaText?: string

}

const HowDoesItWork = ({ dataSets, ctaText }: howDoesItWorkProps) => {
  const salesUrl = useSalesUrl()

  const [currentData, setCurrentData] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData((prevData: number) => (prevData + 1) % dataSets.length)
    }, 7500)

    return () => clearInterval(interval)
  }, [dataSets.length])

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
          <div className={`row`}>
            <div className="col-md-6 col-12">
              <div className="mt-md-5 mt-3 mb-3 d-flex gap-3 gap-md-0 flex-md-row">
                {dataSets[currentData].iconSrc && (
                  <Image
                    src={dataSets[currentData].iconSrc}
                    alt={dataSets[currentData].altText || "icon"}
                    className={styles.icon_img}
                  />
                )}
                <div className="text-start">
                  <div className={styles.title}>
                    <DynamicHeading
                      content={[
                        {
                          title: dataSets[currentData].title,
                          color: "color-white",
                        },
                      ]}
                      headingTag="h5"
                      className="f-5 mb-2"
                    />
                  </div>
                  <div className={styles.subtitle}>
                    <DynamicHeading
                      content={[
                        {
                          title: dataSets[currentData].subtitle,
                          color: "color-white",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 f-4"
                    />
                  </div>
                  <div className="mt-3 mt-md-5">
                    <RectangleButton
                      title={ctaText || "Get Started"}
                      theme="border-black"
                      actionImage={blueArrow}
                      hoverImage={whiteArrow}
                      iconSize={15}
                      url={dataSets[currentData]?.linkUrl || salesUrl}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center">
              <Image
                style={{
                  maxHeight: dataSets[currentData].imageMaxHeight || "300px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                src={dataSets[currentData].imageSrc}
                alt={dataSets[currentData].altText}
                className={styles.right_img}
              />
            </div>
          </div>

          <div
            className={`d-flex justify-content-center ${styles.progress_bar}`}
          >
            {dataSets.map((_: any, index: Key) => (
              <span
                key={index}
                className={`${styles.bar} ${currentData === index ? "bg-equity-blue" : "bg-shadow-blue"
                  } cursor-pointer`}
                onClick={() => handleSpanClick(index as number)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowDoesItWork
