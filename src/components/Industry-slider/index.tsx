"use client"

import React, { useRef, useState, useEffect } from "react"
import Slider from "react-slick"
import Image from "next/image"
import styles from "./Industryslider.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { DynamicHeading } from ".."

interface CategoryButton {
    id: string
    label: string
}

interface SlideContent {
    id: string
    category: string
    title: string
    description: string
    image: string
    imageAlt: string
}

interface IndustrySliderProps {
    heading?: string
    subheading?: string
    categories: CategoryButton[]
    slides: SlideContent[]
    autoplaySpeed?: number
    CategoryButtonComponent?: React.ComponentType<{
        category: CategoryButton
        isActive: boolean
        onClick: () => void
    }>
}

const IndustrySlider: React.FC<IndustrySliderProps> = ({
    heading,
    subheading,
    categories,
    slides,
    autoplaySpeed = 2500,
    CategoryButtonComponent,
}) => {
    const sliderRef = useRef<Slider>(null)
    const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || "")
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)

    useEffect(() => {
        if (slides.length > 0) {
            const firstSlideCategory = slides[0].category
            setActiveCategory(firstSlideCategory)
        }
    }, [slides])

    const handleCategoryClick = (categoryId: string) => {
        const slideIndex = slides.findIndex((slide) => slide.category === categoryId)
        if (slideIndex !== -1 && sliderRef.current) {
            setActiveCategory(categoryId)
            sliderRef.current.slickGoTo(slideIndex)
            setIsAutoplayPaused(true)
            sliderRef.current.slickPause()
        }
    }

    const handleAfterChange = (index: number) => {
        const currentCategory = slides[index]?.category
        if (currentCategory) {
            setActiveCategory(currentCategory)
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "25%",
        autoplay: !isAutoplayPaused,
        autoplaySpeed: autoplaySpeed,
        afterChange: handleAfterChange,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    }

    return (
        <section className={styles.industrySlider}>
            <div className={styles.header}>
                {heading && (
                    <DynamicHeading
                        content={[{
                            text: heading,
                            color: "color-grey-200 f-5"
                        }]}
                        headingTag={"h2"}
                    />
                )}
                {subheading && <DynamicHeading
                    content={[{
                        text: subheading,
                        color: "color-grey-200 f-4"
                    }]}
                    headingTag={"p"}
                    className={`${styles.subHeading} mb-0`}
                />}
            </div>

            <div className={styles.categories}>
                {categories.map((category) =>
                    CategoryButtonComponent ? (
                        <CategoryButtonComponent
                            key={category.id}
                            category={category}
                            isActive={activeCategory === category.id}
                            onClick={() => handleCategoryClick(category.id)}
                        />
                    ) : (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ""
                                }`}
                        >
                            {category.label}
                        </button>
                    )
                )}
            </div>

            <div className={styles.sliderWrapper}>
                <Slider ref={sliderRef} {...settings}>
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={styles.slideContainer}>
                            <div className={styles.slideCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={slide.image}
                                        alt={slide.imageAlt}
                                        fill
                                        className={styles.slideImage}
                                        priority={index < 3}
                                        objectFit="unset"
                                    />
                                </div>
                                <div className={styles.overlayContent}>
                                    <div className={styles.contentWrapper}>
                                        <DynamicHeading
                                            content={[{
                                                text: slide.title,
                                                color: "color-grey-200 f-7"
                                            }]}
                                            headingTag={"h5"}
                                            className={`${styles.slideTitle}`}
                                        />
                                        <DynamicHeading
                                            content={[{
                                                text: slide.description,
                                                color: "color-grey-200 f-4"
                                            }]}
                                            headingTag={"p"}
                                            className={`${styles.slideDescription} mb-0`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default IndustrySlider