import React from "react"
import Image from "next/image"
import styles from "./style.module.scss"
import { DynamicHeading } from ".."
import CommanButton from "../buttons"

interface TaxBenefitDetailsCardProps {
    icon: string
    title1?: string
    title2?: string
    title3?: string
    title4?: {
        title: string, color: string, link?: string, className?: string
    }[]
    buttonTitle?: string
    buttonUrl?: string
    showButton?: boolean
}

const TaxBenefitDetailsCard: React.FC<TaxBenefitDetailsCardProps> = ({
    icon,
    title1,
    title2,
    title3,
    title4,
    buttonTitle = "Learn More",
    buttonUrl = "#",
    showButton = true,
}) => {
    return (
        <div className={`${styles.TaxBenefitDetailsCard}`}>
            {icon && <Image src={icon} alt="" width={40} height={40} />}

            <div className="mt-3">
                {title1 && (
                    <DynamicHeading
                        content={[{ title: title1, color: "color-black" }]}
                        headingTag="p"
                        className="f-5 heading-h4"
                    />
                )}
                <DynamicHeading
                    content={[{ title: title2, color: "color-equity-blue" }]}
                    headingTag="p"
                    className="f-7 heading-h2"
                />
                <DynamicHeading
                    content={[{ title: title3, color: "color-electric-green" }]}
                    headingTag="p"
                    className={`${styles.title3}`}
                />
                <DynamicHeading
                    content={title4}
                    headingTag="p"
                    className={`${title4?.[3]?.className}  `}
                />
            </div>

            {showButton && (
                <CommanButton
                    title={buttonTitle}
                    theme="outline-blue"
                    url={buttonUrl}
                />
            )}
        </div>
    )
}

export default TaxBenefitDetailsCard
