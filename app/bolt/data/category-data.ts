type Category = {
  name: string;
  heading: string;
  title: string;
  description: string;
  discount: number;
  backgroundImage: string; // New field for background image
};

type Categories = {
  [key: string]: Category;
};
export const CategoryData: Categories = {
  "e-commerce": {
    name: "e-commerce",
    heading: "E-Commerce",
    title: "Shop to your heart’s content with up to",
    description:
      "Get the best deals on online shopping with our e-commerce vouchers.",
    discount: 20,
    backgroundImage: "url_to_image",
  },
  "movies-and-music": {
    name: "movies-and-music",
    heading: "Movies & Music",
    title: "Entertainment Vouchers",
    description:
      "Enjoy discounts on movies, concerts, and more with our entertainment vouchers.",
    discount: 15,
    backgroundImage: "url_to_image",
  },
  apparels: {
    name: "apparels",
    heading: "Apparels",
    title: "Travel Vouchers",
    description:
      "Explore the world with our travel vouchers and save big on your next trip.",
    discount: 25,
    backgroundImage: "url_to_image",
  },
  "food-and-beverages": {
    name: "food-and-beverages",
    heading: "Food & Beverages",
    title: "finance",
    description:
      "Explore the world with our travel vouchers and save big on your next trip.",
    discount: 25,
    backgroundImage: "url_to_image",
  },
  "health-and-wellness": {
    name: "health-and-wellness",
    heading: "Health & Wellness",
    title: "enkash",
    description:
      "Explore the world with our travel vouchers and save big on your next trip.",
    discount: 25,
    backgroundImage: "url_to_image",
  },
};
