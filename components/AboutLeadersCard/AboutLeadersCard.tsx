"use client"
import React, { useState } from "react"
import Image from "next/image"
import styles from "./AboutLeadersCard.module.scss"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import { hemant, linkDinIcon, naveen, yadvendra } from "."

interface BioLine {
  line: string
}

interface Leader {
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
        line: "With over 25 years of expertise in cards, payments, and financial technology, Naveen Bindal, cofounder of EnKash, has evolved as a business leader, guiding the company to a leadership position in spend management and payments since 2018. ",
      },
      {
        line: "Leveraging his technical and domain knowledge, Naveen has expanded EnKash’s business model across multiple industries, fueling growth through a SaaS-plus-transaction-processing approach. Before EnKash, Naveeb held key roles, including a decade at FirstData (now Fiserv) across multiple countries, Global CTO at PayU, where he developed a global payment gateway spanning 16 countries with over 400 payment methods, and Head of Product & Technology at Citrus Pay, advancing India’s digital payments ecosystem. His experience at Citibank and DBS Bank in Singapore further sharpened his financial infrastructure expertise. ",
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
        line: "With over two decades of experience in payments and fintech, Yadvebdra has been instrumental in driving EnKash’s growth since its launch in 2018.",
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

const LeadersSection: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null)

  return (
    <div className={`${styles.aboutLeaderSectionInner}`}>
      {/* Title */}
      <div className="row">
        <div className="col-md-12">
          <div className={`${styles.leaderHeading}`}>
            <DynamicHeading
              content={[
                { title: "Meet our ", color: "color-black" },
                { title: "Leaders", color: "color-equity-blue" },
              ]}
              headingTag="h2"
              className="f-6 text-center mb-4 mb-md-5"
            />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className={`${styles.leaderCardSection}`}>
        <div className="row ">
          {leaders.map((leader, index) => (
            <div className="col-md-4 px-md-4 mb-4 mb-md-0" key={index}>
              <div
                onMouseEnter={() => setSelectedLeader(leader)}
                onMouseLeave={() => setSelectedLeader(null)}
                className={`${styles.cards}`}
              >
                <div className={`${styles.cardImage}`}>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={400}
                    height={500}
                    className="object-cover"
                  />
                </div>
                <div className={`${styles.cardHeadding}`}>
                  <DynamicHeading
                    content={[{ title: leader.name, color: "color-black" }]}
                    headingTag="h4"
                    className="f-7"
                  />
                </div>
                <div className={`${styles.roles} subHeading`}>
                  <p>{leader.role}</p>
                </div>

                {/* Popup inside the card for hover */}
                {selectedLeader?.name === leader.name && (
                  <div className={`${styles.leaderPopupOuter}`}>
                    <div
                      className={`${styles.leaderPopupinner} animate-slideUp`}
                    >
                      <div className={`${styles.popupContentBox}`}>
                        <div className="max-w-auto">
                          <div className="row ">
                            <div className="col-md-4">
                              <div className={`${styles.popupLeftSide}`}>
                                <div className={`${styles.cardImage}`}>
                                  <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                  />
                                </div>
                                <div className={`${styles.cardHeadding}`}>
                                  <DynamicHeading
                                    content={[
                                      {
                                        title: leader.name,
                                        color: "color-black",
                                      },
                                    ]}
                                    headingTag="h5"
                                    className="f-5"
                                  />
                                </div>
                                <div className={`${styles.roles}`}>
                                  <p style={{ color: "#fff" }}>{leader.role}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className={`${styles.popupRightContent}`}>
                                <div className={`${styles.content} text-start`}>
                                  {leader.bio.map((item, i) => (
                                    <p key={i}>{item.line}</p>
                                  ))}
                                </div>
                                {leader.link && (
                                  <div className="mt-4 text-start">
                                    <a
                                      href={leader.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`${styles.linkDinIcon}`}
                                    >
                                      <Image
                                        src={linkDinIcon}
                                        alt="LinkedIn"
                                        width={40}
                                        height={40}
                                      />
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default LeadersSection
