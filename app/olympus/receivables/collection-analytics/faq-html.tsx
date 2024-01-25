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
          answerHTML={
            index === 1 ? (
              <>
                <h4>
                  With collection analytics, businesses can analyze historical
                  data and can gain insights into patterns, trends, and
                  potential risks related to{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/"
                    target="_blank"
                  >
                    business accounts receivable
                  </Link>{" "}
                  . This process can benefit your business by improving
                  efficiency in debt recovery, reducing bad debt, and enhancing
                  overall cash flow management.
                </h4>
              </>
            ) : index === 2 ? (
              <>
                <h4 className=" mb-3">
                  Top reasons to automate invoice processing:Collection
                  analytics software utilizes historical data, customer payment
                  patterns, and various metrics to create models that{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/bulk-collect/"
                    target="_blank"
                  >
                    predict future payment
                  </Link>{" "}
                  behavior. These models consider factors such as payment
                  history, average DSO, etc to assess the likelihood of timely
                  payments. This predictive capability allows businesses to
                  proactively manage collections, prioritize high-risk accounts,
                  and optimize resource allocation for better results.
                </h4>
              </>
            ) : index === 3 ? (
              <>
                {/* Your answerhtml content for index 2 */}
                <h4>
                  DSO stands for Days Sales Outstanding. It is a financial
                  metric that measures the average number of days it takes for a
                  company to collect payment after a sale has been made. DSO is
                  calculated by dividing accounts receivable by the average
                  daily sales. It is a key indicator of a company's efficiency
                  in managing its{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/"
                    target="_blank"
                  >
                    accounts receivable
                  </Link>{" "}
                  and collecting payments from customers.
                </h4>
              </>
            ) : index === 4 ? (
              <>
                <h4>
                  Key metrics and indicators in collection analytics software
                  include Days Sales Outstanding (DSO), customer behavior, and
                  payment trends. These metrics help businesses evaluate the
                  efficiency of their{" "}
                  <Link
                    href="https://www.enkash.com/resources/blog/how-to-collect-payment-on-time-for-business-success/"
                    target="_blank"
                  >
                    collection processes
                  </Link>{" "}
                  , identify areas of improvement, and prioritize accounts for
                  targeted actions.
                </h4>
              </>
            ) : null
          }
          answer={index === 0 ? item.answer : null}
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  );
};

export default FAQHtml;
