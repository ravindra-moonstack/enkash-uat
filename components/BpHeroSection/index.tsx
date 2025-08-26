"use client"

import type React from "react"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import styles from "./style.module.scss"
import CustomBreadcrumb from "../breadcrumb/breadbrumb"
import RectangleButton from "../buttons/rectangle-button/rectangle-button"
import { StaticImageData } from "next/image"

interface BreadcrumbItem {
    name: string
    url: string
}

interface HeadingContent {
    title: string
    color: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
    domain?: string
    linkColor?: "white" | "black" | "allWhite"
}
interface ButtonData {
    title: string
    theme: string
    url: string
}

interface BpHeroSectionProps {
    backgroundImage: string | StaticImageData
    breadcrumbs?: BreadcrumbProps;
    mainHeading: HeadingContent[]
    subHeading: HeadingContent[]
    button: ButtonData
    customCSS?: React.CSSProperties
}

const BpHeroSection: React.FC<BpHeroSectionProps> = ({
    backgroundImage,
    breadcrumbs,
    mainHeading,
    subHeading,
    button,
    customCSS
}) => {
    return (
        <div
            className={`${styles.first_row} ${customCSS}`}
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <div className={styles.box_white}>
                <div className="max-w-auto">
                    {/* Breadcrumb */}
                    {breadcrumbs && (<div className="d-flex">
                        <CustomBreadcrumb items={breadcrumbs.items}
                            domain={breadcrumbs.domain}
                            linkColor={breadcrumbs.linkColor}
                        />
                    </div>)}
                    <div className="row">
                        <div className={`${styles.title} col-md-7 `}>
                            <div className="d-inline">
                                <DynamicHeading
                                    content={mainHeading}
                                    headingTag="p"
                                    className={` color-equity-blue pt-3 text-md-start text-center pt-md-5 pb-md-4 mb-2`}
                                />
                            </div>

                            <div className="d-flex flex-column text-md-start text-center">
                                <DynamicHeading
                                    content={subHeading}
                                    headingTag="h1"
                                    className="mb-4 f-7 pt-3 pt-md-0"
                                />
                            </div>

                            {/* CTA Button */}
                            <div className={`${styles.button_wrapper} text-md-start text-center` }>
                                <RectangleButton
                                    title={button.title}
                                    //@ts-ignore
                                    theme={button.theme}
                                    url={button.url}
                                />
                            </div>
                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default BpHeroSection
