"use client"
import React, { useMemo, useState, useEffect, useRef } from "react"
import Image from "next/image"
import Slider, { Settings } from "react-slick"

import styles from "./logo-slider.module.scss"
import "slick-carousel/slick/slick.css"
import "@/src/styles/slick-theme.css"

import { logos, coloredLogos } from "./data"

const LogoSlider = (): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: "200px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
    <div className={styles.marquee_box} ref={containerRef}>
      {isVisible ? (
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
                quality={80}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className={styles.static_logos_row}>
          {logos.slice(0, 10).map((logo, i) => (
            <div
              key={i}
              className={`d-flex justify-content-center ${styles.logo_wrapper}`}
            >
              <Image
                className={`${logo.className} ${styles.logo_img}`}
                src={coloredLogos[i]}
                alt={logo.alt}
                width={150}
                height={60}
                sizes="(max-width: 768px) 100px, 150px"
                quality={80}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LogoSlider
