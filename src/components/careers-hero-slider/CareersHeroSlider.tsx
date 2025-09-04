"use client"

import React, { useMemo } from "react"
import Slider, { Settings } from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./CareersHeroSlider.module.scss"

import {
  bannerSlider1,
  bannerSlider2,
  bannerSlider3,
  mobilebannerSlider1,
  mobilebannerSlider2,
  mobilebannerSlider3,
} from "."

import CustomBreadcrumb from "../breadcrumb/breadbrumb"
import DynamicHeading from "../dynamic-heading/dynamic-heading"
import RectangleButton from "../buttons/rectangle-button"

const CareersHero: React.FC = () => {
  // Backgrounds for desktop & mobile
  const backgrounds = [
    { desktop: bannerSlider1, mobile: mobilebannerSlider1 },
    { desktop: bannerSlider2, mobile: mobilebannerSlider2 },
    { desktop: bannerSlider3, mobile: mobilebannerSlider3 },
  ]

  const settings: Settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    }),
    []
  )

  return (
    <div className={`${styles.careerBannerOuter} careerBannerOuterGlobal`}>
      <Slider {...settings} className="h-full">
        {backgrounds.map((bg, index) => (
          <div key={index} className={`${styles.careerBannerImage} relative`}>
            <picture>
              <source media="(max-width: 768px)" srcSet={bg.mobile.src} />

              <Image
                src={bg.desktop}
                alt={`Background ${index}`}
                fill
                className="brightness-75"
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </picture>
          </div>
        ))}
      </Slider>

      {/* Fixed Content */}
      <div className={`${styles.bannerContentSetion}`}>
        <div className="max-w-auto">
          <div className="row">
            <div className={`${styles.customBreadcrumbSection}`}>
              <CustomBreadcrumb
                items={[
                  { name: "Home", url: "/" },
                  { name: "Careers", url: "/careers" },
                ]}
              />
            </div>
          </div>

          <div className={`${styles.bannerContentSetionTop}`}>
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.pageTitle}`}>
                  <DynamicHeading
                    content={[{ title: "Careers", color: "color-white " }]}
                    headingTag="p"
                    className="mb-2 text-center mt-4 mt-md-4"
                  />
                </div>

                <div className={`${styles.banner_heading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title:
                          "Building the Future of How Businesses Pay, Spend & Grow",
                        color: "color-white  f-3",
                      },
                    ]}
                    headingTag="h1"
                    className="text-center mb-2"
                  />
                </div>

                <div className={`${styles.bannerSubHeading}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Come for the Mission. Stay for the Impact.",
                        color: "color-white subHeading f-3",
                      },
                    ]}
                    headingTag="p"
                    className="text-center mb-3"
                  />
                </div>

                <div
                  className={`${styles.bannerButton} d-flex justify-content-center`}
                >
                  <RectangleButton
                    title="Explore Open Roles"
                    theme="blue"
                    url="#yourOpportunitySection"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareersHero
