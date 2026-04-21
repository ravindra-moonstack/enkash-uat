"use client"
import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./AcceptedEverywhere.module.scss"
import { DynamicHeading } from ".."
import Image from "next/image"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2"

export interface AcceptanceCategory {
    icon: React.ReactNode
    label: string
}

export interface AcceptedEverywhereProps {
    heading?: {
        content: Array<{
            title?: string | number
            name?: string
            text?: string
            color?: string
            tag?: string
            className?: string
            link?: string
        }>
        headingTag?: string
        className?: string
    }
    categories?: AcceptanceCategory[]
    autoplayInterval?: number
}


const AcceptedEverywhere: React.FC<AcceptedEverywhereProps> = ({
    heading,
    categories = [],
    autoplayInterval = 3000,
}) => {
    const sliderRef = useRef<Slider>(null)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: autoplayInterval,
        arrows: false,
        pauseOnHover: true,
        appendDots: (dots: React.ReactNode) => (
            <div className={styles.customNavigation}>
                <div className={styles.navInner}>
                    <button
                        className={styles.arrowBtn}
                        onClick={() => sliderRef.current?.slickPrev()}
                        aria-label="Previous slide"
                    >
                        <HiOutlineChevronLeft />
                    </button>
                    <ul className={styles.dotsList}> {dots} </ul>
                    <button
                        className={styles.arrowBtn}
                        onClick={() => sliderRef.current?.slickNext()}
                        aria-label="Next slide"
                    >
                        <HiOutlineChevronRight />
                    </button>
                </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className={styles.acceptedSection}>
            <div className={styles.headingWrapper}>
                <DynamicHeading
                    content={heading?.content as any}
                    headingTag={(heading?.headingTag as any) || "h2"}
                    className={heading?.className}
                />
            </div>

            <div className={styles.sliderWrapper}>
                <Slider ref={sliderRef} {...settings}>
                    {categories.map((cat, idx) => (
                        <div key={idx} className={styles.slideItem}>
                            <div className={styles.categoryCard}>
                                <span className={styles.categoryIcon}>
                                    {cat.icon && typeof cat.icon === 'object' && 'src' in (cat.icon as any) ? (
                                        <Image src={cat.icon as any} alt={cat.label} width={32} height={32} />
                                    ) : (
                                        cat.icon
                                    )}
                                </span>
                                <span className={styles.categoryLabel}>{cat.label}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default AcceptedEverywhere
