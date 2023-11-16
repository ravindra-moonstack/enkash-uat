"use client";

import React, { useRef } from "react";
import { motion, useScroll, MotionValue } from "framer-motion";

interface props {
  innerHtml: any;
}

const TextAnimation = ({ innerHtml }: props) => {
  //Framer motion reference
  const ref = useRef<HTMLDivElement>(null);

  //Framer motion scroll progress
  const descTextScrollData = useScroll({
    target: ref,
    offset: ["0% 85%", "0% 50%"],
  }) as { scrollYProgress: MotionValue<number> };

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          opacity: descTextScrollData.scrollYProgress,
        }}
      >
        {innerHtml}
      </motion.div>
    </>
  );
};

export default TextAnimation;
