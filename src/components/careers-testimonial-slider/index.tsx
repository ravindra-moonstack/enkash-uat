"use client"
import React from "react"
import Slider from "react-slick"
import Image from "next/image"

import "slick-carousel/slick/slick.css"
import "@/src/styles/slick-theme.css"
import styles from "./CareersTestimonialSlider.module.scss"

import { testimonials } from "./data"

const CareerTestimonialSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <div
      className={`${styles.careerTestimonialSliderOuters} career-testimonial-slider max-w-5xl mx-auto`}
    >
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className={`${styles.sliderContentBoxOuter}`}>
            {/* Left side - Blue Box */}
            <div className={`${styles.sliderContentBox} sliderContentBoxData`}>
              <span className={`${styles.sliderContentTopIcon}`}>
                <svg
                  width="67"
                  height="68"
                  viewBox="0 0 67 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.12">
                    <path
                      d="M50.8474 34.5322C57.157 34.5322 61.409 39.0006 61.409 45.6214C61.409 51.5793 56.522 56.5428 49.9029 56.5428C42.6528 56.5428 37.2957 50.5849 37.2957 41.4844C37.2957 20.7995 52.1093 12.5256 61.409 11.5312V20.6318C55.1034 21.7898 48.014 28.2428 47.6965 35.3628C48.014 35.1992 49.272 34.5322 50.8474 34.5322ZM18.7002 34.5322C25.0019 34.5322 29.2579 39.0006 29.2579 45.6214C29.2579 51.5793 24.3709 56.5428 17.7518 56.5428C10.5017 56.5428 5.14453 50.5849 5.14453 41.4844C5.14453 20.7995 19.9582 12.5256 29.2579 11.5312V20.6318C22.9522 21.7898 15.8629 28.2428 15.5454 35.3628C15.8629 35.1992 17.1208 34.5322 18.7002 34.5322Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </span>
              <div className={`${styles.sliderContentBoxIcon}`}>★★★★★</div>
              <p className={`${styles.sliderContentBoxcontents}`}>“{t.text}”</p>
              <div>
                <p className={`${styles.sliderContentBoxName}`}>{t.name}</p>
                <p className={`${styles.sliderContentBoxRole}`}>{t.role}</p>
              </div>
            </div>

            {/* Right side - Image */}
            <div
              className={`${styles.sliderContentBoxImage} sliderContentBoxImageOuter`}
            >
              <Image
                src={t.image}
                alt={t.name}
                width={400}
                height={400}
                className=""
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CareerTestimonialSlider
