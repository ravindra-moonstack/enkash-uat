import { hemant, naveen, yadvendra } from "./img"

interface BioLine {
  line: string
}

export type Leader = {
  name: string
  role: string
  image: string
  bio: BioLine[]
  link?: string
}

const leaders: Leader[] = [
  {
    name: "Hemant Vishnoi",
    role: "Co-Founder",
    image: hemant.src,
    bio: [
      {
        line: "With over two decades of experience in digital payments and financial services, Hemant Vishnoi has been instrumental in building EnKash into one of India’s leading financial infrastructure platforms since its inception in 2018.",
      },
      {
        line: "Prior to founding EnKash, Hemant held leadership roles at Citrus Pay, PayU, MoneyGram, First Data India, and ICICI Bank, carrying deep industry insights that helped shape EnKash’s growth trajectory and long-term strategy. Under his leadership, EnKash has empowered thousands of businesses, forged strategic partnerships with top banks, secured key regulatory licenses, and established itself as a trusted name in the fintech ecosystem, making financial automation more accessible, efficient, and secure. ",
      },
      {
        line: "Driven by a bold vision for innovation and scale, Hemant continues to lead EnKash’s expansion—strengthening partnerships, accelerating growth, and scaling operations across India and beyond, paving the way for the future of business finance.",
      },
    ],
    link: "https://www.linkedin.com/in/hemantvishnoi/",
  },
  {
    name: "Naveen Bindal",
    role: "Co-Founder",
    image: naveen.src,
    bio: [
      {
        line: "With over 25 years of expertise in cards, payments, and financial technology, Naveen Bindal, cofounder of EnKash, has evolved as a business leader, guiding the company to a leadership position in spend management and payments since 2018. ",
      },
      {
        line: "Leveraging his technical and domain knowledge, Naveen has expanded EnKash’s business model across multiple industries, fueling growth through a SaaS-plus-transaction-processing approach. Before EnKash, Naveen held key roles, including a decade at FirstData (now Fiserv) across multiple countries, Global CTO at PayU, where he developed a global payment gateway spanning 16 countries with over 400 payment methods, and Head of Product & Technology at Citrus Pay, advancing India’s digital payments ecosystem. His experience at Citibank and DBS Bank in Singapore further sharpened his financial infrastructure expertise. ",
      },
      {
        line: "At EnKash, he drives innovation and scalability, enabling SMEs and startups with seamless corporate credit cards and expense management solutions, while pursuing a vision to streamline business payments and enhance financial accessibility in the evolving fintech landscape.",
      },
    ],
    link: "https://www.linkedin.com/in/naveenbindal/",
  },
  {
    name: "Yadvendra Tyagi",
    role: "Co-Founder",
    image: yadvendra.src,
    bio: [
      {
        line: "With over two decades of experience in payments and fintech, Yadvendra has been instrumental in driving EnKash’s growth since its launch in 2018.",
      },
      {
        line: "Before EnKash, he held leadership roles at Citrus Payment Solutions (a founding member until its acquisition by PayU), PayU, NPCI (where he helped launch RuPay cards), and HDFC Bank, bringing deep expertise in digital payments and financial infrastructure. Recognizing the unmet financial needs of SMEs and startups, he has focused on streamlining B2B payments and corporate card solutions, making financial automation more accessible, scalable, and efficient.",
      },
      {
        line: "With a customer-first approach, Yadvendra continues to lead EnKash’s mission of simplifying payments, expenses, and financial operations, empowering businesses to thrive in an increasingly digital economy.",
      },
    ],
    link: "https://www.linkedin.com/in/yadvendratyagi/",
  },
]

export { leaders }
