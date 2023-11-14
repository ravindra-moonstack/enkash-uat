"use client";

import { useState } from "react";
import styles from "./faq.module.scss";
import Image from "next/image";
import arrowDown from "./img/arrow-down.png";

export interface faq {
  question: string;
  answerHTML?: any;
  answer?: {
    heading?: string;
    bullets?: string[];
  }[];
  answerVisible?: boolean;
}

const FAQ = ({ question, answer, answerVisible, answerHTML }: faq) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(answerVisible);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.faq_row}>
        <div className={styles.faq_inner_row}>
          <div className={`d-flex justify-content-between `}>
            <h3 className={styles.question}>{question}</h3>
            <Image
              onClick={toggleAnswerVisibility}
              src={arrowDown}
              alt="faq arrow icon"
              className={`${isAnswerVisible ? styles.rotated : styles.normal} ${
                styles.arrow
              }`}
            />
          </div>

          <div
            className={`${styles.answer} ${
              isAnswerVisible ? styles.visible : ""
            }`}
          >
            {!answerHTML &&
              answer !== undefined &&
              answer.map((item, index) => (
                <div key={index} className="mb-4">
                  {item.heading && (
                    <h4 className={styles.heading}>{item.heading}</h4>
                  )}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul>
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>
                          <h4 className={styles.heading}>{bullet}</h4>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            {answerHTML && <>{answerHTML}</>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
