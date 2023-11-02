"use client";

import Lottie from "lottie-react";

interface LottieProps {
  animationData: any;
  loop: boolean;
}

const LottieClientComponent = ({ animationData, loop }: LottieProps) => {
  return (
    <>
      <Lottie animationData={animationData} loop={loop} />
    </>
  );
};

export default LottieClientComponent;
