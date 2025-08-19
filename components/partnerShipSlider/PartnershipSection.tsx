"use client"

import type React from "react"
import Image from "next/image"
import PartnershipSlider from "./PartnershipSlider"
import participantsBg from "./img/participants-bg.png"
import "./PartnershipSection.scss"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import RectangleButton from "../buttons/rectangle-button/rectangle-button"
import ItemIcon from "./img/itemIcon.svg"

const PartnershipSection: React.FC = () => {
    const slideData = [
        {
            id: 1,
            icon: ItemIcon.src,
            title: "Co-Branded Visibility",
            description:
                "Position your bank as a tech-forward brand by offering co-branded solutions across payments, cards, and expense tools.",
        },
        {
            id: 2,
            icon: ItemIcon.src,
            title: "Add New Revenue Models",
            description:
                "Unlock new revenue streams, reduce operational costs, expand their SME and corporate customer base, and offer value-added digital financial services without building from scratch.",
        },
        {
            id: 3,
            icon: ItemIcon.src,
            title: "Wider Customer Reach",
            description:
                "Expand into new regions and business segments by bundling EnKash with your existing SME and corporate offerings.",
        },
        {
            id: 4,
            icon: ItemIcon.src,
            title: "Co-Branded Visibility",
            description:
                "Position your bank as a tech-forward brand by offering co-branded solutions across payments, cards, and expense tools.",
        },
    ]

    return (
        <section className="partnership-section">
            {/* Background Image with Overlay */}
            <div className="background-container">
                <Image
                    src={participantsBg}
                    alt="Participants background"
                    className="background-image"
                />
                <div className="background-overlay"></div>
            </div>

            {/* Content Container */}
            <div className="content-container">
                <div className="slider-header">
                    <DynamicHeading
                        content={[
                            {
                                title: "Why Partner with Us?",
                                color: "color-white",
                            },
                        ]}
                        headingTag="h2"
                        className="f-5 mb-4 mb-md-5"
                    />
                </div>
                <div className="content-grid">
                    {/* Left Content */}
                    <div className="left-content">
                        <p className="description-text">
                            Partner with an all-in-one payments platform to deliver modern banking experiences across expense
                            management, corporate cards, and vendor payments. Partner with an all-in-one payments platform to
                            deliver modern banking experiences across expense management, corporate cards, and vendor payments.
                        </p>
                        <RectangleButton
                            title="Explore Bank Partnerships"
                            theme="blue"
                            url="/"
                        />
                    </div>

                    {/* Right Slider */}
                    <div className="right-slider">
                        <PartnershipSlider slides={slideData} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnershipSection
