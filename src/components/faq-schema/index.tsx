"use client"
import { useEffect } from "react"
import { TFAQProps } from "@/src/types/faq"

interface FAQSchemaProps {
  faqData: TFAQProps[]
}

const FAQSchema = ({ faqData }: FAQSchemaProps) => {
  useEffect(() => {
    if (!faqData || faqData.length === 0) return

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: (faq.answer || []).map((a) => a.heading).join(" "),
        },
      })),
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.innerHTML = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [faqData])

  return null
}

export default FAQSchema
