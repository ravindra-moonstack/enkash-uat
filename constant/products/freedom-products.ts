import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
  taxPaymentFilled,
} from "@/components/header";

const freedomProducts = [
  {
    subtitle: "Default",
    currentHeading: {
      name: "Freedom",
      description:
        "Automate your company's AP, AR, and bank reconciliation seamlessly",
    },
    list: [
      {
        name: "Corporate Cards",
        description: "Issue purpose-based cards to your teams",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/404",
      },
      {
        name: "Digital Marketing Cards",
        description: "Unlimited cards with centralised controls",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
        link: "/digital-marketing-cards",
      },
      {
        name: "Travel and Expense Cards",
        description: "Optimise travel spendings",
        imageSrc: bulkPayout,
        imageSrcHovered: vendorPaymentFilled,
        link: "/travel-and-expense-cards",
      },
      {
        name: "DIY Card Module",
        description: "Create and manage all your cards on your own",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/404",
      },
      {
        name: "SaaS Cards",
        description: "saas cards and control on your spends",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/saas",
      },
    ],
    footerText: "Stream Line with Freedom",
    footerImg: "xpenz_footer_bg",
    footerLink: "/freedom",
  },
];

export default freedomProducts;
