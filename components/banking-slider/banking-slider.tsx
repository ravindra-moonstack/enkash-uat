"use client"

import React from "react"
import Image from "next/image"
import Slider from "react-slick"
import styles from "./banking-slider.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { hdfc, au, axis, dbms, icici, indusind, northEast, rbl } from "./index"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

const logos = [
  { src: hdfc, alt: "HDFC Bank" },
  { src: au, alt: "AU Bank" },
  { src: axis, alt: "Axis Bank" },
  { src: dbms, alt: "DBS Bank" },
  { src: icici, alt: "ICICI Bank" },
  { src: indusind, alt: "IndusInd Bank" },
  { src: northEast, alt: "North East Bank" },
  { src: rbl, alt: "RBL Bank" },
]

const BankLogoSlider = () => {
  const sliderSettings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 8 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  }

  return (
    <div className={`col-12 ${styles.banking_wrapper}`}>
      <div className={`${styles.title} text-center  pb-3 `}>
        <DynamicHeading
          content={[
            {
              title: "Connect Instantly with ",
              color: "color-black",
            },
            {
              title: "Top Indian Banks",
              color: "color-equity-blue",
            },
          ]}
          headingTag="h2"
          className="f-6"
        />
      </div>
      <div className={styles.marquee_box}>
        <Slider {...sliderSettings}>
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className={`d-flex justify-content-center ${styles.logo_wrapper}`}
            >
              <Image
                className={styles.logo_img}
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default BankLogoSlider
