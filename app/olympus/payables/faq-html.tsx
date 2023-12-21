"use client";

import FAQ from "@/components/faq/faq";
import styles from "./page.module.scss";
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
          answer={index !== 3 ? item.answer : undefined}
          answerHTML={
            index === 3 && (
              <div key={index} className="mb-4">
                <h4 className={styles.heading}>
                  GST, or Goods and Services Tax, is a consolidated tax that
                  replaced many state-level, central-level and value-added
                  taxes. For any business to continue functioning, it is crucial
                  to pay GST on time and file the return. Moreover, the
                  non-payment of GST can lead to penalties, causing further
                  issues.
                </h4>
                <h4>
                  For the <Link href="/olympus/payables/gst-payments">gst payment</Link> to go on
                  time, there are various steps involved, which need to take
                  place quickly and without any errors. The process starts by
                  logging into the GST portal, checking the details of the tax
                  amount due, and preparing and downloading a challan. Once the
                  challan is ready, you need to internally get it checked and
                  approved by the requisite authorities and make the payment.
                  Once the payment is completed, it is a good idea to record the
                  maker-checker-approval trail and the related documents.
                </h4>
              </div>
            )
          }
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  );
};

export default FAQHtml;
