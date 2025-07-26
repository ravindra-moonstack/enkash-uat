"use client"

import React, { useState } from "react"
import Image from "next/image"
import Slider from "react-slick"
import styles from "./logo-slider.module.scss"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// ✅ Import all images
// ✅ Also import original (colored) logos
import {
  britishAirways,
  rakuten,
  starbucks,
  prystnCare,
  dtdc,
  reliance,
  mahindraFinance,
  macdonalds,
  pnbHousing,
  adidas,
  tataAig,
  vijaySales,
  behrous,
  britishAirwaysFilled,
  rakutenFilled,
  starbucksFilled,
  prystnCareFilled,
  dtdcFilled,
  relianceFilled,
  mahindraFinancsFilled,
  macdonaldsFilled,
  pnbHousingFilled,
  adidasFilled,
  tataAigFilled,
  vijaySalesFilled,
  behrousFilled,
} from "./index"

// ✅ Use them here
const coloredLogos = [
  britishAirwaysFilled,
  rakutenFilled,
  starbucksFilled,
  prystnCareFilled,
  dtdcFilled,
  relianceFilled,
  mahindraFinancsFilled,
  macdonaldsFilled,
  pnbHousingFilled,
  adidasFilled,
  tataAigFilled,
  vijaySalesFilled,
  behrousFilled,
]

// ✅ Store only the filled image in the array

const logos = [
  {
    filled: britishAirwaysFilled,
    alt: "British Airways",
    className: styles.britishAirways,
  },
  { filled: rakutenFilled, alt: "Rakuten", className: styles.rakuten },
  { filled: starbucksFilled, alt: "Starbucks", className: styles.starbucks },
  {
    filled: prystnCareFilled,
    alt: "Pristyn Care",
    className: styles.prystnCare,
  },
  { filled: dtdcFilled, alt: "DTDC", className: styles.dtdc },
  { filled: relianceFilled, alt: "Reliance", className: styles.reliance },
  {
    filled: mahindraFinancsFilled,
    alt: "Mahindra Finance",
    className: styles.mahindraFinance,
  },
  { filled: macdonaldsFilled, alt: "MacDonalds", className: styles.macdonalds },
  {
    filled: pnbHousingFilled,
    alt: "PNB Housing",
    className: styles.pnbHousing,
  },
  { filled: adidasFilled, alt: "Adidas", className: styles.adidas },
  { filled: tataAigFilled, alt: "Tata AIG", className: styles.tataAig },
  {
    filled: vijaySalesFilled,
    alt: "Vijay Sales",
    className: styles.vijaySales,
  },
  { filled: behrousFilled, alt: "Behrous", className: styles.behrous },
]

// ✅ Store default colored version in the same index order

const LogoSlider = () => {
  const [isHovered, setIsHovered] = useState(false)

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
  centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 8 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
  }

  return (
    <div className="col-12">
      <div className={styles.marquee_box}>
        <Slider {...sliderSettings}>
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className={`d-flex  justify-content-center ${styles.logo_wrapper}`}
            >
              <Image
                className={`${logo.className} ${styles.logo_img}`}
                src={coloredLogos[i % logos.length]}
                alt={logo.alt}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default LogoSlider
