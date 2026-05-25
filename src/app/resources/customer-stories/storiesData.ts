export interface CaseStudy {
  slug: string;
  meta: {
    title: string;
    metaTitle: string;
    metaDescription: string;
  };
  title: string;
  category: string;
  industry: string;
  location: string;
  employeeSize: string;
  featuredMetrics: string[];
  hero: {
    heading: string;
    subheading: string;
    clientQuote: {
      quote: string;
      author: string;
    };
  };
  about: string;
  challenges: {
    title: string;
    description: string;
  }[];
  challengesIntro?: string;
  solutions: {
    title: string;
    description: string;
  }[];
  businessImpact: {
    title: string;
    description: string;
  }[];
  keyFeatures: string[];
  finalOutcome: string;
  ctaText?: string;
  ctaButtonText?: string;
  resultsBullets?: string[];
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "vianet-achieves-40-improvement-in-business-processes-up-to-50-cost-savings-using-enkash-olympus": {
    slug: "vianet-achieves-40-improvement-in-business-processes-up-to-50-cost-savings-using-enkash-olympus",
    meta: {
      title: "From Manual to Fully Accurate: Vianet’s 100% Accuracy and Efficiency Gains with EnKash",
      metaTitle: "Vianet Achieves 40% Improvement in Business Processes with EnKash",
      metaDescription: "Discover how Vianet improved business process efficiency by 40%, achieved 100% accounting accuracy, and reduced operational costs by up to 50% using EnKash automation solutions.",
    },
    title: "From Manual to Fully Accurate: Vianet’s 100% Accuracy and Efficiency Gains with EnKash",
    category: "Case Study",
    industry: "Electronics",
    location: "Pune",
    employeeSize: "11 - 50",
    featuredMetrics: [
      "100% accuracy in accounting and auditing",
      "40%+ improvement in business processes proficiency",
      "Up to 50% cost savings through automation"
    ],
    hero: {
      heading: "From Manual to Fully Accurate: Vianet’s 100% Accuracy and Efficiency Gains with EnKash",
      subheading: "How Vianet automated collections, improved cash flow visibility, and streamlined financial operations with EnKash Olympus.",
      clientQuote: {
        quote: "We encountered significant challenges in our Accounts Receivables processes, as everything was handled manually, from sending reminders to managing outstanding invoices. However, with the implementation of EnKash, we experienced an outstanding transformation as our processes became fully automated. The results were remarkable: a substantial reduction in man-hours invested, achieving 100% accuracy in accounting and auditing tasks, and witnessing an impressive 40% improvement in overall process efficiency. Moreover, this automation led to significant cost savings.",
        author: "Deep Sehgal, Founder & CEO, Vianet"
      }
    },
    about: "Vianet is a Pune-based electronics distributor managing multiple customers, vendors, and inventory operations. As the business scaled, manual receivables and reconciliation processes began slowing down collections and affecting working capital efficiency. The organisation needed a centralized, automated financial workflow that could reduce operational delays, improve visibility, and support business growth without increasing administrative overhead.",
    challengesIntro: "Vianet was facing several difficulties in managing its collections and receivables:",
    challenges: [
      {
        title: "Decentralised and inconsistent budget management : ",
        description: "Budgeting was managed separately by departments and verticals without a centralised framework, making it difficult to maintain control, assign clear accountability, and track spending accurately."
      },
      {
        title: "Limited visibility into budget status:",
        description: "Finance teams and department heads did not have a consolidated view of allocations, utilisation, and pending approvals, leading to slower decisions and operational bottlenecks."
      },
      {
        title: "Constraints in managing urgent expenses:",
        description: "Short-term cash flow limitations made it challenging to address unforeseen or time-sensitive expenses without affecting ongoing operations."
      },
      {
        title: "Manual and error-prone reconciliation processes:",
        description: "Reconciliation relied heavily on manual work, increasing the risk of inaccuracies, delaying closing cycles, and complicating audit readiness."
      },
      {
        title: "Inefficient receivables management and delayed collections:",
        description: "Collections depended on manual tracking and repeated follow-ups, consuming significant time, straining customer relationships, and still resulting in late payments. This led to an accumulation of unpaid invoices, disrupting cash flow and restricting the ability to restock inventory or accept new orders."
      }
    ],
    solutions: [
      {
        title: "Centralized and structured budget management:",
        description: "Budgeting was brought onto a single platform, organized by departments and verticals to reflect the company’s functional structure. This improved control, enabled clearer ownership, and simplified tracking across teams and business units."
      },
      {
        title: "Real-time visibility of department-wise budgets:",
        description: "A single dashboard was set up to give teams and finance heads access to live data on allocation, usage, and pending approvals, improving decision-making and accountability."
      },
      {
        title: "Flexible payments to manage short-term working capital:",
        description: "Credit card-based payments were enabled to handle urgent or unplanned expenses, offering operational flexibility without affecting cash flow."
      },
      {
        title: "Accurate, audit-ready reconciliation:",
        description: "Reconciliation was automated to reduce errors and ensure accurate, up-to-date records supporting smoother audits and closing cycles."
      }
    ],
    businessImpact: [
      {
        title: "100% Accuracy in Accounting & Auditing",
        description: "Automation reduced manual intervention and significantly improved accuracy across financial records and reporting."
      },
      {
        title: "40%+ Improvement in Business Process Efficiency",
        description: "Operational workflows became faster and more structured, reducing time spent on repetitive financial activities."
      },
      {
        title: "Up to 50% Cost Savings",
        description: "Automation minimized administrative effort, reduced man-hours, and lowered operational costs."
      },
      {
        title: "Faster Collections & Improved Liquidity",
        description: "Outstanding payments reduced considerably, improving cash flow and enabling smoother vendor and inventory management."
      },
      {
        title: "Better Working Capital Management",
        description: "Improved receivables tracking and payment visibility allowed the business to manage short-term capital requirements more effectively."
      }
    ],
    keyFeatures: [
      "Automated accounts receivable workflows",
      "Smart payment reminders with payment links",
      "Real-time DSO tracking",
      "Automated reconciliation and audit support",
      "Centralized financial dashboard",
      "Multi-mode payment support",
      "Budget monitoring and reporting"
    ],
    finalOutcome: "By implementing EnKash Olympus, Vianet transformed its finance operations from a manual, fragmented process into an automated and scalable ecosystem. The company achieved stronger financial control, faster collections, higher accounting accuracy, and improved operational efficiency while reducing costs significantly.",
    resultsBullets: [
      "Stronger budget discipline: Department and vertical-level budgets were monitored more effectively, ensuring planned allocation and controlled spending.",
      "Quicker decision cycles: Access to accurate, real-time financial data allowed leadership to act promptly on approvals and adjustments.",
      "Improved cash flow stability: The organisation was able to meet urgent funding needs without interrupting regular operations.",
      "Higher accuracy in financial reporting: Reconciliation errors were minimised, and records were consistently ready for audits.",
      "Faster collections and healthier liquidity: Payment delays reduced, outstanding invoices decreased, and funds were available for inventory replenishment and growth opportunities."
    ]
  },
  "honeycomb-creative-onboards-enkash-as-a-trusted-partner-for-streamlining-department-wise-payment-processes": {
    slug: "honeycomb-creative-onboards-enkash-as-a-trusted-partner-for-streamlining-department-wise-payment-processes",
    meta: {
      title: "100% Accuracy & Higher Efficiency: Honeycomb’s EnKash Story",
      metaTitle: "Honeycomb Creative Streamlines Department-Wise Payments with EnKash",
      metaDescription: "Learn how Honeycomb Creative improved payment visibility, streamlined approvals, and achieved 30% process efficiency using EnKash virtual cards and automation tools.",
    },
    title: "100% Accuracy & Higher Efficiency: Honeycomb’s EnKash Story",
    category: "Case Study",
    industry: "Advertising Services",
    location: "Bengaluru",
    employeeSize: "51–200",
    featuredMetrics: [
      "30% improvement in business process efficiency",
      "100% accuracy  in budgeting and payment tracking",
      "Unified dashboard replacing multiple disconnected systems"
    ],
    hero: {
      heading: "100% Accuracy & Higher Efficiency: Honeycomb’s EnKash Story",
      subheading: "How Honeycomb Creative streamlined department-wise budgeting, approvals, and payment tracking using EnKash Olympus.",
      clientQuote: {
        quote: "In integrated marketing communications, agencies need to allocate budgets for different verticals, which is one of our main challenges. To overcome this, we undertook EnKash’s services. Through EnKash’s virtual cards, we were able to manage our budget allocation for various departments, streamline approvals seamlessly, and control our short-term working capital efficiently. This enabled us to gain real-time visibility of all our department-wise expenses to our finance department.",
        author: "Noufel Anamala, Founder, Honeycomb Creative"
      }
    },
    about: "Honeycomb Creative is a Bengaluru-based integrated marketing communication agency serving clients across industries including lifestyle, IT, healthcare, pharmaceutical, manufacturing, and automotive sectors. Managing multiple departments and verticals made it increasingly difficult for the organization to maintain visibility and control over departmental budgets and payments.",
    challengesIntro: "Honeycomb Creative faced several challenges in managing its departmental budgets and payment processes:",
    challenges: [
      {
        title: "Disjointed Budgets - ",
        description: "Each department operated with separate budgets and payment cards, leaving no clear visibility into how money was being spent. This made it hard for the finance team to maintain overall control."
      },
      {
        title: "Slow Approval Workflows - ",
        description: "Getting approvals from department heads was time-consuming, which delayed vendor payments and affected smooth operations."
      },
      {
        title: "Managing Working Capital - ",
        description: "Handling daily cash flow took a lot of manual effort and created pressure when dealing with routine expenses."
      }
    ],
    solutions: [
      {
        title: "Virtual Cards for Every Department",
        description: "Each team was given its own virtual card with preset spending limits. This helped avoid overlap and made it easier to manage team-wise budgets while giving full visibility to finance."
      },
      {
        title: "Unified Dashboard",
        description: "A single, unified dashboard was introduced that all departments could access. This reduced back-and-forth, made approvals quicker, and gave real-time visibility into how budgets were being used."
      },
      {
        title: "Credit-Based Payment System",
        description: "Switching to credit-based payments helped manage short-term expenses more efficiently. It freed up working capital, made routine spending smoother, and reduced administrative effort."
      }
    ],
    businessImpact: [
      {
        title: "30% improvement in business process efficiency",
        description: "Automation and centralized workflows reduced operational delays and improved business efficiency."
      },
      {
        title: "100% accuracy  in budgeting and payment tracking",
        description: "Department-level spending became more transparent and accurate through automated monitoring systems."
      },
      {
        title: "Better Budget Control",
        description: "Separate department budgets and virtual cards enabled clearer ownership and financial accountability."
      },
      {
        title: "Improved Working Capital Management",
        description: "Short-term operational expenses became easier to manage without disrupting business cash flow."
      },
      {
        title: "Real-Time Visibility Across Departments",
        description: "Finance leaders gained complete visibility into approvals, spending, and budget utilization through a single dashboard."
      }
    ],
    keyFeatures: [
      "Department-wise virtual cards",
      "Unified finance dashboard",
      "Real-time expense visibility",
      "Automated approval workflows",
      "Credit-based payment management",
      "Budget allocation monitoring",
      "Centralized reporting system"
    ],
    finalOutcome: "With EnKash Olympus, Honeycomb Creative successfully transformed its fragmented financial operations into a centralized and efficient ecosystem. The company improved process visibility, streamlined approvals, optimized working capital usage, and achieved significantly higher operational efficiency across departments.",
    resultsBullets: [
      "Budget control became easier, with each team managing its own spending without confusion",
      "Department-wise expense visibility improved through a shared dashboard, making tracking simple and transparent",
      "Short-term expenses were shifted to virtual cards, easing pressure on working capital and improving cash flow",
      "Vertical-level budget oversight became more streamlined, reducing admin workload",
      "Day-to-day operations started running faster and more accurately, improving overall efficiency across the board"
    ]
  }
};
