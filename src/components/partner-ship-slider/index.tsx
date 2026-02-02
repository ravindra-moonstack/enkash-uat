"use client"
import type React from "react"
import { useRef, useMemo } from "react"
import Image from "next/image"
import Slider, { Settings } from "react-slick"

import styles from "./PartnershipSlider.module.scss"

interface SlideData {
  id: number
  icon: string
  title: string
  description: string
  button?: {
    text: string
    url: string
  }
}

type PartnershipSliderProps = {
  slides: SlideData[]
}

const PartnershipSlider: React.FC<PartnershipSliderProps> = ({ slides }) => {
  const sliderRef = useRef<Slider>(null)

  const settings: Settings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: false,
      draggable: true, // 👈 lowercase, TS + react-slick correct
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    []
  )

  return (
    <div className={styles.partnershipSlider}>
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slideContainer}>
            <div className={styles.slideCard}>
              <div className={styles.slideIcon}>
                <Image
                  src={slide.icon}
                  alt={slide.title}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className={styles.slideTitle}>{slide.title}</h3>
              <p className={styles.slideDescription}>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PartnershipSlider
