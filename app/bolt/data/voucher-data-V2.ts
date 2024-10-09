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
    howToRedeem: string[];
    about: {
      title: string;
      content: string;
    };
    bestGiftCards: {
      name: string;
      benefits: string;
    }[];
    purchaseInstructions: {
      steps: string[];
    };
    redemptionInstructions: {
      steps: string[];
    };
    termsAndConditions: string[];
    occasionSuggestions: {
      occasion: string;
      suggestion: string;
    }[];
    faqs: FAQ[];
  };
  