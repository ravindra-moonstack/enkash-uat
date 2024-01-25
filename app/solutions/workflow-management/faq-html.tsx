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
                  The workflow management cycle encompasses the entire journey
                  of an invoice, starting from its submission to final approval,
                  the steps involve:
                </h4>
                <ul className="mt-3">
                  <li>
                    <h4>
                      Add Users: Assigning roles while adding a user on the
                      dashboard to create workflow hierarchy
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Initiation: Submitting a request or invoice for approval
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Routing: Assigning the request to specific individuals
                      based on predefined rules
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Review: Each approver evaluates the request and provides a
                      decision (approve or reject)
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Payment: Once all required approvals are obtained, the
                      maker can proceed to make the paymen
                    </h4>
                  </li>
                </ul>
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
