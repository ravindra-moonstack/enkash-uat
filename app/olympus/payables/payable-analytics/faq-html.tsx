"use client";

import FAQ from "@/components/faq/faq";
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
          answer={item.answer}
          answerHTML={
            index === 0 ? (
              <h4>
                Payable analytics involves using data and insights to understand
                the organization’s payments. Using it, the spend pattern of the
                business can be accessed along with the identification of areas
                for improvement. It facilitates informed decision-making for
                businesses wherever their payments are concerned be it for{" "}
                <Link
                  href="https://www.enkash.com/olympus/payables/vendor-management/"
                  target="_blank"
                >
                  vendors
                </Link>{" "}
                or other entities.
              </h4>
            ) : index == 3 ? (
              <h4>
                Businesses can easily integrate{" "}
                <Link href="https://www.enkash.com/" target="_blank">
                  EnKash’s
                </Link>{" "}
                payable analytics with their existing accounting software or ERP
                software. The integration is not complicated and doesn’t require
                much technical cost.
              </h4>
            ) : (
              ""
            )
          }
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  );
};

export default FAQHtml;
