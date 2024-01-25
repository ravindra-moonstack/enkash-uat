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
        index !== 1 ? (
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
              <div key={index} className="mb-4">
                <h4 className={styles.heading}>
                  Businesses can use EnKash’s payment reminder to{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/bulk-collect/"
                    target="_blank"
                  >
                    collect payments from their customers.
                  </Link>{" "}
                  For that register your business on the platform and choose
                  between two types of payment reminders we provide - invoice
                  reminders and automatic reminders.
                </h4>
                <div className="mb-3"></div>
                <h4 className={styles.heading}>
                  Invoice reminders are those when you dig out the invoices from
                  the dashboard against which payments are due and select them
                  all at once or one after the other to send reminders to the
                  customers.
                </h4>{" "}
                <div className="mb-3"></div>
                <h4 className={styles.heading}>
                  Automated reminders on the other hand are created when a
                  customer is onboarded. These reminders are set up very early
                  in the customer journey. These reminders eliminate the need to
                  manually follow up with the customer as they extract data and
                  dispatch{" "}
                  <Link
                    href="https://www.enkash.com/olympus/payables/invoice-management/"
                    target="_blank"
                  >
                    invoices
                  </Link>{" "}
                  automatically, reminding them of the due dates to make
                  payment.
                </h4>
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
