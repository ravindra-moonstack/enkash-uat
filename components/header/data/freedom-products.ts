import diyCardModule from "@/app/diy-card-module/page"
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
} from "@/components/header"

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
        name: "Virtual Cards*",
        description: "Unlimited cards with centralized controls",
        imageSrc: virtualCard,
        imageSrcHovered: virtualCardFilled,
        link: "/virtual-card",
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
      ,
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
        link: "/purchase-cards",
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
]

export default freedomProducts
