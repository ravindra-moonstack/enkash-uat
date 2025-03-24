import diyCardModule from "@/app/corporate-cards/diy-card-module/page";
import {
  digitalMarketingCard,
  digitalMarketingCardFilled,
  saas,
  saasFilled,
  tne,
  tneFilled,
  virtualCard,
  virtualCardFilled,
  mealCard,
  mealCardFilled,
  fuelCard,
  fuelCardFilled,
  purchaseCard,
  purchaseCardFilled,
  diyCard,
  diyCardFilled,
} from "@/components/header";

const freedomProducts = [
  {
    subtitle: "Default",
    subtitleLink: "/cards",
    currentHeading: {
      name: "Cards",
      description: "Flexible credit & prepaid card solutions",
    },
    list: [
      {
        name: "Meal Cards*",
        description: "Empower employees to take tax break on meals",
        imageSrc: mealCard,
        imageSrcHovered: mealCardFilled,
        link: "/corporate-cards/meal-cards",
      },
      {
        name: "Fuel Cards*",
        description: "Track & manage fuel expenses for business travels",
        imageSrc: fuelCard,
        imageSrcHovered: fuelCardFilled,
        link: "/corporate-cards/fuel-cards",
      },
      {
        name: "Virtual Cards*",
        description: "Unlimited cards with centralized controls",
        imageSrc: virtualCard,
        imageSrcHovered: virtualCardFilled,
        link: "/corporate-cards/virtual-cards",
      },
      {
        name: "Digital Marketing Cards*",
        description: "Easily pay for all your digital marketing needs",
        imageSrc: digitalMarketingCard,
        imageSrcHovered: digitalMarketingCardFilled,
        link: "/corporate-cards/digital-marketing-cards",
      },
      {
        name: "SaaS Cards*",
        description: "Manage all your SaaS subscriptions with ease",
        imageSrc: saas,
        imageSrcHovered: saasFilled,
        link: "/corporate-cards/saas-cards",
      },
      ,
      {
        name: "T&E Cards*",
        description: "Simplify Travel & Entertainment expenses",
        imageSrc: tne,
        imageSrcHovered: tneFilled,
        link: "/corporate-cards/travel-and-expense-cards",
      },
      {
        name: "Purchase Cards*",
        description: "Track employee purchases in real time",
        imageSrc: purchaseCard,
        imageSrcHovered: purchaseCardFilled,
        link: "/corporate-cards/purchase-cards",
      },
      {
        name: "DIY Card Module*",
        description: "Customizable cards for business spends",
        imageSrc: diyCard,
        imageSrcHovered: diyCardFilled,
        link: "/corporate-cards/diy-card-module",
      },
    ],
    footerText: "Empower your finances with purpose-based cards",
    footerMobileText: "Explore Corporate Cards",
    footerImg: "freedom_footer_bg",
    footerLink: "/corporate-cards",
    parentLink: "/corporate-cards",
  },
];

export default freedomProducts;
