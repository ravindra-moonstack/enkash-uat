"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("@novemberfiveco/lottie-react-light"), { ssr: false });

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
