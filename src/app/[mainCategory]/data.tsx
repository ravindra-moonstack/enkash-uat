import {
  ajio,
  amazonePrime,
  flipkart,
  fnp,
  imageFour,
  imageOne,
  imageThree,
  imageTwo,
  nykaa,
  sliderFourBg,
  sliderOneBg,
  sliderThreeBg,
  sliderTwoBg,
} from "."

export const voucherCards = [
  {
    titleHtml: "Amazon Prime",
    description: "Shopping E-Gift Card",
    discount: "13%",
    cardImage: amazonePrime,
    buttonUrl: "./amazone.in",
  },
  {
    titleHtml: "Flipkart",
    description: "Shopping E-Gift Card",
    discount: "10%",
    cardImage: nykaa,
    buttonUrl: "./flipkart.in",
  },
  {
    titleHtml: "Myntra",
    description: "Fashion E-Gift Card",
    discount: "12%",
    cardImage: flipkart,
    buttonUrl: "./myntra.in",
  },
  {
    titleHtml: "Ajio",
    description: "Fashion E-Gift Card",
    discount: "15%",
    cardImage: ajio,
    buttonUrl: "./ajio.in",
  },
  {
    titleHtml: "FNP",
    description: "Fashion E-Gift Card",
    discount: "15%",
    cardImage: fnp,
    buttonUrl: "./fnp.in",
  },
]

export const slides = [
  {
    backgroundImage: sliderOneBg,
    heading: " Shop across a wide range of products with up to 13% off",
    subHeading:
      "Sit back and order from the comfort of your home with discounts.",
    rightImage: imageOne,
    buttonText: "Buy Now",
    rightImageMarginTop: "-50px",
    buttonUrl: "/sales/?source=expense_management",
  },
  {
    backgroundImage: sliderTwoBg,
    heading: "Showstopper beauty picks with up to 7% off",
    subHeading:
      "Shop the best beauty and skincare products with great discounts.",
    buttonText: "Buy Now",
    rightImage: imageTwo,
    buttonUrl: "/learn-more",
  },
  {
    backgroundImage: sliderThreeBg,
    heading: " Unlock extra value on every purchase with up to 6% off",
    subHeading:
      "Explore a world of products for every need, want, and wishlist!",
    buttonText: "Buy Now",
    rightImage: imageThree,
    buttonUrl: "/learn-more",
  },
  {
    backgroundImage: sliderFourBg,
    heading:
      "Get your hands on trending styles and global labels with up to 4% off",
    subHeading:
      "Your go-to fashion destination with handpicked styles while keeping costs in check.",
    buttonText: "Buy Now",
    rightImage: imageFour,
    buttonUrl: "/learn-more",
  },
  // {
  //   backgroundImage: sliderOneBg,
  //   heading: "Send your emotions as gifts with up to 18% off",
  //   subHeading:
  //     "Make ordinary days special and special days memorable with great deals.",
  //   buttonText: "Buy Now",
  //   rightImage: imageOne,
  //   buttonUrl: "/learn-more",
  // },
]
