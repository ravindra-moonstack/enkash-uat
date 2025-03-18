"use client";

import FAQ, { FAQProps } from "@/components/faq/faq";
import { useState } from "react";

const FAQHtml = ({ faqData }: { faqData: FAQProps[] }) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleToggleAnswerVisibility = (index: number) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {faqData.map((item, index) => (
        <FAQ
          key={index}
          question={item.question}
          answerHTML={item.answerHTML}
          answer={item.answer}
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  );
};

export default FAQHtml;
