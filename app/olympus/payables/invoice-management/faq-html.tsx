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
            index === 0 ? (
              <>
                <h4>
                  A process that enables businesses to track and{" "}
                  <Link
                    href="https://www.enkash.com/olympus/payables/vendor-payment/"
                    target="_blank"
                  >
                    pay vendor invoices
                  </Link>{" "}
                  is invoice management. It involves receiving an invoice from
                  the vendor, verifying it, paying the amount to the vendor, and
                  recording the same for future reconciliation.
                </h4>
              </>
            ) : index === 1 ? (
              <>
                {/* Your answerhtml content for index 1 */}
                <h4 className=" mb-3">
                  Top reasons to automate invoice processing:
                </h4>
                {/* Add any other HTML elements as needed */}

                <h4 className="ms-2 mb-3">
                  - No manual entry: Automated invoice management eliminates the
                  need for manual entry into accounting systems{" "}
                </h4>

                <h4 className="ms-2 mb-3">
                  - Easy verification: Accounting softwares verifies vendors and
                  approves and rejects them based on the information provided.
                  This helps in removing fraudulent cases
                </h4>

                <h4 className="ms-2 mb-3">
                  - Access to information: The data on invoices can be easily
                  viewed anytime and anywhere
                </h4>

                <h4 className="ms-2 mb-3">
                  - Customized workflows: Businesses can define and customize
                  their workflows as per their needs
                </h4>

                <h4 className="ms-2 mb-3">
                  - Enhanced visibility: The visibility of{" "}
                  <Link
                    href="https://www.enkash.com/olympus/receivables/invoices/"
                    target="_blank"
                  >
                    invoice management
                  </Link>{" "}
                  is improved with real-time data availability for
                  decision-making
                </h4>

                <h4 className="ms-2 mb-3">
                  - Better vendor relationship management: The automation of
                  invoices gives payment notifications and alerts ensuring
                  vendor payments are done on time; improving relationships
                </h4>
              </>
            ) : index === 2 ? (
              <>
                {/* Your answerhtml content for index 2 */}
                <h4>
                  The quicker processing of invoices with the automation
                  software enables quicker payments. Businesses can make
                  immediate payments for the invoices uploaded on the automation
                  software. In fact, with EnKash bulk payments can also be made
                  with a single click. These quick payments can also help avail
                  early payment discounts enabling savings for the business.
                </h4>
              </>
            ) : index === 6 ? (
              <>
                <h4>
                  Businesses can improve their cash flow by offering{" "}
                  <Link
                    href="https://www.enkash.com/olympus/payables/bulk-payout/"
                    target="_blank"
                  >
                    multiple payment
                  </Link>{" "}
                  options as this enables faster and efficient payment without
                  any delay unlike in the case of traditional payment options
                  like cheques. This also helps establish trust in the business.
                </h4>
              </>
            ) : null
          }
          answer={index !== 2 ? item.answer : null}
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  );
};

export default FAQHtml;
