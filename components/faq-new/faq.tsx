import styles from "./faq.module.scss"
import Image from "next/image"
import arrowDown from "./img/arrow-down.svg"
import { KeyboardEvent } from "react"

export interface FAQProps {
  question: string
  answerHTML?: React.ReactNode
  answer?: {
    heading?: string
    bullets?: string[]
  }[]
  answerVisible?: boolean
  onToggleAnswerVisibility?: () => void
  index: number
}

const FAQ = ({
  question,
  index,
  answer,
  answerVisible,
  answerHTML,
  onToggleAnswerVisibility,
}: FAQProps) => {
  //

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      if (onToggleAnswerVisibility) onToggleAnswerVisibility()
    }
  }

  // handle click (instant toggle if clicked)
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
                padding: "20px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
              }
            : {}
        }
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        tabIndex={0} // for accessibility, allows keyboard focus
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
            // Remove onClick here, handled by parent div
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
