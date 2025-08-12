"use client"
import React from "react"
import Slider, { Settings } from "react-slick"
import styles from "./testimonialSlider.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import TestimonialCard from "../testimonialCard/testimonialCard"
import { StaticImageData } from "next/image"

interface TestimonialItem {
  icon: string | StaticImageData
  description: string
  name: string
  position: string
  testimonialImg: string | StaticImageData
}

interface TestimonialSliderProps {
  testimonials: TestimonialItem[]
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  const sliderSettings: Settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnHover: true,
  }

  return (
    <div className={`col-12 ${styles.banking_wrapper}`}>
      <div className={styles.marquee_box}>
        <Slider {...sliderSettings}>
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              icon={item.icon}
              description={item.description}
              name={item.name}
              position={item.position}
              testimonialImg={item.testimonialImg}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TestimonialSlider
