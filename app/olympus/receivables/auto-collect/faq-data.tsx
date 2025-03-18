import { FAQProps } from "@/components/faq/faq";

import FAQ from "@/components/faq/faq";
import styles from "./page.module.scss";
import Link from "next/link";

import { space } from "@/common/constant";

const faqData: FAQProps[] = [
  {
    question: "What is auto collect?",
    answer: [
      {
        heading:
          "Auto collect is a streamlined automated payment collection solution, designed to facilitate effortless fund collection via various channels such as UPI payment collection, NEFT payment collection, IMPS, and RTGS. It automates the reconciliation process, providing real-time reconciliation and automated alerts, thereby optimizing financial operations for businesses.",
      },
    ],
  },
  {
    question: "Who can use the auto-collect solution?",
    answer: [
      {
        heading:
          "Auto collect is available for businesses of all sizes and types, ranging from single-entity establishments to those with multiple branches or departments. It is tailored to meet the payment collection needs of a wide range of businesses, regardless of their scale or industry.",
      },
    ],
  },
  {
    question:
      "Where can I see all the settlements for payments collected via the auto-collect solution?",
    answer: [
      {
        heading:
          "You can view all the settlements for payments that are collected via the auto-collect solution through EnKash’s reporting dashboard. This centralized dashboard offers comprehensive insights into your payment settlements, enabling efficient monitoring and management of your financial transactions.",
      },
    ],
    answerHTML: (
      <div className="mb-4">
        <h4 className={styles.heading}>
          You can view all the settlements for payments that are collected via
          the auto-collect solution through
          <Link href="https://www.enkash.com/ " target="_blank">
            {`${space}EnKash’s `}
          </Link>
          reporting dashboard. This centralized dashboard offers comprehensive
          insights into your payment settlements, enabling efficient monitoring
          and management of your financial transactions.
        </h4>
      </div>
    ),
  },
  {
    question:
      "How does auto collect enhance efficiency and accuracy while saving time?",
    answer: [
      {
        heading:
          "Auto collect enhances efficiency and accuracy by automating the reconciliation process and providing real-time reconciliation capabilities. This minimizes errors, improves accuracy, and eliminates the need for manual intervention, thereby saving time and streamlining financial operations.",
      },
    ],
  },
  {
    question:
      "In what ways does auto collect contribute to an improved customer experience?",
    answer: [
      {
        heading:
          "Auto collect contributes to an improved customer experience by offering flexible payment settlements and real-time alerts. It ensures timely access to funds, even on bank holidays, and provides immediate notifications of successful payments, enhancing transparency and reliability for both businesses and customers.",
      },
    ],
  },
];

export default faqData;
