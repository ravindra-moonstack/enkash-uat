import {
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

const brandVouchersProducts = [
  {
    subtitle: "Default",
    subtitleLink: "/products/vouchers",
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
        link: "/e-commerce-vouchers",
      },
      {
        name: "Movies & Music",
        description: "Binge-watch shows and movies with distinctive discounts",
        imageSrc: movieAndMusic,
        imageSrcHovered: movieAndMusicFilled,
        link: "/movie-and-music-vouchers",
      },
      {
        name: "Apparels",
        description: "Bring home new trends with amazing offers on clothing",
        imageSrc: apparels,
        imageSrcHovered: apparelsFilled,
        link: "/apparels-vouchers",
      },
      {
        name: "Food & Beverages",
        description: "Dig into savory delights with exclusive discounts",
        imageSrc: foodAndBeverages,
        imageSrcHovered: foodAndBeveragesFilled,
        link: "/food-and-beverages-vouchers",
      },
      {
        name: "Health & Wellness",
        description:
          "Take care of yourself with our specially curated fitness offers",
        imageSrc: health,
        imageSrcHovered: healthFilled,
        link: "/health-and-wellness-vouchers",
      },
    ],
    footerText: "Save big on 400+ brand vouchers across multiple categories",
    footerMobileText: "Explote More",
    footerImg: "loyalty_footer_bg",
    footerLink: "/products/vouchers",
    parentLink: "/products/vouchers",
  },
]

export default brandVouchersProducts
