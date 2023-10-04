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
        name: "Integrated Cards",
        description: "Optimise corporate spendings",
        imageSrc: bulkPayout,
        imageSrcHovered: vendorPaymentFilled,
        link: "/404",
      },
      {
        name: "DIY Card Module",
        description: "Create and manage all your cards on your own",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/404",
      },
      {
        name: "Spend Control",
        description: "Real-time visibility and control on your spends",
        imageSrc: taxPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/404",
      },
    ],
    footerText: "Stream Line with Freedom",
    footerImg: "xpenz_footer_bg",
    footerLink: "/freedom",
  },
];

export default freedomProducts;
