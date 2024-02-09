"use client";

import FAQ from "@/components/faq/faq";
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
          answerHTML={
            index === 2 ? (
              <>
                <h4>
                  EnKash’s cash flow analytics is designed to be user-friendly
                  which makes it easy for interpretation. Businesses can easily
                  navigate through data and interpret it for effective
                  decision-making and{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/budgeting-in-financial-management/"
                    target="_blank"
                  >
                    financial management.
                  </Link>
                </h4>
              </>
            ) : null
          }
          answer={item.answer}
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  );
};

export default FAQHtml;
