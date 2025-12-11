"use client"

import FAQ from "@/src/components/faq-new/faq"

import { memo, useState } from "react"
import styles from "./faq.module.scss" // Create this for styling
import { TFAQProps } from "@/src/types/faq"

interface FAQHtmlProps {
  faqData: Omit<
    TFAQProps,
    "index" | "answerVisible" | "onToggleAnswerVisibility"
  >[]
}

const FAQHtml: React.FC<FAQHtmlProps> = ({ faqData }) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const handleToggleAnswerVisibility = (index: number) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className={`${styles.faq_wrapper} `}>
      {faqData.map((item, index) => (
        <FAQ
          key={index}
          index={index}
          question={item.question}
          answerHTML={item.answerHTML}
          answer={item.answer}
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
        />
      ))}
    </div>
  )
}

export default memo(FAQHtml)
