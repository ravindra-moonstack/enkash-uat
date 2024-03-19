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
  occasion,
  occasionFilled,
} from "@/components/header";

const brandVouchersProducts = [
  {
    subtitle: "Default",
    subtitleLink: "/loyalty-lounge",
    currentHeading: {
      name: "Brand Vouchers",
      description: "Shop smart and unlock exclusive savings",
    },
    list: [
      {
        name: "E-Commerce",
        description: "Avail heavy discounts on leading eCommerce websites",
        imageSrc: eCommerce,
        imageSrcHovered: eCommerceFilled,
        link: "/loyalty-lounge/channel-incentive",
      },
      {
        name: "Movies & Music",
        description:
          "Binge-watch shows and movies with exclusive discounts on streaming services and movie tickets",
        imageSrc: movieAndMusic,
        imageSrcHovered: movieAndMusicFilled,
        link: "/loyalty-lounge/employee-rewards",
      },
      {
        name: "Apparels",
        description:
          "Bring home new trends with amazing offers on apparel and clothing",
        imageSrc: apparels,
        imageSrcHovered: apparelsFilled,
        link: "/loyalty-lounge/gift-cards",
      },
      {
        name: "Food & Beverages",
        description:
          "Dig into savoury delights at your favourite food joints with exclusive discounts",
        imageSrc: foodAndBeverages,
        imageSrcHovered: foodAndBeveragesFilled,
        link: "/loyalty-lounge/offers",
      },
      {
        name: "Health & Wellness",
        description:
          "Take care of yourself with our specially curated fitness offers",
        imageSrc: health,
        imageSrcHovered: healthFilled,
        link: "/loyalty-lounge/offers",
      },
      {
        name: "Occasion Crafted",
        description:
          "Celebrate birthdays, anniversaries, & special occasions with our occasion-based gift vouchers",
        imageSrc: occasion,
        imageSrcHovered: occasionFilled,
        link: "/loyalty-lounge/offers",
      },
    ],
    footerText: "Save big on 400+ brand vouchers across multiple categories",
    footerMobileText: "Explore Loyalty Lounge",
    footerImg: "loyalty_footer_bg",
    footerLink: "/loyalty-lounge",
    parentLink: "/loyalty-lounge",
  },
];

export default brandVouchersProducts;
