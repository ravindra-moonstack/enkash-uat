"use client"

import React, { useMemo } from "react"
import Slider, { Settings } from "react-slick"
import Image from "next/image"

import styles from "./EmployeeSlider.module.scss"
import { emp1, emp2, emp3, emp4 } from "."

const employees = [
  { src: emp1, alt: "Team Celebration" },
  { src: emp2, alt: "Cutting Cake" },
  { src: emp3, alt: "Event Award" },
  { src: emp4, alt: "Casual Photo" },
]

const EmployeeSlider: React.FC = () => {
const settings: Settings = useMemo(
  () => ({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,          // 👈 use lowercase, `autoPlay` isn’t valid in react-slick
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  }),
  []
  )

  return (
    <div className={`${styles.EmployeeSliderOuter} EmployeeSliderOuterGlobal`}>
      <Slider {...settings}>
        {employees.map((emp, index) => (
          <div key={index} className={`${styles.employeeSlide}`}>
            <div className={`${styles.employeeSlideImg}`}>
              <Image src={emp.src} alt={emp.alt} width={550} height={500} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default EmployeeSlider
