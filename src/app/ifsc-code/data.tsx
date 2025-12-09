import { TFAQProps } from "@/src/types/faq"
import first from "../../../public/svgs/gst-first-icon.svg"
import second from "../../../public/svgs/gst-second-icon.svg"
import third from "../../../public/svgs/gst-third-icon.svg"
import fourth from "../../../public/svgs/gst-fourth-icon.svg"
import pnbLogo from "../../../public/images/pnbLogo.svg"
import sbiLogo from "../../../public/images/sbiLogo.svg"
import bobLogo from "../../../public/images/bobLogo.svg"
import boiLogo from "../../../public/images/boiLogo.svg"
import axisLogo from "../../../public/images/axisBank.svg"
import paymentBankLogo from "../../../public/images/paymentBankLogo.svg"

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
    question: "How to check the IFSC code?",
    answer: [
      {
        heading:
          "You can check the IFSC code on your bank's passbook, cheque book, or on the bank's website. It's also available through online IFSC code finders.",
        bullets: [],
      },
    ],
  },
  {
    question: "How to find the IFSC code?",
    answer: [
      {
        heading:
          "Visit your bank's official website or use an IFSC code search tool. You can also find it printed on cheques and bank statements.",
        bullets: [],
      },
    ],
  },
  {
    question: "How to find the IFSC code from the account number?",
    answer: [
      {
        heading:
          "You can't get the IFSC code directly from the account number, but you can find it using your bank name, branch, or city via an IFSC code lookup tool.",
        bullets: [],
      },
    ],
  },
  {
    question: "Are IFSC code and SWIFT code the same?",
    answer: [
      {
        heading:
          "No. The IFSC code is used for domestic transfers within India, while the SWIFT code is used for international transactions.",
        bullets: [],
      },
    ],
  },
  {
    question: "How to find HDFC IFSC code?",
    answer: [
      {
        heading:
          "You can find the HDFC Bank IFSC code on the cheque book, passbook, or you can get the IFSC Code by visiting the HDFC Bank IFSC search page online.",
        bullets: [],
      },
    ],
  },
  {
    question: "How many digits does an IFSC code have?",
    answer: [
      {
        heading:
          "An IFSC code consists of 11 characters — the first 4 represent the bank, the fifth is always zero, and the last 6 identify the branch.",
        bullets: [],
      },
    ],
  },
  {
    question: "Where is the IFSC code written?",
    answer: [
      {
        heading:
          "The IFSC code is printed on the top of your cheque leaf and on the first page of your passbook. It also appears in the net banking account details.",
        bullets: [],
      },
    ],
  },
  {
    question: "How to find MICR code?",
    answer: [
      {
        heading:
          "The MICR code is printed at the bottom of cheques beside the cheque number. It can also be found on your passbook or bank website.",
        bullets: [],
      },
    ],
  },
  {
    question: "What should I do if I transferred money to the wrong account?",
    answer: [
      {
        heading:
          "Immediately contact your bank and raise a written complaint. The bank will verify the details and may initiate a reversal process if the funds haven't been claimed.",
        bullets: [],
      },
    ],
  },
  {
    question: "What is the IFSC code of SBI?",
    answer: [
      {
        heading:
          "The State Bank of India (SBI) Head Office, Head office, is situated at Madame Cama Road, Nariman Point, Mumbai – 400021, Maharashtra. Its IFSC code is SBININBB104, the MICR code is 400002087, and the SWIFT code for international transfers is SBININBB. This IFSC code is used to carry out NEFT, RTGS, and IMPS transactions to SBI's main branch.",
        bullets: [],
      },
    ],
  },
  {
    question: "Are the CIF and IFSC codes are Same?",
    answer: [
      {
        heading:
          "No, there is a difference between the IFSC and CIF codes. While the IFSC (Indian Financial System Code) is used to identify a particular bank branch for online financial transfers like NEFT, RTGS, or IMPS, the CIF (client Information File) number is a unique identifier given to each client of a bank that holds their personal and account data. The bank branch is identified by the IFSC code, and the consumer is identified by the CIF code.",
        bullets: [],
      },
    ],
  },
  {
    question: "Are the branch code and IFSC Code the Same?",
    answer: [
      {
        heading:
          "No, there is a difference between the IFSC code and the branch code. The IFSC (Indian Financial System Code) is an 11-character alphanumeric code used for electronic fund transfers like NEFT, RTGS, and IMPS. The branch code is a unique number used to identify a particular bank branch. Both have different functions in banking, even though the branch code is represented by the final six digits of the IFSC code.",
        bullets: [],
      },
    ],
  },
]

// ... existing code ...

export const ifscData = [
  {
    bankLogo: pnbLogo,
    bankName: "Punjab National Bank",
    ifsc: "PUNB0928800",
    micr: "N/A",
    state: "Maharashtra",
    district: "Mumbai",
    branch: "Back Office Mumbai Cosca",
    address: `Pnb 7th, Tower-f Wing Cuffe Parade,\nMumbai, 400005`,
  },
  {
    bankLogo: sbiLogo,
    bankName: "State Bank of India",
    ifsc: "SBIN0000691",
    micr: "110002087",
    state: "Delhi",
    district: "New Delhi",
    branch: "New Delhi Main Branch",
    address: `11, Sansad Marg,\nNew Delhi - 110001`,
  },
  {
    bankLogo: boiLogo,
    bankName: "Bank of India",
    ifsc: "BKID0006059",
    micr: "110013075",
    state: "Delhi",
    district: "New Delhi",
    branch: "New Delhi Large Corporate",
    address: `Pti Building, 4, Sansad Marg,\nNew Delhi - 110001`,
  },
  {
    bankLogo: paymentBankLogo,
    bankName: "Airtel Payments Bank",
    ifsc: "AIRP0000001",
    micr: "N/A",
    state: "Haryana",
    district: "Gurgaon",
    branch: "Airtel Payments Bank Imps",
    address: `Airtel Center, Plot No-16,\nUdyog Vihar, Phase-4,\nGurgaon (Gurugram), Haryana`,
  },
  {
    bankLogo: axisLogo,
    bankName: "Axis Bank",
    ifsc: "UTIB0001366",
    micr: "110211101",
    state: "Haryana",
    district: "Gurgaon",
    branch: "Sector 57, Gurgaon",
    address: `Ground Floor, Shop No. G-01, G-02, G-03,\nBestech Central Square, Block G,\nSushant Lok Phase 2, Sector 57,\nGurgaon, Haryana, Pin 122101`,
  },
  {
    bankLogo: bobLogo,
    bankName: "Bank of Baroda",
    ifsc: "BARB0GURGAO",
    micr: "110012064",
    state: "Haryana",
    district: "Gurgaon",
    branch: "Gurgaon Main Branch",
    address: `Gurgaon Branch, Delhi Alwar Road,\nGurgaon, 122001`,
  },
]

export const bankCodesData = [
  {
    bankName: "Airtel Payments Bank",
    ifsc: "AIRP0000001",
    micr: "NA",
    swift: "NA",
  },
  {
    bankName: "Axis Bank",
    ifsc: "UTIB0000400",
    micr: "560211061",
    swift: "AXISINBB194",
  },
  {
    bankName: "Canara Bank",
    ifsc: "CNRB0005479",
    micr: "560015123",
    swift: "CNRBINBBLFD",
  },
  {
    bankName: "Citibank",
    ifsc: "CITI0000003",
    micr: "560037002",
    swift: "CITIINBI",
  },
  {
    bankName: "HDFC Bank",
    ifsc: "HDFC0000128",
    micr: "560240065",
    swift: "HDFCINBBGBH",
  },
  {
    bankName: "HSBC Bank",
    ifsc: "HSBC0400002",
    micr: "NA",
    swift: "NA",
  },
  {
    bankName: "IDBI Bank",
    ifsc: "IBKL0NEFT01",
    micr: "560259006",
    swift: "IBKLINBB008",
  },
  {
    bankName: "IndusInd Bank",
    ifsc: "INDB0000018",
    micr: "560234021",
    swift: "INDBINBBBGM",
  },
  {
    bankName: "Kotak Mahindra Bank",
    ifsc: "KKBK0000261",
    micr: "400485002",
    swift: "KKBKINBB",
  },
  {
    bankName: "Punjab National Bank",
    ifsc: "PUNB0112000",
    micr: "560024029",
    swift: "PUNBINBBBCY",
  },
  {
    bankName: "State Bank of India",
    ifsc: "SBIN00CARDS",
    micr: "560002021",
    swift: "SBININBB112",
  },
  {
    bankName: "Yes Bank",
    ifsc: "YESB0CMSNOC",
    micr: "561532028",
    swift: "YESBINBB",
  },
]
