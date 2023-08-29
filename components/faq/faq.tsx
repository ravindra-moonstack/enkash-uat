"use client"
import React, { useState } from 'react';
import styles from "./faq.module.scss";


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
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };
  return (
    <div className={styles.faq_page}>
      <h1 className='text-center'>GOT QUESTIONS?</h1>
    <div className="container mt-5 d-flex justify-content-center">
      <div className='w-80'>
        <h2 className="text-center">{faqData.heading}</h2>
        <div className="accordion mt-4" id="faqAccordion">
          {faqData.faqs.map((faq, faqIndex) => (
            <div className="accordion-item" key={faqIndex}>
              <h3 className="accordion-header" onClick={() => toggleFaq(faqIndex)}>
                <button className={`accordion-button ${activeFaqIndex === faqIndex ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faqCollapse${faqIndex}`}>
                  {faq.question}
                </button>
              </h3>
              <div id={`faqCollapse${faqIndex}`} className={`accordion-collapse collapse ${activeFaqIndex === faqIndex ? 'show' : ''}`}>
                <div className="accordion-body">
                  {faq.answer.paragraphs.map((paragraph, paragraphIndex) => (
                    <div key={paragraphIndex}>
                      <p>{paragraph.text}</p>
                      {paragraph.bulletPoints && (
                        <ul>
                          {paragraph.bulletPoints.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>
                              {bullet.text}
                              {bullet.subpoints && (
                                <ul>
                                  {bullet.subpoints.map((subpoint, subpointIndex) => (
                                    <li key={subpointIndex}>
                                      {subpoint}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
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

