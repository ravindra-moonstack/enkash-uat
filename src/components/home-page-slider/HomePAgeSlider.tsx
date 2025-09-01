"use client"

import React, { useMemo } from "react"
import Slider, { Settings } from "react-slick"
import styles from "./homePageSlider.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { StaticImageData } from "next/image"
import AdidasCard from "../adidas-card/AdidasCard"

interface TestimonialItem {
  image: string | StaticImageData
  title1: string
  title2: string
  description: string
  name: string
  role: string
  profileImg: string | StaticImageData
  rightTopIcon?: string | StaticImageData
  backLogo?: string | StaticImageData
  ourlayClass?: string
}

interface HomePageSliderProps {
  testimonials: TestimonialItem[]
  slidesToShow?: number
}

const HomePageSlider: React.FC<HomePageSliderProps> = ({
  testimonials,
  slidesToShow = 2,
}) => {
const sliderSettings: Settings = useMemo(
  () => ({
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  }),
  [slidesToShow] 
)

  return (
    <div className={`col-12 ${styles.banking_wrapper}`}>
      <div className={styles.marquee_box}>
        <Slider {...sliderSettings} className={styles.custom_slider}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.slide_item}>
              <AdidasCard
                image={typeof item.image === "string" ? item.image : item.image.src}
                title1={item.title1}
                title2={item.title2}
                description={item.description}
                name={item.name}
                role={item.role}
                profileImg={
                  typeof item.profileImg === "string"
                    ? item.profileImg
                    : item.profileImg.src
                }
                rightTopIcon={
                  item.rightTopIcon &&
                  (typeof item.rightTopIcon === "string"
                    ? item.rightTopIcon
                    : item.rightTopIcon.src)
                }
                backLogo={
                  item.backLogo
                    ? typeof item.backLogo === "string"
                      ? item.backLogo
                      : item.backLogo.src
                    : ""
                }
                ourlayClass={item.ourlayClass}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default HomePageSlider
