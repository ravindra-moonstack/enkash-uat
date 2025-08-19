"use client"

import type React from "react"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import styles from "./style.module.scss"
import CustomBreadcrumb from "../breadcrumb/breadbrumb"
import RectangleButton from "../buttons/rectangle-button/rectangle-button"

interface BreadcrumbItem {
    name: string
    url: string
}

interface HeadingContent {
    title: string
    color: string
}

interface ButtonData {
    title: string
    theme: string
    url: string
}

interface BpHeroSectionProps {
    backgroundImage: any
    breadcrumbs?: BreadcrumbItem[]
    mainHeading: HeadingContent[]
    subHeading: HeadingContent[]
    button: ButtonData
}

const BpHeroSection: React.FC<BpHeroSectionProps> = ({
    backgroundImage,
    breadcrumbs,
    mainHeading,
    subHeading,
    button,
}) => {
    return (
        <div
            className={styles.first_row}
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className={styles.box_white}>
                <div className="max-w-auto">
                    {/* Breadcrumb */}
                    {breadcrumbs && (<div className="d-flex">
                        <CustomBreadcrumb items={breadcrumbs} />
                    </div>)}

                    <div className={`${styles.title} col-7 pt-4`}>
                        <div className="d-inline">
                            <DynamicHeading
                                content={mainHeading}
                                headingTag="p"
                                className={`mb-4 text-uppercase`}
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <DynamicHeading
                                content={subHeading}
                                headingTag="h1"
                                className="mb-4 f-7"
                            />
                        </div>

                        {/* CTA Button */}
                        <div className={styles.button_wrapper}>
                            <RectangleButton
                                title={button.title}
                                //@ts-ignore
                                theme={button.theme}
                                url={button.url}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BpHeroSection
