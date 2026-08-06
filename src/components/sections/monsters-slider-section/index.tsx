"use client"
import React from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./monsters-slider.module.scss"
import DynamicHeading from "../../dynamic-heading"

const MonstersSliderSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  }

  const slides = [
    {
      id: 1,
      image: "/images/ecommerce.webp",
      title: "D2C & Ecommerce",
      description:
        "Offer engine at scale, COD reconciliation, return-linked refunds, and split payments for marketplace models — surge-tested for 10× spikes.",
      highlight: "Turn payment failures into confirmed orders.",
      objectPositionMobile: "80%",
      objectPositionDesktop: "center",
    },
    {
      id: 2,
      image: "/images/education.webp",
      title: "Education & EdTech",
      description:
        "AutoPay & eNACH with clear failure codes and built-in retry, configurable dunning, and virtual accounts per student for auto-reconciliation.",
      highlight: "Higher collection efficiency, less collection effort.",
      objectPositionMobile: "60%",
      objectPositionDesktop: "center",
    },
    {
      id: 3,
      image: "/images/travel.webp",
      title: "Travel & Hospitality",
      description:
        "Pre-auth with partial capture and void, balance-at-check-in flows, dynamic pricing, and multi-currency for high-value bookings.",
      highlight: "High-value payments that don’t fail on the last screen.",
      objectPositionMobile: "90%",
      objectPositionDesktop: "center",
    },
    {
      id: 4,
      image: "/images/lending.webp",
      title: "NBFC & Lending",
      description:
        "eNACH and UPI AutoPay mandates with real failure reasons, presentation-date retries, part-payment collection, and borrower-level virtual accounts for reconciliation.",
      highlight: "Higher collection efficiency without more collection effort.",
      objectPositionMobile: "70%",
      objectPositionDesktop: "center",
    },
    {
      id: 5,
      image: "/images/marketplaces.webp",
      title: "Marketplaces & Aggregators",
      description:
        "Split payments across sellers, hold-and-release settlements, partner onboarding, and commission logic that reconciles itself — no month-end spreadsheet.",
      highlight: "Every partner paid on time, every time.",
      objectPositionMobile: "85%",
      objectPositionDesktop: "center",
    },
    {
      id: 6,
      image: "/images/healthcare.webp",
      title: "Healthcare & Diagnostics",
      description:
        "Appointment deposits and part-payments, pre-auth for procedures, insurance co-pay splits, instant refunds on cancellation, and per-branch reconciliation across locations.",
      highlight: "Fewer no-shows, cleaner books across every branch.",
      objectPositionMobile: "75%",
      objectPositionDesktop: "center",
    },
  ]

  return (
    <div className={styles.slider_section}>
      <div className="max-w-auto">
        <div
          className={`${styles.section_content} d-flex flex-column align-items-center`}
        >
          <DynamicHeading
            content={[
              {
                title: "Filmed on Location",
                color: "color-grey-200",
              },
            ]}
            headingTag="h2"
          />

          <p>
            The monsters behave differently in every industry. So does EnKash —
            with edge cases built into the configuration, not discovered in
            production.
          </p>
        </div>

        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              {/* Added a wrapper with padding for standard slick slider spacing if needed, but per instructions keeping exact UI */}
              <div className={styles.industry_card}>
                <div className={styles.industry_card_image}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1100}
                    height={400}
                    className={styles.industry_image}
                    style={{
                      "--obj-pos-mobile": slide.objectPositionMobile || "90%",
                      "--obj-pos-desktop": slide.objectPositionDesktop || "unset"
                    } as React.CSSProperties}
                  />

                  <div className={styles.industry_heading_overlay}>
                    <h3>{slide.title}</h3>
                  </div>
                  <div className={styles.industry_desktop_overlay}>
                    <h3 className={styles.desktop_heading}>{slide.title}</h3>
                    <div className={styles.desktop_description_wrap}>
                      <span className={styles.desktop_description_line}></span>
                      <p className={styles.desktop_description}>
                        {slide.description}
                      </p>
                    </div>
                    <p className={styles.desktop_highlight}>
                      {slide.highlight}
                    </p>
                  </div>
                </div>
                <div className={styles.industry_card_content}>
                  <p className={styles.industry_description}>
                    {slide.description}
                  </p>
                  <p className={styles.industry_highlight}>{slide.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default MonstersSliderSection
