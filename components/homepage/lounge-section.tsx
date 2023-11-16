"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import LottieDynamicLoadComponent from "../lottie-client/lottie-dynamic-load-client";
import { phoneAnimation } from "@/app";

const LoungeAnimationSection = () => {
  const loungeImgRef = useRef<HTMLDivElement>(null);

  //Framer motion scroll progress
  const loungeScrollData = useScroll({
    target: loungeImgRef,
    offset: ["0.5 1.5", "1 1"],
  }) as { scrollYProgress: MotionValue<number> };

  //Framer motion transform values
  const loungeTranslateY = useTransform(
    loungeScrollData.scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );
  return (
    <>
      <motion.div
        ref={loungeImgRef}
        style={{
          y: loungeTranslateY,
        }}
      >
        <LottieDynamicLoadComponent
          animationData={phoneAnimation}
          loop={true}
        />
      </motion.div>
    </>
  );
};

export default LoungeAnimationSection;
