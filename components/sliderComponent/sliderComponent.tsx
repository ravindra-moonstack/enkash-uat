"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./sliderComponent.module.scss"
import CustomBreadcrumb from "../breadcrumb/breadbrumb"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import RectangleButton from "../buttons/rectangle-button/rectangle-button"
import Image, { StaticImageData } from "next/image"

interface BreadcrumbItem {
  name: string
  url: string
}

interface Slide {
  backgroundImage?: string | StaticImageData
  backgroundColor?: string
  heading: string
  subHeading: string
  rightImage?: string | StaticImageData
  buttonText: string
  buttonUrl: string
}

interface SliderComponentProps {
  breadcrumbItems: BreadcrumbItem[]
  slides: Slide[]
}

export default function SliderComponent({
  breadcrumbItems,
  slides,
}: SliderComponentProps) {
  const settings = {
    dots: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 5000,
    cssEase: "linear",
  }

  return (
    <div className={styles.sliderComponent}>
      <div className={styles.breadcrumb}>
        <CustomBreadcrumb items={breadcrumbItems} linkColor="allWhite" />
        <div className={styles.first_row_title}>
          <DynamicHeading
            content={[
              {
                title: "Payment Links",
                color: "color-white underline",
              },
            ]}
            headingTag="p"
            className="mb-0"
          />
        </div>
      </div>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className={styles.voucherSlider}
              style={{
                background: slide.backgroundImage
                  ? `linear-gradient(0deg, rgb(255, 255, 255) -4%, rgb(255, 255, 255) 24.94%, rgb(255, 255, 255) 19.51%, rgba(255, 255, 255, 0.77) 31.74%, rgba(255, 255, 255, 0.33) 47.46%, rgba(255, 255, 255, 0) 70.45%) , url('${
                      typeof slide.backgroundImage === "string"
                        ? slide.backgroundImage
                        : slide.backgroundImage.src
                    }')`
                  : slide.backgroundColor,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="max-w-auto">
                <div className="row">
                  <div className="col-12 col-md-7">
                    <div
                      className={`text-center text-md-start ${styles.first_row_content}`}
                    >
                      <DynamicHeading
                        content={[
                          { title: slide.heading, color: "color-white" },
                        ]}
                        headingTag="h1"
                        className="f-7"
                      />
                      <div className="mt-3 mb-3">
                        <DynamicHeading
                          content={[
                            {
                              title: slide.subHeading,
                              color: "color-white subHeading",
                            },
                          ]}
                          headingTag="p"
                          className="mb-0"
                        />
                      </div>
                      <RectangleButton
                        title={slide.buttonText}
                        theme="blue"
                        url={slide.buttonUrl}
                      />
                    </div>
                  </div>

                  {slide.rightImage && (
                    <div className="col-12 col-md-5">
                      <div
                        className={`${styles.right_img} position-relative d-flex`}
                      >
                        <Image
                          src={slide.rightImage}
                          alt="slide visual"
                          style={{
                            objectFit: "contain",
                            maxHeight: "672px",
                            marginTop: "-150px",
                          }}
                          className="w-100 mh-550 object-fit-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
