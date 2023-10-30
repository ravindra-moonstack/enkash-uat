"use client";

import { useEffect, useState } from "react";
import rupeeCard from "./rupee-card.png";
import laptop from "./laptop.png";
import styles from "./how-does-it-work.module.scss";
import Image, { StaticImageData } from "next/image";
import Heading from "../heading/heading";

interface howDoesItWorkProps {
  bannerImage?: StaticImageData; // Define the bannerImage as optional with type StaticImageData
}

const HowDoesItWork = ({ bannerImage }: howDoesItWorkProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData((prevData: number) => (prevData + 1) % dataSets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [currentData, setCurrentData] = useState(0);

  const dataSets = [
    {
      imageSrc: rupeeCard,
      altText: "Ensure timely payment image",
      heading:
        "Make sure your business expenses are paid on time for uninterrupted operations.",
    },
    {
      imageSrc: rupeeCard,
      altText: "Make sure your businessimage",
      heading:
        "Prioritize paying your business costs on schedule to guarantee continuous workflow.",
    },
    {
      imageSrc: rupeeCard,
      altText: "Ensure timely payment image",
      heading:
        "Ensure timely payment of your business expenses to maintain smooth operations.",
    },
  ];

  const defaultImageSrc: StaticImageData = laptop;

  const imageToDisplay: StaticImageData = bannerImage || defaultImageSrc;

  return (
    <div className={styles.home_container}>
      <div
        className={`d-flex col-12 flex-column flex-md-row align-items-center ${styles.card}`}
      >
        <div className="d-flex flex-column flex-md-row">
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
                className={`${styles.rupee_img}`}
              />
              <h1 className={styles.heading}>
                {dataSets[currentData].heading}
              </h1>
            </div>

            <div
              className={`d-flex justify-content-center ${styles.progress_bar}`}
            >
              {dataSets.map((_, index) => (
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
