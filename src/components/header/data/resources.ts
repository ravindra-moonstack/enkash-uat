import { TProductCategory } from "@/src/types/navbar"
import { blogsFilled, casestudies, vedioFilled } from ".."

const resourseProducts: TProductCategory[] = [
  {
    name: "Resources",
    description: "Flexible prepaid card solutions",
    link: `https://www.enkash.com/resources/`,
    backgroundColor: "#f6fcff",

    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "https://www.enkash.com/resources/",
        currentHeading: {
          name: "Rewards ",
          description: "Build exciting rewards, incentives & offers",
        },
        list: [
          {
            name: "Blogs",
            description: "Trends, tips, and strategies",
            imageSrcHovered: blogsFilled,
            link: `https://www.enkash.com/resources/blogs`,
          },

          {
            name: "Case Studies",
            description: "Real wins, proven impact",
            imageSrcHovered: casestudies,
            link: `https://www.enkash.com/resources/customer-stories`,
          },

          {
            name: "Videos",
            description: "Stories, solutions, and demos",
            imageSrcHovered: vedioFilled,
            link: `https://www.enkash.com/resources/videos`,
          },
        ],
        footerText: "Effortless recognition, and endless rewards in one place",
        footerMobileText: "Explore More",
        footerImg: "loyalty_footer_bg",
        footerLink: "/loyalty-lounge",
        parentLink: "/loyalty-lounge",
        parentTarget: "_blank",
      },
    ],
  },
  {
    name: "For Developers",
    description: "Flexible prepaid card solutions",
    link: "https://docs.enkash.com/",
    backgroundColor: "#f9f9f9",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "https://docs.enkash.com/",
        currentHeading: {
          name: "Vouchers",
          description: "Shop smart and unlock exclusive savings",
        },
        list: [
          {
            name: "Payment Gateway",
            link: "https://docs.enkash.com/folder-1769236",
          },
          {
            name: "Prepaid Card",
            link: "https://docs.enkash.com/folder-1769242",
          },
          {
            name: "Expense Management",
            link: "https://docs.enkash.com/expense-management",
          },

          {
            name: "Rewards",
            link: "https://docs.enkash.com/doc-1039810",
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
