import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./BenefitsCards.module.scss"
import { DynamicHeading } from ".."
import CommonButton from "../buttons"

export interface BenefitPoint {
    text: string
}

export interface BenefitCard {
    imageUrl: string
    imageAlt?: string
    cardLabel: string
    points: BenefitPoint[]
    ctaButton?: {
        label: string
        href?: string
        onClick?: () => void
    }
}

export interface BenefitsCardsProps {
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
    cards?: BenefitCard[]
}

const defaultHeading = {
    content: [
        {
            title: "Benefits That Work for Your Business and Your People",
            color: "color-black",
        },
    ],
    headingTag: "h2" as const,
    className: "f-7",
}

const defaultCards: BenefitCard[] = [
    {
        imageUrl: "/images/employer-benefits.jpg",
        imageAlt: "For Employers",
        cardLabel: "For Employers",
        points: [
            {
                text: "Restructure CTC without increasing payroll cost and deliver more value from the same budget",
            },
            {
                text: "Restructure CTC without increasing payroll cost and deliver more value from the same budget",
            },
            {
                text: "Restructure CTC without increasing payroll cost and deliver more value from the same budget",
            },
            {
                text: "Restructure CTC without increasing payroll cost and deliver more value from the same budget",
            },
        ],
        ctaButton: {
            label: "Book a Demo",
            href: "#",
        },
    },
    {
        imageUrl: "/images/employee-benefits.jpg",
        imageAlt: "For Employees",
        cardLabel: "For Employees",
        points: [
            {
                text: "Take home more from the same CTC with no change in compensation, just smarter structuring",
            },
            {
                text: "Funds are available instantly on the card with no reimbursement cycles, no bill submissions & no waiting",
            },
            {
                text: "Accepted at 5,00,000+ food and grocery outlets across India, online and offline",
            },
            {
                text: "Pay the way you prefer by tapping, swiping, scanning any UPI QR, or ordering online",
            },
        ],
        ctaButton: {
            label: "Book a Demo",
            href: "#",
        },
    },
]

// Bullet check icon
const BulletIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.bulletIcon}
        style={{ flexShrink: 0, marginTop: "2px" }}
    >
        <circle cx="9" cy="9" r="9" fill="#E6F9F6" />
        <path
            d="M5 9l3 3 5-5"
            stroke="#00BF9E"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const BenefitsCards: React.FC<BenefitsCardsProps> = ({
    heading = defaultHeading,
    cards = defaultCards,
}) => {
    return (
        <section className={`${styles.benefitsSection} max-w-auto`}>
            <div className={styles.headingWrapper}>
                <DynamicHeading
                    content={heading.content as any}
                    headingTag={(heading.headingTag as any) || "h2"}
                    className={heading.className}
                />
            </div>

            <div className={styles.cardsGrid}>
                {cards.map((card, idx) => (
                    <div key={idx} className={styles.card}>
                        {/* Image with overlay label */}
                        <div className={styles.imageWrapper}>
                            <Image
                                src={card.imageUrl}
                                alt={card.imageAlt || card.cardLabel}
                                className={styles.cardImage}
                                width={358}
                                height={202}
                                priority
                            />
                            <div className={styles.imageOverlay}>
                                <span className={styles.cardLabel}>{card.cardLabel}</span>
                            </div>
                        </div>

                        {/* Points list */}
                        <ul className={styles.pointsList}>
                            {card.points.map((point, pIdx) => (
                                <li key={pIdx} className={styles.pointItem}>
                                    <span className={styles.pointText}>{point.text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        {card.ctaButton && (
                            <div className={styles.ctaWrapper}>
                                <CommonButton title={card.ctaButton.label} theme="white" arrow url={card.ctaButton.href} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BenefitsCards