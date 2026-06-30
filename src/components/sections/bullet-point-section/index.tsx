"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./bullet-point-section.module.scss"
import DynamicHeading from "../../dynamic-heading"
import CommanButton from "../../buttons"

interface BulletPoint {
    icon: string | StaticImageData
    title: string
}

interface BulletPointSectionProps {
    heading: { title: string; color?: string; colorClass?: string }[]
    description?: string
    bulletPoints: BulletPoint[]
    buttonTitle: string
    buttonUrl: string
    image: string | StaticImageData
    className?: string
}

const BulletPointSection: React.FC<BulletPointSectionProps> = ({
    heading,
    description,
    bulletPoints,
    buttonTitle,
    buttonUrl,
    image,
    className = "",
}) => {
    return (
        <div className={`${styles.integration_section} ${className}`}>
            <div className="max-w-auto w-100">
                <div className={`text-left row`}>

                    <div className="col-md-6 ">
                        <DynamicHeading
                            content={heading}
                            headingTag="h2"
                            className="f-6"
                        />
                        {description && (
                            <DynamicHeading
                                content={[
                                    {
                                        title: description,
                                        color: "color-grey-200",
                                    },
                                ]}
                                headingTag="p"
                                className="f-4 mb-0 fs-20 pb-4 pb-md-5"
                            />
                        )}
                        {bulletPoints.map(({ icon, title }, i) => (
                            <div key={i} style={{ direction: "ltr" }}>
                                <div className="d-flex align-items-start gap-3 pt-2 w-4 h-4">
                                    <Image src={icon} alt="Bullet point icon" width={34} height={34} />
                                    <div className="d-flex flex-column gap-3">
                                        <DynamicHeading
                                            content={[
                                                {
                                                    title: title,
                                                    color: "color-black subHeading",
                                                },
                                            ]}
                                            headingTag="p"
                                            className="f-5"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <CommanButton
                            title={buttonTitle}
                            theme="white"
                            arrow
                            url={buttonUrl}
                            className="mt-4"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className={styles.faq_bg}>
                            <Image
                                src={image}
                                alt="Section background image"
                                className="w-100 mh-550 object-fit-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BulletPointSection
