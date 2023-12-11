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
} from "@/components/header";

const freedomProducts = [
  {
    subtitle: "Default",
    subtitleLink: "/slash",
    currentHeading: {
      name: "Slash",
      description: "Simplify corporate spending with flexible card solutions",
    },
    list: [
      {
        name: "Meal Cards*",
        description:
          "Let your employees choose their favorite meals and save on taxes",
        imageSrc: mealCard,
        imageSrcHovered: mealCardFilled,
        link: "/slash/meal-cards",
      },
      {
        name: "Fuel Cards*",
        description: "Track and manage fuel expenses for your business travels",
        imageSrc: fuelCard,
        imageSrcHovered: fuelCardFilled,
        link: "/slash/fuel-cards",
      },
      {
        name: "Virtual Cards*",
        description: "Unlimited cards with centralized controls",
        imageSrc: virtualCard,
        imageSrcHovered: virtualCardFilled,
        link: "/slash/virtual-cards",
      },
      {
        name: "Digital Marketing Cards*",
        description:
          "Pay for digital marketing campaigns and subscriptions with ease",
        imageSrc: digitalMarketingCard,
        imageSrcHovered: digitalMarketingCardFilled,
        link: "/slash/digital-marketing-cards",
      },
      {
        name: "SaaS Cards*",
        description:
          "Manage all your SaaS subscriptions with our dedicated SaaS Cards",
        imageSrc: saas,
        imageSrcHovered: saasFilled,
        link: "/slash/saas-cards",
      },
      ,
      {
        name: "T&E Cards*",
        description: "Simplify travel and entertainment expenses for employees",
        imageSrc: tne,
        imageSrcHovered: tneFilled,
        link: "/slash/travel-and-expense-cards",
      },
      {
        name: "Purchase Cards*",
        description:
          "Empower employees to make purchases and track spends in real time",
        imageSrc: purchaseCard,
        imageSrcHovered: purchaseCardFilled,
        link: "/slash/purchase-cards",
      },
    ],
    footerText: "Empower your finances with purpose-based cards",
    footerMobileText: "Explore Freedom",
    footerImg: "freedom_footer_bg",
    footerLink: "/slash",
    parentLink: "/slash",
  },

];

export default freedomProducts;
