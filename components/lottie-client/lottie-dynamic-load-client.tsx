"use client";

import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import {
  phoneAndTabAnimation,
  payablesAnimation,
  recieveableAnimation,
  expenseManagementAnimation,
  corporateCardAnimation,
  diyCardAnimation,
  phoneAnimation,
} from "./index";

const animationMap: Record<string, () => Promise<any>> = {
  HomePagePhoneAndTab: phoneAndTabAnimation,
  HomePagePayables: payablesAnimation,
  HomePageRecieveable: recieveableAnimation,
  HomePageExpenseManagement: expenseManagementAnimation,
  HomePageCorporateCard: corporateCardAnimation,
  HomePageDiyCard: diyCardAnimation,
  HomePagePhone: phoneAnimation,
};

interface LottieDynamicLoadComponentProps {
  animationName: string;
  loop: boolean;
}

const LottieDynamicLoadComponent: React.FC<LottieDynamicLoadComponentProps> = ({
  animationName,
  loop = true,
}) => {
  const [animationData, setAnimationData] = useState<any | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      if (animationMap.hasOwnProperty(animationName)) {
        const dynamicAnimationModule = await animationMap[animationName]();
        setAnimationData(dynamicAnimationModule.default);
      } else {
        console.error(`Animation "${animationName}" not found.`);
      }
    };

    loadAnimation();
  }, [animationName]);

  return (
    <>{animationData && <Lottie animationData={animationData} loop={loop} />}</>
  );
};

export default LottieDynamicLoadComponent;
