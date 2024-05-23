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
            index === 1 ? (
              <>
                <h4>
                  <strong>Improved Efficiency:</strong> Automate tasks,
                  streamline workflows, and reduce administrative burdens
                </h4>
                <h4>
                  <strong>Enhanced Control:</strong> Enforce spending policies,
                  track expenses in real-time, and mitigate fraud risks
                </h4>
                <h4>
                  <strong>Better Decision-Making:</strong> Gain access to
                  real-time data and insights for informed financial decisions
                </h4>
                <h4>
                  <strong>Cost Optimization:</strong> Control spending,
                  eliminate unnecessary costs, and align budgets with financial
                  goals
                </h4>
                <h4>
                  <strong>Scalability:</strong> Adapt the platform to your
                  company's growth and evolving financial needs
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
