import iconOne from "./img/icon-one.svg";
import iconTwo from "./img/icon-two.svg";
import iconThree from "./img/icon-three.svg";
import iconFour from "./img/icon-four.svg";
import { FAQProps } from "@/components/faq/faq";
import {
  autoCollect,
  invoices,
  paymentButton,
  paymentLink,
  qrCode,
} from "@/components/all-products";
import { AllProductsDataProp } from "@/components/all-products/all-products";

const productData: AllProductsDataProp[] = [
  {
    title: "Channel Incentives",
    description:
      "Motivate partners and distributors with tailored rewards, driving sales and long-term engagement.",
    image: paymentLink,
    link: "/loyalty-lounge/channel-incentive/",
  },
  {
    title: "Brand Vouchers",
    description:
      "Provide employees with top-brand vouchers for flexible and meaningful appreciation.",
    image: paymentButton,
    link: "/bolt/",
  },
  {
    title: "Offers",
    description:
      "Unlock exclusive deals and discounts to enhance loyalty, boost engagement, and drive satisfaction.",
    image: paymentButton,
    link: "/loyalty-lounge/offers/",
  },
];

const faqData: FAQProps[] = [
  {
    question: "What is an employee reward?",
    answer: [
      {
        heading:
          "The benefits or bonuses given to an employee by their organization for their accomplished goals is an employee reward. ",
      },
      {
        heading:
          "Businesses give these rewards to their employees to appreciate them for their efforts. This keeps them motivated to out perform themselves in future.",
      },
    ],
  },
  {
    question:
      "What are some examples of employee rewards & recognition in the workplace?",
    answer: [
      {
        heading:
          "Rewards and recognition can take various forms; this includes monetary incentives, such as bonuses, and non-monetary rewards, like extra time off, public praise, or certificates of achievement. EnKash's employee rewards platform offers a comprehensive and customized solution to facilitate employee rewards. With features like the ability to redeem from 400+ brands and an easy self-redemption platform for employees, it simplifies rewarding and recognizing employees effectively.",
      },
    ],
  },
  {
    question:
      "How can you show appreciation and reward your staff effectively?",
    answer: [
      {
        heading:
          "Effectively showing appreciation to your staff involves creating a culture of recognition. This can be achieved through timely recognition, personalized experiences, and user-friendly interfaces. With EnKash’s easy onboarding process, allocation of reward points, and automated alerts, you can seamlessly show appreciation and reward your staff, enhancing employee engagement and satisfaction.",
      },
    ],
  },
  {
    question: "What is the purpose of implementing rewards?",
    answer: [
      {
        heading:
          "The purpose of implementing rewards in an organization is to boost employee morale, productivity, and retention. EnKash’s employee rewards platform understands this purpose and simplifies the process. It offers a safe and secure platform for individual use, ensuring that the rewards contribute to employee well-being and job satisfaction. The ability to share vouchers easily and receive advance expiry alerts also maximizes employee adoption, aligning with the purpose of rewards.",
      },
    ],
  },
  {
    question:
      "What is considered the most effective recognition for employees?",
    answer: [
      {
        heading:
          "The most effective recognition for employees often involves choice and flexibility. EnKash's employee rewards platform excels by allowing employees to redeem rewards from over 400+ brands across 20+ categories. This extensive choice ensures that employees receive recognition in a form that is most meaningful to them, enhancing the effectiveness of the recognition process.",
      },
      {
        heading:
          "Customizable:EnKash's R&R program is highly customizable, allowing HR professionals to tailor it to the specific needs and culture of their organization",
      },
      {
        heading:
          "Corporate Savings: EnKash provides bulk order discounts to corporates on a wide variety of brand vouchers across categories, which makes it an excellent option to get maximum savings",
      },
      {
        heading:
          "Easy Integration:EnKash easily integrates with HRMS platforms, simplifying the process of employee onboarding and reward allocation for the HR",
      },
      {
        heading:
          "Redemption Options:EnKash offers a comprehensive catalog of 400+ brand vouchers like Myntra, Amazon, Zomato, Nykaa, etc., across 20+ categories like entertainment, fashion, travel, etc., that employees can choose from",
      },
      {
        heading:
          "Centralized Dashboard:EnKash offers a centralized dashboard, streamlining the management and administration of the R&R program, making it more efficient for HR professionals to implement and maintain the programs at scale",
      },
    ],
  },
  {
    question:
      "Why is it essential to implement employee rewards and recognition?",
    answer: [
      {
        heading:
          "Implementing rewards and recognition programs is crucial because they boost employee morale, productivity, and job satisfaction. With EnKash's employee rewards platform, safety and security are top priorities so employees can use them worry-free. The platform also facilitates easy sharing of vouchers and provides advance expiry alerts, ensuring employees maximize their rewards and remain engaged.",
      },
    ],
  },
];

const carouselData = [
  {
    image: iconOne,
    alt: "Log in to EnKash using your registered mobile number and complete your KYC.",
    title:
      "Log in to EnKash using your registered mobile number and complete your KYC.",
    heading: "Login: ",
  },
  {
    image: iconTwo,
    alt: "Add funds to your account via NEFT, IMPS, or RTGS. ",
    title: "Add funds to your account via NEFT, IMPS, or RTGS. .",
    heading: "Add Funds: ",
  },
  {
    image: iconThree,
    alt: "Upload employee data using the sample file format and allocate points against the name of the employee to be rewarded. ",
    title:
      "Upload employee data using the sample file format and allocate points against the name of the employee to be rewarded. ",
    heading: "Employee Details: ",
  },
  {
    image: iconFour,
    alt: "Employees will be notified via SMS, WhatsApp, and e-mail about rewards and the redemption process.",
    title:
      "Employees will be notified via SMS, WhatsApp, and e-mail about rewards and the redemption process.",
    heading: "Redeem: ",
  },
];

const blogData = [
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_33.8ebac017.jpg",
    imageAlt: "7 Benefits of Payroll cards for Employees",
    title: "7 Benefits of Payroll cards for Employees",
    date: "Aug 02, 2023",
    description:
      "Caring for employees makes a business seem thoughtful and reliable. Employee satisfaction is a two-way street and payroll cards for employees is a good start. The easiest way to...",
    link: "https://www.enkash.com/resources/blog/payroll-card-for-employees/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2022/09/blog_26.d1a8b0d7.jpg",
    imageAlt: "Rewards Programs -The Way to Pay More, Earn More",
    title: "Rewards Programs -The Way to Pay More, Earn More",
    date: "Aug 02, 2023",
    description:
      "Corporate cards with attractive rewards programs are one of the most popular choices in the business world these days. Their ease of usage coupled with their immense flexibility...",
    link: "https://www.enkash.com/resources/blog/corporate-cards-benefits-rewards-program/",
  },
  {
    image:
      "https://www.enkash.com/resources/wp-content/uploads/2023/06/Employee-Retention-Strategies-to-Help-Your-Startup-Thrive.jpg",
    imageAlt: "8 Employee Retention Strategies for Startup Success",
    title: "8 Employee Retention Strategies for Startup Success",
    date: "Jun 15, 2023",
    description:
      "Running a successful startup requires more than just innovative ideas and cutting-edge technology. It also relies on having a team of talented and dedicated employees who are committed...",
    link: "https://www.enkash.com/resources/blog/employee-retention-strategies/",
  },
];

export { blogData, faqData, carouselData, productData };
