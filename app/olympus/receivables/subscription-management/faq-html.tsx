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
          answer={item.answer}
          answerHTML={
            index === 0 ? (
              <h4>
                EnKash helps businesses manage their subscriptions efficiently.
                Businesses can easily integrate with EnKash and keep track of
                all activities where subscription-based services are involved
                including{" "}
                <Link
                  href="https://www.enkash.com/olympus/payables/invoice-management/"
                  target="_blank"
                >
                  invoice generation
                </Link>{" "}
                invoice generation, customer management, recurring payments, and
                change in plans. Everything from e-commerce platforms, payment
                gateways, and accounting software can be integrated with EnKash
                for subscription management.
              </h4>
            ) : index === 1 ? (
              <div>
                {" "}
                <h4 className="mb-3 mt-2">
                  <b>Automates recurring invoices:</b> EnKash’s subscription
                  management system facilitates recurring invoices as it
                  automatically sends invoices to customers each month as per
                  the defined timeline.{" "}
                </h4>
                <h4 className="mb-3">
                  <b>Enables seamless payment:</b> Businesses can send reminders
                  to their customers with the help of subscription management.
                  The need to follow up with customers manually for payment is
                  eliminated with automation.
                </h4>
                <h4 className="mb-3">
                  <b>Cost saving with customization:</b> Enterprises can
                  customize their subscription management as per their needs.
                  This enables them to decide integration at their convenient
                  cost.{" "}
                </h4>
                <h4 className="mb-4">
                  <b> Access to automatic reports:</b> It becomes easy to track
                  new customers and existing subscribers along with their
                  transaction history on a single platform. This facilitates
                  decision-making in a business.
                </h4>
              </div>
            ) : (
              ""
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
