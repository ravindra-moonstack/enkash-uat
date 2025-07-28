"use client"

import { VoucherFaqData } from "@/src/app/vouchers/data/voucher-faq-data"

import { useState } from "react"
import FAQ from "../faq-new/faq"

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
  console.log("faqData:", VoucherFaqData)
  return (
    <div>
      {faqData?.faqData.map((item, index) => (
        <FAQ
          key={index}
          question={item.question}
          answer={item.answer}
          answerVisible={index === openFAQIndex}
          onToggleAnswerVisibility={() => handleToggleAnswerVisibility(index)}
          index={index}
        />
      ))}
    </div>
  )
}

export default VoucherFaqComponent
