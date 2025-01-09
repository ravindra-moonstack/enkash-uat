"use client";

import FAQ from "@/components/faq/faq";
import styles from "./page.module.scss";
import { Key, useState } from "react";
import Link from "next/link";
import { space } from "@/common/constant";

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
          answer={index !== 8 ? item.answer : undefined}
          answerHTML={
            (index === 8 && (
              <div key={index} className="mb-4">
                <h4 className={styles.heading}>
                If you wish to request the closure of your card/wallet, please click on the link below to proceed:{space}
                  <Link
                    href="https://transcorpint.com/card-closure"
                    target="_blank"
                  >
                    https://transcorpint.com/card-closure
                  </Link>{" "}
      
                </h4>
              </div>
            ))}
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  );
};

export default FAQHtml;
