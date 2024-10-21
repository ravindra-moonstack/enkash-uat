type FAQ = {
  question: string;
  answer: {
    heading: string;
    bullets: string[];
  }[];
};

export type Voucher = {
  voucherId: string;
  name: string;
  brandName: string;
  category: string;
  discount: number;
  backgroundImg: string;
  descriptionTitle: string;
  description: string;
  aboutCompany: string;
  calculatorTitle: string;
  calculatorDescription?: string;
  howToBuyTitle: string;
  howToRedeemTitle: string;
  howToRedeemDesc: string;
  howToRedeemSteps: string[];
  checkBalanceTitle: string;
  checkBalanceDesc: string;
  checkBalanceSteps: string[];
  termsAndConditionsTitle: string;
  termsAndConditionSteps: string[];
  occasionsTitle: string;
  festivals: string;
  anniversary: string;
  birthdays: string;
};

export const VoucherDataV2: Record<string, Voucher> = {
  PC272920797HGB6I: {
    voucherId: "PC272920797HGB6I",
    name: "Nykaa Fashion E-Gift Card",
    brandName: "Nykaa",
    category: "e-commerce",
    discount: 7,
    backgroundImg: "PC272920797HGB6I.png",
    descriptionTitle: "Nykaa Fashion E-Gift Card",
    description:
      "The best way to pamper someone who loves fashion, beauty, and self-care is with a Nykaa Fashion E-Gift Card. The recipient can explore a wide range of products across fashion apparel, accessories, beauty products, personal care items, and even homeware. This Gift Card is the perfect gift for someone who likes their fashion game strong!",
    aboutCompany:
      "A one-stop online fashion and lifestyle platform tailored for the Indian market. With a curated selection of fashion and lifestyle products along with a convenient online shopping experience, Nykaa has become the talk of the town within no time.",
    calculatorTitle: "About Nykaa Fashion E-Gift Card",
    calculatorDescription:
      "BookMyShow Gift Cards are a popular choice for presents, whether for a special occasion or a thoughtful gesture. These gift cards are a convenient and appreciated option that suits any budget and preference.\n",
    howToBuyTitle: "How to Buy a Nykaa Fashion E-Gift Card?",
    howToRedeemTitle: "How to Use or Redeem Nykaa Fashion E-Gift Card?",
    howToRedeemDesc:
      "BookMyShow Gift Cards are preactivated cards and remain valid for 6 months from purchase. The balance of the BookMyShow Gift Card Voucher can be checked on the mobile app or website.\xa0",
    howToRedeemSteps: [
      "1. This E-Gift Card can be redeemed both online and offline.",
      "2. For online redemption, visit Nykaa, Nykaa Man, Nykaa Fashion.",
      "3. Add the Gift Card amount to the payment page.",
      "4. Use it to pay for the item purchased.",
      "5. For offline redemption, visit any Nykaa retail store.",
      "6. Present the 16-digit code and PIN during billing.",
      "7. Use the Gift Card amount to pay for the purchase.",
    ],
    checkBalanceTitle: "How to Check Nykaa Fashion E-Gift Card Balance?",
    checkBalanceDesc:
      "BookMyShow Gift Cards are preactivated cards and remain valid for 6 months from purchase. The balance of the BookMyShow Gift Card Voucher can be checked on the mobile app or website.\xa0",
    checkBalanceSteps: [
      "1. This E-Gift Card can be redeemed both online and offline.",
      "2. For online redemption, visit Nykaa, Nykaa Man, Nykaa Fashion.",
      "3. Add the Gift Card amount to the payment page.",
      "4. Use it to pay for the item purchased.",
      "5. For offline redemption, visit any Nykaa retail store.",
      "6. Present the 16-digit code and PIN during billing.",
      "7. Use the Gift Card amount to pay for the purchase.",
    ],
    termsAndConditionsTitle: "Terms & Conditions for Nykaa Fashion E-Gift Card",
    termsAndConditionSteps: [
      "1. This E-Gift Card can be redeemed both online and offline.",
      "2. For online redemption, visit Nykaa, Nykaa Man, Nykaa Fashion.",
      "3. Add the Gift Card amount to the payment page.",
      "4. Use it to pay for the item purchased.",
      "5. For offline redemption, visit any Nykaa retail store.",
      "6. Present the 16-digit code and PIN during billing.",
      "7. Use the Gift Card amount to pay for the purchase.",
    ],
    occasionsTitle: "Nykaa Fashion E-Gift Cards for different Occasions",
    festivals:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    anniversary:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    birthdays:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
  },
};
