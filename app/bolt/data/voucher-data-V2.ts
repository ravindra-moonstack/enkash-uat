type FAQ = {
  question: string;
  answer: {
    heading: string;
    bullets: string[];
  }[];
};

type Voucher = {
  voucherId: string;
  name: string;
  brandName?: string;
  category: string;
  discount: number;
  description: string;
  aboutCompany: string;
  backgroundImg: string;
  howToRedeemDesc: string;
  howToRedeemSteps: string[];
  checkBalanceDesc: string;
  checkBalanceSteps: string[];
  termsAndConditions: string[];
  corporateGifting: string;
  festivals: string;
  anniversary: string;
  birthdays: string;
};

const VoucherData: Record<string, Voucher> = {
  "Nykaa Fashion E-Gift Card": {
    voucherId: "PC272920797HGB6I",
    name: "Nykaa Fashion E-Gift Card",
    brandName: "Nykaa",
    category: "e-commerce",
    discount: 7,
    description:
      "The best way to pamper someone who loves fashion, beauty, and self-care is with a Nykaa Fashion E-Gift Card. The recipient can explore a wide range of products across fashion apparel, accessories, beauty products, personal care items, and even homeware. This Gift Card is the perfect gift for someone who likes their fashion game strong!",
    aboutCompany:
      "A one-stop online fashion and lifestyle platform tailored for the Indian market. With a curated selection of fashion and lifestyle products along with a convenient online shopping experience, Nykaa has become the talk of the town within no time.",
    backgroundImg: "PC272920797HGB6I.svg",
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
    termsAndConditions: [
      "1. This E-Gift Card can be redeemed both online and offline.",
      "2. For online redemption, visit Nykaa, Nykaa Man, Nykaa Fashion.",
      "3. Add the Gift Card amount to the payment page.",
      "4. Use it to pay for the item purchased.",
      "5. For offline redemption, visit any Nykaa retail store.",
      "6. Present the 16-digit code and PIN during billing.",
      "7. Use the Gift Card amount to pay for the purchase.",
    ],
    corporateGifting:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    festivals:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    anniversary:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    birthdays:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
  },
  "Mynta Fashion E-Gift Card": {
    voucherId: "PC272920797HGB6h",
    name: "Mynta Fashion E-Gift Card",
    brandName: "Nykaa",
    category: "e-commerce",
    discount: 7,
    description:
      "The best way to pamper someone who loves fashion, beauty, and self-care is with a Nykaa Fashion E-Gift Card. The recipient can explore a wide range of products across fashion apparel, accessories, beauty products, personal care items, and even homeware. This Gift Card is the perfect gift for someone who likes their fashion game strong!",
    aboutCompany:
      "A one-stop online fashion and lifestyle platform tailored for the Indian market. With a curated selection of fashion and lifestyle products along with a convenient online shopping experience, Nykaa has become the talk of the town within no time.",
    backgroundImg: "PC272920797HGB6h.svg",
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
    termsAndConditions: [
      "1. This E-Gift Card can be redeemed both online and offline.",
      "2. For online redemption, visit Nykaa, Nykaa Man, Nykaa Fashion.",
      "3. Add the Gift Card amount to the payment page.",
      "4. Use it to pay for the item purchased.",
      "5. For offline redemption, visit any Nykaa retail store.",
      "6. Present the 16-digit code and PIN during billing.",
      "7. Use the Gift Card amount to pay for the purchase.",
    ],
    corporateGifting:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    festivals:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    anniversary:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    birthdays:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
  },
  "amazon Fashion E-Gift Card": {
    voucherId: "PC272920797HGB6v",
    name: "amazon Fashion E-Gift Card",
    brandName: "Nykaa",
    category: "e-commerce",
    discount: 7,
    description:
      "The best way to pamper someone who loves fashion, beauty, and self-care is with a Nykaa Fashion E-Gift Card. The recipient can explore a wide range of products across fashion apparel, accessories, beauty products, personal care items, and even homeware. This Gift Card is the perfect gift for someone who likes their fashion game strong!",
    aboutCompany:
      "A one-stop online fashion and lifestyle platform tailored for the Indian market. With a curated selection of fashion and lifestyle products along with a convenient online shopping experience, Nykaa has become the talk of the town within no time.",
    backgroundImg: "PC272920797HGB6v.svg",
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
    termsAndConditions: [
      "1. This E-Gift Card can be redeemed both online and offline.",
      "2. For online redemption, visit Nykaa, Nykaa Man, Nykaa Fashion.",
      "3. Add the Gift Card amount to the payment page.",
      "4. Use it to pay for the item purchased.",
      "5. For offline redemption, visit any Nykaa retail store.",
      "6. Present the 16-digit code and PIN during billing.",
      "7. Use the Gift Card amount to pay for the purchase.",
    ],
    corporateGifting:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    festivals:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    anniversary:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
    birthdays:
      "Consider gifting your employees BookMyShow gift cards to help them relax & enjoy their holidays. It's a thoughtful way to show appreciation and ensure they have a pleasant break.",
  },
};
