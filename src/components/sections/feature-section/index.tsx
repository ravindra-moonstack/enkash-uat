import React from "react"
import Image from "next/image"
import Link from "next/link"
import DynamicHeading from "@/components/dynamic-heading" // adjust to your path
import styles from "./style.module.scss"

// =============================================
// Types
// =============================================

export interface FeatureItem {
    id?: string

    /** Path to your icon image/SVG — shown in the teal circle above the heading */
    iconSrc: string
    iconAlt?: string

    /** Heading — passed straight into DynamicHeading */
    heading: {
        content: Array<{
            title?: string | number
            name?: string
            text?: string
            color?: string
            tag?: keyof React.JSX.IntrinsicElements
            className?: string
            link?: string
        }>
        headingTag?: keyof React.JSX.IntrinsicElements
        className?: string
    }

    /** Body paragraph */
    description: string

    /** Teal bold callout (the green sentence below description) */
    highlight: string

    /** CTA button */
    cta?: {
        label: string
        href?: string
        onClick?: () => void
    }

    /** The actual screenshot / illustration shown on the visual side */
    imageSrc: string
    imageAlt?: string
    imageWidth?: number
    imageHeight?: number

    /**
     * true  → text LEFT,  image RIGHT  (default)
     * false → image LEFT, text RIGHT
     */
    reverse?: boolean
}

export interface FeatureSectionProps {
    items: FeatureItem[]
    className?: string
}

// =============================================
// Connector SVG
// The exact paths from the SVG you provided.
// Rendered behind every row, scaled to fit.
// =============================================

function ConnectorLines() {
    return (
        <svg
            viewBox="0 0 699 945"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                d="M698.501 872.5V374.82C698.501 372.611 696.71 370.82 694.501 370.82L76.5 370.82C74.2908 370.82 72.5 369.029 72.5 366.82L72.5 0.5"
                stroke="#00BF9E"
                strokeOpacity="0.15"
                strokeLinecap="square"
            />
            <path
                d="M686.501 884.5V386.82C686.501 384.611 684.71 382.82 682.501 382.82L64.5 382.82C62.2908 382.82 60.5 381.029 60.5 378.82L60.5 12.5"
                stroke="#00BF9E"
                strokeOpacity="0.15"
                strokeLinecap="square"
            />
            <path
                d="M674.501 896.5V398.82C674.501 396.611 672.71 394.82 670.501 394.82L52.5 394.82C50.2908 394.82 48.5 393.029 48.5 390.82L48.5 24.5"
                stroke="#00BF9E"
                strokeOpacity="0.15"
                strokeLinecap="square"
            />
            <path
                d="M662.501 908.5V410.82C662.501 408.611 660.71 406.82 658.501 406.82L40.5 406.82C38.2908 406.82 36.5 405.029 36.5 402.82L36.5 36.5"
                stroke="#00BF9E"
                strokeOpacity="0.15"
                strokeLinecap="square"
            />
            <path
                d="M650.501 920.5V422.82C650.501 420.611 648.71 418.82 646.501 418.82L28.5 418.82C26.2908 418.82 24.5 417.029 24.5 414.82L24.5 48.5"
                stroke="#00BF9E"
                strokeOpacity="0.15"
                strokeLinecap="square"
            />
            <path
                d="M638.501 932.5V434.82C638.501 432.611 636.71 430.82 634.501 430.82L16.5 430.82C14.2908 430.82 12.5 429.029 12.5 426.82L12.5 60.5"
                stroke="#00BF9E"
                strokeOpacity="0.15"
                strokeLinecap="square"
            />
            <path
                d="M626.501 944.5V446.82C626.501 444.611 624.71 442.82 622.501 442.82L4.49998 442.82C2.29084 442.82 0.5 441.029 0.5 438.82L0.5 72.5"
                stroke="#00BF9E"
                strokeOpacity="0.15"
                strokeLinecap="square"
            />
        </svg>
    )
}

// =============================================
// Single Row
// =============================================

function FeatureRow({ item }: { item: FeatureItem }) {
    return (
        <div className={`${styles.featureRow} ${item.reverse ? styles.reverse : ""}`}>

            {/* ── Connector SVG lines (decorative, behind content) ── */}
            <div className={styles.connectorLines}>
                <ConnectorLines />
            </div>

            {/* ── Text Side ── */}
            <div className={styles.featureContent}>
                {/* Icon */}
                <div className={styles.featureIconWrap}>
                    <Image
                        src={item.iconSrc}
                        alt={item.iconAlt || ""}
                        width={56}
                        height={56}
                        aria-hidden={!item.iconAlt}
                    />
                </div>

                {/* Heading via DynamicHeading */}
                <div className={styles.featureHeading}>
                    <DynamicHeading
                        content={item.heading.content as any}
                        headingTag={(item.heading.headingTag as any) || "h2"}
                        className={item.heading.className}
                    />
                </div>

                {/* Description */}
                <p className={styles.featureDescription}>{item.description}</p>

                {/* Highlight */}
                <p className={styles.featureHighlight}>{item.highlight}</p>

                {/* CTA */}
                {item.cta &&
                    (item.cta.href ? (
                        <Link href={item.cta.href} className={styles.featureCta}>
                            {item.cta.label}
                        </Link>
                    ) : (
                        <button
                            type="button"
                            className={styles.featureCta}
                            onClick={item.cta.onClick}
                        >
                            {item.cta.label}
                        </button>
                    ))}
            </div>

            {/* ── Visual / Image Side ── */}
            <div className={styles.featureVisual}>
                <div className={styles.featureVisualInner}>
                    {/* Blue accent slab behind image */}
                    <div className={styles.blueAccent} />

                    {/* Actual screenshot / illustration */}
                    <Image
                        className={styles.featureImage}
                        src={item.imageSrc}
                        alt={item.imageAlt || ""}
                        width={item.imageWidth || 520}
                        height={item.imageHeight || 420}
                        quality={90}
                    />
                </div>
            </div>

        </div>
    )
}

// =============================================
// Section Export
// =============================================

const FeatureSection: React.FC<FeatureSectionProps> = ({ items, className }) => {
    return (
        <section className={`${styles.featureSection} ${className || ""}`}>
            <div className={styles.featureInner}>
                {items.map((item, index) => (
                    <FeatureRow key={item.id ?? index} item={item} />
                ))}
            </div>
        </section>
    )
}

export default FeatureSection