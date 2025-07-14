import { bank, affiliate, coBrand } from "../../header"

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
            description: "Learn about your users",
            link: "https://www.enkash.com/resources/",
            imageSrc: bank,
            imageSrcHovered: bank,
          },
          {
            name: "Affiliate Program",
            description: "Monitor your metrics",
            link: "https://www.enkash.com/resources/videos/",
            imageSrc: affiliate,
            imageSrcHovered: affiliate,
            children: [
              {
                name: "Co-branded Cards",
                link: "/affiliate/co-branded-cards",
                imageSrc: coBrand,
              },
              {
                name: "Payment Gateway",
                link: "/affiliate/payment-gateway",
                imageSrc: coBrand,
              },
              {
                name: "Bharat Connect",
                link: "/affiliate/bharat-connect",
                imageSrc: coBrand,
              },
            ],
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
