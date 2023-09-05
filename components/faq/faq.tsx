"use client";
import React, { useState } from "react";
import styles from "./faq.module.scss";
import Heading from "../heading/heading";
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
      <div className={styles.faq_page_title}>
        <Heading title="Got Questions?" color="equity-blue" size="h1" />
      </div>
      <div
        className={`container mt-5 d-flex justify-content-center ${styles.faq_container}`}
      >
        <div>
          <div className={styles.faq_heading}>
            <Heading title={faqData.heading} color="black" size="h4" />
          </div>
          <div className={styles.faq_list} id="faq_list">
            {faqData.faqs.map((faq, faqIndex) => (
              <div
                className={styles.faq_item}
                key={faqIndex}
                onClick={() => toggleFaq(faqIndex)}
              >
                <div className={styles.faq_header}>
                  <div className={styles.faq_question}>
                    <Heading title={faq.question} color="black" size="h4" />
                    <div
                      className={`${
                        activeFaqIndex === faqIndex ? styles.active : ""
                      }`}
                    >
                      <span className={styles.arrowIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          fill="currentColor"
                          className="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.646 5.646a.5.5 0 0 1 .708 0L8 9.293l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.faq_collapse } ${
                    activeFaqIndex === faqIndex ? styles.show : ""
                  }`}
                >
                  <div className={styles.faq_body}>
                    {faq.answer.paragraphs.map((paragraph, paragraphIndex) => (
                      <div key={paragraphIndex}>
                        <Heading
                          title={paragraph.text}
                          color="black"
                          size="h5"
                        />
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
