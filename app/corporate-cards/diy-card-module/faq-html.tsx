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
            index === 0 ? (
              <>
                <h4>
                  The DIY card module by{" "}
                  <Link href="https://www.enkash.com/" target="_blank">
                    EnKash
                  </Link>{" "}
                  is a solution for businesses to manage corporate card
                  expenses. It offers customizable spending limits, real-time
                  expense tracking, and{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/manage-business-expenses-with-enkash-corporate-card/"
                    target="_blank"
                  >
                    easy card management
                  </Link>{" "}
                  with a user-friendly dashboard. This centralized solution
                  simplifies processes like issuing purpose-specific cards and
                  disabling cards, ensuring efficient control and optimization
                  of overall business expenditure.
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
