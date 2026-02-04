import Image from "next/image"

import styles from "./PaymentGatewayGridSection.module.scss"
import DynamicHeading from "../dynamic-heading"
import CommanButton from "../buttons"
import PaymentGatewayGrid from "./index"

interface SlideData {
    id: number
    icon: any
    title: string
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

export interface PaymentGatewayGridSectionProps {
    backgroundImage?: string
    heading: HeadingContent[]
    description: string
    buttons?: ButtonData[]
    slideData: SlideData[]
    className?: string
}

const PaymentGatewayGridSection: React.FC<PaymentGatewayGridSectionProps> = ({
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
                {backgroundImage && <Image
                    src={backgroundImage}
                    alt="Participants background"
                    className={styles.backgroundImage}
                    fill
                />}
            </div>

            <div className={`${styles.contentContainer} max-w-auto`}>
                <div className={styles.contentGrid}>
                    <div className={styles.leftContent}>
                        <DynamicHeading
                            content={heading}
                            headingTag="h2"
                            className={`${styles.sliderHeader} f-5 mb-2`}
                        />
                        <DynamicHeading
                            content={[{ text: description, className: "color-white f-3" }]}
                            headingTag="p"
                            className={` ${styles.descriptionText} subheading mb-0`}
                        />

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
                    <div className={styles.rightContent}>
                        <PaymentGatewayGrid slides={slideData} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentGatewayGridSection
