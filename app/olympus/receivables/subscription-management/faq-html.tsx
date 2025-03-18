"use client";

import FAQ from "@/components/faq/faq";
import Link from "next/link";
import { useState } from "react";
import { space } from "@/common/constant";
import { secondFaqData } from "./faq-data";

const FAQHtml = ({ faqData }: any) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleToggleAnswerVisibility = (index: number) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {secondFaqData.map(
        (item: { question: string; answer: any }, index: number) => (
          <FAQ
            key={index}
            question={item.question}
            answer={item.answer}
            answerHTML={
              index === 0 ? (
                <div>
                  {" "}
                  <h4 className="mb-3 mt-2">
                    <b>Customization:</b> Businesses can customize the
                    subscription management as per their requirements and save
                    costs accordingly..{" "}
                  </h4>
                  <h4 className="mb-3">
                    <b>Easy integration:</b> Enterprises can easily integrate
                    with EnKash to manage their subscriptions efficiently.
                  </h4>
                  <h4 className="mb-3">
                    <b>Single dashboard access:</b> Easy access to a
                    user-friendly dashboard to track invoices, check customer
                    history, and understand their behavior.{" "}
                  </h4>
                  <h4>
                    <b>Recurring payments: </b>
                    Define recurring payments for your customers with
                    <Link href="https://www.enkash.com/" target="_blank">
                      {`${space}invoice generation ${space}`}
                    </Link>
                  </h4>
                  <h4 className="mb-4">
                    <b> Automated invoice generation:</b> Businesses can
                    <Link
                      href="https://www.enkash.com/olympus/receivables/invoices/"
                      target="_blank"
                    >
                      {`${space} automate invoice generation ${space}`}
                    </Link>
                    for recurring payments by defining the timeline and
                    frequency for their customers.
                  </h4>
                  <h4 className="mb-3">
                    <b>Customer management: </b>EnKash helps manage customers
                    efficiently by providing them with timely reminders,
                    automated recurring invoices, and easy communication.
                  </h4>
                </div>
              ) : index === 2 ? (
                <div>
                  {" "}
                  <h4 className="mb-3 mt-2">
                    Automated subscriptions enable businesses to{" "}
                    <Link
                      href="https://www.enkash.com/olympus/receivables/bulk-collect/"
                      target="_blank"
                    >
                      {`${space} track and collect payments ${space}`}
                    </Link>
                    for their product or service automatically with various
                    payment gateways. In case, a customer doesn’t have
                    sufficient funds, they will be automatically notified.
                  </h4>
                </div>
              ) : (
                ""
              )
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
