import { blogsFilled, casestudies, vedioFilled } from ".."

const resourseProducts = [
  {
    name: "Resources",
    description: "Flexible prepaid card solutions",
    link: "/cards",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/loyalty-lounge",
        currentHeading: {
          name: "Rewards ",
          description: "Build exciting rewards, incentives & offers",
        },
        list: [
          {
            name: "Blogs",
            description: "Trends, tips, and strategies",
            imageSrcHovered: blogsFilled,
            link: "https://www.enkash.com/resources/",
          },

          {
            name: "Case Studies",
            description: "Real wins, proven impact",
            imageSrcHovered: casestudies,
            link: "https://www.enkash.com/resources/media-coverage/",
          },

          {
            name: "Videos",
            description: "Stories, solutions, and demos",
            imageSrcHovered: vedioFilled,
            link: "https://www.enkash.com/resources/videos/",
          },
        ],
        footerText: "Effortless recognition, and endless rewards in one place",
        footerMobileText: "Explore More",
        footerImg: "loyalty_footer_bg",
        footerLink: "/loyalty-lounge",
        parentLink: "/loyalty-lounge",
      },
    ],
  },
  {
    name: "For Developers",
    description: "Flexible prepaid card solutions",
    link: "/solutions",
    payableProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/bolt",
        currentHeading: {
          name: "Vouchers",
          description: "Shop smart and unlock exclusive savings",
        },
        list: [
          {
            name: "Payment Gateway",
            link: "/solutions/customized-reporting",
          },
          {
            name: "Corporate Cards",
            link: "/solutions/workflow-management",
          },
          {
            name: "Expense Managment",
            link: "/solutions/cashflow-analytics",
          },

          {
            name: "Employee Rewards",
            link: "/solutions/apis-modules",
          },

          {
            name: "Channel Incentives",
            link: "/solutions/integrations",
          },

          {
            name: "Vouchers",
            link: "/solutions/cfo-insights",
          },
        ],
        footerText:
          "Save big on 400+ brand vouchers across multiple categories",
        footerMobileText: "Explote More",
        footerImg: "loyalty_footer_bg",
        footerLink: "/bolt",
        parentLink: "/bolt",
      },
    ],
  },
]

export default resourseProducts
