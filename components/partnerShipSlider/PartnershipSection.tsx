"use client"

import type React from "react"
import Image from "next/image"
import PartnershipSlider from "./PartnershipSlider"
import participantsBg from "./img/participants-bg.png"
import "./PartnershipSection.scss"

const PartnershipSection: React.FC = () => {
    const slideData = [
        {
            id: 1,
            icon: "visibility",
            title: "Co-Branded Visibility",
            description:
                "Position your bank as a tech-forward brand by offering co-branded solutions across payments, cards, and expense tools.",
        },
        {
            id: 2,
            icon: "revenue",
            title: "Add New Revenue Models",
            description:
                "Unlock new revenue streams, reduce operational costs, expand their SME and corporate customer base, and offer value-added digital financial services without building from scratch.",
        },
        {
            id: 3,
            icon: "reach",
            title: "Wider Customer Reach",
            description:
                "Expand into new regions and business segments by bundling EnKash with your existing SME and corporate offerings.",
        },
        {
            id: 4,
            icon: "visibility",
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
                <div className="content-grid">
                    {/* Left Content */}

                    <div className="left-content">

                        <div className="content-wrapper">
                            <h1 className="main-heading">Why Partner with Us?</h1>
                            <p className="description-text">
                                Partner with an all-in-one payments platform to deliver modern banking experiences across expense
                                management, corporate cards, and vendor payments. Partner with an all-in-one payments platform to
                                deliver modern banking experiences across expense management, corporate cards, and vendor payments.
                            </p>
                            <button className="cta-button">Explore Bank Partnerships</button>
                        </div>
                    </div>

                    {/* Right Slider */}
                    <div className="right-slider">
                        <div className="slider-wrapper">
                            <PartnershipSlider slides={slideData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnershipSection
