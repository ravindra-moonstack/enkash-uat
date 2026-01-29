"use client"

import React, { useEffect, useRef, useState } from "react"
import styles from "./StatsSection.module.scss"
import { DynamicHeading } from ".."
import { StaticImageData } from "next/image"

interface StatItem {
    value: string | number
    label: string
    animate?: boolean
    suffix?: string
    prefix?: string
    decimals?: number
}

interface StatsSectionProps {
    title?: string
    description?: string
    stats?: StatItem[]
    backgroundImage?: StaticImageData | string
    className?: string
}

const defaultStats: StatItem[] = [
    { value: 95, label: "Success Rate", animate: true, suffix: "%" },
    { value: 99.9, label: "Uptime Guaranteed", animate: true, suffix: "%", decimals: 1 },
    { value: "24/7", label: "Expert Support", animate: false },
    { value: 100, label: "Payment Options", animate: true, suffix: "+" }
]

const StatsSection: React.FC<StatsSectionProps> = ({
    title = "Payment Gateway That Delivers",
    description = "Built for businesses that demand more than just payment processing. EnKash combines enterprise-grade infrastructure with SMB-focused solutions.",
    stats = defaultStats,
    backgroundImage = "/images/payment-gateway-bg.jpg",
    className = ""
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        const currentRef = sectionRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [isVisible])

    return (
        <section
            ref={sectionRef}
            className={`${styles.statsSection} ${className}`}
            style={{ backgroundImage: `url(${typeof backgroundImage === 'object' ? (backgroundImage as StaticImageData).src : backgroundImage})` }}
        >
            <div className={'max-w-auto'}>
                <div className={styles.content}>
                    <div >
                    </div>
                    <div className={styles.statsGrid}>
                        <div className={styles.textContent}>
                            <DynamicHeading
                                content={[{
                                    text: title,
                                    color: "color-grey-200 f-3",
                                }]}
                                headingTag="h2"
                            />
                            <DynamicHeading
                                content={[{
                                    text: description,
                                    color: "color-grey-200 f-4",
                                }]}
                                headingTag="p"
                                className={`${styles.description} mb-0`}
                            />
                        </div>
                        <div className={styles.statsContainer} >
                            {stats.map((stat, index) => (
                                <StatCard
                                    key={index}
                                    stat={stat}
                                    isVisible={isVisible}
                                    delay={index * 100}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface StatCardProps {
    stat: StatItem
    isVisible: boolean
    delay: number
}

const StatCard: React.FC<StatCardProps> = ({ stat, isVisible, delay }) => {
    const [displayValue, setDisplayValue] = useState<string | number>(
        stat.animate ? 0 : stat.value
    )

    useEffect(() => {
        if (!stat.animate || !isVisible) return

        const targetValue = typeof stat.value === "number" ? stat.value : parseFloat(stat.value as string)
        const duration = 2000
        const steps = 60
        const increment = targetValue / steps
        const stepDuration = duration / steps

        const timer = setTimeout(() => {
            let currentStep = 0

            const counter = setInterval(() => {
                currentStep++
                const currentValue = increment * currentStep

                if (currentStep >= steps) {
                    setDisplayValue(targetValue)
                    clearInterval(counter)
                } else {
                    if (stat.decimals !== undefined) {
                        setDisplayValue(currentValue.toFixed(stat.decimals))
                    } else {
                        setDisplayValue(Math.floor(currentValue))
                    }
                }
            }, stepDuration)

            return () => clearInterval(counter)
        }, delay)

        return () => clearTimeout(timer)
    }, [isVisible, stat.value, stat.animate, stat.decimals, delay])

    const formattedValue = stat.animate
        ? `${stat.prefix || ""}${displayValue}${stat.suffix || ""}`
        : stat.value

    return (
        <div className={`${styles.statCard} ${isVisible ? styles.visible : ""}`}>
            <DynamicHeading
                content={[{
                    text: String(formattedValue),
                    color: "color-brand-blue f-7",
                }]}
                headingTag="h2"
            />
            <DynamicHeading
                content={[{
                    text: stat.label,
                    color: "color-brand-blue f-3",
                }]}
                headingTag="p"
                className="mb-0"
            />
        </div>
    )
}

export default StatsSection