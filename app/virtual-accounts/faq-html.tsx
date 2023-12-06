"use client";

import FAQ from "@/components/faq/faq";
import styles from "./page.module.scss";
import Link from "next/link";
import { Key, useState } from "react";
import { space } from "@/constant/common";

const FAQHtml = ({ faqData }: any) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleToggleAnswerVisibility = (index: number) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {faqData.map((item: { question: string; answer: any }, index: number) =>
        index !== 3 ? (
          <FAQ
            key={index}
            question={item.question}
            answer={item.answer}
            answerVisible={index === openFAQIndex}
            onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
          />
        ) : (
          <FAQ
            key={index}
            question={item.question}
            answerHTML={
              <div key={index} className="mb-4">
                <h4 className={styles.heading}>
                  There are many
                  <Link
                    href="https://www.enkash.com/resources/blog/what-is-virtual-account-number/"
                    target="_blank"
                  >
                    {`${space}advantages that virtual accounts offer`}
                  </Link>
                  , including ease of use, the ability to offer better customer
                  service, real-time updating of their accounts with the
                  payments received, prevention of fraud, and, most important of
                  all, how traceable virtual accounts are to specific customer
                  accounts and their payments.
                </h4>
              </div>
            }
            answerVisible={index === openFAQIndex}
            onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
          />
        )
      )}
    </div>
  );
};

export default FAQHtml;
