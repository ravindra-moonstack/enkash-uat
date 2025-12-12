import { TFAQProps } from "@/src/types/faq"
import Link from "next/link"

export const faqData: TFAQProps[] = [
  {
    question: "What is an expense management platform, and how does it work?",
    answer: [
      {
        heading:
          "An expense management platform automates how companies capture, approve, track, and reconcile employee and business expenses. It eliminates manual processes and ensures compliance with policies and tax regulations.",
      },
    ],
  },
  {
    question:
      "Why should businesses use an automated expense management system?",
    answer: [
      {
        heading:
          "Manual expense processes are time-consuming, error-prone, and hard to audit. An automated system like EnKash ensures faster reimbursements, better policy control, GST compliance, and real-time spend visibility.",
      },
    ],
  },
  {
    question: "How does EnKash help with GST compliance?",
    answer: [
      {
        heading:
          "EnKash auto-captures GST breakup (CGST, SGST, IGST), validates GSTINs, and stores input credit data, making your tax filings audit-ready and accurate. (See also: How does EnKash help with GST compliance?)",
      },
    ],
  },
  {
    question: "Can employees submit expenses via WhatsApp or email?",
    answer: [
      {
        heading:
          "Yes. EnKash allows expense submission through WhatsApp and email. Just snap a receipt and send it; it’s perfect for on-the-go teams.",
      },
    ],
  },
  {
    question: "Does EnKash support mileage and travel reimbursements?",
    answer: [
      {
        heading:
          "Yes. Employees can log kilometers or use GPS for business travel. The system auto-calculates mileage claims and per diem allowances based on company policy.",
      },
    ],
  },
  {
    question: "What types of expenses can be managed with EnKash?",
    answer: [
      {
        heading:
          "EnKash supports travel, meals, lodging, office supplies, petty cash, fuel, entertainment, vendor advances, multi-currency spends, and more across all departments and roles.",
      },
    ],
  },
  {
    question:
      "Is the platform suitable for startups, SMEs, and large enterprises?",
    answer: [
      {
        heading:
          "Yes. EnKash is scalable - from lean startups to multi-location enterprises. You can customize policies, workflows, and integrations to match your size and complexity.",
      },
    ],
  },
  {
    question: "What is OCR in expense management?",
    answer: [
      {
        heading:
          "OCR (Optical Character Recognition) automatically reads receipts and invoices, extracting details like merchant name, GSTIN, amount, and tax, reducing manual entry errors.",
      },
    ],
  },
  {
    question: "How to track expenses for small Business?",
    answer: [
      {
        heading:
          "Small businesses can track expenses effectively by using tools like spreadsheets or expense management software. Start by categorizing expenses (e.g., rent, travel, utilities), saving all receipts, and recording transactions regularly. Using digital solutions helps automate tracking, generate reports, and ensure better control over cash flow and tax compliance.",
      },
    ],
  },
  {
    question:
      "Can I set different expense limits or policies for different departments or roles?",
    answer: [
      {
        heading:
          "Absolutely. You can configure role-based, department-level, and geography-specific policies with custom approval workflows and budgets.",
      },
    ],
  },
  {
    question: "What is expense management software?",
    answer: [
      {
        heading:
          "Expense management software is a tool that helps businesses track, manage, and control employee and company expenses efficiently, reducing manual work and improving cost visibility.",
      },
    ],
  },
  {
    question: "What is the price of the expense management system?",
    answer: [
      {
        heading:
          "Talk to our sales team today for pricing details and to explore tailored plans designed for your business needs.",
      },
    ],
  },

  // ⭐ NEW FAQ ADDED HERE
  {
    question:
      "Does the EnKash Expense Management System integrate with HRMS, payroll, and accounting tools?",
    answer: [
      {
        heading:
          "Yes. The EnKash Expense Management System integrates with major ERP, HRMS, payroll, and accounting platforms used by businesses across India. This helps you sync employee reimbursements, cost centres, and ledger entries automatically so finance teams avoid manual data entry and reconciliation. The result is faster closing cycles, accurate books, and a smooth flow of information across your finance stack.",
      },
    ],
  },
  {
    question: "What is an expense register and why is it important?",
    answer: [
      {
        heading:
          "An expense register is a structured record where all business expenses are logged, categorized, and tracked in one place. It helps finance teams maintain accurate books, ensure compliance, speed up reconciliations, and stay audit-ready at all times. Using a digital system like the EnKash Expense Management System makes this process easier by capturing expenses in real time, preventing manual errors, and giving clear visibility into company spend.",
      },
    ],
  },
  {
    question:
      "What are the key features to look for in an expense management platform?",
    answer: [
      {
        heading:
          "A good expense management platform should help businesses automate expense capture, enforce spending controls, and improve compliance. Key features include:\n\n- Smart receipt capture with OCR\n- Automated approval workflows\n- Petty cash and UPI-based expense controls\n- Employee reimbursement tracking\n- GST-ready expense records for Indian businesses\n- Spending policy enforcement\n- Real-time analytics and reporting\n- Integrations with ERP, HRMS, payroll, and accounting tools\n\nThe EnKash Expense Management System offers all these features in one unified platform so finance teams can reduce manual work, close books faster, and maintain complete visibility into company spending.",
      },
    ],
  },
  {
    question: "Can expense management systems reduce fraud and misuse?",
    answerHTML: (
      <div>
        <p>
          {"Yes. A modern"}
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/expense-tracking`}
            rel="noopener noreferrer"
            target="_blank"
          >
            expense management
          </Link>
          {
            " system significantly reduces fraud, policy violations, and misuse by adding automation, visibility, and real-time controls. It prevents duplicate claims, incorrect reimbursements, and unapproved spending."
          }
        </p>
        <p>Key ways an expense management system reduces fraud include:</p>
        <ul>
          <li>Automated receipt verification with OCR</li>
          <li>Policy checks before expenses are submitted</li>
          <li>Real-time spend limits and budget controls</li>
          <li>Role-based approvals and audit trails</li>
          <li>Duplicate claim detection</li>
          <li>GST-ready records for accurate tax compliance</li>
          <li>Centralized petty cash and UPI-based expense logs</li>
        </ul>
        <p>
          With the EnKash Expense Management System, finance teams can catch
          anomalies early, eliminate manual errors, and maintain strong internal
          controls across every expense category.
        </p>
      </div>
    ),
  },
  {
    question:
      "Is payroll reconciliation easier with automated expense management?",
    answerHTML: (
      <div>
        <p>
          {
            "Yes. Automated expense management speeds up payroll reconciliation by syncing"
          }
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/employee-expense-reimbursement`}
            rel="noopener noreferrer"
            target="_blank"
          >
            reimbursements,
          </Link>
          {
            " removing manual work, and improving accuracy. EnKash makes this process seamless for growing businesses."
          }
        </p>
      </div>
    ),
  },
  {
    question:
      "How does real-time analytics in expense management software improve financial decision-making?",
    answer: [
      {
        heading:
          "The system offers live dashboards showing budget vs. actuals, category-wise spends, user behavior, and forecasted trends—helping businesses make data-driven decisions.",
      },
    ],
  },
  {
    question: " How does EnKash help with GST compliance?",
    answerHTML: (
      <div>
        <p>
          {"EnKash auto-captures "}
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/understanding-cgst-sgst-and-igst-exploring-the-full-form-and-significance`}
            rel="noopener noreferrer"
            target="_blank"
          >
            GST breakup (CGST, SGST, IGST)
          </Link>
          {"  validates"}
          <Link
            className="mx-1"
            href={`${process.env.NEXT_PUBLIC_URL}/resources/blog/gstin-registration-guide`}
            rel="noopener noreferrer"
            target="_blank"
          >
            GSTINs,
          </Link>
          {
            "and stores input credit data, making your tax filings audit-ready and accurate."
          }
        </p>
      </div>
    ),
  },
]

export const SecondfaqData = [
  {
    question: "ERP Integrations",
    answer: [
      {
        heading:
          "Seamlessly connect EnKash EMS with leading ERPs like SAP and Oracle to automate expense syncing, approvals, and financial reconciliation.",
      },
    ],
  },
  {
    question: "HRMS & Payroll Sync",
    answer: [
      {
        heading:
          "Integrate with HRMS platforms like Workday to auto-sync employee data, roles, and departments, and streamline payroll-linked reimbursements.",
      },
    ],
  },
  {
    question: "Accounting Tools Integration",
    answer: [
      {
        heading:
          "Sync expenses with accounting tools like Zoho Books, Tally, or QuickBooks for faster ledger entries and simplified financial reporting.",
      },
    ],
  },
  {
    question: "API & Webhooks",
    answer: [
      {
        heading:
          "Easily connect EnKash EMS to your systems via robust APIs for real-time sync of expenses and approvals.",
      },
    ],
  },
  {
    question: "Automated Journal Entry Mapping",
    answer: [
      {
        heading:
          "Automatically map expenses to correct journal entries using business rules, saving hours in reconciliation and reducing accounting errors.",
      },
    ],
  },
  {
    question: "Custom Field Mapping That Fits Your Books",
    answer: [
      {
        heading:
          "Map custom fields to your general ledger (GL) codes with precision—ensuring every expense aligns with your accounting policies.",
      },
    ],
  },
]
