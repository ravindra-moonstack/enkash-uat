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
            index === 10 ? (
              <>
                <h4>Here's how bulk transfer operates:</h4>

                <ul>
                  <li>
                    <h4>
                      Specify the type of bulk payment needed, such as{" "}
                      <Link
                        href="https://www.enkash.com/olympus/payables/vendor-payment/"
                        target="_blank"
                      >
                        vendor payments,
                      </Link>{" "}
                      rental, etc
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Download the sample format, enter details, and upload it
                    </h4>{" "}
                  </li>
                  <li>
                    <h4>Submit for approval in a maker-checker workflow</h4>
                  </li>
                  <li>
                    <h4>
                      Select multiple invoices and initiate bulk payments using
                      various payment methods
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
