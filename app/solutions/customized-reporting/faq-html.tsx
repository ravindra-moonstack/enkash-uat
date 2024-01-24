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
            index === 3 ? (
              <>
                <h4>
                  Yes,{" "}
                  <Link href="https://www.enkash.com/" target="_blank">
                    EnKash's
                  </Link>{" "}
                  EnKash's customized reporting feature supports the integration
                  of data from multiple sources into a single report. This
                  capability is invaluable for businesses that gather
                  information from various platforms or departments, as it
                  enables a holistic view of performance by consolidating
                  diverse datasets into a unified report. This integration
                  ensures that decision-makers have access to comprehensive and
                  interconnected insights, fostering a more informed and
                  strategic approach to business management.
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
