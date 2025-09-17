import { KeyboardEvent, useRef } from "react"
import Image from "next/image"

import styles from "./faq.module.scss"
import arrowDown from "./img/arrow-down.svg"
import { TFAQProps } from "@/src/types/faq"

const FAQ = ({
  question,
  index = 0,
  answer,
  answerVisible,
  answerHTML,
  onToggleAnswerVisibility,
}: TFAQProps) => {
  //

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      if (onToggleAnswerVisibility) onToggleAnswerVisibility()
    }
  }
  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      if (onToggleAnswerVisibility) {
        onToggleAnswerVisibility()
      }
    }, 300)
  }

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    if (answerVisible && onToggleAnswerVisibility) {
      timerRef.current = setTimeout(() => {
        onToggleAnswerVisibility()
        timerRef.current = null
      }, 200)
    }
  }
  const handleClick = () => {
    if (onToggleAnswerVisibility) {
      onToggleAnswerVisibility()
    }
  }

  return (
    <div className={styles.faq_row}>
      <div
        className={`${styles.faq_inner_row} ${answerVisible && "activeClass"} `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        tabIndex={0}
        role="button"
        aria-expanded={answerVisible}
      >
        <div
          className={`d-flex gap-4 my-md-4 my-2 justify-content-between align-items-center`}
        >
          <p className={`${styles.question} subHeading mb-0`}>
            {String(index + 1).padStart(2, "0")}. {question}
          </p>
          <Image
            src={arrowDown}
            alt="faq arrow icon"
            className={`${answerVisible ? styles.rotated : styles.normal} ${
              styles.arrow
            }`}
            draggable={false}
          />
        </div>
        <div
          className={`${styles.answer} ${
            answerVisible ? styles.visible : styles.reverse_visible
          }`}
        >
          {!answerHTML &&
            answer !== undefined &&
            answer.length > 0 &&
            answer.map((item, index) => (
              <div key={index} className="mb-4">
                {item.heading && <p>{item.heading}</p>}
                {item.bullets && item.bullets.length > 0 && (
                  <ul>
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>
                        <p>{bullet}</p>
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
  )
}

export default FAQ
