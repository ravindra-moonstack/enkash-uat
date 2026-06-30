import Image from "next/image"
import PaymentGatewaySlider from "."

import styles from "./PaymentGatewaySection.module.scss"
import DynamicHeading from "../dynamic-heading"
import CommanButton from "../buttons"

interface SlideData {
    id: number
    icon: string
    title: string
    description: string
    button?: {
        text: string
        url: string
    }
}

interface ButtonData {
    title: string
    theme: "blue"
    url: string
}

interface HeadingContent {
    title: string
    color?: string
}

export interface PaymentGatewaySectionProps {
    backgroundImage?: string
    heading: HeadingContent[]
    description: string
    buttons?: ButtonData[]
    slideData: SlideData[]
    className?: string
    theme?: "white" | "dark"
}

const PaymentGatewaySection: React.FC<PaymentGatewaySectionProps> = ({
    backgroundImage = "",
    heading,
    description,
    buttons = [],
    slideData,
    className = "",
    theme = "dark"
}) => {
    const isWhiteTheme = theme === "white"

    return (
        <section className={`${styles.paymentGatewaySection} ${className} ${isWhiteTheme ? styles.whiteTheme : ""}`}>
            <div className={styles.backgroundContainer}>
                {backgroundImage && (
                    <>
                        <Image
                            src={backgroundImage}
                            alt="Payment gateway features background"
                            className={styles.backgroundImage}
                            fill
                        />
                        <div className={styles.backgroundOverlay}></div>
                    </>
                )}
            </div>

            <div className={`${styles.contentContainer} max-w-auto`}>
                <div className={styles.contentGrid}>
                    <div className={styles.leftContent}>
                        <DynamicHeading
                            content={heading.map(h => ({
                                ...h,
                                color: isWhiteTheme ? "color-grey-200" : h.color
                            }))}
                            headingTag="h2"
                            className={`${styles.sliderHeader} f-5 mb-2`}
                        />
                        <p className={styles.descriptionText}>{description}</p>

                        <div className={styles.buttonGroup}>
                            {buttons.map((btn, index) => (
                                <CommanButton
                                    key={index}
                                    title={btn.title}
                                    theme={btn.theme}
                                    url={btn.url}
                                    width={"100%"}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.rightSlider}>
                        <PaymentGatewaySlider slides={slideData} theme={theme} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentGatewaySection
