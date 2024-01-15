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
        index !== 2 ? (
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
                <p>
                  The quicker processing of invoices with the{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/"
                    target="_black"
                  >
                    automation software
                  </Link>{" "}
                  enables quicker payments. Businesses can make immediate
                  payments for the invoices uploaded on the automation software.
                  In fact, with EnKash bulk payments can also be made with a
                  single click. These quick payments can also help avail early
                  payment discounts enabling savings for the business.
                </p>
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
