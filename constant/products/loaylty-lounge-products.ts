import {
  vendorPayment,
  vendorPaymentFilled,
  bulkPayout,
  taxPayment,
  bulkPayoutFilled,
  taxPaymentFilled,
  brandVouchers,
  brandVouchersFilled,
  offers,
  offersFilled,
  giftCards,
  giftCardFilled,
} from "@/components/header";

const loyaltyLoungeProducts = [
  {
    subtitle: "Default",
    currentHeading: {
      name: "Loyalty Lounge ",
      description:
        "Automate your company's AP, AR, and bank reconciliation seamlessly",
    },
    list: [
      {
        name: "Employee Rewards",
        description: "Automated platform for employee appreciation",
        imageSrc: vendorPayment,
        imageSrcHovered: vendorPaymentFilled,
        link: "/404",
      },
      {
        name: "Brand Voucher",
        description: "200+ brand vouchers for corporate gifting",
        imageSrc: brandVouchers,
        imageSrcHovered: brandVouchersFilled,
        link: "/brand-voucher",
      },
      {
        name: "Channel Incentives",
        description: "Enable automated trade incentives easily",
        imageSrc: taxPayment,
        imageSrcHovered: taxPaymentFilled,
        link: "/404",
      },
      {
        name: "Offers",
        description: "Get discounts on partnered subscriptions and more",
        imageSrc: offers,
        imageSrcHovered: offersFilled,
        link: "/404",
      },
      {
        name: "Gift Cards",
        description: "Gift cards for employee benefits",
        imageSrc: giftCards,
        imageSrcHovered: giftCardFilled,
        link: "/404",
      },
    ],
    footerText: "Stream Line with Loyalty",
    footerImg: "xpenz_footer_bg",
    footerLink: "/loyalty",
  },
];

export default loyaltyLoungeProducts;
