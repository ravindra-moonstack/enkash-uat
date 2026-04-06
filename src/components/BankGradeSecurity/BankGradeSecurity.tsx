import React from "react"
import Image from "next/image"
import styles from "./BankGradeSecurity.module.scss"
import { DynamicHeading } from ".."

interface SecurityFeature {
    title: string
    description: string
    headingTag?: keyof React.JSX.IntrinsicElements
    headingClassName?: string
}

interface BankGradeSecurityProps {
    preTitle?: string
    highlightedTitle?: string
    titleAfterHighlightedTitle?: string
    subtitle?: string
    features?: SecurityFeature[]
    imageSrc?: string
    imageAlt?: string
    className?: string
    headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const BankGradeSecurity: React.FC<BankGradeSecurityProps> = ({
    preTitle,
    highlightedTitle,
    titleAfterHighlightedTitle,
    subtitle,
    features,
    imageSrc,
    imageAlt,
    className,
    headingTag,
}) => {
    if (!preTitle && !highlightedTitle && !subtitle && !features && !imageSrc) {
        return null
    }

    return (
        <section className={`${styles.bankGradeSection}`}>
            <div className="max-w-auto">
                <div className={styles.content + " " + className}>
                    <div className={styles.leftContent}>
                        {imageSrc && (
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt || ""}
                                    width={320}
                                    height={320}
                                    priority
                                    className={styles.vaultImage}
                                />
                            </div>
                        )}
                        {(preTitle || highlightedTitle || titleAfterHighlightedTitle) && (
                            <DynamicHeading
                                content={[
                                    ...(preTitle
                                        ? [
                                            {
                                                text: preTitle,
                                                color: "color-grey-200 f-7 ",
                                                className: styles.preTitle,
                                            },
                                            {
                                                text: "",
                                            },
                                        ]
                                        : []),
                                    ...(highlightedTitle
                                        ? [
                                            {
                                                text: highlightedTitle,
                                                color: "color-electric-green",
                                                className: styles.highlightedTitle,
                                            },
                                        ]
                                        : []),
                                    ...(titleAfterHighlightedTitle
                                        ? [
                                            {
                                                text: titleAfterHighlightedTitle,
                                                color: "color-grey-200 f-7 ",
                                                className: styles.titleAfterHighlightedTitle,
                                            },
                                        ]
                                        : []),
                                ]}
                                headingTag={headingTag || "h2"}
                                className={styles.mainHeading}
                            />
                        )}

                        {subtitle && (
                            <DynamicHeading
                                content={[
                                    {
                                        text: subtitle,
                                        color: "color-grey-200 f-4",
                                        className: styles.subtitle,
                                    },
                                ]}
                                headingTag="p"
                                className="mb-0"
                            />
                        )}
                    </div>

                    <div className={styles.textContent}>
                        {features && features.length > 0 && (
                            <div className={styles.featuresGrid}>
                                {features.map((feature, index) => (
                                    <div key={index} className={styles.featureCard}>
                                        <DynamicHeading
                                            content={[
                                                {
                                                    text: feature.title,
                                                    color: "color-grey-200 f-6",
                                                },
                                            ]}
                                            headingTag={feature.headingTag ? feature.headingTag : "h3"}
                                            className={`${feature.headingClassName ? feature.headingClassName : "heading-h5"} ${styles.featureTitle}`}
                                        />
                                        <DynamicHeading
                                            content={[
                                                {
                                                    text: feature.description,
                                                    color: "color-grey-200 f-4",
                                                    className: styles.featureDescription,
                                                },
                                            ]}
                                            headingTag="p"
                                            className="mb-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BankGradeSecurity