"use client";

import React, { useState } from "react";
import styles from "./how-does-carousel.module.scss";
import Heading from "../heading/heading";
import Image from "next/image";
import { blueArrowBackward, blueArrowForward, laptop } from ".";

interface CarouselData {
  titleContent: any;
  mainTitle: string;
  carouselBg: any;
  carouselData: any;
}

const HowDoesCarousel = ({
  titleContent,
  mainTitle,
  carouselData,
  carouselBg,
}: CarouselData) => {
  const [count, setCount] = useState(1);

  const handleForwardClick = () => {
    if (count < carouselData.length) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleBackwardClick = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div
      className={styles.home_container}
      style={{
        backgroundImage: `url(${carouselBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.title}>{titleContent}</div>
      <div className={styles.container}>
        <div className={`mt-5 d-flex flex-column ${styles.left_row}`}>
          <Heading title={mainTitle} color="white" size="h1" />
          <div className="d-flex align-items-center mt-4">
            <Image
              className="me-3"
              src={blueArrowBackward}
              alt="enkash steps"
              onClick={handleBackwardClick}
              style={{
                cursor: count === 1 ? "not-allowed" : "pointer",
                opacity: count === 1 ? 0.5 : 1,
              }}
            />
            <Heading
              title={`${count}/${carouselData.length}`}
              color="white"
              size="h4"
            />
            <Image
              className="ms-3"
              src={blueArrowForward}
              alt="enkash steps"
              onClick={handleForwardClick}
              style={{
                cursor:
                  count === carouselData.length ? "not-allowed" : "pointer",
                opacity: count === carouselData.length ? 0.5 : 1,
              }}
            />
          </div>
        </div>
        <div className={styles.right_row}>
          <Image src={laptop} alt="laptop image" />
          <div className={styles.content}>
            <Image
              src={carouselData[count - 1].image}
              alt={carouselData[count - 1].alt}
              className="mb-2"
            />
            <Heading
              title={carouselData[count - 1].title}
              color="white"
              size="h4"
              weight="4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesCarousel;
