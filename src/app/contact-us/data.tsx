import {
  help,
  login,
  support,
  testimonailImgOne,
  testimonailLogoFive,
  testimonailLogoFour,
  testimonailLogoThree,
  testimonailLogoTwo,
  testimonialImgFive,
  testimonialImgFour,
  testimonialImgThree,
  testimonialImgTwo,
  testimonialLogoOne,
} from "."

const testimonialData = [
  {
    icon: testimonialLogoOne,
    description:
      "This platform has redefined employee engagement by allowing employees to choose from a wide range of rewards, including shopping vouchers, food, electronics, travel, and experiences. This flexibility has boosted engagement, performance, and retention.",
    name: "Anisha Chandran",
    position: "HR Head",
    testimonialImg: testimonailImgOne,
  },
  {
    icon: testimonailLogoTwo,
    description:
      "The EnKash Reward automation has enhanced our R&R program. The flexibility in reward redemption options, combined with the automated process, has streamlined our operations. We've noticed a rise in team engagement.",
    name: "Swati Rawat",
    position: "HR Head",
    testimonialImg: testimonialImgTwo,
  },
  {
    icon: testimonailLogoThree,
    description:
      "One of the key benefits of EnKash was gaining real-time visibility of our Daily Sales Outstanding (DSOs), which became an interactive feature. This real-time insight into our receivables greatly improved our decision-making capabilities. We have unlocked a new efficiency level in our receivables processes, streamlining operations and ensuring smoother financial management.",
    name: "Deep Sehgal",
    position: "Founder and CEO",
    testimonialImg: testimonialImgThree,
  },
  {
    icon: testimonailLogoFour,
    description:
      "EnKash has been a fantastic partner for our gifting needs at BIG FM. What truly sets them apart is their quick TATs, prompt response & unwavering support, ensuring a seamless experience from start to finish. Their commitment to service excellence truly stands out, making Enkash our go-to choice for hassle-free gifting solutions",
    name: "Roopa Mahesh Kumar",
    position: "HR Head",
    testimonialImg: testimonialImgFour,
  },
  {
    icon: testimonailLogoFive,
    description:
      "In integrated marketing communications, agencies need to allocate budgets for different verticals. Through EnKash’s virtual cards, we were able to manage our budget allocation for various departments, streamline approvals seamlessly, and gain real-time visibility of all our department-wise expenses to our finance department.",
    name: "Noufel Anamala",
    position: "Transformative Leader",
    testimonialImg: testimonialImgFive,
  },
]

const contactData = [
  {
    icon: help,
    title: "Need Support",
    subtitle: "Reach out to our support team directly for any queries.",
    email: "support@enkash.com",
  },
  {
    icon: support,
    title: "Join Our Team",
    subtitle: "Want to join our fast-growing team? Send your resume to",
    email: "careers@enkash.com",
  },
  {
    icon: login,
    title: "Media Enquiry",
    subtitle: "For Media inquiries, kindly drop us an email",
    email: "marketing@enkash.com",
  },
]

const locationData = [
  {
    titleHtml: "Mumbai ",
    title2: "(Registered Office)",
    description:
      "91 Springboard BKC Kalina, 1st Floor & 2nd Floor, Kagalwala House, Plot No. 175, Behind Metro House CST Road, Kalina, Bandra Kurla Complex, Santacruz East, Mumbai, Maharashtra 400098",
  },
  {
    titleHtml: "Gurugram",
    description:
      "3rd Floor, Beyond Just Work, Plot No. 378-379, Udyog Vihar Phase 4 Rd, near Nokia Building, Electronic City, Phase IV, Udyog Vihar, Sector 19, Gurugram, Haryana 122015",
  },
  {
    titleHtml: "Pune",
    description:
      "91 Springboard Business Hub Private Limited, Sadanand Business Center (SBC), 9th Floor NH 48 Pashan Highway Side Road, Baner, Pune, Maharashtra, 411045",
  },
]
export { testimonialData, locationData, contactData }
