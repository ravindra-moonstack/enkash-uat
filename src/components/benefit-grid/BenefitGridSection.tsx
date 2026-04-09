import Image from "next/image"

import styles from "./BenefitGridSection.module.scss"
import DynamicHeading from "../dynamic-heading"
import BenefitGrid from "./BenefitGrid"

interface SlideData {
    id: number
    icon: any
    title: string
}

interface HeadingContent {
    title: string
    color?: string
}

export interface BenefitGridSectionProps {
    backgroundImage?: string
    heading: HeadingContent[]
    description: string
    slideData: SlideData[]
    className?: string
    id?: string
}

const BenefitGridSection: React.FC<BenefitGridSectionProps> = ({
    backgroundImage = "",
    heading,
    description,
    slideData,
    className = "",
    id,
}) => {
    return (
        <section className={`${styles.benefitGridSection} ${className}`} id={id}>
            <div className={styles.backgroundContainer}>
                {backgroundImage && <Image
                    src={backgroundImage}
                    alt="Participants background"
                    className={styles.backgroundImage}
                    fill
                />}
                <div className={styles.backgroundOverlay} />
            </div>

            <div className={`${styles.contentContainer} max-w-auto`}>
                <div className={styles.contentGrid}>
                    <div className={styles.leftContent}>
                        <div className={styles.sliderHeader}>
                            <DynamicHeading
                                content={heading}
                                headingTag="h2"
                                className="f-5 mb-2"
                            />
                        </div>
                        <DynamicHeading
                            content={[{ title: description, color: "color-white f-3" }]}
                            headingTag="p"
                            className={` ${styles.descriptionText} subheading mb-0`}
                        />
                    </div>
                    <div className={styles.rightContent}>
                        <BenefitGrid slides={slideData} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitGridSection
