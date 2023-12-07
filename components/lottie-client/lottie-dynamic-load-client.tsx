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

  FreedomTravelAnimation: travelCardAnimation,
  FreedomSaasAnimation: saasAnimation,
  FreedomVirtualAnimation: virtualCardAnimation,
  FreedomDigitalAnimation: digitalAnimation,
  FreedomMealAnimation: mealCardAnimation,
  FreedomFuelAnimation: fuelAnimation,
  FreedomPurchaseAnimation: purchaseCardAnimation,

  RecievablesInvoiceAnimation: invoiceAnimation,
  RecievablesBulkAnimation: bulkCollectAnimation,
  RecievablesPaymentAnimation: paymentLinkAnimation,
  RecievablesQuickAnimation: quickCollectAnimation,
  RecievablesVirtualAnimation: virtualAccountAnimation,

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
function olympusUtilitynimation(): Promise<any> {
  throw new Error("Function not implemented.");
}
