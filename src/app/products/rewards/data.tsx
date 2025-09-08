import {
  notificationImage,
  paymentLinkImage,
  paymentOptionImage,
  shareImage,
  taskIconFour,
  taskIconOne,
  taskIconThree,
  taskIconTwo,
  crouselIconOne,
  crouselIconTwo,
  crouselIconThree,
  crouselIconFour,
  crouselIconFive,
} from "."

const allProductSections = [
  {
    title: "Expense Management",
    subtitle: "Manage every spend effortlessly",
    items: [
      {
        title: "Personalized ",
        title2: "Rewards",
        description:
          "Tailor incentives for employees, partners, and stakeholders.",
        image: crouselIconOne,
      },
      {
        title: "Automated ",
        title2: "Processes",
        description: "Streamline reward allocation, redemption, and tracking.",
        image: crouselIconTwo,
      },

      {
        title: "Flexible ",
        title2: "Redemption",
        description:
          " Offer multiple reward types—vouchers, gift cards, discounts, and more.",
        image: crouselIconThree,
      },
      {
        title: "Real-Time Tracking ",
        title2: "& Analytics",
        description: " Gain insights into reward performance and engagement.",
        image: crouselIconFour,
      },
      {
        title: "Seamless ",
        title2: "Integration",
        description:
          "Easily integrate with HRMS, CRMs, and business platforms.",
        image: crouselIconFive,
      },
    ],
  },
]

const policiesData = [
  {
    icon: taskIconOne,
    title: "Employee Rewards",
    description:
      "Motivate and retain your workforce with meaningful recognition. EnKash helps businesses set up customized rewards programs that enhance employee morale and performance. Offer digital gift cards, brand vouchers, and exclusive perks.",
    image: paymentLinkImage,
    buttonUrl: "/employee-rewards",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconTwo,
    title: "Channel Incentives",
    description:
      "Drive channel partner engagement and boost sales with structured channel incentives. EnKash enables businesses to automate reward distribution, ensuring timely payouts and transparent tracking for channel partners.",
    image: shareImage,
    buttonUrl: "/channel-incentives/",
    maxImageHeight: "305px",
    reverse: true,
  },
  {
    icon: taskIconThree,
    title: "Gift Cards",
    description:
      "Simplify gifting with EnKash’s versatile gift card solutions. Give your employees and partners the freedom to choose from a wide range of brands and categories, ensuring a truly personal reward experience.",
    image: paymentOptionImage,
    buttonUrl: "/gift-cards/",
    maxImageHeight: "243px",
  },
  {
    icon: taskIconFour,
    title: "Exclusive Offers",
    description:
      "Unlock special discounts and partner offers from leading brands. Help your employees and stakeholders save on essential services while enhancing their benefits package.",
    image: notificationImage,
    buttonUrl: "/offers/",
    maxImageHeight: "259px",
    reverse: true,
  },
]

export { allProductSections, policiesData }
