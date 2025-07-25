import {
  offers,
  offersFilled,
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
    link: "/brand-vouchers",
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
            name: "E-Commerce",
            description: "Shop from top online brands",
            imageSrc: eCommerce,
            imageSrcHovered: eCommerceFilled,
            link: "/voucher/category/e-commerce",
          },
          {
            name: "Movies & Music",
            description: "Entertainment perks made easy",
            imageSrc: movieAndMusic,
            imageSrcHovered: movieAndMusicFilled,
            link: "/voucher/category/movies-and-music",
          },
          {
            name: "Apparels",
            description: "Fashion vouchers across big brands",
            imageSrc: apparels,
            imageSrcHovered: apparelsFilled,
            link: "/voucher/category/apparels",
          },
          {
            name: "Food & Beverages",
            description: "Dine and snack with perks",
            imageSrc: foodAndBeverages,
            imageSrcHovered: foodAndBeveragesFilled,
            link: "/voucher/category/food-and-beverages",
          },
          {
            name: "Health & Wellness",
            description: "Vouchers for fitness & care benefits",
            imageSrc: health,
            imageSrcHovered: healthFilled,
            link: "/voucher/category/health-and-wellness",
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
    link: "/rewards",
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
            name: "Employee Rewards",
            description: "Recognize and retain top talent",
            imageSrc: rewardsPlatform,
            imageSrcHovered: rewardsPlatformFilled,
            link: "/employee-rewards",
          },
          {
            name: "Channel Incentives",
            description: "Partner rewards to drive growth",
            imageSrc: channelIncentive,
            imageSrcHovered: channelIncentiveFilled,
            link: "/channel-incentives",
          },
     
          {
            name: "Offers",
            description: "Exclusive deals for every spend",
            imageSrc: offers,
            imageSrcHovered: offersFilled,
            link: "/offers",
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
