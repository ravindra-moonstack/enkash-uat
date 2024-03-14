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
    subtitleLink: "/loyalty-lounge",
    currentHeading: {
      name: "Loyalty Lounge ",
      description:
        "Seamlessly automate & manage rewards, incentives and offers",
    },
    list: [
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
    footerLink: "/loyalty-lounge",
    parentLink: "/loyalty-lounge",
  },
];

export default loyaltyLoungeProducts;
