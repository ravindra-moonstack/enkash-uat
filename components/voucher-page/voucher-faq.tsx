"use client"

import { VoucherFaqData } from "@/app/vouchers/data/voucher-faq-data"
import FAQ from "@/components/faq/faq"
import { useState } from "react"

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

  return (
    <div>
      {faqData?.faqData.map((item, index) => (
        <FAQ
          key={index}
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
