import { TProductCategory } from "@/src/types/navbar"
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
} from ".."

const loyaltyLoungeProducts: TProductCategory[] = [
  {
    name: "Brand Vouchers",
    description: "Flexible prepaid card solutions",
    link: "/products/vouchers",
    backgroundColor: "#f6fcff",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/products/vouchers",
        currentHeading: {
          name: "Vouchers ",
          description: "Build exciting rewards, incentives & offers",
        },
        list: [
          {
            name: "E-Commerce",
            description: "Shop from top online brands",
            imageSrc: eCommerce,
            imageSrcHovered: eCommerceFilled,
            link: "/e-commerce-vouchers",
          },
          {
            name: "Movies & Music",
            description: "Entertainment perks made easy",
            imageSrc: movieAndMusic,
            imageSrcHovered: movieAndMusicFilled,
            link: "/movie-and-music-vouchers",
          },
          {
            name: "Apparels",
            description: "Fashion vouchers across big brands",
            imageSrc: apparels,
            imageSrcHovered: apparelsFilled,
            link: "/apparels-vouchers",
          },
          {
            name: "Food & Beverages",
            description: "Dine and snack with perks",
            imageSrc: foodAndBeverages,
            imageSrcHovered: foodAndBeveragesFilled,
            link: "/food-and-beverages-vouchers",
          },
          {
            name: "Health & Wellness",
            description: "Vouchers for fitness & care benefits",
            imageSrc: health,
            imageSrcHovered: healthFilled,
            link: "/health-and-wellness-vouchers",
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
    link: "/products/rewards",
    backgroundColor: "#f9f9f9",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/products/rewards",
        currentHeading: {
          name: "Rewards System",
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
        footerLink: "/products/rewards",
        parentLink: "/products/rewards",
      },
    ],
  },
]

export default loyaltyLoungeProducts
