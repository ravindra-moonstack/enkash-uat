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
} from "../../header"
export const cardsProducts = [
  {
    name: "Prepaid Cards",
    description: "Flexible prepaid card solutions",
    link: "/cards",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/collect-payments",
        currentHeading: {
          name: "Collect Payments",
          description: "Get paid faster with customized PG solutions",
        },
        list: [
          {
            name: "Meal Cards*",
            description: "Empower employees to take tax break on meals",
            imageSrc: mealCard,
            imageSrcHovered: mealCardFilled,
            link: "/meal-card",
          },
          {
            name: "Fuel Cards*",
            description: "Track & manage fuel expenses for business travels",
            imageSrc: fuelCard,
            imageSrcHovered: fuelCardFilled,
            link: "/fuel-card",
          },
          {
            name: "Digital Marketing Cards*",
            description: "Easily pay for all your digital marketing needs",
            imageSrc: digitalMarketingCard,
            imageSrcHovered: digitalMarketingCardFilled,
            link: "/digital-marketing-card",
          },
          {
            name: "SaaS Cards*",
            description: "Manage all your SaaS subscriptions with ease",
            imageSrc: saas,
            imageSrcHovered: saasFilled,
            link: "/virtual-card",
          },
        ],
        footerText: "Empower your finances with purpose-based cards",
        footerMobileText: "Explore More",
        footerImg: "freedom_footer_bg",
        footerLink: "/cards",
        parentLink: "/cards",
      },
    ],
  },
  {
    name: "Credit Cards",
    description: "Flexible credit card solutions",
    link: "/cards",
    payableProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/cards",
        currentHeading: {
          name: "Cards",
          description: "Manage all types of business payments",
        },
        list: [
          {
            name: "T&E Cards*",
            description: "Simplify Travel & Entertainment expenses",
            imageSrc: tne,
            imageSrcHovered: tneFilled,
            link: "/travel-and-expense-card",
          },
          {
            name: "Purchase Cards*",
            description: "Track employee purchases in real time",
            imageSrc: purchaseCard,
            imageSrcHovered: purchaseCardFilled,
            link: "/purchase-card",
          },
        ],
        footerText: "Empower your finances with purpose-based cards",
        footerMobileText: "Explore More",
        footerImg: "freedom_footer_bg",
        footerLink: "/cards",
        parentLink: "/cards",
      },
    ],
  },
  {
    name: "Cards +",
    description: "Flexible credit card solutions",
    link: "/cards",
    payableProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/cards",
        currentHeading: {
          name: "Make Payments",
          description: "Manage all types of business payments",
        },
        list: [
          {
            name: "Virtual Cards*",
            description: "Unlimited cards with centralized controls",
            imageSrc: virtualCard,
            imageSrcHovered: virtualCardFilled,
            link: "/virtual-card",
          },

          {
            name: "DIY Card Module*",
            description: "Customizable cards for business spends",
            imageSrc: diyCard,
            imageSrcHovered: diyCardFilled,
            link: "/diy-card-module",
          },
        ],
        footerText: "Empower your finances with purpose-based cards",
        footerMobileText: "Explore More",
        footerImg: "freedom_footer_bg",
        footerLink: "/cards",
        parentLink: "/cards",
      },
    ],
  },
]

export default cardsProducts
