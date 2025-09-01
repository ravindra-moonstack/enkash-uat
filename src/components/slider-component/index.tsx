"use client"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./sliderComponent.module.scss"
import CustomBreadcrumb from "../breadcrumb/breadbrumb"
import DynamicHeading from "../dynamic-heading/dynamic-heading"
import RectangleButton from "../buttons/rectangle-button"
import Image, { StaticImageData } from "next/image"
import { useMemo } from "react"

interface BreadcrumbItem {
  name: string
  url: string
}

export interface Slide {
  backgroundImage?: string | StaticImageData
  backgroundColor?: string
  heading: string
  rightImageMarginTop?: string
  rightImageMaxHeight?: string
  subHeading: string
  rightImage?: string | StaticImageData
  buttonText: string
  buttonUrl: string
  discount: number
  brandName: string
}

interface SliderComponentProps {
  breadcrumbItems: BreadcrumbItem[]
  slides: Slide[]
  title: string
}

export default function SliderComponent({
  breadcrumbItems,
  slides,
  title,
}: SliderComponentProps) {
  const settings: Settings = useMemo(
    () => ({
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
    }),
    []
  )

  return (
    <div className={styles.sliderComponent}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className={styles.voucherSlider}
              style={{
                background: slide.backgroundImage
                  ? ` url('${
                      typeof slide.backgroundImage === "string"
                        ? slide.backgroundImage
                        : slide.backgroundImage.src
                    }')`
                  : slide.backgroundColor,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                width: "100%",
              }}
            >
              <div className="max-w-auto">
                <div className="row">
                  <div className="col-12 col-md-7">
                    <div className={styles.breadcrumb}>
                      <CustomBreadcrumb
                        items={breadcrumbItems}
                        linkColor="allWhite"
                      />
                      <div className={styles.first_row_title}>
                        <DynamicHeading
                          content={[
                            { title: title, color: "color-white underline" },
                          ]}
                          headingTag="p"
                          className="mb-0 "
                        />
                      </div>
                    </div>
                    <div
                      className={`text-center text-md-start ${styles.first_row_content}`}
                    >
                      <DynamicHeading
                        content={[
                          { title: slide.heading, color: "color-white" },
                          {
                            title: ` ${slide.discount} % off`,
                            color: "color-white",
                          },
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
                            maxHeight: slide.rightImageMaxHeight ?? "400px",
                            marginTop: slide.rightImageMarginTop ?? "0px",
                          }}
                          className="w-100 mh-550 object-fit-contain "
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
