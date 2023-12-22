"use client";

import FAQ from "@/components/faq/faq";
import styles from "./page.module.scss";
import Link from "next/link";
import { useState } from "react";

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
          answer={index !== 0 && index !== 1 ? item.answer : undefined}
          answerHTML={
            (index === 0 && (
              <div key={index} className="mb-4">
                <h4 className={styles.heading}>
                  Opting for{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/what-is-enkash-olympus/"
                    target="_blank"
                  >
                    Olympus's automated invoicing
                  </Link>{" "}
                  has many benefits. It reduces the time and cost associated
                  with manual invoicing, enhances accuracy, and ensures prompt
                  payments. Moreover, it eliminates the risk of human errors
                  during manual data entry and calculations.
                </h4>
              </div>
            )) ||
            (index === 1 && (
              <div key={index} className="mb-4">
                <h4 className={styles.heading}>
                  Automated reminders are notifications sent to customers to
                  prompt them to pay their invoices on time. These reminders can
                  be scheduled to run automatically, reducing the need for
                  labor-intensive manual follow-ups.
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
