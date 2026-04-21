"use client"
import React, { useRef, useEffect, useState } from "react"
import styles from "./acceptedEveryWhere.module.scss"
import { DynamicHeading } from ".."
import Image from "next/image"

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
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const trackRef = useRef<HTMLDivElement>(null)

    // On mobile: show 2 per slide, desktop: 4 per slide
    const [itemsPerSlide, setItemsPerSlide] = useState(4)

    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(window.innerWidth < 768 ? 2 : 4)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const totalSlides = Math.ceil(categories.length / itemsPerSlide)

    useEffect(() => {
        if (isPaused || totalSlides <= 1) return
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % totalSlides)
        }, autoplayInterval)
        return () => clearInterval(timer)
    }, [isPaused, totalSlides, autoplayInterval])

    return (
        <section
            className={`${styles.acceptedSection}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className={styles.headingWrapper}>
                <DynamicHeading
                    content={heading?.content as any}
                    headingTag={(heading?.headingTag as any) || "h2"}
                    className={heading?.className}
                />
            </div>
            <div className={styles.sliderWrapper}>
                <div
                    className={styles.sliderTrack}
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                >
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className={styles.categoryCard}
                        >
                            <span className={styles.categoryIcon}>
                                {cat.icon && typeof cat.icon === 'object' && 'src' in (cat.icon as any) ? (
                                    <Image src={cat.icon as any} alt={cat.label} width={32} height={32} />
                                ) : (
                                    cat.icon
                                )}
                            </span>
                            <span className={styles.categoryLabel}>{cat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            {totalSlides > 1 && (
                <div className={styles.dotsWrapper}>
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default AcceptedEverywhere