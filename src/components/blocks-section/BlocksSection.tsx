import Image from "next/image"

import styles from "./BlocksSection.module.scss"
import DynamicHeading from "../dynamic-heading"
import CommanButton from "../buttons"
import PaymentGatewayGrid from "../payment-gateway-grid"

interface SlideData {
    id: number
    icon: any
    title: string
}

interface ButtonData {
    title: string
    theme: "white" | "blue" | any
    url: any
}

interface HeadingContent {
    title: string
    color?: string
}

export interface BlocksSectionProps {
    backgroundImage?: string
    absoluteImage?: any
    heading: HeadingContent[]
    description?: string
    buttons?: ButtonData[]
    slideData: SlideData[]
    className?: string
}

const BlocksSection: React.FC<BlocksSectionProps> = ({
    backgroundImage = "",
    absoluteImage = "",
    heading,
    description,
    buttons = [],
    slideData,
    className = "",
}) => {
    return (
        <section className={`${styles.blocksSection} ${className}`}>
            <div className={styles.backgroundContainer}>
                {backgroundImage && <Image
                    src={backgroundImage}
                    alt="Participants background"
                    className={styles.backgroundImage}
                    fill
                />}
                <div className={styles.backgroundOverlay}></div>
            </div>

            {absoluteImage && (
                <div className={styles.absoluteImageContainer}>
                    <Image
                        src={absoluteImage}
                        alt="Absolute ornament"
                        width={423} // or whatever? I'll set some default and user can change it via props if needed. 
                        height={328}
                    />
                </div>
            )}

            <div className={`${styles.contentContainer} max-w-auto`}>
                <div className={styles.contentGrid}>
                    <div className={styles.leftContent}>
                        <DynamicHeading
                            content={heading}
                            headingTag="h2"
                            className={`${styles.sliderHeader} f-5 mb-2`}
                        />
                        {description && <DynamicHeading
                            content={[{ text: description, className: "color-white f-3" }]}
                            headingTag="p"
                            className={` ${styles.descriptionText} subheading mb-0`}
                        />}

                    </div>
                    <div className={styles.rightContent}>
                        <PaymentGatewayGrid slides={slideData} />
                        <div className={styles.buttonGroup}>
                            {buttons.map((btn, index) => (
                                <CommanButton
                                    key={index}
                                    title={btn.title}
                                    theme={btn.theme}
                                    url={btn.url}
                                    arrow={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlocksSection
