"use client"

import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./CareersTestimonialSlider.module.scss"
import {
  voicesEnkash1,
  voicesEnkash2,
  voicesEnkash3,
  voicesEnkash4,
  voicesEnkash5,
} from "."

interface Testimonial {
  name: string
  role: string
  text: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Pramod Dhuriya",
    role: "Customer Support",
    text: "Being part of EnKash for over six years has been an incredible journey of learning, collaboration, and innovation. I’m proud to contribute to a company that values people, ideas, and growth every single day.",
    image: voicesEnkash1.src,
  },
  {
    name: "Kanishk Goyal",
    role: "Engineering",
    text: "From starting as an intern to becoming a full-time team member, my journey at EnKash has been truly rewarding. Working on innovative fintech solutions, guided by supportive mentors, has helped me sharpen my skills.",
    image: voicesEnkash2.src,
  },
  {
    name: "Dinesh Parmar",
    role: "Reconciliation",
    text: "I’m truly grateful to everyone at EnKash for contributing to my journey. The support, collaboration, and opportunities here have helped me grow in confidence, sharpen my skills, and work seamlessly as part of a great team. It’s been an incredible experience.",
    image: voicesEnkash3.src,
  },
  {
    name: "Saraswati Keswani",
    role: "Human Resources",
    text: "From the first employee to today, it’s been an inspiring journey, witnessing EnKash grow, shaping its vision, and thriving in a culture where every idea counts and every milestone matters",
    image: voicesEnkash4.src,
  },
  {
    name: "Vishal Singh",
    role: "Sales Operations",
    text: "In seven years, I’ve grown from our early days to today - guided by great mentors, working with talented colleagues, solving challenges, and delivering impactful solutions. It’s been inspiring, and I’m excited for what’s ahead.",
    image: voicesEnkash5.src,
  },
]

const CareerTestimonialSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
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
