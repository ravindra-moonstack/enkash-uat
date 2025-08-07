import {
  digitalMarketingCard,
  digitalMarketingCardFilled,
  saas,
  saasFilled,
  tne,
  tneFilled,
  mealCard,
  mealCardFilled,
  fuelCard,
  fuelCardFilled,
  purchaseCard,
  purchaseCardFilled,
  giftFilled,
} from "../../header"
export const cardsProducts = [
  {
    name: "Prepaid Cards",
    description: "Flexible prepaid card solutions",
    link: "/prepaid-card",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/collect-payments",
        currentHeading: {
          name: "Collect Payments",
          description: "Tax-saving food benefit card",
        },
        list: [
          {
            name: "Meal Cards",
            description: "Tax-saving food benefit card",
            imageSrc: mealCard,
            imageSrcHovered: mealCardFilled,
            link: "/meal-card",
          },
       
          {
            name: "Fuel Cards",
            description: "Track and limit fuel spends",
            imageSrc: fuelCard,
            imageSrcHovered: fuelCardFilled,
            link: "/fuel-card",
          },
        
          {
            name: "Digital Marketing Cards",
            description: "Budgeted ads, zero overspending",
            imageSrc: digitalMarketingCard,
            imageSrcHovered: digitalMarketingCardFilled,
            link: "/digital-marketing-card",
          },
          {
            name: "Gift Card",
            description: "One card, endless choices",
            imageSrc: giftFilled,
            imageSrcHovered: giftFilled,
            link: "/gift-card",
          },
          {
            name: "SaaS Cards",
            description: "Manage & prevent auto-renewals",
            imageSrc: saas,
            imageSrcHovered: saasFilled,
            link: "/saas-card",
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
    subtitle: " Corporate Cards",
    description: "Flexible credit card solutions",
  link: "",
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
            name: "T&E Cards",
            description: "Track travel and expense spends",
            imageSrc: tne,
            imageSrcHovered: tneFilled,
            link: "/travel-and-expense-card",
          },
          {
            name: "Purchase Cards",
            description: "Card to simplify procurement",
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
]

export default cardsProducts
