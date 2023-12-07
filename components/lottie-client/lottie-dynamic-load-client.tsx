"use client";

import Lottie from "@novemberfiveco/lottie-react-light";
import React, { useEffect, useState } from "react";
import {
  phoneAndTabAnimation,
  payablesAnimation,
  recieveableAnimation,
  expenseManagementAnimation,
  corporateCardAnimation,
  diyCardAnimation,
  travelCardAnimation,
  saasAnimation,
  digitalAnimation,
  virtualCardAnimation,
  bulkCollectAnimation,
  invoiceAnimation,
  paymentLinkAnimation,
  quickCollectAnimation,
  virtualAccountAnimation,
  budgetAndAdvanceAnimation,
  heirarchyControlAnimation,
  policyAnimation,
  reimbursementAnimation,
  scanAndDropAnimation,
  employeeeRewardAnimation,
  channelIncentiveAnimation,
  giftCardAnimation,
  brandVoucherAnimation,
  mealCardAnimation,
  fuelAnimation,
  purchaseCardAnimation,
  olympusVendorAnimation,
  olympusGSTAnimation,
  olympusRentalAnimation,
  olympusMultiBankAnimation,
  olympusCollectAnimation,
  olympusUtilityAnimation,
  loyaltyFive,
  loyaltyFour,
  loyaltyOne,
  loyaltyThree,
  loyaltyTwo,
  loyaltyBannerAnimation,
  automate,
  manage,
  optimize,
  track,
  ofexBannerAnimation,
  freedomBannerAnimation,
  olympusBannerAnimation,
  recievablesBannerAnimation,
} from ".";

const animationMap: Record<string, () => Promise<any>> = {
  HomePagePhoneAndTab: phoneAndTabAnimation,
  HomePagePayables: payablesAnimation,
  HomePageRecieveable: recieveableAnimation,
  HomePageExpenseManagement: expenseManagementAnimation,
  HomePageCorporateCard: corporateCardAnimation,
  HomePageDiyCard: diyCardAnimation,

  LoyaltyOne: loyaltyOne,
  LoyaltyTwo: loyaltyTwo,
  LoyaltyThree: loyaltyThree,
  LoyaltyFour: loyaltyFour,
  LoyaltyFive: loyaltyFive,

  manage: manage,
  track: track,
  optimize: optimize,
  automate: automate,

  FreedomBannerAnimation: freedomBannerAnimation,
  FreedomTravelAnimation: travelCardAnimation,
  FreedomSaasAnimation: saasAnimation,
  FreedomVirtualAnimation: virtualCardAnimation,
  FreedomDigitalAnimation: digitalAnimation,
  FreedomMealAnimation: mealCardAnimation,
  FreedomFuelAnimation: fuelAnimation,
  FreedomPurchaseAnimation: purchaseCardAnimation,


  RecievablesBannerAnimation:  recievablesBannerAnimation,
  RecievablesInvoiceAnimation: invoiceAnimation,
  RecievablesBulkAnimation: bulkCollectAnimation,
  RecievablesPaymentAnimation: paymentLinkAnimation,
  RecievablesQuickAnimation: quickCollectAnimation,
  RecievablesVirtualAnimation: virtualAccountAnimation,
  
  OfexBannerAnimation: ofexBannerAnimation,
  XpenzHeirarchyAnimation: heirarchyControlAnimation,
  XpenzBudgetAnimation: budgetAndAdvanceAnimation,
  XpenzReimbursementAnimation: reimbursementAnimation,
  XpenzScanAnimation: scanAndDropAnimation,
  XpenzPolicyAnimation: policyAnimation,

  LoyaltyBannerAnimation: loyaltyBannerAnimation,
  LoyaltyEmployeeAnimation: employeeeRewardAnimation,
  LoyaltyChannelAnimation: channelIncentiveAnimation,
  LoyaltyGiftCardAnimation: giftCardAnimation,
  LoyaltyBrandVoucherAnimation: brandVoucherAnimation,

  OlympusBannerAnimation: olympusBannerAnimation,
  OlympusVendorAnimation: olympusVendorAnimation,
  OlympusGSTAnimation: olympusGSTAnimation,
  OlympusUtilityAnimation: olympusUtilityAnimation,
  OlympusRentalAnimation: olympusRentalAnimation,
  OlympusMultiBanAnimation: olympusMultiBankAnimation,
  OlympusCollectAnimation: olympusCollectAnimation,
};

interface LottieDynamicLoadComponentProps {
  animationName: string;
  loop: boolean;
}

const LottieDynamicLoadComponent = ({
  animationName,
  loop = true,
}: LottieDynamicLoadComponentProps) => {
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
