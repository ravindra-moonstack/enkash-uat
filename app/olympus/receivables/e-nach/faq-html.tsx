"use client";

import FAQ from "@/components/faq/faq";
import styles from "./page.module.scss";
import Link from "next/link";
import { Key, useState } from "react";
import { space } from "@/common/constant";

const FAQHtml = ({ faqData }: any) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleToggleAnswerVisibility = (index: number) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {faqData.map((item: { question: string; answer: any }, index: number) =>
        index !== 2 ? (
          <FAQ
            key={index}
            question={item.question}
            answer={item.answer}
            answerVisible={index === openFAQIndex}
            onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
          />
        ) : (
          <FAQ
            key={index}
            question={item.question}
            answerHTML={
              <div key={index} className="my-5">
                <div className="container">
                  <table className="table table-bordered table-responsive">
                    <thead>
                      <tr>
                        <th>Basis of Differences</th>
                        <th>e-NACH</th>
                        <th>e-Mandate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Governing Authority</td>
                        <td>
                          e-NACH is governed by the National Payments
                          Corporation of India (NPCI) and covers over 40+ banks.
                        </td>
                        <td>e-Mandates are governed by individual banks.</td>
                      </tr>
                      <tr>
                        <td>Types of Payments</td>
                        <td>e-NACH excels in automating recurring payments.</td>
                        <td>
                          e-Mandate provides versatility, accommodating both
                          recurring and one-time transactions.
                        </td>
                      </tr>
                      <tr>
                        <td>Control</td>
                        <td>
                          It offers automated processing with predetermined
                          schedules.
                        </td>
                        <td>
                          It provides flexibility to initiate transactions as
                          needed.
                        </td>
                      </tr>
                      <tr>
                        <td>Usage</td>
                        <td>
                          It is commonly used for subscriptions, loan
                          repayments, and utilities.
                        </td>
                        <td>
                          It is used for various payments including ad-hoc
                          payments.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            }
            answerVisible={index === openFAQIndex}
            onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
          />
        )
      )}
    </div>
  );
};

export default FAQHtml;
