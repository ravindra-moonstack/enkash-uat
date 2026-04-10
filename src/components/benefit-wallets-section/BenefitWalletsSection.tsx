import React, { ReactNode } from "react"
import styles from "./BenefitWalletsSection.module.scss"
import { CommanButton, DynamicHeading } from ".."
import Image from "next/image"

export interface WalletCard {
    id: string
    icon?: any
    title: string
    subtitle?: string
    description: string
    highlights?: string[]
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"
    textColor?: "black" | "white"
}

export interface BenefitWalletsSectionProps {
    Heading: { title: string, color: string }[]
    subtitle?: string
    description?: string
    cards: WalletCard[]
    centerImage?: any
    backgroundImage?: string
    buttonUrl?: string
    textColor?: "black" | "white"
}

const BenefitWalletsSection: React.FC<BenefitWalletsSectionProps> = ({
    Heading,
    subtitle,
    description,
    cards,
    centerImage,
    backgroundImage,
    buttonUrl,
    textColor = "black", // Changed default to black for better initial visibility
}) => {
    const topLeftCards = cards.filter((c) => c.position === "top-left")
    const topRightCards = cards.filter((c) => c.position === "top-right")
    const bottomLeftCards = cards.filter((c) => c.position === "bottom-left")
    const bottomRightCards = cards.filter((c) => c.position === "bottom-right")
    const centerCards = cards.filter((c) => c.position === "center")

    const renderCard = (card: WalletCard) => {
        const theme = card.textColor || textColor
        const highlightsColor = theme === "white" ? "color-electric-green" : "color-white"
        const contentColor = theme === "black" ? "color-alternate-grey" : "color-white"

        return (
            <div key={card.id} className={`${styles.walletCard} ${theme === 'white' ? styles.whiteTheme : styles.blackTheme}`}>
                {card.icon && (
                    <div className={styles.cardIcon}>
                        {typeof card.icon === 'string' && card.icon.length < 5 ? (
                            <span className={styles.emojiIcon}>{card.icon}</span>
                        ) : (
                            <Image src={card.icon} alt={card.title} width={40} height={40} />
                        )}
                    </div>
                )}
                <DynamicHeading
                    content={[{ title: card.title, color: contentColor }]}
                    headingTag="h3"
                    className="f-5 mb-2 heading-h5"
                />
                {card.subtitle && (
                    <DynamicHeading
                        content={[{ title: card.subtitle, color: contentColor }]}
                        headingTag="p"
                        className="mb-3"
                    />
                )}
                <DynamicHeading
                    content={[{ title: card.description, color: contentColor }]}
                    headingTag="p"
                    className="mb-3"
                />
                {card.highlights && card.highlights.length > 0 && (
                    <div className={styles.highlights}>
                        {card.highlights.map((highlight, idx) => (
                            <DynamicHeading
                                key={idx}
                                content={[{ title: highlight, color: highlightsColor }]}
                                headingTag="p"
                                className="mb-0 font-medium"
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <section className={styles.benefitWalletsSection}>
            {backgroundImage && (
                <div className={styles.background}>
                    <Image src={backgroundImage} alt="Background" width={1920} height={708} />
                </div>
            )}
            <div className={`max-w-auto ${styles.container}`}>
                {/* Header */}
                <div className={styles.header}>
                    {subtitle && (
                        <DynamicHeading
                            content={[{ title: subtitle, color: "color-electric-green" }]}
                            headingTag="p"
                            className="f-6 tracking-wider mb-2"
                        />
                    )}
                    <DynamicHeading
                        content={Heading}
                        headingTag="h2"
                        className="f-7 mb-4"
                    />
                    {description && (
                        <DynamicHeading
                            content={[{ title: description, color: "color-grey-200" }]}
                            headingTag="p"
                            className="mx-auto max-w-2xl"
                        />
                    )}
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {/* Left Column */}
                    <div className={styles.column}>
                        {topLeftCards.map(renderCard)}
                        {bottomLeftCards.map(renderCard)}
                    </div>

                    {/* Center Column */}
                    <div className={`${styles.column} ${styles.centerColumn}`}>
                        {centerImage && (
                            <div className={styles.mockupContainer}>
                                <Image
                                    src={centerImage}
                                    alt="Mockup"
                                    width={332}
                                    height={665}
                                    className={styles.mockup}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        {centerCards.map(renderCard)}
                    </div>

                    {/* Right Column */}
                    <div className={styles.column}>
                        {topRightCards.map(renderCard)}
                        {bottomRightCards.map(renderCard)}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center w-100 mt-4 mt-md-3">
                <CommanButton title="Talk to Employee Benefits Expert" url={buttonUrl} theme="blue" />
            </div>
        </section>
    )
}

export default BenefitWalletsSection
