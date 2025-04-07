import {
  offers,
  offersFilled,
  giftCards,
  giftCardFilled,
  channelIncentive,
  channelIncentiveFilled,
  rewardsPlatformFilled,
  rewardsPlatform,
  brandVouchers,
  brandVouchersFilled,
} from "@/components/header"

const loyaltyLoungeProducts = [
  {
    subtitle: "Default",
    subtitleLink: "/loyalty-lounge",
    currentHeading: {
      name: "Rewards ",
      description: "Build exciting rewards, incentives & offers",
    },
    list: [
      // {
      //   name: "Brand Vouchers",
      //   description: "400+ brand vouchers for corporate gifting",
      //   imageSrc: brandVouchers,
      //   imageSrcHovered: brandVouchersFilled,
      //   link: "/loyalty-lounge/brand-voucher",
      // },
      {
        name: "Channel Incentives",
        description: "Enable automated trade incentives easily",
        imageSrc: channelIncentive,
        imageSrcHovered: channelIncentiveFilled,
        link: "/channel-incentives",
      },
      {
        name: "Employee Rewards",
        description: "Automated platform for employee appreciation",
        imageSrc: rewardsPlatform,
        imageSrcHovered: rewardsPlatformFilled,
        link: "/employee-rewards",
      },
      {
        name: "Gift Cards",
        description: "Easy to use gifting solution",
        imageSrc: giftCards,
        imageSrcHovered: giftCardFilled,
        link: "/gift-cards",
      },
      {
        name: "Offers",
        description: "Get discounts on partnered subscriptions and more",
        imageSrc: offers,
        imageSrcHovered: offersFilled,
        link: "/offers",
      },
    ],
    footerText: "Effortless recognition, and endless rewards in one place",
    footerMobileText: "Explore More",
    footerImg: "loyalty_footer_bg",
    footerLink: "/loyalty-lounge",
    parentLink: "/loyalty-lounge",
  },
]

export default loyaltyLoungeProducts
