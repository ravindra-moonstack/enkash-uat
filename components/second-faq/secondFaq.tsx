import styles from "./faq.module.scss"
import Image from "next/image"
import arrowDown from "./img/arrow-down.svg"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

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
  // No need for local state, use parent state

  // Handle hover and click
  const handleToggle = () => {
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

                borderRadius: "12px",
                transition: "all 0.3s ease",
              }
            : {}
        }
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
        onClick={handleToggle}
        tabIndex={0} // for accessibility, allows keyboard focus
        role="button"
        aria-expanded={answerVisible}
      >
        <div className={`d-flex gap-4 mb-3 align-items-center`}>
          <Image
            src={arrowDown}
            alt="faq arrow icon"
            className={`${answerVisible ? styles.rotated : styles.normal} ${
              styles.arrow
            }`}
            // Remove onClick here, handled by parent div
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
