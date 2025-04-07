import { FAQProps } from "@/components/faq/faq";
import Link from "next/link";

const faqData: FAQProps[] = [
  {
    question: "What is automated reconciliation?",
    answer: [
      {
        heading:
          "Reconciliation is a finance-related process that is carried out at regular intervals to track the payments made on behalf of the business and the amounts received. Automated reconciliation digitizes the process by tracking all transactions using technology to match transaction references.",
      },
    ],
  },
  {
    question: "Why is automated reconciliation critical for my business?",
    answer: [
      {
        heading:
          "Automated reconciliation not only ensures that all finance-related data is updated in real-time but also ensures that the finance team can concentrate on other critical aspects of the business.",
      },
    ],
  },
  {
    question:
      "Does the automated reconciliation module help improve the finance team’s performance? If yes, how?",
    answer: [],
    answerHTML: (
      <>
        <h4>
          As inferred above, the process of reconciliation can be long-drawn and
          detail-oriented, taking a lot of effort and time of the finance team
          when done manually. Automating the{" "}
          <Link href="https://www.enkash.com/" target="_blank">
            accounting reconciliation process
          </Link>{" "}
          makes it easier for them to manage audits and plan cash flows.
        </h4>
      </>
    ),
  },
  {
    question:
      "Why should a small and medium business consider automated reconciliation?",
    answer: [
      {
        heading:
          "Small and Medium Businesses operate with minimal resources to make an impact and deal with intense competition. By automating a painstaking process like accounting reconciliation, you can maximize financial efficiency with optimum resources.",
      },
    ],
  },
  {
    question:
      "How does the automated reconciliation module help improve business operations?",
    answer: [
      {
        heading:
          "With the automated reconciliation module, there is increased operational efficiency and savings on resources. This, in turn, results in better business payment management and improved collections. When cash flow is optimized, then business operations become seamless and uninterrupted.",
      },
    ],
  },
];

const secondFaqData: FAQProps[] = [
  {
    question: "Is it possible to automate bank reconciliation?",
    answer: [
      {
        heading:
          "It is possible to automate bank reconciliation with the right software. The process of bank reconciliation involves going through each entry in the account statement and matching it against payments made and the payments received. The right software solution will go through all the entries from the bank statement and match them with the records your system has and the entries to identify where the payments have been made and the parties from which you have received payments.",
      },
    ],
  },
  {
    question: "What are the benefits of automated bank reconciliation?",
    answer: [
      {
        heading:
          "Automated bank reconciliation has many benefits, both direct and indirect.",
      },
      {
        heading: "Here are some direct benefits:",
        bullets: [
          "Quicker reconciliation",
          "More accurate matching of records",
          "Saving the team's time",
          "Quicker update of internal financial statement",
        ],
      },
      {
        heading: "Indirect benefits include:",
        bullets: [
          "Better customer experience ",
          "Lesser follow-up on collections",
          "Improved payables management",
          "Compliance with audits ",
        ],
      },
    ],
  },
  {
    question: "Who prepares bank reconciliation?",
    answer: [
      {
        heading:
          "The finance department is in charge of the bank accounts reconciliation process. In earlier times, the whole process of gathering records, seeking inputs, and asking for documentation was done manually. However, today there is automated bank reconciliation. While it is a matter of using your spend management platform to run the bank reconciliation process. However, the finance department still has ownership of the entire process and is in charge of checking if the final bank accounts reconciliation is done properly.",
      },
    ],
  },
  {
    question: "What is the use of bank accounts reconciliation in Tally?",
    answer: [
      {
        heading:
          "Bank accounts reconciliation within your core financial system like Tally helps ensure that all financial records are updated and all your financial stakeholders have a single source of truth. For instance, the finance controller will be able to access the current cash flow status with a few clicks. Your sales department will be able to check if all the customer accounts that were due to make payments against their respective sales have done so and take decisions on further credit sales. Your purchase manager can assess whether a particular vendor’s contract is worth renewing and if he or she is defaulting on the delivery of goods or services. ",
      },
    ],
  },
];

export { faqData, secondFaqData };
