"use client"

import { useState } from "react"
import styles from "./faq.module.scss"
import SECONDFAQ from "./secondFaq"

interface AnswerItem {
  heading: string
  bullets?: string[]
}

interface FAQItem {
  question: string
  answer: AnswerItem[]
}

interface SecondFaqHtmlProps {
  SecondfaqData: FAQItem[]
}

const TRANSITION_DURATION = 400 // match SCSS transition time in ms

const SecondFaqHtml: React.FC<SecondFaqHtmlProps> = ({ SecondfaqData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // current active question
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null) // question being shown

  const handleToggleAnswerVisibility = (index: number) => {
    if (index === visibleIndex) {
      // same question clicked → close it
      setVisibleIndex(null)
      setTimeout(() => setActiveIndex(null), TRANSITION_DURATION)
    } else {
      // different question clicked → close current, then open new
      setVisibleIndex(null)
      setTimeout(() => {
        setActiveIndex(index)
        setVisibleIndex(index)
      }, TRANSITION_DURATION)
    }
  }

  return (
    <div className={styles.faq_wrapper}>
      {SecondfaqData.map((item, index) => (
        <SECONDFAQ
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          answerVisible={index === visibleIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  )
}

export default SecondFaqHtml
