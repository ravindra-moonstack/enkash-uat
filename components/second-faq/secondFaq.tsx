import styles from "./faq.module.scss"
import Image from "next/image"
import arrowDown from "./img/arrow-down.svg"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import {KeyboardEvent, useRef } from "react"

export interface FAQProps {
  question: string
  index: number
  answerHTML?: string
  answer?: {
    heading?: string
    bullets?: string[]
  }[]
  answerVisible?: boolean
  onToggleAnswerVisibility?: () => void
}

const SECONDFAQ = ({
  question,
  answer,
  answerVisible,
  answerHTML,
  onToggleAnswerVisibility,
}: FAQProps) => {

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
    }, 100)
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
      }, 0)
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
        className={`${styles.faq_inner_row} `}
        style={
          answerVisible
            ? {
                background: "#F6F6F6",

                borderRadius: "12px 12px 0px 0px",
                transition: "all 0.3s ease",
              }
            : {}
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        tabIndex={0} 
        role="button"
        aria-expanded={answerVisible}
      >
        <div className={`d-flex gap-4  align-items-center`}>
          <Image
            src={arrowDown}
            alt="faq arrow icon"
            className={`${answerVisible ? styles.rotated : styles.normal} ${
              styles.arrow
            }`}
       
            draggable={false}
          />
          <DynamicHeading
            content={[
              {
                title: question,
                color: "color-black subHeading",
              },
            ]}
            headingTag="p"
            className="f-5 mb-0"
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
                {item.heading && (
                  <p className={`mb-0`}>{item.heading}</p>
                )}
                {item.bullets && item.bullets.length > 0 && (
                  <ul>
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>
                        <p className={`mb-0`}>{bullet}</p>
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

export default SECONDFAQ
