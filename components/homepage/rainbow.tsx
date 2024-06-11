"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import Heading from "@/components/heading/heading";
import {
  rainbowOne,
  rainbowTwo,
  rainbowThree,
  playButton,
  threeDownArrow,
  rainbowOneMobile,
  rainbowThreeMobile,
  rainbowTwoMobile,
} from "@/app/index";
import PrimaryButton from "@/components/buttons/primary-button/primary-button";
import SecondryButton from "@/components/buttons/secondary-button/secondary-button";

const RainbowSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let largeScreen;
  let posTopRainbowOneImg, posTopRainbowTwoImg, posTopRainbowThreeImg;
  let maxScrollForFullAdjustment;
  let maxAdjustment;

  if (typeof window !== "undefined") {
    largeScreen = window.matchMedia("(min-width:786px)");

    if (largeScreen.matches) {
      posTopRainbowOneImg = 136;
      posTopRainbowTwoImg = 236;
      posTopRainbowThreeImg = 346;
      maxScrollForFullAdjustment = 400;
      maxAdjustment = 45;
    } else {
      posTopRainbowOneImg = 105;
      posTopRainbowTwoImg = 160;
      posTopRainbowThreeImg = 210;
      maxScrollForFullAdjustment = 250;
      maxAdjustment = 15;
    }

    const segmentLength = maxScrollForFullAdjustment / 3;

    const computeAdjustment = (
      currentScroll: number,
      segmentLength: number,
      maxAdj: number
    ) => {
      return Math.min((currentScroll / segmentLength) * maxAdj, maxAdj);
    };

    if (scrollY < segmentLength) {
      posTopRainbowOneImg -= computeAdjustment(
        scrollY,
        segmentLength,
        maxAdjustment
      );
    } else if (scrollY < segmentLength * 2) {
      posTopRainbowOneImg -= maxAdjustment;
      posTopRainbowTwoImg -= computeAdjustment(
        scrollY - segmentLength,
        segmentLength,
        maxAdjustment
      );
    } else {
      posTopRainbowOneImg -= maxAdjustment;
      posTopRainbowTwoImg -= maxAdjustment;
      posTopRainbowThreeImg -= computeAdjustment(
        scrollY - 2 * segmentLength,
        segmentLength,
        maxAdjustment
      );
    }
  }

  return (
    <div>
      <div
        className={`${styles.first_row} row  text-center color-white bg-indi-volt`}
      >
        <span className={`col-12  ${styles.first_text}`}>
          <Heading title="A Platform For" size="h0" />
        </span>

        <Image
          src={rainbowOneMobile}
          alt="background image"
          className={`${styles.rainbow_one} mobile-only`}
          style={{ top: `${posTopRainbowOneImg}px` }}
          loading="lazy"
        />

        <Image
          src={rainbowOne}
          alt="background image"
          className={`${styles.rainbow_one} desktop-only`}
          style={{ top: `${posTopRainbowOneImg}px` }}
          loading="lazy"
        />

        <span className={`col-12  ${styles.second_text}`}>
          <Heading title="Businesses That" size="h0" />
        </span>

        <Image
          src={rainbowTwoMobile}
          alt="background image 2"
          className={`${styles.rainbow_two} mobile-only`}
          style={{ top: `${posTopRainbowTwoImg}px` }}
          loading="lazy"
        />

        <Image
          src={rainbowTwo}
          alt="background image 2"
          className={`${styles.rainbow_two} desktop-only`}
          style={{ top: `${posTopRainbowTwoImg}px` }}
          loading="lazy"
        />

        <span className={`col-12  ${styles.third_text}`}>
          <Heading title="Does It All" size="h0" />
        </span>

        <Image
          src={rainbowThreeMobile}
          alt="background image 3"
          className={`${styles.rainbow_three} mobile-only`}
          style={{ top: `${posTopRainbowThreeImg}px` }}
          loading="lazy"
        />

        <Image
          src={rainbowThree}
          alt="background image 3"
          className={`${styles.rainbow_three} desktop-only`}
          style={{ top: `${posTopRainbowThreeImg}px` }}
          loading="lazy"
        />

        <div className={`col-12 ${styles.description_text}`}>
          <div>
            <Heading
              title="A unique 360° platform for simplified finances, spends & collections backed by"
              size="h4"
              weight="4"
            />
          </div>
          <div>
            <Heading title="in-depth real-time insights" size="h4" weight="4" />
          </div>
        </div>
        <div className={`col-12 ${styles.description_text_mobile}`}>
          <div>
            <Heading
              title="Simplify business spends and improve cash flow with advanced technology and"
              size="h3"
              weight="4"
            />
          </div>
          <div>
            <Heading title="in-depth real-time insight" size="h3" weight="4" />
          </div>
        </div>
        <div className={`col-12 ${styles.button_container}`}>
          <PrimaryButton title="Get Free Demo" url="/sales" theme="blue" />
          <span className="mx-2"></span>
          <SecondryButton title="Sign Up" url="/sales/" iconSize={25} />
        </div>
        <div className={`col-12 ${styles.down_arrow}`}>
          <Image src={threeDownArrow} alt="arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default RainbowSection;
