type Category = {
  name: string;
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
    name: "E-Commerce",
    title: "Shop to your heart’s content with up to",
    description:
      "Get the best deals on online shopping with our e-commerce vouchers.",
    discount: 20,
    backgroundImage: "url_to_image",
  },
  entertainment: {
    name: "entertainment",
    title: "Entertainment Vouchers",
    description:
      "Enjoy discounts on movies, concerts, and more with our entertainment vouchers.",
    discount: 15,
    backgroundImage: "url_to_image",
  },
  travel: {
    name: "travel",
    title: "Travel Vouchers",
    description:
      "Explore the world with our travel vouchers and save big on your next trip.",
    discount: 25,
    backgroundImage: "url_to_image",
  },
  finance: {
    name: "finance",
    title: "finance",
    description:
      "Explore the world with our travel vouchers and save big on your next trip.",
    discount: 25,
    backgroundImage: "url_to_image",
  },
  enkash: {
    name: "enkash",
    title: "enkash",
    description:
      "Explore the world with our travel vouchers and save big on your next trip.",
    discount: 25,
    backgroundImage: "url_to_image",
  },
};
