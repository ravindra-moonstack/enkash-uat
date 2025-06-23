import {
  offers,
  offersFilled,
  giftCards,
  giftCardFilled,
  channelIncentive,
  channelIncentiveFilled,
  rewardsPlatformFilled,
  rewardsPlatform,
  eCommerce,
  eCommerceFilled,
  movieAndMusic,
  movieAndMusicFilled,
  apparels,
  apparelsFilled,
  foodAndBeverages,
  foodAndBeveragesFilled,
  health,
  healthFilled,
} from "../../header"

const loyaltyLoungeProducts = [
  {
    name: "Brand Vouchers",
    description: "Flexible prepaid card solutions",
    link: "/cards",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/loyalty-lounge",
        currentHeading: {
          name: "Rewards ",
          description: "Build exciting rewards, incentives & offers",
        },
        list: [
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
    ],
  },
  {
    name: "Rewards System",
    description: "Flexible prepaid card solutions",
    link: "/cards",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/bolt",
        currentHeading: {
          name: "Vouchers",
          description: "Shop smart and unlock exclusive savings",
        },
        list: [
          {
            name: "E-Commerce",
            description: "Avail heavy discounts on leading eCommerce websites",
            imageSrc: eCommerce,
            imageSrcHovered: eCommerceFilled,
            link: "/voucher/category/e-commerce",
          },
          {
            name: "Movies & Music",
            description:
              "Binge-watch shows and movies with distinctive discounts",
            imageSrc: movieAndMusic,
            imageSrcHovered: movieAndMusicFilled,
            link: "/voucher/category/movies-and-music",
          },
          {
            name: "Apparels",
            description:
              "Bring home new trends with amazing offers on clothing",
            imageSrc: apparels,
            imageSrcHovered: apparelsFilled,
            link: "/voucher/category/apparels",
          },
          {
            name: "Food & Beverages",
            description: "Dig into savory delights with exclusive discounts",
            imageSrc: foodAndBeverages,
            imageSrcHovered: foodAndBeveragesFilled,
            link: "/voucher/category/food-and-beverages",
          },
          {
            name: "Health & Wellness",
            description:
              "Take care of yourself with our specially curated fitness offers",
            imageSrc: health,
            imageSrcHovered: healthFilled,
            link: "/voucher/category/health-and-wellness",
          },
        ],
        footerText:
          "Save big on 400+ brand vouchers across multiple categories",
        footerMobileText: "Explote More",
        footerImg: "loyalty_footer_bg",
        footerLink: "/bolt",
        parentLink: "/bolt",
      },
    ],
  },
]

export default loyaltyLoungeProducts
