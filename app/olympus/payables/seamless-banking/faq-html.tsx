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
        index !== 6 ? (
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
              <>
                <h4>
                  The multi-bank payment solution by EnKash enables businesses
                  to have clear visibility of payments made directly to their
                  bank account or payments made via their bank account. With
                  EnKash, businesses can manage{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/manage-multiple-bank-accounts-with-enkash/"
                    target="_black"
                  >
                    multiple bank accounts
                  </Link>{" "}
                  and align different departments with the suitable bank branch.
                  Businesses can also customize the approval flow according to
                  the hierarchy and role mapping.
                </h4>
                <h4>
                  The reconciliation happens on the dashboard in real time. This
                  visibility helps businesses in quick decision-making based on
                  the data and manage their finances better.
                </h4>
              </>
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
