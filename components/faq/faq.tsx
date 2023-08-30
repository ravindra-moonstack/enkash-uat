"use client";
import React, { useState } from "react";
import styles from "./faq.module.scss";
import H1 from "../heading/h1";
import H4 from "../heading/h4";
import { arrowDown } from ".";

interface FaqBulletPoint {
  text: string;
  subpoints?: string[];
}

interface FaqParagraph {
  text: string;
  bulletPoints?: FaqBulletPoint[];
}

interface FaqAnswer {
  paragraphs: FaqParagraph[];
}

interface FaqItem {
  question: string;
  answer: FaqAnswer;
}

interface faqData {
  heading: string;
  faqs: FaqItem[];
}

interface FaqProps {
  faqData: faqData;
}

const FaqComponent: React.FC<FaqProps> = ({ faqData }) => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null);
    } else {
      setActiveFaqIndex(index);
    }
  };

  return (
    <div className={styles.faq_page}>
      <H1 title="Got Questions?" color="equity-blue" />
      <div className="container mt-5 d-flex justify-content-center w-80">
        <div>
          <H4 title={faqData.heading} color="black" bold={true} />
          <div className={styles.customAccordion} id="faqAccordion">
            {faqData.faqs.map((faq, faqIndex) => (
              <div className={styles.accordionItem} key={faqIndex}>
                <div
                  className={styles.accordionHeader}
                  onClick={() => toggleFaq(faqIndex)}
                >
                  <button
                    className={`${styles.accordionButton} ${
                      activeFaqIndex === faqIndex ? styles.active : ""
                    }`}
                  >
                    {faq.question}
                    <span className={styles.arrowIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        className={`bi bi-chevron-${
                          activeFaqIndex === faqIndex ? "up" : "down"
                        }`}
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.293 8.293a1 1 0 0 1 1.414 0L8 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" />
                      </svg>
                    </span>
                  </button>
                </div>

                <div
                  className={`${styles.accordionCollapse} ${
                    activeFaqIndex === faqIndex ? styles.show : ""
                  }`}
                >
                  <div className={styles.accordionBody}>
                    {faq.answer.paragraphs.map((paragraph, paragraphIndex) => (
                      <div key={paragraphIndex}>
                        <p>{paragraph.text}</p>
                        {paragraph.bulletPoints && (
                          <ul>
                            {paragraph.bulletPoints.map(
                              (bullet, bulletIndex) => (
                                <li key={bulletIndex}>
                                  {bullet.text}
                                  {bullet.subpoints && (
                                    <ul>
                                      {bullet.subpoints.map(
                                        (subpoint, subpointIndex) => (
                                          <li key={subpointIndex}>
                                            {subpoint}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
