"use client"
import type React from "react"
import Image from "next/image"

import styles from "./BenefitGrid.module.scss"
import { DynamicHeading } from ".."

interface SlideData {
    id: number
    icon: any
    title: string
    amount?: string
    description?: string
}

type BenefitGridProps = {
    slides: SlideData[]
}

const BenefitGrid: React.FC<BenefitGridProps> = ({ slides }) => {
    return (
        <div className={styles.benefitGrid}>
            <div className={styles.gridContainer}>
                {slides.map((slide, i) => (
                    <div className={styles.slideCard} key={i}>
                        <div className={styles.cardDecoration}>
                            <svg width="204" height="39" viewBox="0 0 204 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M195.105 0.556641C199.57 0.0203437 203.5 3.50632 203.5 8.00293V38.4844H0.5V30.5967C0.5 26.8007 3.33658 23.6033 7.10547 23.1504L195.105 0.556641Z" fill="white" fill-opacity="0.1" stroke="#1A56FE" />
                            </svg>
                        </div>
                        <div className={styles.slideIcon}>
                            <Image
                                src={slide.icon}
                                alt={slide.title}
                                width={50}
                                height={50}
                            />
                        </div>
                        <DynamicHeading
                            content={[
                                {
                                    title: slide.title,
                                    color: "color-white f-5",
                                }]} headingTag="h4" className="fs-24" />
                        {slide.amount && <DynamicHeading
                            content={[
                                {
                                    title: slide.amount,
                                    color: "color-white f-5",
                                }]} headingTag="h4" className="fs-24" />}
                        {slide.description && <DynamicHeading
                            content={[
                                {
                                    title: slide.description,
                                    color: "color-white f-3",
                                }]}
                            headingTag="p" className="mb-0" />}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BenefitGrid
