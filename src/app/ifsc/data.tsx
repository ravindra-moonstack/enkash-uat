import { TFAQProps } from "@/src/types/faq"
import first from "../../../public/svgs/gst-first-icon.svg"
import second from "../../../public/svgs/gst-second-icon.svg"
import third from "../../../public/svgs/gst-third-icon.svg"
import fourth from "../../../public/svgs/gst-fourth-icon.svg"

export const gstData = [
  {
    icon: first,
    type: "CGST (Central GST)",
    description: "Collected on intra-state supplies",
    leviedBy: "CGST (Central GST)",
  },
  {
    icon: second,
    type: "SGST (State GST)",
    description: "Collected on intra-state supplies",
    leviedBy: "State Government",
  },
  {
    icon: third,
    type: "IGST (Integrated GST)",
    description: "Applied to inter-state supplies & imports",
    leviedBy: "Central Government",
  },
  {
    icon: fourth,
    type: "UTGST (Union Territory GST)",
    description: "Applied in Union Territories",
    leviedBy: "Union Territory Administration",
  },
]

export const newGstData = [
  {
    type: "0%",
    description:
      "Essentials Goods, health/life insurance, and some life-saving drugs",
  },
  {
    type: "5%",
    description:
      "Every day, essential goods and services used by most households, such as food grains and medicines.",
  },
  {
    type: "18%",
    description:
      "Standard goods and services, including electronics and home appliances like TVs and air conditioners.",
  },
  {
    type: "40%",
    description:
      "Luxury and sin goods, such as tobacco products and luxury cars.",
  },
]

export const oldGstData = [
  {
    type: "0%",
    description: "Fresh produce, milk, books, and education services",
  },
  {
    type: "5%",
    description:
      "Essentials like rail tickets, edible oils, and clothing below ₹ 1,000",
  },
  {
    type: "12%",
    description: "Processed foods, mobile phones, and computers",
  },
  {
    type: "18%",
    description:
      "Financial services, electronics, consulting services, and restaurant meals",
  },
  {
    type: "28%",
    description: "Luxury cars, tobacco, pan masala, and sin goods",
  },
]

export const goodsAndServiceData = [
  {
    title: "1. Central Goods and Services Tax (CGST)",
    description:
      "CGST is imposed by the Central Government on the intra-state supply of goods and services. It is collected along with SGST, and both taxes are charged at equal rates on the same transaction value.",
  },
  {
    title: "2. State Goods and Services Tax (SGST)",
    description:
      "SGST is levied by the State Government on intra-state sales of goods and services. The revenue collected through SGST directly benefits the respective state, ensuring local development and fair distribution of tax proceeds.",
  },
  {
    title: "3. Integrated Goods and Services Tax (IGST)",
    description:
      "IGST is applied on inter-state transactions of goods and services, including imports into India. The Central Government collects IGST and later distributes the revenue between the Centre and destination states to avoid double taxation.",
  },
  {
    title: "4. Union Territory Goods and Services Tax (UTGST)",
    description:
      "UTGST is applicable to the intra-territory supply of goods and services within India’s Union Territories, such as Delhi, Chandigarh, and Puducherry. It functions like SGST but is governed by the Union Territory administration instead of a state government.",
  },
]

export const faqData: TFAQProps[] = [
  {
    question: "What is the full form of GST?",
    answer: [
      {
        heading:
          "GST stands for Goods and Services Tax, a unified indirect tax system in India introduced on 1 July 2017. It replaced multiple state and central taxes to create a single national tax framework.",
        bullets: [],
      },
    ],
  },
  {
    question: "How many types of GST are there in India?",
    answer: [
      {
        heading:
          "There are four types of GST in India — CGST, SGST, IGST, and UTGST. Each applies differently based on whether the transaction happens within a state or across states or union territories.",
        bullets: [],
      },
    ],
  },
  {
    question: "What are the current GST rates in India (2025)?",
    answer: [
      {
        heading:
          "The GST rates are divided into five main slabs — 0%, 5%, 12%, 18%, and 28%. Essential items like milk are at 0%, most services fall under 18%, while luxury goods attract 28% plus cess.",
        bullets: [],
      },
    ],
  },
  {
    question: "Who must register for GST in India?",
    answer: [
      {
        heading:
          "Any business with an annual turnover above ₹40 lakhs (goods) or ₹20 lakhs (services) must register for GST. For Northeastern and hilly states, the limit is ₹20 lakhs and ₹10 lakhs, respectively.",
        bullets: [],
      },
    ],
  },
  {
    question: "How do I calculate GST on a product or service?",
    answer: [
      {
        heading:
          "You can use this formula: GST Amount = (Original Cost × GST Rate) / 100",
        bullets: [
          "Example: ₹10,000 at 18% GST = ₹1,800.",
          "Our Free GST Calculator does this instantly with accurate CGST–SGST–IGST splits.",
        ],
      },
    ],
  },
  {
    question: "What is the difference between CGST, SGST, and IGST?",
    answer: [
      {
        heading:
          "CGST & SGST are levied on intra-state supplies and shared between the Centre and State. IGST applies to inter-state supplies or imports and is collected by the Central Government.",
        bullets: [],
      },
    ],
  },
  {
    question: "What are GST-inclusive and GST-exclusive prices?",
    answer: [
      {
        heading:
          "GST-Inclusive Price: The tax is already included in the displayed price.",
        bullets: [
          "GST-Exclusive Price: GST is added separately to the base amount before billing.",
        ],
      },
    ],
  },
  {
    question: "How to calculate reverse GST?",
    answer: [
      {
        heading:
          "To calculate reverse GST, select the applicable GST rate and enter the GST-inclusive amount. The calculator automatically derives the tax-free base value and GST amount, helping businesses handle reverse charge transactions correctly.",
        bullets: [],
      },
    ],
  },
  {
    question: "What is the GST rate for freelancers in India?",
    answer: [
      {
        heading:
          "Most freelancing and professional services attract 18% GST. Freelancers providing digital or consulting services should register under GST if their annual income exceeds ₹20 lakhs (₹10 lakhs in special category states).",
        bullets: [],
      },
    ],
  },
  {
    question: "Is GST mandatory for small businesses and startups?",
    answer: [
      {
        heading:
          "Yes, if your turnover exceeds the prescribed limit or you sell goods/services interstate, online, or through e-commerce platforms, GST registration becomes mandatory, even for small businesses and startups.",
        bullets: [],
      },
    ],
  },
  {
    question: "How to file GST returns in India?",
    answer: [
      {
        heading:
          "GST returns can be filed online on the GST Portal. Registered businesses must submit monthly or quarterly returns like GSTR-1, GSTR-3B, and annual returns such as GSTR-9.",
        bullets: [],
      },
    ],
  },
  {
    question: "What happens if I don’t pay or file GST on time?",
    answer: [
      {
        heading:
          "Delayed GST filing attracts a late fee of ₹50 per day (₹20 for nil returns) and 18% interest per annum on the unpaid tax amount, as per CBIC guidelines.",
        bullets: [],
      },
    ],
  },
  {
    question: "What are the exempted and zero-rated GST items?",
    answer: [
      {
        heading:
          "Exempted goods/services: No GST applies, and input tax credit (ITC) is not allowed. Zero-rated supplies: GST rate is 0%, but ITC can be claimed (mainly exports and SEZ supplies).",
        bullets: [],
      },
    ],
  },
  {
    question: "What is the HSN code in GST?",
    answer: [
      {
        heading:
          "HSN (Harmonized System of Nomenclature) is an 8-digit code used to classify goods under GST. It ensures consistent tax classification across India and is mandatory for registered businesses.",
        bullets: [],
      },
    ],
  },
  {
    question:
      "Can I use the GST Calculator for both inclusive and exclusive amounts?",
    answer: [
      {
        heading:
          "Yes. EnKash’s GST Calculator can calculate both inclusive and exclusive GST values. Just select the correct option, and it automatically provides the breakdown for base price, tax, and total value.",
        bullets: [],
      },
    ],
  },
  {
    question: "What is the GST rate on gold, silver, and jewellery?",
    answer: [
      {
        heading:
          "Gold and silver attract 3% GST, while making charges on jewellery are taxed separately at 5% under the services category.",
        bullets: [],
      },
    ],
  },
  {
    question: "What are the composition scheme limits under GST?",
    answer: [
      {
        heading:
          "Small businesses with turnover up to ₹1.5 crore (₹75 lakh for NE states) can opt for the composition scheme and pay tax at a fixed lower rate instead of regular GST filings.",
        bullets: [],
      },
    ],
  },
  {
    question: "How to check my GST registration or GSTIN number?",
    answer: [
      {
        heading:
          "You can verify your GSTIN (Goods and Services Tax Identification Number) on the official GST portal using your PAN, business name, or registration ID.",
        bullets: [],
      },
    ],
  },
  {
    question: "Is GST applicable to digital payments and fintech services?",
    answer: [
      {
        heading:
          "Yes, most fintech and digital payment services attract 18% GST, as they fall under professional or digital service categories regulated by RBI and the GST Council.",
        bullets: [],
      },
    ],
  },
  {
    question: "Can I export goods or services without paying GST?",
    answer: [
      {
        heading:
          "Yes. Exports and supplies to SEZ units are treated as zero-rated, allowing you to claim a refund on input tax credit or export without paying GST under a Letter of Undertaking (LUT).",
        bullets: [],
      },
    ],
  },
]
