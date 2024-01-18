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
                  As inferred above, the process of reconciliation can be
                  long-drawn and detail-oriented, taking a lot of effort and
                  time of the finance team when done manually. Automating the{" "}
                  <Link href="https://www.enkash.com/" target="_blank">
                    accounting reconciliation process
                  </Link>{" "}
                  makes it easier for them to manage audits and plan cash flows.
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
