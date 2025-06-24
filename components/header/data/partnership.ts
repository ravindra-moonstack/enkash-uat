import { bank, affiliate } from "../../header"

const partnershipProducts = [
  {
    name: "Partnership",
    description: "Flexible prepaid card solutions",
    link: "/cards",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/loyalty-lounge",
        currentHeading: {
          name: "Partnerships ",
          description: "Build exciting rewards, incentives & offers",
        },
        list: [
          {
            name: "For Banks",
            description: "For Banks",
            link: "https://www.enkash.com/resources/",
            imageSrc: bank,
            imageSrcHovered: bank,
          },
          {
            name: "Affiliate Program",
            description: "Launch modern banking products faster",
            link: "https://www.enkash.com/resources/videos/",
            imageSrc: affiliate,
            imageSrcHovered: affiliate,
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
]

export default partnershipProducts
