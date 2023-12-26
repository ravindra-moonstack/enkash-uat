"use client";

import FAQ from "@/components/faq/faq";
import styles from "./page.module.scss";
import Link from "next/link";
import { Key, useState } from "react";

const FAQHtml = ({ faqData }: any) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleToggleAnswerVisibility = (index: number) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  return (
    <div>
      {faqData.map((item: { question: string; answer: any }, index: number) => (
        <FAQ
          key={index}
          question={item.question}
          answer={index !== 0 && index !== 3 ? item.answer : undefined}
          answerHTML={
            (index === 0 && (
              <div key={index} className="mb-4">
                <h4 className={styles.heading}>
                  Digital marketing promotes products or services using digital
                  channels like search engines, social media, email, and
                  websites. Digital marketing cards serve as financial control
                  tools in this landscape, consolidating expenses scattered
                  across platforms. These purpose-based cards enable businesses
                  to manage{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/enkash-corporate-cards-for-digital-marketers/"
                    target="_blank"
                  >
                    digital marketing expenses
                  </Link>{" "}
                  efficiently in a centralized place, simplifying financial
                  oversight and offering a comprehensive view of their digital
                  marketing activities.
                </h4>
              </div>
            )) ||
            (index === 3 && (
              <div key={index} className="mb-4">
                <h4 className={styles.heading}>
                  Companies can issue this{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/enkash-corporate-cards-for-digital-marketers/"
                    target="_blank"
                  >
                    corporate card for digital marketing
                  </Link>{" "}
                  purposes and establish specific spending limits for distinct
                  categories of expenditures. For instance, you can set limits
                  for campaign-related expenses and subscription renewals based
                  on your marketing budget. Furthermore, you can manage the
                  types of expenditures you want to allow, ensuring that
                  payments to specific websites or services align with your
                  predefined financial boundaries.
                </h4>
              </div>
            ))
          }
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  );
};

export default FAQHtml;
