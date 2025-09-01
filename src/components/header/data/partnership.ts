import { bank, affiliate, coBrand } from ".."

const partnershipProducts = [
  {
    name: "Partnership",
    description: "Flexible prepaid card solutions",
    subProducts: [
      {
        subtitle: "Default",
        subtitleLink: "/partnership",
        currentHeading: {
          name: "Partnerships ",
          description: "Build exciting rewards, incentives & offers",
        },
        list: [
          {
            name: "For Banks",
            description: "Launch modern banking products faster",
            link: "/bank-partnerships",
            imageSrc: bank,
            imageSrcHovered: bank,
          },
          {
            name: "Affiliate Program",
            description: "Refer. Earn. Grow together.",
            link: "/affiliate-programs",
            imageSrc: affiliate,
            imageSrcHovered: affiliate,
            children: [
              {
                name: "Co-branded Cards",
                link: "/co-branded-card-partners",
                imageSrc: coBrand,
              },
              {
                name: "Payment Gateway",
                link: "/payment-gateway-partners",
                imageSrc: coBrand,
              },
              {
                name: "Bharat Connect",
                link: "/bharat-connect-partnership",
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
