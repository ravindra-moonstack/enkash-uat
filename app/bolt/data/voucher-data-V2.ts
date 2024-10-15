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
  faqs: FAQ[];
};
