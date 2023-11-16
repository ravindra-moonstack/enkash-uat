"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface LottieProps {
  animationData: any;
  loop: boolean;
}

const LottieDynamicLoadComponent = ({
  animationData,
  loop = true,
}: LottieProps) => {
  type LottieAnimationData = any;

  const [phoneAndTabAnimationData, setPhoneAndTabAnimationData] =
    useState<LottieAnimationData | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const phoneAndTabAnimationModule = await animationData();
      setPhoneAndTabAnimationData(phoneAndTabAnimationModule.default);
    };

    loadAnimation();
  }, []);
  return (
    <>
      <Lottie animationData={phoneAndTabAnimationData} loop={loop} />
    </>
  );
};

export default LottieDynamicLoadComponent;
