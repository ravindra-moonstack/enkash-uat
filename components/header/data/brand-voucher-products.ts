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
    subtitleLink: "/bolt",
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
        link: "/voucher/category/e-commerce",
      },
      {
        name: "Movies & Music",
        description: "Binge-watch shows and movies with distinctive discounts",
        imageSrc: movieAndMusic,
        imageSrcHovered: movieAndMusicFilled,
        link: "/voucher/category/movies-and-music",
      },
      {
        name: "Apparels",
        description: "Bring home new trends with amazing offers on clothing",
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
      // {
      //   name: "Occasion Crafted",
      //   description:
      //     "Celebrate birthdays, anniversaries, & special occasions with our occasion-based gift vouchers",
      //   imageSrc: occasion,
      //   imageSrcHovered: occasionFilled,
      //   link: "/loyalty-lounge/offers",
      // },
    ],
    footerText: "Save big on 400+ brand vouchers across multiple categories",
    footerMobileText: "Explote Bolt",
    footerImg: "loyalty_footer_bg",
    footerLink: "/bolt",
    parentLink: "/bolt",
  },
];

export default brandVouchersProducts;
