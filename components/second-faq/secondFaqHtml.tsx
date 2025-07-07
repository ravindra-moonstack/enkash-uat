"use client"

import { useState } from "react"
import styles from "./faq.module.scss"
import SECONDFAQ from "./secondFaq"

interface AnswerItem {
  heading: string
}

interface FAQItem {
  question: string
  answer: AnswerItem[]
}

interface SecondFaqHtmlProps {
  SecondfaqData: FAQItem[]
}

const SecondFaqHtml: React.FC<SecondFaqHtmlProps> = ({ SecondfaqData }) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const handleToggleAnswerVisibility = (index: number) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className={`${styles.faq_wrapper} `}>
      {SecondfaqData.map((item, index) => (
        <SECONDFAQ
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  )
}

export default SecondFaqHtml
