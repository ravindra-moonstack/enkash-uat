"use client"
import React, { useMemo } from "react"
import Image from "next/image"
import Slider, { Settings } from "react-slick"

import styles from "./logo-slider.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { logos, coloredLogos } from "./data"

const LogoSlider = (): React.JSX.Element => {
  //

  const sliderSettings: Settings = useMemo(
    () => ({
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
    }),
    []
  )

  return (
    <div className={styles.marquee_box}>
      <Slider {...sliderSettings}>
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className={`d-flex  justify-content-center  ${styles.logo_wrapper}`}
          >
            <Image
              className={`${logo.className} ${styles.logo_img}`}
              src={coloredLogos[i % logos.length]}
              alt={logo.alt}
              width={150}
              height={60}
              sizes="(max-width: 768px) 100px, 150px"
              quality={65}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default LogoSlider
