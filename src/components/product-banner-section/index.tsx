"use client";

import React from "react";
import styles from "./banner.module.scss";
import { CustomBreadcrumb, DynamicHeading, LottieDynamicLoadComponent, RectangleButton } from "..";


interface ProductBannerProps {
  breadcrumbItems: { name: string; url: string }[];
  heading: { title: string; color: string }[];
  subHeading: string;
  buttonText: string;
  buttonUrl: string;
  lottieName?: string;
  backgroundImages: string[]; 
}

const ProductBanner: React.FC<ProductBannerProps> = ({
  breadcrumbItems,
  heading,
  subHeading,
  buttonText,
  buttonUrl,
  lottieName,
  backgroundImages,
}) => {
  // join multiple bg urls
  const bgImage = backgroundImages.map((img) => `url(${img})`).join(", ");

  return (
    <div
      className={styles.ProductBannerWrapper}
      style={{
        backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ), ${bgImage}`,
      }}
    >
      <div className="max-w-auto position-relative no-pointer">
        {/* Breadcrumb */}
        <div className="d-flex">
          <CustomBreadcrumb items={breadcrumbItems} linkColor="white" />
        </div>

        {/* Headings */}
        <div className="col-12 d-flex flex-column text-center">
          <div className="text-center mb-3 mt-3">
            <DynamicHeading content={heading} headingTag="h1" className="f-7" />
          </div>
          <DynamicHeading
            content={[{ title: subHeading, color: "color-white d-block text-center subHeading" }]}
            headingTag="p"
          />

          {/* CTA */}
          <div className="justify-content-center d-flex mt-3 pointer-auto">
            <RectangleButton title={buttonText} theme="blue" url={buttonUrl} />
          </div>
        </div>

        {/* Lottie */}
        {lottieName && (
          <div className="col-12 d-flex justify-content-center align-items-center no-pointer">
            <div className={styles.ProductBannerImages}>
              <div className={styles.lottie_container}>
                <LottieDynamicLoadComponent animationName={lottieName} loop />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductBanner;
