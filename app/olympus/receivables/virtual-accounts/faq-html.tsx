"use client";

import FAQ from "@/components/faq/faq";
import styles from "./page.module.scss";
import Link from "next/link";
import { Key, useState } from "react";
import { space } from "@/common/constant";

const FAQHtml = ({ faqData }: any) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleToggleAnswerVisibility = (index: number) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {faqData.map((item: { question: string; answer: any }, index: number) =>
        index !== 0 ? (
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
                  A virtual account is a digital account created to simplify the
                  financial processes of businesses. Similar to bank accounts,
                  virtual accounts are mostly used in payment collection from
                  customers.{" "}
                </h4>
                <h4 className={styles.heading}>
                  Every customer is given a unique{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/what-is-virtual-account-number/"
                    target="_blank"
                  >
                    {`${space}virtual account number${space}`}
                  </Link>{" "}
                  as and when their virtual account is created. As soon as they
                  make a payment, the funds are routed to the company's actual
                  bank account associated with that virtual account.
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
