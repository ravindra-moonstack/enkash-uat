"use client"
import { useState } from "react"

import { VoucherFaqData } from "./voucher-faq-data"
import styles from "./page.module.scss"
import FAQ from "@/src/components/faq-new/faq"

interface VoucherFaqComponentProps {
  voucherName: string
}

const VoucherFaqComponent: React.FC<VoucherFaqComponentProps> = ({
  voucherName,
}) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const handleToggleAnswerVisibility = (index: number) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const faqData = VoucherFaqData[voucherName]

  const isScrollable = faqData?.faqData?.length > 5

  return (
    <div
      className={`${styles.faq_wrapper} ${
        isScrollable ? styles.scrollable : ""
      }`}
    >
      {faqData?.faqData.map((item, index) => (
        <FAQ
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

export default VoucherFaqComponent
