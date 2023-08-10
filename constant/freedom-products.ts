import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
} from "@/components/header";

const freedomProducts = [
  {
    subtitle: "Default",
    list: [
      {
        name: "Corporate Cards",
        description: "Issue purpose-based cards to your teams",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Virtual Cards",
        description: "Unlimited cards with centralised controls",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Integrated Cards",
        description: "Optimise corporate spendings",
        imageSrc: bulkPayout,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "DIY Card Module",
        description: "Create and manage all your cards on your own",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
      {
        name: "Spend Control",
        description: "Real-time visibility and control on your spends",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
      },
    ],
    footerText: "Stream Line with Freedom",
  },
];

export default freedomProducts;
