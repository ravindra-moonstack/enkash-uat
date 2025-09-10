import { TProductCategory } from "@/src/types/navbar"
import { blogsFilled, casestudies, vedioFilled } from ".."

const resourseProducts: TProductCategory[] = [
  {
    name: "Resources",
    description: "Flexible prepaid card solutions",
    link: `/resources`,
    backgroundColor: "#f6fcff",
    target: "_blank",
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
            link: `/resources/blogs`,
            target: "_blank",
          },

          {
            name: "Case Studies",
            description: "Real wins, proven impact",
            imageSrcHovered: casestudies,
            link: `/resources/customer-stories`,
            target: "_blank",
          },

          {
            name: "Videos",
            description: "Stories, solutions, and demos",
            imageSrcHovered: vedioFilled,
            link: `/resources/videos`,
            target: "_blank",
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
    link: "https://docs.enkash.com/",
    backgroundColor: "#f9f9f9",
    subProducts: [
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
