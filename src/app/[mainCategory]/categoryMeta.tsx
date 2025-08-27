export const CATEGORY_META: Record<
  string,
  { title: string; description: string; canonical: string }
> = {
  "e-commerce-vouchers": {
    title: "Buy E-commerce Brand Gift Vouchers Online",
    description:
      "Shop e-commerce gift vouchers from top brands like Amazon, Flipkart, and Myntra on EnKash. Perfect for rewards, gifting, or personal use—instant & hassle-free.",
    canonical: `${process.env.URL}/e-commerce-vouchers`,
  },
  "food-and-beverages-vouchers": {
    title: "Food & Beverage Vouchers for Best Deals and Discounts",
    description:
      "Explore gift vouchers for Swiggy, Zomato, Domino’s, Starbucks, and more. Perfect for employee rewards, festive gifting, or personal cravings—instant & easy.",
    canonical: `${process.env.URL}/food-and-beverages-vouchers`,
  },
  "health-and-wellness-vouchers": {
    title: "Health and Wellness Vouchers: Save on Top Brands",
    description:
      "Buy health & wellness vouchers from top brands like CultFit, Apollo Pharmacy & Mamaearth. Enjoy discounts, instant redemption, and doorstep convenience.",
    canonical: `${process.env.URL}/health-and-wellness-vouchers`,
  },
  "apparels-vouchers": {
    title: "Apparels Brand Vouchers for All the Leading Brands: Buy Now",
    description:
      "Surprise your loved ones with apparel gift cards from top fashion brands. Enjoy discounts up to 13%. Easy to buy, redeem online or in-store, anytime.",
    canonical: `${process.env.URL}/apparels-vouchers`,
  },
  "movie-and-music-vouchers": {
    title: "Buy Movie & Music Brand Vouchers Online",
    description:
      "Stream, binge, or go to the movies for less! Get gift cards for Amazon Prime, SonyLiv, ZEE5, PVR & more. Save up to 54%. Instant delivery & easy redemption",
    canonical: `${process.env.URL}/movie-and-music-vouchers`,
  },
}
