"use client";

import { useState } from "react";
import styles from "./faq.module.scss";
import arrow from "./arrow.svg";
import Image from "next/image";
import arrowDown from "./img/arrow-down.png";

export interface faq {
  question: string;
  answer: {
    heading: string;
    bullets?: string[];
  };
}

const FAQ = ({ question, answer }: faq) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.faq_row} onClick={toggleAnswerVisibility}>
        <div className={styles.faq_inner_row}>
          <div className={`d-flex justify-content-between `}>
            <h3 className={styles.question}>{question}</h3>
            <Image
              src={arrowDown}
              alt="faq arrow icon"
              className={`${isAnswerVisible ? styles.rotated : styles.normal} ${
                styles.arrow
              }`}
            />
          </div>

          {isAnswerVisible && (
            <div
              className={`${styles.answer} ${
                isAnswerVisible ? styles.visible : ""
              }`}
            >
              <h4 className={styles.heading}>{answer.heading}</h4>
              {answer.bullets && (
                <ul>
                  {answer.bullets.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
