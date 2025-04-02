import { FAQProps } from "@/components/faq/faq"
import Link from "next/link";

const faqData: FAQProps[] = [
    {
      question: "What is invoice management?",
      answer: [],
      answerHTML: (
        <>
          <h4>
            A process that enables businesses to track and{" "}
            <Link
              href="https://www.enkash.com/olympus/payables/vendor-payment/"
              target="_blank"
            >
              pay vendor invoices
            </Link>{" "}
            is invoice management. It involves receiving an invoice from the
            vendor, verifying it, paying the amount to the vendor, and recording
            the same for future reconciliation.
          </h4>
        </>
      ),
    },
    {
      question: "Why should I automate my invoicing process?",
      answer: [],
      answerHTML: (
        <>
          {/* Your answerhtml content for index 1 */}
          <h4 className=" mb-3">Top reasons to automate invoice processing:</h4>
          {/* Add any other HTML elements as needed */}
  
          <h4 className="ms-2 mb-3">
            - No manual entry: Automated invoice management eliminates the need
            for manual entry into accounting systems{" "}
          </h4>
  
          <h4 className="ms-2 mb-3">
            - Easy verification: Accounting softwares verifies vendors and
            approves and rejects them based on the information provided. This
            helps in removing fraudulent cases
          </h4>
  
          <h4 className="ms-2 mb-3">
            - Access to information: The data on invoices can be easily viewed
            anytime and anywhere
          </h4>
  
          <h4 className="ms-2 mb-3">
            - Customized workflows: Businesses can define and customize their
            workflows as per their needs
          </h4>
  
          <h4 className="ms-2 mb-3">
            - Enhanced visibility: The visibility of{" "}
            <Link
              href="https://www.enkash.com/olympus/receivables/invoices/"
              target="_blank"
            >
              invoice management
            </Link>{" "}
            is improved with real-time data availability for decision-making
          </h4>
  
          <h4 className="ms-2 mb-3">
            - Better vendor relationship management: The automation of invoices
            gives payment notifications and alerts ensuring vendor payments are
            done on time; improving relationships
          </h4>
        </>
      ),
    },
    {
      question:
        "What is the importance of E-Invoicing in ensuring quick payments?",
      answer: [],
      answerHTML: (
        <>
          {/* Your answerhtml content for index 2 */}
          <h4>
            The quicker processing of invoices with the automation software
            enables quicker payments. Businesses can make immediate payments for
            the invoices uploaded on the automation software. In fact, with EnKash
            bulk payments can also be made with a single click. These quick
            payments can also help avail early payment discounts enabling savings
            for the business.
          </h4>
        </>
      ),
    },
    {
      question: "Is it possible to generate an online bill?",
      answer: [
        {
          heading:
            "You can upload invoices on EnKash with a few simple steps. Add the necessary details about the vendor, post KYC, upload the invoice, and make the payment via the invoicing software.",
          bullets: [],
        },
      ],
    },
    {
      question: "How do automatic invoice processes work?",
      answer: [
        {
          bullets: [
            "When an invoice is received, it is uploaded and scanned via the automation software, and the data is extracted in the accounting system in the desired format automatically",
            "As soon as the data is recorded into the digital database, the invoice is converted into a text-searchable document that is mapped by the system so that the data entered into the system can be actively tracked within the ERP system",
            "The data stored includes the vendor’s name, purchase amount, details of the goods/services availed, etc., and provides a detailed account of the invoice, which can be shared with the concerned parties for review and payment approval",
            "Vendor post-KYC is added and payment is done if data is validated",
          ],
        },
      ],
    },
    {
      question: "What are automated reminders in invoicing?",
      answer: [
        {
          heading:
            "Automated reminders or notifications can help businesses make payments to vendors before the due date. Some of the vendors provide trade discounts on early payments which can help businesses to save their costs and add to their cash flow.",
        },
      ],
    },
    {
      question: " Why are multiple payment options important in invoicing?",
      answer: [],
      answerHTML: (
        <>
          <h4>
            Businesses can improve their cash flow by offering{" "}
            <Link
              href="https://www.enkash.com/olympus/payables/bulk-payout/"
              target="_blank"
            >
              multiple payment
            </Link>{" "}
            options as this enables faster and efficient payment without any delay
            unlike in the case of traditional payment options like cheques. This
            also helps establish trust in the business.
          </h4>
        </>
      ),
    },
  ];
  export default faqData;