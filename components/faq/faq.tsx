"use client";

import { useState } from "react";
import styles from "./faq.module.scss";
import Image from "next/image";
import arrowDown from "./img/arrow-down.png";

export interface faq {
  question: string;
  answer: {
    heading: string;
    bullets?: string[];
  };
  answerVisible?: boolean;
}

const FAQ = ({ question, answer, answerVisible }: faq) => {
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
            <h4 className={styles.heading}>{answer.heading}</h4>
            {answer.bullets && (
              <ul>
                {answer.bullets.map((item, index) => (
                  <li key={index}>
                    <h4 className={styles.heading}>{item}</h4>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
