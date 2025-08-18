"use client"

import React, { useState } from "react"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./CareersTestimonialSlider.module.scss"
import { voicesEnkash1, voicesEnkash2, voicesEnkash3, voicesEnkash4, voicesEnkash5 } from "."

interface Testimonial {
  name: string
  description: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Anand Kumar",
    description:
      "Being part of EnKash for over six years has been an incredible journey of learning, collaboration, and innovation. I’m proud to contribute to a company that values people, ideas, and growth every single day.",
    image: voicesEnkash1.src,
  },
  {
    name: "Rahul Sharma",
    description: "I love working here, the team is collaborative and supportive.",
    image: voicesEnkash2.src,
  },
  {
    name: "Priya Verma",
    description: "The culture encourages innovation and bold ideas.",
    image: voicesEnkash3.src,
  },
  {
    name: "Amit Gupta",
    description: "Leadership is inspiring and always approachable.",
    image: voicesEnkash4.src,
  },
  {
    name: "Amit Gupta",
    description: "Leadership is inspiring and always approachable.",
    image: voicesEnkash5.src,
  },
]

const CareersTestimonialSlider = () => {
  const [nav1, setNav1] = useState<Slider | null>(null)
  const [nav2, setNav2] = useState<Slider | null>(null)

  return (
    <div className={`d-flex ${styles.sliderWrapper}`}>
      {/* Text Slider */}
      <div className={styles.textSlider}>
        <Slider
          asNavFor={nav2 as Slider}
          ref={(slider) => setNav1(slider)}
          arrows={false}
          fade
          adaptiveHeight
        >
          {testimonials.map((item, index) => (
            <div key={index} className={styles.textCard}>
              <p className="mb-3">{item.description}</p>
              <strong>{item.name}</strong>
            </div>
          ))}
        </Slider>
      </div>

      {/* Image Slider */}
      <div className={styles.imageSlider}>
        <Slider
          asNavFor={nav1 as Slider}
          ref={(slider) => setNav2(slider)}
          slidesToShow={5}
          swipeToSlide
          focusOnSelect
          centerMode
          arrows={false}
        >
          {testimonials.map((item, index) => (
            <div key={index} className={styles.imageCard}>
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="rounded"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CareersTestimonialSlider
