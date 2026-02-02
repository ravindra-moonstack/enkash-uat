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
}

const PaymentGatewaySection: React.FC<PaymentGatewaySectionProps> = ({
    backgroundImage = "",
    heading,
    description,
    buttons = [],
    slideData,
    className = "",
}) => {
    return (
        <section className={`${styles.paymentGatewaySection} ${className}`}>
            <div className={styles.backgroundContainer}>
                <Image
                    src={backgroundImage}
                    alt="Participants background"
                    className={styles.backgroundImage}
                    fill
                />
                <div className={styles.backgroundOverlay}></div>
            </div>

            <div className={`${styles.contentContainer} max-w-auto`}>
                <div className={styles.contentGrid}>
                    <div className={styles.leftContent}>
                        <DynamicHeading
                            content={heading}
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
                        <PaymentGatewaySlider slides={slideData} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentGatewaySection
