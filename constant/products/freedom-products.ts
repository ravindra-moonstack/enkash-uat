import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
  taxPaymentFilled,
  digitalMarketingCard,
  digitalMarketingCardFilled,
  saas,
  saasFilled,
  tne,
  tneFilled,
  virtualCard,
  virtualCardFilled,
  mealCard,
  payrollCard,
  mealCardFilled,
  payrollCardFilled,
  fuelCard,
  fuelCardFilled,
  purchaseCard,
  purchaseCardFilled,
  multiForexCard,
  multiForexCardFilled,
} from "@/components/header";

const freedomProducts = [
  {
    subtitle: "Default",
    currentHeading: {
      name: "Freedom",
      description: "Simplify corporate spending with flexible card solutions",
    },
    list: [
      {
        name: "SaaS Cards*",
        description:
          "Manage all your SaaS subscriptions with our dedicated SaaS Cards",
        imageSrc: saas,
        imageSrcHovered: saasFilled,
        link: "/saas-cards",
      },
      {
        name: "Meal Cards*",
        description:
          "Let your employees choose their favorite meals and save on taxes",
        imageSrc: mealCard,
        imageSrcHovered: mealCardFilled,
        link: "/meal-cards",
      },
      {
        name: "Payroll Cards*",
        description: "Pay your employees quickly and easily with payroll cards",
        imageSrc: payrollCard,
        imageSrcHovered: payrollCardFilled,
        link: "/payroll-cards",
      },
      {
        name: "T&E Cards*",
        description: "Simplify travel and entertainment expenses for employees",
        imageSrc: tne,
        imageSrcHovered: tneFilled,
        link: "/travel-and-expense-cards",
      },
      {
        name: "Digital Marketing Cards*",
        description:
          "Pay for digital marketing campaigns and subscriptions with ease",
        imageSrc: digitalMarketingCard,
        imageSrcHovered: digitalMarketingCardFilled,
        link: "/digital-marketing-cards",
      },
      {
        name: "Fuel Cards*",
        description: "Track and manage fuel expenses for your business travels",
        imageSrc: fuelCard,
        imageSrcHovered: fuelCardFilled,
        link: "/fuel-cards",
      },
      {
        name: "Purchase Cards*",
        description:
          "Empower employees to make purchases and track spends in real time",
        imageSrc: purchaseCard,
        imageSrcHovered: purchaseCardFilled,
        link: "/purchase-cards",
      },
      {
        name: "Virtual Cards*",
        description: "Unlimited cards with centralized controls",
        imageSrc: virtualCard,
        imageSrcHovered: virtualCardFilled,
        link: "/virtual-cards",
      },

      {
        name: "Multi-Currency Forex Cards*",
        description: "Hassle-free international travel and business",
        imageSrc: multiForexCard,
        imageSrcHovered: multiForexCardFilled,
        link: "/multi-currency-forex-cards",
      },
    ],
    footerText: "Empower your finances with purpose-based cards",
    footerMobileText: "Explore Freedom",
    footerImg: "freedom_footer_bg",
    footerLink: "/freedom",
    parentLink: "/freedom",
  },
];

export default freedomProducts;
