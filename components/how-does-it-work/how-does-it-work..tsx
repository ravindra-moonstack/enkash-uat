"use client";

import { Key, useEffect, useState } from "react";
import rupeeCard from "./rupee-card.png";
import laptop from "./laptop.png";
import styles from "./how-does-it-work.module.scss";
import Image, { StaticImageData } from "next/image";
import Heading from "../heading/heading";

interface howDoesItWorkProps {
  bannerImage?: StaticImageData;
  dataSets: any;
}

const HowDoesItWork = ({ bannerImage, dataSets }: howDoesItWorkProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData((prevData: number) => (prevData + 1) % dataSets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [currentData, setCurrentData] = useState(0);

  const defaultImageSrc: StaticImageData = laptop;

  const imageToDisplay: StaticImageData = bannerImage || defaultImageSrc;

  return (
    <div className={styles.home_container}>
      <div
        className={`d-flex col-12 flex-column flex-md-row align-items-center ${styles.card}`}
      >
        <div className="d-flex flex-column flex-md-row justify-content-center">
          <div className={styles.img_container}>
            <Image src={imageToDisplay} alt="office team image" />
          </div>
          <div
            className={`d-flex flex-column align-items-md-center ${styles.card_container}`}
          >
            <Heading
              title="How does it work?"
              color="electric-green"
              size="h2"
              weight="6"
            />

            <div className="mt-md-5 mt-3 d-flex flex-column flex-md-row">
              <Image
                src={dataSets[currentData].imageSrc}
                alt={dataSets[currentData].altText}
                className={`${styles.icon_img}`}
              />
              <h1 className={styles.heading}>
                {dataSets[currentData].heading}
              </h1>
            </div>

            <div
              className={`d-flex justify-content-center ${styles.progress_bar}`}
            >
              {dataSets.map((_: any, index: Key | null | undefined) => (
                <span
                  key={index}
                  className={`${styles.bar} ${
                    currentData === index ? "bg-equity-blue" : "bg-shadow-blue"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
