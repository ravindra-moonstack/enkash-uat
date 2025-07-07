"use client"

import React, { useState } from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import styles from "./logo-slider.module.scss"

import {
  britishAirways,
  britishAirwaysFilled,
  rakuten,
  rakutenFilled,
  starbucks,
  starbucksFilled,
  prystnCare,
  prystnCareFilled,
  dtdc,
  dtdcFilled,
  reliance,
  relianceFilled,
  mahindraFinance,
  mahindraFinancsFilled,
  macdonalds,
  macdonaldsFilled,
  pnbHousing,
  pnbHousingFilled,
  adidas,
  adidasFilled,
  tataAig,
  tataAigFilled,
  vijaySales,
  vijaySalesFilled,
  behrous,
  behrousFilled,
} from "./index"

const logos = [
  {
    default: britishAirways,
    hover: britishAirwaysFilled,
    alt: "British Airways",
    className: styles.britishAirways,
  },
  {
    default: rakuten,
    hover: rakutenFilled,
    alt: "Rakuten",
    className: styles.rakuten,
  },
  {
    default: starbucks,
    hover: starbucksFilled,
    alt: "Starbucks",
    className: styles.starbucks,
  },
  {
    default: prystnCare,
    hover: prystnCareFilled,
    alt: "Pristyn Care",
    className: styles.prystnCare,
  },
  {
    default: dtdc,
    hover: dtdcFilled,
    alt: "DTDC",
    className: styles.dtdc,
  },
  {
    default: reliance,
    hover: relianceFilled,
    alt: "Reliance",
    className: styles.reliance,
  },
  {
    default: mahindraFinance,
    hover: mahindraFinancsFilled,
    alt: "Mahindra Finance",
    className: styles.mahindraFinance,
  },
  {
    default: macdonalds,
    hover: macdonaldsFilled,
    alt: "MacDonalds",
    className: styles.macdonalds,
  },
  {
    default: pnbHousing,
    hover: pnbHousingFilled,
    alt: "PNB Housing",
    className: styles.pnbHousing,
  },
  {
    default: adidas,
    hover: adidasFilled,
    alt: "Adidas",
    className: styles.adidas,
  },
  {
    default: tataAig,
    hover: tataAigFilled,
    alt: "Tata AIG",
    className: styles.tataAig,
  },
  {
    default: vijaySales,
    hover: vijaySalesFilled,
    alt: "Vijay Sales",
    className: styles.vijaySales,
  },
  {
    default: behrous,
    hover: behrousFilled,
    alt: "Behrous",
    className: styles.behrous,
  },
]

const LogoSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [clicked, setClicked] = useState(false)

  const getLogoSrc = (index: number, logo: any) => {
    if (clicked) return logo.hover
    if (hoveredIndex === index) return logo.hover
    return logo.default
  }

  return (
    <div className="col-12" onClick={() => setClicked(!clicked)}>
      <div className={styles.marquee_box}>
        <Marquee speed={80} gradient={false}>
          <div
            className={`${styles.bank_logo} ${styles.customer_logo} d-flex align-items-center justify-content-between`}
          >
            {[...logos, ...logos].map((logo, i) => (
              <Image
                key={i}
                className={logo.className}
                src={getLogoSrc(i, logo)}
                alt={logo.alt}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default LogoSlider
