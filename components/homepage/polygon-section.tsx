"use client";

import { polygonOne, polygonOneShadow, polygonTwo, polygonThree } from "@/app";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import styles from "@/app/page.module.scss";

const PolygonSection = () => {
  const polygonOneRef = useRef<HTMLImageElement>(null);
  const polygonTwoRef = useRef<HTMLImageElement>(null);
  const polygonThreeRef = useRef<HTMLImageElement>(null);

  const polygonOneScrollData = useScroll({
    target: polygonOneRef,
    offset: ["0.2 1.2", "0.5 1.2"],
  }) as { scrollYProgress: MotionValue<number> };

  const polygonTwoScrollData = useScroll({
    target: polygonTwoRef,
    offset: ["0.2 1.3", "0.7 1.3"],
  }) as { scrollYProgress: MotionValue<number> };

  const polygonThreeScrollData = useScroll({
    target: polygonThreeRef,
    offset: ["0.2 1.4", "1.1 1.4"],
  }) as { scrollYProgress: MotionValue<number> };

  const polygonOneTranslateY = useTransform(
    polygonOneScrollData.scrollYProgress,
    [0, 1],
    ["50%", "0%"]
  );

  const polygonTwoTranslateY = useTransform(
    polygonTwoScrollData.scrollYProgress,
    [0, 1],
    ["100", "0%"]
  );
  const polygonThreeTranslateY = useTransform(
    polygonThreeScrollData.scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  return (
    <>
      <motion.img
        ref={polygonOneRef}
        style={{ y: polygonOneTranslateY }}
        src={polygonOne.src}
        alt="background image"
        className={styles.polygon_one}
      />

      <motion.img
        ref={polygonOneRef}
        style={{ y: polygonOneTranslateY }}
        src={polygonOneShadow.src}
        alt="enkash stack image"
        className={styles.polygon_one_shadow}
      />

      <motion.img
        ref={polygonTwoRef}
        style={{ y: polygonTwoTranslateY }}
        src={polygonTwo.src}
        alt="background image"
        className={styles.polygon_two}
      />
      <motion.img
        ref={polygonThreeRef}
        style={{ y: polygonThreeTranslateY }}
        src={polygonThree.src}
        alt="background image"
        className={styles.polygon_three}
      />
    </>
  );
};

export default PolygonSection;
