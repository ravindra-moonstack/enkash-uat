import Link from "next/link";
import { FAQProps } from "@/components/faq/faq";

const faqData: FAQProps[] = [
    {
      question: "What is Vendor Management System (VMS)?",
      answer: [
        {
          heading:
            "A Vendor Management System (VMS) is a centralized platform designed to streamline and optimize the management of vendors or suppliers. Our vendor management offers advanced features to centralize vendor data, automate verification processes, and provide real-time insights into spending patterns.",
          bullets: [],
        },
      ],
    },
    {
      question: "What is the vendor life cycle?",
      answer: [
        {
          heading:
            "The vendor life cycle encompasses the five stages of managing vendors:",
          bullets: [
            "Pre-qualification: Identifying and evaluating potential vendors based on your needs and criteria",
            "Selection: Choosing the most suitable vendor after a thorough assessment",
            "Onboarding: Integrating the chosen vendor into your systems and processes",
            "Management: Collaborating effectively with the vendor, monitoring performance, and ensuring contract compliance",
            "Renewal/Termination: Deciding whether to renew the contract or find a new vendor based on performance and future needs",
          ],
        },
      ],
    },
    {
      question: "What is another name for vendor management?",
      answer: [
        {
          heading:
            "Supplier management and third-party relationship management (TPRM) are two alternative terms for vendor management. Though slightly nuanced, they essentially involve building and maintaining efficient relationships with external partners who provide goods or services necessary for your business operations.",
          bullets: [],
        },
      ],
    },
    {
      question: "What are the four stages of vendor management?",
      answer: [
        {
          heading:
            "The four stages of vendor management typically include vendor identification, onboarding, ongoing monitoring, and performance evaluation.",
          bullets: [],
        },
      ],
    },
  ];
  const secondFaqData: FAQProps[] = [
    {
      question: " What are the benefits of a vendor management system?",
      answer: [],
      answerHTML: (
        <>
          <h4>Benefits of using EnKash vendor management system:</h4>
          <ul>
            <li>
              Streamlined Operations: EnKash centralizes vendor data, onboarding,
              invoicing, and payments, eliminating manual processes and saving
              time.
            </li>
            <li>
              Improved Cost Efficiency: Gain real-time insights into spending
              patterns, and identify discounts and early payment opportunities.
            </li>
            <li>
              Enhanced Transparency and Compliance: Ensure accuracy and
              consistency in vendor data, and maintain complete audit trails.
            </li>
            <li>
              Reduced Risks and Fraud:{" "}
              <Link
                href="https://www.enkash.com/resources/blog/enhance-productivity-with-vendor-payment-automation/"
                target="_blank"
              >
                Automate vendor verification
              </Link>{" "}
              through eKYC to minimize the risk of fraudulent activity.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: " Is vendor management a part of ITIL?",
      answer: [
        {
          heading:
            "Yes, vendor management is a crucial component of ITIL (Information Technology Infrastructure Library) practices, ensuring effective management of external service providers.",
        },
      ],
    },
    {
      question: "Who is responsible for vendor management?",
      answer: [
        {
          heading:
            "Vendor management is a collaborative effort involving various stakeholders, with responsibility often falling on procurement, supply chain, or vendor management teams.",
        },
      ],
    },
  ];
  export { faqData, secondFaqData };
