import {
  brandVouchers,
  brandVouchersFilled,
  offers,
  offersFilled,
  giftCards,
  giftCardFilled,
  channelIncentive,
  channelIncentiveFilled,
  rewardsPlatformFilled,
  rewardsPlatform,
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
        link: "/loyalty-lounge/brand-voucher",
      },
      {
        name: "Channel Incentive",
        description: "Enable automated trade incentives easily",
        imageSrc: channelIncentive,
        imageSrcHovered: channelIncentiveFilled,
        link: "/loyalty-lounge/channel-incentive",
      },
      {
        name: "Employee Rewards",
        description: "Automated platform for employee appreciation",
        imageSrc: rewardsPlatform,
        imageSrcHovered: rewardsPlatformFilled,
        link: "/loyalty-lounge/employee-rewards",
      },
      {
        name: "Gift Cards",
        description: "Easy to use gifting solution",
        imageSrc: giftCards,
        imageSrcHovered: giftCardFilled,
        link: "/loyalty-lounge/gift-cards",
      },
      {
        name: "Offers",
        description: "Get discounts on partnered subscriptions and more",
        imageSrc: offers,
        imageSrcHovered: offersFilled,
        link: "/loyalty-lounge/offers",
      },
    ],
    footerText: "Effortless recognition, and endless rewards in one place",
    footerMobileText: "Explore Loyalty Lounge",
    footerImg: "loyalty_footer_bg",
    footerLink: "/loyalty",
    parentLink: "/loyalty",
  },
];

export default loyaltyLoungeProducts;
