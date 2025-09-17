"use client"
import { useState } from "react"

import styles from "./faq.module.scss"
import SECONDFAQ from "./secondFaq"
import { TFAQProps } from "@/src/types/faq"

interface SecondFaqHtmlProps {
  SecondfaqData: TFAQProps[]
}

const TRANSITION_DURATION = 400

const SecondFaqHtml: React.FC<SecondFaqHtmlProps> = ({ SecondfaqData }) => {
  //

  const [, setActiveIndex] = useState<number | null>(null)
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null)

  const handleToggleAnswerVisibility = (index: number) => {
    if (index === visibleIndex) {
      setVisibleIndex(null)
      setTimeout(() => setActiveIndex(null), TRANSITION_DURATION)
    } else {
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
