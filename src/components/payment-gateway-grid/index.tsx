"use client"
import type React from "react"
import Image from "next/image"

import styles from "./PaymentGatewayGrid.module.scss"
import { DynamicHeading } from ".."

interface SlideData {
    id: number
    icon: any
    title: string
}

type PaymentGatewayGridProps = {
    slides: SlideData[]
}

const PaymentGatewayGrid: React.FC<PaymentGatewayGridProps> = ({ slides }) => {
    return (
        <div className={styles.paymentGatewayGrid}>
            <div className={styles.gridContainer}>
                {slides.map((slide) => (
                    <div className={styles.slideCard}>
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PaymentGatewayGrid
