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
      description: "Simplify corporate spending with flexible card solutions",
    },
    list: [
      {
        name: "SaaS Cards*",
        description:
          "Manage all your SaaS subscriptions with our dedicated SaaS Card",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/saas-cards",
      },
      {
        name: "Meal Cards*",
        description:
          "Let your employees choose their favorite meals and save on taxes",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/meal-cards",
      },
      {
        name: "Payroll Cards*",
        description: "Pay your employees quickly and easily with payroll cards",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/payroll-cards",
      },
      ////
      {
        name: "T&E Cards*",
        description: "Simplify travel and entertainment expenses for employees",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/tne-cards",
      },
      {
        name: "Virtual Cards*",
        description: "Unlimited cards with centralized controls",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
        link: "/virtual-cards",
      },
      {
        name: "Fuel Cards*",
        description: "Track and manage fuel expenses for your business travels",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/fuel-cards",
      },
      {
        name: "Purchase Cards*",
        description:
          "Empower employees to make purchases and track spends in real time",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/purchase-cards",
      },
      {
        name: "Digital Marketing Cards*",
        description:
          "Pay for digital marketing campaigns and subscriptions with ease",
        imageSrc: bulkPayout,
        imageSrcHovered: vendorPaymentFilled,
        link: "/digital-marketing-cards",
      },

      {
        name: "Multi-Currency Forex Cards*",
        description: "Hassle-free international travel and business",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/multi-currency-forex-cards",
      },
    ],
    footerText: "Stream Line with Freedom",
    footerImg: "freedom_footer_bg",
    footerLink: "/freedom",
  },
];

export default freedomProducts;
