// import {
//   ajio,
//   amazonePrime,
//   flipkart,
//   fnp,
//   imageFour,
//   imageOne,
//   imageThree,
//   imageTwo,
//   nykaa,
//   sliderFourBg,
//   sliderOneBg,
//   sliderThreeBg,
//   sliderTwoBg,
// } from "."

// export const voucherCards = [
//   {
//     titleHtml: "Amazon Prime",
//     description: "Shopping E-Gift Card",
//     discount: "13%",
//     cardImage: amazonePrime,
//     buttonUrl: "./amazone.in",
//   },
//   {
//     titleHtml: "Flipkart",
//     description: "Shopping E-Gift Card",
//     discount: "10%",
//     cardImage: nykaa,
//     buttonUrl: "./flipkart.in",
//   },
//   {
//     titleHtml: "Myntra",
//     description: "Fashion E-Gift Card",
//     discount: "12%",
//     cardImage: flipkart,
//     buttonUrl: "./myntra.in",
//   },
//   {
//     titleHtml: "Ajio",
//     description: "Fashion E-Gift Card",
//     discount: "15%",
//     cardImage: ajio,
//     buttonUrl: "./ajio.in",
//   },
//   {
//     titleHtml: "FNP",
//     description: "Fashion E-Gift Card",
//     discount: "15%",
//     cardImage: fnp,
//     buttonUrl: "./fnp.in",
//   },
// ]

// export const slides = [
//   {
//     backgroundImage: sliderOneBg,
//     heading: " Shop across a wide range of products with up to 13% off",
//     subHeading:
//       "Sit back and order from the comfort of your home with discounts.",
//     rightImage: imageOne,
//     buttonText: "Buy Now",
//     rightImageMarginTop: "-50px",
//     buttonUrl: "/sales/?source=expense_management",
//   },
//   {
//     backgroundImage: sliderTwoBg,
//     heading: "Showstopper beauty picks with up to 7% off",
//     subHeading:
//       "Shop the best beauty and skincare products with great discounts.",
//     buttonText: "Buy Now",
//     rightImage: imageTwo,
//     buttonUrl: "/learn-more",
//   },
//   {
//     backgroundImage: sliderThreeBg,
//     heading: " Unlock extra value on every purchase with up to 6% off",
//     subHeading:
//       "Explore a world of products for every need, want, and wishlist!",
//     buttonText: "Buy Now",
//     rightImage: imageThree,
//     buttonUrl: "/learn-more",
//   },
//   {
//     backgroundImage: sliderFourBg,
//     heading:
//       "Get your hands on trending styles and global labels with up to 4% off",
//     subHeading:
//       "Your go-to fashion destination with handpicked styles while keeping costs in check.",
//     buttonText: "Buy Now",
//     rightImage: imageFour,
//     buttonUrl: "/learn-more",
//   },
//   // {
//   //   backgroundImage: sliderOneBg,
//   //   heading: "Send your emotions as gifts with up to 18% off",
//   //   subHeading:
//   //     "Make ordinary days special and special days memorable with great deals.",
//   //   buttonText: "Buy Now",
//   //   rightImage: imageOne,
//   //   buttonUrl: "/learn-more",
//   // },
// ]

// app/(your-path)/voucher-data.ts

import { StaticImageData } from "next/image"
import { Slide } from "@/components/sliderComponent/sliderComponent"

import amazonePrime from "./img/e-commerce/amazon-prime.webp"

import {
  ajio,
  amazonPrimeBg,
  amazonPrimeImg,
  amazonPrimeLogo,
  apolloBg,
  apolloImg,
  apolloLogo,
  blackberryLogo,
  cultfitBg,
  cultfitImg,
  cultfitLogo,
  fancodeLogo,
  flipkart,
  fnp,
  healthkartLogo,
  imageFour,
  imageOne,
  imageThree,
  imageTwo,
  jockeyBg,
  jockeyImg,
  jockeyLogo,
  levisBg,
  levisImg,
  levisLogo,
  mamaeathBg,
  mamaeathImg,
  mamaeathLogo,
  myglammBg,
  myglammImg,
  myglammLogo,
  nykaa,
  pantaloonBg,
  pantaloonImg,
  pantaloonLogo,
  pvrBg,
  pvrImg,
  pvrLogo,
  sliderFourBg,
  sliderOneBg,
  sliderThreeBg,
  sliderTwoBg,
  sonyLivBg,
  sonyLivImg,
  sonyLivLogo,
  westsideBg,
  westsideImg,
  westsideLogo,
  zee5Bg,
  zee5Img,
  zee5Logo,
} from "."
export type VoucherCard = {
  titleHtml: string
  description: string
  discount: string
  cardImage: string | StaticImageData
  buttonUrl: string
}

// Example: slides, breadcrumbs, faq for each category
export const VOUCHER_DATA: Record<
  string,
  {
    title: string
    breadcrumbItems: { name: string; url: string }[]
    slides: Slide[]
    voucherCards: VoucherCard[]
  }
> = {
  "e-commerce-vouchers": {
    title: "E-commerce Vouchers",
    breadcrumbItems: [
      { name: "Home", url: "/" },
      { name: "Vouchers", url: "/vouchers" },
      { name: "E-commerce Vouchers", url: "/e-commerce-vouchers" },
    ],
    slides: [
      {
        heading: " Shop across a wide range of products with up to 13% off",
        subHeading:
          "Sit back and order from the comfort of your home with discounts.",
        buttonText: "Buy Now",
        backgroundImage: sliderOneBg,
        rightImage: imageOne,
        rightImageMarginTop: "-50px",
        buttonUrl: "/sales/?source=expense_management",
      },
      {
        heading: "Showstopper beauty picks with up to 7% off",
        subHeading:
          "Shop the best beauty and skincare products with great discounts.",
        buttonText: "Buy Now",
        backgroundImage: sliderTwoBg,
        rightImage: imageTwo,
        buttonUrl: "/learn-more",
      },
      {
        heading: " Unlock extra value on every purchase with up to 6% off",
        subHeading:
          "Explore a world of products for every need, want, and wishlist!",
        buttonText: "Buy Now",
        backgroundImage: sliderThreeBg,
        rightImage: imageThree,
        buttonUrl: "/learn-more",
      },
      {
        heading:
          "Get your hands on trending styles and global labels with up to 4% off",
        subHeading:
          "Your go-to fashion destination with handpicked styles while keeping costs in check.",
        buttonText: "Buy Now",
        backgroundImage: sliderFourBg,
        rightImage: imageFour,
        buttonUrl: "/learn-more",
      },
    ],
    voucherCards: [
      {
        titleHtml: "Amazon Prime Shopping",
        description: " E-Gift Card",
        discount: "7%",
        cardImage: amazonePrime,
        buttonUrl: "./amazon.in",
      },
      {
        titleHtml: "Nykaa",
        description: "E-Gift Card",
        discount: "6%",
        cardImage: nykaa,
        buttonUrl: "./flipkart.in",
      },
      {
        titleHtml: "Flipkart Supercoins",
        description: "E-Gift Card",
        discount: "4%",
        cardImage: nykaa,
        buttonUrl: "./myntra.in",
      },
      {
        titleHtml: "Ajio",
        description: "Gift Card",
        discount: "18%",
        cardImage: ajio,
        buttonUrl: "./ajio.in",
      },
      {
        titleHtml: "FNP",
        description: "Gift Card",
        discount: "15%",
        cardImage: fnp,
        buttonUrl: "./fnp.in",
      },
    ],
    // faqData: VoucherFaqData["e-commerce-vouchers"].faqData,
  },

  "movie-and-music-vouchers": {
    title: "Movie & Music Vouchers",
    breadcrumbItems: [
      { name: "Home", url: "/" },
      { name: "Vouchers", url: "/vouchers" },
      { name: "Movie & Music Vouchers", url: "/movie-and-music-vouchers" },
    ],
    slides: [
      {
        heading: "Own every web series reference with up to 12% off",
        subHeading: "Binging and saving go hand-in-hand with this voucher.",
        buttonText: "Buy Now",
        backgroundImage: amazonPrimeBg,
        rightImage: amazonPrimeImg,
        rightImageMarginTop: "-50px",
        buttonUrl: "/sales/?source=expense_management",
      },
      {
        heading: "Popcorn ready? Binge with up to 54% off",
        subHeading: "Your home. Your screen. Endless entertainment, anytime.",
        buttonText: "Buy Now",
        backgroundImage: sonyLivBg,
        rightImage: sonyLivImg,
        buttonUrl: "/learn-more",
      },
      {
        heading: "Watch the latest movies with up to 11% off",
        subHeading: "Lights. Camera. Discount with this voucher.",
        buttonText: "Buy Now",
        backgroundImage: pvrBg,
        rightImage: pvrImg,
        rightImageMarginTop: "-100px",
        buttonUrl: "/learn-more",
      },
      {
        heading: "Entertainment in any language with up to 17% off",
        subHeading:
          "From blockbuster movies and hit TV shows to originals – watch it all.",
        buttonText: "Buy Now",
        backgroundImage: zee5Bg,
        rightImage: zee5Img,
        buttonUrl: "/learn-more",
      },
    ],
    voucherCards: [
      {
        titleHtml: "Amazon Prime",
        description: " E-Gift Card",
        discount: "13%",
        cardImage: amazonPrimeLogo,
        buttonUrl: "./amazon.in",
      },
      {
        titleHtml: "SonyLiv Monthly",
        description: " E-Gift Card",
        discount: "10%",
        cardImage: sonyLivLogo,
        buttonUrl: "./flipkart.in",
      },
      {
        titleHtml: "PVR ",
        description: "E-Gift Card",
        discount: "12%",
        cardImage: pvrLogo,
        buttonUrl: "./myntra.in",
      },
      {
        titleHtml: "ZEE 5 ",
        description: "E-Gift Card",
        discount: "15%",
        cardImage: zee5Logo,
        buttonUrl: "./ajio.in",
      },
      {
        titleHtml: "FanCode",
        description: "E-Gift Card",
        discount: "15%",
        cardImage: fancodeLogo,
        buttonUrl: "./fnp.in",
      },
    ],
  },

  "apparels-vouchers": {
    title: "Apparels Vouchers",
    breadcrumbItems: [
      { name: "Home", url: "/" },
      { name: "Vouchers", url: "/vouchers" },
      { name: "Apparels Vouchers", url: "/apparels-vouchers" },
    ],
    slides: [
      {
        heading: "Everything fashion, home, & beauty with up to 10% of",
        subHeading: "The place where your style meets its vibe.",
        buttonText: "Buy Now",
        backgroundImage: westsideBg,
        rightImage: westsideImg,
        rightImageMarginTop: "-50px",
        buttonUrl: "/sales/?source=expense_management",
      },
      {
        heading: "Iconic denims & modern fits with up to 10% off",
        subHeading: "Own the streets with your fashion statement.",
        buttonText: "Buy Now",
        backgroundImage: levisBg,
        rightImage: levisImg,
        buttonUrl: "/learn-more",
      },
      {
        heading: " Unmatched comfort fit with up to 13% off",
        subHeading: "Everyday essentials that flex with you.",
        buttonText: "Buy Now",
        backgroundImage: jockeyBg,
        rightImage: jockeyImg,
        rightImageMarginTop: "-100px",
        buttonUrl: "/learn-more",
      },
      {
        heading: "For all your moods & moments with up to 10% off",
        subHeading: "Explore the vibrant mix of styles, trends, and colors.",
        buttonText: "Buy Now",
        backgroundImage: pantaloonBg,
        rightImage: pantaloonImg,
        buttonUrl: "/learn-more",
      },
    ],
    voucherCards: [
      {
        titleHtml: "Westside",
        description: " E-Gift Card",
        discount: "10%",
        cardImage: westsideLogo,
        buttonUrl: "./amazon.in",
      },
      {
        titleHtml: "Levis",
        description: "E-Gift Card",
        discount: "13%",
        cardImage: levisLogo,
        buttonUrl: "./flipkart.in",
      },
      {
        titleHtml: "Jockey",
        description: " E-Gift Card",
        discount: "10%",
        cardImage: jockeyLogo,
        buttonUrl: "./myntra.in",
      },
      {
        titleHtml: "Pantaloons",
        description: " E-Gift Card",
        discount: "10%",
        cardImage: pantaloonLogo,
        buttonUrl: "./ajio.in",
      },
      {
        titleHtml: "Blackberrys",
        description: " E-Gift Card",
        discount: "15%",
        cardImage: blackberryLogo,
        buttonUrl: "./fnp.in",
      },
    ],
  },

  "health-and-wellness-vouchers": {
    title: "Health and Wellness Vouchers",
    breadcrumbItems: [
      { name: "Home", url: "/" },
      { name: "Vouchers", url: "/vouchers" },
      {
        name: "Health and Wellness Vouchers",
        url: "/health-and-wellness-vouchers",
      },
    ],
    slides: [
      {
        heading: "Own every web series reference with up to 12% off",
        subHeading: "Binging and saving go hand-in-hand with this voucher.",
        buttonText: "Buy Now",
        backgroundImage: mamaeathBg,
        rightImage: mamaeathImg,

        buttonUrl: "/sales/?source=expense_management",
      },
      {
        heading: "Popcorn ready? Binge with up to 54% off",
        subHeading: "Your home. Your screen. Endless entertainment, anytime.",
        buttonText: "Buy Now",
        backgroundImage: apolloBg,
        rightImage: apolloImg,
        buttonUrl: "/learn-more",
      },
      {
        heading: "Watch the latest movies with up to 11% off",
        subHeading: "Lights. Camera. Discount with this voucher.",
        buttonText: "Buy Now",
        backgroundImage: cultfitBg,
        rightImage: cultfitImg,
        rightImageMarginTop: "-100px",
        buttonUrl: "/learn-more",
      },
      {
        heading: "Entertainment in any language with up to 17% off",
        subHeading:
          "From blockbuster movies and hit TV shows to originals – watch it all.",
        buttonText: "Buy Now",
        backgroundImage: myglammBg,
        rightImage: myglammImg,
        buttonUrl: "/learn-more",
      },
    ],
    voucherCards: [
      {
        titleHtml: "Amazon Prime",
        description: " E-Gift Card",
        discount: "13%",
        cardImage: mamaeathLogo,
        buttonUrl: "./amazon.in",
      },
      {
        titleHtml: "SonyLiv Monthly",
        description: " E-Gift Card",
        discount: "10%",
        cardImage: apolloLogo,
        buttonUrl: "./flipkart.in",
      },
      {
        titleHtml: "PVR ",
        description: "E-Gift Card",
        discount: "12%",
        cardImage: cultfitLogo,
        buttonUrl: "./myntra.in",
      },
      {
        titleHtml: "ZEE 5 ",
        description: "E-Gift Card",
        discount: "15%",
        cardImage: myglammLogo,
        buttonUrl: "./ajio.in",
      },
      {
        titleHtml: "FanCode",
        description: "E-Gift Card",
        discount: "15%",
        cardImage: healthkartLogo,
        buttonUrl: "./fnp.in",
      },
    ],
  },
}
