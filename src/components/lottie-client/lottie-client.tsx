"use client";

import dynamic from "next/dynamic";

// Prevents SSR for Lottie
const Lottie = dynamic(() => import("@novemberfiveco/lottie-react-light"), { ssr: false });

interface LottieProps {
  animationData: any;
  loop?: boolean;
}

const LottieClientComponent = ({ animationData, loop = true }: LottieProps) => {
  if (!animationData) return null;

  return <Lottie animationData={animationData} loop={loop} />;
};

export default LottieClientComponent;
