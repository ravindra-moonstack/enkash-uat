type Voucher = {
  voucherId: string;
  name: string;
  category: string;
  discount: number;
  description: string;
  aboutCompany: string;
  backgroundImg: string;
  howToRedeem: string[];
};

const VoucherData: Record<string, Voucher> = {
  tv001: {
    voucherId: "tv001",
    name: "10% Off Flights",
    category: "travel",
    discount: 10,
    description: "Get 10% off on domestic and international flights.",
    aboutCompany: "AirlineX is a leading airline company providing...",
    backgroundImg: "url_to_image",
    howToRedeem: [
      "Select your preferred flight on AirlineX's website.",
      "Apply voucher code TV001 during checkout.",
      "Discount will be applied automatically.",
    ],
  },
  tv002: {
    voucherId: "tv002",
    name: "Free Hotel Night Stay",
    category: "travel",
    discount: 100,
    description: "Get one night stay free with every two nights booked.",
    aboutCompany: "HotelY offers luxurious accommodations with...",
    backgroundImg: "url_to_image",
    howToRedeem: [
      "Book your stay directly on HotelY's website or app.",
      "Use voucher code TV002 at the time of booking.",
      "Discount will be applied to the final bill.",
    ],
  },
  // Add more vouchers here...
  PC021192942SON59: {
    voucherId: "PC021192942SON59",
    name: "$20 Off Electronics",
    category: "e-commerce",
    discount: 20,
    description: "Get $20 off on electronics purchases over $100.",
    aboutCompany: "ElectronicsWorld offers a wide range of electronic...",
    backgroundImg: "url_to_image",
    howToRedeem: [
      "Shop for electronics on ElectronicsWorld's website.",
      "Add items worth $100 or more to your cart.",
      "Apply voucher code EC001 during checkout.",
    ],
  },
  PC609726254IR7DN: {
    voucherId: "PC609726254IR7DN",
    name: "Free Shipping on Orders Over $50",
    category: "e-commerce",
    discount: 100,
    description: "Enjoy free shipping on orders over $50.",
    aboutCompany: "FashionHub offers trendy clothing and accessories...",
    backgroundImg: "url_to_image",
    howToRedeem: [
      "Browse products on FashionHub's website.",
      "Add items worth $50 or more to your cart.",
      "Shipping discount will be applied automatically.",
    ],
  },
  // Add more e-commerce vouchers as needed...
};

export default VoucherData;
