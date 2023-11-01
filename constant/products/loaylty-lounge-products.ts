import {
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
        name: "Brand Vouchers",
        description: "400+ brand vouchers for corporate gifting ",
        imageSrc: brandVouchers,
        imageSrcHovered: brandVouchersFilled,
        link: "/brand-voucher",
      },
      {
        name: "Channel Incentive",
        description: "Enable automated trade incentives easily",
        imageSrc: brandVouchers,
        imageSrcHovered: brandVouchersFilled,
        link: "/brand-voucher",
      },
      {
        name: "Employee Rewards",
        description: "Automated platform for employee appreciation",
        imageSrc: brandVouchers,
        imageSrcHovered: brandVouchersFilled,
        link: "/404",
      },
      {
        name: "Gift Cards",
        description: "Easy to use gifting solution",
        imageSrc: giftCards,
        imageSrcHovered: giftCardFilled,
        link: "/404",
      },
      {
        name: "Offers",
        description: "Get discounts on partnered subscriptions and more",
        imageSrc: offers,
        imageSrcHovered: offersFilled,
        link: "/404",
      },
    ],
    footerText: "Stream Line with Loyalty",
    footerImg: "loyalty_footer_bg",
    footerLink: "/loyalty",
  },
];

export default loyaltyLoungeProducts;
