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
                  An employee insight dashboard is a centralized analytics
                  dashboard provided by <Link href="/">EnKash</Link> for the
                  admin or finance teams that offers a comprehensive view of
                  employee business expenses dissected by department, expense
                  heads, and employee grades providing detailed analytics and
                  visualizations. It allows businesses to track and analyze
                  spending patterns, monitor deviations offering insights into
                  individual and overall expenses for enhanced financial
                  control.
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
