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
              <>
                <h4>
                  Pay by any card is a feature offered by EnKash that provides
                  great flexibility in payment options by enabling businesses to
                  make contactless card payments, such as{" "}
                  <Link
                    href="https://www.enkash.com/olympus/payables/vendor-payment/"
                    target="_black"
                  >
                    vendor payments
                  </Link>{" "}
                  , rental payments,{" "}
                  <Link
                    href="https://www.enkash.com/olympus/payables/bill-payment/"
                    target="_black"
                  >
                    bill payments
                  </Link>
                  , and GST payments, using any card of their choice, including
                  their personal credit card.
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
