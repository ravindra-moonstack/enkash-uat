"use client"

import type React from "react"
import { useRef } from "react"
import Slider from "react-slick"
import styles from "./PartnershipSlider.module.scss"
import Link from "next/link"

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

interface PartnershipSliderProps {
    slides: SlideData[]
}

const PartnershipSlider: React.FC<PartnershipSliderProps> = ({ slides }) => {
    const sliderRef = useRef<Slider>(null)

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        Draggable: true,
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
    }

    return (
        <div className={styles.partnershipSlider}>
            <Slider {...settings} ref={sliderRef}>
                {slides.map((slide) => (
                    <div key={slide.id} className={styles.slideContainer}>
                        <div className={styles.slideCard}>
                            <div className={styles.slideIcon}>
                                <img
                                    src={slide.icon}
                                    alt={slide.title}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <h3 className={styles.slideTitle}>{slide.title}</h3>
                            <p className={styles.slideDescription}>{slide.description}</p>
                            <div className={styles.customButtons}>
                                <Link href={slide.button?.url || "#partnership-form"}>
                                    {slide.button?.text || "Become a Partner"}
                                    <svg
                                        width="8"
                                        height="10"
                                        viewBox="0 0 8 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.75 1.25L5.75 5.25L1.75 9.25"
                                            stroke="#1C5AF4"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default PartnershipSlider
