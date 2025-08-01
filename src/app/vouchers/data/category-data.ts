type Category = {
  name: string
  heading: string
  title: string
  description: string
  discount: number
  backgroundImage: string // New field for background image
}

type Categories = {
  [key: string]: Category
}
export const CategoryData: Categories = {
  "e-commerce-vouchers": {
    name: "e-commerce",
    heading: "E-Commerce",
    title: "Shop to your heart’s content with up to",
    description:
      "From daily needs to occasional shopping, get yourself everything in one place without spending too much",
    discount: 8,
    backgroundImage: "url_to_image",
  },
  "movie-and-music-vouchers": {
    name: "movies-and-music",
    heading: "Movies & Music",
    title: "Unlock endless entertainment with up to",
    description:
      "From streaming services to movie tickets, enjoy discounts on premier entertainment experiences",
    discount: 19,
    backgroundImage: "url_to_image",
  },
  "apparels-vouchers": {
    name: "apparels",
    heading: "Apparels",
    title: "Rock the latest trends & collections with up to",
    description:
      "Upgrade your wardrobe with exclusive offers on the best shopping outlets and websites",
    discount: 13,
    backgroundImage: "url_to_image",
  },
  "food-and-beverages-vouchers": {
    name: "food-and-beverages",
    heading: "Food & Beverages",
    title: " Indulge in your favorite cravings with up to",
    description:
      "Explore our irresistible offers on everyone’s favorite food outlets and enjoy delicacies to your heart’s content",
    discount: 13,
    backgroundImage: "url_to_image",
  },
  "health-and-wellness-vouchers": {
    name: "health-and-wellness",
    heading: "Health & Wellness",
    title: " Invest in your health with up to",
    description:
      "For all your healthcare and wellness needs, we bring you a curated selection of discounted vouchers from the top brands",
    discount: 58,
    backgroundImage: "url_to_image",
  },
}
