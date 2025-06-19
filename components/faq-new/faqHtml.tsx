"use client"

import FAQ, { FAQProps } from "@/components/faq-new/faq"
import { useState } from "react"

interface FAQHtmlProps {
  faqData: Omit<
    FAQProps,
    "index" | "answerVisible" | "onToggleAnswerVisibility"
  >[]
}

const FAQHtml: React.FC<FAQHtmlProps> = ({ faqData }) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const handleToggleAnswerVisibility = (index: number) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div>
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

export default FAQHtml
